export interface ILearnFlow {
    id: number
    video: string
    concept: string
    abs: string
    next: number[]
};

export interface ILearnConcept {
    id: string
    lang: string
    title: string
    description: string
    flow: ILearnFlow[]
    url: string
    git: string
};