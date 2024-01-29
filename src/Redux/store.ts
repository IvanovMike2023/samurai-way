import {ProfileReducer} from "./profile-reducer";
import {DialogReducer} from "./dialog-reducer";
import { combineReducers, createStore } from 'redux'
import {UsersReducer} from "./users-reducer";
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
    dialogitem: string
}
export type DialogPageType = {
    dialogs: DialogItemType[]
    dialogmessage:string
}

export type RootStateType = {
    dialogsPage: DialogPageType
    profilePage: ProfilePageType
}
// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    profile: ProfileReducer,
    dialogs: DialogReducer,
    users: UsersReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store