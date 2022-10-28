<template>
    <main>
        <div class="page_content">
            <div class="PageBreadCrumbs">
                <ul>
                    <li>首頁</li>
                    <li>></li>
                    <li>帳號管理</li>
                    <li>></li>
                    <li>編輯個人資料</li>
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
                        <div class="memberinfTextinput">
                            <input type="text" name="" id="" class="memberinfinput" placeholder="王小明">
                        </div>
                        <div class="itemTitle">
                            <div class="itemTitleLine"></div>
                            <div class="itemTitletext">性別</div>
                        </div>
                        <div class="memberinfTextinput">
                            <input id="gender01" type="radio" name="gender" checked="checked">
                            <label for="gender01">男</label>
                            <input id="gender02" type="radio" name="gender">
                            <label for="gender02">女</label>
                        </div>
                        <div class="itemTitle">
                            <div class="itemTitleLine"></div>
                            <div class="itemTitletext">手機號碼</div>
                        </div>
                        <div class="memberinfTextinput">
                            <input type="text" name="" id="" class="memberinfinput" placeholder="09123456789">
                        </div>
                        <div class="itemsS50L">
                            <div class="itemTitle">
                                <div class="itemTitleLine"></div>
                                <div class="itemTitletext">證件類別</div>
                            </div>
                            <div class="memberinfTextinput">
                                <select class="memberinfinput">
                                    <option selected disabled>身分證 / 台胞證 / 居留證 / 護照</option>
                                    <option>身分證</option>
                                    <option>台胞證</option>
                                    <option>居留證</option>
                                    <option>護照</option>
                                </select>
                            </div>
                        </div>
                        <div class="itemsS50R">
                            <div class="itemTitle">
                                <div class="itemTitleLine"></div>
                                <div class="itemTitletext">證件號碼</div>
                            </div>
                            <div class="memberinfTextinput">
                                <input type="text" name="" id="" class="memberinfinput" placeholder="A123456789">
                            </div>
                        </div>
                        <div class="itemsS50L">
                            <div class="itemTitle">
                                <div class="itemTitleLine"></div>
                                <div class="itemTitletext">任職公司</div>
                            </div>
                            <div class="memberinfTextinput">
                                <input type="text" name="" id="" class="memberinfinput" placeholder="明緯">
                            </div>
                        </div>
                        <div class="itemsS50R">
                            <div class="itemTitle">
                                <div class="itemTitleLine"></div>
                                <div class="itemTitletext">職稱</div>
                            </div>
                            <div class="memberinfTextinput">
                                <input type="text" name="" id="" class="memberinfinput" placeholder="行政人員">
                            </div>
                        </div>
                        <div class="avatarBox">
                            <div class="avatarTitle">
                                <div class="avatarTitleText">個人照</div>
                                <div class="avatarTitleIcon"><img src="../img/info-circle-fill.svg" alt=""></div>
                            </div>
                            <div class="avatarsText">
                                *用於活動報到人臉辨識
                            </div>
                            <div class="avatarshint">
                                <div class="avatarshintText">已上傳</div>
                                <button class="avatarupload">上傳</button>
                            </div>
                        </div>
                        <div class="persbuttonBox">
                            <router-link to="/PersonalInformation"><button class="pageButtem">確認送出</button></router-link>
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
        if( activeIdx.value == 1 ){
            activeIddx.value = null;
        }
    };
</script>