import React from "react";
import s from './profile.module.css'
import MyPost from "./MyPosts/MyPost";
import {AddMessageAC, ChangeMessageAC, MessagesType} from "../../Redux/profile-reducer";
import {useDispatch} from "react-redux";

type ProfilePropsType = {
    newmessage: string,
    message: MessagesType[]
}
const Profile = (props: ProfilePropsType) => {
    const dispatch = useDispatch()
    const addMessage = () => {
        dispatch(AddMessageAC(props.newmessage))
        dispatch(ChangeMessageAC(''))
    }
    const setnewMessageHandler = (text: string) => {
        dispatch(ChangeMessageAC(text))
    }
    return (
        <div className={s.Content}>
            <div className={s.wrapper_content_img}>
                <img src="https://junat.schoolnet.by/files/00741/obj/120/14493/img/%D0%9B%D0%B5%D1%81.jpg" alt=""/>
            </div>
            <div>
                <MyPost setnewMessage={setnewMessageHandler} addMessage={addMessage} message={props.message}
                        newpostmessage={props.newmessage}/>
            </div>
        </div>
    )
}
export default Profile