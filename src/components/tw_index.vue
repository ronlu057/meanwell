
<script setup>
import {ref ,onMounted} from 'vue';  
import {useLogin} from '../stores/counter.js';
import router from '../router/index.js';
const store = useLogin()

onMounted(()=>{
    if ($cookies.isKey("u_id") == true && $cookies.isKey("AuthCode") == true) {
        store.actInLogOut = false;
        store.actInLogin = true;
    } else {
        store.actInLogOut = true;
        store.actInLogin = false;
    }
});

const ActivityLink = () => {
    if ( $cookies.isKey("u_id") == true && $cookies.isKey("AuthCode") == true) {
        router.push({name: 'Course_Overview'})
    } else {
        router.push({name: 'login'})
    }
};

</script>
<template>
    <div class="page_main">
    <main>
        <div class="page_content">
            <div class="indexPageTitle">多元服務，價值共享</div>
            <section class="indexActivityBar">
                <div class="indAct_item_Box">
                    <ul>
                        <a href="javascript:;" @click="ActivityLink"><li>
                            <div class="atcImgBox"><img src="../img/activity_1.svg" alt=""></div>
                            <div class="atcText Conference">會議活動</div>
                        </li></a>
                        <a href="javascript:;" @click="ActivityLink"><li>
                            <div class="atcImgBox"><img src="../img/activity_2.svg" alt=""></div>
                            <div class="atcText EducationTraining">教育訓練</div>
                        </li></a>
                        <a href="javascript:;" @click="ActivityLink"><li>
                            <div class="atcImgBox"><img src="../img/activity_3.svg" alt=""></div>
                            <div class="atcText TourGuide">活動導覽</div>
                        </li></a>
                        <a href="javascript:;" @click="ActivityLink"><li>
                            <div class="atcImgBox"><img src="../img/activity_4.svg" alt=""></div>
                            <div class="atcText CaringCare">關懷照護</div>
                        </li></a>
                        <a href="javascript:;" @click="ActivityLink"><li>
                            <div class="atcImgBox"><img src="../img/activity_5.svg" alt=""></div>
                            <div class="atcText GiftingPlatform">禮贈平台</div>
                        </li></a>
                    </ul>
                </div>
            </section>
            <section class="AnnouncementSystem">
                <div class="AnnouncementSystemBox">
                    <ul>
                        <li>
                            <div class="AnnTop">
                                <div class="AnnTopIcon"><img class="messageIcon" src="../img/message_icon.svg" alt=""></div>
                                <div class="AnnTopText">訊息通知</div>
                            </div>
                            <div class="AnnContent">
                                <ul v-show="store.actInLogOut">
                                    <li class="ConferenceLine"><a href="">請先登入會員</a></li>
                                </ul>
                                <ul v-show="store.actInLogin">
                                    <li class="ConferenceLine"><a href="">6/20(一)10：00 7A 服務會議</a></li>
                                    <li class="EducationTrainingLine"><a href="">6/24(五)14：00 8F SDG學員講座</a></li>
                                    <li class="GiftingPlatformLine"><a href="">訂單000000 商品預計於7/1出貨</a></li>
                                    <li class="ConferenceLine"><a href="">6/20(一)10：00 7A 服務會議</a></li>
                                    <li class="EducationTrainingLine"><a href="">6/24(五)14：00 8F SDG學員講座</a></li>
                                    <li class="GiftingPlatformLine"><a href="">訂單000000 商品預計於7/1出貨</a></li>
                                    <li class="ConferenceLine"><a href="">6/20(一)10：00 7A 服務會議</a></li>
                                    <li class="EducationTrainingLine"><a href="">6/24(五)14：00 8F SDG學員講座</a></li>
                                    <li class="GiftingPlatformLine"><a href="">訂單000000 商品預計於7/1出貨</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="AnnTop">
                                <div class="AnnTopIcon"><img src="../img/news_icon.svg" alt=""></div>
                                <div class="AnnTopText">最新動態</div>
                            </div>
                            <div class="AnnContent">
                                <ul>
                                    <li class="NewsLine"><a href="">2022荷蘭台灣端午節龍舟競賽活動</a></li>
                                    <li class="NewsLine"><a href="">明緯 「我愛淡水河」近4000人摻與環保論壇聚焦重度河水汙染指數淨零</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="AnnTop">
                                <div class="AnnTopIcon"><img src="../img/gift.svg" alt=""></div>
                                <div class="AnnTopText">禮贈推薦</div>
                            </div>
                            <div class="AnnContent">
                                <ul>
                                    <li class="GiftingPlatformLine"><a href="">2022.6 初夏購物節開跑嚕 !</a></li>
                                    <li class="GiftingPlatformLine"><a href="">2022.6 芒果季期間限定 6-8月</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </main>
    </div>
</template>