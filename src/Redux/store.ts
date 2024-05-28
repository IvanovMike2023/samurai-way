import {ProfilePageType, ProfileReducer} from "./profile-reducer";
import {DialogReducer} from "./dialog-reducer";
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'

export type MessagesType = {
    id: number
    text: string
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
    users: UsersReducer,
    auth: AuthReducer
})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store