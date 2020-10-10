<template>
    <div>
        <FixedSlider title="Services" sub-title="Some of my services"/>
        <section class="container-fluid bg-firstMainColor">
            <div class="container" style="padding: 0 0 100px 0">
                <div class="row mb-3 serviceBody">
                    <div class="text-center w-100 pt-5 serviceHeader">
                        <h4 class="text-uppercase thirdMainColor">{{ services.title }}</h4>
                        <p class="font-size-40 fourthMainColor text-uppercase font-weight-bold">
                            {{ services.paragraph[1] }}</p>
                        <hr class="width-40 height-5 bg-thirdMainColor">
                    </div>
                </div>
                <div class="row mb-3 serviceBody">
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
        <HireMe/>
    </div>
</template>

<script>
import FixedSlider from "@/containers/Front/FixedSlider";
import HireMe from "@/containers/Front/HireMe";

export default {
    name: "Services",
    components:{
        FixedSlider,
        HireMe
    },
    data(){
        return{
            services: {
                title: "our services",
                paragraph: ["What Service We Offer For You", "what we do ?"],
                items: [
                    {
                        margin:true,
                        title: "web design",
                        image: "/images/compass.svg",
                        imageWidth: 70,
                        paragraph: "We are expert in creating websites with performance and toil per the specific industry desideratum"
                    },
                    {
                        margin:true,
                        title: "responsive website",
                        image: "/images/1831956.svg",
                        imageWidth: 70,
                        paragraph: "User’s conduct depends on responsive website,in screen size, platform & orientation of website"
                    },
                    {
                        margin:true,
                        title: "web development",
                        image: "/images/s3.png",
                        imageWidth: 70,
                        paragraph: "MAAN has an adept team to make sure that your open source website is grabbing maximum user attention"
                    },
                    {
                        margin:false,
                        title: "Quality & Security",
                        image: "/images/compass.svg",
                        imageWidth: 70,
                        paragraph: "Delivery of first-rate projects with high levels of security"
                    },
                    {
                        margin:false,
                        title: "In-Depth Understanding",
                        image: "/images/1831956.svg",
                        imageWidth: 70,
                        paragraph: "Comprehensive understanding of business requirements and Extensive knowledge regarding domains and their operations"
                    },
                    {
                        margin:false,
                        title: "QA & Support",
                        image: "/images/s3.png",
                        imageWidth: 70,
                        paragraph: "We provide support for projects that we do very well, and if you want to ask or inquire about anything, we are always there."
                    },
                ],
            },
        }
    },
    created() {

    }
}
</script>

<style scoped>
/*.hoverAnimation:after{*/
/*    content: '';*/
/*    width: 100%;*/
/*    height: 100%;*/
/*    background: black;*/
/*    position: absolute;*/
/*    top: 0;*/
/*    left: 0;*/
/*    transform: rotate(45deg);*/
/*}*/
</style>
