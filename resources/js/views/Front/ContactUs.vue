<template>
    <div>
        <FixedSlider title="Contact Me" sub-title="I am available at any time"/>
        <section class="container-fluid bg-firstMainColor">
            <div class="container">
                <div class="row contact-me-info">
                    <div class="col-md-12" style="padding: 50px 0">
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <div class="font-size-45 mb-3">
                                    <i class="fas fa-map-marked-alt contact"></i>
                                </div>
                                <div>
                                    <p class="fourthMainColor font-size-20">Sherbin - Dakahlia - Egypt</p>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="font-size-45 mb-3">
                                    <i class="fas fa-phone contact"></i>
                                </div>
                                <div>
                                    <p class="fourthMainColor font-size-20">+20-1090-789-568</p>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="font-size-45 mb-3">
                                    <i class="fas fa-envelope contact"></i>
                                </div>
                                <div>
                                    <p class="fourthMainColor font-size-20">me.mohamed.elnagar@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row contact-me-form">
                    <div class="col-md-6 text-center img-contact-me">
                        <img class="img-fluid" style="width: 75%" src="/images/mohamed.jpg" alt="">
                    </div>
                    <div class="col-12 col-md-12 col-lg-6">
                        <div>
                            <div class="form-group mb-4">
                                <label for="name" ref="name" class="fourthMainColor font-size-20">Name</label>
                                <input type="text" style="display: none" autocomplete="nope">
                                <input id="name"
                                       v-model="form.name"
                                       @click="labelTop('name',$event)"
                                       @blur="removeTop('name',$event)"
                                       name="name"
                                       autocomplete="nope"
                                       class="form-contact"
                                       type="text">
                            </div>
                            <div class="form-group mb-4">
                                <label for="email" ref="email" class="fourthMainColor font-size-20">Email</label>
                                <input id="email"
                                       v-model="form.email"
                                       @click="labelTop('email',$event)"
                                       @blur="removeTop('email',$event)"
                                       name="email"
                                       autocomplete="nope"
                                       class="form-contact"
                                       type="email">
                            </div>
                            <div class="form-group mb-4">
                                <label for="subject" ref="subject" class="fourthMainColor font-size-20">Subject</label>
                                <input id="subject"
                                       v-model="form.subject"
                                       @click="labelTop('subject',$event)"
                                       @blur="removeTop('subject',$event)"
                                       name="subject"
                                       autocomplete="nope"
                                       class="form-contact"
                                       type="text">
                            </div>
                            <div class="form-group textarea">
                                <label for="message" ref="message" class="fourthMainColor font-size-20">Message</label>
                                <textarea name="message"
                                          @click="labelTop('message',$event)"
                                          @blur="removeTop('message',$event)"
                                          class="form-contact-textarea"
                                          id="message"
                                          cols="30"
                                          v-model="form.message"
                                          rows="5">
                            </textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="button-contact"><i class="fa fa-paper-plane"></i> Send
                                    Message
                                </button>
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
    name: "ContactUs",
    data() {
        return {
            form: {
                name: '',
                email: '',
                subject: '',
                message: '',
            }
        }
    },
    methods: {
        labelTop: function (value,event) {
            this.$refs[value].classList.add("top","active")
            event.target.classList.add('inputActive')
            // event.target.autocomplete = 'off'
        },
        removeTop: function (value,event) {
            if (this.form[value] === '') {
                this.$refs[value].classList.remove('top', 'active')
                event.target.classList.remove('inputActive')
            }
        },
    },
    created() {

    }
}
</script>

<style scoped>
.contact {
    background: #34495e;
    width: 100px;
    height: 100px;
    color: white;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0px 0px 4px 0 #34495e, inset -4px -4px 20px 0 #2ecc71, inset 4px 4px 20px 0 #1abc9c;
}

.form-group {
    position: relative;
    transition: all .3s linear;
}

.form-group label {
    position: absolute;
    top: 50%;
    left: 15px;
    background: #34495e;
    transform: translate(25%, -50%);
    transition: all .3s linear;
}
.form-group.textarea label {
    position: absolute;
    top: 0;
    left: 15px;
    background: #34495e;
    transform: translate(5%, 30%);
    padding: 0 10px;
    transition: all .3s linear;
}

.form-group input {
    transition: .5s linear;
}

.form-group label.top {
    transform: translate(7%, -180%);
    transition: all .3s linear;
    padding: 0 10px;
    font-size: 15px;
}
.form-group.textarea label.top {
    position: absolute;
    transform: translate(10%, -50%);
    padding: 0 10px;
    transition: all .3s linear;
}
.form-group.textarea label.active {
    color: #2ecc71 !important;
}
.form-group label.active {
    color: #2ecc71 !important;
}
.form-contact.inputActive {
    border: 1px solid #2ecc71 !important;
}

.form-contact-textarea.inputActive {
    border: 1px solid #2ecc71 !important;
}

.form-contact {
    height: 65px;
    background: #34495e;
    padding: 20px 20px 5px 20px;
    width: 100%;
    border-radius: 10px;
    outline: none;
    color: white;
    font-size: 20px;
    border: 1px solid #ffffff;
    /* box-shadow: 0 0 4px 0px white;*/
}

.form-contact-textarea {
    background: transparent;
    padding: 20px 20px 5px 20px;
    width: 100%;
    border-radius: 10px;
    outline: none;
    color: white;
    font-size: 20px;
    border: 1px solid #ffffff;
    /*box-shadow: 0 0 4px 0px white;*/
}

.button-contact {
    padding: 10px 20px;
    color: white;
    outline: none;
    background: #2ecc71;
    box-shadow: 0 0 4px 0px #ffffff;
}
</style>
