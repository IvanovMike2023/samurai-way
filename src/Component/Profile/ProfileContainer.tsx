import {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import axios from "axios";
import {ProfileDataType, ProfilePageType, setProfileAC} from "../../Redux/profile-reducer";
import {useParams} from "react-router";


export const ProfileContainer = () => {
    const {userId, fullName} = useSelector<AppRootStateType, ProfileDataType>(state => state.profile.profiledata)
    const {message, newmessage} = useSelector<AppRootStateType, ProfilePageType>(state => state.profile)
    const instance = axios.create({
        withCredentials: true, baseURL: 'https://social-network.samuraijs.com/api/1.0', headers: {
            'API-KEY': '8f2534e2-22a4-4052-894e-a66c04807482'
        }
    })

    const dispatch = useDispatch()
    let match = {params: useParams()}
    useEffect(() => {
        let userIdmatch = match.params.userId
        if(userIdmatch){
            instance.get(`profile/` + userIdmatch).then((res) => {
                dispatch(setProfileAC(res.data))
            })
        }
        instance.get(`profile/` + userId).then((res) => {
            dispatch(setProfileAC(res.data))
        })
    }, [])
    return <div>
        <Profile newmessage={newmessage} fullName={fullName} userId={userId} message={message}/>
    </div>
}
