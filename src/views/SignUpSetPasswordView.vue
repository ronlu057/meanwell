<template>
<div class="page_main">
    <main>
        <div class="page_content">
            <section class="loginTopIcon">
                <div class="loginBigIcon"><img src="../img/LoginBigIcon.svg" alt=""></div>
            </section>
            <section class="loginContentBox">
                <div class="ContentBoxTitle">會員註冊</div>
                <div class="PageTitle">設定密碼</div>
                <input type="password" name="singupPW" id="" placeholder="請輸入設定密碼" class="Inputset100" v-model="StPw">
                <div class="signup_User_err">{{ paswmg }}</div>
                <div class="PageTitle">確認設定密碼</div>
                <input type="password" name="singupPW" id="" placeholder="請輸入確認設定密碼" class="Inputset100" v-model="VePw">
                <div class="signup_User_err">{{ paswerrmg }}</div>
                <div class="page_confirm_input">
                    <label>
                        <input type="checkbox" name="confirm_lre" id="" v-model="checked" @click="terms">
                        <span>我已詳細閱讀並同意</span>
                    </label>
                    <span class="pagelabelText"><RouterLink to="">會員條款</RouterLink></span>
                    <div class="signup_User_err">{{ readmg }}</div>
                </div>
                <div class="Boxbarbuttem2">
                    <button class="pageButtem" @click="handlest">確認送出</button>
                </div>
            </section>
        </div>
    </main>
</div>
</template>
<script setup>
import {ref ,onMounted} from 'vue';
import {useSignup} from '../stores/counter.js';

const checked = ref(false);
const readmg = ref('');
const paswmg = ref('');
const paswerrmg = ref('');
const StPw = ref('');
const VePw = ref('');

const terms = () => {
    if ( checked.value = true ) {
        readmg.value = ("")
    }
}

const handlest = () => {
    if ( checked.value == false ){
        readmg.value = ("請閱讀會員條款，同意後請於前方打勾同意")
    } else if ( checked.value == true ) {
        readmg.value = ("")
    }
    if ( StPw.value == "" ){
        paswmg.value = ("請輸入6-12 英文字母與數字密碼")
    } else {
        let reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,14}$/;
        if(!reg.test(StPw.value)) {
            paswmg.value = ("格式錯誤，請輸入6-12 英文字母與數字密碼")
        } else {
            paswmg.value = ""
        }
    }
    if (VePw.value !== StPw.value){
        paswerrmg.value = ("確認密碼與設定密碼不相同請重新輸入謝謝");
        VePw.value = ('')
    } else {
        paswerrmg.value = ''
        store.passwordpet(StPw.value);
    }
};

const store = useSignup();


</script>