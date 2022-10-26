<template>
    <main>
    <div class="page_content">
      <section class="loginTopIcon">
        <div class="loginBigIcon"><img src="../img/LoginBigIcon.svg" alt=""></div>
      </section>
      <section class="loginContentBox">
        <div class="ContentBoxTitle">會員登入 / 註冊</div>
        <div class="User_account">
            <input type="text" class="User_accountInput" placeholder="請輸入電子信箱" required>
        </div>
        <div class="User_password">
            <input type="password" class="User_accountInput" placeholder="請輸入密碼" required>
        </div>
        <div class="login_confirm_input">
            <label>
                <input type="checkbox" name="confirm_lre" id="">
                <span>記住我</span>
            </label>
            <div class="ForgotPassword"><RouterLink to="/ForgotPassword">忘記密碼 ?</RouterLink></div>
        </div>
        <div class="buttemBox">
            <RouterLink to="/SignUp"><button class="pageButtem">註冊</button></RouterLink>
            <input type="submit" value="登入" class="loginButtem">
        </div>
        <div class="ThirdParty">
            <div class="ThirdPartyTitle">
                <div class="ThirdPartyTitleLine"></div>
                <div class="ThirdPartyTitleText">需為會員方可使用其他方式登入</div>
                <div class="ThirdPartyTitleLine"></div>
            </div>
            <div class="ThirdPartyButtemBar">
                <div class="ThirdPartyButtemItem">
                    <div class="ThirdPartyButtemIcon"><img src="../img/line_icon.svg" alt=""></div>
                    <div class="ThirdPartyButtemText">LINE</div>
                </div>
                <div class="ThirdPartyButtemItem">
                    <div class="ThirdPartyButtemIcon"><img src="../img/facebook_icon.svg" alt=""></div>
                    <div class="ThirdPartyButtemText">FaceBook</div>
                </div>
                <div class="ThirdPartyButtemItem">
                    <div class="ThirdPartyButtemIcon"><img src="../img/Wechat_icon.svg" alt=""></div>
                    <div class="ThirdPartyButtemText">Wechat</div>
                </div>
                <div class="ThirdPartyButtemItem">
                    <div class="ThirdPartyButtemIcon"><img src="../img/google_icon.svg" alt=""></div>
                    <div class="ThirdPartyButtemText">Google</div>
                </div>
            </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script>

</script>
