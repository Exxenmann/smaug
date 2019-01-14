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
/* harmony import */ var _components_views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/views/dashboard/dashboard.component */ "./src/app/components/views/dashboard/dashboard.component.ts");
/* harmony import */ var _components_modals_modal_general_modal_general_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/modals/modal-general/modal-general.component */ "./src/app/components/modals/modal-general/modal-general.component.ts");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helper_jwt_inceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @helper/jwt-inceptor */ "./src/app/helper/jwt-inceptor.ts");
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
                _components_cubestack_cubestack_component__WEBPACK_IMPORTED_MODULE_10__["CubestackComponent"],
                _components_views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _components_modals_modal_general_modal_general_component__WEBPACK_IMPORTED_MODULE_12__["ModalGeneralComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["UIRouterModule"].forRoot({
                    states: _configs_router_config__WEBPACK_IMPORTED_MODULE_3__["uiRouterStates"],
                    config: _configs_router_config__WEBPACK_IMPORTED_MODULE_3__["uiRouterConfig"] // configuration of the uiRouter (e.g. default state)
                }),
            ],
            providers: [
                _services_rest_service__WEBPACK_IMPORTED_MODULE_13__["RestService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
                    useClass: _helper_jwt_inceptor__WEBPACK_IMPORTED_MODULE_16__["JwtInterceptor"],
                    multi: true
                },
            ],
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

module.exports = "<div class=\"container\">\r\n  <div class=\"cube\">\r\n    <div class=\"cube_face side cube_face--front\"></div>\r\n    <!-- <div class=\"cube_face side cube_face--back\"></div> -->\r\n    <!-- <div class=\"cube_face side cube_face--right\"></div> -->\r\n    <div class=\"cube_face side cube_face--left\"></div>\r\n    <div class=\"cube_face end cube_face--top\"></div>\r\n    <!-- <div class=\"cube_face end cube_face--bottom\"></div> -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cube/cube.component.less":
/*!*****************************************************!*\
  !*** ./src/app/components/cube/cube.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cube {\n  position: relative;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s;\n}\n.cube_face {\n  position: absolute;\n  font-weight: bold;\n  color: black;\n  text-align: center;\n}\n.cube_face.side {\n  width: 100px;\n  height: 25px;\n}\n.cube_face.end {\n  width: 100px;\n  height: 100px;\n}\n.cube {\n  -webkit-transform: rotateX(-15deg) rotateY(45deg) rotateZ(0deg);\n          transform: rotateX(-15deg) rotateY(45deg) rotateZ(0deg);\n}\n.cube_face--front {\n  background: #eeeeee;\n}\n.cube_face--right {\n  background: #cccccc;\n}\n.cube_face--back {\n  background: #cccccc;\n}\n.cube_face--left {\n  background: #cccccc;\n}\n.cube_face--top {\n  background: #f9f9f9;\n}\n.cube_face--bottom {\n  background: #cccccc;\n}\n.cube_face--front {\n  -webkit-transform: rotateY(0deg) translateZ(50px);\n          transform: rotateY(0deg) translateZ(50px);\n}\n.cube_face--right {\n  -webkit-transform: rotateY(90deg) translateZ(50px);\n          transform: rotateY(90deg) translateZ(50px);\n}\n.cube_face--back {\n  -webkit-transform: rotateY(180deg) translateZ(50px);\n          transform: rotateY(180deg) translateZ(50px);\n}\n.cube_face--left {\n  -webkit-transform: rotateY(-90deg) translateZ(50px);\n          transform: rotateY(-90deg) translateZ(50px);\n}\n.cube_face--top {\n  -webkit-transform: rotateX(90deg) translateZ(50px);\n          transform: rotateX(90deg) translateZ(50px);\n}\n.cube_face--bottom {\n  -webkit-transform: rotateX(-90deg) translateZ(-25px);\n          transform: rotateX(-90deg) translateZ(-25px);\n}\n"

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

module.exports = "<div style=\"position: relative; height: 130px;\">\n  <app-cube style=\"position: absolute; bottom:0px;\"></app-cube>\n  <app-cube style=\"position: absolute; bottom:35px;\"></app-cube>\n  <app-cube style=\"position: absolute; bottom:70px;\"></app-cube>\n</div>"

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

module.exports = "<div id=\"footer\" style=\"display: flex; justify-content: center; align-items: center;\">\r\n  <app-cubestack></app-cubestack>\r\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.less":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n}\nbody,\ninput,\nbutton {\n  font-family: \"Courier New\";\n  font-size: 14px;\n}\ninput {\n  border: 1px solid black;\n  padding-left: 5px;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\ninput,\nbutton {\n  margin: 5px;\n}\nbutton {\n  background: lightgray;\n  border: none;\n  padding: 5px;\n  transition: all 0.4s ease;\n}\nbutton:hover {\n  background: black;\n  color: white;\n}\n#spinner {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  opacity: 0;\n  visibility: hidden;\n  transition: all ease 0.4s;\n  width: 140px;\n  margin-left: -70px;\n  margin-top: -78.2px;\n}\n#footer {\n  height: 50px;\n  margin-top: 50px;\n}\n"

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

/***/ "./src/app/components/modals/modal-general/modal-general.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/modals/modal-general/modal-general.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- uses bootstrap for styling / css -->\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n   <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n         <div class=\"modal-header\">\n            <h5 class=\"modal-title\">{{modalheadline}}</h5>\n            <button type=\"button\" class=\"close\" (click)=\"onCancel()\" aria-label=\"Close\">\n               <span aria-hidden=\"true\">&times;</span>\n            </button>\n         </div>\n         <div class=\"modal-body\">\n           <div *ngIf=\"scrollable\" class=\"pre-scrollable\" [innerHtml]=\"modalbody\"></div>\n           <div *ngIf=\"!scrollable\" [innerHtml]=\"modalbody\"></div>\n         </div>\n         <div class=\"modal-footer\">\n\n            <button type=\"button\" *ngIf=\"btn_ok\" (click)=\"onOk()\" class=\"btn btn-primary\">Ok</button>\n            <button type=\"button\" *ngIf=\"btn_cancel\" (click)=\"onCancel()\" class=\"btn btn-secondary\">Cancel</button>\n\n         </div>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/components/modals/modal-general/modal-general.component.less":
/*!******************************************************************************!*\
  !*** ./src/app/components/modals/modal-general/modal-general.component.less ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modals/modal-general/modal-general.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/modals/modal-general/modal-general.component.ts ***!
  \****************************************************************************/
/*! exports provided: ModalGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalGeneralComponent", function() { return ModalGeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModalGeneralComponent = /** @class */ (function () {
    function ModalGeneralComponent() {
        this.ok = function () { };
        this.destroy = function () { };
        this.closeModal = function () { };
        this.btn_ok = false;
        this.btn_oktxt = "OK";
        this.btn_cancel = false;
        this.btn_canceltxt = "";
        this.modalheadline = "";
        this.modalbody = "";
    }
    ModalGeneralComponent.prototype.ngOnInit = function () {
        this.showoverlay();
    };
    ModalGeneralComponent.prototype.hideoverlay = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('div#modalOverlay').css('visibility', 'hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__('div#modalOverlay').css('opacity', '0.0');
    };
    ModalGeneralComponent.prototype.showoverlay = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('div#modalOverlay').css('visibility', 'visible');
        jquery__WEBPACK_IMPORTED_MODULE_1__('div#modalOverlay').css('opacity', '0.4');
    };
    ModalGeneralComponent.prototype.onCancel = function () {
        this.hideoverlay();
        this.closeModal();
        this.destroy();
    };
    ModalGeneralComponent.prototype.onOk = function () {
        this.hideoverlay();
        this.closeModal();
        this.destroy();
        this.ok();
    };
    ModalGeneralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-general',
            template: __webpack_require__(/*! ./modal-general.component.html */ "./src/app/components/modals/modal-general/modal-general.component.html"),
            styles: [__webpack_require__(/*! ./modal-general.component.less */ "./src/app/components/modals/modal-general/modal-general.component.less")]
        })
    ], ModalGeneralComponent);
    return ModalGeneralComponent;
}());



/***/ }),

/***/ "./src/app/components/views/dashboard/dashboard.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/views/dashboard/dashboard.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/views/dashboard/dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/views/dashboard/dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/views/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/views/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/views/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/views/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/views/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/views/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\r\n  <form [formGroup]=\"loginForm\" name=\"login\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <div class=\"form-group\">\r\n       <input type=\"email\" name=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" placeholder=\"email\" />\r\n       <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n         <div class=\"required_msg\" *ngIf=\"f.email.errors.required\">Required</div>\r\n         <div class=\"required_msg\" *ngIf=\"f.email.errors.email\">Please enter a valid email address</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"password\" name=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"password\"/>\r\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n        <div class=\"required_msg\" *ngIf=\"f.password.errors.required\">Required</div>\r\n        <div class=\"required_msg\" *ngIf=\"f.password.errors.minlength\">At least 6 characters are required</div>\r\n      </div>\r\n      <div uiSref=\"base.password_reset_request\" class=\"password-reset\" (click)=\"onSubmit_event.emit()\">Forgot Your Password?</div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <button>log in</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/views/login/login.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/views/login/login.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n}\nbody,\ninput,\nbutton {\n  font-family: \"Courier New\";\n  font-size: 14px;\n}\ninput {\n  border: 1px solid black;\n  padding-left: 5px;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\ninput,\nbutton {\n  margin: 5px;\n}\nbutton {\n  background: lightgray;\n  border: none;\n  padding: 5px;\n  transition: all 0.4s ease;\n}\nbutton:hover {\n  background: black;\n  color: white;\n}\n#spinner {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  opacity: 0;\n  visibility: hidden;\n  transition: all ease 0.4s;\n  width: 140px;\n  margin-left: -70px;\n  margin-top: -78.2px;\n}\nform {\n  text-align: center;\n}\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_loadingoverlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/loadingoverlay.service */ "./src/app/services/loadingoverlay.service.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modal.service */ "./src/app/services/modal.service.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
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
    function LoginComponent(formBuilder, 
    // private userService: UserService,
    authenticationService, stateService, loadingoverlayService, modalService) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.stateService = stateService;
        this.loadingoverlayService = loadingoverlayService;
        this.modalService = modalService;
        this.submitted = false;
        this.onSubmit_event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid)
            return;
        this.onSubmit_event.emit();
        this.loadingoverlayService.start();
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .then(function () {
            // SUCCESS
            _this.loadingoverlayService.stop();
            // this.stateService.go('base.backend')
            console.log("login successfull");
        }, function () {
            // ERROR
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
    };
    LoginComponent.prototype.register = function () {
        // button itself handles stateservice.goto
        // currently only closes dialog so we use it
        this.onSubmit_event.emit();
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LoginComponent.prototype, "onSubmit_event", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/components/views/login/login.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__["StateService"],
            _services_loadingoverlay_service__WEBPACK_IMPORTED_MODULE_3__["LoadingoverlayService"],
            _services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]])
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

/***/ "./src/app/helper/jwt-inceptor.ts":
/*!****************************************!*\
  !*** ./src/app/helper/jwt-inceptor.ts ***!
  \****************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentToken = localStorage.getItem('currentToken');
        if (currentToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentToken
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/rest.service */ "./src/app/services/rest.service.ts");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/globals.service */ "./src/app/services/globals.service.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, globalsService, stateService, restService) {
        this.http = http;
        this.globalsService = globalsService;
        this.stateService = stateService;
        this.restService = restService;
        if ((localStorage.getItem("currentToken") != null) && (localStorage.getItem("username") != null)) {
            this.globalsService.isloggedin = true;
            this.stateService.go('base.backend');
        }
    }
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.restService.post('auth/login', { email: email, password: password })
                .then(
            // SUCCESS
            function (data) {
                _this.setLoginData(data);
                resolve();
            }, 
            // ERROR
            function () {
                reject();
            });
        });
        return promise;
        // return this.http.post<any>('/api/auth/login', { email: email, password: password })
        //    .pipe(
        //       map(data => {
        //          this.setLoginData(data)
        //       })
        //    )
    };
    AuthenticationService.prototype.setLoginData = function (data) {
        if (data.user && data.token) {
            // also store it in global service so buttons can watch it
            this.globalsService.isloggedin = true;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentToken', data.token);
            localStorage.setItem('username', data.user.name);
            localStorage.setItem('isAdmin', data.user.admin);
        }
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return (localStorage.getItem("currentToken") !== null);
    };
    AuthenticationService.prototype.isAdmin = function () {
        return localStorage.getItem('isAdmin') == "true";
    };
    AuthenticationService.prototype.getUsername = function () {
        return localStorage.getItem('username');
    };
    AuthenticationService.prototype.logout = function () {
        // TODO use rest service so a consistent unified api is used
        var _this = this;
        var f = function () {
            _this.globalsService.isloggedin = false;
            localStorage.removeItem('currentToken');
            localStorage.removeItem('isAdmin');
            localStorage.removeItem('username');
        };
        return this.http.post('/api/protected/account/logout', {})
            .toPromise()
            .then(f)
            .catch(f);
    };
    AuthenticationService.prototype.requestPasswordReset = function (email) {
        return this.restService.post('auth/reset/generate', { email: email });
    };
    AuthenticationService.prototype.resetPassword = function (token, data) {
        var body = Object.assign({ token: token }, data);
        return this.restService.post('auth/reset/use', body);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__["StateService"],
            _services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/globals.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/globals.service.ts ***!
  \*********************************************/
/*! exports provided: GlobalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalsService", function() { return GlobalsService; });
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

var GlobalsService = /** @class */ (function () {
    function GlobalsService() {
        this.dev = false;
        if (window.location.origin.includes('192.168.'))
            this.dev = true;
    }
    GlobalsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GlobalsService);
    return GlobalsService;
}());



/***/ }),

/***/ "./src/app/services/loadingoverlay.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/loadingoverlay.service.ts ***!
  \****************************************************/
/*! exports provided: LoadingoverlayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingoverlayService", function() { return LoadingoverlayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingoverlayService = /** @class */ (function () {
    function LoadingoverlayService() {
        this.overlay = jquery__WEBPACK_IMPORTED_MODULE_1__('<div id="overlay"></div>');
        this.overlay.appendTo(document.body);
        this.spinner = jquery__WEBPACK_IMPORTED_MODULE_1__('<img id="spinner" src="assets/images/Eclipse-1s-90px.svg"/>');
        this.spinner.appendTo(document.body);
        this.overlay.css('z-index', 80001);
        this.spinner.css('z-index', 80002);
    }
    LoadingoverlayService.prototype.start = function () {
        // console.log("start loading")
        jquery__WEBPACK_IMPORTED_MODULE_1__(this.overlay).css('visibility', 'visible');
        jquery__WEBPACK_IMPORTED_MODULE_1__(this.overlay).css('opacity', '0.5');
        jquery__WEBPACK_IMPORTED_MODULE_1__(this.spinner).css('visibility', 'visible');
        jquery__WEBPACK_IMPORTED_MODULE_1__(this.spinner).css('opacity', '1');
    };
    LoadingoverlayService.prototype.stop = function () {
        // console.log("stop loading")
        jquery__WEBPACK_IMPORTED_MODULE_1__(this.overlay).css('visibility', 'hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__(this.overlay).css('opacity', '0.0');
        jquery__WEBPACK_IMPORTED_MODULE_1__(this.spinner).css('visibility', 'hidden');
        jquery__WEBPACK_IMPORTED_MODULE_1__(this.spinner).css('opacity', '0.0');
    };
    /**
     * This shows the loading overlay until the resolution of the given promise.
     *
     * @param      {Promise<T>}  promise  The promise
     * @param      {boolean}     swallow  Whether to rethrow errors in the
     *                                    catch-handler. This can be used to
     *                                    prevent console-spam when error
     *                                    responses are expected (e.g.
     *                                    server-side validation)
     * @return     {Promise<T>}  Effectively the first argument
     */
    LoadingoverlayService.prototype.wrap = function (promise, swallow) {
        var _this = this;
        this.start();
        return promise
            .then(function (a) { return (_this.stop(), a); })
            .catch(function (e) {
            _this.stop();
            if (swallow !== true)
                return Promise.reject(e);
        });
    };
    LoadingoverlayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoadingoverlayService);
    return LoadingoverlayService;
}());



/***/ }),

/***/ "./src/app/services/modal.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _components_modals_modal_general_modal_general_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/modals/modal-general/modal-general.component */ "./src/app/components/modals/modal-general/modal-general.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalService = /** @class */ (function () {
    function ModalService(compiler, appRef, factoryResolver, injector) {
        this.compiler = compiler;
        this.appRef = appRef;
        this.factoryResolver = factoryResolver;
        this.injector = injector;
        // here we hold our injector
        // private injector: Injector
        // we can use this to determine z-index of multiple modals
        this.activeInstances = 0;
    }
    /**
     * This method is only kept for backwards-compatibility
     */
    ModalService.prototype.registerViewContainerRef = function (vcRef) {
    };
    /**
     * This method is only kept for backwards-compatibility
     */
    ModalService.prototype.registerInjector = function (injector) {
    };
    ModalService.prototype.create = function (component, parameters) {
        // we return a stream so we can  access the componentref
        var componentRef$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        var factory = this.factoryResolver.resolveComponentFactory(component), ref = factory.create(this.injector), elem = ref.hostView.rootNodes[0], destroy = ref.destroy.bind(ref);
        ref.instance.destroy = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            document.body.removeChild(elem);
            destroy.apply(void 0, args);
        };
        Object.assign(ref.instance, parameters);
        this.appRef.attachView(ref.hostView);
        document.body.appendChild(elem);
        componentRef$.next(ref);
        return componentRef$;
    };
    ModalService.prototype.info = function (data) {
        var _this = this;
        var params = {
            modalheadline: data.title,
            modalbody: data.message,
            btn_ok: true,
            btn_oktxt: data.ok || 'OK'
        };
        return new Promise(function (resolve) {
            _this.create(_components_modals_modal_general_modal_general_component__WEBPACK_IMPORTED_MODULE_2__["ModalGeneralComponent"], params)
                .subscribe(function (ref) {
                ref.instance.ok = resolve;
            });
        });
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/services/rest.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/rest.service.ts ***!
  \******************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _loadingoverlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadingoverlay.service */ "./src/app/services/loadingoverlay.service.ts");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/globals.service */ "./src/app/services/globals.service.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modal.service */ "./src/app/services/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestService = /** @class */ (function () {
    function RestService(http, stateService, loadingoverlayService, globalsService, modalService) {
        this.http = http;
        this.stateService = stateService;
        this.loadingoverlayService = loadingoverlayService;
        this.globalsService = globalsService;
        this.modalService = modalService;
        this.baseurl = '/api/';
    }
    RestService.prototype.notAuthorized = function () {
        alert("Your Authentication could not be verified. Probably your session is expired. Please login again.");
        this.globalsService.isloggedin = false;
        localStorage.removeItem('currentToken');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('username');
        this.stateService.go('base.home');
    };
    RestService.prototype.requestErrorGeneral = function (error) {
        console.error(error);
        this.loadingoverlayService.stop();
    };
    RestService.prototype.uploadFiles = function (files) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            files.forEach(function (file) {
                var formData = new FormData();
                formData.append('file', file, file.name);
                var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', _this.baseurl + 'admin/acceptpdfs', formData, {});
                _this.http.request(req).subscribe(function (event) {
                    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"])
                        resolve();
                }, function (error) {
                    _this.requestErrorGeneral(error);
                    if (error.status == 401) {
                        _this.notAuthorized();
                        _this.stateService.go('base.home');
                    }
                    reject();
                });
            });
        });
        return promise;
    };
    RestService.prototype.downloadFile = function (endpoint, postData, filename, p_responseMimeType) {
        var _this = this;
        var restService = this;
        var responseMimeType = (p_responseMimeType) ? p_responseMimeType : "application/octet-stream";
        var HTTPOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Accept': responseMimeType
            }),
            'responseType': 'blob',
        };
        // COMMENTED OUT IN CASE ONE EVER NEEDS A REAL PROGRESSBAR THAT KNOWS PERCENT - DOESNT WORK BUT IS A GOOD HEADSTART
        // also reportProgress: true in HTTPOptions
        // const req = new HttpRequest('POST', this.baseurl+endpoint, filename, HTTPOptions)
        // this.http.request(req).subscribe(
        //    event => {
        //       if (event.type === HttpEventType.DownloadProgress) {
        //          console.log(event)
        //          const percentDone = Math.round(100 * event.loaded / event.total)
        //          console.log(`File is ${percentDone}% downloaded.`)
        //       } else if (event instanceof HttpResponse) {
        //          console.log('File is completely downloaded!')
        //       }
        // })
        this.http.post(this.baseurl + endpoint, postData, HTTPOptions)
            .subscribe(function (res) {
            // console.log('start download:',res)
            var blob = new Blob([res], { type: "octet/stream" });
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display: none');
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove();
        }, function (error) {
            _this.requestErrorGeneral(error);
            if (error.status == 401) {
                _this.notAuthorized();
                _this.stateService.go('base.home');
            }
        }, function () {
            // console.log('Completed file download.')
        });
    };
    RestService.prototype.post = function (endpoint, postData) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.baseurl + endpoint, postData, {}).toPromise()
                .then(function (res) {
                resolve(res);
            })
                .catch(function (response) {
                _this.handleResponseError(response);
                reject();
            });
        });
        return promise;
    };
    RestService.prototype.get = function (endpoint) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.baseurl + endpoint).toPromise()
                .then(function (res) {
                resolve(res);
            })
                .catch(function (response) {
                _this.handleResponseError(response);
                reject();
            });
        });
        return promise;
    };
    RestService.prototype.put = function (endpoint, data) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put(_this.baseurl + endpoint, data).toPromise()
                .then(function (res) {
                resolve(res);
            })
                .catch(function (response) {
                _this.handleResponseError(response);
                reject();
            });
        });
        return promise;
    };
    RestService.prototype.handleResponseError = function (response) {
        this.requestErrorGeneral(response);
        if (response.status == 200)
            return;
        else if (response.status == 401) {
            if (response.error.error == "user_not_confirmed") {
                this.modalService.info({
                    title: 'Account not yet confirmed',
                    message: "This account has not yet been confirmed via Email. Please confirm it via the link we have sent you."
                });
            }
            else if (response.error.error == "invalid_credentials") {
                this.modalService.info({
                    title: 'Login not successfull',
                    message: "The login was not successfull. Please check your credentials."
                });
            }
            else {
                this.notAuthorized();
            }
            // if invalid credentials is returned dont go to start page
            // because user probably is on login screen and wants to reenter credentials
            if (response.error.error != "invalid_credentials")
                this.stateService.go('base.home');
        }
        // Method Not Allowed
        else if (response.status == 405) {
            this.notAuthorized();
        }
        else if (response.status == 422) {
            var errors_s = "";
            for (var key in response.error.errors) {
                if (response.error.errors.hasOwnProperty(key)) {
                    errors_s += key + ": " + response.error.errors[key];
                    errors_s += '<br>';
                }
            }
            var message = 'Your request was invalid because of the following errors:<br>' + errors_s;
            this.modalService.info({
                title: 'ERROR',
                message: message
            });
        }
        else if (response.status == 500) {
            alert("ERROR: an internal server error happened - please contact the system administrator.");
        }
        else {
            var msg = JSON.stringify(response.error.message);
            var time = JSON.stringify(response.error.time);
            this.modalService.info({
                title: 'ERROR - please report this message to us',
                message: "ERROR: a server error happened - please report this error to us.<br>HTTP Code: " +
                    response.status + "<br>Error message: " + msg + " " + time
            });
        }
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _loadingoverlay_service__WEBPACK_IMPORTED_MODULE_3__["LoadingoverlayService"],
            _services_globals_service__WEBPACK_IMPORTED_MODULE_4__["GlobalsService"],
            _services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]])
    ], RestService);
    return RestService;
}());



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