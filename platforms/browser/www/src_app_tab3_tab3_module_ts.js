"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let Tab3Page = class Tab3Page {
    constructor() { }
};
Tab3Page.ctorParameters = () => [];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".header {\n  background-color: #015557;\n  width: auto;\n  height: 300px;\n}\n\n.wrap {\n  top: 15%;\n  position: relative;\n  margin-top: -2rem;\n}\n\nion-avatar {\n  margin: auto;\n  width: 130px;\n  height: 130px;\n}\n\n.username {\n  text-align: center;\n  color: #ffffff;\n}\n\n.info {\n  font-weight: 800;\n  margin-left: 2rem;\n  color: #015557;\n}\n\n.info-header {\n  font-weight: 800;\n  margin-left: 0.5rem;\n  padding-left: 0.5rem;\n  margin-bottom: 0.5rem;\n  color: #015557;\n}\n\n.info-text {\n  margin-left: 0.5rem;\n  padding-left: 0.5rem;\n  margin-bottom: 0.2rem;\n  color: #747a7a;\n}\n\nion-icon {\n  color: #015557;\n}\n\nion-item {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vQXBwX1VpLW1hc3RlciUyMDIvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0RKOztBREtBO0VBRUksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURLQTtFQUNJLFlBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtBQ0hKOztBRFFBO0VBRUksa0JBQUE7RUFDQSxjQUFBO0FDTko7O0FEU0E7RUFFSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1BKOztBRFVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDUEo7O0FEWUE7RUFFSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDVko7O0FEY0E7RUFDSSxjQUFBO0FDWEo7O0FEYUE7RUFDSSxnQkFBQTtBQ1ZKIiwiZmlsZSI6InRhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlclxue1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTU1NTc7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBcbiAgICBcbn1cbi53cmFwIHtcbiAgICAvL21hcmdpbjogYXV0bztcbiAgICB0b3A6IDE1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogLTJyZW07XG59XG5pb24tYXZhdGFyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgXG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgXG5cbiAgICBcbn1cbi51c2VybmFtZXtcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG5cbn1cbi5pbmZvXG57XG4gICAgZm9udC13ZWlnaHQ6ODAwO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtOyAgICBcbiAgICBjb2xvcjogIzAxNTU1NztcblxufVxuLmluZm8taGVhZGVye1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgY29sb3I6ICMwMTU1NTc7XG5cblxufVxuXG4uaW5mby10ZXh0e1xuICBcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbiAgICBjb2xvcjogIzc0N2E3YTtcblxufVxuXG5pb24taWNvbntcbiAgICBjb2xvcjogIzAxNTU1Nztcbn1cbmlvbi1pdGVte1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59IiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTU1NTc7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4ud3JhcCB7XG4gIHRvcDogMTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC0ycmVtO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG59XG5cbi51c2VybmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pbmZvIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIGNvbG9yOiAjMDE1NTU3O1xufVxuXG4uaW5mby1oZWFkZXIge1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBjb2xvcjogIzAxNTU1Nztcbn1cblxuLmluZm8tdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG4gIGNvbG9yOiAjNzQ3YTdhO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjMDE1NTU3O1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59Il19 */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 3</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- <app-explore-container name=\"Tab 3 page\"></app-explore-container> -->\n  <div class=\"header\">\n    <ion-icon name=\"arrow-back-circle\"  style=\"color: white; font-size: 2.5rem; margin-top: 0.5rem; margin-left: 0.5rem;\" ></ion-icon>\n    <div class=\"wrap\">\n      <ion-avatar>\n        <img src=\"../../assets/images/Avatar4.jpg\">\n      </ion-avatar>\n      <h2 class=\"username\">@HarryWilson</h2>\n      <h6 class=\"username\">HarryWilson@gmail.com</h6>\n    </div>\n  \n  </div>\n  <div>\n    <div>\n          <h2 class=\"info\">Account Info</h2>\n      <ion-list class=\"ion-padding\" style=\"margin-top: -0.5rem;\">\n        <ion-item lines=\"none\">\n          <ion-icon name=\"person-sharp\">\n\n          </ion-icon>\n          <ion-label>\n            <h5 class=\"info-header\"> Name</h5>\n            <!-- <h6 class=\"info-text\">HarryWilson</h6> -->\n            <p class=\"info-text\">HarryWilson</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-icon name=\"phone-portrait\"></ion-icon>\n          <ion-label>\n            <h5 class=\"info-header\"> Mobile</h5>\n            <h6 class=\"info-text\">+918072222427</h6>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-icon name=\"mail\"></ion-icon>\n          <ion-label>\n            <h5 class=\"info-header\"> Mail</h5>\n            <h6 class=\"info-text\">HarryWilson@gmail.com</h6>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-icon name=\"home\"></ion-icon>\n          <ion-label>\n            <h5 class=\"info-header\"> Address</h5>\n            <h6 class=\"info-text\">23 KK Nagar Trichy</h6>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-icon name=\"calendar\"></ion-icon>\n          <ion-label>\n            <h5 class=\"info-header\"> D.O.B</h5>\n            <h6 class=\"info-text\">25-05-1995</h6>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map