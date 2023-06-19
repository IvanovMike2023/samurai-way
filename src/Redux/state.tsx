//types


import {ProfileReducer} from "./profile-reducer";

export type MessagesType = {
    id: number
    text: string
}

export type ProfilePageType = {
    message: MessagesType[]
    newmessage: string
}
export type DialogItemType = {
    name: string
    id: number
}
export type DialogPageType = {
    dialogs: DialogItemType[]
}

export type RootStateType = {
    dialogsPage: DialogPageType
    profilePage: ProfilePageType
}
type TypeDispatchAddMessage = {
    type: 'ADD-MESSAGE'
    newmessage: string
}
type TypeDispatchChange = {
    type: 'CHANGE-MESSAGE'
    newitem: string
}
export type ActionType=TypeDispatchChange | TypeDispatchAddMessage
export type StoreType = {
    _state: RootStateType

    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => void
    dispatch: (action: ActionType) => void
}
const store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [
                {name: 'Mike', id: 1},
                {name: 'Alex', id: 2},
                {name: 'Ivan', id: 3},
                {name: 'Sem', id: 4},
                {name: 'Dasha', id: 5}
            ]
        },
        profilePage: {
            newmessage: 'vdsvsdv',
            message: [
                {id: 1, text: "Hi my name is Mike"},
                {id: 2, text: "Hi my name is Jon"},
                {id: 3, text: "Hi my name is Alex"}
            ]
        }
    },

    _onChange() {
        console.log('cacacas')
    },
    subscribe(observer) {
        this._onChange = observer
    },
    getState() {
        return store._state
    },
    dispatch(action){
        this._state.profilePage = ProfileReducer(this._state.profilePage,action)
        this._onChange()
    }
}

export default store
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