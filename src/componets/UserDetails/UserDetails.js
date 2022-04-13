import React from 'react';

const UserDetails = ({userDetails,setPostUserId}) => {
    const {id,name,username,email}=userDetails
    return (
        <div>
            <div>id-{id}</div>
            <div>name-{name}</div>
            <div>username-{username}</div>id
            <div>email-{email}</div>
            <button onClick={()=>setPostUserId(id)}>Get Posts</button>
        </div>
    );
};

export  {UserDetails}