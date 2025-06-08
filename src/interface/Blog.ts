export interface IBlogDefinition {
    id: string
    tags: string[]
};

export interface IBlogResume {
    id: string
    lang: string
    title: string
    description: string
    duration: number
    technology: string
    author: string
};

export interface IBlogFragment {
    image: string
    position: string
    caption: string
    text: string
}

export interface IBlog {
    title: string
    subtitle: string
    duration: number
    creation_date: string
    update_date: string
    author: string
    poster: string
    fragments: IBlogFragment[]
};