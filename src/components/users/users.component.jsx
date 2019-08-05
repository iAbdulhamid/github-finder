import React, { Component } from 'react'
import './users.component.scss';
import UserItem from './user-item/user-item.component';

export class Users extends Component {
    constructor() {
        super();

        this.state = {
        users: [
            {
                id: '1',
                login: '',
                name: 'Ibrahim Abdelhamed',
                avatar_url: 'https://avatars1.githubusercontent.com/u/46964704?s=400&u=3f2313852c8a97b1e9fa2b3d5c86a7984830e67f&v=4',
                profile_url: '',
            },
            {
                id: '2',
                login: '',
                name: 'Ibrahim Abdelhamed',
                avatar_url: 'https://avatars1.githubusercontent.com/u/46964704?s=400&u=3f2313852c8a97b1e9fa2b3d5c86a7984830e67f&v=4',
                profile_url: '',
            },
            {
                id: '3',
                login: '',
                name: 'Ibrahim Abdelhamed',
                avatar_url: 'https://avatars1.githubusercontent.com/u/46964704?s=400&u=3f2313852c8a97b1e9fa2b3d5c86a7984830e67f&v=4',
                profile_url: '',
            }
        ]
    }
    }

    render() {
        return (
            <div className="users-cont">
                {
                    this.state.users.map(user => (
                        <UserItem key={user.id} user={user}></UserItem>
                    ))
                }
            </div>
        )
    }
}

export default Users;
