<template>
<div class="page_course_main">
    <main>
        <div class="page_content">
            <div class="PageBreadCrumbs">
                <ul>
                    <li>首頁</li>
                    <li>></li>
                    <li>活動列表</li>
                </ul>
            </div>
            <div class="BannerBar">
                <div class="banner_content"><img src="../img/102766030_m.jpg" alt=""></div>
            </div>
            <div class="Course_titleBar">
                <div class="Course_title">活動列表</div>
                <div class="Search_bar"><input type="search" name="" id="" class="Course_Search_bar"></div>
            </div>
            <div class="Course_List_Box">
                <router-link to="/Course/CourseContent">
                    <div class="Course_List_Item ">
                        <div class="Course_date_left toTop">
                            <div class="CoursedateBox">
                                <div class="CoursedateMonth">12</div><div class="CoursedateMonthText">月</div>
                            </div>
                        </div>
                        <div class="Course_date_right OpenForRegistration">
                            <div class="Course_item_title">蘇州智慧園區開幕儀式</div>
                            <div class="Course_item_location">蘇州智慧園區 / 線上直播</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/Course/CourseContent">
                    <div class="Course_List_Item ">
                        <div class="Course_date_left toTop">
                            <div class="CoursedateBox">
                                <div class="CoursedateMonth">11</div><div class="CoursedateMonthText">月</div>
                            </div>
                        </div>
                        <div class="Course_date_right OpenForRegistration">
                            <div class="Course_item_title">蘇州智慧園區開幕儀式</div>
                            <div class="Course_item_location">蘇州智慧園區 / 線上直播</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/Course/CourseContent">
                    <div class="Course_List_Item ">
                        <div class="Course_date_left">
                            <div class="CoursedateBox">
                                <div class="CoursedateMonth">10</div><div class="CoursedateMonthText">月</div>
                            </div>
                        </div>
                        <div class="Course_date_right OpenForRegistration">
                            <div class="Course_item_title">蘇州智慧園區開幕儀式</div>
                            <div class="Course_item_location">蘇州智慧園區 / 線上直播</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/Course/CourseContent">
                    <div class="Course_List_Item ">
                        <div class="Course_date_left">
                            <div class="CoursedateBox">
                                <div class="CoursedateMonth">10</div><div class="CoursedateMonthText">月</div>
                            </div>
                        </div>
                        <div class="Course_date_right OpenForRegistration">
                            <div class="Course_item_title">蘇州智慧園區開幕儀式</div>
                            <div class="Course_item_location">蘇州智慧園區 / 線上直播</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/Course/CourseContent">
                    <div class="Course_List_Item ">
                        <div class="Course_date_left">
                            <div class="CoursedateBox">
                                <div class="CoursedateMonth">9</div><div class="CoursedateMonthText">月</div>
                            </div>
                        </div>
                        <div class="Course_date_right RegistrationDeadline">
                            <div class="Course_item_title">蘇州智慧園區開幕儀式</div>
                            <div class="Course_item_location">蘇州智慧園區 / 線上直播</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/Course/CourseContent">
                    <div class="Course_List_Item ">
                        <div class="Course_date_left">
                            <div class="CoursedateBox">
                                <div class="CoursedateMonth">8</div><div class="CoursedateMonthText">月</div>
                            </div>
                        </div>
                        <div class="Course_date_right RegistrationDeadline">
                            <div class="Course_item_title">蘇州智慧園區開幕儀式</div>
                            <div class="Course_item_location">蘇州智慧園區 / 線上直播</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/Course/CourseContent">
                    <div class="Course_List_Item ">
                        <div class="Course_date_left">
                            <div class="CoursedateBox">
                                <div class="CoursedateMonth">8</div><div class="CoursedateMonthText">月</div>
                            </div>
                        </div>
                        <div class="Course_date_right RegistrationDeadline">
                            <div class="Course_item_title">蘇州智慧園區開幕儀式</div>
                            <div class="Course_item_location">蘇州智慧園區 / 線上直播</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/Course/CourseContent">
                    <div class="Course_List_Item ">
                        <div class="Course_date_left">
                            <div class="CoursedateBox">
                                <div class="CoursedateMonth">8</div><div class="CoursedateMonthText">月</div>
                            </div>
                        </div>
                        <div class="Course_date_right RegistrationDeadline">
                            <div class="Course_item_title">蘇州智慧園區開幕儀式</div>
                            <div class="Course_item_location">蘇州智慧園區 / 線上直播</div>
                        </div>
                    </div>
                </router-link>
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