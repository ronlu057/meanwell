import { defineStore } from "pinia";
import { ref,computed } from "vue";
import axios from 'axios';
import Qs from 'qs';

export const useSignup = defineStore("signup", () => {
    const cardList = ref({})
    const user = ref({
        Type: '1',
        Email: '',
        Lang: 'tw',
    });
    const addemail = (mamderemail) => {
        user.value.Email = mamderemail;
        try  {
            const res = axios.post('https://demo18.e-giant.com.tw/API_App/MemberData/SendVerifyCode', user
        )
            cardList.value = res
        } catch (error) {}
    };

    return {
        user,
        addemail,
    };
});