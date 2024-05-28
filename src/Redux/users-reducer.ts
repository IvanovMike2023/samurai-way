import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type ActionType =
    DispatchFollow
    | DispatchUnFollow
    | DispatchSetUsers
    | DispatchSetTotlaCount
    | DispatchSetLoading
    | DispatchSetCurrentpage
    | FollowingProgressType

type DispatchFollow = {
    type: 'FOLLOW'
    itemid: number
    followed: boolean
}
type DispatchUnFollow = {
    type: 'UNFOLLOW'
    itemid: number
    followed: boolean
}
type DispatchSetUsers = {
    type: 'SETUSERS'
    users: UsersArray[]
}
type DispatchSetTotlaCount = {
    type: 'SET-TOTALCOUNT'
    totalCount: number
}
type DispatchSetCurrentpage = {
    type: 'SET-CURRENTPAGE'
    currentpage: number
}
type DispatchSetLoading = {
    type: 'SETLOADING'
    loading: boolean
}
type FollowingProgressType = ReturnType <typeof SetFollowingProgressAC>
export type UsersArray = {
    "id": number
    "name": string
    "uniqueUrlName": null
    "status": null
    "photos": {
        "small": null,
        "large": null
    }
    followed: boolean
}

export type UsersType = {
    users: UsersArray[]
    totalCount: number
    pagesize: number
    currentpage: number
    loading: boolean
    followingProgress: number[]
}
let initialstate: UsersType = {
    users: [],
    totalCount: 20,
    pagesize: 10,
    currentpage: 2,
    loading: true,
    followingProgress: []

}
export const UsersReducer = (state: UsersType = initialstate, action: ActionType): UsersType => {

    switch (action.type) {

        case'SETUSERS':
            return {...state, users: action.users}
        case'SET-TOTALCOUNT':
            return {
                ...state,
                totalCount: action.totalCount
            }
        case'SET-CURRENTPAGE':
            return {
                ...state,
                currentpage: action.currentpage
            }
        case 'SETLOADING':
            return {
                ...state,
                loading: action.loading
            }
        case'FOLLOW':
            return {
                ...state, users: [...state.users.map((u) => {
                    if (u.id === action.itemid) {
                        return {...u, followed: action.followed}
                    }
                    return u
                })]
            }
        case'UNFOLLOW':
            return {
                ...state, users: [...state.users.map((u) => {
                    if (u.id === action.itemid) {
                        return {...u, followed: action.followed}
                    }
                    return u
                })]
            }
        case'SETFOLLOWPROGRESS':
            return {
                ...state, followingProgress: action.blocked ?
                    [...state.followingProgress,action.id] :
                   [ ...state.followingProgress.filter(fl=>fl!=action.id)]
            }

        default:
            return state
    }

}
export const followeAC = (newitemid: number, newfollow: boolean): DispatchFollow => {
    return {
        type: 'FOLLOW',
        itemid: newitemid,
        followed: newfollow
    } as const
}
export const unfollowAC = (newitemid: number, newfollow: boolean): DispatchUnFollow => {
    return {
        type: 'UNFOLLOW',
        itemid: newitemid,
        followed: newfollow
    } as const
}
export const SetUsersAC = (newusers: UsersArray[]): DispatchSetUsers => {
    return {
        type: 'SETUSERS',
        users: newusers
    } as const
}
export const SetTotalCountAC = (totalCount: number): DispatchSetTotlaCount => {
    return {
        type: 'SET-TOTALCOUNT',
        totalCount: totalCount
    } as const
}
export const SetCurrentpageAC = (currentpage: number): DispatchSetCurrentpage => {
    return {
        type: 'SET-CURRENTPAGE',
        currentpage: currentpage
    } as const
}
export const SetLoadingAC = (loading: boolean): DispatchSetLoading => {
    return {
        type: 'SETLOADING',
        loading: loading
    } as const
}
export const SetFollowingProgressAC = (id:number,blocked: boolean) => {
    return {
        type: 'SETFOLLOWPROGRESS',
        blocked,
        id
    } as const
}
export const SetUsersThunkCreator = () => (dispatch: Dispatch) => {
    usersAPI.getUsers().then((res) => {
            dispatch(SetUsersAC(res.data.items))
        }
    ).catch(er => console.log(er))
}
//SetUsersThunkCreator()
