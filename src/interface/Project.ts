export interface IClient {
  name: string
  logotipe: string
  description: string
  portal?: string
}

export interface IComment {
  image: string
  name: string
  puntuation: number
  comment: string
}

export interface IProjectFull {
  title: string
  subtitle: string
  description: string[]
  author: string
  date: string
  cover: string
  technologies: string[]
  website: string
  isPublic: boolean
  code?: string
  projectUrl?: string
  objectives: string[]
  clients: IClient[]
  comments: IComment[]
  realization: string
}
