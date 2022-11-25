<script setup>
    import { ref, onMounted } from "vue"
    import formDatas from '../stores/datasheet.json'
    
    const fromdata = ref(formDatas)
    const entername = ref('')
    const chooseide = ref(0)
    const chooseMet = ref(0)
    const chooseGen = ref(0)

    const chooseidentity = (checkedide) => {
        chooseide.value =  checkedide
        console.log( chooseide.value )
    }
    const chooseMethod = (checkedMet) => {
        chooseMet.value =  checkedMet
        console.log( chooseMet.value )
    }
    const choosegender = (checkedGen) => {
        chooseGen.value = checkedGen
    }
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
                <div class="CourseinfTitle">{{ fromdata.eventR.eventtitle }}</div>
                <div class="activitiesSubtitle">{{ fromdata.eventR.RegistrationInformation }}</div>
                <div class="itemTitle">
                    <div class="itemTitleLine"></div>
                    <div class="itemTitletext">{{fromdata.eventR.participatingStatus}}</div>
                </div>
                <div class="memberinfTextinput">
                    <div class="inputitem" v-for="(identity,checkedide) in fromdata.eventR.position" :key="identity.id" @click="chooseidentity(checkedide)">
                        <input :id="identity.name" type="radio" :name="identity.position" :value="identity.values" v-model="chooseide">
                        <label :for="identity.name">{{ identity.thisname }}</label>
                    </div>
                </div>
                <div class="itemTitle">
                    <div class="itemTitleLine"></div>
                    <div class="itemTitletext">{{ fromdata.eventR.ParticipationMethod }}</div>
                </div>
                <div class="memberinfTextinput">
                    <div class="inputitem" v-for="(Method,checkedMet) in fromdata.eventR.RFMethods" :key="Method.id" @click="chooseMethod(checkedMet)">
                        <input :id="Method.name" type="radio" :name="Method.position" :value="Method.values" v-model="chooseMet">
                        <label :for="Method.name">{{ Method.thisname }}</label>
                    </div>
                </div>
                <div class="itemTitle">
                    <div class="itemTitleLine"></div>
                    <div class="itemTitletext">{{fromdata.eventR.CMname}}</div>
                </div>
                <div class="memberinfTextinput">
                    <input type="text" name="" id="" class="memberinfinput" :placeholder="fromdata.eventR.PlCMname" v-model="entername">
                </div>
                <div class="itemTitle">
                    <div class="itemTitleLine"></div>
                    <div class="itemTitletext">{{ fromdata.eventR.gender }}</div>
                </div>
                <div class="memberinfTextinput">
                    <div class="inputitem"  v-for="(gender,checkedGen) in fromdata.eventR.sex" :key="gender.id" @click="choosegender(checkedGen)">
                        <input :id="gender.name" type="radio" :name="gender.position" :value="gender.values" v-model="chooseGen">
                        <label :for="gender.name">{{ gender.thisname }}</label>
                    </div>
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
