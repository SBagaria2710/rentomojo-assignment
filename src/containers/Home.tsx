import React from 'react';
import { Navigation } from '../components/Navbar'
import UserCards from '../components/UserCards'

import {getUsers} from '../api/https'
import {IUser} from '../interfaces/User'

interface IHomeState {
    users: IUser[]
}

export default class Home extends React.Component<{}, IHomeState> {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    updateUsers = (users) => {
        this.setState({
            users: [...this.state.users, ...users]
        })
    }
    componentDidMount() {
        getUsers(this.updateUsers);
    }
    render() {
        return(
            <div>
                <Navigation />
                <div className='container-fluid'>
                    <div className='col-12 col-sm-10 mx-auto'>
                        <div className='row justify-content-between'>
                            <UserCards users={this.state.users}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}