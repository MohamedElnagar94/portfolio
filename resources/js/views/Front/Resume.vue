<template>
    <div>
        <FixedSlider title="Resume" sub-title="Something about my journey"/>
        <section class="container-fluid bg-firstMainColor">
            <div class="container">
                <div class="row" style="padding: 60px 0;">
                    <div class="col-md-3 position-relative">
                        <ul class="list-unstyled m-0 resume-list" style="top: 150px" :style="{'position':positionSticky ? 'sticky' : ''}">
                            <li v-for="(item,index) in resumeList" :key="index">
                                <a :href="'#' + item.title" @click.prevent="scrollToItem(item.title)"
                                   :class="{'active': item.active === true}">
                                    <transition name="slideRight">
                                        <i class="fas fa-long-arrow-alt-right" v-if="item.active === true"></i>
                                    </transition>
                                    {{ item.title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-9">
                        <div style="padding: 20px 0">
                            <div id="Education" ref="Education" style="margin-bottom: 7em">
                                <h2 class="thirdMainColor font-size-45 mb-4 font-weight-bold">Education</h2>
                                <div class="d-flex">
                                    <div>
                                        <i class="fas fa-school resume-icon"></i>
                                    </div>
                                    <div style="padding: 0 0 0 20px;">
                                        <h3 class="font-size-25 thirdMainColor">
                                            <span>10/2019</span>
                                            <span>-</span>
                                            <span>6/2020</span>
                                        </h3>
                                        <p class="font-size-35 font-weight-bold secondMainColor">Information Technology
                                            Institute ( ITI )</p>
                                        <h4 class="font-size-25 font-weight-bold secondMainColor">Mansoura</h4>
                                        <p class="font-size-20 fourthMainColor">9 Months (Open Source ) -
                                            Ministry of Communications and Information Technology ( MCIT ) - Trainee in
                                            ITI
                                        </p>
                                    </div>
                                </div>
                                <hr class="bg-fourthMainColor mb-4">
                                <div class="d-flex">
                                    <div>
                                        <i class="fas fa-school resume-icon"></i>
                                    </div>
                                    <div style="padding: 0 0 0 20px;">
                                        <h3 class="font-size-25 thirdMainColor">
                                            <span>2013</span>
                                            <span>-</span>
                                            <span>2017</span>
                                        </h3>
                                        <p class="font-size-35 font-weight-bold secondMainColor">Faculty of
                                            agriculture</p>
                                        <h4 class="font-size-25 font-weight-bold secondMainColor">Mansoura</h4>
                                        <p class="font-size-20 fourthMainColor">Bachelor of Agricultural Engineering
                                            program and Biosystems, specialty machines and
                                            agricultural forces, in May 2017 Mansoura University.</p>
                                    </div>
                                </div>
                                <hr class="bg-fourthMainColor">
                            </div>
                            <div id="Experience" ref="Experience" style="margin-bottom: 7em">
                                <h2 class="thirdMainColor font-size-45 mb-4 font-weight-bold">Experience</h2>
                                <div class="d-flex">
                                    <div>
                                        <i class="fas fa-briefcase resume-icon"></i>
                                    </div>
                                    <div style="padding: 0 0 0 20px;">
                                        <h3 class="font-size-25 thirdMainColor">
                                            <span>08/2018</span>
                                            <span>-</span>
                                            <span>10/2019</span>
                                        </h3>
                                        <p class="font-size-35 font-weight-bold secondMainColor">InfoSas Company</p>
                                        <h4 class="font-size-25 font-weight-bold secondMainColor">Mansoura</h4>
                                        <p class="font-size-20 fourthMainColor">
                                            worked for the INFOSAS company as a web designer and developer. Using
                                            technology like php
                                            ( Laravel ) , JavaScript ( Vue js ) to build beautiful websites with high
                                            security
                                        </p>
                                    </div>
                                </div>
                                <hr class="bg-fourthMainColor mb-4">
                            </div>
                            <div id="Skills" ref="Skills">
                                <h2 class="thirdMainColor font-size-45 mb-4 font-weight-bold">Skills</h2>
                                <div class="row">
                                    <template v-for="(skill,index) in skills">
                                        <div class="col-lg-4" :class="[index === 0 || index === 1 ? 'col-md-6' : 'col-md-12']" :key="index" v-if="index < 3">
                                            <div class="circleProgressBar" style="padding: 20px">
                                                <h4>{{ skill.title }}</h4>
                                                <div class="text-center progressBarContent">
                                                    <div class="position-relative content">
                                                        <span class="label">{{ skill.progress }}<span
                                                            class="smaller">%</span></span>
                                                        <svg>
                                                            <circle r="70" cx="70" cy="70"></circle>
                                                            <circle r="70" cx="70" cy="70"
                                                                    :style="{'stroke-dashoffset': calcPercent(skill.progress)}"></circle>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3" v-else :key="index">
                                            <h4 class="thirdMainColor">{{ skill.title }}</h4>
                                            <div class="w-100 position-relative m-progressbar">
                                                <div class="fourthMainColor font-weight-bold"
                                                     :style="{'width':skill.progress + '%'}">
                                                    {{ skill.progress + "%" }}
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <HireMe/>
    </div>
</template>

<script>
import FixedSlider from "@/containers/Front/FixedSlider";
import HireMe from "@/containers/Front/HireMe";

export default {
    name: "Resume",
    components: {
        FixedSlider,
        HireMe
    },
    data() {
        return {
            skills: [
                {id: 1, title: 'VUE.JS', progress: 90,},
                {id: 2, title: 'LARAVEL', progress: 90,},
                {id: 3, title: 'JAVASCRIPT', progress: 85,},
                {id: 4, title: 'HTML', progress: 95,},
                {id: 5, title: 'HTML5', progress: 85,},
                {id: 6, title: 'CSS', progress: 90,},
                {id: 7, title: 'CSS3', progress: 80,},
                {id: 8, title: 'BOOTSTRAP', progress: 85,},
                {id: 9, title: 'ANGULAR.JS', progress: 75,},
                {id: 10, title: 'REACT.JS', progress: 75,},
                {id: 11, title: 'PHP', progress: 85,},
                {id: 12, title: 'NODE.JS', progress: 70,},
                {id: 13, title: 'PYTHON', progress: 70,},
            ],
            resumeList: [
                {id: 1, active: false, title: 'Education'},
                {id: 2, active: false, title: 'Experience'},
                {id: 3, active: false, title: 'Skills'},
            ],
            positionSticky:false
        }
    },
    methods: {
        changeResumeItem: function (title) {
            this.resumeList.forEach((item) => {
                item.active = item.title === title;
            })
        },
        scrollToItem:function(title){
            let rect = this.$refs[title].getBoundingClientRect();
            let win = this.$refs[title].ownerDocument.defaultView;
            window.scroll({
                top: rect.top + win.pageYOffset - 170,
                left: 0,
                behavior: 'smooth'
            });
        },
        calcPercent: function (percent) {
            return (440 - (440 * percent)) / 100
        },
        handleScroll:function (){
            let education = this.$refs.Education;
            let experience = this.$refs.Experience;
            let skills = this.$refs.Skills;
            // console.log(window.scrollY)
            this.positionSticky = window.scrollY >= 550;
            if (education.getBoundingClientRect().top > 350){
                this.changeResumeItem('All')
            }
            if (education.getBoundingClientRect().top < 350){
                this.changeResumeItem(education.id)
            }
            if (experience.getBoundingClientRect().top < 250){
                this.changeResumeItem(experience.id)
            }
            if (skills.getBoundingClientRect().top < 300){
                this.changeResumeItem(skills.id)
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeRouteLeave(to,from,next){
        window.removeEventListener('scroll', this.handleScroll)
        next()
    },
    computed: {

    }
}
</script>

<style scoped>
.resume-list {
    padding: 20px 0;
}

.resume-list li {

}

.resume-list li a {
    padding: 5px 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 20px;
    /*transition: all .5s linear;*/
}

.resume-list li a.active {
    color: #1abc9c;
    transition: all .5s linear;
}

.resume-list li a i {
    margin-right: 5px;
    /*transition: all .5s ease-in-out;*/
}

.resume-icon {
    font-size: 25px;
    background: #1abc9c;
    border-radius: 50%;
    padding: 15px;
    color: white;
    box-shadow: inset 0 0 4px 0 white;
}

.m-progressbar {
    background: #cccccc;
    height: 22px;
    overflow: hidden;
    border-radius: 5px;
    transition: all .5s ease-in-out;
}

.m-progressbar div {
    position: absolute;
    left: 0;
    right: 50%;
    width: 49%;
    top: 50%;
    background: #2ecc71;
    text-align: center;
    transform: translate(0%, -50%);
    transition: all .5s ease-in-out;
}

/*.slideRight-leave-active,*/
.slideRight-enter-active {
    transition: 1s;
}

.slideRight-enter {
    transform: translate(-100%, 0);
}

.circleProgressBar {
    padding: 35px 20px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 25px;
    box-shadow: 0 3px 9px 0 white;
}

.circleProgressBar h4 {
    color: #1abc9c;
    margin-bottom: 20px;
}

.progressBarContent {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
}

.progressBarContent div.content {
    width: 150px;
    height: 150px;
}

.progressBarContent div.content svg {
    position: relative;
    width: 150px;
    height: 150px;
    transform: rotate(-90deg);
}

.progressBarContent div.content svg circle {
    width: 150px;
    height: 150px;
    fill: none;
    stroke: #000;
    stroke-width: 10;
    transform: translate(5px, 5px);
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    stroke-linecap: round;
}

.progressBarContent div.content svg circle:nth-child(1) {
    stroke-dashoffset: 0;
    stroke: #2ecc71;
}

.progressBarContent div.content svg circle:nth-child(2) {
    /*stroke-dashoffset: calc(440 - (440 * 87) / 100);*/
    stroke: #cccccc;
}

.progressBarContent div span.label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 35px;
    color: white;
}

.progressBarContent div span.smaller {
    font-size: 20px;
}
</style>
<!--width: 118%;-->
<!--height: 118%;-->
<!--position: absolute;-->
<!--top: -10px;-->
<!--right: -10px;-->
<!--border-radius: 50%;-->
<!--background: green;-->
