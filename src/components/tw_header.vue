<template>
    <div class="lyboxbg" :class="{active : mobileMenu}">
        <div class="mobile_menus">
            <div class="cles_icon" @click="colsMobileMenu()"><img src="../img/closure_icon.svg" alt=""></div>
            <div class="logo_box" @click="colsMobileMenu()"><RouterLink to="/"><img src="../img/Logos.svg" alt=""></RouterLink></div>
            <div class="mobile_signoutView">
                <div class="mobile_sdgMenuItem">
                    <div class="menu_item_text">進入管理系統</div>
                </div>
                <div class="mobile_sdgMenuItem">
                    <div class="loging_item"><RouterLink to="/login" @click="colsMobileMenu()">登入</RouterLink> / <RouterLink to="/SignUp" @click="colsMobileMenu()">註冊</RouterLink></div>
                </div>
            </div>
            <div class="mobile_signinView">
                <RouterLink to="/MemberCentre" @click="colsMobileMenu()"><div class="mobile_sdgMenuItem">
                    <div class="signinicon"><img src="../img/member_icon.svg" alt=""></div>
                    <div class="signinmenutext">會員中心</div>
                </div></RouterLink>
                <div class="mobile_member">
                    <div class="memberNavItem" v-for="(items, idx) in NavItemArr" :key="items.name" :class="{ active: mobileactiveIdx === idx }" @click="handleMenuFn(idx)">
                        <router-link :to="items.path"><div class="navItems"  @click="handleMenuFnb(ia)" >
                            <div class="memberNavItemLine"></div>
                            <div class="memberNavItemtext">{{ items.name }}</div>
                        </div></router-link>
                        <div class="navItemSort">
                            <div class="navItemSortContent">
                                <div class="navItemSortContentItem" :class="{ active: mobileactiveIddx === iddx }" v-for="(itax, iddx) in items.item" :key="itax.name" @click="handleMenuFna(iddx)">
                                    <router-link :to="itax.path">{{ itax.name }}</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <RouterLink to="/Calendar" @click="colsMobileMenu()"><div class="mobile_sdgMenuItem2">
                    <div class="signinicon"><img src="../img/calendar_icon.svg" alt=""></div>
                    <div class="signinmenutext">行事曆</div>
                </div></RouterLink>

                <div class="mobile_Tosignout" @click="colsMobileMenu()">登出</div>
            </div>
            
        </div>
    </div>
    <header>
        <div class="header_meunbar">
            <div class="logo_box"><RouterLink to="/"><img src="../img/Logos.svg" alt=""></RouterLink></div>
            <div class="system_bar">
                <div class="signoutView" :class="{active: store.att}">
                    <div class="sdgMenuItem">
                        <div class="menu_item_text">進入管理系統</div>
                    </div>
                    <div class="sdgMenuItem">
                        <div class="loging_item"><RouterLink to="/login">登入</RouterLink> / <RouterLink to="/SignUp">註冊</RouterLink></div>
                    </div>
                </div>
                <div class="signinView " :class="{active: store.att2}">
                    <RouterLink to="/MemberCentre"><div class="sdgMenuItem">
                        <div class="signinicon"><img src="../img/member_icon.svg" alt=""></div>
                        <div class="signinmenutext">會員中心</div>
                    </div></RouterLink>
                    <a href="" @click="logout"><div class="Tosignout">登出</div></a>
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
                            <a href="javascript:;" ><div class="language_bar_item" @click="$i18n.locale='tw'">繁中</div></a>
                            <a href="javascript:;" ><div class="language_bar_item" @click="$i18n.locale='cn'">简中</div></a>
                            <a href="javascript:;" ><div class="language_bar_item" @click="$i18n.locale='en'">English</div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { onMounted, ref } from "vue"
import router from '../router/index.js';
import { useLogin } from '../stores/counter.js';
const mobileMenu = ref(false);
const store = useLogin()
const mobileactiveIddx = ref(null);
const mobileactiveIdx = ref(null);
const NavItemArr = ref([
        {
            name: 'SDG帳戶',
            path: '/MemberCentre',
        },{
            name: '帳號管理',
            path: '',
            item:[
                {
                    name: '個人資料',
                    path: '/PersonalInformation',
                },{
                    name: '登入設定',
                    path: '/LoginSettings',
                },{
                    name: '變更密碼',
                    path: '/ChangePassword',  
                },{
                    name: '會員管理辦法',
                    path: '/MembershipManagementMeasures',  
                }
            ]
        },{
            name: '我的活動',
            path: '', 
            item:[
                {
                    name: '進行中',
                    path: '/ActivityListOngoing',
                },{
                    name: '已結束',
                    path: '/ActivityListOver',  
                },{
                    name: '已取消',
                    path: '/ActivityListCancelled',  
                }
            ] 
        },{
            name: '領取分票',
            path: '/VotesTaken',  
        }
    ]);

const openMobileMenu = () => {
    mobileMenu.value = true
    mobileactiveIddx.value = null
    mobileactiveIdx.value = null
};
const colsMobileMenu = () => {
    mobileMenu.value = false
}
const handleMenuFn = (idx) => {
        mobileactiveIdx.value = idx;
    };
const handleMenuFna = (iddx) => {
        mobileactiveIddx.value = iddx;
        mobileMenu.value = false;
};
console.log( store.att )
console.log( store.att2 )

onMounted(() => {
    if ($cookies.isKey("u_id") == true) {
        store.att = true
        store.att2 = false
    } else {
        store.att = false
        store.att2 = true
    }
});
const logout = () => {
    $cookies.remove("u_id")
    $cookies.remove("AuthCode")
    $cookies.remove("Lang")
    router.push({name: 'index'})
}


    
</script>