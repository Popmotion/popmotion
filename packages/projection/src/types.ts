import { BoundingBox, Box, Point, Projection } from "./geometry/types"

export interface LayoutNode {
    parent?: LayoutNode

    path: LayoutNode[]

    depth: number

    projection: Projection

    treeScale: Point

    scheduleUpdateProjection(): void

    updateProjection(): void

    setLayout(box: BoundingBox): void

    setTarget(box: BoundingBox): void

    getTarget(): Box

    setRelativeTarget(box: Partial<BoundingBox>): void

    setRelativeParent(parent: LayoutNode): void

    addChild(node: LayoutNode): () => void

    destroy(): void
}

export interface NodeOptions {
    onProjectionUpdate?: () => void
}
