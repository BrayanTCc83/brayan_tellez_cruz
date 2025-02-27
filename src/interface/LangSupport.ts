export interface ILangSupport {
    lang: string
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
        description: [
            {
                strong: string
                text: string
            }
        ]
    }
}

export interface IMainProject {
    description: string[]
}