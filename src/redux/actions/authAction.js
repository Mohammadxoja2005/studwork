import axios from "axios";
import { API_PATH, USER_TOKEN } from "../../tools/constants";
import { UPDATE_AUTH } from "../types/auth";


export const updateAuth = state => {
    return {
        type: UPDATE_AUTH,
        payload: state
    }
}

export const test = () => async (dispatch) => {
    try {
        console.log('Test');
    } catch (err) {
        console.log(err);
    }
}

export const REGISTER = (phone, username, password, errorPhoneNotification) => async dispatch => {

    // try {
    return axios.post(API_PATH + 'accounts/register/', { phone, username, password })
        .then((res) => {
            // console.log(res);
            dispatch(updateAuth({ isVerify: true }))
            // nav('/Verify', { replace: true })
        })
        .catch((err) => {
            errorPhoneNotification()
            console.log(err);

        })
    // } catch (err) {
    //     console.log(err);
    // }
}

export const REGISTERVERIFY = (phone, code, password, successNotification, errorCodeNotification) => async dispatch => {
    try {
        await axios.post(API_PATH + 'accounts/verify-register/', { phone, code, password })
            .then((res) => {
                dispatch(updateAuth({ isVerify: false, isLogin: true }))
                // nav('/Verify', { replace: true }) 
                successNotification();
            })
            .catch((err) => {
                errorCodeNotification();
                console.log(err);
            })
    } catch (err) {
        console.log(err);
    }
}



export const LOGIN = (phone, password, nav, successLoginNotification, unSuccessLoginNotification) => async dispatch => {
    try {
        await axios.post(API_PATH + 'accounts/login/', { phone, password })
            .then((res) => {
                console.log(res);
                localStorage.setItem(USER_TOKEN, res.data.token);
                localStorage.setItem('userIndex', res.data.id); 
                successLoginNotification()
                nav('/Orders', { replace: true })
            })
            .catch((err) => { 
                unSuccessLoginNotification()
                console.log(err);
            })
    } catch (err) {
        console.log(err);
    }
}