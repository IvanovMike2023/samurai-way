import react, {useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {ProfileDataType} from "../../Redux/profile-reducer";
import {AuthType, setAuthAC} from "../../Redux/auth-reducer";

export const HeaderContainer =()=>{
    const {email,resultCode}=useSelector<AppRootStateType, AuthType>(state=> state.auth)
    const dispatch = useDispatch()
    const instance = axios.create({
        withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.0', headers: {
            'API-KEY': '8f2534e2-22a4-4052-894e-a66c04807482'
        }
    })
    useEffect(()=>{
        instance.get('auth/me').then((res)=>{
            console.log(res.data.data.login)
             dispatch(setAuthAC(res.data.data.login))
        })
    },[])

    console.log(email)
    return <>
    <Header email={email} resultCode={resultCode} />
    </>
}