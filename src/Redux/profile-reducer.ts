export type ActionType=TypeDispatchChange | TypeDispatchAddMessage

export type MessagesType = {
    id: number
    text: string
}
type TypeDispatchAddMessage = {
    type: 'ADD-MESSAGE'
    newmessage: string
}
type TypeDispatchChange = {
    type: 'CHANGE-MESSAGE'
    newitem: string
}
export type ProfilePageType = {
    message: MessagesType[]
    newmessage: string
}
let initialstate:ProfilePageType =     {
    newmessage: 'vdsvsdv',
        message: [
        {id: 1, text: "Hi my name is Mike"},
        {id: 2, text: "Hi my name is Jon"},
        {id: 3, text: "Hi my name is Alex"}
    ]
}
export const ProfileReducer=(state:ProfilePageType=initialstate,action:ActionType):ProfilePageType=>{
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
export const ChangeMessageAC = (newitem: string): TypeDispatchChange => {
    return {
        type: 'CHANGE-MESSAGE',
        newitem: newitem
    }as const
}
export const AddMessageAC = (newmessage: string): TypeDispatchAddMessage => {
    return {
        type: 'ADD-MESSAGE',
        newmessage: newmessage
    }as const
}