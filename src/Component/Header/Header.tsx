import React from "react";
import s  from './header.module.css'
import logo from '../../logo.svg'
import {NavLink} from "react-router-dom";
type HeaderProps = {
    email: string
    resultCode: number
}
const Header = (props:HeaderProps) => {
    return (
        <div className={s.header}>
            <div className={s.header_wrap} >
                <div>
                    <img className={s.logo} src={logo} alt=""/>
                </div>
                <div className={s.wrapper_login} >
                {props.email? <div>{props.email}</div> :
                  <div className={s.login_button}><NavLink to={'/login'}>Login</NavLink></div>
                }
                </div>
            </div>
        </div>
    )
}
export default Header