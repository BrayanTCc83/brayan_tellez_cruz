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
    }
    content: {
        header: string
        description: IAboutContentDescription[]
    }
    skills: {
        [prop: string]: string
    }
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

export interface INotification {
    title: string
    message: string
}

export interface INotifications {
    button: string
    greatings: INotification
}