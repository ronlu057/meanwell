import axios from 'axios';

// user相關api
const userRequest = axios.create({
    baseURL: 'https://demo18.e-giant.com.tw/API_App/MemberData'
});

// user相關api
export const userLogin = data => userRequest.post('/Login', data);
export const userSignup = data => userRequest.post('/Register', data);
export const userVerificationCode = data => userRequest.post('/SendVerifyCode', data);
export const userVerify = data => userRequest.post('/EmailVerify', data);