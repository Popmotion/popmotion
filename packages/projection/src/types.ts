import { BoundingBox, Point, Projection } from "./geometry/types"

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

    addChild(node: LayoutNode): () => void

    destroy(): void
}

export interface NodeOptions {
    onProjectionUpdate?: () => void
}
