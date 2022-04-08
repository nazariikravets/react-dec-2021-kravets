import React, {useEffect, useState} from 'react';
import {userService} from "../../service";
import User from "../User/User";

const Users = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        userService.getAllUsers().then(value => setUsers(value))
    },[])

    return (
        <div>
            {users.map(user=><User key={user.id} user1={user}/>)}
        </div>
    );
};

export default Users;