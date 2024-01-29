
export type ActionType = DispatchFollow | DispatchUnFollow | DispatchSetUsers

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
}
let initialstate: UsersType = {
    users: []

}
export const UsersReducer = (state: UsersType = initialstate, action: ActionType): UsersType => {
    switch (action.type) {
        case'SETUSERS':
            return {users:action.users}
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
