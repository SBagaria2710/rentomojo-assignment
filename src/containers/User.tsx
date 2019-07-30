import React from 'react';
import { Navigation } from '../components/Navbar'
import {List} from '../components/List'

import {IUserState} from '../interfaces/User'
import { getPosts } from '../api/https'
import '../styles/containers/User.css'

class User extends React.Component<any, IUserState>{
    constructor(props) {
        super(props);
        this.state = {
            req: {
                userId: this.props.match.params.userId,
                skip: 0,
                limit: 10
            },
            userName: this.props.match.params.userName,
            userPosts: []
        }
    }
    updatePosts = (userPosts) => {
        this.setState({
            userPosts: [...this.state.userPosts, ...userPosts]
        })
    }
    componentDidMount() {
        getPosts(this.state.req, this.updatePosts)
    }
    render() {
        const Posts = this.state.userPosts.length?<List posts={this.state.userPosts} /> : 'Loading Posts ...'
        return (
            <div>
                <Navigation />
                <div className='container-fluid'>
                    <div className='author'>
                        <p>{this.state.userName}</p>
                    </div>
                    <div className='container'>
                        <ul className='mx-auto'>
                            {Posts}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;