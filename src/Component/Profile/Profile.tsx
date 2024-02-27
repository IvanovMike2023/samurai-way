import React from "react";
import s from './profile.module.css'
import MyPost from "./MyPosts/MyPost";
import {AddMessageAC, ChangeMessageAC, MessagesType} from "../../Redux/profile-reducer";
import {useDispatch} from "react-redux";

type ProfilePropsType = {
    fullName: string,
    userId:number,
    newmessage:string,
    message: MessagesType[]
}
export const Profile = (props: ProfilePropsType) => {
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
                <div>{props.fullName}</div>
                <div>{props.userId}</div>
                <MyPost newmessage={props.newmessage}  message={props.message} setnewMessage={setnewMessageHandler} addMessage={addMessage}
                      />
            </div>
        </div>
    )
}
export default Profile