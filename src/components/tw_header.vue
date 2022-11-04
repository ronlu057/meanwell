<template>
    <div class="lyboxbg" :class="{active : mobileMenu}">
        <div class="mobile_menus">
            <div class="cles_icon" @click="colsMobileMenu()"><img src="../img/closure_icon.svg" alt=""></div>
            <div class="logo_box"><RouterLink to="/"><img src="../img/Logos.svg" alt=""></RouterLink></div>
            <div class="mobile_signoutView active">
                <div class="mobile_sdgMenuItem">
                    <div class="menu_item_text">進入管理系統</div>
                </div>
                <div class="mobile_sdgMenuItem">
                    <div class="loging_item"><RouterLink to="/login" @click="colsMobileMenu()">登入</RouterLink> / <RouterLink to="/SignUp" @click="colsMobileMenu()">註冊</RouterLink></div>
                </div>
            </div>
            <div class="mobile_signinView ">
                <RouterLink to="/MemberCentre" @click="colsMobileMenu()"><div class="mobile_sdgMenuItem">
                    <div class="signinicon"><img src="../img/member_icon.svg" alt=""></div>
                    <div class="signinmenutext">會員中心</div>
                </div></RouterLink>
                <div class="mobile_Tosignout" @click="colsMobileMenu()">登出</div>
                <RouterLink to="/Calendar" @click="colsMobileMenu()"><div class="mobile_sdgMenuItem2">
                    <div class="signinicon"><img src="../img/calendar_icon.svg" alt=""></div>
                    <div class="signinmenutext">行事曆</div>
                </div></RouterLink>
            </div>
        </div>
    </div>
    <header>
        <div class="header_meunbar">
            <div class="logo_box"><RouterLink to="/"><img src="../img/Logos.svg" alt=""></RouterLink></div>
            <div class="system_bar">
                <div class="signoutView active">
                    <div class="sdgMenuItem">
                        <div class="menu_item_text">進入管理系統</div>
                    </div>
                    <div class="sdgMenuItem">
                        <div class="loging_item"><RouterLink to="/login">登入</RouterLink> / <RouterLink to="/SignUp">註冊</RouterLink></div>
                    </div>
                </div>
                <div class="signinView ">
                    <RouterLink to="/MemberCentre"><div class="sdgMenuItem">
                        <div class="signinicon"><img src="../img/member_icon.svg" alt=""></div>
                        <div class="signinmenutext">會員中心</div>
                    </div></RouterLink>
                    <div class="Tosignout">登出</div>
                    <RouterLink to="/Calendar"><div class="sdgMenuItem2">
                        <div class="signinicon"><img src="../img/calendar_icon.svg" alt=""></div>
                        <div class="signinmenutext">行事曆</div>
                    </div></RouterLink>
                </div>
                <div class="mobile_bar" @click="openMobileMenu()"><img src="../img/bars-solid.svg" alt=""></div>
                <div class="sdgMenuItem">
                    <div class="language_item">
                        <img src="../img/language_icon.svg" alt="">
                        <div class="language_bar">
                            <div class="language_bar_item">繁中</div>
                            <div class="language_bar_item">简中</div>
                            <div class="language_bar_item">English</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { ref } from "vue"
const mobileMenu = ref(false);
const openMobileMenu = () => {
    mobileMenu.value = true
};
const colsMobileMenu = () => {
    mobileMenu.value = false
}
</script>