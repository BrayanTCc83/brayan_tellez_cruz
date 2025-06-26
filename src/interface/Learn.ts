export interface ILearnFlow {
    id: number
    video: string
    concept: string
    abs: string
    next: number[]
};

export interface IThemes {
    text: string
    themes: {
        id: string
        text: string
    }[]
}

export interface ILearnConcept {
    id: string
    lang: string
    title: string
    resume: string
    description: string
    flow: ILearnFlow[]
    url: string
    git: string
    themes: IThemes
};

export interface IMedia {
    type: string
    src: string
    caption: string
}

export interface ICode {
    type: string
    code: string
    lang: string
}

export interface ITable {
    type: string
    headers: string[],
    rows: string[][],
    caption: string
}

export interface ISection {
    [key: string]: {
        section: string
        content: string
        extra: Array<IMedia|ICode|ITable>
        content_under?: string
    }
}

export interface ILearnLesson {
    id: string
    lesson: string
    lang: string
    title: string
    resume: string
    themes: IThemes
    sections: ISection
};

export interface ILearnAbstract {
    id: string
    lang: string
    title: string
    resume: string
    git: string
    themes: string[]
};