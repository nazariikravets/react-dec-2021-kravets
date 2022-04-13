import style from './App.module.css'
import {Posts, UserDetails, Users} from "./componets";
import {useState} from "react";




function App() {
    const [userDetails,setUserdetails] =useState(null)
    const [postUserId, setPostUserId]=useState(null)



  return (
     <div>
       <div className={style.userAndInfo}>
           <Users setUserdetails={setUserdetails} setPostUserId={setPostUserId}/>
           {userDetails &&<UserDetails userDetails={userDetails} setPostUserId={setPostUserId}/>}
       </div>
         <Posts postUserId={postUserId}/>
     </div>
  );

}


export default App;
