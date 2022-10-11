export interface IBasicComponent {
    id: string
}
export interface IExpandibleComponent extends IBasicComponent {
    isExpanded : boolean,
    maxWidth ?: string
}
export interface IScrollExpandibleComponent extends IExpandibleComponent {
    currentScroll : number,
    minHeight : number,
    size: number
}