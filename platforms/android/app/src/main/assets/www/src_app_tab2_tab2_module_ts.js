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
            { productId: '1', product: 'iphone 13', category: 'Mobile', rating: 4, src: '../../assets/images/iphone-13.jpg', global: 3.5, local: 2.5, lifestyle: 4, percent: [{ star5: 0.84 }, { star4: 0.15 }, { star3: 0.5 }, { star2: 0.18 }, { star1: 0.1 }] },
            { productId: '2', product: 'Panasonic Oven', category: 'Electronics', rating: 2, src: '../../assets/images/oven.jpg', global: 2.5, local: 3, lifestyle: 2, percent: [{ star5: 0.66 }, { star4: 0.35 }, { star3: 0.25 }, { star2: 0.28 }, { star1: 0.5 }] },
            { productId: '3', product: 'Vittara Brezza', category: 'Automobile', rating: 3, src: '../../assets/images/vittara.jpg', global: 3, local: 4, lifestyle: 3, percent: [{ star5: 0.74 }, { star4: 0.45 }, { star3: 0.25 }, { star2: 0.38 }, { star1: 0.26 }] },
            { productId: '4', product: 'Nestle Maggi', category: 'Food', rating: 2.5, src: '../../assets/images/maggi.png', global: 2, local: 2.5, lifestyle: 3.5, percent: [{ star5: 0.58 }, { star4: 0.63 }, { star3: 0.57 }, { star2: 0.58 }, { star1: 0.35 }] },
            { productId: '5', product: 'LG washing Machine', category: 'Home Appliance', rating: 3.5, src: '../../assets/images/washing.jpg', global: 4, local: 3.5, lifestyle: 4.5, percent: [{ star5: 0.12 }, { star4: 0.42 }, { star3: 0.63 }, { star2: 0.41 }, { star1: 0.96 }] },
            { productId: '6', product: 'Sofa', category: 'Furniture', rating: 4.5, src: '../../assets/images/sofa.jpg', global: 4, local: 2.5, lifestyle: 4, percent: [{ star5: 0.80 }, { star4: 0.30 }, { star3: 0.45 }, { star2: 0.12 }, { star1: 0.08 }] },
            { productId: '7', product: 'Pedigree', category: 'Pet Food', rating: 5, src: '../../assets/images/pedigree.jpg', global: 3, local: 2, lifestyle: 3.5, percent: [{ star5: 0.80 }, { star4: 0.30 }, { star3: 0.45 }, { star2: 0.12 }, { star1: 0.08 }] },
            { productId: '8', product: 'Tshirt', category: 'Clothes', rating: 3.5, src: '../../assets/images/tshirt.jpeg', global: 3, local: 2, lifestyle: 3.5, percent: [{ star5: 0.80 }, { star4: 0.30 }, { star3: 0.45 }, { star2: 0.12 }, { star1: 0.08 }] }
        ];
        this.clicked();
    }
    ngOnInit() {
    }
    segmentChanged(ev) {
        this.segment = ev.value;
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

module.exports = "#productCard {\n  border-radius: 1rem;\n  background: #fff;\n}\n\nion-progress-bar {\n  height: 6px;\n  border-radius: 20px;\n  --background: #fff;\n  --progress-background: #015557;\n}\n\n.wrap p {\n  white-space: nowrap;\n  text-align: right;\n}\n\n.prog {\n  display: flex;\n  align-items: center;\n}\n\n.rating {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.rating ion-item {\n  --background: transparent;\n}\n\n#productCard ion-icon {\n  font-size: 16px;\n  padding: 0 3px;\n  color: #0c853c;\n}\n\n#productCard ion-item {\n  --padding-start: 0px;\n}\n\n.chipWrap {\n  margin: 10px 0 15px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nround-progress {\n  height: 60px !important;\n  width: 60px !important;\n  margin: 6px 6px;\n}\n\n.progressBar {\n  height: 80px !important;\n  width: 80px !important;\n  margin: 6px 6px;\n}\n\n.progWrap {\n  position: relative;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.current {\n  top: 50%;\n  bottom: auto;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  position: absolute;\n  color: #000;\n  font-weight: 100;\n  line-height: 1;\n}\n\n.progress-outer {\n  width: 10rem;\n}\n\n.productTitle {\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.35;\n}\n\nspan {\n  color: rgb(115, 115, 115);\n  font-weight: 500;\n  font-size: 14px;\n}\n\nh6 {\n  font-size: 13px;\n  font-weight: 500;\n}\n\nion-grid {\n  border-radius: 1rem;\n  padding: 12px;\n  background: #f2f6f6;\n  margin-top: 2rem;\n}\n\n.imgwrap {\n  position: relative;\n  height: 300px;\n  width: 100%;\n}\n\n.imgwrap img {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  margin: auto;\n  max-width: 100%;\n  max-height: 100%;\n  padding-left: 20px;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vQXBwX1VpLW1hc3RlciUyMDIvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBRUEsY0FBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FERUE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0VGOztBREFBO0VBQ0UsUUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QUREQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSUY7O0FEREE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0lGIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2R1Y3RDYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogIzAxNTU1Nztcbn1cblxuLndyYXAgcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucHJvZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJhdGluZyBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbiNwcm9kdWN0Q2FyZCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAzcHg7XG4gIC8vIGNvbG9yOiAjZmU5ZjE3O1xuICBjb2xvcjogIzBjODUzYztcbn1cblxuI3Byb2R1Y3RDYXJkIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbi5jaGlwV3JhcCB7XG4gIG1hcmdpbjogMTBweCAwIDE1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5yb3VuZC1wcm9ncmVzcyB7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDZweCA2cHg7XG59XG4ucHJvZ3Jlc3NCYXJ7XG4gICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDZweCA2cHg7IFxufVxuLnByb2dXcmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jdXJyZW50IHtcbiAgdG9wOiA1MCU7XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4ucHJvZ3Jlc3Mtb3V0ZXIge1xuICB3aWR0aDogMTByZW07XG59XG5cbi5wcm9kdWN0VGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHJnYigxMTUsIDExNSwgMTE1KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLWdyaWQge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmNmY2O1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uaW1nd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWd3cmFwIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuIiwiI3Byb2R1Y3RDYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW9uLXByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogIzAxNTU1Nztcbn1cblxuLndyYXAgcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucHJvZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJhdGluZyBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbiNwcm9kdWN0Q2FyZCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAzcHg7XG4gIGNvbG9yOiAjMGM4NTNjO1xufVxuXG4jcHJvZHVjdENhcmQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuLmNoaXBXcmFwIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbnJvdW5kLXByb2dyZXNzIHtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNnB4IDZweDtcbn1cblxuLnByb2dyZXNzQmFyIHtcbiAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNnB4IDZweDtcbn1cblxuLnByb2dXcmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmN1cnJlbnQge1xuICB0b3A6IDUwJTtcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLnByb2dyZXNzLW91dGVyIHtcbiAgd2lkdGg6IDEwcmVtO1xufVxuXG4ucHJvZHVjdFRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMS4zNTtcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiByZ2IoMTE1LCAxMTUsIDExNSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogI2YyZjZmNjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmltZ3dyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nd3JhcCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn0iXX0= */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\n  <ion-item lines=\"none\">\n    <ion-icon slot=\"end\" name=\"home\"></ion-icon>\n    <ion-label style=\"color: grey; font-weight: 800; display: flex\"\n      >RATING</ion-label\n    >\n  </ion-item>\n</ion-toolbar>\n<ion-content>\n  <div id=\"productCard\" class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col\n        ><div class=\"imgwrap\">\n          <img [src]=\"gotit.src\" />\n        </div>\n      </ion-col>\n      <ion-col style=\"margin-top: 5rem; padding-left: 20px; font-size: 2rem\">\n        <div class=\"fortext\">\n          <div class=\"progWrap\">\n            <div class=\"current\">&nbsp;7 <span> /10</span>&nbsp;</div>\n            <round-progress\n              class=\"progressBar\"\n              [color]=\"'#015557'\"\n              [background]=\"'#ECF1FF'\"\n              [current]=\"7\"\n              [max]=\"9\"\n              [radius]=\"145\"\n              [stroke]=\"20\"\n              [rounded]=\"true\"\n              [clockwise]=\"false\"\n              [responsive]=\"false\"\n              [duration]=\"1000\"\n              [animation]=\"'easeInOutQuart'\"\n              [animationDelay]=\"0\"\n            >\n            </round-progress>\n          </div>\n          <!-- <h5 style=\"text-align: center\">Local<br />Index</h5> -->\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-label class=\"productTitle ion-no-margin\">\n          {{ gotit.product }} <br /><span>{{ gotit.category }}</span>\n        </ion-label>\n        <ion-label slot=\"end\">\n          <ion-icon name=\"star\"></ion-icon>{{ gotit.rating }}\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label> Ingridients: &nbsp; <span>Aloe Vera</span> </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>\n          MarketPlace: &nbsp;\n          <span>\n            <a href=\"https://www.dmartindia.com/\" target=\"_blank\"> D - mart</a>\n          </span>\n        </ion-label>\n      </ion-item>\n\n      <ion-segment\n        (ionChange)=\"segmentChanged($event)\"\n        value=\"Friends\"\n        style=\"margin-bottom: 2rem\">\n        <ion-segment-button value=\"Friends\">\n          <ion-label>Indices</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"2\">\n          <ion-label>Nudges</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"3\">\n          <ion-label>Reporting</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <div class=\"chipWrap\" style=\"margin-top: 1rem\">\n        <div class=\"fortext\">\n          <div class=\"progWrap\">\n            <div class=\"current\">{{ gotit.global }}</div>\n            <round-progress\n              [color]=\"'#015557'\"\n              [background]=\"'#ECF1FF'\"\n              [current]=\"gotit.global\"\n              [max]=\"5\"\n              [radius]=\"125\"\n              [stroke]=\"20\"\n              [rounded]=\"true\"\n              [clockwise]=\"false\"\n              [responsive]=\"false\"\n              [duration]=\"800\"\n              [animation]=\"'easeInOutQuart'\"\n              [animationDelay]=\"0\"\n            >\n            </round-progress>\n          </div>\n          <h5 style=\"text-align: center\">Global<br />Index</h5>\n        </div>\n        <div class=\"fortext\">\n          <div class=\"progWrap\">\n            <div class=\"current\">{{ gotit.global }}</div>\n            <round-progress\n              [color]=\"'#015557'\"\n              [background]=\"'#ECF1FF'\"\n              [current]=\"gotit.local\"\n              [max]=\"5\"\n              [radius]=\"125\"\n              [stroke]=\"20\"\n              [rounded]=\"true\"\n              [clockwise]=\"false\"\n              [responsive]=\"false\"\n              [duration]=\"800\"\n              [animation]=\"'easeInOutQuart'\"\n              [animationDelay]=\"0\"\n            >\n            </round-progress>\n          </div>\n          <h5 style=\"text-align: center\">Local<br />Index</h5>\n        </div>\n        <div class=\"fortext\">\n          <div class=\"progWrap\">\n            <div class=\"current\">{{ gotit.lifestyle }}</div>\n            <round-progress\n              [color]=\"'#015557'\"\n              [background]=\"'#ECF1FF'\"\n              [current]=\"gotit.lifestyle\"\n              [max]=\"5\"\n              [radius]=\"125\"\n              [stroke]=\"20\"\n              [rounded]=\"true\"\n              [clockwise]=\"false\"\n              [responsive]=\"false\"\n              [duration]=\"800\"\n              [animation]=\"'easeInOutQuart'\"\n              [animationDelay]=\"0\"\n            >\n            </round-progress>\n          </div>\n          <h6 style=\"text-align: center\">Your Lifestyle<br />Rate</h6>\n        </div>\n      </div>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"rating\">\n            <div>\n              <h1>{{gotit.rating}}<span> / 5</span></h1>\n              <ion-item lines=\"none\">\n                <ion-icon [name]=\"star1\"></ion-icon>\n                <ion-icon [name]=\"star2\"></ion-icon>\n                <ion-icon [name]=\"star3\"></ion-icon>\n                <ion-icon [name]=\"star4\"></ion-icon>\n                <ion-icon [name]=\"star5\"></ion-icon>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class=\"wrap\">\n              <div class=\"prog\">\n                <p style=\"padding-right: 10px\">5 star</p>\n                <ion-progress-bar\n                  [value]=\"gotit.percent[0].star5\"\n                ></ion-progress-bar>\n              </div>\n\n              <div class=\"prog\">\n                <p style=\"padding-right: 10px\">4 star</p>\n                <ion-progress-bar\n                  [value]=\"gotit.percent[1].star4\"\n                ></ion-progress-bar>\n              </div>\n\n              <div class=\"prog\">\n                <p style=\"padding-right: 10px\">3 star</p>\n                <ion-progress-bar\n                  [value]=\"gotit.percent[2].star3\"\n                ></ion-progress-bar>\n              </div>\n\n              <div class=\"prog\">\n                <p style=\"padding-right: 10px\">2 star</p>\n                <ion-progress-bar\n                  [value]=\"gotit.percent[3].star2\"\n                ></ion-progress-bar>\n              </div>\n\n              <div class=\"prog\">\n                <p style=\"padding-right: 10px\">1 star</p>\n                <ion-progress-bar\n                  [value]=\"gotit.percent[4].star1\"\n                ></ion-progress-bar>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map