import React from 'react';
import s from './App.module.css'
import Accordion from "./Component/Accordion";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Navbar/Sidebar";
import Profile from "./Component/Profile/Profile";

function App() {
    return (
        <div className={s.App}>
            <div className={s.Wrapper_App}>
                <div className={s.header}>
                    <Header/>
                </div>
                <div className={s.Sidebar}>
                    <Sidebar/>
                </div>
                <div className={s.Content}>
                    <Profile/>
                </div>
            </div>
        </div>
    );
}

export default App;
