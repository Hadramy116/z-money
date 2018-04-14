webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransfertListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_transfert_service_mock__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transfert_detail_transfert_detail__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TransfertListPage = (function () {
    function TransfertListPage(navCtrl, service, config) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.searchKey = "";
        this.viewMode = "list";
        this.findAll();
    }
    TransfertListPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__transfert_detail_transfert_detail__["a" /* TransfertDetailPage */], property);
    };
    TransfertListPage.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.transfers = data;
            if (_this.viewMode === "map") {
                _this.showMarkers();
            }
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    TransfertListPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    TransfertListPage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.transfers = data; })
            .catch(function (error) { return alert(error); });
    };
    TransfertListPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map").setView([42.361132, -71.070876], 14);
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(_this.map);
            _this.showMarkers();
        });
    };
    TransfertListPage.prototype.showMarkers = function () {
        var _this = this;
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.layerGroup([]);
        this.transfers.forEach(function (property) {
            if (property.lat, property.long) {
                var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([property.lat, property.long]).on('click', function (event) { return _this.openPropertyDetail(event.target.data); });
                marker.data = property;
                _this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    };
    return TransfertListPage;
}());
TransfertListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-transfert-list',template:/*ion-inline-start:"C:\Users\pc\Desktop\z-transfer\src\pages\transfert-list\transfert-list.html"*/'<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="transfer-list">\n\n    <ion-list *ngIf="viewMode===\'list\'">\n\n        <ion-item-sliding *ngFor="let transfer of transfers">\n            <button ion-item (click)="openPropertyDetail(transfer)">\n                <ion-thumbnail item-left>\n                    <img src="{{transfer.thumbnail}}"/>\n                </ion-thumbnail>\n                <h2>{{transfer.title}}</h2>\n                <p>{{transfer.city}}, {{transfer.state}} ∙ {{ transfer.price }}</p>\n            </button>\n            <ion-item-options>\n                <button danger (click)="deleteItem(transfer)">Delete</button>\n            </ion-item-options>\n        </ion-item-sliding>\n\n    </ion-list>\n\n    <div *ngIf="viewMode===\'map\'" style="width:100%;height:100%;" id="map"></div>\n\n</ion-content>\n\n<ion-footer padding>\n    <ion-segment [(ngModel)]="viewMode">\n        <ion-segment-button value="list">\n            <ion-icon name="list"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="map" (ionSelect)="showMap()">\n            <ion-icon name="map"></ion-icon>\n        </ion-segment-button>\n    </ion-segment>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\pc\Desktop\z-transfer\src\pages\transfert-list\transfert-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_transfert_service_mock__["a" /* TransfertService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
], TransfertListPage);

//# sourceMappingURL=transfert-list.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransfertDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transfert_service_mock__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransfertDetailPage = (function () {
    function TransfertDetailPage(actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.property = this.navParams.data;
        propertyService.findById(this.property.id).then(function (property) { return _this.property = property; });
    }
    TransfertDetailPage.prototype.favorite = function (property) {
        var _this = this;
        this.propertyService.favorite(property)
            .then(function (property) {
            var toast = _this.toastCtrl.create({
                message: 'Property added to your favorites',
                cssClass: 'mytoast',
                duration: 1000
            });
            toast.present(toast);
        });
    };
    TransfertDetailPage.prototype.share = function (property) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: function () { return console.log('share via twitter'); }
                },
                {
                    text: 'Facebook',
                    handler: function () { return console.log('share via facebook'); }
                },
                {
                    text: 'Email',
                    handler: function () { return console.log('share via email'); }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { return console.log('cancel share'); }
                }
            ]
        });
        actionSheet.present();
    };
    return TransfertDetailPage;
}());
TransfertDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-transfert-detail',template:/*ion-inline-start:"C:\Users\pc\Desktop\z-transfer\src\pages\transfert-detail\transfert-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Transfert</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf="property.id">\n        <ion-card-content>\n            <h2 class="card-title">{{property.title}}</h2>\n            <p>{{property.address}}, {{property.city}} {{property.state}}</p>\n        </ion-card-content>\n        <ion-list>\n\n            <ion-item>\n                <ion-icon item-left name="moon"></ion-icon>\n                <h3>titre</h3>\n                <ion-note item-right>{{property.title}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="leaf"></ion-icon>\n                <h3>city</h3>\n                <ion-note item-right>{{property.city}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="pricetag"></ion-icon>\n                <h3>Montant</h3>\n                <ion-note item-right>{{property.price}}</ion-note>\n            </ion-item>\n        </ion-list>\n\n        <ion-item>\n            <button ion-button icon-left (click)="favorite(property)" clear item-left>\n                <ion-icon name="star"></ion-icon>\n                valide\n            </button>\n          \n        </ion-item>\n\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\z-transfer\src\pages\transfert-detail\transfert-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_transfert_service_mock__["a" /* TransfertService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], TransfertDetailPage);

//# sourceMappingURL=transfert-detail.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfert_list_transfert_list__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomePage = (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__transfert_list_transfert_list__["a" /* TransfertListPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\pc\Desktop\z-transfer\src\pages\welcome\welcome.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Welcome</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n    <ion-slides>\n\n        <ion-slide style="background-image: url(\'assets/img/login.jpg\')">\n            <form >\n                    <ion-item class="item">\n                      <ion-label floating>Email</ion-label>\n                      <ion-input type="email"></ion-input>\n                    </ion-item>\n                    \n                    <ion-item class="item">\n                      <ion-label floating>Password</ion-label>\n                      <ion-input type="password"></ion-input>\n                    </ion-item>      \n                  \n                    <ion-row>\n                      <ion-col text-center>\n                        <button ion-button block color="secondary" (click)="login()">\n                            Connecter\n                        </button>\n                      </ion-col>\n                    </ion-row>\n                  \n                    <ion-row>\n                      <ion-col text-center>\n                        <button ion-button clear color="light" >\n                          Forgot your password?\n                        </button>\n                      </ion-col>\n                    </ion-row>\n                  \n                  </form>\n\n        </ion-slide>\n\n        <ion-slide style="background-image: url(\'assets/img/2.jpg\')">\n            <p>Money Transfert</p>\n        </ion-slide>\n\n        <ion-slide style="background-image: url(\'assets/img/3.jpg\')">\n            <p>En Mauritanie...</p>\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\z-transfer\src\pages\welcome\welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\pc\Desktop\z-transfer\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>About</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    \n\n    <div padding class="about-info">\n\n        <h4>Transfert d\'argant</h4>\n\n        <p>\n            Developper par Mima & Lala\n        </p>\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\z-transfer\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transfert_service_mock__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transfert_detail_transfert_detail__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ValidationListPage = (function () {
    function ValidationListPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.getFavorites();
    }
    ValidationListPage.prototype.itemTapped = function (favorite) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__transfert_detail_transfert_detail__["a" /* TransfertDetailPage */], favorite.property);
    };
    ValidationListPage.prototype.deleteItem = function (favorite) {
        var _this = this;
        this.service.unfavorite(favorite)
            .then(function () {
            _this.getFavorites();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    ValidationListPage.prototype.getFavorites = function () {
        var _this = this;
        this.service.getFavorites()
            .then(function (data) { return _this.favorites = data; });
    };
    return ValidationListPage;
}());
ValidationListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-validation-list',template:/*ion-inline-start:"C:\Users\pc\Desktop\z-transfer\src\pages\validation-list\validation-list.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Tx valide</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item-sliding *ngFor="let favorite of favorites">\n            <button ion-item (click)="itemTapped(favorite)">\n                <ion-thumbnail item-left>\n                    <img src="{{favorite.property.thumbnail}}"/>\n                </ion-thumbnail>\n                <h2>{{favorite.property.title}}</h2>\n                <p>{{favorite.property.city}}, {{favorite.property.state}} ∙ {{favorite.property.price}}</p>\n            </button>\n            <ion-item-options>\n                <button danger (click)="deleteItem(favorite)">Delete</button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\z-transfer\src\pages\validation-list\validation-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_transfert_service_mock__["a" /* TransfertService */]])
], ValidationListPage);

//# sourceMappingURL=validation-list.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
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
 * Generated class for the SendMoneyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SendMoneyPage = (function () {
    function SendMoneyPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    SendMoneyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendMoneyPage');
    };
    SendMoneyPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Envoi',
            subTitle: 'done',
            buttons: ['ok']
        });
        alert.present();
    };
    return SendMoneyPage;
}());
SendMoneyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-send-money',template:/*ion-inline-start:"C:\Users\pc\Desktop\z-transfer\src\pages\send-money\send-money.html"*/'<!--\n  Generated template for the SendMoneyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Envoi d\'argant</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n        <ion-card-header>\n         Saisir tranfert info\n        </ion-card-header>\n      \n        <ion-list>\n            <ion-item>\n              <ion-label>Agence</ion-label>\n              <ion-select [(ngModel)]="gaming">\n                <ion-option value="nes">Atar</ion-option>\n                <ion-option value="n64">lksar</ion-option>\n                <ion-option value="ps">Any</ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label color="primary">Sender</ion-label>\n              <ion-input placeholder="sender name"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color="primary">Receiver</ion-label>\n              <ion-input placeholder="Receiver name"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color="primary">Montant</ion-label>\n              <ion-input placeholder="montant"></ion-input>\n            </ion-item>\n            <ion-item>\n                <button ion-button round (click)="presentAlert()">Envoi</button>\n            </ion-item>\n          </ion-list>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\z-transfer\src\pages\send-money\send-money.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], SendMoneyPage);

//# sourceMappingURL=send-money.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(264);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_transfert_service_mock__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_transfert_list_transfert_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_transfert_detail_transfert_detail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_validation_list_validation_list__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_send_money_send_money__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_transfert_list_transfert_list__["a" /* TransfertListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_transfert_detail_transfert_detail__["a" /* TransfertDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_send_money_send_money__["a" /* SendMoneyPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_validation_list_validation_list__["a" /* ValidationListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_transfert_list_transfert_list__["a" /* TransfertListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_transfert_detail_transfert_detail__["a" /* TransfertDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_send_money_send_money__["a" /* SendMoneyPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_validation_list_validation_list__["a" /* ValidationListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_transfert_service_mock__["a" /* TransfertService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_transfert_list_transfert_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_validation_list_validation_list__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_send_money_send_money__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'List de transaction', component: __WEBPACK_IMPORTED_MODULE_6__pages_transfert_list_transfert_list__["a" /* TransfertListPage */], icon: 'home' },
            { title: 'Transction valide', component: __WEBPACK_IMPORTED_MODULE_7__pages_validation_list_validation_list__["a" /* ValidationListPage */], icon: 'star' },
            { title: 'Envoi', component: __WEBPACK_IMPORTED_MODULE_8__pages_send_money_send_money__["a" /* SendMoneyPage */], icon: 'send' },
        ];
        this.accountMenuItems = [
            { title: 'My Account', component: __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'ios-contact' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'log-out' },
        ];
        this.helpMenuItems = [
            { title: 'Welcome', component: __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'bookmark' },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\pc\Desktop\z-transfer\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n    <img class="menu-logo" src="../assets/img/logo.jpg" />\n\n    <ion-list>\n      <ion-list-header>\n        \n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        Help\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let menuItem of helpMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        Account\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let menuItem of accountMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\pc\Desktop\z-transfer\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var properties = [
    {
        id: 1,
        address: "any",
        city: "Ndb",
        state: "MA",
        zip: "01742",
        price: "$975,000",
        title: "sidi vers ahmed",
        picture: "./assets/img/i-money.jpg",
        thumbnail: "./assets/img/i-money.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 2,
        address: "any",
        city: "Ndb",
        state: "MA",
        zip: "01742",
        price: "$975,000",
        title: "med vers ahmed",
        picture: "./assets/img/i-money.jpg",
        thumbnail: "./assets/img/i-money.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 3,
        address: "any",
        city: "Ndb",
        state: "MA",
        zip: "01742",
        price: "$975,000",
        title: "sidi vers ahmed",
        picture: "./assets/img/i-money.jpg",
        thumbnail: "./assets/img/i-money.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 4,
        address: "any",
        city: "Ndb",
        state: "MA",
        zip: "01742",
        price: "$975,000",
        title: "ksjd vers ahmed",
        picture: "./assets/img/i-money.jpg",
        thumbnail: "./assets/img/i-money.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 5,
        address: "any",
        city: "Ndb",
        state: "MA",
        zip: "01742",
        price: "$975,000",
        title: "sidi vers ahmed",
        picture: "./assets/img/i-money.jpg",
        thumbnail: "./assets/img/i-money.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
    }
];
/* harmony default export */ __webpack_exports__["a"] = (properties);
//# sourceMappingURL=mock-transfert.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransfertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_transfert__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TransfertService = (function () {
    function TransfertService() {
        this.favoriteCounter = 0;
        this.favorites = [];
    }
    TransfertService.prototype.addIhem = function (property) {
        __WEBPACK_IMPORTED_MODULE_1__mock_transfert__["a" /* default */].push(property);
    };
    TransfertService.prototype.findAll = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_transfert__["a" /* default */]);
    };
    TransfertService.prototype.findById = function (id) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_transfert__["a" /* default */][id - 1]);
    };
    TransfertService.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_transfert__["a" /* default */].filter(function (property) {
            return (property.title + ' ' + property.address + ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1;
        }));
    };
    TransfertService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    TransfertService.prototype.favorite = function (property) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({ id: this.favoriteCounter, property: property });
        return Promise.resolve();
    };
    TransfertService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    return TransfertService;
}());
TransfertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
], TransfertService);

//# sourceMappingURL=transfert-service-mock.js.map

/***/ })

},[246]);
//# sourceMappingURL=main.js.map