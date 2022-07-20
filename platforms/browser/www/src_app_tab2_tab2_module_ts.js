"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-svg-round-progressbar */ 8841);









let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule,
            angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_8__.RoundProgressModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let Tab2Page = class Tab2Page {
    constructor() {
        this.products = [
            { productId: '1', product: 'iphone 13', category: 'mobile', rating: 4, src: '../../assets/images/iphone-13.jpg', global: 3.5, local: 2.5, lifestyle: 4, percent: [{ star5: 0.84 }, { star4: 0.15 }, { star3: 0.5 }, { star2: 0.18 }, { star1: 0.1 }] },
            { productId: '2', product: 'Panasonic Oven', category: 'Electronics', rating: 2, src: '../../assets/images/oven.jpg', global: 2.5, local: 3, lifestyle: 2, percent: [{ star5: 0.66 }, { star4: 0.35 }, { star3: 0.25 }, { star2: 0.28 }, { star1: 0.5 }] },
            { productId: '3', product: 'Vittara Brezza', category: 'Automobile', rating: 3, src: '../../assets/images/vittara.jpg', global: 3, local: 4, lifestyle: 3, percent: [{ star5: 0.74 }, { star4: 0.45 }, { star3: 0.25 }, { star2: 0.38 }, { star1: 0.26 }] },
            { productId: '4', product: 'Nestle Maggi', category: 'Food', rating: 2.5, src: '../../assets/images/maggi.png', global: 2, local: 2.5, lifestyle: 3.5, percent: [{ star5: 0.58 }, { star4: 0.63 }, { star3: 0.57 }, { star2: 0.58 }, { star1: 0.35 }] },
            { productId: '5', product: 'LG washing Machine', category: 'Home Appliance', rating: 3.5, src: '../../assets/images/washing.jpg', global: 4, local: 3.5, lifestyle: 4.5, percent: [{ star5: 0.12 }, { star4: 0.42 }, { star3: 0.63 }, { star2: 0.41 }, { star1: 0.96 }] },
            { productId: '6', product: 'Sofa', category: 'Furniture', rating: 4.5, src: '../../assets/images/sofa.jpg', global: 4, local: 2.5, lifestyle: 4, percent: [{ star5: 0.80 }, { star4: 0.30 }, { star3: 0.45 }, { star2: 0.12 }, { star1: 0.08 }] },
            { productId: '7', product: 'Pedigree', category: 'Pet Food', rating: 1.5, src: '../../assets/images/pedigree.jpg', global: 3, local: 2, lifestyle: 3.5, percent: [{ star5: 0.80 }, { star4: 0.30 }, { star3: 0.45 }, { star2: 0.12 }, { star1: 0.08 }] }
        ];
        this.clicked();
    }
    ionViewWillEnter() {
        this.clicked();
    }
    clicked() {
        this.star1 = 'star-outline';
        this.star2 = 'star-outline';
        this.star3 = 'star-outline';
        this.star4 = 'star-outline';
        this.star5 = 'star-outline';
        this.clickedProducts = localStorage.getItem('productId');
        for (let i = 0; i < this.products.length; i++) {
            if (this.clickedProducts == this.products[i].productId) {
                this.gotit = this.products[i];
                switch (this.gotit.rating) {
                    case 1: {
                        this.star1 = 'star';
                        break;
                    }
                    case 1.5: {
                        this.star1 = 'star';
                        this.star2 = 'star-half-outline';
                        break;
                    }
                    case 2: {
                        this.star1 = 'star';
                        this.star2 = 'star';
                        break;
                    }
                    case 2.5: {
                        this.star1 = 'star';
                        this.star2 = 'star';
                        this.star3 = 'star-half-outline';
                        break;
                    }
                    case 3: {
                        this.star1 = 'star';
                        this.star2 = 'star';
                        this.star3 = 'star';
                        break;
                    }
                    case 3.5: {
                        this.star1 = 'star';
                        this.star2 = 'star';
                        this.star3 = 'star';
                        this.star4 = 'star-half-outline';
                        break;
                    }
                    case 4: {
                        this.star1 = 'star';
                        this.star2 = 'star';
                        this.star3 = 'star';
                        this.star4 = 'star';
                        break;
                    }
                    case 4.5: {
                        this.star1 = 'star';
                        this.star2 = 'star';
                        this.star3 = 'star';
                        this.star4 = 'star';
                        this.star5 = 'star-half-outline';
                        break;
                    }
                    case 5: {
                        this.star1 = 'star';
                        this.star2 = 'star';
                        this.star3 = 'star';
                        this.star4 = 'star';
                        this.star5 = 'star';
                        break;
                    }
                }
                break;
            }
        }
    }
};
Tab2Page.ctorParameters = () => [];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#productCard {\n  border-radius: 1rem;\n  background: #fff;\n}\n\nion-progress-bar {\n  height: 6px;\n  border-radius: 20px;\n  --background: #fff;\n  --progress-background: #015557;\n}\n\n.wrap p {\n  white-space: nowrap;\n  text-align: right;\n}\n\n.prog {\n  display: flex;\n  align-items: center;\n}\n\n.rating {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.rating ion-item {\n  --background: transparent;\n}\n\n#productCard ion-icon {\n  font-size: 16px;\n  padding: 0 3px;\n  color: #fe9f17;\n}\n\n#productCard ion-item {\n  --padding-start: 0px;\n}\n\n.chipWrap {\n  margin: 10px 0 15px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nround-progress {\n  height: 60px !important;\n  width: 60px !important;\n  margin: 6px 6px;\n}\n\n.progWrap {\n  position: relative;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.current {\n  top: 50%;\n  bottom: auto;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  position: absolute;\n  color: #000;\n  font-weight: 100;\n  line-height: 1;\n}\n\n.productTitle {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.35;\n}\n\nspan {\n  color: rgb(115, 115, 115);\n  font-weight: 500;\n  font-size: 14px;\n}\n\nh6 {\n  font-size: 13px;\n  font-weight: 500;\n}\n\nion-grid {\n  border-radius: 1rem;\n  padding: 12px;\n  background: #f2f6f6;\n  margin-top: 2rem;\n}\n\n.imgwrap {\n  position: relative;\n  height: 300px;\n  width: 100%;\n}\n\n.imgwrap img {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  margin: auto;\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vQXBwX1VpLW1hc3RlciUyMDIvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREdBO0VBQ0ksb0JBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQUo7O0FER0E7RUFDSSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FKIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2R1Y3RDYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmlvbi1wcm9ncmVzcy1iYXIge1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogIzAxNTU1Nztcbn1cblxuLndyYXAgcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnByb2cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJhdGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmF0aW5nIGlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4jcHJvZHVjdENhcmQgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAwIDNweDtcbiAgICBjb2xvcjogI2ZlOWYxNztcblxufVxuXG4jcHJvZHVjdENhcmQgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4uY2hpcFdyYXAge1xuICAgIG1hcmdpbjogMTBweCAwIDE1cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5yb3VuZC1wcm9ncmVzcyB7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDZweCA2cHg7XG59XG5cbi5wcm9nV3JhcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmN1cnJlbnQge1xuICAgIHRvcDogNTAlO1xuICAgIGJvdHRvbTogYXV0bztcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5wcm9kdWN0VGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xufVxuXG5zcGFuIHtcbiAgICBjb2xvcjogcmdiKDExNSwgMTE1LCAxMTUpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5oNiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI2YyZjZmNjtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uaW1nd3JhcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWd3cmFwIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn0iLCIjcHJvZHVjdENhcmQge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pb24tcHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjMDE1NTU3O1xufVxuXG4ud3JhcCBwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wcm9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmF0aW5nIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuI3Byb2R1Y3RDYXJkIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwIDNweDtcbiAgY29sb3I6ICNmZTlmMTc7XG59XG5cbiNwcm9kdWN0Q2FyZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4uY2hpcFdyYXAge1xuICBtYXJnaW46IDEwcHggMCAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxucm91bmQtcHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA2cHggNnB4O1xufVxuXG4ucHJvZ1dyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3VycmVudCB7XG4gIHRvcDogNTAlO1xuICBib3R0b206IGF1dG87XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ucHJvZHVjdFRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMS4zNTtcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiByZ2IoMTE1LCAxMTUsIDExNSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogI2YyZjZmNjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmltZ3dyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nd3JhcCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59Il19 */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\n  <ion-item lines=\"none\">\n    <ion-icon slot=\"end\" name=\"home\"></ion-icon>\n    <ion-label style=\"color: grey; font-weight: 800; display: flex;\">RATING</ion-label>\n  </ion-item>\n</ion-toolbar>\n<ion-content>\n  <div id=\"productCard\" class=\"ion-no-padding\">\n    <div class=\"imgwrap\">\n      <img [src]=\"gotit.src\" />\n    </div>\n    <ion-card-content>\n\n      <ion-item lines=\"none\">\n        <ion-label class=\"productTitle ion-no-margin\">\n          {{ gotit.product }} <br /><span>{{ gotit.category }}</span>\n        </ion-label>\n        <ion-label slot=\"end\">\n          <ion-icon name=\"star\"></ion-icon>{{ gotit.rating }}\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>\n          Ingridients: &nbsp; <span>Aloe Vera</span>\n        </ion-label>\n      </ion-item>\n\n      <div class=\"chipWrap\" style=\"margin-top: 1rem;\">\n        <div class=\"fortext\">\n          <div class=\"progWrap\">\n            <div class=\"current\">{{ gotit.global }}</div>\n            <round-progress [color]=\"'#015557'\" [background]=\"'#ECF1FF'\" [current]=\"gotit.global\" [max]=\"5\"\n              [radius]=\"125\" [stroke]=\"20\" [rounded]=\"true\" [clockwise]=\"false\" [responsive]=\"false\" [duration]=\"800\"\n              [animation]=\"'easeInOutQuart'\" [animationDelay]=\"0\">\n            </round-progress>\n          </div>\n          <h5 style=\"text-align: center;\">\n            Global<br />Index\n          </h5>\n        </div>\n        <div class=\"fortext\">\n          <div class=\"progWrap\">\n            <div class=\"current\">{{ gotit.global }}</div>\n            <round-progress [color]=\"'#015557'\" [background]=\"'#ECF1FF'\" [current]=\"gotit.local\" [max]=\"5\"\n              [radius]=\"125\" [stroke]=\"20\" [rounded]=\"true\" [clockwise]=\"false\" [responsive]=\"false\" [duration]=\"800\"\n              [animation]=\"'easeInOutQuart'\" [animationDelay]=\"0\">\n            </round-progress>\n          </div>\n          <h5 style=\"text-align: center;\">\n            Local<br />Index\n          </h5>\n        </div>\n        <div class=\"fortext\">\n          <div class=\"progWrap\">\n            <div class=\"current\">{{ gotit.lifestyle }}</div>\n            <round-progress [color]=\"'#015557'\" [background]=\"'#ECF1FF'\" [current]=\"gotit.lifestyle\" [max]=\"5\"\n              [radius]=\"125\" [stroke]=\"20\" [rounded]=\"true\" [clockwise]=\"false\" [responsive]=\"false\" [duration]=\"800\"\n              [animation]=\"'easeInOutQuart'\" [animationDelay]=\"0\">\n            </round-progress>\n          </div>\n          <h6 style=\"text-align: center;\">\n            Your Lifestyle<br />Rate\n          </h6>\n        </div>\n      </div>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"rating\">\n            <div>\n              <h1>{{gotit.rating}}<span> / 5</span></h1>\n              <ion-item lines=\"none\">\n                <ion-icon [name]=\"star1\"></ion-icon>\n                <ion-icon [name]=\"star2\"></ion-icon>\n                <ion-icon [name]=\"star3\"></ion-icon>\n                <ion-icon [name]=\"star4\"></ion-icon>\n                <ion-icon [name]=\"star5\"></ion-icon>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class=\"wrap\">\n              <div class=\"prog\">\n                <p style=\"padding-right: 10px;\">5 star</p>\n                <ion-progress-bar [value]=\"gotit.percent[0].star5\"></ion-progress-bar>\n              </div>\n\n              <div class=\"prog\">\n                <p style=\"padding-right: 10px;\">4 star</p>\n                <ion-progress-bar [value]=\"gotit.percent[1].star4\"></ion-progress-bar>\n              </div>\n\n              <div class=\"prog\">\n                <p style=\"padding-right: 10px;\">3 star</p>\n                <ion-progress-bar [value]=\"gotit.percent[2].star3\"></ion-progress-bar>\n              </div>\n\n              <div class=\"prog\">\n                <p style=\"padding-right: 10px;\">2 star</p>\n                <ion-progress-bar [value]=\"gotit.percent[3].star2\"></ion-progress-bar>\n              </div>\n\n              <div class=\"prog\">\n                <p style=\"padding-right: 10px;\">1 star</p>\n                <ion-progress-bar [value]=\"gotit.percent[4].star1\"></ion-progress-bar>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map