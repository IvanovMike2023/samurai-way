import React from 'react';
import s from './App.module.css'
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Navbar/Sidebar";
import Profile from "./Component/Profile/Profile";
import {Dialogs} from "./Component/Dialogs/Dialogs";
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/store";
import {ProfilePageType} from "./Redux/profile-reducer";
import {DialogPageType} from "./Redux/dialog-reducer";

const App=()=> {
    const {message,newmessage} = useSelector<AppRootStateType,ProfilePageType>(state=>state.profile)
    const {dialogs,dialogmessage} = useSelector<AppRootStateType,DialogPageType>(state=>state.dialogs)

    const dispatch = useDispatch()
    return (
        <BrowserRouter >
        <div className={s.App}>
            <div className={s.Wrapper_App}>
                    <Header/>
                    <Sidebar/>
                <Routes>
                    <Route path="/profile" element={<Profile
                        newmessage={newmessage}
                        message={message}/>} />
                    <Route path="/dialogs" element={ <Dialogs dialogs={dialogs} dialogmessage={dialogmessage} />} />
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
