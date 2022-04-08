import {useEffect, useState} from "react";
import {commentService} from "../../service";
import Comment from "../Comment/Comment";


const Comments = () => {
  const  [comments,setComments]=useState([])
    useEffect(()=>{
        commentService.getAllComments().then(value => setComments(value))
    },[])
    return (
        <div>
            {comments.map(comments=><Comment key={comments.id} comments={comments}/> )}
        </div>
    );
};

export default Comments;