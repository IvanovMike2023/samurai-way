import react, {ChangeEvent, MouseEventHandler} from "react";
import {UsersArray, UsersType} from "../../../Redux/users-reducer";
import s from '../Users/users.module.css'
import photo from '../../../img/1.jpg'
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UsersArray[]
    totalCount: number
    currentpage: number
    OnChange: (e: number) => void
}
export const Users: React.FC<UsersPropsType> = (props) => {
    let mas = []
    for (let i = 1; i <= 50; i++) {
        mas.push(i)
    }
    return <div>
        {mas.map(m => <span key={m} onClick={() => props.OnChange(m)}>{m}</span>)}
        {props.users.map((u) => {

            return <div key={u.id} className={s.users_wrapper}>
                <div className={s.users_img_wrapper}>
                    <div><NavLink to={'/profile/'+u.id}>{u.id} <img className={s.users_img} src={photo} alt='cdcdcdcddc'/>
                    </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button className={s.users_buttons}>Unfollow</button> :
                            <button className={s.users_buttons}>Follow</button>}
                    </div>
                </div>
                <div className={s.users_item}>
                    <div>{u.name}</div>
                    {/*<div>{u.status}</div>*/}
                    {/*<div>{u.location.city}</div>*/}
                    {/*<div>{u.location.country}</div>*/}
                </div>
            </div>
        })}

    </div>
}