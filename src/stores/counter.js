import { defineStore } from "pinia";
import { ref,computed } from "vue";
import axios from 'axios';
import router from '../router/index.js';

export const useSignup = defineStore("signup", () => {
    const cardList = ref([{}]);
    const cardcode = ref([{}]);
    const sple = ref([{}]);
    const user = ref({
        Type: 1,
        Email: '',
        Lang: 'tw',
    });
    const userccs = ref({
        Type: 1,
        Email: user.value.Email,
        Code: "string",
        Lang: "tw"
    });
    const userpassword = ref({
        Email: user.value.Email,
        Password: "",
        Lang: "tw"
    });
    const addemail = async(mamderemail) => {
        user.value.Email = mamderemail;
        userccs.value.Email = mamderemail;
        userpassword.value.Email = mamderemail;
        try  {
        const res = await axios.post('https://demo18.e-giant.com.tw/API_App/MemberData/SendVerifyCode', user.value
        )
            cardList.value = res
        } catch (error) {}
    };
    const checkcode = async(userCodes) => {
        userccs.value.Code = userCodes;
        try {
            const res = await axios.post('https://demo18.e-giant.com.tw/API_App/MemberData/EmailVerify', userccs.value
            )
            cardcode.value = res.data
            if (cardcode.value.success == true){
                router.push({name: 'SignUpSetPassword'})
            }
        } catch (error) {}
    };

    const passwordpet = async(StPw) => {
        userpassword.value.Password = StPw;
        try {
            const res = await axios.post('https://demo18.e-giant.com.tw/API_App/MemberData/Register', userpassword.value
            )
            sple.value = res.data
            if (sple.value.success == true){
                router.push({name: 'login'})
            }
        } catch (error) {}
    };
    return {
        user,
        addemail,
        checkcode,
        userccs,
        cardList,
        cardcode,
        passwordpet,
    };
});

export const useLogin = defineStore("Login", () => {
    const logindata = ref([{}]);
    const att = ref(true);
    const att2 = ref(false);
    const actInLogin = ref(false);
    const actInLogOut = ref(true);
    const loginmag = ref({
        u_id: "",
        RA: "",
        mpDeviceID: "",
        mpFCMID: "string",
        os: "string",
        mpPhoneType: "string",
        mpPhoneSize: "string",
        Vers: "string",
        AppVers: "string",
        Lang: "tw"
    });
    const logintodo = () =>{
            try{
            $cookies.config("1m"),
            $cookies.set( "u_id", "ronlu057@gmail.com" )
            $cookies.set( "AuthCode", "5459952541" )
            $cookies.set( "Lang", "tw" )
            } catch (error) {}
            if ( $cookies.isKey("AuthCode") == true ){
                att.value = true
                att2.value = false
                router.push({name: 'MemberCentre'})
            } else {
                att.value = false
                att2.value = true
            }
    };
    return {
        logintodo,
        loginmag,
        logindata,
        att,
        att2,
        actInLogin,
        actInLogOut,
    }
});