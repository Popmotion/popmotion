import { LayoutNode, NodeOptions } from "./types"
import sync, { cancelSync } from "framesync"
import { applyTreeProjection, resetBox } from "./geometry/apply"
import { updateBoxProjection } from "./geometry/calc"
import { Box } from "./geometry/types"
import { box, projection } from "./geometry"

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
    const treeScale = {
        x: 1,
        y: 1,
    }

    /**
     *
     */
    let removeFromParent: () => void

    /**
     *
     */
    const children = new Set<LayoutNode>()

    const node: LayoutNode = {
        parent,

        path: parent ? [...parent.path, parent] : [],

        depth: parent ? parent.depth + 1 : 0,

        projection: projection(),

        addChild(node: LayoutNode) {
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

            const { x: prevTreeScaleX, y: prevTreeScaleY } = treeScale

            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */
            applyTreeProjection(layoutCorrected, treeScale, node.path)

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

            if (
                // projection !== prevProjection
                // Also compare calculated treeScale, for values that rely on only this for scale correction.
                prevTreeScaleX !== treeScale.x ||
                prevTreeScaleY !== treeScale.y
            ) {
                onProjectionUpdate()
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
        setLayout(newLayout: Box) {
            layout = newLayout
            layoutCorrected = box()

            if (!target) target = box()
        },

        /**
         *
         */
        setTarget(newTarget: Box) {
            resetBox(target, newTarget)

            node.scheduleUpdateProjection()
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
