import React from 'react';
import s from './App.module.css'
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Navbar/Sidebar";
import Profile from "./Component/Profile/Profile";
import {Dialogs} from "./Component/Dialogs/Dialogs";
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import {ChangeMessageAC, StoreType} from "./Redux/state";
type AppType={
    store: StoreType
}
const App:React.FC<AppType>=(props)=> {
    return (
        <BrowserRouter >
        <div className={s.App}>
            <div className={s.Wrapper_App}>
                    <Header/>
                    <Sidebar/>
                <Routes>
                    <Route path="/profile" element={<Profile
                        dispatch={props.store.dispatch.bind(props.store)}
                        newmessage={props.store._state.profilePage.newmessage}
                        profilePage={props.store._state.profilePage}/>} />
                    <Route path="/dialogs" element={ <Dialogs dialogsPage={props.store._state.dialogsPage} dispatch={props.store.dispatch.bind(props.store)} />} />
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
