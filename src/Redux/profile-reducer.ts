import {ActionType, ProfilePageType, RootStateType} from "./state";

export const ProfileReducer=(state:ProfilePageType,action:ActionType):ProfilePageType=>{
    switch (action.type){
        case 'CHANGE-MESSAGE':
            return {...state,
                newmessage:action.newitem }// state.newmessage = action.newitem
        case 'ADD-MESSAGE':
            const newmessageitem = {id: 4, text: action.newmessage}
            return {...state,message:[newmessageitem,...state.message]
            }
        default: return state
    }

}