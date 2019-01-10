(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper\">\r\n\r\n   <div ui-view='header' id=\"header\"></div>\r\n\r\n   <div ui-view='content' id=\"content\"></div>\r\n\r\n   <div ui-view='footer' id=\"footer\"></div>\r\n\r\n   <!-- TODO could be injected with jquery at init of modal service etc. -->\r\n   <!-- <modal-placeholder></modal-placeholder> -->\r\n   \r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(ts) {
        this.title = 'smaug';
        var criteria = { to: '**', from: '**' };
        ts.onSuccess(criteria, this.onPageChange.bind(this));
    }
    AppComponent.prototype.onPageChange = function (transition) {
        var entering = transition.entering();
        if (!Array.isArray(entering) || entering.length === 0)
            return;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["TransitionService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _configs_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @configs/router-config */ "./src/app/configs/router-config.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_cube_cube_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/cube/cube.component */ "./src/app/components/cube/cube.component.ts");
/* harmony import */ var _components_views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/views/login/login.component */ "./src/app/components/views/login/login.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _components_cubestack_cubestack_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/cubestack/cubestack.component */ "./src/app/components/cubestack/cubestack.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_cube_cube_component__WEBPACK_IMPORTED_MODULE_5__["CubeComponent"],
                _components_views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"],
                _components_cubestack_cubestack_component__WEBPACK_IMPORTED_MODULE_10__["CubestackComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["UIRouterModule"].forRoot({
                    states: _configs_router_config__WEBPACK_IMPORTED_MODULE_3__["uiRouterStates"],
                    config: _configs_router_config__WEBPACK_IMPORTED_MODULE_3__["uiRouterConfig"] // configuration of the uiRouter (e.g. default state)
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/content/content.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ui-view='main' id=\"main\"></div>"

/***/ }),

/***/ "./src/app/components/content/content.component.less":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.less */ "./src/app/components/content/content.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/cube/cube.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/cube/cube.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"cube\">\r\n    <div [style.z-index]=\"zindex\" class=\"cube_face side cube_face--front\"></div>\r\n    <!-- <div class=\"cube_face side cube_face--back\"></div> -->\r\n    <!-- <div class=\"cube_face side cube_face--right\"></div> -->\r\n    <div [style.z-index]=\"zindex\" class=\"cube_face side cube_face--left\"></div>\r\n    <div [style.z-index]=\"zindex\" class=\"cube_face end cube_face--top\"></div>\r\n    <!-- <div class=\"cube_face end cube_face--bottom\"></div> -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cube/cube.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/cube/cube.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 50px;\n  width: 200px;\n}\n.cube {\n  position: relative;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n}\n.cube_face {\n  position: absolute;\n  font-weight: bold;\n  color: black;\n  text-align: center;\n}\n.cube_face.side {\n  width: 100px;\n  height: 25px;\n}\n.cube_face.end {\n  width: 100px;\n  height: 100px;\n}\n.cube {\n  -webkit-transform: rotateX(-15deg) rotateY(45deg) rotateZ(0deg);\n          transform: rotateX(-15deg) rotateY(45deg) rotateZ(0deg);\n}\n.cube_face--front {\n  background: #eee;\n}\n.cube_face--right {\n  background: gray;\n}\n.cube_face--back {\n  background: gray;\n}\n.cube_face--left {\n  background: gray;\n}\n.cube_face--top {\n  background: lightgray;\n}\n.cube_face--bottom {\n  background: gray;\n}\n.cube_face--front {\n  -webkit-transform: rotateY(0deg) translateZ(50px);\n          transform: rotateY(0deg) translateZ(50px);\n}\n.cube_face--right {\n  -webkit-transform: rotateY(90deg) translateZ(50px);\n          transform: rotateY(90deg) translateZ(50px);\n}\n.cube_face--back {\n  -webkit-transform: rotateY(180deg) translateZ(50px);\n          transform: rotateY(180deg) translateZ(50px);\n}\n.cube_face--left {\n  -webkit-transform: rotateY(-90deg) translateZ(50px);\n          transform: rotateY(-90deg) translateZ(50px);\n}\n.cube_face--top {\n  -webkit-transform: rotateX(90deg) translateZ(50px);\n          transform: rotateX(90deg) translateZ(50px);\n}\n.cube_face--bottom {\n  -webkit-transform: rotateX(-90deg) translateZ(-25px);\n          transform: rotateX(-90deg) translateZ(-25px);\n}\n"

/***/ }),

/***/ "./src/app/components/cube/cube.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cube/cube.component.ts ***!
  \***************************************************/
/*! exports provided: CubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeComponent", function() { return CubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CubeComponent = /** @class */ (function () {
    function CubeComponent() {
    }
    CubeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CubeComponent.prototype, "zindex", void 0);
    CubeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cube',
            template: __webpack_require__(/*! ./cube.component.html */ "./src/app/components/cube/cube.component.html"),
            styles: [__webpack_require__(/*! ./cube.component.less */ "./src/app/components/cube/cube.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], CubeComponent);
    return CubeComponent;
}());



/***/ }),

/***/ "./src/app/components/cubestack/cubestack.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/cubestack/cubestack.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cube [zindex]=\"3\"></app-cube>\n<app-cube [zindex]=\"2\"></app-cube>\n<app-cube [zindex]=\"1\"></app-cube>"

/***/ }),

/***/ "./src/app/components/cubestack/cubestack.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/cubestack/cubestack.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cubestack/cubestack.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/cubestack/cubestack.component.ts ***!
  \*************************************************************/
/*! exports provided: CubestackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubestackComponent", function() { return CubestackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CubestackComponent = /** @class */ (function () {
    function CubestackComponent() {
    }
    CubestackComponent.prototype.ngOnInit = function () {
    };
    CubestackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cubestack',
            template: __webpack_require__(/*! ./cubestack.component.html */ "./src/app/components/cubestack/cubestack.component.html"),
            styles: [__webpack_require__(/*! ./cubestack.component.less */ "./src/app/components/cubestack/cubestack.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], CubestackComponent);
    return CubestackComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\r\n  <app-cubestack></app-cubestack>\r\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n}\nbody,\ninput,\nbutton {\n  font-family: \"Courier New\";\n  font-size: 14px;\n}\ninput {\n  border: 1px solid black;\n  padding-left: 5px;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\ninput,\nbutton {\n  margin: 5px;\n}\nbutton {\n  background: lightgray;\n  border: none;\n  padding: 5px;\n  transition: all 0.4s ease;\n}\nbutton:hover {\n  background: black;\n  color: white;\n}\n#footer {\n  height: 50px;\n  margin-top: 50px;\n}\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/components/footer/footer.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  <span>://SMAUG</span>\r\n  <span id=\"cursor\" style=\"padding-left: 5px;\">█</span>\r\n</h1>"

/***/ }),

/***/ "./src/app/components/header/header.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 0px;\n  padding-bottom: 15px;\n  padding-top: 15px;\n}\n#cursor {\n  color: #dddddd;\n  animation: blink-animation 1.2s steps(2, start) infinite;\n  -webkit-animation: blink-animation 1.2s steps(2, start) infinite;\n}\n@keyframes blink-animation {\n  to {\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes blink-animation {\n  to {\n    visibility: hidden;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/components/header/header.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/views/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/views/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n\r\n  <div>\r\n    <input type=\"email\" name=\"email\" placeholder=\"email\">\r\n  </div>\r\n\r\n  <div>\r\n    <input type=\"password\" name=\"password\" placeholder=\"password\">\r\n  </div>\r\n  \r\n  <div>\r\n    <button type=\"submit\">login</button>\r\n  </div>\r\n  \r\n</form>"

/***/ }),

/***/ "./src/app/components/views/login/login.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/views/login/login.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n}\nbody,\ninput,\nbutton {\n  font-family: \"Courier New\";\n  font-size: 14px;\n}\ninput {\n  border: 1px solid black;\n  padding-left: 5px;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\ninput,\nbutton {\n  margin: 5px;\n}\nbutton {\n  background: lightgray;\n  border: none;\n  padding: 5px;\n  transition: all 0.4s ease;\n}\nbutton:hover {\n  background: black;\n  color: white;\n}\nform {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/components/views/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/views/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/components/views/login/login.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/configs/router-config.ts":
/*!******************************************!*\
  !*** ./src/app/configs/router-config.ts ***!
  \******************************************/
/*! exports provided: uiRouterConfig, uiRouterStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiRouterConfig", function() { return uiRouterConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiRouterStates", function() { return uiRouterStates; });
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_views_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/views/login/login.component */ "./src/app/components/views/login/login.component.ts");



// "views"

// import { AuthComponent } from '@components/auth/auth/auth.component'
// import { BackendComponent } from '@components/page/backend/backend.component'
// import { VerifyMailComponent } from '@components/page/verify-mail/verify-mail.component'
// import { PasswordResetUseComponent } from '@components/auth/password-reset-use/password-reset-use.component'
// import { PasswordResetRequestComponent } from '@components/auth/password-reset-request/password-reset-request.component'
// import { AdminComponent } from '@components/page/admin/admin.component'
// import { AdvantagesComponent } from '@components/page/advantages/advantages.component'
// import { UserService } from '../service/user.service'
// import { AuthenticationService } from '../service/authentication.service'
// import { PrivacyPolicyComponent } from '@components/page/privacy-policy/privacy-policy.component'
// import { LegalDisclaimerComponent } from '@components/page/legal-disclaimer/legal-disclaimer.component'
// import { AboutThisWebsiteComponent } from '@components/page/about-this-website/about-this-website.component'
// import { RegistrationComponent } from '@components/page/registration/registration.component'
// import { RegistersuccessfullComponent } from '@components/page/registersuccessfull/registersuccessfull.component'
function uiRouterConfig(router) { }
var uiRouterStates = [
    {
        abstract: true,
        name: 'base',
        url: '',
        views: {
            header: { component: _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"] },
            content: { component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_1__["ContentComponent"] },
            footer: { component: _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"] }
        }
    },
    {
        name: 'base.login',
        url: '/',
        views: {
            main: { component: _components_views_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
        },
        data: {}
    },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\git\smaug\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map