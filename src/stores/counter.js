import { defineStore } from "pinia";
import { ref,computed } from "vue";
import axios from 'axios';
import router from '../router/index.js';

export const useSignup = defineStore("signup", () => {
    const cardList = ref([{}]);
    const cardcode = ref([{}]);
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
    const addemail = async(mamderemail) => {
        user.value.Email = mamderemail;
        userccs.value.Email = mamderemail;
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
        } catch (error) {  }
    };
    return {
        user,
        addemail,
        checkcode,
        userccs,
        cardList,
        cardcode,
    };
});