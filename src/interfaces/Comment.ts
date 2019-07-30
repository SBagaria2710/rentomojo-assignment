interface IComment {
    commentId: number,
    commentName: string,
    commentBody: string
}

export interface ICommentState {
    comments: IComment[]
}

export interface ICommentProps {
    postId: number
}