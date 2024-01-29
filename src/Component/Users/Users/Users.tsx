import react from "react";
import {UsersArray, UsersType} from "../../../Redux/users-reducer";
import s from '../Users/users.module.css'
import photo from '../../../img/1.jpg'

type UsersPropsType = {
    users: UsersArray[]
}
export const Users: React.FC<UsersPropsType> = (props) => {
    return <div>
        {props.users.map((u) => {
            return <div key={u.id} className={s.users_wrapper}>
                <div className={s.users_img_wrapper}>

                        <div>
                            <img className={s.users_img} src={photo} alt='cdcdcdcddc'/>
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