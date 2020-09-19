<template>
    <section class="container-fluid bg-firstMainColor">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="d-flex justify-content-between align-items-center" style="padding: 15px 0">
                        <div>
                            <img width="160" class="img-fluid" src="/images/logo-footer.png" alt="">
                        </div>
                        <div class="social-media">
                            <a href="#"><i class="fa fa-facebook-f"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-youtube-play"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <hr class="w-100">
                </div>
                <div class="col-md-12 d-flex" style="padding: 20px 0">
                    <div class="col-md-4 fourthMainColor" >
                        <h3>About me</h3>
                        <p style="color: #b9b9b9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        <p >Read more ...</p>
                    </div>
                    <div class="col-md-2 fourthMainColor">
                        <h3>Links</h3>
                        <ul class="list-unstyled m-menu-footer">
                            <li><a href="#" class="text-capitalize"><i class="fa fa-caret-right"></i> Home</a></li>
                            <li><a href="#" class="text-capitalize"><i class="fa fa-caret-right"></i> About</a></li>
                            <li><a href="#" class="text-capitalize"><i class="fa fa-caret-right"></i> Resume</a></li>
                            <li><a href="#" class="text-capitalize"><i class="fa fa-caret-right"></i> Services</a></li>
                            <li><a href="#" class="text-capitalize"><i class="fa fa-caret-right"></i> Projects</a></li>
                            <li><a href="#" class="text-capitalize"><i class="fa fa-caret-right"></i> Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2 fourthMainColor">
                        <h3>Services</h3>
                        <ul class="list-unstyled m-menu-footer">
                            <li><a href="#" class="text-capitalize">Web design</a></li>
                            <li><a href="#" class="text-capitalize">Web Development</a></li>
                            <li><a href="#" class="text-capitalize">Full Stack Developer</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 fourthMainColor">
                        <h3>Have a Questions?</h3>
                        <div class="d-flex question" style="color: #b9b9b9">
                            <span><i class="fa fa-map"></i></span>
                            <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
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
                    <p class="text-center font-size-20">Copyright &copy; 2020 All rights reserved | This website is made with <i class="fa fa-heart-o secondMainColor"></i> by <span class="secondMainColor">Mohamed Elnagar</span></p>
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
    font-size: 17px;
}
.question span:first-child{
    margin-right: 20px;
}
.question span{

}
</style>
