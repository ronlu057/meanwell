<script setup>
    import { ref, onMounted } from "vue"
    import formDatas from '../stores/datasheet.json'
    
    const fromdata = ref(formDatas)
    onMounted(()=>{
        fromdata.value
        console.log( fromdata )
    })

</script>
<template>
<div class="page_main">
    <main>
        <div class="page_content avt">
            
            <div class="PageBreadCrumbs">
                <ul>
                    <li>首頁</li>
                    <li>></li>
                    <li>活動列表</li>
                    <li>></li>
                    <li>蘇州智慧園區開幕儀式</li>
                    <li>></li>
                    <li>活動報名</li>
                </ul>
            </div>
            <div class="CourseContentBox">
                <div class="CourseinfTitle">{{ fromdata.eventRegistration.eventtitle }}</div>
                <div class="activitiesSubtitle">{{ fromdata.eventRegistration.RegistrationInformation }}</div>
                <div class="itemTitle">
                    <div class="itemTitleLine"></div>
                    <div class="itemTitletext">參與身分</div>
                </div>
                <div class="memberinfTextinput">
                    <input id="identity01" type="radio" name="identity" checked="checked">
                    <label for="identity01">員工</label>
                    <input id="identity02" type="radio" name="identity">
                    <label for="identity02">外賓</label>
                </div>
                <div class="itemTitle">
                    <div class="itemTitleLine"></div>
                    <div class="itemTitletext">與會方式</div>
                </div>
                <div class="memberinfTextinput">
                    <input id="mode01" type="radio" name="mode" checked="checked">
                    <label for="mode01">親臨</label>
                    <input id="mode02" type="radio" name="mode">
                    <label for="mode02">線上zoom meeting</label>
                </div>
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
                    <input type="text" name="" id="" class="memberinfinput" placeholder="請輸入手機號碼">
                </div>
                <div class="itemTitle">
                    <div class="itemTitleLine"></div>
                    <div class="itemTitletext">任職公司</div>
                </div>
                <div class="memberinfTextinput">
                    <input type="text" name="" id="" class="memberinfinput" placeholder="請輸入任職公司">
                </div>
                <div class="itemTitle">
                    <div class="itemTitleLine"></div>
                    <div class="itemTitletext">職稱</div>
                </div>
                <div class="memberinfTextinput">
                    <input type="text" name="" id="" class="memberinfinput" placeholder="請輸入職稱">
                </div>
                <div class="Boxbarbuttem">
                    <router-link to="/Course/RegistrationFormNext"><button class="pageButtem">下一步</button></router-link>
                </div>
            </div>
        </div>
    </main>
</div>
</template>
