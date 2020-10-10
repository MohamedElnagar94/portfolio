<template>
    <section class="container-fluid bg-freelance">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center fourthMainColor hire-me-content" style="padding: 120px 0;">
                    <h2 class="font-size-55">I'm <span class="thirdMainColor">Available</span> for freelancing</h2>
                    <p class="font-size-25"> “Creativity is intelligence having fun.”<br>— Albert Einstein</p>
                    <a href="https://www.upwork.com/o/profiles/users/~01d1a1d75ea2f3ecc7/" target="_blank" class="text-uppercase hire-me text-decoration-none">Hire Me</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HireMe"
}
</script>

<style scoped>
.bg-freelance {
    background-image: url("/images/bg_freelance.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
}

.bg-freelance .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(52, 73, 94, .5);
}
.hire-me {
    padding: 10px 20px;
    background: #1abc9c;
    color: white;
    border-radius: 20px;
    outline: none;
}

.hire-me:hover {
    box-shadow: 0 0 20px 0px #2ecc71;
}

.hire-me:active {
    box-shadow: 0 0 20px 0px #2ecc71;
}

.hire-me:focus {
    box-shadow: 0 0 20px 0px #2ecc71;
}
</style>
