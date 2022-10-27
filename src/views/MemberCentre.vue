<template>
    <main>
        <div class="page_content">
            <div class="PageBreadCrumbs">
                <ul>
                    <li>首頁</li>
                    <li>></li>
                    <li>會員中心</li>
                </ul>
            </div>
            <section class="MemberCentreContent">
                <div class="memberNav">
                    <div class="memberNavItem" v-for="Menus in MemberMenuList" :key="Menus.id">
                        <div class="navItems">
                            <div class="memberNavItemLine"></div>
                            <div class="memberNavItemtext">{{ Menus.name }}</div>
                        </div>
                        <div class="navItemSort"></div>
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
                            <div class="itemTitletext">SDG帳戶</div>
                        </div>
                        <div class="pointsBox">
                            <div class="pointsBoxItem">
                                <div class="pointsBoxItemLeft">SDG 點數</div>
                                <div class="pointsBoxItemRight">12,000 P</div>
                            </div>
                            <div class="pointsBoxItem">
                                <div class="pointsBoxItemLeft">志工時數</div>
                                <div class="pointsBoxItemRight">12 H</div>
                            </div>
                            <div class="pointsBoxItem">
                                <div class="pointsBoxItemLeft">課程時數</div>
                                <div class="pointsBoxItemRight">25 H</div>
                            </div>
                        </div>
                        <div class="itemTitle">
                            <div class="itemTitleLine"></div>
                            <div class="itemTitletext">SDG禮贈品專區</div>
                        </div>
                        <div class="giftsBox">
                            <div class="giftsBoxItem">
                                <div class="giftsBoxItemIcon"><img src="../img/MemberCenter-Gifts.svg" alt=""></div>
                                <div class="giftsBoxItemtext">禮贈兌換</div>
                            </div>
                            <div class="giftsBoxItem">
                                <div class="giftsBoxItemIcon"><img src="../img/MemberCenter-Points.svg" alt=""></div>
                                <div class="giftsBoxItemtext">點數專區</div>
                            </div>
                            <div class="giftsBoxItem">
                                <div class="giftsBoxItemIcon"><img src="../img/MemberCenter-Order.svg" alt=""></div>
                                <div class="giftsBoxItemtext">訂單查詢</div>
                            </div>
                            <div class="giftsBoxItem">
                                <div class="giftsBoxItemIcon"><img src="../img/MemberCenter-Digital.svg" alt=""></div>
                                <div class="giftsBoxItemtext">數位票券</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>
<script>
    export default {
        name: 'home',
        data() {
            return {
                MemberMenuList:[
                    { id: '1',name: 'SDG帳戶',},
                    { id: '2',name: '帳號管理',item:[{ name: '個人資料',},{name: '登入設定',},{name: '變更密碼',},{name: '會員管理辦法',},]},
                    { id: '3',name: '我的活動',item:[{ name: '活動列表',},{name: '進行中',},{name: '已取消',},{name: '已結束',},]},
                    { id: '4',name: '領取分票',},
                ]
            }
        }
    }
</script>