import React from "react";
import s from './profile.module.css'
import MyPost from "./MyPosts/MyPost";
import {ActionType, AddMessageAC, ChangeMessageAC, ProfilePageType} from "../../Redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    newmessage: string
    dispatch: (action:ActionType)=>void
}
const Profile = (props: ProfilePropsType) => {
    const addMessage = () => {
        props.dispatch(AddMessageAC(props.newmessage))
        props.dispatch(ChangeMessageAC(''))
    }
    const setnewMessageHandler = (text: string) => {
       props.dispatch(ChangeMessageAC(text))
    }
    return (
        <div className={s.Content}>
            <div className={s.wrapper_content_img}>
                <img src="https://junat.schoolnet.by/files/00741/obj/120/14493/img/%D0%9B%D0%B5%D1%81.jpg" alt=""/>
            </div>
            <div>
                <MyPost setnewMessage={setnewMessageHandler} addMessage={addMessage} message={props.profilePage.message}
                        newpostmessage={props.profilePage.newmessage}/>
            </div>
        </div>
    )
}
export default Profile