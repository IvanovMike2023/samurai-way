import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type ActionType = DispatchFollow | DispatchUnFollow | DispatchSetUsers | DispatchSetTotlaCount

type DispatchFollow = {
    type: 'FOLLOW'
    itemid: number
    followed:boolean
}
type DispatchUnFollow = {
    type:'UNFOLLOW'
    itemid: number
    followed:boolean
}
type DispatchSetUsers = {
    type:'SETUSERS'
    users: UsersArray[]
}
type DispatchSetTotlaCount = {
    type:'SETTOTALCOUNT'
    totalCount: number
}

export type UsersArray = {
    "id": number
    "name": string
    "uniqueUrlName": null
    "status": null
    "photos": {
        "small": null,
        "large": null
    }
    followed:boolean
}

export type UsersType = {
    users: UsersArray[]
    totalCount: number
    pagesize: number
    currentpage:number
}
let initialstate: UsersType = {
    users: [],
    totalCount: 20,
    pagesize: 10,
    currentpage:2

}
export const UsersReducer = (state: UsersType = initialstate, action: ActionType): UsersType => {

    switch (action.type) {
        case'SETUSERS':
            return {...state,users:action.users}
        case'SETTOTALCOUNT':
            return {...state,
                totalCount:action.totalCount
            }
        // case'FOLLOW':
        //     return {...state,users:{...state.users.map((u)=>{
        //         if(u.id===action.itemid){
        //             return {...u,followed:action.followed}
        //         }
        //         return u
        //             })} }
        // case'UNFOLLOW':
        //     return {...state,users:{...state.users.map((u)=>{
        //         if(u.id===action.itemid){
        //             return {...u,followed:action.followed}
        //         }
        //         return u
        //             })} }
        default:
            return state
    }

}
export const followeAC = (newitemid: number,newfollow:boolean): DispatchFollow => {
    return {
        type: 'FOLLOW',
        itemid: newitemid,
        followed: newfollow
    } as const
}
export const unfollowAC = (newitemid: number,newfollow:boolean): DispatchUnFollow => {
    return {
        type: 'UNFOLLOW',
        itemid: newitemid,
        followed: newfollow
    } as const
}
export const SetUsersAC = (newusers:UsersArray[] ): DispatchSetUsers => {
    return {
        type: 'SETUSERS',
        users: newusers
    } as const
}
export const SetTotalCountAC = (totalCount:any ): DispatchSetTotlaCount => {

    return {
        type: 'SETTOTALCOUNT',
        totalCount: totalCount
    } as const
}
export const SetUsersThunkCreator=()=>(dispatch:Dispatch)=>{

    usersAPI.getUsers().then((res) => {
            console.log(res.data.data)
            dispatch(SetUsersAC(res.data.data.items))
            //dispatch(SetTotalCountAC(totalCount))
            console.log(res.data.data.items)
        }
    ).catch(er => console.log(er))
}
//SetUsersThunkCreator()
