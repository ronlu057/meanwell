<template>
<div class="page_main">
    <main>
        <div class="page_content">
            <div class="PageBreadCrumbs">
                <ul>
                    <li>首頁</li>
                    <li>></li>
                    <li>領取分票</li>
                </ul>
            </div>
            <section class="MemberCentreContent">
                <div class="memberNav">
                    <div class="memberNavItem" v-for="(items, idx) in NavItemArr" :key="items.name" :class="{ active: activeIdx === idx }" @click="handleMenuFn(idx)">
                        <router-link :to="items.path"><div class="navItems"  @click="handleMenuFnb(ia)">
                            <div class="memberNavItemLine"></div>
                            <div class="memberNavItemtext">{{ items.name }}</div>
                        </div></router-link>
                        <div class="navItemSort">
                            <div class="navItemSortContent">
                                <div class="navItemSortContentItem" :class="{ active: activeIddx === iddx }" v-for="(itax, iddx) in items.item" :key="itax.name" @click="handleMenuFna(iddx)"><router-link :to="itax.path">{{ itax.name }}</router-link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="memberCenterRight">
                    <div class="memberCenterRightTopBox">
                        <div class="memberUserBox">
                            <div class="memberUserBoxLeft"><img src="../img/memberUserIcon.svg" alt=""></div>
                            <div class="memberUserName">王小明  您好!</div>
                        </div>
                        <div class="memberUserQRcord" @click="qropen()">
                            <div class="MembershipLevelBox">
                                <div class="memberleve">銀卡會員</div>
                                <div class="memberqrtext">我的會員QRCORD</div>
                            </div>
                            <div class="qrcodeph"><img src="../img/qr-code-line.svg" alt=""></div>
                        </div>
                    </div>
                    <div class="memberCenterRightContentBox">
                        <div class="itemTitle">
                            <div class="itemTitleLine"></div>
                            <div class="itemTitletext">訂票代碼</div>
                        </div>
                        <div class="memberinfTextinput"><input type="text" name="" id="" class="memberinfinput" placeholder="請輸入分票代碼"></div>
                        <div class="itemTitle">
                            <div class="itemTitleLine"></div>
                            <div class="itemTitletext">訂票驗證碼</div>
                        </div>
                        <div class="memberinfTextinput"><input type="text" name="" id="" class="memberinfinput" placeholder="請輸入訂票驗證碼"></div>
                        <div class="persbuttonBox">
                            <router-link to="/ActivityListOngoing"><button class="pageButtem">確認送出</button></router-link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    <div class="leyboxbg" :class="{ active: qrcshow }" @click="qrclosures()">
        <div class="leyboxcontent">
            <div class="leyboxcontent_txt">會員 QRCORD</div>
            <div class="qrcordphoto"><img src="../img/qrcode.svg" alt=""></div>
            <div class="closure_icon_set" @click="qrclosures()"><img src="../img/closure_icon.svg" alt=""></div>
        </div>
    </div>
</div>
</template>
<script setup>
    import { ref } from "vue"
    const activeIdx = ref(3);
    const activeIddx = ref(null);
    const activityset = ref(0);
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
    const qrcshow = ref(false);
    const Activitystate = ref([
        { state: '進行中',path: '/ActivityListOngoing' },{ state: '已結束',path: '/ActivityListOver' },{ state: '已取消',path: '/ActivityListCancelled' }
    ]);
    const handleMenuFn = (idx) => {
      activeIdx.value = idx;
    };
    const handleMenuFna = (iddx) => {
        activeIddx.value = iddx;
    };
    const handleMenuFnb = () => {
        activeIddx.value = 0;
        if( activeIdx.value == 2 ){
            activeIddx.value = null;
        }
    };
    const stateset = (idw) => {
        activityset.value = idw;
    };
    const qropen = () => {
        qrcshow.value = true;
    }
    const qrclosures = () => {
        qrcshow.value = false;
    }
</script>