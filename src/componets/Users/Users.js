import {useEffect, useState} from "react";

import {usersService} from "../../service";
import User from "../User/User";


const Users = ({setUserdetails, setPostUserId}) => {
    const [users, setUsers]=useState([])

    useEffect(()=>{
        usersService.getAll().then(({data})=>setUsers(data))

    },[])

    return (
        <div>
            {users.map(users=><User key={users.id} users={users} details={setUserdetails} setPostUserId={setPostUserId}/> )}

        </div>
    );
};

export {Users}