"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_chat_chat_module_ts"],{

/***/ 4761:
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageRoutingModule": () => (/* binding */ ChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page */ 4099);




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_0__.ChatPage
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ 818:
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageModule": () => (/* binding */ ChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-routing.module */ 4761);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page */ 4099);







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPageRoutingModule
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage]
    })
], ChatPageModule);



/***/ }),

/***/ 4099:
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPage": () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page.html?ngResource */ 9910);
/* harmony import */ var _chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page.scss?ngResource */ 6232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ChatPage = class ChatPage {
    constructor() { }
    ngOnInit() {
        this.messages = [
            {
                isSender: false,
                avatar: 'assets/img/avatars/10.jpg',
                type: 'text',
                body: 'Hey I\'m John here. Happy to help!? ',
                timestamp: 'July 18, 2022 9:48 AM'
            },
            {
                isSender: true,
                type: 'text',
                body: 'I need  to know about the Nugets?',
                timestamp: 'July 18, 2022 9:50 AM'
            },
            {
                isSender: false,
                avatar: 'assets/img/avatars/10.jpg',
                type: 'text',
                body: 'You Need any help',
                timestamp: 'July 18, 2022 9:52 AM'
            },
            {
                isSender: true,
                type: 'text',
                body: 'Where are you, buddy?',
                timestamp: 'July 18, 2022 9:53 AM'
            },
            {
                isSender: false,
                avatar: 'assets/img/avatars/10.jpg',
                type: 'text',
                body: 'I\'m almost there',
                timestamp: 'July 18, 2022 9:53 AM'
            }
        ];
    }
    toggleFocus(isFocus) {
        this.isFocus = isFocus;
    }
    nl2br(text) {
        if (!text)
            return text;
        return text.replace(/\n/ig, '<br>');
    }
};
ChatPage.ctorParameters = () => [];
ChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-chat',
        template: _chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatPage);



/***/ }),

/***/ 6232:
/*!************************************************!*\
  !*** ./src/app/chat/chat.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/* Chat UI v2.1.0 by Hieu Pham<mr_hie@yahoo.com> */\n.chat-list .chat-item {\n  margin-bottom: 8px;\n}\n.chat-list .chat-item.chat-item-sender {\n  text-align: right;\n}\n.chat-list .chat-item.chat-item-sender .chat-item-content {\n  justify-content: flex-end;\n}\n.chat-list .chat-item.chat-item-sender .chat-body {\n  color: #fff;\n  background: var(--ion-color-primary);\n  border-radius: 20px;\n  border-color: transparent;\n}\n.chat-list .chat-timestamp {\n  text-align: center;\n  font-size: 13px;\n  padding: 8px;\n  color: var(--ion-color-medium);\n  text-transform: uppercase;\n}\n.chat-list .chat-item-status {\n  font-size: 13px;\n  color: var(--ion-color-medium);\n  margin-right: 8px;\n}\n.chat-list .chat-item-content {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 4px;\n}\n.chat-list .chat-item-content .chat-avatar {\n  margin-right: 8px;\n  align-self: flex-end;\n}\n.chat-list .chat-item-content .chat-avatar img {\n  display: inline-block;\n  width: 100%;\n  border-radius: 50%;\n}\n.chat-list .chat-item-bubble {\n  position: relative;\n  max-width: 75%;\n}\n.chat-list .chat-item-bubble .chat-body {\n  display: inline-block;\n  background: var(--ion-color-light);\n  border-radius: 20px;\n  padding: 12px 16px;\n  white-space: normal;\n  max-width: 100%;\n  text-align: left;\n}\n.chat-list .chat-item-bubble.bubble-image {\n  font-size: 0;\n}\n.chat-list .chat-item-bubble.bubble-image img {\n  width: 100%;\n  max-width: 480px;\n  border-radius: 16px;\n}\n.chat-list .chat-item-reaction {\n  text-align: left;\n  margin-left: 8px;\n  font-size: 18px;\n  align-self: center;\n  flex-grow: 99;\n}\n.message-input {\n  --background: var(--ion-color-light);\n  --padding-start: 12px;\n  --padding-end: 12px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXR1aS5zY3NzIiwiLi4vLi4vLi4vLi4vQXBwX1VpLW1hc3RlciUyMDIvc3JjL2FwcC9jaGF0L2NoYXQucGFnZS5zY3NzIiwiY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0RBQUE7QUFHRTtFQUNFLGtCQUFBO0FDREo7QURHSTtFQUNFLGlCQUFBO0FDRE47QURHTTtFQUNFLHlCQUFBO0FDRFI7QURJTTtFQUNFLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNGUjtBRE9FO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUNMSjtBRFFFO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNOSjtBRFNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFNJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ1BOO0FEU007RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1BSO0FEWUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNWSjtBRFlJO0VBQ0UscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1ZOO0FEYUk7RUFDRSxZQUFBO0FDWE47QURhTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDWFI7QURnQkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ2RKO0FDbkVBO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QURzRUYiLCJmaWxlIjoiY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDaGF0IFVJIHYyLjEuMCBieSBIaWV1IFBoYW08bXJfaGllQHlhaG9vLmNvbT4gKi9cblxuLmNoYXQtbGlzdCB7XG4gIC5jaGF0LWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICYuY2hhdC1pdGVtLXNlbmRlciB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgLmNoYXQtaXRlbS1jb250ZW50IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgLmNoYXQtYm9keSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNoYXQtdGltZXN0YW1wIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIC5jaGF0LWl0ZW0tc3RhdHVzIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5cbiAgLmNoYXQtaXRlbS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuXG4gICAgLmNoYXQtYXZhdGFyIHtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2hhdC1pdGVtLWJ1YmJsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogNzUlO1xuXG4gICAgLmNoYXQtYm9keSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgICYuYnViYmxlLWltYWdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNoYXQtaXRlbS1yZWFjdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZmxleC1ncm93OiA5OTtcbiAgfVxufVxuIiwiLyogQ2hhdCBVSSB2Mi4xLjAgYnkgSGlldSBQaGFtPG1yX2hpZUB5YWhvby5jb20+ICovXG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0uY2hhdC1pdGVtLXNlbmRlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLmNoYXQtaXRlbS1zZW5kZXIgLmNoYXQtaXRlbS1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS5jaGF0LWl0ZW0tc2VuZGVyIC5jaGF0LWJvZHkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmNoYXQtbGlzdCAuY2hhdC10aW1lc3RhbXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tY29udGVudCAuY2hhdC1hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tY29udGVudCAuY2hhdC1hdmF0YXIgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA3NSU7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tYnViYmxlIC5jaGF0LWJvZHkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNoYXQtbGlzdCAuY2hhdC1pdGVtLWJ1YmJsZS5idWJibGUtaW1hZ2Uge1xuICBmb250LXNpemU6IDA7XG59XG4uY2hhdC1saXN0IC5jaGF0LWl0ZW0tYnViYmxlLmJ1YmJsZS1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi5jaGF0LWxpc3QgLmNoYXQtaXRlbS1yZWFjdGlvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmbGV4LWdyb3c6IDk5O1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufSIsIkBpbXBvcnQgJy4vY2hhdHVpLnNjc3MnO1xuXG4ubWVzc2FnZS1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuIl19 */";

/***/ }),

/***/ 9910:
/*!************************************************!*\
  !*** ./src/app/chat/chat.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/tab1\"></ion-back-button>\n      <ion-avatar class=\"avatar-sm ion-margin-start\" style=\"width: 40px; height:40px;\">\n        <img src=\"assets/img/avatars/10.jpg\" alt=\"\">\n      </ion-avatar>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-left\">Scarlet Witch</ion-title>\n\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"videocam\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"chat-list\">\n    <div class=\"chat-item\" *ngFor=\"let item of messages\" [ngClass]=\"{'chat-item-sender': item.isSender}\">\n      <div class=\"chat-timestamp\">\n        {{item.timestamp}}\n      </div>\n\n      <div class=\"chat-item-content\">\n        <div class=\"chat-avatar\" *ngIf=\"!item.isSender\" >\n          <ion-avatar class=\"avatar-sm\" style=\"width: 50px; height:50px\"  >\n            <img [src]=\"item.avatar\" >\n          </ion-avatar>\n        </div>\n\n        <div class=\"chat-item-bubble\" [ngClass]=\"{'bubble-image': item.type === 'image'}\">\n          <div class=\"chat-body\" *ngIf=\"item.type !== 'image'\" [innerHtml]=\"nl2br(item.body)\"></div>\n          <img [src]=\"item.body\" *ngIf=\"item.type === 'image'\">\n        </div>\n\n        <div class=\"chat-item-reaction\" *ngIf=\"!item.isSender && item.type === 'image'\">\n          <ion-icon name=\"share-outline\"></ion-icon>\n        </div>\n      </div>\n\n      <div class=\"chat-item-status\" *ngIf=\"item.isSender\">\n        Seen\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"!isFocus\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"image\"></ion-icon>\n      </ion-button>\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"mic\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"start\" *ngIf=\"isFocus\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"chevron-forward\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-input\n      class=\"message-input\"\n      placeholder=\"Aa\"\n      [(ngModel)]=\"messageInput\"\n      (ionFocus)=\"toggleFocus(true)\"\n      (ionBlur)=\"toggleFocus(false)\">\n    </ion-input>\n\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"thumbs-up-sharp\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_chat_chat_module_ts.js.map