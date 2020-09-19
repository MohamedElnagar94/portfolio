(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/Front/TheSlider.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/Front/TheSlider.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TheSlider",
  data: function data() {
    return {};
  },
  methods: {
    randFun: function randFun(minNum, maxNum) {
      return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/Home.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Front/Home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_Front_TheSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../containers/Front/TheSlider */ "./resources/js/containers/Front/TheSlider.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Home',
  components: {
    TheSlider: _containers_Front_TheSlider__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      services: {
        title: "our services",
        paragraph: ["What Service We Offer For You", "what we do ?"],
        items: [{
          title: "web design",
          image: "/images/compass.svg",
          imageWidth: 70,
          paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        }, {
          title: "responsive website",
          image: "/images/1831956.svg",
          imageWidth: 70,
          paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        }, {
          title: "web development",
          image: "/images/s3.png",
          imageWidth: 70,
          paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
        }]
      },
      works: [{
        image: "/images/work-1.jpg",
        title: "agency website",
        language: ['php', 'laravel', 'javascript', 'vuejs', 'css3', 'html5']
      }, {
        image: "/images/work-1.jpg",
        title: "agency website",
        language: ['php', 'laravel', 'javascript', 'vuejs', 'css3', 'html5']
      }, {
        image: "/images/work-1.jpg",
        title: "agency website",
        language: ['php', 'laravel', 'javascript', 'vuejs', 'css3', 'html5']
      }, {
        image: "/images/work-1.jpg",
        title: "agency website",
        language: ['php', 'laravel', 'javascript', 'vuejs', 'css3', 'html5']
      }, {
        image: "/images/work-1.jpg",
        title: "agency website",
        language: ['php', 'laravel', 'javascript', 'vuejs', 'css3', 'html5']
      }, {
        image: "/images/work-1.jpg",
        title: "agency website",
        language: ['php', 'laravel', 'javascript', 'vuejs', 'css3', 'html5']
      }],
      counter: [{
        fontawesome: "fa fa-tasks",
        className: "m-offer-first-item",
        number: "8",
        title: "Competed Projects"
      }, {
        fontawesome: "fa fa-smile-o",
        className: "m-offer-second-item",
        number: "32",
        title: "Happy clients"
      }, {
        fontawesome: "fa fa-history",
        className: "m-offer-third-item",
        number: "3",
        title: "years of experienced"
      }, {
        fontawesome: "fa fa-clock-o",
        className: "m-offer-fourth-item",
        number: "4500",
        title: "Hours Worked"
      }]
    };
  },
  methods: {
    loopLanguage: function loopLanguage(languages) {
      var newValue = "";
      languages.forEach(function (value, key, array) {
        if (array.length - 1 !== key) {
          newValue += value + '  /  ';
        } else {
          newValue += value;
        }
      });
      return newValue;
    },
    countNumber: function countNumber(number) {
      if (number > 1000) {
        return (number / 1000).toFixed(0) + 'k+';
      } else {
        return number;
      }
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/Front/TheSlider.vue?vue&type=style&index=0&id=7470b18d&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/Front/TheSlider.vue?vue&type=style&index=0&id=7470b18d&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.myInfo[data-v-7470b18d]{\n    padding: 20% 0;\n}\ndiv .bg-header[data-v-7470b18d] {\n    background-image: url(\"/images/slider.jpg\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    width: 100%;\n    height: 667px;\n    transition: 1s;\n    position: relative;\n}\n.layer[data-v-7470b18d] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: white;\n    opacity: .8;\n}\n.elementor-shape[data-v-7470b18d] {\n    overflow: hidden;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    line-height: 0;\n    direction: ltr;\n}\n.elementor-shape svg[data-v-7470b18d] {\n    display: block;\n    width: calc(100% + 1.3px);\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n}\nsvg[data-v-7470b18d] {\n    width: calc(100% + 1.3px);\n    height: 128px;\n}\n.elementor-shape .elementor-shape-fill[data-v-7470b18d] {\n    fill: #34495e;\n    transform-origin: center;\n    transform: rotateY(0deg);\n}\n.elementor-shape[data-negative=false].elementor-shape-bottom[data-v-7470b18d], .elementor-shape[data-negative=true].elementor-shape-top[data-v-7470b18d] {\n    transform: rotate(180deg);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/Home.vue?vue&type=style&index=0&id=7bc3f104&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Front/Home.vue?vue&type=style&index=0&id=7bc3f104&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**/\ndiv.m-offers[data-v-7bc3f104] {\n    transform: rotate(45deg);\n    height: 260px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\ndiv.m-offers div.m-offer-content[data-v-7bc3f104] {\n    transform: rotate(-45deg);\n}\ndiv.m-offers[data-v-7bc3f104]::before {\n    position: absolute;\n    left: -1px;\n    bottom: -2px;\n    height: 635px;\n    width: 636px;\n    border-left: 1px solid white;\n    border-top: 1px solid white;\n    content: \"\";\n    z-index: -1;\n}\ndiv.m-offers.m-offer-first-item[data-v-7bc3f104]::before {\n    left: 0px;\n    bottom: 38px;\n}\ndiv.m-offers.m-offer-second-item[data-v-7bc3f104]{\n    margin-top: -185px\n}\ndiv.m-offers.m-offer-second-item[data-v-7bc3f104]::before {\n    left: -298px;\n    bottom: -78px;\n    border-right: 1px solid white;\n    border-bottom: 1px solid white;\n    border-left: none;\n    border-top: none;\n}\ndiv.m-offers.m-offer-third-item[data-v-7bc3f104]::before {\n    left: -76px;\n    bottom: -297px;\n}\ndiv.m-offers.m-offer-fourth-item[data-v-7bc3f104]{\n    margin-top: -185px\n}\ndiv.m-offers.m-offer-fourth-item[data-v-7bc3f104]::before {\n    left: -374px;\n    bottom: -413px;\n    border-right: 1px solid white;\n    border-bottom: 1px solid white;\n    border-left: none;\n    border-top: none;\n}\n/**/\n/**/\n.m-work[data-v-7bc3f104] {\n    height: 311px !important;\n    width: 33.3333%;\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.m-work-title[data-v-7bc3f104] {\n    position: absolute;\n    bottom: -150px;\n    left: 0;\n    width: 100%;\n    text-align: left;\n    color: white;\n    padding: 20px;\n    transition: .5s linear;\n    background: rgba(0, 0, 0, 0.5);\n}\n.m-work:hover .m-work-title[data-v-7bc3f104] {\n    transition: .5s linear;\n    bottom: 0;\n}\n/**/\n.bg-freelance[data-v-7bc3f104]{\n    background-image: url(\"/images/bg_freelance.jpg\");\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n    background-attachment: fixed;\n    position: relative;\n}\n.bg-freelance .overlay[data-v-7bc3f104]{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(52,73,94,.5);\n}\n.hire-me[data-v-7bc3f104]{\n    padding: 10px 20px;\n    background: #1abc9c;\n    color: white;\n    border-radius: 20px;\n    outline: none;\n}\n.hire-me[data-v-7bc3f104]:hover{\n    box-shadow: 0 0 20px 0px #2ecc71;\n}\n.hire-me[data-v-7bc3f104]:active{\n    box-shadow: 0 0 20px 0px #2ecc71;\n}\n.hire-me[data-v-7bc3f104]:focus{\n    box-shadow: 0 0 20px 0px #2ecc71;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/Front/TheSlider.vue?vue&type=style&index=0&id=7470b18d&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/Front/TheSlider.vue?vue&type=style&index=0&id=7470b18d&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSlider.vue?vue&type=style&index=0&id=7470b18d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/Front/TheSlider.vue?vue&type=style&index=0&id=7470b18d&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/Home.vue?vue&type=style&index=0&id=7bc3f104&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Front/Home.vue?vue&type=style&index=0&id=7bc3f104&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=7bc3f104&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/Home.vue?vue&type=style&index=0&id=7bc3f104&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/Front/TheSlider.vue?vue&type=template&id=7470b18d&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/containers/Front/TheSlider.vue?vue&type=template&id=7470b18d&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row m-0" }, [
      _c("div", { staticClass: "bg-header" }, [
        _c("div", { staticClass: "layer" }),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "elementor-shape elementor-shape-bottom",
            attrs: { "data-shape": "wave-brush", "data-negative": "false" }
          },
          [
            _c(
              "svg",
              {
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 283.5 27.8",
                  preserveAspectRatio: "none"
                }
              },
              [
                _c("path", {
                  staticClass: "elementor-shape-fill",
                  attrs: {
                    d:
                      "M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7 s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7 c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3 c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6 c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7 C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5 c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1 c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7 c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6 C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8 c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2 C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3 C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1 z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1 c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  staticClass: "elementor-shape-fill",
                  attrs: {
                    d:
                      "M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3 C267.7,18.8,269.7,18,269.6,18z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  staticClass: "elementor-shape-fill",
                  attrs: {
                    d:
                      "M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2 S227.6,9.9,227.4,9.8z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  staticClass: "elementor-shape-fill",
                  attrs: {
                    d:
                      "M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4 C206.4,12.9,204.6,13.5,204.5,13.4z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  staticClass: "elementor-shape-fill",
                  attrs: {
                    d:
                      "M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6 S201,10.7,201,10.6z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  staticClass: "elementor-shape-fill",
                  attrs: {
                    d:
                      "M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3 C152.6,27.5,154.6,26.8,154.5,26.7z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  staticClass: "elementor-shape-fill",
                  attrs: {
                    d:
                      "M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6 c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  staticClass: "elementor-shape-fill",
                  attrs: {
                    d:
                      "M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0 C76.9,11.5,75.3,12.5,75.5,12.6z"
                  }
                }),
                _vm._v(" "),
                _c("path", {
                  staticClass: "elementor-shape-fill",
                  attrs: {
                    d:
                      "M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4 C19.9,13.7,15.7,13.3,15.6,13.2z"
                  }
                })
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12 text-center" }, [
          _c("div", { staticClass: "myInfo" }, [
            _c("p", { staticClass: "thirdMainColor font-weight-bold" }, [
              _vm._v("HI! I AM")
            ]),
            _vm._v(" "),
            _c("h1", { staticClass: "firstMainColor font-weight-bold" }, [
              _vm._v("Mohamed Elnagar")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "font-weight-bold" }, [
              _c("span", { staticClass: "firstMainColor" }, [_vm._v("I'm a")]),
              _vm._v(" "),
              _c("span", { staticClass: "thirdMainColor" }, [
                _vm._v("Full Stack Developer")
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/Home.vue?vue&type=template&id=7bc3f104&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Front/Home.vue?vue&type=template&id=7bc3f104&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("TheSlider"),
      _vm._v(" "),
      _c("section", { staticClass: "container-fluid bg-firstMainColor" }, [
        _c("div", { staticClass: "container pb-5 pt-5" }, [
          _c("div", { staticClass: "row mb-3" }, [
            _c("div", { staticClass: "text-center w-100 pt-5" }, [
              _c("h4", { staticClass: "text-uppercase thirdMainColor" }, [
                _vm._v(_vm._s(_vm.services.title))
              ]),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-size-40 fourthMainColor text-uppercase font-weight-bold"
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.services.paragraph[0])
                  )
                ]
              ),
              _vm._v(" "),
              _c("hr", { staticClass: "width-40 height-5 bg-thirdMainColor" })
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row mb-3" },
            _vm._l(_vm.services.items, function(service, index) {
              return _c("div", { key: index, staticClass: "col-md-4" }, [
                _c(
                  "div",
                  {
                    staticStyle: {
                      padding: "40px 0",
                      "box-shadow": "0 0 6px -5px white"
                    }
                  },
                  [
                    _c("div", { staticClass: "mb-3 text-center" }, [
                      _c("div", [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            width: service.imageWidth,
                            src: service.image,
                            alt: ""
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-center fourthMainColor" }, [
                      _c("h4", { staticClass: "text-capitalize mb-3" }, [
                        _vm._v(_vm._s(service.title))
                      ]),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticStyle: { padding: "0 40px", color: "#b9b9b9" }
                        },
                        [_vm._v(_vm._s(service.paragraph))]
                      )
                    ])
                  ]
                )
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "container-fluid bg-firstMainColor" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row m-0 pt-5 pb-5" },
          _vm._l(_vm.works, function(work, index) {
            return _c("div", { key: index, staticClass: "m-work" }, [
              _c("img", {
                staticClass: "img-fluid h-100",
                attrs: { src: work.image, alt: "" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "m-work-title" }, [
                _c("h3", { staticClass: "text-capitalize" }, [
                  _vm._v(_vm._s(work.title))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-uppercase" }, [
                  _vm._v(_vm._s(_vm.loopLanguage(work.language)))
                ])
              ])
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "container-fluid bg-firstMainColor" }, [
        _c(
          "div",
          {
            staticClass: "container",
            staticStyle: { padding: "380px 0 240px 0" }
          },
          [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.counter, function(count, index) {
                return _c("div", { key: index, staticClass: "col-md-3" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-thirdMainColor fourthMainColor text-center m-offers",
                      class: count.className
                    },
                    [
                      _c("div", { staticClass: "m-offer-content" }, [
                        _c("i", {
                          staticClass: "font-size-45 mb-2",
                          class: count.fontawesome,
                          staticStyle: { color: "rgba(52,73,94,.5)" }
                        }),
                        _vm._v(" "),
                        _c(
                          "h2",
                          { staticClass: "font-size-55 font-weight-bold" },
                          [_vm._v(_vm._s(_vm.countNumber(count.number)))]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          { staticClass: "text-capitalize font-size-20" },
                          [_vm._v(_vm._s(count.title))]
                        )
                      ])
                    ]
                  )
                ])
              }),
              0
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(1)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mb-3" }, [
      _c("div", { staticClass: "text-center w-100 pt-5" }, [
        _c("h4", { staticClass: "text-uppercase thirdMainColor" }, [
          _vm._v("My Projects")
        ]),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass:
              "font-size-40 fourthMainColor text-uppercase font-weight-bold"
          },
          [
            _vm._v(
              "\n                    Far far away, behind the word mountains"
            )
          ]
        ),
        _vm._v(" "),
        _c("hr", { staticClass: "width-40 height-5 bg-thirdMainColor" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "container-fluid bg-freelance" }, [
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-md-12 text-center fourthMainColor",
              staticStyle: { padding: "120px 0" }
            },
            [
              _c("h2", { staticClass: "font-size-55" }, [
                _vm._v("I'm "),
                _c("span", { staticClass: "thirdMainColor" }, [
                  _vm._v("Available")
                ]),
                _vm._v(" for freelancing")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "font-size-25" }, [
                _vm._v(" “Creativity is intelligence having fun.”"),
                _c("br"),
                _vm._v("— Albert Einstein")
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "text-uppercase hire-me" }, [
                _vm._v("Hire Me")
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/containers/Front/TheSlider.vue":
/*!*****************************************************!*\
  !*** ./resources/js/containers/Front/TheSlider.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheSlider_vue_vue_type_template_id_7470b18d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheSlider.vue?vue&type=template&id=7470b18d&scoped=true& */ "./resources/js/containers/Front/TheSlider.vue?vue&type=template&id=7470b18d&scoped=true&");
/* harmony import */ var _TheSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheSlider.vue?vue&type=script&lang=js& */ "./resources/js/containers/Front/TheSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TheSlider_vue_vue_type_style_index_0_id_7470b18d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheSlider.vue?vue&type=style&index=0&id=7470b18d&scoped=true&lang=css& */ "./resources/js/containers/Front/TheSlider.vue?vue&type=style&index=0&id=7470b18d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheSlider_vue_vue_type_template_id_7470b18d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheSlider_vue_vue_type_template_id_7470b18d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7470b18d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/containers/Front/TheSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/containers/Front/TheSlider.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/containers/Front/TheSlider.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/Front/TheSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/containers/Front/TheSlider.vue?vue&type=style&index=0&id=7470b18d&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/containers/Front/TheSlider.vue?vue&type=style&index=0&id=7470b18d&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSlider_vue_vue_type_style_index_0_id_7470b18d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSlider.vue?vue&type=style&index=0&id=7470b18d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/Front/TheSlider.vue?vue&type=style&index=0&id=7470b18d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSlider_vue_vue_type_style_index_0_id_7470b18d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSlider_vue_vue_type_style_index_0_id_7470b18d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSlider_vue_vue_type_style_index_0_id_7470b18d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSlider_vue_vue_type_style_index_0_id_7470b18d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSlider_vue_vue_type_style_index_0_id_7470b18d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/containers/Front/TheSlider.vue?vue&type=template&id=7470b18d&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/containers/Front/TheSlider.vue?vue&type=template&id=7470b18d&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSlider_vue_vue_type_template_id_7470b18d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TheSlider.vue?vue&type=template&id=7470b18d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/containers/Front/TheSlider.vue?vue&type=template&id=7470b18d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSlider_vue_vue_type_template_id_7470b18d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSlider_vue_vue_type_template_id_7470b18d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Front/Home.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Front/Home.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_7bc3f104_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=7bc3f104&scoped=true& */ "./resources/js/views/Front/Home.vue?vue&type=template&id=7bc3f104&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Front/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_7bc3f104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=7bc3f104&scoped=true&lang=css& */ "./resources/js/views/Front/Home.vue?vue&type=style&index=0&id=7bc3f104&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_7bc3f104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_7bc3f104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7bc3f104",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Front/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Front/Home.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Front/Home.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Front/Home.vue?vue&type=style&index=0&id=7bc3f104&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/Front/Home.vue?vue&type=style&index=0&id=7bc3f104&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7bc3f104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=7bc3f104&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/Home.vue?vue&type=style&index=0&id=7bc3f104&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7bc3f104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7bc3f104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7bc3f104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7bc3f104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_7bc3f104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Front/Home.vue?vue&type=template&id=7bc3f104&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Front/Home.vue?vue&type=template&id=7bc3f104&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_7bc3f104_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=7bc3f104&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Front/Home.vue?vue&type=template&id=7bc3f104&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_7bc3f104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_7bc3f104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);