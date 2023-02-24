import { AuthorModel } from "./authorType"

export interface BlogModel {
    blogId: string
    img: string,
    title: string
    author: AuthorModel
    body: string
    createAt: Date;
    updateAt?: Date;
}

export interface BlogCreation extends Pick<BlogModel, 'title' | 'body' | 'img'> {
    author: Omit<AuthorModel, 'authorId'>
}

export interface BlogUpdate extends Pick<BlogModel, 'title' | 'body' | 'img'> { }