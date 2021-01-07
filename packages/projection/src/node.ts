import { LayoutNode, NodeOptions } from "./types"
import sync, { cancelSync } from "framesync"
import { applyTreeProjection, resetBox } from "./geometry/apply"
import { calcRelativeBox, updateBoxProjection } from "./geometry/calc"
import { BoundingBox, Box, RelativeBox } from "./geometry/types"
import { box, convertBoundingBox, projection } from "./geometry"

export function layoutNode(
    { onLayoutMeasure, onProjectionUpdate }: NodeOptions = {},
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
    let resolveRelativeToParent = false

    /**
     *
     */
    let relativeParent = parent

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

    function updateTreeProjection() {
        node.treeNodes.forEach(fireUpdateProjection)
    }

    const node: LayoutNode = {
        parent,

        treeNodes: parent ? parent.treeNodes : new Set<LayoutNode>(),

        path: parent ? [...parent.path, parent] : [],

        depth: parent ? parent.depth + 1 : 0,

        projection: projection(),

        treeScale: { x: 1, y: 1 },

        /**
         *
         */
        scheduleUpdateProjection: parent
            ? parent.scheduleUpdateProjection
            : () => sync.preRender(updateTreeProjection, false, true),

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
                    relativeParent.getTarget(),
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
        },

        /**
         *
         */
        setLayout(newLayout) {
            layout = convertBoundingBox(newLayout)

            if (!target) {
                layoutCorrected = box()
                target = box()
                relativeTarget = box()
            }

            // TODO: Might need to rebase target box here if not animating
        },

        invalidateLayout() {},

        /**
         * This will only provide accurate measurements if projection transform
         * and all parent transforms have been temporarily disabled.
         */
        measureLayout() {
            node.setLayout(element.getBoundingClientRect())
            onLayoutMeasure?.(layout)
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

        setRelativeParent(newRelativeParent: LayoutNode) {
            // TODO: Check that this is in the path
            relativeParent = newRelativeParent
        },

        /**
         *
         */
        destroy() {
            node.treeNodes.delete(node)
            cancelSync.preRender(node.updateProjection)
        },
    }

    node.treeNodes.add(node)

    return node
}

function fireUpdateProjection(node: LayoutNode) {
    node.updateProjection()
}
