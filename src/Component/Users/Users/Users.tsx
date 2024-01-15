import react from "react";
import {UsersArray, UsersType} from "../../../Redux/users-reducer";
import s from '../Users/users.module.css'

type UsersPropsType = {
    users: UsersArray[]
}
export const Users: React.FC<UsersPropsType> = (props) => {
    return <div>
        {props.users.map((u) => {
            return <div key={u.id} className={s.users_wrapper}>
                <div className={s.users_photo}>
                   <div> {u.followed? <button>Unfollow</button>:<button>Follow</button>}
                </div>
                </div>
                <div className={s.users_item}>
                    <span>{u.fullName}</span>
                    <span>{u.fullName}</span>
                    <span>{u.status}</span>
                </div>
            </div>
        })}

    </div>
}