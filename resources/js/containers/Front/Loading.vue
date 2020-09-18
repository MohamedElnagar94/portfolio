<template>
    <transition name="fade">
        <div class="load-page">
            <!--            <div class="sk-folding-cube">-->
            <!--                <div class="sk-cube1 sk-cube"></div>-->
            <!--                <div class="sk-cube2 sk-cube"></div>-->
            <!--                <div class="sk-cube4 sk-cube"></div>-->
            <!--                <div class="sk-cube3 sk-cube"></div>-->
            <!--            </div>-->
            <svg>
                <g>
                    <path d="M 50,100 A 1,1 0 0 1 50,0"/>
                </g>
                <g>
                    <path d="M 50,75 A 1,1 0 0 0 50,-25"/>
                </g>
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#4CD196;stop-opacity:1"/>
                        <stop offset="100%" style="stop-color:#18d681;stop-opacity:1"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>

    </transition>
</template>

<script>
export default {
    name: "Loading"
}
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
    opacity: 0;
}
.load-page {
    position: fixed;
    width: 100%;
    height: 100%;
    background: white;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
/* svg loading */
$transition-duration: 2s;
$path-length: 157px;
svg {
    overflow: visible;
    width: 100px;
    height: 150px;

    g {
        animation: slide $transition-duration linear infinite;

        &:nth-child(2) {
            animation-delay: $transition-duration / 4;

            path {
                animation-delay: $transition-duration / 4;
                stroke-dasharray: 0px $path-length + 1;
                stroke-dashoffset: 1px;
            }
        }
    }

    path {
        stroke: url(#gradient);
        stroke-width: 20px;
        stroke-linecap: round;
        fill: none;
        stroke-dasharray: 0 $path-length;
        stroke-dashoffset: 0;
        animation: escalade $transition-duration cubic-bezier(0.8, 0, 0.2, 1) infinite;
    }
}

@keyframes slide {
    0% {
        transform: translateY(-50px);
    }
    100% {
        transform: translateY(50px);
    }
}

@keyframes escalade {
    0% {
        stroke-dasharray: 0 $path-length;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: $path-length - 1 $path-length;
        stroke-dashoffset: 0;
    }
    100% {
        stroke-dasharray: $path-length - 1 $path-length;
        stroke-dashoffset: -($path-length - 1);
    }
}
/* svg loading */
/* loading page spinner */

//
//.sk-folding-cube {
//    margin: 20px auto;
//    width: 60px;
//    height: 60px;
//    position: relative;
//    -webkit-transform: rotateZ(45deg);
//    transform: rotateZ(45deg);
//}
//
//.sk-folding-cube .sk-cube {
//    float: left;
//    width: 50%;
//    height: 50%;
//    position: relative;
//    -webkit-transform: scale(1.1);
//    -ms-transform: scale(1.1);
//    transform: scale(1.1);
//}
//
//.sk-folding-cube .sk-cube:before {
//    content: '';
//    position: absolute;
//    top: 0;
//    left: 0;
//    width: 100%;
//    height: 100%;
//    background-color: #18d681;
//    -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
//    animation: sk-foldCubeAngle 2.4s infinite linear both;
//    -webkit-transform-origin: 100% 100%;
//    -ms-transform-origin: 100% 100%;
//    transform-origin: 100% 100%;
//}
//
//.sk-folding-cube .sk-cube2 {
//    -webkit-transform: scale(1.1) rotateZ(90deg);
//    transform: scale(1.1) rotateZ(90deg);
//}
//
//.sk-folding-cube .sk-cube3 {
//    -webkit-transform: scale(1.1) rotateZ(180deg);
//    transform: scale(1.1) rotateZ(180deg);
//}
//
//.sk-folding-cube .sk-cube4 {
//    -webkit-transform: scale(1.1) rotateZ(270deg);
//    transform: scale(1.1) rotateZ(270deg);
//}
//
//.sk-folding-cube .sk-cube2:before {
//    -webkit-animation-delay: 0.3s;
//    animation-delay: 0.3s;
//}
//
//.sk-folding-cube .sk-cube3:before {
//    -webkit-animation-delay: 0.6s;
//    animation-delay: 0.6s;
//}
//
//.sk-folding-cube .sk-cube4:before {
//    -webkit-animation-delay: 0.9s;
//    animation-delay: 0.9s;
//}
//
//@-webkit-keyframes sk-foldCubeAngle {
//    0%, 10% {
//        -webkit-transform: perspective(140px) rotateX(-180deg);
//        transform: perspective(140px) rotateX(-180deg);
//        opacity: 0;
//    }
//    25%, 75% {
//        -webkit-transform: perspective(140px) rotateX(0deg);
//        transform: perspective(140px) rotateX(0deg);
//        opacity: 1;
//    }
//    90%, 100% {
//        -webkit-transform: perspective(140px) rotateY(180deg);
//        transform: perspective(140px) rotateY(180deg);
//        opacity: 0;
//    }
//}
//
//@keyframes sk-foldCubeAngle {
//    0%, 10% {
//        -webkit-transform: perspective(140px) rotateX(-180deg);
//        transform: perspective(140px) rotateX(-180deg);
//        opacity: 0;
//    }
//    25%, 75% {
//        -webkit-transform: perspective(140px) rotateX(0deg);
//        transform: perspective(140px) rotateX(0deg);
//        opacity: 1;
//    }
//    90%, 100% {
//        -webkit-transform: perspective(140px) rotateY(180deg);
//        transform: perspective(140px) rotateY(180deg);
//        opacity: 0;
//    }
//}
/* loading page spinner */
</style>
