<template>
    <div>
        <TheSlider/>
        <section class="container-fluid bg-firstMainColor">
            <div class="container pb-5 pt-5">
                <div class="row mb-3">
                    <div class="text-center w-100 pt-5">
                        <h4 class="text-uppercase thirdMainColor">our services</h4>
<!--                        <p class="font-size-40 fourthMainColor text-uppercase font-weight-bold">what we do ?</p>-->
                        <p class="font-size-40 fourthMainColor text-uppercase font-weight-bold">What Service We Offer For You</p>
                        <hr class="width-40 height-5 bg-thirdMainColor">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-4">
                        <div style="padding: 40px 0;box-shadow: 0 0 6px -5px white;">
                            <div class="mb-3 text-center">
<!--                                <i class="fa fa-drafting-compass"></i>-->
                                <div>
                                    <img width="70" class="img-fluid" src="/images/compass.svg" alt="">
                                </div>
                            </div>
                            <div class="text-center fourthMainColor">
                                <h4 class="text-capitalize mb-3">web design</h4>
                                <p style="padding: 0 40px;color: #b9b9b9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div style="padding: 40px 0;box-shadow: 0 0 6px -5px white;">
                            <div class="mb-3 text-center">
                                <img width="70" class="img-fluid" src="/images/1831956.svg" alt="">
                            </div>
                            <div class="text-center fourthMainColor">
                                <h4 class="text-capitalize mb-3">responsive website</h4>
                                <p style="padding: 0 40px;color: #b9b9b9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div style="padding: 40px 0;box-shadow: 0 0 6px -5px white;">
                            <div class="mb-3 text-center">
                                <img width="70" class="img-fluid" src="/images/s3.png" alt="">
                            </div>
                            <div class="text-center fourthMainColor">
                                <h4 class="text-capitalize mb-3">web development</h4>
                                <p style="padding: 0 40px;color: #b9b9b9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import TheSlider from "../../containers/Front/TheSlider";
import Loading from "../../containers/Front/Loading";
export default {
    name: 'Home',
    components: {
        TheSlider,
        Loading
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
