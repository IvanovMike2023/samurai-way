import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type ActionType = DispatchSetAuth

type DispatchSetAuth = {
    type: 'SET-AUTH'
    email: string

}

export type AuthType = {
    email: string
    resultCode: number
}
let initialstate: AuthType = {
    email: '',
    resultCode: 0

}
export const AuthReducer = (state: AuthType = initialstate, action: ActionType): AuthType => {

    switch (action.type) {
        case'SET-AUTH':
            return {...state, email: action.email}

        default:
            return state
    }

}
export const setAuthAC = ( email:string): DispatchSetAuth => {
    return {
        type: 'SET-AUTH',
        email: email
    } as const
}
