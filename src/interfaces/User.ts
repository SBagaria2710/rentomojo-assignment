export interface IUser {
    userId?: number,
    userName?: string,
    companyName?: string
}

export interface IUserState {
    req: IRequest,
    userName: string,
    userPosts: IUserPost[]
}

export interface IRequest {
    userId: number,
    skip: number,
    limit: number
}

interface IUserPost {
    userId: number,
    postId: number,
    postTitle: string
}