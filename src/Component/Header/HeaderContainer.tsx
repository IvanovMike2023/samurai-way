import react, {useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {ProfileDataType} from "../../Redux/profile-reducer";
import {authTC, AuthType, setAuthAC} from "../../Redux/auth-reducer";
import {authAPI} from "../../api/api";

export const HeaderContainer =()=>{
    const {email,resultCode}=useSelector<AppRootStateType, AuthType>(state=> state.auth)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(authTC())
    },[])

    return <>
    <Header email={email} resultCode={resultCode} />
    </>
}