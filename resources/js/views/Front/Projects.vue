<template>
    <div>
        <FixedSlider title="Projects" sub-title="Some of my amazing projects"/>
        <section class="container-fluid bg-firstMainColor">
            <div class="row m-0 mb-3">
                <div class="text-center w-100 pt-5 works">
                    <h4 class="text-uppercase thirdMainColor">My Projects</h4>
                    <p class="font-size-40 fourthMainColor text-uppercase font-weight-bold">
                        Far far away, behind the word mountains</p>
                    <hr class="width-40 height-5 bg-thirdMainColor">
                </div>
            </div>
            <div class="row m-0 pt-5">
                <div class="m-work" v-for="(work,index) in works" :key="index">
                    <img class="img-fluid h-100" :src="work.image" alt="">
                    <div class="m-work-title">
                        <h3 class="text-capitalize">{{ work.title }}</h3>
                        <p class="text-uppercase">{{ loopLanguage(work.language) }}</p>
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
    name: "Projects",
    components:{
        FixedSlider,
        HireMe
    },
    data(){
        return{
            works: [
                {
                    image: "/images/work-1.jpg",
                    title: "agency website",
                    language: ['php', 'laravel', 'javascript', 'vuejs', 'css3', 'html5']
                },
                {
                    image: "/images/work-1.jpg",
                    title: "agency website",
                    language: ['php', 'laravel', 'javascript', 'vuejs', 'css3', 'html5']
                },
                {
                    image: "/images/work-1.jpg",
                    title: "agency website",
                    language: ['php', 'laravel', 'javascript', 'vuejs', 'css3', 'html5']
                },
                {
                    image: "/images/work-1.jpg",
                    title: "agency website",
                    language: ['php', 'laravel', 'javascript', 'vuejs', 'css3', 'html5']
                },
                {
                    image: "/images/work-1.jpg",
                    title: "agency website",
                    language: ['php', 'laravel', 'javascript', 'vuejs', 'css3', 'html5']
                },
                {
                    image: "/images/work-1.jpg",
                    title: "agency website",
                    language: ['php', 'laravel', 'javascript', 'vuejs', 'css3', 'html5']
                },
            ],
        }
    },
    methods:{
        loopLanguage: function (languages) {
            let newValue = "";
            languages.forEach((value, key, array) => {
                if (array.length - 1 !== key) {
                    newValue += value + '  /  '
                } else {
                    newValue += value
                }
            })
            return newValue;
        },
    },
    created() {
    }
}
</script>

<style scoped>
.m-work {
    height: 311px !important;
    width: 33.3333%;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.m-work-title {
    position: absolute;
    bottom: -150px;
    left: 0;
    width: 100%;
    text-align: left;
    color: white;
    padding: 20px;
    transition: .5s linear;
    background: rgba(0, 0, 0, 0.5);
}

.m-work:hover .m-work-title {
    transition: .5s linear;
    bottom: 0;
}
</style>
