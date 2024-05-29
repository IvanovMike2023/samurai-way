import React from 'react';
import s from './App.module.css'
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Navbar/Sidebar";
import Profile from "./Component/Profile/Profile";
import {DialogContainer} from "./Component/Dialogs/DialogContainer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/store";
import {ProfilePageType} from "./Redux/profile-reducer";
import {DialogPageType} from "./Redux/dialog-reducer";
import {UsersContainer} from "./Component/Users/UsersContainer";
import {ProfileContainer} from "./Component/Profile/ProfileContainer";
import {HeaderContainer} from "./Component/Header/HeaderContainer";
import {LoginPage} from "./Component/LoginPage/LoginPage";

const App = () => {
    //const {message, newmessage} = useSelector<AppRootStateType, ProfilePageType>(state => state.profile)

    const dispatch = useDispatch()
    return (
        <BrowserRouter>
            <div className={s.App}>
                <div className={s.Wrapper_App}>
                    <HeaderContainer/>
                    <Sidebar/>
                    <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="/dialogs" element={<DialogContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
