export interface IPostState {
    postId: number,
    post: {
        userId: number,
        postTitle: string,
        postBody: string
    },
    userName: string,
    showComment: boolean,
    redirect: boolean
}