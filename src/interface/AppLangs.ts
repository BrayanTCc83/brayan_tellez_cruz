export interface IAboutMeTranslation {
    title: string
    schoolar: string
    mainProject: string
    skills: string
    about: string
    langs: string
    videos: string
    hobbies: string
    projects: string
    web: string
}

export interface IProjectsTranslation {
    title: string
    date: string
    description: string
    details: string
}

export interface IBlogsTranslation {
    title: string
    time: string
}

export interface ILearnTranslation {
    title: string
    repository: string
    playlist: string
}

export interface IProjectDetailsTranslation {
    section: string
    date: string
    about: string
    galery: string
    objectives: string
    links: string
    technlologies: string
    comments: string
    clients: string
    publish: string
}

export interface IBlogPostTranslation {
    section: string
    publish: string
    duration: string
    time: string
}

export interface IAppTranslation {
    about: IAboutMeTranslation
    projects: IProjectsTranslation
    blogs: IBlogsTranslation
    learn: ILearnTranslation
    project_details: IProjectDetailsTranslation
    blog_post: IBlogPostTranslation
}