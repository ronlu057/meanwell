<template>
    <main>
        <div class="page_content">
            <div class="PageBreadCrumbs">
                <ul>
                    <li>首頁</li>
                    <li>></li>
                    <li>帳號管理</li>
                    <li>></li>
                    <li>個人資料</li>
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
                        <div class="memberUserQRcord">
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
                            <div class="itemTitletext">姓名</div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>
<script setup>
    import { ref } from "vue"
    const activeIdx = ref(1);
    const activeIddx = ref(0);
    const NavItemArr = ref([
        {
            name: 'SDG帳戶',
            path: '/MemberCentre',
        },{
            name: '帳號管理',
            path: '/PersonalInformation',
            item:[
                {
                    name: '個人資料',
                    path: '/PersonalInformation',
                },{
                    name: '登入設定',
                    path: '/home',
                },{
                    name: '變更密碼',
                    path: '/home',  
                },{
                    name: '會員管理辦法',
                    path: '/home',  
                }
            ]
        },{
            name: '我的活動',
            path: '/home', 
            item:[
                {
                    name: '活動列表',
                    path: '/goods',
                },{
                    name: '進行中',
                    path: '/home',
                },{
                    name: '已結束',
                    path: '/home',  
                },{
                    name: '已取消',
                    path: '/home',  
                }
            ] 
        },{
            name: '領取分票',
            path: '/home',  
        }
    ]);
    const handleMenuFn = (idx) => {
      activeIdx.value = idx;
    };
    const handleMenuFna = (iddx) => {
        activeIddx.value = iddx;
    };
    const handleMenuFnb = () => {
        activeIddx.value = 0;
    };
</script>