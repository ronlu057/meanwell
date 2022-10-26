<template>
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
                <div class="signinView">
                    <RouterLink to="/MemberCentre"><div class="sdgMenuItem">
                        <div class="signinicon"><img src="../img/member_icon.svg" alt=""></div>
                        <div class="signinmenutext">會員中心</div>
                    </div></RouterLink>
                    <div class="Tosignout">登出</div>
                    <div class="sdgMenuItem2">
                        <div class="signinicon"><img src="../img/calendar_icon.svg" alt=""></div>
                        <div class="signinmenutext">行事曆</div>
                    </div>
                </div>
                <div class="sdgMenuItem">
                    <div class="language_item"><img src="../img/language_icon.svg" alt=""></div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
</script>