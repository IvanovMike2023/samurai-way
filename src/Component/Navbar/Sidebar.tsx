import React from "react";
import s from './sidebar.module.css'
type AccordionProps={
    text: string
}
const SideBar = ()=>{
    return (
        <>
            <div className={s.wrap_sidebar}>
        <div className={s.item}>Home</div>
        <div className={s.item}>Profile</div>
        <div className={s.item}>Chat</div>
        <div className={s.item}>Settings</div>
            </div>
            </>
    )
}
export default SideBar