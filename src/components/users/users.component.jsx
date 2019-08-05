import React from 'react'
import './users.component.scss';
import UserItem from './user-item/user-item.component';
import Spinner from '../layout/spinner/spinner.component';

const Users = ({ users, loading }) => {

        return (
            <div className="users-cont">
                {
                    loading ?
                  <Spinner /> :
                    users.map(user => (
                        <UserItem key={user.id} user={user}></UserItem>
                    ))
                }
            </div>
        )
}

export default Users;
