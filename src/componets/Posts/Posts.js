import React, {useEffect, useState} from 'react';
import {Post} from "../Post/Post";
import {postsService} from "../../service";

const Posts = ({postUserId}) => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        postsService.getPostId(postUserId).then(({data})=>(setPosts(data)))
    },null)

    return (
        <div>
             {posts
                ? posts.map(posts=><Post key={posts.id} posts={posts}/> )
                 : 'Loading...'}

        </div>
    );
};

export {Posts}