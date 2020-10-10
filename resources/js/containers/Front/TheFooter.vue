<template>
    <section class="container-fluid bg-firstMainColor">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="d-flex justify-content-between align-items-center footer-top" style="padding: 15px 0">
                        <div>
                            <img width="160" class="img-fluid" src="/images/logo-footer.png" alt="">
                        </div>
                        <div class="social-media">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <hr class="w-100">
                </div>
                <div class="col-md-12 d-flex flex-wrap footer-body" style="padding: 20px 0">
                    <div class="col-12 col-md-4 fourthMainColor" >
                        <h3>About me</h3>
                        <p style="color: #b9b9b9">Full stack developer with At least 3 years of prior experience in website development / design / production....</p>
                        <p><RouterLink to="/about-us">Read more ...</RouterLink></p>
                    </div>
                    <div class="col-12 col-md-2 fourthMainColor">
                        <h3>Links</h3>
                        <ul class="list-unstyled m-menu-footer">
                            <li><RouterLink to="#" class="text-capitalize"><i class="fa fa-caret-right"></i> Home</RouterLink></li>
                            <li><RouterLink to="/about-us" class="text-capitalize"><i class="fa fa-caret-right"></i> About</RouterLink></li>
                            <li><RouterLink to="/resume" class="text-capitalize"><i class="fa fa-caret-right"></i> Resume</RouterLink></li>
                            <li><RouterLink to="/services" class="text-capitalize"><i class="fa fa-caret-right"></i> Services</RouterLink></li>
                            <li><RouterLink to="/projects" class="text-capitalize"><i class="fa fa-caret-right"></i> Projects</RouterLink></li>
                            <li><RouterLink to="/contact-us" class="text-capitalize"><i class="fa fa-caret-right"></i> Contact</RouterLink></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-2 fourthMainColor">
                        <h3>Services</h3>
                        <ul class="list-unstyled m-menu-footer">
                            <li><RouterLink to="/services" class="text-capitalize">Web design</RouterLink></li>
                            <li><RouterLink to="/services" class="text-capitalize">Web Development</RouterLink></li>
                            <li><RouterLink to="/services" class="text-capitalize">Full Stack Developer</RouterLink></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-4 fourthMainColor">
                        <h3>Have a Questions?</h3>
                        <div class="d-flex question" style="color: #b9b9b9">
                            <span><i class="fa fa-map"></i></span>
                            <span>Egypt, Dakahlia, Sherbin</span>
                        </div>
                        <div class="d-flex question" style="color: #b9b9b9">
                            <span><i class="fa fa-phone"></i></span>
                            <span>+201090789568</span>
                        </div>
                        <div class="d-flex question" style="color: #b9b9b9">
                            <span><i class="fa fa-envelope"></i></span>
                            <span>me.mohamed.elnagar@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <hr class="w-100">
                </div>
                <div class="col-md-12 fourthMainColor">
                    <p class="text-center font-size-20 footer-bottom">Copyright &copy; 2020 All rights reserved | This website is made with <i class="far fa-heart secondMainColor"></i> by <a href="https://web.facebook.com/mohamed.elnagar.98284566" class="secondMainColor">Mohamed Elnagar</a></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'TheFooter',
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style scoped>
.social-media{
    display: flex;
}
.social-media a{
    background: white;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 20px;
    text-decoration: none;
    color: rgb(52,73,94);
    transition: .3s linear;
    margin: 0 4px;
}
.social-media a:hover{
    background: #1abc9c;
    color: white;
    transition: .3s linear;
}
hr{
    background: white;
}
ul.m-menu-footer li{

}
ul.m-menu-footer li a{
    text-decoration: none;
    color: #b9b9b9;
    font-size: 17px;
}
ul.m-menu-footer li a:hover{
    color: #1abc9c;
}
.question{
    font-size: 15px;
}
.question span:first-child{
    margin-right: 20px;
}
.question span{

}
</style>
