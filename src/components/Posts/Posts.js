import {useEffect, useState} from "react";
import {postService} from "../../service";
import Post from "../Post/Post";


const Posts = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        postService.getAllPosts().then(value => setPosts(value))
    },[])

    return (
        <div>
            {posts.map(posts=><Post key={posts.id} posts={posts}/> )}
        </div>
    );
};

export default Posts;