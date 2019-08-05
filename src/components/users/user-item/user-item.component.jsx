import React from 'react';
import './user-item.component.scss';

const UserItem = props => {

        const { login, name, avatar_url, profile_url } = props.user;

        return (
            <div className="card ">
                <img className="card-img-top rounded-circle" src={avatar_url} alt="Card"/>
                <div className="card-body">
                    <h4 className="card-title">{login}</h4>
                    <p className="card-text">{name}</p>
                    <a href={profile_url} className="btn btn-primary">See Profile</a>
                </div>
            </div>
        )
}

export default UserItem;
