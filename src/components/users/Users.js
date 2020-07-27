import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import Proptypes from 'prop-types';

const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
}

Users.propTypes = {
    users: Proptypes.array.isRequired,
    loading: Proptypes.bool.isRequired,
}


export default Users;