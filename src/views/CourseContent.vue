<template>
<div class="page_course_main">
    <main>
        <div class="page_content avt">
            <div class="PageBreadCrumbs">
                <ul>
                    <li>首頁</li>
                    <li>></li>
                    <li>活動列表</li>
                    <li>></li>
                    <li>蘇州智慧園區開幕儀式</li>
                </ul>
            </div>
            <div class="BannerBar">
                <div class="banner_content"><img src="../img/102766030_m.jpg" alt=""></div>
            </div>
            <div class="CourseContentBox mobileSS">
                <div class="activitiesTitle">蘇州智慧園區開幕儀式</div>
                <div class="Coursebuttoon"><router-link to="/Course/RegistrationForm"><button class="CoursebuttoonSet">前往報名</button></router-link></div>
                <div class="itemTitle">
                    <div class="itemTitleLine"></div>
                    <div class="itemTitletext">簡介</div>
                </div>
                <div class="CourseIntroduction">
                    明緯集團致力於標準電源市場已逾40年，全球營業額已超過美金1 Billion (10億美金)，考量集團長期永續發展策略，成立SDG集團 (包含明緯集團/ 聯源集團/ 協緯集團 )，強化既有優勢，建構 SDG產業價值網，滿足廣大客戶應用配套需求，將多產業標準電源產品，結合各項國際標准通信與智控技術，跨入BA (Building Automation)產業，提供最佳性價比標準產品組合與解決方案，從 Manufacturer轉成為 Solution Provider，建構 SDG 集團智能化標準電源領航者地位。
                </div>
                <div class="itemTitle">
                    <div class="itemTitleLine"></div>
                    <div class="itemTitletext">時間</div>
                </div>
                <div class="CourseIntroduction">
                    <div class="CourseIntroduction_item">2022/11/10(四) 09:00-12:00</div>
                    <div class="CourseIntroduction_item">2022/11/10(四) 13:00-15:00</div>
                    <div class="CourseIntroduction_item">2022/11/10(四) 15:00-17:00</div>
                </div>
                <div class="itemTitle">
                    <div class="itemTitleLine"></div>
                    <div class="itemTitletext">地點</div>
                </div>
                <div class="CourseIntroduction">
                    <div class="CourseIntroduction_item">主場區：蘇州明緯智慧園區</div>
                    <div class="CourseIntroduction_item">(蘇州市相城區黃埭鎮長平路269號)</div>
                    <div class="CourseIntroduction_item">直播連線：明緯總部</div>
                    <div class="CourseIntroduction_item">(新北市五股區五權三路28號8F)</div>
                </div>
                <div class="itemTitle">
                    <div class="itemTitleLine"></div>
                    <div class="itemTitletext">注意事項</div>
                </div>
                <div class="CourseIntroduction">
                    可邀請朋友一同參與。
                </div>
            </div>
            
        </div>
    </main>
</div>
</template>
<script setup>
    import { ref } from "vue"
    const activeIdx = ref(2);
    const activeIddx = ref(0);
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
</script>