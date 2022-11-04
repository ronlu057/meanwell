<template>
<div class="page_main">
    <main>
        <div class="page_content">
            <div class="PageBreadCrumbs">
                <ul>
                    <li>首頁</li>
                    <li>></li>
                    <li>我的活動</li>
                    <li>></li>
                    <li>進行中</li>
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
                    
                    <div class="ActiveDirectoryContentBox">
                        <div class="itemTitle">
                            <div class="itemTitleLine"></div>
                            <div class="itemTitletext">我的活動列表</div>
                        </div>
                        <div class="ActiveList">
                            <RouterLink to="/ActivitiesOngoing"><div class="activelist-item-bar">
                                <div class="activelist-item">
                                    <div class="activelistdate">
                                        <div class="activelistdateMonth">12</div>
                                        <div class="activelistdateMonthbefore">月</div>
                                    </div>
                                    <div class="activelistTextBar">
                                        <div class="activelistText">活動場次：2022/10/01 10:00-12:00</div>
                                        <div class="activelistText">主題：蘇州智慧園區開幕儀式</div>
                                        <div class="activelistText">地點：蘇州智慧園區 / 線上直播</div>
                                    </div>
                                </div>
                            </div></RouterLink>
                            <RouterLink to="/ActivitiesOngoing"><div class="activelist-item-bar">
                                <div class="activelist-item">
                                    <div class="activelistdate">
                                        <div class="activelistdateMonth">11</div>
                                        <div class="activelistdateMonthbefore">月</div>
                                    </div>
                                    <div class="activelistTextBar">
                                        <div class="activelistText">活動場次：2022/10/01 10:00-12:00</div>
                                        <div class="activelistText">主題：蘇州智慧園區開幕儀式</div>
                                        <div class="activelistText">地點：蘇州智慧園區 / 線上直播</div>
                                    </div>
                                </div>
                            </div></RouterLink>
                            <RouterLink to="/ActivitiesOngoing"><div class="activelist-item-bar">
                                <div class="activelist-item">
                                    <div class="activelistdate">
                                        <div class="activelistdateMonth">10</div>
                                        <div class="activelistdateMonthbefore">月</div>
                                    </div>
                                    <div class="activelistTextBar">
                                        <div class="activelistText">活動場次：2022/10/01 10:00-12:00</div>
                                        <div class="activelistText">主題：蘇州智慧園區開幕儀式</div>
                                        <div class="activelistText">地點：蘇州智慧園區 / 線上直播</div>
                                    </div>
                                </div>
                            </div></RouterLink>
                            <RouterLink to="/ActivitiesOngoing"><div class="activelist-item-bar">
                                <div class="activelist-item">
                                    <div class="activelistdate">
                                        <div class="activelistdateMonth">9</div>
                                        <div class="activelistdateMonthbefore">月</div>
                                    </div>
                                    <div class="activelistTextBar">
                                        <div class="activelistText">活動場次：2022/10/01 10:00-12:00</div>
                                        <div class="activelistText">主題：蘇州智慧園區開幕儀式</div>
                                        <div class="activelistText">地點：蘇州智慧園區 / 線上直播</div>
                                    </div>
                                </div>
                            </div></RouterLink>
                            <RouterLink to="/ActivitiesOngoing"><div class="activelist-item-bar">
                                <div class="activelist-item">
                                    <div class="activelistdate">
                                        <div class="activelistdateMonth">9</div>
                                        <div class="activelistdateMonthbefore">月</div>
                                    </div>
                                    <div class="activelistTextBar">
                                        <div class="activelistText">活動場次：2022/10/01 10:00-12:00</div>
                                        <div class="activelistText">主題：蘇州智慧園區開幕儀式</div>
                                        <div class="activelistText">地點：蘇州智慧園區 / 線上直播</div>
                                    </div>
                                </div>
                            </div></RouterLink>
                        </div>
                        <div class="pagination">
                            <a href="javascript:;"><div class="pagination_item_previous"> <img src="../img/chevron-left.svg" alt=""> </div></a>
                            <a href="javascript:;"><div class="pagination_item"> 1 </div></a>
                            <a href="javascript:;"><div class="pagination_item"> 2 </div></a>
                            <a href="javascript:;"><div class="pagination_item"> 3 </div></a>
                            <a href="javascript:;"><div class="pagination_item"> 4 </div></a>
                            <a href="javascript:;"><div class="pagination_item_next"> <img src="../img/chevron-right.svg" alt=""> </div></a>
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
    const activeIdx = ref(2);
    const activeIddx = ref(0);
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
        console.log(activityset.value)
    };
    const qropen = () => {
        qrcshow.value = true;
    }
    const qrclosures = () => {
        qrcshow.value = false;
    }
</script>