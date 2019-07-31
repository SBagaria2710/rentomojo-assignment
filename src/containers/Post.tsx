import React from 'react';
import {Redirect} from 'react-router-dom';
import { Navigation } from '../components/Navbar'
import Comments from './Comments'

import {getPost, deletePost, getUsers} from '../api/https'
import {IPostState} from '../interfaces/Post'
import '../styles/containers/Post.css'

class Post extends React.Component<any, IPostState> {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.match.params.postId,
            post: {
                userId: this.props.match.params.userId,
                postTitle: '',
                postBody: '',
            },
            userName: '',
            showComment: false,
            redirect: false
        }
    }
    updatePostData = (postData) => {
        this.setState(prevState => ({
            post: {               
                ...prevState.post,
                userId: postData.userId,
                postTitle: postData.title,
                postBody: postData.body
            }
        }), () => getUsers(this.findUserName))
    }

    componentDidMount() {
        getPost(this.state.postId, this.updatePostData)
    }

    findUserName = (users) => {
        users.forEach(user => {
            if(user.userId === this.state.post.userId) {
                this.setState({userName: user.userName})
            }
        })
    }

    redirect = () => {
        this.setState(prevState => ({
            redirect: !prevState.redirect
        }))
    }

    deletePost = () => {
        deletePost(this.state.postId, this.redirect)
    }

    toggleCommentVisibility = (e) => {
        this.setState(prevState => ({
            showComment: !prevState.showComment
        }))
    }

    render() {
        const {postTitle, postBody} = this.state.post
        if(this.state.redirect) {
            return <Redirect to={`/user/${this.state.post.userId}/${this.state.userName}`} />
        }
        const commentInfo = this.state.showComment ? 'Hide Comments' : 'Show Comments';
        return(
            <div>
                <Navigation />
                <div className='container-fluid'>
                    <div className='header'>
                        <h3 className='title'>{postTitle.toUpperCase()}</h3>
                        <button onClick={this.deletePost} className='btn btn-outline-danger btn-sm btn-delete'><i className="fa fa-trash my-auto" aria-hidden="true"></i>Delete</button>
                    </div>
                    <div className='content'>{postBody}</div>
                    <div className='comments'>
                        <h6>Comments:</h6>
                        <button onClick={this.toggleCommentVisibility} className='btn btn-outline-primary btn-sm'>{commentInfo}</button>
                    </div>
                    {this.state.showComment?<Comments postId={this.state.postId} />:null}
                </div>
            </div>
        );
    }
}

export default Post;