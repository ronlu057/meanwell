<template>
<div class="page_main">
    <main>
        <div class="page_content">
            <section class="loginTopIcon">
                <div class="loginBigIcon"><img src="../img/LoginBigIcon.svg" alt=""></div>
            </section>
            <section class="loginContentBox">
                <div class="ContentBoxTitle">會員註冊</div>
                <div class="signup_User_account">
                    <input type="email" class="signup_User_accountInput" placeholder="請輸入電子信箱" required v-model="useremail" @click="inputs">
                    <div class="signup_User_err">{{ usererrmessage }}</div><div class="signup_User_sett">{{ usererrmessage2 }}</div>
                </div>
                <div class="VerificationCodeBar">
                    <div class="VerifCodeTitle">驗證碼</div>
                    <div class="verificationCode">
                        <input type="text" class="verificationCodeInput" v-model="userCodes" @click="inputs">
                        <button class="verificationCodeButtem" @click="handlesubmit">發送驗證碼</button>
                    </div>
                    <div class="signup_User_err">{{ usercodemessage }}</div>
                </div>
                <div class="Boxbarbuttem">
                    <button class="pageButtem" @click="handlenext">下一步</button>
                </div>
                {{ store.cardcode.success }}
            </section>
        </div>
    </main>
</div>
</template>
<script setup>
import {ref ,onMounted} from 'vue';
import {useSignup} from '../stores/counter.js';


const useremail = ref('');
const userCodes = ref('');
const usererrmessage = ref('');
const usererrmessage2 = ref('');
const usercodemessage = ref('');

const handlesubmit = () => {
    if (useremail.value !== ''){
        store.addemail(useremail.value);
        usererrmessage.value = '';
        usererrmessage2.value = ("請於10分鐘內，至您的E-mail信箱取得驗證碼");
    } else {
        usererrmessage.value = ("請輸入您的E-mail")
        usererrmessage2.value = ("")
    }
};

const handlenext = () => {
    if ( userCodes.value !== '' ) {
        store.checkcode(userCodes.value);
        usercodemessage.value = ''
    } else {
        usercodemessage.value = ("請先獲取驗證碼進行驗證")
    }
}

const inputs = () => {
    usererrmessage.value = '';
    usercodemessage.value = '';
}

const store = useSignup();

</script>