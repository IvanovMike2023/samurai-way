import React from "react";
import s from './sidebar.module.css'
import {NavLink} from 'react-router-dom'

const SideBar = () => {
    return (
        <div className={s.Sidebar}>
            <div className={s.wrap_sidebar}>
                <div className={s.item}>
                    <NavLink className={({isActive}) => (isActive ? s.active : s.item)} to="/profile">Profile
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" className={({isActive}) => (isActive ? s.active : s.item)}>Dialogs
                    </NavLink>
                </div>
                <div className={s.item}>Chat</div>
                <div className={s.item}>Settings</div>
            </div>
        </div>

    )
}
export default SideBar