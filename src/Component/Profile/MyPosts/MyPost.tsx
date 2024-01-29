import React, {ChangeEvent, useState} from "react";
import Post from "./Post/Post";
import s from '.././MyPosts/MyPost.module.css'
import {MessagesType} from "../../../Redux/store";

type MessagesItemType={
    message: MessagesType[]
    newpostmessage:string
    addMessage:()=>void
    setnewMessage:(d:string)=>void
}
const MyPost=(props:MessagesItemType)=>{
    const setnewMessageHandler=(e: ChangeEvent<HTMLInputElement>)=>{
    props.setnewMessage(e.currentTarget.value)
    }
const addMessageHandler=()=>{
    props.addMessage()
}

    return(<div>
        <div className={s.wrapMyPost}>
            <input onChange={setnewMessageHandler} value={props.newpostmessage} type="text"/>
            <button onClick={addMessageHandler}>submit</button>
        </div>
        <div>

            <Post message={props.message} />

        </div>
    </div>)
}

export default MyPost