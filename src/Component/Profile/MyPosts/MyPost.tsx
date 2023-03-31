import React from "react";
import Post from "./Post/Post";
import s from '.././MyPosts/MyPost.module.css'
import {PostProps2} from './Post/Post'
const MyPost=()=>{
    const dataForPost:PostProps2={
        message: [
            {id: 1, text: "Hi my name is Mike"},
            {id: 2, text: "Hi my name is Jon"},
            {id: 3, text: "Hi my name is Alex"}
        ]
    }
    return(<div>
        <div className={s.wrapMyPost}>
            <input type="text"/>
            <button>submit</button>
        </div>
        <div>
            <Post postsdata={dataForPost} />

        </div>
    </div>)
}

export default MyPost