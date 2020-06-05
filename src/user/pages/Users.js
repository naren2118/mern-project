import React from 'react';
import UsersList from '../components/UsersList';
import './user1.png'

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Naren', 
            image:'https://img.icons8.com/officel/2x/user.png', 
            places: 3
        },
        {
            id: 'u2', 
            name: 'Narru', 
            image:'https://img.icons8.com/officel/2x/user.png', 
            places: 4
        }
    ];
    return <UsersList items={USERS}/>
};

export default Users