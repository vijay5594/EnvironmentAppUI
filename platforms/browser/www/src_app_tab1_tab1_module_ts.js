"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 8283);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page],
        providers: [_awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var _Users_admin_Downloads_App_Ui_master_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 8283);








let Tab1Page = class Tab1Page {
  constructor(toastCtrl, loadingCtrl, plt, router, scanner) {
    var _this = this;

    this.toastCtrl = toastCtrl;
    this.loadingCtrl = loadingCtrl;
    this.plt = plt;
    this.router = router;
    this.scanner = scanner;
    this.slideOpts = {
      preloadImages: true,
      slidesPerView: 2.2,
      speed: 500,
      autoplay: true
    };

    this.success = /*#__PURE__*/function () {
      var _ref = (0,_Users_admin_Downloads_App_Ui_master_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message) {
        const toast = yield _this.toastCtrl.create({
          message: message,
          duration: 1500,
          position: 'top',
          color: 'primary',
          cssClass: 'app-update-toast'
        });
        toast.present();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    this.error = /*#__PURE__*/function () {
      var _ref2 = (0,_Users_admin_Downloads_App_Ui_master_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (message) {
        const toast = yield _this.toastCtrl.create({
          message: message,
          duration: 1500,
          position: 'top',
          color: 'danger'
        });
        toast.present();
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.products = [{
      productId: '1',
      product: 'iphone 13',
      category: 'mobile',
      rating: 4,
      src: '../../assets/images/iphone-13.jpg',
      global: 3.5,
      local: 2.5,
      lifestyle: 4,
      percent: [{
        star5: 0.84
      }, {
        star4: 0.15
      }, {
        star3: 0.5
      }, {
        star2: 0.18
      }, {
        star1: 0.1
      }]
    }, {
      productId: '2',
      product: 'Panasonic Oven',
      category: 'Electronics',
      rating: 2,
      src: '../../assets/images/oven.jpg',
      global: 2.5,
      local: 3,
      lifestyle: 2,
      percent: [{
        star5: 0.66
      }, {
        star4: 0.35
      }, {
        star3: 0.25
      }, {
        star2: 0.28
      }, {
        star1: 0.5
      }]
    }, {
      productId: '3',
      product: 'Vittara Brezza',
      category: 'Automobile',
      rating: 3,
      src: '../../assets/images/vittara.jpg',
      global: 3,
      local: 4,
      lifestyle: 3,
      percent: [{
        star5: 0.74
      }, {
        star4: 0.45
      }, {
        star3: 0.25
      }, {
        star2: 0.38
      }, {
        star1: 0.26
      }]
    }, {
      productId: '4',
      product: 'Nestle Maggi',
      category: 'Food',
      rating: 2.5,
      src: '../../assets/images/maggi.png',
      global: 2,
      local: 2.5,
      lifestyle: 3.5,
      percent: [{
        star5: 0.58
      }, {
        star4: 0.63
      }, {
        star3: 0.57
      }, {
        star2: 0.58
      }, {
        star1: 0.35
      }]
    }, {
      productId: '5',
      product: 'LG washing Machine',
      category: 'Home Appliance',
      rating: 3.5,
      src: '../../assets/images/washing.jpg',
      global: 4,
      local: 3.5,
      lifestyle: 4.5,
      percent: [{
        star5: 0.12
      }, {
        star4: 0.42
      }, {
        star3: 0.63
      }, {
        star2: 0.41
      }, {
        star1: 0.96
      }]
    }, {
      productId: '6',
      product: 'Sofa',
      category: 'Furniture',
      rating: 4.5,
      src: '../../assets/images/sofa.jpg',
      global: 4,
      local: 2.5,
      lifestyle: 4,
      percent: [{
        star5: 0.8
      }, {
        star4: 0.3
      }, {
        star3: 0.45
      }, {
        star2: 0.12
      }, {
        star1: 0.08
      }]
    }, {
      productId: '7',
      product: 'Pedigree',
      category: 'Pet Food',
      rating: 1.5,
      src: '../../assets/images/pedigree.jpg',
      global: 3,
      local: 2,
      lifestyle: 3.5,
      percent: [{
        star5: 0.8
      }, {
        star4: 0.3
      }, {
        star3: 0.45
      }, {
        star2: 0.12
      }, {
        star1: 0.08
      }]
    }];
  }

  move(params) {
    console.log(params, 'id');
    localStorage.setItem('productId', params);
    this.router.navigate(['/tabs/tab2']);
  }

  scan() {
    this.scanner.scan().then(barcodeData => {
      console.log(barcodeData, 'barcodedata');

      for (let i = 0; i < this.products.length; i++) {
        if (barcodeData.text == this.products[i].productId) {
          this.move(barcodeData.text);
          return;
        } else if (barcodeData.text != this.products[i].productId) {
          this.error('Product Not Found');
          return;
        }
      }
    }).catch(err => {
      this.error('Whoops! Product Not Found ');
    });
  }

};

Tab1Page.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner
}];

Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-tab1',
  template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab1Page);


/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  border-radius: 1rem;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.slideWrap {\n  position: relative;\n}\n\n.slideWrap h2 {\n  position: absolute;\n  bottom: 10%;\n  color: #fff;\n  left: 40%;\n}\n\n.swiper-slide {\n  border-radius: 10px;\n}\n\n#slides ion-card-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #015557;\n}\n\n#slides ion-card {\n  margin: 6px;\n  padding: 0;\n  border-radius: 1rem;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  background: #f2f6f6;\n}\n\n#slides .imgContainer {\n  width: 170px;\n  position: relative;\n}\n\n#slides .test {\n  width: 200px !important;\n  height: 200px !important;\n}\n\n#slides ion-img {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  margin: auto;\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n\n#slides ion-card-title {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\nion-slides {\n  padding: 0 0 10px 0;\n}\n\nion-slide {\n  width: 100%;\n}\n\nion-img {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.imageContainer {\n  height: 170px;\n  position: relative;\n}\n\n.imageContainer ion-img {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  margin: auto;\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n\n.wrap {\n  display: flex;\n  align-items: center;\n}\n\n.wrap ion-icon {\n  font-size: 16px;\n}\n\nion-chip {\n  margin-left: 0;\n  letter-spacing: 1.5px;\n}\n\nion-toolbar {\n  --min-height: 52px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vQXBwX1VpLW1hc3RlciUyMDIvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxnRkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlGQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7QUNHRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XG59XG5cbi5zbGlkZVdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zbGlkZVdyYXAgaDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgbGVmdDogNDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3NsaWRlcyBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMTU1NTc7XG59XG5cbiNzbGlkZXMgaW9uLWNhcmQge1xuICBtYXJnaW46IDZweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNnB4IDEycHggLTJweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzcHggN3B4IC0zcHg7XG4gIGJhY2tncm91bmQ6ICNmMmY2ZjY7XG59XG5cbiNzbGlkZXMgLmltZ0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jc2xpZGVzIC50ZXN0IHtcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuI3NsaWRlcyBpb24taW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4jc2xpZGVzIGlvbi1jYXJkLXRpdGxlIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1zbGlkZXMge1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xufVxuXG5pb24tc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWltZyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmltYWdlQ29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1hZ2VDb250YWluZXIgaW9uLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLndyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud3JhcCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1jaGlwIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn1cbmlvbi10b29sYmFyIHtcbiAgLS1taW4taGVpZ2h0OiA1MnB4O1xufSIsImlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XG59XG5cbi5zbGlkZVdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zbGlkZVdyYXAgaDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgbGVmdDogNDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3NsaWRlcyBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMTU1NTc7XG59XG5cbiNzbGlkZXMgaW9uLWNhcmQge1xuICBtYXJnaW46IDZweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNnB4IDEycHggLTJweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzcHggN3B4IC0zcHg7XG4gIGJhY2tncm91bmQ6ICNmMmY2ZjY7XG59XG5cbiNzbGlkZXMgLmltZ0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jc2xpZGVzIC50ZXN0IHtcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuI3NsaWRlcyBpb24taW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4jc2xpZGVzIGlvbi1jYXJkLXRpdGxlIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1zbGlkZXMge1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xufVxuXG5pb24tc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWltZyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmltYWdlQ29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1hZ2VDb250YWluZXIgaW9uLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLndyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud3JhcCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLWNoaXAge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tbWluLWhlaWdodDogNTJweDtcbn0iXX0= */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\n    <ion-title style=\"text-align: left; color:#124A3A; font-weight: 800; font-size: 22px;\">Hello !</ion-title>\n    <ion-buttons slot=\"primary\" style=\"color: #75807d;\">\n        <ion-button>\n            <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n        </ion-button>\n        <ion-button>\n            <ion-icon slot=\"icon-only\" name=\"settings-outline\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"scan()\">\n            <ion-icon slot=\"icon-only\" name=\"qr-code\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-toolbar>\n<ion-content class=\"ion-no-padding\">\n    <ion-grid>\n        <ion-list>\n            <ion-list-header style=\"color:#023224;font-weight: 800;\">Keep our Earth green and clean!</ion-list-header>\n            <ion-item lines=\"none\">\n                <ion-label style=\"color:#124A3A;font-weight: 800;\"><b>Top Picks!</b></ion-label>\n            </ion-item>\n        </ion-list>\n        <ion-slides [options]=\"slideOpts\" id=\"slides\">\n            <ion-slide  *ngFor=\"let item of products\">\n                <ion-card (click)=\"move(item.productId)\" style=\"text-align: left;\">\n                    <div class=\"imgContainer\">\n                        <div class=\"test\">\n                            <ion-img [src]=\"item.src\"></ion-img>\n                        </div>\n                    </div>\n                    <ion-card-header>\n                        <ion-card-title>{{ item.product }}</ion-card-title>\n                        <ion-card-subtitle>\n                            <ion-icon name=\"star\" style=\"color:#798959;\"></ion-icon>&nbsp;\n                            <span style=\"color:#696b79;\">{{ item.rating }}</span>\n                        </ion-card-subtitle>\n                    </ion-card-header>\n                </ion-card>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-list id=\"list\">\n            <ion-item style=\"margin: 0;\" lines=\"none\">\n                <h6 style=\"margin: 0; font-weight: 800;\">Products</h6>\n            </ion-item>\n        </ion-list>\n        <ion-row>\n            <ion-col (click)=\"move(item.productId)\" size=\"12\" size-sm=\"4\" *ngFor=\"let item of products\">\n                <ion-card class=\"ion-padding\" style=\"--background: #f2f6f6 ;\">\n                    <ion-row>\n                        <ion-col>\n                            <div class=\"imageContainer\">\n                                <ion-img [src]=\"item.src\" height=\"100%\" width=\"100%\"></ion-img>\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"wrap\">\n                            <ion-card-header>\n                                <ion-card-subtitle style=\"color:#015557; font-weight: 800\">{{ item.category }}\n                                </ion-card-subtitle>\n                                <ion-card-title style=\"color:#015557;font-weight: 800;\">{{ item.product }}<br />\n                                    <ion-chip color=\"warning\">\n                                        <ion-icon name=\"star\"></ion-icon>\n                                        <ion-label>{{ item.rating }}</ion-label>\n                                    </ion-chip>\n                                </ion-card-title>\n                            </ion-card-header>\n                        </ion-col>\n                        <ion-card-content>\n                            <p> One of the motorcycles made in India is\n                                the\n                                TVS\n                                Apache\n                                RTR 200 4V.</p>\n                        </ion-card-content>\n                    </ion-row>\n                </ion-card>\n            </ion-col>\n            <!-- <ion-col size=\"12\" size-sm=\"4\">\n                <ion-card style=\"--background: #f2f6f6 ;\">\n                    <ion-row>\n                        <ion-col class=\"ion-padding\">\n                            <img src=\"../../assets/images/bike.jpeg\" height=\"100%\" width=\"100%\" />\n                        </ion-col>\n                        <ion-col>\n                            <ion-card-header>\n                                <ion-card-subtitle style=\"color:#015557; font-weight: 800\">Washing Machine\n                                </ion-card-subtitle>\n                                <ion-card-title style=\"color:#015557;font-weight: 800;\">Machine\n                                </ion-card-title>\n                            </ion-card-header>\n                            <ion-card-content style=\"color:#404e4e;font-weight: 800;\">\n                                <ion-icon name=\"star\"></ion-icon> &nbsp; . &nbsp;&nbsp;<b>4M</b>&nbsp;rating<br />\n                                <ion-chip color=\"warning\" style=\"margin-top: 1rem;\">\n                                    <ion-label>Review</ion-label>\n                                </ion-chip>\n                            </ion-card-content>\n                        </ion-col>\n                        <p class=\"ion-padding\" style=\"margin-top: -1rem;\"> One of the motorcycles made in India is the\n                            TVS\n                            Apache\n                            RTR 200 4V.</p>\n                    </ion-row>\n                </ion-card>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n                <ion-card style=\"--background: #f2f6f6 ;\">\n                    <ion-row>\n                        <ion-col class=\"ion-padding\">\n                            <img src=\"../../assets/images/bike2.jpg\" height=\"100%\" width=\"100%\" />\n                        </ion-col>\n                        <ion-col>\n                            <ion-card-header>\n                                <ion-card-subtitle style=\"color:#015557; font-weight: 800\">Royal Enfield Continental GT\n                                </ion-card-subtitle>\n                                <ion-card-title style=\"color:#015557;font-weight: 800;\">Bike</ion-card-title>\n                            </ion-card-header>\n                            <ion-card-content style=\"color:#404e4e;font-weight: 800;\">\n                                 <ion-icon name=\"star\"></ion-icon> &nbsp; . &nbsp;&nbsp;<b>4M</b>&nbsp;rating<br />\n                                <ion-chip color=\"warning\" style=\"margin-top: 1rem;\">\n                                    <ion-label>Review</ion-label>\n                                </ion-chip>\n                            </ion-card-content>\n                        </ion-col>\n                        <p class=\"ion-padding\" style=\"margin-top: -1rem;\"> One of the motorcycles made in India is the\n                            TVS\n                            Apache\n                            RTR 200 4V.</p>\n                    </ion-row>\n                </ion-card>\n            </ion-col>\n            <ion-col size=\"12\" size-sm=\"4\">\n                <ion-card style=\"--background: #f2f6f6 ;\">\n                    <ion-row>\n                        <ion-col class=\"ion-padding\">\n                            <img src=\"../../assets/images/car.jpg\" height=\"100%\" width=\"100%\" />\n                        </ion-col>\n                        <ion-col>\n                            <ion-card-header>\n                                <ion-card-subtitle style=\"color:#015557; font-weight: 800\">Royal Enfield Continental GT\n                                </ion-card-subtitle>\n                                <ion-card-title style=\"color:#015557;font-weight: 800;\">Bike</ion-card-title>\n                            </ion-card-header>\n                            <ion-card-content style=\"color:#404e4e;font-weight: 800;\">\n                                 <ion-icon name=\"star\"></ion-icon> &nbsp; . &nbsp;&nbsp;<b>4M</b>&nbsp;rating<br />\n                                <ion-chip color=\"warning\" style=\"margin-top: 1rem;\">\n                                    <ion-label>Review</ion-label>\n                                </ion-chip>\n                            </ion-card-content>\n                        </ion-col>\n                        <p class=\"ion-padding\" style=\"margin-top: -1rem;\"> One of the motorcycles made in India is the\n                            TVS\n                            Apache\n                            RTR 200 4V.</p>\n                    </ion-row>\n                </ion-card>\n            </ion-col> -->\n        </ion-row>\n    </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map