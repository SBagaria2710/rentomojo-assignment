import React from 'react';
import {Comment} from '../components/Comment'

import {getComments} from '../api/https'
import {ICommentState, ICommentProps} from '../interfaces/Comment'
import '../styles/components/Comments.css'

class Comments extends React.Component<ICommentProps, ICommentState> {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }
    updateComments = (commentData) => {
        this.setState({
            comments: [...this.state.comments, ...commentData]
        })
    }
    componentDidMount() {
        getComments(this.props.postId, this.updateComments)
    }
    render() {
        return (
            <ul className='comment-section'>
                {this.state.comments.length?<Comment comments={this.state.comments} />:<p className='text-center mt-5'>Loading Comments ...</p>}
            </ul>
        );
    }
}

export default Comments;