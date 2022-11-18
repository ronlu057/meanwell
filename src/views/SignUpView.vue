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
                    <input type="email" class="signup_User_accountInput" placeholder="請輸入電子信箱" required v-model="useremail">
                </div>
                <div class="VerificationCodeBar">
                    <div class="VerifCodeTitle">驗證碼</div>
                    <div class="verificationCode">
                        <input type="text" class="verificationCodeInput" v-model="userCodes">
                        <button class="verificationCodeButtem" @click="habdleVerification()">發送驗證碼</button>
                    </div>
                </div>
                <div class="Boxbarbuttem">
                    <button class="pageButtem" @click="handleVerify">下一步</button>
                </div>
            </section>
        </div>
    </main>
</div>
</template>
<script setup>
import {ref ,onMounted} from 'vue';
import { userVerificationCode,userVerify } from '../api.js';
const useremail = ref('');
const userCodes = ref('');
const memberst = ref([
    { Type: '1', Email: '', Lang: 'tw' }
]);
const habdleVerification = () => {
    userVerificationCode ({ 
        "Type": 1,
        "Email": useremail.value,
        "Lang": "tw"
    })
        .then(res => {
        memberst.value = res;
        cookies.set( 'login', JSON.stringify( this.memberst ), { expires: 1 })
        console.log(res);
        console.log(this.memberst)
    })
    .catch(err => {
        console.log(err);
    });
}
const handleVerify = () => {
    userVerify ({
        "Type": 1,
        "Email": useremail.value,
        "Code": userCodes.value,
        "Lang": "tw"
    }).then(res => {
        
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
}
</script>