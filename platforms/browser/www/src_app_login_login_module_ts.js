"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let LoginPage = class LoginPage {
    constructor(router, modalcontroller) {
        this.router = router;
        this.modalcontroller = modalcontroller;
        this.isopen = true;
    }
    ngOnInit() { }
    logIn() {
        this.modalcontroller.dismiss();
        this.router.navigate(['/tabs/tab1']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".main {\n  --background: linear-gradient(#58967f, #f0f9f9);\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\nion-text {\n  color: #000b05;\n}\n\nh1 {\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  margin-bottom: 0;\n}\n\nh5 {\n  margin-top: 5px;\n  letter-spacing: 1px;\n}\n\nh3 {\n  font-weight: 600;\n  letter-spacing: 1px;\n  padding-left: 10px;\n}\n\nion-modal {\n  --height: 100%;\n  --border-radius: 30px;\n  --background: transparent;\n  --box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px,\n      rgba(17, 17, 26, 0.1) 0px 16px 56px;\n}\n\nion-item {\n  padding: 5px 0;\n  --border-width: 0;\n  --border-radius: 16px;\n  --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n\nion-button {\n  --border-radius: 20px;\n  --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  --padding-top: 22px;\n  --padding-bottom: 22px;\n}\n\nion-content {\n  --backdrop-filter: blur(16px) saturate(184%);\n  -webkit-backdrop-filter: blur(16px) saturate(184%);\n  --background: rgba(255, 255, 255, 0.4);\n  border-radius: 12px;\n  letter-spacing: 0.9px;\n}\n\n.wrap {\n  margin-top: 0.5rem;\n}\n\nion-label {\n  padding-left: 13px;\n}\n\nion-thumbnail {\n  margin-top: 1rem;\n  padding-left: 0.5rem;\n}\n\nion-icon {\n  font-size: 30px;\n  color: rgba(84, 87, 88, 0.7019607843);\n}\n\np {\n  padding: 8px 0;\n}\n\n.bottom {\n  position: absolute;\n  width: 90%;\n  bottom: 20%;\n}\n\n.content {\n  margin: auto;\n}\n\n@media (min-width: 500px) {\n  .content {\n    width: 500px;\n  }\n}\n\nion-item::part(native) {\n  background: #fbfbfb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uL0FwcF9VaS1tYXN0ZXIlMjAyL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksK0NBQUE7RUFNQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURNQTtFQUVJLGNBQUE7QUNKSjs7QURNQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBO3lDQUFBO0FDRko7O0FETUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVEQUFBO0FDSEo7O0FETUE7RUFDSSxxQkFBQTtFQUNBLHVEQUFBO0VBR0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0xKOztBRFFBO0VBUUksNENBQUE7RUFDQSxrREFBQTtFQUNBLHNDQUFBO0VBRUEsbUJBQUE7RUFFQSxxQkFBQTtBQ2RKOztBRGlCQTtFQUNJLGtCQUFBO0FDZEo7O0FEc0JBO0VBRUksa0JBQUE7QUNwQko7O0FEdUJBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQ3BCSjs7QURzQkE7RUFDSSxlQUFBO0VBQ0EscUNBQUE7QUNuQko7O0FEcUJBO0VBQ0ksY0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxXQUFBO0FDbkJKOztBRHFCQTtFQUNJLFlBQUE7QUNsQko7O0FEb0JBO0VBQ0k7SUFDSSxZQUFBO0VDakJOO0FBQ0Y7O0FEb0JBO0VBQ0ksbUJBQUE7QUNsQkoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIC8vIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzLzI1LnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwMjMyOCwgI2YwZjlmOSk7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzU4OTY3ZiwgI2YwZjlmOSk7XG4gICAgLy8gNTg5NjdmXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjZjBmOWY5O1xuICAgIC8vIC0tYmFja2dyb3VuZDogI2E4ZDRkNztcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi10ZXh0IHtcbiAgICAvLyBjb2xvcjogI2ZiZmJmYjtcbiAgICBjb2xvcjogIzAwMGIwNTtcbn1cbmgxIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmg1IHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuaDMge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tb2RhbCB7XG4gICAgLS1oZWlnaHQ6IDEwMCU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3gtc2hhZG93OiByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDRweCAxNnB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDhweCAyNHB4LFxuICAgICAgICByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDE2cHggNTZweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAtLWJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLS1ib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcbiAgICAvLyAtLWJhY2tncm91bmQ6ICNGM0M0QkQ7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiAjRjQ3QzdDO1xuICAgIC0tcGFkZGluZy10b3A6IDIycHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC8vIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAvLyBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XG4gICAgLy8gLS1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICAvLyAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcblxuICAgIC0tYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpIHNhdHVyYXRlKDE4NCUpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE2cHgpIHNhdHVyYXRlKDE4NCUpO1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgIC8vIC0tYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwOSwgMjEzLCAyMTksIDAuMyk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOXB4O1xufVxuXG4ud3JhcCB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4vLyBpb24taW5wdXQge1xuLy8gICAgIC0tcGFkZGluZy1ib3R0b206IDEycHggIWltcG9ydGFudDtcbi8vICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHggIWltcG9ydGFudDtcbi8vIH1cblxuaW9uLWxhYmVsIHtcbiAgICAvLyBtYXJnaW4tdG9wOiAtNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzU0NTc1OGIzO1xufVxucCB7XG4gICAgcGFkZGluZzogOHB4IDA7XG59XG5cbi5ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTAlO1xuICAgIFxuICAgIGJvdHRvbTogMjAlO1xufVxuLmNvbnRlbnQge1xuICAgIG1hcmdpbjogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAgIC5jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgIH1cbn1cblxuaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbn1cbiIsIi5tYWluIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzU4OTY3ZiwgI2YwZjlmOSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tdGV4dCB7XG4gIGNvbG9yOiAjMDAwYjA1O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaDUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbW9kYWwge1xuICAtLWhlaWdodDogMTAwJTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggNHB4IDE2cHgsIHJnYmEoMTcsIDE3LCAyNiwgMC4xKSAwcHggOHB4IDI0cHgsXG4gICAgICByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDE2cHggNTZweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIC0tYm9yZGVyLXJhZGl1czogMTZweDtcbiAgLS1ib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1ib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMjJweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODQlKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCkgc2F0dXJhdGUoMTg0JSk7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC45cHg7XG59XG5cbi53cmFwIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG5pb24tbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiByZ2JhKDg0LCA4NywgODgsIDAuNzAxOTYwNzg0Myk7XG59XG5cbnAge1xuICBwYWRkaW5nOiA4cHggMDtcbn1cblxuLmJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgYm90dG9tOiAyMCU7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxufVxuaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG59Il19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"main ion-padding\">\n  <div class=\"content\">\n    <ion-text>\n      <h1>Hello Again!</h1>\n      <h6>Welcome back you've been missed!</h6>\n    </ion-text>\n    <div class=\"bottom\">\n      <ion-button id=\"open-that\" (click)=\"isopen = !isopen\" expand=\"block\" *ngIf=\"!isopen\">\n        Sign in\n      </ion-button>\n    </div>\n    <ion-modal [isOpen]=\"isopen\"\n      (ionModalDidDismiss)=\"isopen = !isopen\"  show-backdrop=\"false\" trigger=\"open-modal1\"\n      [initialBreakpoint]=\"0.75\">\n      <!-- <ion-modal isOpen=\"true\" show-backdrop=\"false\" trigger=\"open-modal1\" [initialBreakpoint]=\"0.75\"> -->\n      <ng-template>\n        <ion-content class=\"mainContent modal-content ion-padding\">\n          <div class=\"wrap\" style=\"margin-top: 2rem;\">\n            <ion-item lines=\"none\">\n              <!-- <ion-label  type=\"text\" position=\"floating\">Username</ion-label> -->\n              <ion-input placeholder=\"Username\"></ion-input>\n            </ion-item>\n\n            <ion-item lines=\"none\" style=\"margin-top: .3rem;\">\n              <!-- <ion-label position=\"floating\">Password</ion-label> -->\n              <ion-input type=\"password\" placeholder=\"Password\"></ion-input>\n            </ion-item>\n\n            <!-- <ion-item lines=\"none\" style=\"--background: transparent;\">\n            <ion-label style=\"text-align: right;\">\n              Recover Password\n            </ion-label>\n          </ion-item> -->\n            <p\n              style=\"font-size: 13px; text-align: right !important; padding-right: 10px;color: #002328; font-weight: 800; \">\n              Recover Password\n            </p>\n\n            <ion-button style=\"margin-top: 1rem;\" (click)=\"logIn()\" expand=\"block\"><b>Sign In</b></ion-button>\n            <p style=\"font-size: 13px; text-align: center !important;color: #002328;font-weight: 800; \"><b>Or</b>\n              continue with</p>\n            <div style=\"display: flex; align-items: center; justify-content: space-around;\">\n              <ion-thumbnail>\n                <!-- <img src=\"../../assets/images/fbicon.png\"> -->\n                <ion-icon name=\"logo-google\"></ion-icon>\n              </ion-thumbnail>\n              <ion-thumbnail>\n                <!-- <img src=\"../../assets/images/fbicon.png\"> -->\n                <ion-icon name=\"logo-facebook\"></ion-icon>\n              </ion-thumbnail>\n\n              <ion-thumbnail>\n                <!-- <img src=\"../../assets/images/appleicon.png\"> -->\n                <ion-icon name=\"logo-github\"></ion-icon>\n              </ion-thumbnail>\n              <ion-thumbnail>\n                <!-- <img src=\"../../assets/images/googleicon.png\"> -->\n                <ion-icon name=\"logo-apple\"></ion-icon>\n              </ion-thumbnail>\n            </div>\n            <p style=\"font-size: 13px; text-align: center !important;color: #002328;font-weight: 800; \">Not a member?\n              &nbsp;&nbsp;<a style=\"font-weight: 700;color: #000708;\">Register Now</a></p>\n          </div>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map