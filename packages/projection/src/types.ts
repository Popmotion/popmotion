import { Box, Projection } from "./geometry/types"

export interface LayoutNode {
    parent?: LayoutNode

    path: LayoutNode[]

    depth: number

    projection: Projection

    scheduleUpdateProjection(): void

    updateProjection(): void

    setLayout(box: Box): void

    setTarget(box: Box): void

    addChild(node: LayoutNode): () => void

    destroy(): void
}

export interface NodeOptions {
    onProjectionUpdate?: () => void
}
