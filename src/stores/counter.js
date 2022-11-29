import { defineStore } from "pinia";
import { ref,computed } from "vue";
import axios from 'axios';
import router from '../router/index.js';
// ----------------註冊使用Stores----------------
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

// ----------------登入使用Stores----------------
export const useLogin = defineStore("Login", () => {
    const logindata = ref([{}]);
    const att = ref(true);
    const att2 = ref(false);
    const actInLogin = ref(false);
    const actInLogOut = ref(true);
    const mamberdata = ref([{}]);
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
    const logintodo = async(ref) =>{
            try{
            $cookies.config("1m"),
            $cookies.set( "u_id", "ronlu057@gmail.com" )
            $cookies.set( "AuthCode", "5459952541" )
            $cookies.set( "Lang", "tw" )
                const res = await axios.post('https://demo18.e-giant.com.tw/API_App/MemberData/GetData' , { "u_id": "ronlu057@gmail.com","AuthCode": "5459952541","Lang": "tw" })
                mamberdata.value = res.data
                console.log (mamberdata.value)
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

    const EventRFintor =ref({
        u_id: "string",
        AuthCode: "string",
        Lang: "string",
        ActId: "string",
        SeId: 0,
        Identity: 0,
        JoinWay: 0,
        Name: "string",
        Sex: 0,
        Mobile: "string",
        Email: "string",
        CompanyName: "string",
        JobTitle: "string",
        DocType: 0,
        DocNumber: "string",
        Meals: 0,
        Traffic: 0,
        CarNumber: "string",
        SignUpMemo: "string",
        Ticket_E_Apply: 0,
        Ticket_P_Apply: 0,
        Address: "string"
    });

    const nextsp = () => {
        router.push({name: 'RegistrationFormNext'})
    }

    return {
        EventRFintor,
        mamberdata,
        nextsp,
        logintodo,
        loginmag,
        logindata,
        att,
        att2,
        actInLogin,
        actInLogOut,
    }
})