import {Dispatch} from "redux";
import {ProfileAPI} from "../api/api";

export type ActionType = TypeDispatchChange | TypeDispatchAddMessage | TypeDispatchsetProfile

export type MessagesType = {
    id: number
    text: string
}
type TypeDispatchsetProfile = {
    type: 'SET-PROFILE'
    payload: ProfileDataType
}
type TypeDispatchAddMessage = {
    type: 'ADD-MESSAGE'
    newmessage: string
}
type TypeDispatchChange = {
    type: 'CHANGE-MESSAGE'
    newitem: string
}
export type ProfileDataType = {
    aboutMe: null
    contacts: {
        facebook: null, github : null,instagram : null,mainLink: null,twitter : null, vk: null,website: null,youtube: null
    },
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: null
    photos: { small: null, large: null },
    userId: number


}
export type ProfilePageType = {
    profiledata: ProfileDataType,
    message: MessagesType[]
    newmessage: string
}
let initialstate: ProfilePageType = {
    profiledata: {
        aboutMe: null,
        contacts: {
            facebook: null, github : null,instagram : null,mainLink: null,twitter : null, vk: null,website: null,youtube: null
        },
        fullName: 'string',
        lookingForAJob: true,
        lookingForAJobDescription: null,
        photos: {small: null, large: null},
        userId: 29338
    },
    newmessage: 'vdsvsdv',
    message: [
        {id: 1, text: "Hi my name is Mike"},
        {id: 2, text: "Hi my name is Jon"},
        {id: 3, text: "Hi my name is Alex"}
    ]


}


export const ProfileReducer = (state: ProfilePageType = initialstate, action: ActionType): ProfilePageType => {
    switch (action.type) {

        case 'SET-PROFILE':
            return {
                ...state,
                profiledata: {...action.payload}
            }
        case 'CHANGE-MESSAGE':
            return {
                ...state,
                newmessage: action.newitem
            }// state.newmessage = action.newitem
        case 'ADD-MESSAGE':
            const newmessageitem = {id: 4, text: action.newmessage}
            return {
                ...state, message: [newmessageitem, ...state.message]
            }
        default:
            return state
    }

}
export const ChangeMessageAC = (newitem: string): TypeDispatchChange => {
    return {
        type: 'CHANGE-MESSAGE',
        newitem: newitem
    } as const
}
export const AddMessageAC = (newmessage: string): TypeDispatchAddMessage => {
    return {
        type: 'ADD-MESSAGE',
        newmessage: newmessage
    } as const
}
export const setProfileAC = (payload: ProfileDataType): TypeDispatchsetProfile => {
    return {
        type: 'SET-PROFILE',
        payload: payload
    } as const
}
export const setProfileTC=(userId:number,userIdmatch?:number)=>(dispatch:Dispatch)=>{
    if(userIdmatch){
        ProfileAPI.getProfile(userIdmatch).then((res) => {
            dispatch(setProfileAC(res.data))
        })
    }
    ProfileAPI.getProfile(userId).then((res) => {
        dispatch(setProfileAC(res.data))
})
}