import { LayoutNode, NodeOptions } from "./types"
import sync, { cancelSync } from "framesync"
import { applyTreeProjection, resetBox } from "./geometry/apply"
import { calcRelativeBox, updateBoxProjection } from "./geometry/calc"
import { BoundingBox, Box, RelativeBox } from "./geometry/types"
import { box, convertBoundingBox, projection } from "./geometry"

export function layoutNode(
    { onProjectionUpdate }: NodeOptions = {},
    parent?: LayoutNode
): LayoutNode {
    /**
     *
     */
    let layout: Box

    /**
     *
     */
    let layoutCorrected: Box

    /**
     *
     */
    let target: Box

    /**
     *
     */
    let relativeTarget: RelativeBox

    /**
     *
     */
    let projectionString = ""

    /**
     *
     */
    let removeFromParent: () => void

    /**
     *
     */
    let resolveRelativeToParent = false

    /**
     *
     */
    const children = new Set<LayoutNode>()

    /**
     *
     */
    function setBoundingBoxToTarget(
        target: Box | RelativeBox,
        { left, right, top, bottom }: Partial<BoundingBox>
    ) {
        target.x.min = left
        target.x.max = right
        target.y.min = top
        target.y.max = bottom
        node.scheduleUpdateProjection()
    }

    const node: LayoutNode = {
        parent,

        path: parent ? [...parent.path, parent] : [],

        depth: parent ? parent.depth + 1 : 0,

        projection: projection(),

        treeScale: { x: 1, y: 1 },

        addChild(node) {
            children.add(node)
            return () => children.delete(node)
        },

        /**
         *
         */
        scheduleUpdateProjection: parent
            ? parent.scheduleUpdateProjection
            : () => sync.preRender(node.updateProjection, false, true),

        /**
         *
         */
        updateProjection() {
            resetBox(layoutCorrected, layout)

            const prevProjectionString = projectionString
            const { x: prevTreeScaleX, y: prevTreeScaleY } = node.treeScale

            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */
            applyTreeProjection(layoutCorrected, node.treeScale, node.path)

            /**
             *
             */
            if (resolveRelativeToParent) {
                calcRelativeBox(
                    target,
                    parent.getTarget(),
                    relativeTarget,
                    layout
                )
            }

            /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */
            updateBoxProjection(node.projection, layoutCorrected, target, 0.5)

            projectionString = JSON.stringify(node.projection)

            if (
                prevProjectionString !== projectionString ||
                // Also compare calculated treeScale, for values that rely on only this for scale correction.
                prevTreeScaleX !== node.treeScale.x ||
                prevTreeScaleY !== node.treeScale.y
            ) {
                onProjectionUpdate?.()
            }

            /**
             * This uses a pre-bound function executor rather than a lamda to avoid creating a new function
             * multiple times per frame (source of mid-animation GC)
             */
            children.forEach(fireUpdateProjection)
        },

        /**
         *
         */
        setLayout(newLayout) {
            layout = convertBoundingBox(newLayout)
            layoutCorrected = box()

            if (!target) {
                target = box()
                relativeTarget = box()
            }
        },

        /**
         *
         */
        setTarget(newTarget) {
            resolveRelativeToParent = false
            setBoundingBoxToTarget(target, newTarget)
        },

        /**
         *
         */
        getTarget() {
            return target
        },

        /**
         *
         */
        setRelativeTarget(newTarget) {
            resolveRelativeToParent = true
            setBoundingBoxToTarget(relativeTarget, newTarget)
        },

        /**
         *
         */
        destroy() {
            removeFromParent?.()
            cancelSync.preRender(node.updateProjection)
        },
    }

    if (parent) {
        removeFromParent = parent.addChild(node)
    }

    return node
}

function fireUpdateProjection(node: LayoutNode) {
    node.updateProjection()
}
