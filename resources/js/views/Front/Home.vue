<template>
    <div>
        <TheSlider/>
        <section class="container-fluid bg-firstMainColor">
            <div class="container pb-5 pt-5">
                <div class="row mb-3">
                    <div class="text-center w-100 pt-5">
                        <h4 class="text-uppercase thirdMainColor">{{ services.title }}</h4>
                        <p class="font-size-40 fourthMainColor text-uppercase font-weight-bold">
                            {{ services.paragraph[0] }}</p>
                        <hr class="width-40 height-5 bg-thirdMainColor">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-4" v-for="(service,index) in services.items" :key="index">
                        <div style="padding: 40px 0;box-shadow: 0 0 6px -5px white;">
                            <div class="mb-3 text-center">
                                <div>
                                    <img :width="service.imageWidth" class="img-fluid" :src="service.image" alt="">
                                </div>
                            </div>
                            <div class="text-center fourthMainColor">
                                <h4 class="text-capitalize mb-3">{{ service.title }}</h4>
                                <p style="padding: 0 40px;color: #b9b9b9">{{ service.paragraph }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container-fluid bg-firstMainColor">
            <div class="row mb-3">
                <div class="text-center w-100 pt-5">
                    <h4 class="text-uppercase thirdMainColor">My Projects</h4>
                    <p class="font-size-40 fourthMainColor text-uppercase font-weight-bold">
                        Far far away, behind the word mountains</p>
                    <hr class="width-40 height-5 bg-thirdMainColor">
                </div>
            </div>
            <div class="row m-0 pt-5 pb-5">
                <div class="m-work" v-for="(work,index) in works" :key="index">
                    <img class="img-fluid h-100" :src="work.image" alt="">
                    <div class="m-work-title">
                        <h3 class="text-capitalize">{{ work.title }}</h3>
                        <p class="text-uppercase">{{ loopLanguage(work.language) }}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="container-fluid bg-firstMainColor">
            <div class="container" style="padding: 380px 0 240px 0">
                <div class="row">
                    <div class="col-md-3" v-for="(count,index) in counter" :key="index">
                        <div class="bg-thirdMainColor fourthMainColor text-center m-offers" :class="count.className">
                            <div class="m-offer-content">
                                <i class="font-size-45 mb-2" style="color: rgba(52,73,94,.5)" :class="count.fontawesome"></i>
                                <h2 class="font-size-55 font-weight-bold">{{ countNumber(count.number) }}</h2>
                                <p class="text-capitalize font-size-20">{{ count.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container-fluid bg-freelance">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center fourthMainColor" style="padding: 120px 0;">
                        <h2 class="font-size-55">I'm <span class="thirdMainColor">Available</span> for freelancing</h2>
                        <p class="font-size-25"> “Creativity is intelligence having fun.”<br>— Albert Einstein</p>
                        <button class="text-uppercase hire-me">Hire Me</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import TheSlider from "../../containers/Front/TheSlider";

export default {
    name: 'Home',
    components: {
        TheSlider,
    },
    data() {
        return {
            services: {
                title: "our services",
                paragraph: ["What Service We Offer For You", "what we do ?"],
                items: [
                    {
                        title: "web design",
                        image: "/images/compass.svg",
                        imageWidth: 70,
                        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                    },
                    {
                        title: "responsive website",
                        image: "/images/1831956.svg",
                        imageWidth: 70,
                        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                    },
                    {
                        title: "web development",
                        image: "/images/s3.png",
                        imageWidth: 70,
                        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                    },
                ],
            },
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
            counter: [
                {fontawesome:"fa fa-tasks",className:"m-offer-first-item",number:"8",title:"Competed Projects"},
                {fontawesome:"fa fa-smile-o",className:"m-offer-second-item",number:"32",title:"Happy clients"},
                {fontawesome:"fa fa-history",className:"m-offer-third-item",number:"3",title:"years of experienced"},
                {fontawesome:"fa fa-clock-o",className:"m-offer-fourth-item",number:"4500",title:"Hours Worked"},
            ]
        }
    },
    methods: {
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
        countNumber:function (number){
            if(number > 1000){
                return (number / 1000).toFixed(0) + 'k+';
            }else {
                return number;
            }
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
/**/
div.m-offers {
    transform: rotate(45deg);
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
div.m-offers div.m-offer-content {
    transform: rotate(-45deg);
}
div.m-offers::before {
    position: absolute;
    left: -1px;
    bottom: -2px;
    height: 635px;
    width: 636px;
    border-left: 1px solid white;
    border-top: 1px solid white;
    content: "";
    z-index: -1;
}
div.m-offers.m-offer-first-item::before {
    left: 0px;
    bottom: 38px;
}
div.m-offers.m-offer-second-item{
    margin-top: -185px
}
div.m-offers.m-offer-second-item::before {
    left: -298px;
    bottom: -78px;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    border-left: none;
    border-top: none;
}
div.m-offers.m-offer-third-item::before {
    left: -76px;
    bottom: -297px;
}
div.m-offers.m-offer-fourth-item{
    margin-top: -185px
}
div.m-offers.m-offer-fourth-item::before {
    left: -374px;
    bottom: -413px;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    border-left: none;
    border-top: none;
}
/**/
/**/
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
/**/
.bg-freelance{
    background-image: url("/images/bg_freelance.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
}
.bg-freelance .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(52,73,94,.5);
}
.hire-me{
    padding: 10px 20px;
    background: #1abc9c;
    color: white;
    border-radius: 20px;
    outline: none;
}
.hire-me:hover{
    box-shadow: 0 0 20px 0px #2ecc71;
}
.hire-me:active{
    box-shadow: 0 0 20px 0px #2ecc71;
}
.hire-me:focus{
    box-shadow: 0 0 20px 0px #2ecc71;
}
</style>
