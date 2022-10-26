<template>
    <main>
        <div class="page_content">
            <section class="loginTopIcon">
                <div class="loginBigIcon"><img src="../img/LoginBigIcon.svg" alt=""></div>
            </section>
            <section class="loginContentBox">
                <div class="ContentBoxTitle">會員註冊-帳號設定</div>
                <div class="signup_User_account">
                    <input type="email" class="signup_User_accountInput" placeholder="請輸入電子信箱" required>
                </div>
                <div class="VerificationCodeBar">
                    <div class="VerifCodeTitle">驗證碼</div>
                    <div class="verificationCode">
                        <input type="text" class="verificationCodeInput">
                        <button class="verificationCodeButtem">發送驗證碼</button>
                    </div>
                </div>
                <div class="Boxbarbuttem">
                    <RouterLink to="/SignUpSetPassword"><button class="pageButtem">下一步</button></RouterLink>
                </div>
            </section>
        </div>
    </main>
</template>
<script>

</script>