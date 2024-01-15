import react from 'react'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {UsersType} from "../../Redux/users-reducer";
import {Users} from "./Users/Users";
export const UsersContainer =()=>{
    const {users }= useSelector<AppRootStateType,UsersType>(state=>state.users)
    return <div>
        <Users users={users}/>
    </div>
}