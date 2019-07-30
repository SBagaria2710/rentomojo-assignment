import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/UserCard.css'
import {IUser} from '../interfaces/User'

interface IProps {
    users: IUser[]
}

class UserCards extends React.Component<IProps, {}> {
    render() {
        const {users} = this.props
        return users.map(user => (
            <div key={user.userId} className="col-md-5 col-lg-4 col-12 card-container">
                <div className="card">
                    <Link to={`/user/${user.userId}/${user.userName}`}>
                        <div className="card--display">
                            <h2 style={{ paddingBottom: '10px' }}>{user.userName}</h2>
                            <h5>{user.companyName}</h5>
                        </div>
                    </Link>
                    <div className="card--border"></div>
                </div>
            </div>
        ));
    }
}

export default UserCards;