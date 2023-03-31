import React from "react";
import s  from './header.module.css'
import logo from '../../logo.svg'
type AccordionProps = {
    text: string
}
const Header = () => {
    return (
        <>
            <div className={s.header_wrap} >
                <div>
                    <img className={s.logo} src={logo} alt=""/>
                </div>
                <div className={s.header_menu}>
                    <div className={s.item}>Home</div>
                    <div className={s.item}>Profile</div>
                    <div className={s.item}>Chat</div>
                    <div className={s.item}>Settings</div>
                </div>
            </div>
        </>
    )
}
export default Header