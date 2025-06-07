export interface ILangSupport {
    lang: string
}

export interface IOrigin {
    origin: string
}

export interface IAboutContentDescription {
    strong: string
    text: string
}

export interface IAbout {
    credentials: string
    meta: {
        description: string
        image: string
        url: string
    },
    content: {
        header: string
        description: IAboutContentDescription[]
    },
    hobbies: {
        [prop: string]: string
    }
}

export interface IProject {
    id: string
    name: string
    subname: string
    description: string[]
    technologies: string[]
    urlgit?: string
    urlweb?: string
    cover: string
    date?: string
}