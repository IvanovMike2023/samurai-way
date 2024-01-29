import react from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {SetUsersAC, UsersType} from "../../Redux/users-reducer";
import {Users} from "./Users/Users";
import axios from "axios";

export const UsersContainer =()=>{
    const {users }= useSelector<AppRootStateType,UsersType>(state=>state.users)
const dispatch =useDispatch()
if (users.length===0){
    axios.get( 'https://social-network.samuraijs.com/api/1.0/users').then(res=>{
        dispatch(SetUsersAC(res.data.items))
        console.log(res.data.items)
    })

}

    return <div>
        <Users users={users}/>
    </div>
}