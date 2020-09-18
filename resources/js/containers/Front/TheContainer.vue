<template>
    <div>
        <TheHeader/>
        <transition name="fade">
            <Loading v-if="$store.state.showLoading" />
            <router-view v-else></router-view>
        </transition>
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
import Loading from "./Loading";
export default {
    name: "TheContainer",
    components: {
        TheHeader,
        TheFooter,
        Loading
    }
};
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
