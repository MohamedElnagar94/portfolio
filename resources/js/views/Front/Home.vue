<template>
    <div>
        <TheSlider/>
        <section class="container-fluid bg-firstMainColor">
            <div class="container pb-5 pt-5">
                <div class="row mb-3">
                    <div class="text-center w-100 pt-5 serviceHeader">
                        <h4 class="text-uppercase thirdMainColor">{{ services.title }}</h4>
                        <p class="font-size-40 fourthMainColor text-uppercase font-weight-bold">
                            {{ services.paragraph[0] }}</p>
                        <hr class="width-40 height-5 bg-thirdMainColor">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-4 mb-3 position-relative" :class="{'mb-4' : service.margin === true}" v-for="(service,index) in services.items" :key="index">
                        <div class="hoverAnimation">
                            <div class="overlayServices"></div>
                            <div class="position-relative">
                                <div class="mb-3 text-center">
                                    <div>
                                        <img :width="service.imageWidth" class="img-fluid" :src="service.image" alt="">
                                    </div>
                                </div>
                                <div class="text-center">
                                    <h4 class="text-capitalize mb-3 titleServices">{{ service.title }}</h4>
                                    <p class="contentServices">{{ service.paragraph }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container-fluid bg-firstMainColor">
            <div class="row m-0 mb-3">
                <div class="text-center w-100 pt-5 works">
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
        <section class="container-fluid bg-firstMainColor overflow-hidden">
            <div class="container m-offers-container">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-3 mb-4 mb-sm-4 mb-md-4" v-for="(count,index) in counter" :key="index">
                        <div class="bg-thirdMainColor fourthMainColor text-center m-offers" :class="count.className">
                            <div class="m-offer-content">
                                <i class="font-size-45 mb-2" style="color: rgba(52,73,94,.5)"
                                   :class="count.fontawesome"></i>
                                <h2 class="font-size-55 font-weight-bold">{{ countNumber(count.number) }}</h2>
                                <p class="text-capitalize font-size-20">{{ count.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container-fluid bg-firstMainColor">
            <div class="container testimonial-container" style="padding: 20px 0 50px 0">
                <div class="row m-0 mb-3">
                    <div class="text-center w-100 pt-5 testimonial-header">
                        <h4 class="text-uppercase thirdMainColor">Testimonials</h4>
                        <p class="font-size-40 fourthMainColor text-uppercase font-weight-bold">
                            Some Positive Feedback That Encourage Us</p>
                        <hr class="width-40 height-5 bg-thirdMainColor">
                    </div>
                </div>
                <div class="row testimonials">
                    <div class="col-6 col-md-2">
                        <div
                            class="h-100 text-center d-flex justify-content-center align-items-center fourthMainColor font-size-45">
                            <i class="fa fa-angle-left" style="cursor: pointer" @mouseenter="stopInterval"
                               @mouseleave="startInterval" @click="changeTestimonial('slideRight')"></i>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="overflow-hidden position-relative testimonial-content"
                             @mouseenter="stopInterval"
                             @mouseleave="startInterval">
                            <template v-for="(testimonial,index) in testimonials">
                                <transition :name="action">
                                    <div v-show="index === currentTestimonial" class="position-absolute p-5"
                                         style="top:0;left: 0">
                                        <div class="text-center" :key="index">
                                            <img width="90px" class="img-fluid border-radius-50 mb-3"
                                                 :src="testimonial.img" alt="">
                                            <p class="fourthMainColor font-size-15">{{ testimonial.personName }}</p>
                                        </div>
                                        <div class="text-center testimonial-body">
                                            <p class="fourthMainColor font-size-25">
                                                <q> {{ testimonial.content }} </q>
                                            </p>
                                        </div>
                                    </div>
                                </transition>
                            </template>
                            <div class="testimonial-items">
                                <span @click="scrollTestimonial(index)" v-for="(circle,index) in testimonials.length"
                                      :class="{'active':currentTestimonial === index}" :key="index"
                                      style="cursor: pointer"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-2">
                        <div
                            class="h-100 text-center d-flex justify-content-center align-items-center fourthMainColor font-size-45">
                            <i class="fa fa-angle-right" style="cursor: pointer" @mouseenter="stopInterval"
                               @mouseleave="startInterval" @click="changeTestimonial('slideLeft')"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <HireMe/>
    </div>
</template>

<script>
import TheSlider from "@/containers/Front/TheSlider";
import HireMe from "@/containers/Front/HireMe";
export default {
    name: 'Home',
    components: {
        TheSlider,
        HireMe
    },
    data() {
        return {
            services: {
                title: "our services",
                paragraph: ["What Service We Offer For You", "what we do ?"],
                items: [
                    {
                        margin:false,
                        title: "web design",
                        image: "/images/compass.svg",
                        imageWidth: 70,
                        paragraph: "We are expert in creating websites with performance and toil per the specific industry desideratum"
                    },
                    {
                        margin:false,
                        title: "responsive website",
                        image: "/images/1831956.svg",
                        imageWidth: 70,
                        paragraph: "User’s conduct depends on responsive website,in screen size, platform & orientation of website"
                    },
                    {
                        margin:false,
                        title: "web development",
                        image: "/images/s3.png",
                        imageWidth: 70,
                        paragraph: "MAAN has an adept team to make sure that your open source website is grabbing maximum user attention"
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
            currentTestimonial: 0,
            action: 'slideLeft',
            interval: null,
            stop: true,
            testimonials: [
                {
                    id: 1,
                    img: '/images/testimonial.png',
                    personName: 'Mohamed Elnagar',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
                },
                {
                    id: 2,
                    img: '/images/testimonial.png',
                    personName: 'Ahmed Elnagar',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
                },
                {
                    id: 3,
                    img: '/images/testimonial.png',
                    personName: 'Abdo Elnagar',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
                },
                {
                    id: 4,
                    img: '/images/testimonial.png',
                    personName: 'Sabry Elnagar',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
                },
            ],
            counter: [
                {fontawesome: "fas fa-tasks", className: "m-offer-first-item", number: "8", title: "Competed Projects"},
                {fontawesome: "far fa-grin-hearts", className: "m-offer-second-item", number: "32", title: "Happy clients"},
                {
                    fontawesome: "fas fa-history",
                    className: "m-offer-third-item",
                    number: "3",
                    title: "years of experienced"
                },
                {fontawesome: "far fa-clock", className: "m-offer-fourth-item", number: "4500", title: "Hours Worked"},
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
        stopInterval: function () {
            clearInterval(this.interval)
        },
        startInterval: function () {
            this.intervalTestimonial()
        },
        scrollTestimonial: function (index) {
            if (this.stop === true){
                this.currentTestimonial = index
                this.stop = false
                setTimeout(() => {
                    this.stop = true
                },1000)
            }
        },
        changeTestimonial: function (key) {
            if (this.stop === true){
                this.action = key
                if (key === 'slideRight') {
                    if (this.currentTestimonial > 0) {
                        this.currentTestimonial--;
                    } else {
                        this.currentTestimonial = this.testimonials.length - 1;
                    }
                }
                if (key === 'slideLeft') {
                    if (this.currentTestimonial < this.testimonials.length - 1) {
                        this.currentTestimonial++;
                    } else {
                        this.currentTestimonial = 0;
                    }
                }
                this.stop = false
                setTimeout(() => {
                    this.stop = true
                },1000)
            }
        },
        countNumber: function (number) {
            if (number > 1000) {
                return (number / 1000).toFixed(0) + 'k+';
            } else {
                return number;
            }
        },
        intervalTestimonial: function () {
            this.interval = setInterval(() => {
                if (this.currentTestimonial < this.testimonials.length - 1) {
                    this.currentTestimonial++;
                } else {
                    this.currentTestimonial = 0;
                }
            }, 5000)
        }
    },
    mounted() {

    },
    created() {
        this.intervalTestimonial()
    }
}
</script>

<style scoped>
.slideLeft-leave-active,
.slideLeft-enter-active,
.slideRight-leave-active,
.slideRight-enter-active {
    transition: 1s;
}

.slideLeft-enter {
    transform: translate(100%, 0);
}

.slideRight-enter {
    transform: translate(-100%, 0);
}

.slideLeft-leave-to {
    transform: translate(-100%, 0);
}

.slideRight-leave-to {
    transform: translate(100%, 0);
}

.testimonial-items {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 47px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}

.testimonial-items span {
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, .5);
    border-radius: 50%;
    margin: 0 5px;
}

.testimonial-items span.active {
    background: #2ecc71;
}


</style>
