import { LayoutNode } from "../types"

export function updateProjectionStyle(
    element: HTMLElement,
    { projection, treeScale }: LayoutNode
) {
    const { x, y } = projection
    const xTranslate = x.translate / treeScale.x
    const yTranslate = y.translate / treeScale.y
    element.style.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`
    element.style.transform = `translate3d(${xTranslate}px, ${yTranslate}px, 0) scale(${x.scale}, ${y.scale})`
}
