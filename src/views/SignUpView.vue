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
                    {{ store.user.Email }}
                </div>
                <div class="VerificationCodeBar">
                    <div class="VerifCodeTitle">驗證碼</div>
                    <div class="verificationCode">
                        <input type="text" class="verificationCodeInput" v-model="userCodes">
                        <button class="verificationCodeButtem" @click="handlesubmit">發送驗證碼</button>
                    </div>
                </div>
                <div class="Boxbarbuttem">
                    <button class="pageButtem">下一步</button>
                </div>
            </section>
        </div>
    </main>
</div>
</template>
<script setup>
import {ref ,onMounted} from 'vue';
import {useSignup} from '../stores/counter.js';


const useremail = ref('');
const handlesubmit = () => {
    store.addemail(useremail.value);
};
const userCodes = ref('');
const store = useSignup();




</script>