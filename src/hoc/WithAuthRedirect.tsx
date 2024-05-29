import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/store";
type MapStatePropsType={
    isAuth: boolean
}
const mapStateToProps=(state:AppRootStateType)=>{
    return {
        isAuth: state.auth.isauth
    }
}
export function WithAuthRedirect<T>(Component: ComponentType<T>){
    const NavigateComponent=(props:MapStatePropsType)=>{
        let {isAuth,...restProps}=props
        if(!isAuth) return <Navigate to={'/login'} />
        return <Component {...restProps as T}/>
    }
    let ConnectNavigateComponent=connect(mapStateToProps)(NavigateComponent)
    return ConnectNavigateComponent
}