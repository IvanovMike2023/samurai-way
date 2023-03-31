import React from "react";
import s from './profile.module.css'
import MyPost from "./MyPosts/MyPost";
type AccordionProps={
    text: string
}
const Profile = ()=>{
    return (
        <><div className={s.wrapper_content_img}>
            <img src="https://junat.schoolnet.by/files/00741/obj/120/14493/img/%D0%9B%D0%B5%D1%81.jpg" alt=""/>
        </div>
        <div>
            <MyPost />
        </div>
        </>
    )
}
export default Profile