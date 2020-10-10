<template>
    <div>
        <FixedSlider title="About Me" sub-title="There is nothing impossible"/>
        <section class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 img-about">
                        <img class="img-fluid" src="/images/mohamed.jpg" alt="">
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div style="padding: 20px">
<!--                            <h3 class="font-size-60 font-weight-bold firstMainColor">About Me</h3>-->
                            <p class="text-justify" style="font-size: 19px;color: #34495e;">
                                <span class="first-letter" style="color: #1abc9c">F</span>ull stack developer with At least 2 years of prior experience in website development /
                                design / production. Seeking to delight clients, Worked with customers and Utilize emerging
                                technology. to develop unique, engaging, and cutting-edge digital tools with optimized UI
                                for all digital devices types.
                                Strong understanding of user experience design and usability principles. Fluid knowledge of
                                JavaScript, jQuery, and common plugins. A working knowledge of Adobe Photoshop. Knowledge of
                                CSS3 properties & HTML5 elements.
                                Experience using MySQL Databases , producing high quality responsive websites. Positive,
                                helpful attitude with an eagerness to learn and grow
                            </p>
                            <div class="d-flex justify-content-center">
                                <hr class="w-50 bg-dark">
                            </div>
                            <ul class="list-unstyled m-personal-info mb-2">
                                <li>
                                    <span>Name : </span>
                                    <span>Mohamed Elnagar</span>
                                </li>
                                <li>
                                    <span>Age : </span>
                                    <span>25</span>
                                </li>
                                <li>
                                    <span>Date of birth : </span>
                                    <span>November 08, 1994</span>
                                </li>
                                <li>
                                    <span>Address : </span>
                                    <span>Egypt, Dakahlia, Sherbin</span>
                                </li>
                                <li>
                                    <span>Email : </span>
                                    <span>me.mohamed.elnagar@gmail.com</span>
                                </li>
                                <li>
                                    <span>Mobile : </span>
                                    <span>+20-1090-789-568</span>
                                </li>
                            </ul>
                            <div class="d-flex">
                                <a href="/upload/MohamedElnagar.pdf" target="_blank" class="downloadCV">Download My CV</a>
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
    components: {
        FixedSlider,
        HireMe
    },
    name: "About",
    data() {
        return {}
    },
    methods: {},
    created() {

    }
}
</script>

<style scoped>
.first-letter {
    font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
    float: left;
    font-size: 6rem;
    line-height: 0.65;
    margin: 0.1em 0.1em 0.2em 0;
}
ul.m-personal-info{
    font-size: 20px;
}
ul.m-personal-info li{
    padding: 3px 0;
}
ul.m-personal-info li span{

}
ul.m-personal-info li span:first-child{
    width: 130px;
    float: left;
    font-weight: bold;
    color: #1abc9c;
}
ul.m-personal-info li span:last-child{
    color: #34495e;
}
.downloadCV{
    padding: 15px 25px;
    border-radius: 20px;
    color: white;
    background: rgb(26, 188, 156);
    outline: none;
    text-decoration: none;
}
.downloadCV:hover {
    background: #34495e;
    box-shadow: 0 0 20px 0px #34495e;
}

.downloadCV:active {
    background: #34495e;
    box-shadow: 0 0 20px 0px #34495e;
}

.downloadCV:focus {
    background: #34495e;
    box-shadow: 0 0 20px 0px #34495e;
}
</style>
