import {Dispatch} from "redux";
import {authAPI, ProfileAPI, usersAPI} from "../api/api";
import {setProfileAC} from "./profile-reducer";

export type ActionType = DispatchSetAuth

type DispatchSetAuth = {
    type: 'SET-AUTH'
    email: string
    isauth:boolean
}

export type AuthType = {
    email: string
    resultCode: number
    isauth: boolean
}
let initialstate: AuthType = {
    email: '',
    resultCode: 0,
    isauth: false

}
export const AuthReducer = (state: AuthType = initialstate, action: ActionType): AuthType => {

    switch (action.type) {
        case'SET-AUTH':
            return {...state, email: action.email,isauth:action.isauth}

        default:
            return state
    }

}
export const setAuthAC = (email: string,isauth:boolean): DispatchSetAuth => {
    return {
        type: 'SET-AUTH',
        email,
        isauth
    } as const
}
export const authTC = () => (dispatch: Dispatch) => {
    authAPI.getMe().then((res) => {
        let isauth = true
        if (res.data.resultCode > 0) {
            isauth = false
        } else
            isauth = true
        dispatch(setAuthAC(res.data.data.login,isauth))
    })
}