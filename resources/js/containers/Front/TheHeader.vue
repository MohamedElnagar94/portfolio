<template>
    <transition name="fade">
        <header v-if="show" class="container-fluid" :class="[fixed === true ? 'fixed-top bg-fourthMainColor' : 'positionHeader']">
            <nav class="row m-0">
                <div class="container">
                    <div class="row pt-3 pb-3 position-relative">
                        <div class="col-md-3 col-6">
                            <div>
                                <img class="img-fluid logo" width="160px" src="/images/logo3.png" title="Mohamed Elnagar"
                                     alt="Mohamed Elnagar">
                            </div>
                        </div>
                        <div class="col-md-9 m-navbar" :style="{'top': $store.state.showNav === true ? '0' : '-100%'}">
                            <ul class="list-unstyled m-menu">
                                <li v-for="(nav,key) in NavBar" :key="key">
                                    <RouterLink class="hvr-underline-from-left"
                                                v-on:click.native="activeLinkPage(nav.id)"
                                                :class="{'active thirdMainColor':nav.activePage === true}"
                                                :to="nav.href">
                                        {{ nav.link }}
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>
                        <transition name="fade">
                            <div class="col-md-9 col-6">
                                <div class="bars" :class="{'open' : $store.state.showNav === true}" @click="showNavBar">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </nav>
        </header>
    </transition>
</template>

<script>

export default {
    name: 'TheHeader',
    data() {
        return {
            NavBar: [
                {id: 1, href: "/", link: "Home", active: false, activePage: true},
                {id: 2, href: "/about-us", link: "About", active: false, activePage: false},
                {id: 3, href: "/resume", link: "Resume", active: false, activePage: false},
                {id: 4, href: "/services", link: "Services", active: false, activePage: false},
                {id: 5, href: "/projects", link: "Projects", active: false, activePage: false},
                {id: 6, href: "/contact-us", link: "Contact", active: false, activePage: false},
            ],
            fixed: false,
            scrollY: this.calcScrollY,
            show:true,
        }
    },
    methods: {
        showNavBar:function (){
            this.$store.state.showNav = !this.$store.state.showNav
            if (this.$store.state.showNav === true){
                document.documentElement.style.overflow = 'hidden'
            }else {
                document.documentElement.style.overflow = 'auto'
            }
        },
        activeLinkPage: function (id) {
            this.NavBar.find((item) => {
                item.activePage = Number(item.id) === Number(id);
            })
            // this.$store.state.showLoading = true
        },
        handleScroll() {
            this.fixed = false
            this.show = false
            if (window.scrollY <= 60){
                this.show = true
            }else if (window.scrollY >= 500) {
                this.fixed = true
                this.show = true
            } else {
                this.fixed = false
            }
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        // this.$store.state.showNav = false
    },
    mounted() {
        this.NavBar.find((item) => {
            item.activePage = item.href === this.$route.path;
        })
    },
    computed: {
        calcScrollY: function () {
            return window.scrollY
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
    opacity: 0;
}
</style>
