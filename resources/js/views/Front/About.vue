<template>
    <section class="container-fluid">
        <div class="container">
            <div class="row">
                about us
                <pre>






































































































                </pre>
            </div>
        </div>
<!--        <Loading v-if="$store.state.showLoading"/>-->
    </section>
</template>

<script>
import Loading from "../../containers/Front/Loading"
export default {
    components:{
        Loading
    },
    name: "About",
    // beforeUpdate() {
    //     this.$store.state.showLoading = true
    // },
    // mounted() {
    //     this.$store.state.showLoading = false
    // }
}
</script>

<style scoped>

</style>
