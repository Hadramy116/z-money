webpackJsonp([4],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationPageModule", function() { return ValidationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validation__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ValidationPageModule = (function () {
    function ValidationPageModule() {
    }
    return ValidationPageModule;
}());
ValidationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__validation__["a" /* ValidationPage */],
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__validation__["a" /* ValidationPage */]
        ]
    })
], ValidationPageModule);

//# sourceMappingURL=validation.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ValidationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ValidationPage = (function () {
    function ValidationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ValidationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ValidationPage');
    };
    return ValidationPage;
}());
ValidationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-validation',template:/*ion-inline-start:"C:\Users\mima\Desktop\m\Z-transfert\src\pages\validation\validation.html"*/'<!--\n  Generated template for the ValidationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>validation</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card>\n        <ion-card-header>\n          Transaction  info\n        </ion-card-header>\n      \n        <ion-list>\n            <ion-item>\n              <ion-label color="primary">Num CmptD</ion-label>\n              <ion-label >0035</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label color="primary"> description d\'argent</ion-label>\n              <ion-label >Sidi vers Ali</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label color="primary">Montant</ion-label>\n                <ion-label >20000 Un</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card>\n          <ion-card>\n              <ion-card-header>\n               Saisir Validation info\n              </ion-card-header>\n            <ion-list>\n                <ion-item>\n                  <ion-label color="primary">INN </ion-label>\n                  <ion-input placeholder="INN de destinataire"></ion-input>\n                </ion-item>\n                   <ion-item>\n                <button ion-button round (click)="presentAlert()">Valider</button>\n            </ion-item>\n                </ion-list>\n            \n\n         \n      </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\mima\Desktop\m\Z-transfert\src\pages\validation\validation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ValidationPage);

//# sourceMappingURL=validation.js.map

/***/ })

});
//# sourceMappingURL=4.js.map