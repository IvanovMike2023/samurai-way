import {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import axios from "axios";
import {ProfileDataType, ProfilePageType, setProfileAC, setProfileTC} from "../../Redux/profile-reducer";
import {useParams} from "react-router";

export const ProfileContainer = () => {
    const {userId, fullName} = useSelector<AppRootStateType, ProfileDataType>(state => state.profile.profiledata)
    const {message, newmessage} = useSelector<AppRootStateType, ProfilePageType>(state => state.profile)

    const dispatch = useDispatch()
    let match = {params: useParams()}
    useEffect(() => {
        let userIdmatch = Number(match.params.userId)
        dispatch(setProfileTC(userId, userIdmatch))
    }, [])
    return <div>
        <Profile newmessage={newmessage} fullName={fullName} userId={userId} message={message}/>
    </div>
}
