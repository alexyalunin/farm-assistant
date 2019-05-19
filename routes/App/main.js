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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cards_cards_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cards/cards/cards.component */ "./src/app/cards/cards/cards.component.ts");
/* harmony import */ var _cards_cards_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards/cards.module */ "./src/app/cards/cards.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var appRoutes = [
    {
        path: '**',
        component: _cards_cards_cards_component__WEBPACK_IMPORTED_MODULE_4__["CardsComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _cards_cards_module__WEBPACK_IMPORTED_MODULE_5__["CardsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: false
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cards/angular-js.service.ts":
/*!*********************************************!*\
  !*** ./src/app/cards/angular-js.service.ts ***!
  \*********************************************/
/*! exports provided: AngularJsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularJsService", function() { return AngularJsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AngularJsService = /** @class */ (function () {
    function AngularJsService(ngZone) {
        this.ngZone = ngZone;
        this.contractChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.createSharedNamespece();
    }
    AngularJsService.prototype.createSharedNamespece = function () {
        window.my = window.my || {};
        window.my.namespace = window.my.namespace || {};
        window.my.namespace.onContractChange = this.onContractChange.bind(this);
    };
    AngularJsService.prototype.updateOuterBalance = function (response) {
        var commonScope = angular.element(document.getElementById('app-root')).scope();
        commonScope.updateBalanceAfterRechargeWallet(response);
    };
    AngularJsService.prototype.disableLoadingIndicator = function () {
        var commonScope = angular.element(document.getElementById('app-root')).scope();
        commonScope.loaderEnabled = false;
        commonScope.applyOuterChanges();
    };
    AngularJsService.prototype.onContractChange = function (contract) {
        var _this = this;
        this.ngZone.run(function () { return _this.contractChanged.emit(contract); });
    };
    AngularJsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], AngularJsService);
    return AngularJsService;
}());



/***/ }),

/***/ "./src/app/cards/animations.ts":
/*!*************************************!*\
  !*** ./src/app/cards/animations.ts ***!
  \*************************************/
/*! exports provided: ngIfAnimation, accordionEdit, accordionSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngIfAnimation", function() { return ngIfAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accordionEdit", function() { return accordionEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accordionSelect", function() { return accordionSelect; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var ngIfAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('ngIfAnimation', [
//transition(':enter, :leave', [
//  query('@*', animateChild())
//])
]);
var accordionEdit = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('accordionEdit', [
//transition(':enter', [
//  style({ height: '0px', minHeight: '0', overflow: 'hidden' }),
//  animate('500ms', style({ height: '*' }))
//]),
//transition(':leave', [
//  style({ overflow: 'hidden' }),
//  animate('500ms', style({ height: '0px', minHeight: '0', overflow: 'hidden' }))
//])
]);
var accordionSelect = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('accordionSelect', [
//transition(':enter', [
//  style({ height: '0px', minHeight: '0', overflow: 'hidden' }),
//  animate('225ms', style({ height: '*' }))
//]),
//transition(':leave', [
//  style({ overflow: 'hidden' }),
//  animate('225ms', style({ height: '0px', minHeight: '0', overflow: 'hidden' }))
//])
]);


/***/ }),

/***/ "./src/app/cards/card-edit/card-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cards/card-edit/card-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\r\n  width: 100% !important;\r\n}\r\n\r\n.card-inline {\r\n  display: inline-block;\r\n  margin-right: 80px;\r\n}\r\n\r\nmat-form-field input {\r\n  color: rgba(0,0,0,.87) !important;\r\n}\r\n\r\n.owner-name-input {\r\n  width: 250px;\r\n}\r\n\r\n.state-input {\r\n  width: 250px;\r\n}\r\n\r\nbutton.mat-menu-item {\r\n  padding: 0px 31px !important;\r\n}\r\n\r\n.cancel-icon {\r\n  margin-bottom: 5px;\r\n  font-size: 15px;\r\n}\r\n\r\n/*mobile*/\r\n\r\n.mobile-input {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzL2NhcmQtZWRpdC9jYXJkLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQSxTQUFTOztBQUNUO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImNhcmRzL2NhcmQtZWRpdC9jYXJkLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWlubGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogODBweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQgaW5wdXQge1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC44NykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm93bmVyLW5hbWUtaW5wdXQge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLnN0YXRlLWlucHV0IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5tYXQtbWVudS1pdGVtIHtcclxuICBwYWRkaW5nOiAwcHggMzFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FuY2VsLWljb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi8qbW9iaWxlKi9cclxuLm1vYmlsZS1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/cards/card-edit/card-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cards/card-edit/card-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\r\n\r\n  <div @accordionEdit\r\n       class=\"col-md-12 m-t-md m-b-lg row-selected-bg\">\r\n    <ng-container>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   [(ngModel)]=\"card.name\"\r\n                   placeholder=\"Название\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   [(ngModel)]=\"card.pharmacodynamics\"\r\n                   placeholder=\"Основной механизм действия\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   [(ngModel)]=\"card.indications\"\r\n                   placeholder=\"Показания\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   [(ngModel)]=\"card.min_age\"\r\n                   placeholder=\"Минимальный возраст\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   [(ngModel)]=\"card.during_pregnancy\"\r\n                   placeholder=\"Беременность\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   [(ngModel)]=\"card.during_lactation\"\r\n                   placeholder=\"Лактация\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   [(ngModel)]=\"card.during_old_age\"\r\n                   placeholder=\"Пожилой возраст\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   [(ngModel)]=\"card.contraindications\"\r\n                   placeholder=\"Противопоказания\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   [(ngModel)]=\"card.side_effects\"\r\n                   placeholder=\"Побочный эффект\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   [(ngModel)]=\"card.interactions\"\r\n                   placeholder=\"Возможные взаимодействия\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   [(ngModel)]=\"card.dosing\"\r\n                   placeholder=\"Режим дозирования\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   [(ngModel)]=\"card.storage_conditions\"\r\n                   placeholder=\"Правила хранения\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-12\">\r\n          <mat-form-field>\r\n            <input matInput\r\n                   [(ngModel)]=\"card.sales_rules\"\r\n                   placeholder=\"Правила отпуска\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 m-t-sm\">\r\n\r\n          <button (click)=\"saveChanges();\"\r\n                  mat-raised-button\r\n                  color=\"primary\">\r\n            Сохранить\r\n          </button>\r\n\r\n          <button (click)=\"cancelChanges();\"\r\n                  mat-raised-button\r\n                  color=\"basic\"\r\n                  style=\"margin-left:30px;\">\r\n           Отмена\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-container>\r\n  </div>\r\n\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/cards/card-edit/card-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cards/card-edit/card-edit.component.ts ***!
  \********************************************************/
/*! exports provided: CardEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardEditComponent", function() { return CardEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/cards/animations.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_Drugs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Drugs */ "./src/app/cards/models/Drugs.ts");





var CardEditComponent = /** @class */ (function () {
    function CardEditComponent() {
        this.cardEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editingCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    Object.defineProperty(CardEditComponent.prototype, "ownerName", {
        get: function () { return this.cardForm.get('ownerName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardEditComponent.prototype, "status", {
        get: function () { return this.cardForm.get('status'); },
        enumerable: true,
        configurable: true
    });
    CardEditComponent.prototype.ngOnChanges = function (changes) {
        if (changes.cardSource && changes.cardSource.currentValue) {
            this.card = this.cardSource.deepCopy();
        }
    };
    CardEditComponent.prototype.ngOnInit = function () {
        debugger;
        //this.createForm();
    };
    CardEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    //createForm() {
    //  this.cardForm = new FormGroup({
    //    ownerName: new FormControl(this.card.ownerName),
    //    status: new FormControl(this.card.status, [Validators.required])
    //  });
    //}
    //validate(): boolean {
    //  let cardIsValid = this.cardForm.valid;
    //  return cardIsValid;
    //}
    CardEditComponent.prototype.saveChanges = function () {
        debugger;
        this.cardEdited.emit(this.card);
    };
    //saveChanges() {
    //  let isValid = this.validate();
    //  if (isValid) {
    //    this.card.ownerName = this.ownerName.value;
    //    this.card.status = this.status.value;
    //    this.limitComponents.forEach(c => c.saveChanges());
    //    this.cardEdited.emit(this.card);
    //  }
    //  else {
    //    //to show validation messages
    //    this.limitComponents.toArray().forEach(component => {
    //      Object.keys(component.limitForm.controls).forEach(key => {
    //        component.limitForm.get(key).markAsTouched();
    //      });
    //    });
    //  }
    //}
    CardEditComponent.prototype.cancelChanges = function () {
        this.editingCanceled.emit(this.card);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('card'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_Drugs__WEBPACK_IMPORTED_MODULE_4__["Drug"])
    ], CardEditComponent.prototype, "cardSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('disi'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CardEditComponent.prototype, "diseases", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardEditComponent.prototype, "cardEdited", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardEditComponent.prototype, "editingCanceled", void 0);
    CardEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card-edit',
            template: __webpack_require__(/*! ./card-edit.component.html */ "./src/app/cards/card-edit/card-edit.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["accordionEdit"]],
            styles: [__webpack_require__(/*! ./card-edit.component.css */ "./src/app/cards/card-edit/card-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardEditComponent);
    return CardEditComponent;
}());



/***/ }),

/***/ "./src/app/cards/card-row/card-row.component.css":
/*!*******************************************************!*\
  !*** ./src/app/cards/card-row/card-row.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".single-line {\r\n  overflow: hidden;\r\n  white-space: pre;\r\n}\r\n\r\n\r\n.name-col {\r\n  font-size: 15px !important;\r\n  font-weight: 700 !important;\r\n  color: black !important;\r\n  opacity: 0.7 !important;\r\n  padding-left: 20px;\r\n}\r\n\r\n\r\ntd {\r\n  padding-top: 10px !important;\r\n  padding-bottom: 10px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzL2NhcmQtcm93L2NhcmQtcm93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQyIsImZpbGUiOiJjYXJkcy9jYXJkLXJvdy9jYXJkLXJvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS1saW5lIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbn1cclxuXHJcblxyXG4ubmFtZS1jb2wge1xyXG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjcgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/cards/card-row/card-row.component.html":
/*!********************************************************!*\
  !*** ./src/app/cards/card-row/card-row.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\r\n  <td class=\"name-col\">\r\n    {{card.name}}\r\n  </td>\r\n  <td *ngIf=\"cardsService.role=='admin'\"\r\n      style=\"float:right !important; margin-right: 30px !important;\">\r\n    <button *ngIf=\"canEdit(card)\"\r\n            [disabled]=\"card.isEdited\"\r\n            (click)=\"editCard(card); $event.stopPropagation();\"\r\n            mat-raised-button\r\n            matTooltip=\"Изменить\"\r\n            [matTooltipPosition]=\"'after'\"\r\n            class=\"mat-button\"\r\n            color=\"basic\"\r\n            style=\"margin-right:15px;\">\r\n      <!--<i class=\"fa fa-pencil\"></i>--> Изменить\r\n    </button>\r\n\r\n    <button *ngIf=\"canEdit(card)\"\r\n            [disabled]=\"card.isEdited\"\r\n            (click)=\"deleteCard(card); $event.stopPropagation();\"\r\n            mat-raised-button\r\n            matTooltip=\"Удалить\"\r\n            [matTooltipPosition]=\"'after'\"\r\n            color=\"warn\"\r\n            class=\"mat-button\">\r\n      <!--<i class=\"fa fa-pencil\"></i>--> Удалить\r\n    </button>\r\n\r\n  </td>\r\n  <td *ngIf=\"role!=='admin'\">\r\n\r\n  </td>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/cards/card-row/card-row.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cards/card-row/card-row.component.ts ***!
  \******************************************************/
/*! exports provided: CardRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardRowComponent", function() { return CardRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Drugs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Drugs */ "./src/app/cards/models/Drugs.ts");
/* harmony import */ var _cards_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards.service */ "./src/app/cards/cards.service.ts");




var CardRowComponent = /** @class */ (function () {
    function CardRowComponent(cardsService) {
        this.cardsService = cardsService;
        this.cardDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CardRowComponent.prototype.editCard = function (card) {
        card.isEdited = !card.isEdited;
    };
    CardRowComponent.prototype.deleteCard = function (card) {
        this.cardDeleted.emit(card);
    };
    CardRowComponent.prototype.canEdit = function (card) {
        return true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_Drugs__WEBPACK_IMPORTED_MODULE_2__["Drug"])
    ], CardRowComponent.prototype, "card", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardRowComponent.prototype, "cardDeleted", void 0);
    CardRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tr[card-row]',
            template: __webpack_require__(/*! ./card-row.component.html */ "./src/app/cards/card-row/card-row.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./card-row.component.css */ "./src/app/cards/card-row/card-row.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cards_service__WEBPACK_IMPORTED_MODULE_3__["CardsService"]])
    ], CardRowComponent);
    return CardRowComponent;
}());



/***/ }),

/***/ "./src/app/cards/card-selected/card-selected.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/cards/card-selected/card-selected.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-field {\r\n  font-weight: bold;\r\n}\r\n\r\n.data-content {\r\n  padding-left: 60px !important;\r\n  padding-top: 5px !important;\r\n  padding-bottom: 5px !important;\r\n}\r\n\r\n.parent-block {\r\n  margin-top: 20px !important;\r\n  margin-bottom: 30px !important;\r\n}\r\n\r\nth, td {\r\n  cursor: default !important;\r\n}\r\n\r\n.balance {\r\n  font-weight: 400 !important;\r\n  font-size: 18px;\r\n  border-bottom: 2px solid #3f51b5;\r\n  padding-bottom: 3px;\r\n}\r\n\r\n.balance-btn {\r\n  margin-left: 5px;\r\n  margin-bottom: 6px;\r\n  display: inline-block;\r\n  color: white;\r\n  background-color: #3f51b5;\r\n}\r\n\r\n/*mobile*/\r\n\r\n.border-top {\r\n  border-top: 2px solid #3f51b5 !important;\r\n}\r\n\r\n.view-edit-btns {\r\n  margin-top: 8px;\r\n  margin-bottom: 8px;\r\n  margin-left: 12px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzL2NhcmQtc2VsZWN0ZWQvY2FyZC1zZWxlY3RlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUdBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFHQSxTQUFTOztBQUVUO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiY2FyZHMvY2FyZC1zZWxlY3RlZC9jYXJkLXNlbGVjdGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtZmllbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGF0YS1jb250ZW50IHtcclxuICBwYWRkaW5nLWxlZnQ6IDYwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFyZW50LWJsb2NrIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxudGgsIHRkIHtcclxuICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhbGFuY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzZjUxYjU7XHJcbiAgcGFkZGluZy1ib3R0b206IDNweDtcclxufVxyXG5cclxuLmJhbGFuY2UtYnRuIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDZweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbn1cclxuXHJcblxyXG4vKm1vYmlsZSovXHJcblxyXG4uYm9yZGVyLXRvcCB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzZjUxYjUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpZXctZWRpdC1idG5zIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/cards/card-selected/card-selected.component.html":
/*!******************************************************************!*\
  !*** ./src/app/cards/card-selected/card-selected.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\r\n  <div @accordionSelect class=\"parent-block\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 data-content\">\r\n        <span class=\"label-field\">\r\n          Название:\r\n        </span>\r\n        {{viewData.name}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 data-content\">\r\n        <span class=\"label-field\">\r\n          Основной механизм действия:\r\n        </span>\r\n        {{viewData.pharmacodynamics}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 data-content\">\r\n        <span class=\"label-field\">\r\n          Показания:\r\n        </span>\r\n        {{viewData.indications}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 data-content\">\r\n        <span class=\"label-field\">\r\n          Минимальный возраст:\r\n        </span>\r\n        {{viewData.min_age}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 data-content\">\r\n        <span class=\"label-field\">\r\n          Беременность:\r\n        </span>\r\n        {{viewData.during_pregnancy}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 data-content\">\r\n        <span class=\"label-field\">\r\n          Лактация:\r\n        </span>\r\n        {{viewData.during_lactation}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 data-content\">\r\n        <span class=\"label-field\">\r\n          Пожилой возраст:\r\n        </span>\r\n        {{viewData.during_old_age}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 data-content\">\r\n        <span class=\"label-field\">\r\n          Противопоказания:\r\n        </span>\r\n        {{viewData.contraindications}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 data-content\">\r\n        <span class=\"label-field\">\r\n          Побочный эффект:\r\n        </span>\r\n        {{viewData.side_effects}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 data-content\">\r\n        <span class=\"label-field\">\r\n          Возможные взаимодействия:\r\n        </span>\r\n        {{viewData.interactions}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 data-content\">\r\n        <span class=\"label-field\">\r\n          Режим дозирования:\r\n        </span>\r\n        {{viewData.dosing}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 data-content\">\r\n        <span class=\"label-field\">\r\n          Правила хранения:\r\n        </span>\r\n        {{viewData.storage_conditions}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 data-content\">\r\n        <span class=\"label-field\">\r\n          Правила отпуска:\r\n        </span>\r\n        {{viewData.sales_rules}}\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/cards/card-selected/card-selected.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cards/card-selected/card-selected.component.ts ***!
  \****************************************************************/
/*! exports provided: CardSelectedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSelectedComponent", function() { return CardSelectedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/cards/animations.ts");
/* harmony import */ var _models_Drugs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Drugs */ "./src/app/cards/models/Drugs.ts");




var CardSelectedComponent = /** @class */ (function () {
    function CardSelectedComponent() {
    }
    CardSelectedComponent.prototype.ngOnChanges = function (changes) {
        if (changes.card && changes.card.currentValue !== changes.card.previousValue) {
            this.viewData = changes.card.currentValue;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_Drugs__WEBPACK_IMPORTED_MODULE_3__["Drug"])
    ], CardSelectedComponent.prototype, "card", void 0);
    CardSelectedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card-selected',
            template: __webpack_require__(/*! ./card-selected.component.html */ "./src/app/cards/card-selected/card-selected.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["accordionSelect"]],
            styles: [__webpack_require__(/*! ./card-selected.component.css */ "./src/app/cards/card-selected/card-selected.component.css")]
        })
    ], CardSelectedComponent);
    return CardSelectedComponent;
}());



/***/ }),

/***/ "./src/app/cards/card-top-up-balance/card-top-up-balance.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/cards/card-top-up-balance/card-top-up-balance.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy9jYXJkLXRvcC11cC1iYWxhbmNlL2NhcmQtdG9wLXVwLWJhbGFuY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/cards/card-top-up-balance/card-top-up-balance.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/cards/card-top-up-balance/card-top-up-balance.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div @accordionSelect\r\n     class=\"col-md-10 col-lg-offset-1 col-md-offset-2 m-t-md m-b-lg\">\r\n  <h4>Пополнить электронный кошелек</h4>\r\n  <p>\r\n    <span>Укажите сумму в рублях, средства будут списаны с баланса договора</span>\r\n  </p>\r\n\r\n  <div class=\"form-group\">\r\n    <mat-form-field>\r\n      <mat-label>Сумма</mat-label>\r\n      <input matInput\r\n             [formControl]=\"balanceInput\"\r\n             placeholder=\"0.00\"\r\n             type=\"number\"\r\n             required>\r\n      <mat-error *ngIf=\"balanceInput.errors?.required && !balanceInput.errors?.currency\">\r\n        <strong>Заполните поле</strong>\r\n      </mat-error>\r\n      <mat-error *ngIf=\"balanceInput.errors?.currency\">\r\n        <strong>Введите положительное число</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n      <button (click)=\"topUp()\"\r\n              mat-raised-button\r\n              color=\"primary\">\r\n        Пополнить\r\n      </button>\r\n\r\n      <button (click)=\"card.isTopUp = false;\"\r\n              mat-raised-button\r\n              color=\"basic\"\r\n              style=\"margin-left:30px;\">\r\n        Отмена\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cards/card-top-up-balance/card-top-up-balance.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/cards/card-top-up-balance/card-top-up-balance.component.ts ***!
  \****************************************************************************/
/*! exports provided: CardTopUpBalanceComponent, currencyValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTopUpBalanceComponent", function() { return CardTopUpBalanceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyValidator", function() { return currencyValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/card */ "./src/app/cards/models/card.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations */ "./src/app/cards/animations.ts");





var CardTopUpBalanceComponent = /** @class */ (function () {
    function CardTopUpBalanceComponent() {
        this.balanceSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CardTopUpBalanceComponent.prototype.ngOnInit = function () {
        this.balanceInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, currencyValidator()]);
    };
    CardTopUpBalanceComponent.prototype.topUp = function () {
        if (this.balanceInput.valid) {
            this.balanceSubmitted.emit({ card: this.card, value: this.balanceInput.value.toString() });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_card__WEBPACK_IMPORTED_MODULE_2__["Card"])
    ], CardTopUpBalanceComponent.prototype, "card", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardTopUpBalanceComponent.prototype, "balanceSubmitted", void 0);
    CardTopUpBalanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card-top-up-balance',
            template: __webpack_require__(/*! ./card-top-up-balance.component.html */ "./src/app/cards/card-top-up-balance/card-top-up-balance.component.html"),
            animations: [_animations__WEBPACK_IMPORTED_MODULE_4__["accordionSelect"]],
            styles: [__webpack_require__(/*! ./card-top-up-balance.component.css */ "./src/app/cards/card-top-up-balance/card-top-up-balance.component.css")]
        })
    ], CardTopUpBalanceComponent);
    return CardTopUpBalanceComponent;
}());

function currencyValidator() {
    return function (control) {
        var number = Number(control.value);
        var isError = (!number || number < 0);
        return isError ? { 'currency': { value: control.value } } : null;
    };
}


/***/ }),

/***/ "./src/app/cards/card-type/card-type-model.ts":
/*!****************************************************!*\
  !*** ./src/app/cards/card-type/card-type-model.ts ***!
  \****************************************************/
/*! exports provided: CardTypeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTypeModel", function() { return CardTypeModel; });
var CardTypeModel = /** @class */ (function () {
    function CardTypeModel(title, cssClass, currency) {
        if (currency === void 0) { currency = null; }
        this.title = title;
        this.cssClass = cssClass;
        this.currency = currency;
    }
    return CardTypeModel;
}());



/***/ }),

/***/ "./src/app/cards/card-type/card-type.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cards/card-type/card-type.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-type-icon{\r\n  font-size:27px;\r\n}\r\n\r\n.card-type-currency {\r\n  position: absolute;\r\n  font-size: 15px;\r\n  margin-left: -19px;\r\n  margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzL2NhcmQtdHlwZS9jYXJkLXR5cGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6ImNhcmRzL2NhcmQtdHlwZS9jYXJkLXR5cGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXR5cGUtaWNvbntcclxuICBmb250LXNpemU6MjdweDtcclxufVxyXG5cclxuLmNhcmQtdHlwZS1jdXJyZW5jeSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tbGVmdDogLTE5cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cards/card-type/card-type.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cards/card-type/card-type.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>\r\n  <i class=\"card-type-icon\"\r\n     matTooltip=\"{{model.title}}\"\r\n     [matTooltipPosition]=\"'after'\"\r\n     [ngClass]=\"model.cssClass\">\r\n  </i>\r\n  <span *ngIf=\"model.currency\"\r\n        class=\"card-type-currency\">\r\n    {{model.currency}}\r\n  </span>\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/cards/card-type/card-type.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cards/card-type/card-type.component.ts ***!
  \********************************************************/
/*! exports provided: CardTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTypeComponent", function() { return CardTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_type_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-type-model */ "./src/app/cards/card-type/card-type-model.ts");



var CardTypeComponent = /** @class */ (function () {
    function CardTypeComponent() {
    }
    CardTypeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.type.currentValue !== changes.type.previousValue || changes.type.firstChange)
            this.updateModel(this.type);
    };
    CardTypeComponent.prototype.updateModel = function (value) {
        switch (value) {
            case "Limit":
                this.model = new _card_type_model__WEBPACK_IMPORTED_MODULE_2__["CardTypeModel"]("Лимитная карта", "pe-7s-repeat");
                break;
            case "WR":
                this.model = new _card_type_model__WEBPACK_IMPORTED_MODULE_2__["CardTypeModel"]("Кошельковая рублевая карта", "pe-7s-wallet", "₽");
                break;
            case "WL":
                this.model = new _card_type_model__WEBPACK_IMPORTED_MODULE_2__["CardTypeModel"]("Кошельковая литровая карта", "pe-7s-wallet", " L");
                break;
            default:
                this.model = new _card_type_model__WEBPACK_IMPORTED_MODULE_2__["CardTypeModel"]("", "", "");
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardTypeComponent.prototype, "type", void 0);
    CardTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'card-type',
            template: __webpack_require__(/*! ./card-type.component.html */ "./src/app/cards/card-type/card-type.component.html"),
            styles: [__webpack_require__(/*! ./card-type.component.css */ "./src/app/cards/card-type/card-type.component.css")]
        })
    ], CardTypeComponent);
    return CardTypeComponent;
}());



/***/ }),

/***/ "./src/app/cards/cards-table/cards-table.component.css":
/*!*************************************************************!*\
  !*** ./src/app/cards/cards-table/cards-table.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-root {\r\n  font-family: Roboto, Arial, sans-serif;\r\n  margin: 0;\r\n}\r\n\r\n.inline-block {\r\n  display: inline-block;\r\n}\r\n\r\n.td-container {\r\n  padding: 0px !important;\r\n  border: none !important;\r\n}\r\n\r\n.material-grey-bg {\r\n  background-color: #fafafa !important;\r\n}\r\n\r\n.material-main-bg {\r\n  background-color: #3f51b5 !important;\r\n}\r\n\r\ntbody tr:hover {\r\n  /*background-color: #C5CAE9 !important;*/\r\n}\r\n\r\n.bg-row-status-in-work {\r\n  background-color: #E8EAF6;\r\n}\r\n\r\n.bg-row-status-on-confirm {\r\n  background-color: #FFFDE7;\r\n}\r\n\r\n.bg-row-status-blocked {\r\n  background-color: #FFCDD2;\r\n}\r\n\r\n.bg-row-status-stopped-by-client{\r\n  background-color: #EEEEEE\r\n}\r\n\r\n.bg-row-deleted {\r\n  background-color: #fce3e6 !important;\r\n  color: #cdc1c2 !important;\r\n}\r\n\r\n.bg-row-selected-single {\r\n  background-color: #fdfdf4;\r\n}\r\n\r\n.bg-row-selected-group {\r\n  background-color: #f7f9fa;\r\n}\r\n\r\n.center-block {\r\n  float: none;\r\n  margin: 0 auto;\r\n}\r\n\r\nth {\r\n  cursor: default !important;\r\n}\r\n\r\n.card-icon {\r\n  margin-bottom: 3px;\r\n  display: inline-block;\r\n}\r\n\r\n.single-row {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.glyphicon-triangle-right, .glyphicon-triangle-bottom {\r\n  width: 18px;\r\n}\r\n\r\n/*.cursor-default {\r\n  cursor: default !important;\r\n}*/\r\n\r\ntable td{\r\n  color: rgba(0,0,0,.87);\r\n}\r\n\r\ntable th {\r\n  color: #6a6c6f;\r\n}\r\n\r\nmat-form-field {\r\n  /*max-width: 150px;\r\n  min-width: 10px;*/\r\n  font-size:15px !important;\r\n}\r\n\r\nmat-form-field input, mat-form-field mat-select {\r\n    /*background-color: white !important;*/\r\n    /*height: 25px !important;*/\r\n  }\r\n\r\n.mat-button.mat-small {\r\n  min-width: 26px;\r\n  min-height: 26px;\r\n  line-height: 20px;\r\n  vertical-align: top;\r\n  font-size: 14px;\r\n  padding: 0 0;\r\n  margin: 0;\r\n}\r\n\r\n.mat-button.btn-right {\r\n  margin-left: 2px !important;\r\n}\r\n\r\n/*Legacy*/\r\n\r\n/*Style for multiselect filters*/\r\n\r\n.ui-jqgrid .ui-jqgrid-bdiv {\r\n  overflow: hidden !important;\r\n}\r\n\r\n.ui-jqgrid .table-bordered {\r\n  border-right: 0px none !important;\r\n}\r\n\r\n/*.ui-jqgrid .ui-jqgrid-htable {\r\n    table-layout: auto !important;\r\n}*/\r\n\r\n.ui-jqgrid .ui-jqgrid-hdiv {\r\n  overflow: visible !important;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-htable thead th {\r\n  overflow: visible !important;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-htable .ui-th-div {\r\n  font-size: 12px;\r\n  color: #999999;\r\n  overflow: hidden !important;\r\n}\r\n\r\n@media (min-width: 1980px) {\r\n  .ui-jqgrid .ui-jqgrid-htable .ui-th-div {\r\n    font-size: 1em;\r\n  }\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-htable thead th div {\r\n  overflow: visible !important;\r\n}\r\n\r\n.clsresizableCols {\r\n  min-width: 70px !important;\r\n}\r\n\r\n/*.form-control {\r\n    padding: 6px 6px !important;\r\n}\r\n*/\r\n\r\n.bg-row-jqGrid {\r\n  /* background-color: #eef9ff;**/\r\n  background-color: #dbebff;\r\n  background: linear-gradient(to right, #dbebff, #eef9ff );\r\n  background: -ms-linear-gradient(top, #e7f1ff, #eef9ff);\r\n}\r\n\r\n.bg-row-jqGridinProc {\r\n  background-color: #fcf8e3;\r\n}\r\n\r\n.bg-row-jqGrid td {\r\n  background-image: none;\r\n}\r\n\r\n.bg-row-jqGrid .label {\r\n  margin: 0px 1px 0px 1px;\r\n}\r\n\r\n.bg-row-Group {\r\n  /*background-color: #e8fbeb;*/\r\n  background-color: #f7f9fa;\r\n}\r\n\r\n.bg-row-Ind {\r\n  background-color: #fdfdf4;\r\n}\r\n\r\n.row-deleted {\r\n  background-color: #fce3e6;\r\n  color: #cdc1c2;\r\n}\r\n\r\ntr.success > td {\r\n  /* background-color: inherit !important;*/\r\n  background-color: rgba(204, 204, 204, 0.1) !important;\r\n}\r\n\r\ntr.active > td {\r\n  background-color: rgba(204, 204, 204, 0.1) !important;\r\n}\r\n\r\n/*redefinition  of Bootstrap styles*/\r\n\r\n.btn-sm, .btn-group-sm > .btn {\r\n  padding: 5px 6px;\r\n  font-size: 14px;\r\n  line-height: 1.0;\r\n  border-radius: 3px;\r\n  margin: 0px 1px 0px 0px;\r\n}\r\n\r\n.btn-plus, .btn-group-sm > .btn {\r\n  padding: 0px 0px;\r\n  font-size: 14px;\r\n  line-height: 1.0;\r\n  border-radius: 3px;\r\n  margin: 0px 1px 0px 2px;\r\n  width: 21px;\r\n  height: 21px;\r\n}\r\n\r\n.table > tbody > tr > td {\r\n  padding: 6px;\r\n  line-height: 1.42857143;\r\n  vertical-align: middle;\r\n  border-top: 1px solid #ddd;\r\n}\r\n\r\n.select2-container--bootstrap {\r\n  display: inline-block !important;\r\n}\r\n\r\n.cell-wrapperleaf {\r\n  display: inline-block;\r\n  width: 80%;\r\n}\r\n\r\n.popover {\r\n  z-index: 500 !important\r\n}\r\n\r\n/*Services Icons*/\r\n\r\n.clsServicesIcons {\r\n  /*cursor: default;*/\r\n  font-size: 12px;\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  background-color: transparent;\r\n  display: inline-block;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  background-image: none;\r\n  border: 1px solid transparent;\r\n  padding-top: 4px;\r\n}\r\n\r\n.clsServicesIcons.active {\r\n    color: #227bf3;\r\n    border-color: #227bf3;\r\n  }\r\n\r\n.clsServicesIcons.notactive {\r\n    color: #bcbcbc;\r\n    border-color: #bcbcbc;\r\n  }\r\n\r\n/*   .clsServicesIcons:hover {\r\n            background-color: inherit;\r\n            border-color: inherit;\r\n            color: inherit;\r\n        }\r\n        .clsServicesIcons:active {\r\n            background-color: inherit;\r\n            border-color: inherit;\r\n            color: inherit;\r\n        }\r\n        .clsServicesIcons.btn-default {\r\n            color: #bcbcbc;\r\n        }\r\n        .clsServicesIcons.btn-info:hover {\r\n            color: #3f8cf5;\r\n        }*/\r\n\r\n.DT:before {\r\n  content: \"ДТ\";\r\n}\r\n\r\n.ai92:before {\r\n  content: \"92\";\r\n}\r\n\r\n.ai95:before {\r\n  content: \"95\";\r\n}\r\n\r\n.ai98:before {\r\n  content: \"98\";\r\n}\r\n\r\n.ai80:before {\r\n  content: \"80\";\r\n}\r\n\r\n.ai:before {\r\n  content: \"АИ\";\r\n}\r\n\r\n.gas {\r\n  letter-spacing: -2px;\r\n  margin-left: -2px;\r\n}\r\n\r\n.gas:before {\r\n    content: 'ГАЗ';\r\n  }\r\n\r\n.service, .shower {\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.shower:before {\r\n    content: \"\\f2cc\";\r\n  }\r\n\r\n.service:before {\r\n    content: \"\\f0ad\";\r\n  }\r\n\r\nspan.glyphicon.glyphicon-circle-arrow-up:before {\r\n  content: \"\";\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-btable tbody tr.jqgrow td {\r\n  white-space: nowrap;\r\n}\r\n\r\n.ui-jqgrid .tree-minus {\r\n  margin-top: 3px;\r\n}\r\n\r\n.ui-jqgrid .tree-plus {\r\n  margin-top: 3px;\r\n}\r\n\r\n.table-responsive {\r\n  overflow-x: visible !important;\r\n}\r\n\r\n.ui-search-table select, .ui-search-table input {\r\n  padding: 5px 3px !important;\r\n}\r\n\r\n.multiselect {\r\n  padding: 0px 3px;\r\n}\r\n\r\n.multiselect-container {\r\n  width: 100% !important;\r\n  z-index: 10000 !important;\r\n}\r\n\r\n.multiselect-selected-text {\r\n  font-size: 14px !important;\r\n  font-weight: normal !important;\r\n}\r\n\r\n.checkbox input[type=\"checkbox\"] {\r\n  margin-top: 3px;\r\n}\r\n\r\n.multiselect-container > li > a > label {\r\n  padding-left: 30px !important;\r\n}\r\n\r\n.clsNormalWrap {\r\n  white-space: normal !important;\r\n}\r\n\r\n.clsActionsCol {\r\n  overflow: visible !important;\r\n}\r\n\r\n.bg-row-StatusInWork {\r\n  background-color: #dbebff;\r\n}\r\n\r\n.bg-row-StatusStopped {\r\n  background-color: #e3e3e3;\r\n}\r\n\r\n.bg-row-StatusWarning {\r\n  background-color: #f4dddd;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  #TableChecks {\r\n    position: relative;\r\n    left: -20px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1700px) {\r\n  #TableChecks {\r\n    position: relative;\r\n    left: 0px;\r\n  }\r\n}\r\n\r\n/*Legacy2*/\r\n\r\n/*Grid*/\r\n\r\n/*Решает проблему наложения рамок последнего столбца*/\r\n\r\n.ui-jqgrid .ui-jqgrid-labels th:not([style*=\"display: none\"]):last-child {\r\n  border-right: none !important;\r\n}\r\n\r\n.ui-jqgrid {\r\n  position: relative;\r\n  border: 1px solid #ddd; /*default*/\r\n  border-radius: 3px;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-view {\r\n    position: relative;\r\n    left: 0;\r\n    top: 0;\r\n    padding: 0;\r\n  }\r\n\r\n.ui-jqgrid .ui-common-table {\r\n  }\r\n\r\n/* Caption*/\r\n\r\n.ui-jqgrid .ui-jqgrid-titlebar {\r\n    font-weight: normal;\r\n    min-height: 37px;\r\n    padding: 4px 8px;\r\n    position: relative;\r\n    margin-right: 2px;\r\n    border-bottom: 1px solid #ddd; /*default*/\r\n  }\r\n\r\n.ui-jqgrid .ui-jqgrid-caption {\r\n    text-align: left;\r\n  }\r\n\r\n.ui-jqgrid .ui-jqgrid-title {\r\n    padding-top: 5px;\r\n    vertical-align: middle;\r\n  }\r\n\r\n.ui-jqgrid .ui-jqgrid-titlebar-close {\r\n    color: inherit;\r\n    position: absolute;\r\n    top: 50%;\r\n    margin: -10px 7px 0 0;\r\n    padding: 1px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.ui-jqgrid .ui-jqgrid-titlebar-close span {\r\n      display: block;\r\n      margin: 1px;\r\n    }\r\n\r\n.ui-jqgrid .ui-jqgrid-titlebar-close:hover {\r\n    }\r\n\r\n/* Header*/\r\n\r\n.ui-jqgrid .ui-jqgrid-hdiv {\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 0;\r\n    /*overflow: hidden;*/\r\n    overflow: visible;\r\n  }\r\n\r\n.ui-jqgrid .ui-jqgrid-hbox {\r\n    float: left;\r\n    padding-right: 20px;\r\n  }\r\n\r\n.ui-jqgrid .ui-jqgrid-htable {\r\n    margin-bottom: 0;\r\n    table-layout: fixed;\r\n    border-top: none;\r\n  }\r\n\r\n.ui-jqgrid .ui-jqgrid-htable thead th {\r\n      /*overflow : hidden; */\r\n      overflow: visible;\r\n      border-bottom: none;\r\n      padding-right: 2px;\r\n    }\r\n\r\n.ui-jqgrid .ui-jqgrid-htable thead th div {\r\n        overflow: visible;\r\n        /* position:relative;*/\r\n      }\r\n\r\n.ui-th-column, .ui-jqgrid .ui-jqgrid-htable th.ui-th-column {\r\n      overflow: hidden;\r\n      white-space: nowrap;\r\n    }\r\n\r\n.ui-th-column-header,\r\n    .ui-jqgrid .ui-jqgrid-htable th.ui-th-column-header {\r\n      overflow: hidden;\r\n      white-space: nowrap;\r\n    }\r\n\r\n.ui-th-ltr, .ui-jqgrid .ui-jqgrid-htable th.ui-th-ltr {\r\n    }\r\n\r\n.ui-th-rtl, .ui-jqgrid .ui-jqgrid-htable th.ui-th-rtl {\r\n      text-align: center;\r\n    }\r\n\r\n.ui-first-th-ltr {\r\n}\r\n\r\n.ui-first-th-rtl {\r\n}\r\n\r\n.ui-jqgrid tr.jqg-first-row-header th {\r\n  height: auto;\r\n  border-top: none;\r\n  padding-bottom: 0;\r\n  padding-top: 0;\r\n  border-bottom: none;\r\n  padding-right: 2px;\r\n  text-align: center;\r\n}\r\n\r\n.ui-jqgrid tr.jqg-second-row-header th,\r\n.ui-jqgrid tr.jqg-third--row-header th {\r\n  border-top: none;\r\n  text-align: center;\r\n}\r\n\r\n.ui-jqgrid .ui-th-div-ie {\r\n  white-space: nowrap;\r\n  zoom: 1;\r\n  height: 17px;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-resize {\r\n  height: 20px !important;\r\n  position: relative;\r\n  cursor: e-resize;\r\n  display: inline;\r\n  overflow: hidden;\r\n}\r\n\r\n.ui-jqgrid .ui-grid-ico-sort {\r\n  margin-left: 5px;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  right: auto;\r\n  font-size: 12px;\r\n}\r\n\r\n.ui-jqgrid .ui-icon-asc {\r\n  margin-top: -3px;\r\n}\r\n\r\n.ui-jqgrid .ui-icon-desc {\r\n  margin-top: 4px;\r\n}\r\n\r\n.ui-jqgrid .ui-i-asc {\r\n  margin-top: 0;\r\n}\r\n\r\n.ui-jqgrid .ui-i-desc {\r\n  margin-top: 0;\r\n  margin-right: 13px;\r\n}\r\n\r\n.ui-jqgrid .ui-single-sort-asc {\r\n  margin-top: 0;\r\n}\r\n\r\n.ui-jqgrid .ui-single-sort-desc {\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-sortable {\r\n  cursor: pointer;\r\n}\r\n\r\n.ui-jqgrid tr.ui-search-toolbar th {\r\n}\r\n\r\n.ui-jqgrid .ui-search-table td.ui-search-clear {\r\n}\r\n\r\n.ui-jqgrid tr.ui-search-toolbar td > input {\r\n}\r\n\r\n.ui-jqgrid tr.ui-search-toolbar select {\r\n}\r\n\r\n/* Body */\r\n\r\n.ui-jqgrid .table-bordered,\r\n.ui-jqgrid .table-bordered td,\r\n.ui-jqgrid .table-bordered th.ui-th-ltr {\r\n  border-left: 0px none !important;\r\n}\r\n\r\n.ui-jqgrid .table-bordered th.ui-th-rtl {\r\n    border-right: 0px none !important;\r\n  }\r\n\r\n.ui-jqgrid .table-bordered tr.ui-row-rtl td {\r\n    border-right: 0px none !important;\r\n    border-left: 1px solid #ddd !important;\r\n  }\r\n\r\ndiv.tablediv > .table-bordered {\r\n  border-left: 1px solid #ddd !important;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-bdiv table.table-bordered td {\r\n  border-top: 0px none;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-bdiv {\r\n  position: relative;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: auto;\r\n  text-align: left;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-btable {\r\n  table-layout: fixed;\r\n  border-left: none;\r\n  border-top: none;\r\n  margin-bottom: 0px\r\n}\r\n\r\n.ui-jqgrid tr.jqgrow {\r\n  outline-style: none;\r\n}\r\n\r\n.ui-jqgrid tr.jqgroup {\r\n  outline-style: none;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-btable tbody tr.jqgrow td {\r\n  overflow: hidden;\r\n  white-space: pre;\r\n  padding-right: 2px;\r\n}\r\n\r\n.ui-jqgrid tr.jqgfirstrow td {\r\n  height: auto;\r\n  border-top: none;\r\n  padding-bottom: 0;\r\n  padding-top: 0;\r\n  border-bottom: none;\r\n  padding-right: 2px;\r\n}\r\n\r\n.ui-jqgrid tr.jqgroup td {\r\n  white-space: nowrap;\r\n}\r\n\r\n.ui-jqgrid tr.jqfoot td {\r\n  white-space: nowrap;\r\n}\r\n\r\n.ui-jqgrid tr.ui-row-ltr td {\r\n}\r\n\r\n.ui-jqgrid tr.ui-row-rtl td {\r\n}\r\n\r\n.ui-jqgrid td.jqgrid-rownum {\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-resize-mark {\r\n  width: 2px;\r\n  left: 0;\r\n  background-color: #777;\r\n  cursor: e-resize;\r\n  cursor: col-resize;\r\n  position: absolute;\r\n  top: 0;\r\n  height: 100px;\r\n  overflow: hidden;\r\n  display: none;\r\n  border: 0 none;\r\n  z-index: 99999;\r\n}\r\n\r\n/* Footer */\r\n\r\n.ui-jqgrid .ui-jqgrid-sdiv {\r\n  position: relative;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  border-left: 0 none !important;\r\n  border-top: 0 none !important;\r\n  border-right: 0 none !important;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-ftable {\r\n  table-layout: fixed;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.ui-jqgrid tr.footrow td {\r\n  font-weight: bold;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  padding-right: 2px;\r\n  border-bottom: 0px none;\r\n}\r\n\r\n.ui-jqgrid tr.footrow-ltr td {\r\n  text-align: left;\r\n}\r\n\r\n.ui-jqgrid tr.footrow-rtl td {\r\n  text-align: right;\r\n}\r\n\r\n/* Pager*/\r\n\r\n.ui-jqgrid .ui-jqgrid-pager,\r\n.ui-jqgrid .ui-jqgrid-toppager {\r\n  border-left-width: 0px;\r\n  border-top: 1px solid #ddd;\r\n  /*padding : 4px 0px;*/\r\n  position: relative;\r\n  /*height: auto; */\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-toppager {\r\n  border-top-width: 0;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-toppager .ui-pager-control,\r\n  .ui-jqgrid .ui-jqgrid-pager .ui-pager-control {\r\n    position: relative;\r\n    border-left: 0;\r\n    border-bottom: 0;\r\n    border-top: 0;\r\n    /*height: 30px;*/\r\n  }\r\n\r\n.ui-jqgrid .ui-pg-table {\r\n  position: relative;\r\n  padding: 1px 0;\r\n  width: auto;\r\n  margin: 0;\r\n}\r\n\r\n.ui-jqgrid .ui-pg-table td {\r\n    font-weight: normal;\r\n    vertical-align: middle;\r\n    /*padding:0px 6px;*/\r\n  }\r\n\r\n.ui-jqgrid .ui-pager-control .ui-pager-table td {\r\n  border-top: 0px none !important;\r\n  min-height: 20px !important;\r\n}\r\n\r\n.ui-jqgrid .ui-pg-button {\r\n  height: auto;\r\n}\r\n\r\n.ui-jqgrid .ui-paging-pager td {\r\n  padding: 0 5px;\r\n}\r\n\r\n.ui-jqgrid .ui-pg-button span {\r\n  display: block;\r\n  margin: 0px 2px;\r\n  float: left;\r\n}\r\n\r\n.ui-jqgrid .ui-pg-button:hover {\r\n}\r\n\r\n.ui-jqgrid .ui-disabled:hover {\r\n}\r\n\r\n.ui-jqgrid .ui-pg-input,\r\n.ui-jqgrid .ui-jqgrid-toppager .ui-pg-input {\r\n  display: inline-block;\r\n  height: auto;\r\n  width: auto;\r\n  font-size: .9em;\r\n  margin: 0;\r\n  line-height: inherit;\r\n  border: none;\r\n  padding: 0px 3px\r\n}\r\n\r\n.ui-jqgrid .ui-pg-selbox,\r\n.ui-jqgrid .ui-jqgrid-toppager .ui-pg-selbox {\r\n  font-size: .9em;\r\n  line-height: inherit;\r\n  display: block;\r\n  height: 22px;\r\n  margin: 0;\r\n  padding: 3px 0px 3px 3px;\r\n  border: none;\r\n}\r\n\r\n.ui-jqgrid .ui-separator {\r\n  height: 18px;\r\n  border: none;\r\n  border-left: 2px solid #ccc; /*default*/\r\n}\r\n\r\n.ui-separator-li {\r\n  height: 2px;\r\n  border: none;\r\n  border-top: 2px solid #ccc; /*default*/\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-pager .ui-pg-div,\r\n.ui-jqgrid .ui-jqgrid-toppager .ui-pg-div {\r\n  float: left;\r\n  position: relative;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-pager .ui-pg-button,\r\n.ui-jqgrid .ui-jqgrid-toppager .ui-pg-button {\r\n  cursor: pointer;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-pager .ui-pg-div span,\r\n.ui-jqgrid .ui-jqgrid-toppager .ui-pg-div span {\r\n  float: left;\r\n}\r\n\r\n.ui-jqgrid td input,\r\n.ui-jqgrid td select,\r\n.ui-jqgrid td textarea {\r\n  margin: 0;\r\n}\r\n\r\n.ui-jqgrid td textarea {\r\n  width: auto;\r\n  height: auto;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-pager .ui-pager-table,\r\n.ui-jqgrid .ui-jqgrid-toppager .ui-pager-table {\r\n  width: 100%;\r\n  table-layout: fixed;\r\n  height: 100%;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-pager .ui-paging-info,\r\n.ui-jqgrid .ui-jqgrid-toppager .ui-paging-info {\r\n  font-weight: normal;\r\n  height: auto;\r\n  margin-top: 3px;\r\n  margin-right: 4px;\r\n  display: inline;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-pager .ui-paging-pager,\r\n.ui-jqgrid .ui-jqgrid-toppager .ui-paging-pager {\r\n  table-layout: auto;\r\n  height: 100%;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-pager .navtable,\r\n.ui-jqgrid .ui-jqgrid-toppager .navtable {\r\n  float: left;\r\n  table-layout: auto;\r\n  height: 100%;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-pager .navtable td,\r\n  .ui-jqgrid .ui-jqgrid-toppager .navtable td {\r\n    padding: 0 5px;\r\n  }\r\n\r\n/*Subgrid*/\r\n\r\n.ui-jqgrid .ui-jqgrid-btable .ui-sgcollapsed span {\r\n  display: block;\r\n}\r\n\r\n.ui-jqgrid .ui-subgrid {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\n.ui-jqgrid .ui-subgrid table {\r\n    table-layout: fixed;\r\n  }\r\n\r\n.ui-jqgrid .ui-subgrid tr.ui-subtblcell td {\r\n  }\r\n\r\n.ui-jqgrid .ui-subgrid td.subgrid-data {\r\n    border-top: 0 none !important;\r\n  }\r\n\r\n.ui-jqgrid .ui-subgrid td.subgrid-cell {\r\n    vertical-align: middle\r\n  }\r\n\r\n.ui-jqgrid a.ui-sghref {\r\n  text-decoration: none;\r\n  color: #010101; /*default*/\r\n}\r\n\r\n.ui-jqgrid .ui-th-subgrid {\r\n  height: 20px;\r\n}\r\n\r\n.tablediv > .row {\r\n  margin: 0 0\r\n}\r\n\r\n/* loading */\r\n\r\n.ui-jqgrid .loading {\r\n  position: absolute;\r\n  top: 45%;\r\n  left: 45%;\r\n  width: auto;\r\n  z-index: 101;\r\n  padding: 6px;\r\n  margin: 5px;\r\n  text-align: center;\r\n  display: none;\r\n  border: 1px solid #ddd; /*default*/\r\n  font-size: 14px;\r\n  background-color: #d9edf7;\r\n}\r\n\r\n.ui-jqgrid .jqgrid-overlay {\r\n  display: none;\r\n  z-index: 100;\r\n}\r\n\r\n/* IE * html .jqgrid-overlay {width: expression(this.parentNode.offsetWidth+'px');height: expression(this.parentNode.offsetHeight+'px');} */\r\n\r\n* .jqgrid-overlay iframe {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n}\r\n\r\n/* IE width: expression(this.parentNode.offsetWidth+'px');height: expression(this.parentNode.offsetHeight+'px');}*/\r\n\r\n/* end loading div */\r\n\r\n/* Toolbar */\r\n\r\n.ui-jqgrid .ui-userdata {\r\n  padding: 4px 0px;\r\n  overflow: hidden;\r\n  min-height: 32px;\r\n}\r\n\r\n.ui-jqgrid .ui-userdata-top {\r\n  border-left-width: 0px; /*default*/\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.ui-jqgrid .ui-userdata-bottom {\r\n  border-left-width: 0px; /*default*/\r\n  border-top: 1px solid #ddd;\r\n}\r\n\r\n/*Modal Window */\r\n\r\n.ui-jqdialog {\r\n}\r\n\r\n.ui-jqdialog {\r\n  display: none;\r\n  width: 500px;\r\n  position: absolute;\r\n  /*padding: 5px; */\r\n  overflow: visible;\r\n}\r\n\r\n.ui-jqdialog .ui-jqdialog-titlebar {\r\n    padding: .1em .1em;\r\n    min-height: 35px;\r\n  }\r\n\r\n.ui-jqdialog .ui-jqdialog-title {\r\n    margin: .3em 0 .2em;\r\n    font-weight: bold;\r\n    padding-left: 6px;\r\n    padding-right: 6px;\r\n  }\r\n\r\n.ui-jqdialog .ui-jqdialog-titlebar-close {\r\n    position: absolute;\r\n    top: 0%;\r\n    margin: 3px 5px 0 0;\r\n    padding: 8px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.ui-jqdialog .ui-jqdialog-titlebar-close span {\r\n    }\r\n\r\n.ui-jqdialog .ui-jqdialog-titlebar-close:hover,\r\n    .ui-jqdialog .ui-jqdialog-titlebar-close:focus {\r\n      padding: 8px;\r\n    }\r\n\r\n.ui-jqdialog-content, .ui-jqdialog .ui-jqdialog-content {\r\n    border: 0;\r\n    padding: .3em .2em;\r\n    background: none;\r\n    height: auto;\r\n  }\r\n\r\n.ui-jqdialog .ui-jqconfirm {\r\n    padding: .4em 1em;\r\n    border-width: 3px;\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 10px;\r\n    overflow: visible;\r\n    display: none;\r\n    height: 120px;\r\n    width: 220px;\r\n    text-align: center;\r\n    background-color: #fff;\r\n    border-radius: 4px;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n  }\r\n\r\n.ui-jqdialog > .ui-resizable-se {\r\n  }\r\n\r\n.ui-jqgrid > .ui-resizable-se {\r\n}\r\n\r\n/* end Modal window*/\r\n\r\n/* Form edit */\r\n\r\n.ui-jqdialog-content .FormGrid {\r\n  margin: 0 8px 0 8px;\r\n  overflow: auto;\r\n  position: relative;\r\n}\r\n\r\n.ui-jqdialog-content .EditTable {\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.ui-jqdialog-content .DelTable {\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.EditTable td input,\r\n.EditTable td select,\r\n.EditTable td textarea {\r\n  width: 98%;\r\n  display: inline-block;\r\n}\r\n\r\n.EditTable td textarea {\r\n  width: auto;\r\n  height: auto;\r\n}\r\n\r\n.EditTable .FormData td {\r\n  height: 37px !important;\r\n}\r\n\r\n.ui-jqdialog-content td.EditButton {\r\n  text-align: right;\r\n  padding: 5px 5px 5px 0;\r\n}\r\n\r\n.ui-jqdialog-content td.navButton {\r\n  text-align: center;\r\n  border-left: 0 none;\r\n  border-top: 0 none;\r\n  border-right: 0 none;\r\n  padding-bottom: 5px;\r\n  padding-top: 5px;\r\n}\r\n\r\n.ui-jqdialog-content input.FormElement {\r\n  padding: .5em .3em;\r\n  margin-bottom: 5px\r\n}\r\n\r\n.ui-jqdialog-content select.FormElement {\r\n  padding: .3em;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.ui-jqdialog-content .data-line {\r\n  padding-top: .1em;\r\n  border: 0 none;\r\n}\r\n\r\n.ui-jqdialog-content .CaptionTD {\r\n  vertical-align: middle;\r\n  border: 0 none;\r\n  padding: 2px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.ui-jqdialog-content .DataTD {\r\n  padding: 2px;\r\n  border: 0 none;\r\n  vertical-align: top;\r\n}\r\n\r\n.ui-jqdialog-content .form-view-data {\r\n  white-space: pre\r\n}\r\n\r\n.fm-button {\r\n}\r\n\r\n.fm-button-icon-left {\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n}\r\n\r\n.fm-button-icon-right {\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n}\r\n\r\n.fm-button-icon-left {\r\n}\r\n\r\n.fm-button-icon-right {\r\n}\r\n\r\n#nData, #pData {\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n}\r\n\r\n#sData span, #cData span {\r\n  margin-left: 5px;\r\n}\r\n\r\n/* End Eorm edit */\r\n\r\n/*.ui-jqgrid .edit-cell {}*/\r\n\r\n.ui-jqgrid .selected-row,\r\ndiv.ui-jqgrid .selected-row td {\r\n  font-style: normal;\r\n}\r\n\r\n/* inline edit actions button*/\r\n\r\n.ui-inline-del, .ui-inline-cancel {\r\n  margin-left: 14px;\r\n}\r\n\r\n.ui-jqgrid .inline-edit-cell {\r\n}\r\n\r\n/* Tree Grid */\r\n\r\n.tree-wrap {\r\n  float: left;\r\n  position: relative;\r\n  height: 18px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.ui-jqgrid .tree-minus {\r\n  position: absolute;\r\n  height: 18px;\r\n  width: 18px;\r\n  overflow: hidden;\r\n}\r\n\r\n.ui-jqgrid .tree-plus {\r\n  position: absolute;\r\n  height: 18px;\r\n  width: 18px;\r\n  overflow: hidden;\r\n}\r\n\r\n.ui-jqgrid .tree-leaf {\r\n  position: absolute;\r\n  height: 18px;\r\n  width: 18px;\r\n  overflow: hidden;\r\n}\r\n\r\n.ui-jqgrid .treeclick {\r\n  cursor: pointer;\r\n}\r\n\r\n/* moda dialog */\r\n\r\n* iframe.jqm {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n}\r\n\r\n/*\t width: expression(this.parentNode.offsetWidth+'px');height: expression(this.parentNode.offsetHeight+'px');}*/\r\n\r\n.ui-jqgrid-dnd tr td {\r\n  border-right-width: 1px;\r\n  border-right-color: inherit;\r\n  border-right-style: solid;\r\n  height: 20px\r\n}\r\n\r\n/* RTL Support */\r\n\r\n.ui-jqgrid .ui-jqgrid-caption-rtl {\r\n  text-align: right;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-hbox-rtl {\r\n  float: right;\r\n  /*padding-left: 20px;*/\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-resize-ltr {\r\n  float: right;\r\n  margin: -2px -2px -2px 0;\r\n  height: 100%;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-resize-rtl {\r\n  float: left;\r\n  margin: -2px -2px -2px -0px;\r\n}\r\n\r\n.ui-jqgrid .ui-sort-rtl {\r\n}\r\n\r\n.ui-jqgrid .tree-wrap-ltr {\r\n  float: left;\r\n}\r\n\r\n.ui-jqgrid .tree-wrap-rtl {\r\n  float: right;\r\n}\r\n\r\n.ui-jqgrid .ui-ellipsis {\r\n  -moz-text-overflow: ellipsis;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n/* Toolbar Search Menu. Nav menu */\r\n\r\n.ui-search-menu,\r\n.ui-nav-menu {\r\n  position: absolute;\r\n  padding: 2px 5px;\r\n  z-index: 99999;\r\n}\r\n\r\n.ui-search-menu.ui-menu .ui-menu-item,\r\n  .ui-nav-menu.ui-menu .ui-menu-item {\r\n    list-style-image: none;\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n\r\n.ui-search-menu.ui-menu .ui-menu-item a,\r\n    .ui-nav-menu.ui-menu .ui-menu-item a {\r\n      display: block;\r\n    }\r\n\r\n.ui-search-menu.ui-menu .ui-menu-item a.g-menu-item:hover,\r\n      .ui-nav-menu.ui-menu .ui-menu-item a.g-menu-item:hover {\r\n        margin: -1px;\r\n        font-weight: normal;\r\n      }\r\n\r\n.ui-jqgrid .ui-search-table {\r\n  padding: 0;\r\n  border: 0 none;\r\n  height: 20px;\r\n  width: 100%;\r\n}\r\n\r\n.ui-jqgrid .ui-search-table .ui-search-oper {\r\n    width: 20px;\r\n  }\r\n\r\na.g-menu-item, a.soptclass, a.clearsearchclass {\r\n  cursor: pointer;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-view input,\r\n.ui-jqgrid .ui-jqgrid-view select,\r\n.ui-jqgrid .ui-jqgrid-view textarea,\r\n.ui-jqgrid .ui-jqgrid-view button {\r\n  /*font-size: 11px*/\r\n}\r\n\r\n.ui-jqgrid .ui-scroll-popup {\r\n  width: 100px;\r\n}\r\n\r\n.ui-search-table select,\r\n.ui-search-table input {\r\n  padding: 4px 3px;\r\n}\r\n\r\n.ui-disabled {\r\n  opacity: .35;\r\n  filter: Alpha(Opacity=35); /* support: IE8 */\r\n  background-image: none;\r\n}\r\n\r\n.ui-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.5);\r\n  opacity: .3;\r\n  filter: Alpha(Opacity=30); /* support: IE8 */\r\n}\r\n\r\n.ui-jqgrid-pager .ui-pg-table .ui-pg-button:hover,\r\n.ui-jqgrid-toppager .ui-pg-table .ui-pg-button:hover {\r\n  background-color: #ddd;\r\n}\r\n\r\n.ui-jqgrid-corner {\r\n  border-radius: 5px\r\n}\r\n\r\n.ui-resizable-handle {\r\n  /*position: absolute;*/\r\n  display: block;\r\n  left: 97%;\r\n}\r\n\r\n.ui-jqdialog .ui-resizable-se {\r\n  width: 12px;\r\n  height: 12px;\r\n  right: -5px;\r\n  bottom: -5px;\r\n  background-position: 16px 16px;\r\n}\r\n\r\n.ui-resizable-se {\r\n  cursor: se-resize;\r\n  width: 12px;\r\n  height: 12px;\r\n  right: 1px;\r\n  bottom: 1px;\r\n}\r\n\r\n.ui-top-corner {\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n\r\n.ui-bottom-corner {\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n}\r\n\r\n.ui-search-table {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.ui-search-table .columns, .ui-search-table .operators {\r\n    padding-right: 5px;\r\n  }\r\n\r\n.opsel {\r\n  float: left;\r\n  width: 100px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.add-group, .add-rule, .delete-group {\r\n  width: 14%;\r\n  margin-right: 5px;\r\n}\r\n\r\n.delete-rule {\r\n  width: 15px;\r\n}\r\n\r\nul.ui-search-menu, ul.ui-nav-menu {\r\n  list-style-type: none;\r\n}\r\n\r\nul.ui-search-menu li a,\r\n  ul.ui-nav-menu li a,\r\n  .soptclass,\r\n  .clearsearchclass {\r\n    text-decoration: none;\r\n    color: #010101;\r\n  }\r\n\r\nul.ui-search-menu li a:hover, ul.ui-nav-menu li a:hover, a.soptclass:hover, a.clearsearchclass:hover {\r\n      background-color: #ddd;\r\n      padding: 1px 1px;\r\n      text-decoration: none;\r\n    }\r\n\r\nul.ui-search-menu li, ul.ui-nav-menu li {\r\n    padding: 5px 5px;\r\n  }\r\n\r\n.ui-menu-item hr {\r\n  margin-bottom: 0px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.searchFilter .ui-search-table td,\r\n.searchFilter .ui-search-table th {\r\n  border-top: 0px none !important;\r\n}\r\n\r\n.searchFilter .queryresult {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.searchFilter .queryresult tr td {\r\n    border-top: 0px none;\r\n  }\r\n\r\n.ui-search-label {\r\n  padding-left: 5px;\r\n}\r\n\r\n.frozen-div, .frozen-bdiv {\r\n  background-color: #fff;\r\n}\r\n\r\n/*\r\n.ui-jqgrid .ui-jqgrid-caption,\r\n.ui-jqgrid .ui-jqgrid-pager,\r\n.ui-jqgrid .ui-jqgrid-toppager,\r\n.ui-jqgrid .ui-jqgrid-htable thead th,\r\n.ui-jqgrid .ui-userdata-top,\r\n.ui-jqgrid .ui-userdata-bottom,\r\n.ui-jqgrid .ui-jqgrid-hdiv,\r\n.ui-jqdialog .ui-jqdialog-titlebar\r\n{\r\n    background-image: none, linear-gradient(to bottom, #fff 0px, #e0e0e0 100%);\r\n    background-repeat: repeat-x;\r\n    border-color: #ccc;\r\n    text-shadow: 0 1px 0 #fff;\r\n}\r\n*/\r\n\r\n/* Column menu */\r\n\r\n.ui-jqgrid .ui-jqgrid-htable .colmenu {\r\n  position: absolute;\r\n  right: 1px;\r\n  height: 100%;\r\n  color: black;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-htable .colmenu-rtl {\r\n  right: auto;\r\n  left: 1px;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-htable .colmenuspan {\r\n  display: inline-block;\r\n}\r\n\r\n.ui-jqgrid .ui-jqgrid-htable .ui-th-div {\r\n  height: 17px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.column-menu, .ui-search-menu {\r\n  padding: 10px 15px;\r\n}\r\n\r\n.column-menu .divider {\r\n    background-color: #e5e5e5;\r\n    height: 1px;\r\n    padding: 0 0;\r\n    margin: 5px 0;\r\n    overflow: hidden;\r\n  }\r\n\r\n.ui-menu-item .ui-common-table .menu_icon {\r\n  padding-right: 8px;\r\n  padding-left: 8px;\r\n}\r\n\r\ntd.menu_text {\r\n  width: auto;\r\n  padding-left: 1px;\r\n  white-space: nowrap;\r\n}\r\n\r\n#search_menu .ui-menu-item div {\r\n  padding: 3px 0;\r\n  white-space: nowrap;\r\n}\r\n\r\n#search_menu .search_buttons {\r\n  display: inline-block;\r\n  width: 50%;\r\n  padding: 3px 3px;\r\n}\r\n\r\n.search_buttons .btn-default:hover {\r\n  padding-bottom: 6px;\r\n  padding-top: 6px;\r\n}\r\n\r\n.search_buttons #bs_reset {\r\n  margin-right: 3px;\r\n}\r\n\r\n.search_buttons #bs_search {\r\n  margin-left: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzL2NhcmRzLXRhYmxlL2NhcmRzLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBc0M7RUFDdEMsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTttQkFDaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUNFO0lBQ0Usc0NBQXNDO0lBQ3RDLDJCQUEyQjtFQUM3Qjs7QUFDRjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFHQSxTQUFTOztBQUNULGdDQUFnQzs7QUFDaEM7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQ0FBaUM7QUFD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V0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVFOzs7O0lBSUUscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0FBRUU7TUFDRSxzQkFBc0I7TUFDdEIsZ0JBQWdCO01BQ2hCLHFCQUFxQjtJQUN2Qjs7QUFFRjtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFRjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFRTtJQUNFLG9CQUFvQjtFQUN0Qjs7QUFFRjtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0NBZUM7O0FBQ0QsZ0JBQWdCOztBQUNoQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFRTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImNhcmRzL2NhcmRzLXRhYmxlL2NhcmRzLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcm9vdCB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaW5saW5lLWJsb2NrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50ZC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtZ3JleS1iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtbWFpbi1iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50Ym9keSB0cjpob3ZlciB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjQzVDQUU5ICFpbXBvcnRhbnQ7Ki9cclxufVxyXG5cclxuLmJnLXJvdy1zdGF0dXMtaW4td29yayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RUFGNjtcclxufVxyXG5cclxuLmJnLXJvdy1zdGF0dXMtb24tY29uZmlybSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkRFNztcclxufVxyXG5cclxuLmJnLXJvdy1zdGF0dXMtYmxvY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0REMjtcclxufVxyXG5cclxuLmJnLXJvdy1zdGF0dXMtc3RvcHBlZC1ieS1jbGllbnR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRVxyXG59XHJcblxyXG4uYmctcm93LWRlbGV0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2UzZTYgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2NkYzFjMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctcm93LXNlbGVjdGVkLXNpbmdsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmNDtcclxufVxyXG5cclxuLmJnLXJvdy1zZWxlY3RlZC1ncm91cCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYTtcclxufVxyXG5cclxuLmNlbnRlci1ibG9jayB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcblxyXG50aCB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmNhcmQtaWNvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNpbmdsZS1yb3cge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmdseXBoaWNvbi10cmlhbmdsZS1yaWdodCwgLmdseXBoaWNvbi10cmlhbmdsZS1ib3R0b20ge1xyXG4gIHdpZHRoOiAxOHB4O1xyXG59XHJcblxyXG4vKi5jdXJzb3ItZGVmYXVsdCB7XHJcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XHJcbn0qL1xyXG5cclxudGFibGUgdGR7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcclxufVxyXG5cclxudGFibGUgdGgge1xyXG4gIGNvbG9yOiAjNmE2YzZmO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgLyptYXgtd2lkdGg6IDE1MHB4O1xyXG4gIG1pbi13aWR0aDogMTBweDsqL1xyXG4gIGZvbnQtc2l6ZToxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICBtYXQtZm9ybS1maWVsZCBpbnB1dCwgbWF0LWZvcm0tZmllbGQgbWF0LXNlbGVjdCB7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7Ki9cclxuICAgIC8qaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7Ki9cclxuICB9XHJcbi5tYXQtYnV0dG9uLm1hdC1zbWFsbCB7XHJcbiAgbWluLXdpZHRoOiAyNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm1hdC1idXR0b24uYnRuLXJpZ2h0IHtcclxuICBtYXJnaW4tbGVmdDogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKkxlZ2FjeSovXHJcbi8qU3R5bGUgZm9yIG11bHRpc2VsZWN0IGZpbHRlcnMqL1xyXG4udWktanFncmlkIC51aS1qcWdyaWQtYmRpdiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWktanFncmlkIC50YWJsZS1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHggbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi8qLnVpLWpxZ3JpZCAudWktanFncmlkLWh0YWJsZSB7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGF1dG8gIWltcG9ydGFudDtcclxufSovXHJcblxyXG4udWktanFncmlkIC51aS1qcWdyaWQtaGRpdiB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC1odGFibGUgdGhlYWQgdGgge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4udWktanFncmlkIC51aS1qcWdyaWQtaHRhYmxlIC51aS10aC1kaXYge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxOTgwcHgpIHtcclxuICAudWktanFncmlkIC51aS1qcWdyaWQtaHRhYmxlIC51aS10aC1kaXYge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnVpLWpxZ3JpZCAudWktanFncmlkLWh0YWJsZSB0aGVhZCB0aCBkaXYge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jbHNyZXNpemFibGVDb2xzIHtcclxuICBtaW4td2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxufVxyXG4vKi5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogNnB4IDZweCAhaW1wb3J0YW50O1xyXG59XHJcbiovXHJcbi5iZy1yb3ctanFHcmlkIHtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmOWZmOyoqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmViZmY7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2RiZWJmZiwgI2VlZjlmZiApO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNkYmViZmYsICNlZWY5ZmYgKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkYmViZmYsICNlZWY5ZmYgKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI2RiZWJmZiwgI2VlZjlmZik7XHJcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICNlN2YxZmYsICNlZWY5ZmYpO1xyXG59XHJcblxyXG4uYmctcm93LWpxR3JpZGluUHJvYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcclxufVxyXG5cclxuLmJnLXJvdy1qcUdyaWQgdGQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi5iZy1yb3ctanFHcmlkIC5sYWJlbCB7XHJcbiAgbWFyZ2luOiAwcHggMXB4IDBweCAxcHg7XHJcbn1cclxuXHJcbi5iZy1yb3ctR3JvdXAge1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2U4ZmJlYjsqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y5ZmE7XHJcbn1cclxuXHJcbi5iZy1yb3ctSW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGY0O1xyXG59XHJcblxyXG4ucm93LWRlbGV0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2UzZTY7XHJcbiAgY29sb3I6ICNjZGMxYzI7XHJcbn1cclxuXHJcbnRyLnN1Y2Nlc3MgPiB0ZCB7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50OyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRyLmFjdGl2ZSA+IHRkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMSkgIWltcG9ydGFudDtcclxufVxyXG4vKnJlZGVmaW5pdGlvbiAgb2YgQm9vdHN0cmFwIHN0eWxlcyovXHJcbi5idG4tc20sIC5idG4tZ3JvdXAtc20gPiAuYnRuIHtcclxuICBwYWRkaW5nOiA1cHggNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS4wO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW46IDBweCAxcHggMHB4IDBweDtcclxufVxyXG5cclxuLmJ0bi1wbHVzLCAuYnRuLWdyb3VwLXNtID4gLmJ0biB7XHJcbiAgcGFkZGluZzogMHB4IDBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOiAwcHggMXB4IDBweCAycHg7XHJcbiAgd2lkdGg6IDIxcHg7XHJcbiAgaGVpZ2h0OiAyMXB4O1xyXG59XHJcblxyXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uc2VsZWN0Mi1jb250YWluZXItLWJvb3RzdHJhcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZWxsLXdyYXBwZXJsZWFmIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnBvcG92ZXIge1xyXG4gIHotaW5kZXg6IDUwMCAhaW1wb3J0YW50XHJcbn1cclxuLypTZXJ2aWNlcyBJY29ucyovXHJcbi5jbHNTZXJ2aWNlc0ljb25zIHtcclxuICAvKmN1cnNvcjogZGVmYXVsdDsqL1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4gIC5jbHNTZXJ2aWNlc0ljb25zLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzIyN2JmMztcclxuICAgIGJvcmRlci1jb2xvcjogIzIyN2JmMztcclxuICB9XHJcblxyXG4gIC5jbHNTZXJ2aWNlc0ljb25zLm5vdGFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2JjYmNiYztcclxuICAgIGJvcmRlci1jb2xvcjogI2JjYmNiYztcclxuICB9XHJcbi8qICAgLmNsc1NlcnZpY2VzSWNvbnM6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xzU2VydmljZXNJY29uczphY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xzU2VydmljZXNJY29ucy5idG4tZGVmYXVsdCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmNiY2JjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xzU2VydmljZXNJY29ucy5idG4taW5mbzpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjM2Y4Y2Y1O1xyXG4gICAgICAgIH0qL1xyXG4uRFQ6YmVmb3JlIHtcclxuICBjb250ZW50OiBcItCU0KJcIjtcclxufVxyXG5cclxuLmFpOTI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIjkyXCI7XHJcbn1cclxuXHJcbi5haTk1OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCI5NVwiO1xyXG59XHJcblxyXG4uYWk5ODpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiOThcIjtcclxufVxyXG5cclxuLmFpODA6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIjgwXCI7XHJcbn1cclxuXHJcbi5haTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi0JDQmFwiO1xyXG59XHJcblxyXG4uZ2FzIHtcclxuICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxuICBtYXJnaW4tbGVmdDogLTJweDtcclxufVxyXG5cclxuICAuZ2FzOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAn0JPQkNCXJztcclxuICB9XHJcblxyXG4uc2VydmljZSwgLnNob3dlciB7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG4gIC5zaG93ZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMmNjXCI7XHJcbiAgfVxyXG5cclxuICAuc2VydmljZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYwYWRcIjtcclxuICB9XHJcblxyXG5zcGFuLmdseXBoaWNvbi5nbHlwaGljb24tY2lyY2xlLWFycm93LXVwOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxuXHJcblxyXG4udWktanFncmlkIC51aS1qcWdyaWQtYnRhYmxlIHRib2R5IHRyLmpxZ3JvdyB0ZCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudHJlZS1taW51cyB7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4udWktanFncmlkIC50cmVlLXBsdXMge1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIG92ZXJmbG93LXg6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLXNlYXJjaC10YWJsZSBzZWxlY3QsIC51aS1zZWFyY2gtdGFibGUgaW5wdXQge1xyXG4gIHBhZGRpbmc6IDVweCAzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm11bHRpc2VsZWN0IHtcclxuICBwYWRkaW5nOiAwcHggM3B4O1xyXG59XHJcblxyXG4ubXVsdGlzZWxlY3QtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDEwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdWx0aXNlbGVjdC1zZWxlY3RlZC10ZXh0IHtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLm11bHRpc2VsZWN0LWNvbnRhaW5lciA+IGxpID4gYSA+IGxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNsc05vcm1hbFdyYXAge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNsc0FjdGlvbnNDb2wge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1yb3ctU3RhdHVzSW5Xb3JrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJlYmZmO1xyXG59XHJcblxyXG4uYmctcm93LVN0YXR1c1N0b3BwZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XHJcbn1cclxuXHJcbi5iZy1yb3ctU3RhdHVzV2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZGRkZDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAjVGFibGVDaGVja3Mge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTcwMHB4KSB7XHJcbiAgI1RhYmxlQ2hlY2tzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qTGVnYWN5MiovXHJcbi8qR3JpZCovXHJcbi8q0KDQtdGI0LDQtdGCINC/0YDQvtCx0LvQtdC80YMg0L3QsNC70L7QttC10L3QuNGPINGA0LDQvNC+0Log0L/QvtGB0LvQtdC00L3QtdCz0L4g0YHRgtC+0LvQsdGG0LAqL1xyXG4udWktanFncmlkIC51aS1qcWdyaWQtbGFiZWxzIHRoOm5vdChbc3R5bGUqPVwiZGlzcGxheTogbm9uZVwiXSk6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyAvKmRlZmF1bHQqL1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuICAudWktanFncmlkIC51aS1qcWdyaWQtdmlldyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC51aS1qcWdyaWQgLnVpLWNvbW1vbi10YWJsZSB7XHJcbiAgfVxyXG5cclxuICAvKiBDYXB0aW9uKi9cclxuICAudWktanFncmlkIC51aS1qcWdyaWQtdGl0bGViYXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1pbi1oZWlnaHQ6IDM3cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgLypkZWZhdWx0Ki9cclxuICB9XHJcblxyXG4gIC51aS1qcWdyaWQgLnVpLWpxZ3JpZC1jYXB0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAudWktanFncmlkIC51aS1qcWdyaWQtdGl0bGUge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICAudWktanFncmlkIC51aS1qcWdyaWQtdGl0bGViYXItY2xvc2Uge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbjogLTEwcHggN3B4IDAgMDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICAgLnVpLWpxZ3JpZCAudWktanFncmlkLXRpdGxlYmFyLWNsb3NlIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLWpxZ3JpZCAudWktanFncmlkLXRpdGxlYmFyLWNsb3NlOmhvdmVyIHtcclxuICAgIH1cclxuXHJcbiAgLyogSGVhZGVyKi9cclxuICAudWktanFncmlkIC51aS1qcWdyaWQtaGRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLypvdmVyZmxvdzogaGlkZGVuOyovXHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIC51aS1qcWdyaWQgLnVpLWpxZ3JpZC1oYm94IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIC51aS1qcWdyaWQgLnVpLWpxZ3JpZC1odGFibGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gIH1cclxuXHJcbiAgICAudWktanFncmlkIC51aS1qcWdyaWQtaHRhYmxlIHRoZWFkIHRoIHtcclxuICAgICAgLypvdmVyZmxvdyA6IGhpZGRlbjsgKi9cclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAgIC51aS1qcWdyaWQgLnVpLWpxZ3JpZC1odGFibGUgdGhlYWQgdGggZGl2IHtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAvKiBwb3NpdGlvbjpyZWxhdGl2ZTsqL1xyXG4gICAgICB9XHJcblxyXG4gICAgLnVpLXRoLWNvbHVtbiwgLnVpLWpxZ3JpZCAudWktanFncmlkLWh0YWJsZSB0aC51aS10aC1jb2x1bW4ge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC51aS10aC1jb2x1bW4taGVhZGVyLFxyXG4gICAgLnVpLWpxZ3JpZCAudWktanFncmlkLWh0YWJsZSB0aC51aS10aC1jb2x1bW4taGVhZGVyIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAudWktdGgtbHRyLCAudWktanFncmlkIC51aS1qcWdyaWQtaHRhYmxlIHRoLnVpLXRoLWx0ciB7XHJcbiAgICB9XHJcblxyXG4gICAgLnVpLXRoLXJ0bCwgLnVpLWpxZ3JpZCAudWktanFncmlkLWh0YWJsZSB0aC51aS10aC1ydGwge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4udWktZmlyc3QtdGgtbHRyIHtcclxufVxyXG5cclxuLnVpLWZpcnN0LXRoLXJ0bCB7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgdHIuanFnLWZpcnN0LXJvdy1oZWFkZXIgdGgge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCB0ci5qcWctc2Vjb25kLXJvdy1oZWFkZXIgdGgsXHJcbi51aS1qcWdyaWQgdHIuanFnLXRoaXJkLS1yb3ctaGVhZGVyIHRoIHtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktdGgtZGl2LWllIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHpvb206IDE7XHJcbiAgaGVpZ2h0OiAxN3B4O1xyXG59XHJcblxyXG4udWktanFncmlkIC51aS1qcWdyaWQtcmVzaXplIHtcclxuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBlLXJlc2l6ZTtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktZ3JpZC1pY28tc29ydCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogYXV0bztcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLWljb24tYXNjIHtcclxuICBtYXJnaW4tdG9wOiAtM3B4O1xyXG59XHJcblxyXG4udWktanFncmlkIC51aS1pY29uLWRlc2Mge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktaS1hc2Mge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLWktZGVzYyB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLXNpbmdsZS1zb3J0LWFzYyB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktc2luZ2xlLXNvcnQtZGVzYyB7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC1zb3J0YWJsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udWktanFncmlkIHRyLnVpLXNlYXJjaC10b29sYmFyIHRoIHtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktc2VhcmNoLXRhYmxlIHRkLnVpLXNlYXJjaC1jbGVhciB7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgdHIudWktc2VhcmNoLXRvb2xiYXIgdGQgPiBpbnB1dCB7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgdHIudWktc2VhcmNoLXRvb2xiYXIgc2VsZWN0IHtcclxufVxyXG5cclxuLyogQm9keSAqL1xyXG4udWktanFncmlkIC50YWJsZS1ib3JkZXJlZCxcclxuLnVpLWpxZ3JpZCAudGFibGUtYm9yZGVyZWQgdGQsXHJcbi51aS1qcWdyaWQgLnRhYmxlLWJvcmRlcmVkIHRoLnVpLXRoLWx0ciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDBweCBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAgLnVpLWpxZ3JpZCAudGFibGUtYm9yZGVyZWQgdGgudWktdGgtcnRsIHtcclxuICAgIGJvcmRlci1yaWdodDogMHB4IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC51aS1qcWdyaWQgLnRhYmxlLWJvcmRlcmVkIHRyLnVpLXJvdy1ydGwgdGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHggbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuZGl2LnRhYmxlZGl2ID4gLnRhYmxlLWJvcmRlcmVkIHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktanFncmlkLWJkaXYgdGFibGUudGFibGUtYm9yZGVyZWQgdGQge1xyXG4gIGJvcmRlci10b3A6IDBweCBub25lO1xyXG59XHJcblxyXG4udWktanFncmlkIC51aS1qcWdyaWQtYmRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC1idGFibGUge1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAwcHhcclxufVxyXG5cclxuLnVpLWpxZ3JpZCB0ci5qcWdyb3cge1xyXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgdHIuanFncm91cCB7XHJcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktanFncmlkLWJ0YWJsZSB0Ym9keSB0ci5qcWdyb3cgdGQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgdHIuanFnZmlyc3Ryb3cgdGQge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgcGFkZGluZy1yaWdodDogMnB4O1xyXG59XHJcblxyXG4udWktanFncmlkIHRyLmpxZ3JvdXAgdGQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgdHIuanFmb290IHRkIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4udWktanFncmlkIHRyLnVpLXJvdy1sdHIgdGQge1xyXG59XHJcblxyXG4udWktanFncmlkIHRyLnVpLXJvdy1ydGwgdGQge1xyXG59XHJcblxyXG4udWktanFncmlkIHRkLmpxZ3JpZC1yb3dudW0ge1xyXG59XHJcblxyXG4udWktanFncmlkIC51aS1qcWdyaWQtcmVzaXplLW1hcmsge1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xyXG4gIGN1cnNvcjogZS1yZXNpemU7XHJcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuLyogRm9vdGVyICovXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC1zZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdDogMCBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogMCBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwIG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktanFncmlkLWZ0YWJsZSB7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udWktanFncmlkIHRyLmZvb3Ryb3cgdGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMHB4IG5vbmU7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgdHIuZm9vdHJvdy1sdHIgdGQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgdHIuZm9vdHJvdy1ydGwgdGQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4vKiBQYWdlciovXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC1wYWdlcixcclxuLnVpLWpxZ3JpZCAudWktanFncmlkLXRvcHBhZ2VyIHtcclxuICBib3JkZXItbGVmdC13aWR0aDogMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gIC8qcGFkZGluZyA6IDRweCAwcHg7Ki9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLypoZWlnaHQ6IGF1dG87ICovXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udWktanFncmlkIC51aS1qcWdyaWQtdG9wcGFnZXIge1xyXG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbiAgLnVpLWpxZ3JpZCAudWktanFncmlkLXRvcHBhZ2VyIC51aS1wYWdlci1jb250cm9sLFxyXG4gIC51aS1qcWdyaWQgLnVpLWpxZ3JpZC1wYWdlciAudWktcGFnZXItY29udHJvbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItbGVmdDogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgLypoZWlnaHQ6IDMwcHg7Ki9cclxuICB9XHJcblxyXG4udWktanFncmlkIC51aS1wZy10YWJsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDFweCAwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuICAudWktanFncmlkIC51aS1wZy10YWJsZSB0ZCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC8qcGFkZGluZzowcHggNnB4OyovXHJcbiAgfVxyXG5cclxuLnVpLWpxZ3JpZCAudWktcGFnZXItY29udHJvbCAudWktcGFnZXItdGFibGUgdGQge1xyXG4gIGJvcmRlci10b3A6IDBweCBub25lICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWktanFncmlkIC51aS1wZy1idXR0b24ge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktcGFnaW5nLXBhZ2VyIHRkIHtcclxuICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktcGctYnV0dG9uIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMHB4IDJweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktcGctYnV0dG9uOmhvdmVyIHtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktZGlzYWJsZWQ6aG92ZXIge1xyXG59XHJcblxyXG4udWktanFncmlkIC51aS1wZy1pbnB1dCxcclxuLnVpLWpxZ3JpZCAudWktanFncmlkLXRvcHBhZ2VyIC51aS1wZy1pbnB1dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBmb250LXNpemU6IC45ZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwcHggM3B4XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLXBnLXNlbGJveCxcclxuLnVpLWpxZ3JpZCAudWktanFncmlkLXRvcHBhZ2VyIC51aS1wZy1zZWxib3gge1xyXG4gIGZvbnQtc2l6ZTogLjllbTtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDNweCAwcHggM3B4IDNweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLXNlcGFyYXRvciB7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNjY2M7IC8qZGVmYXVsdCovXHJcbn1cclxuXHJcbi51aS1zZXBhcmF0b3ItbGkge1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgI2NjYzsgLypkZWZhdWx0Ki9cclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG4udWktanFncmlkIC51aS1qcWdyaWQtcGFnZXIgLnVpLXBnLWRpdixcclxuLnVpLWpxZ3JpZCAudWktanFncmlkLXRvcHBhZ2VyIC51aS1wZy1kaXYge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktanFncmlkLXBhZ2VyIC51aS1wZy1idXR0b24sXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC10b3BwYWdlciAudWktcGctYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC1wYWdlciAudWktcGctZGl2IHNwYW4sXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC10b3BwYWdlciAudWktcGctZGl2IHNwYW4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udWktanFncmlkIHRkIGlucHV0LFxyXG4udWktanFncmlkIHRkIHNlbGVjdCxcclxuLnVpLWpxZ3JpZCB0ZCB0ZXh0YXJlYSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udWktanFncmlkIHRkIHRleHRhcmVhIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC1wYWdlciAudWktcGFnZXItdGFibGUsXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC10b3BwYWdlciAudWktcGFnZXItdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udWktanFncmlkIC51aS1qcWdyaWQtcGFnZXIgLnVpLXBhZ2luZy1pbmZvLFxyXG4udWktanFncmlkIC51aS1qcWdyaWQtdG9wcGFnZXIgLnVpLXBhZ2luZy1pbmZvIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4udWktanFncmlkIC51aS1qcWdyaWQtcGFnZXIgLnVpLXBhZ2luZy1wYWdlcixcclxuLnVpLWpxZ3JpZCAudWktanFncmlkLXRvcHBhZ2VyIC51aS1wYWdpbmctcGFnZXIge1xyXG4gIHRhYmxlLWxheW91dDogYXV0bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC1wYWdlciAubmF2dGFibGUsXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC10b3BwYWdlciAubmF2dGFibGUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRhYmxlLWxheW91dDogYXV0bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiAgLnVpLWpxZ3JpZCAudWktanFncmlkLXBhZ2VyIC5uYXZ0YWJsZSB0ZCxcclxuICAudWktanFncmlkIC51aS1qcWdyaWQtdG9wcGFnZXIgLm5hdnRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gIH1cclxuXHJcbi8qU3ViZ3JpZCovXHJcblxyXG4udWktanFncmlkIC51aS1qcWdyaWQtYnRhYmxlIC51aS1zZ2NvbGxhcHNlZCBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktc3ViZ3JpZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiAgLnVpLWpxZ3JpZCAudWktc3ViZ3JpZCB0YWJsZSB7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIH1cclxuXHJcbiAgLnVpLWpxZ3JpZCAudWktc3ViZ3JpZCB0ci51aS1zdWJ0YmxjZWxsIHRkIHtcclxuICB9XHJcblxyXG4gIC51aS1qcWdyaWQgLnVpLXN1YmdyaWQgdGQuc3ViZ3JpZC1kYXRhIHtcclxuICAgIGJvcmRlci10b3A6IDAgbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnVpLWpxZ3JpZCAudWktc3ViZ3JpZCB0ZC5zdWJncmlkLWNlbGwge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG4gIH1cclxuXHJcbi51aS1qcWdyaWQgYS51aS1zZ2hyZWYge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAxMDEwMTsgLypkZWZhdWx0Ki9cclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktdGgtc3ViZ3JpZCB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udGFibGVkaXYgPiAucm93IHtcclxuICBtYXJnaW46IDAgMFxyXG59XHJcbi8qIGxvYWRpbmcgKi9cclxuLnVpLWpxZ3JpZCAubG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDUlO1xyXG4gIGxlZnQ6IDQ1JTtcclxuICB3aWR0aDogYXV0bztcclxuICB6LWluZGV4OiAxMDE7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IC8qZGVmYXVsdCovXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLmpxZ3JpZC1vdmVybGF5IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG4vKiBJRSAqIGh0bWwgLmpxZ3JpZC1vdmVybGF5IHt3aWR0aDogZXhwcmVzc2lvbih0aGlzLnBhcmVudE5vZGUub2Zmc2V0V2lkdGgrJ3B4Jyk7aGVpZ2h0OiBleHByZXNzaW9uKHRoaXMucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQrJ3B4Jyk7fSAqL1xyXG4qIC5qcWdyaWQtb3ZlcmxheSBpZnJhbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4vKiBJRSB3aWR0aDogZXhwcmVzc2lvbih0aGlzLnBhcmVudE5vZGUub2Zmc2V0V2lkdGgrJ3B4Jyk7aGVpZ2h0OiBleHByZXNzaW9uKHRoaXMucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQrJ3B4Jyk7fSovXHJcbi8qIGVuZCBsb2FkaW5nIGRpdiAqL1xyXG5cclxuLyogVG9vbGJhciAqL1xyXG4udWktanFncmlkIC51aS11c2VyZGF0YSB7XHJcbiAgcGFkZGluZzogNHB4IDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1pbi1oZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLXVzZXJkYXRhLXRvcCB7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDBweDsgLypkZWZhdWx0Ki9cclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktdXNlcmRhdGEtYm90dG9tIHtcclxuICBib3JkZXItbGVmdC13aWR0aDogMHB4OyAvKmRlZmF1bHQqL1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcbi8qTW9kYWwgV2luZG93ICovXHJcbi51aS1qcWRpYWxvZyB7XHJcbn1cclxuXHJcbi51aS1qcWRpYWxvZyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qcGFkZGluZzogNXB4OyAqL1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4gIC51aS1qcWRpYWxvZyAudWktanFkaWFsb2ctdGl0bGViYXIge1xyXG4gICAgcGFkZGluZzogLjFlbSAuMWVtO1xyXG4gICAgbWluLWhlaWdodDogMzVweDtcclxuICB9XHJcblxyXG4gIC51aS1qcWRpYWxvZyAudWktanFkaWFsb2ctdGl0bGUge1xyXG4gICAgbWFyZ2luOiAuM2VtIDAgLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgfVxyXG5cclxuICAudWktanFkaWFsb2cgLnVpLWpxZGlhbG9nLXRpdGxlYmFyLWNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMCU7XHJcbiAgICBtYXJnaW46IDNweCA1cHggMCAwO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgICAudWktanFkaWFsb2cgLnVpLWpxZGlhbG9nLXRpdGxlYmFyLWNsb3NlIHNwYW4ge1xyXG4gICAgfVxyXG5cclxuICAgIC51aS1qcWRpYWxvZyAudWktanFkaWFsb2ctdGl0bGViYXItY2xvc2U6aG92ZXIsXHJcbiAgICAudWktanFkaWFsb2cgLnVpLWpxZGlhbG9nLXRpdGxlYmFyLWNsb3NlOmZvY3VzIHtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG5cclxuICAudWktanFkaWFsb2ctY29udGVudCwgLnVpLWpxZGlhbG9nIC51aS1qcWRpYWxvZy1jb250ZW50IHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IC4zZW0gLjJlbTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAudWktanFkaWFsb2cgLnVpLWpxY29uZmlybSB7XHJcbiAgICBwYWRkaW5nOiAuNGVtIDFlbTtcclxuICAgIGJvcmRlci13aWR0aDogM3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5cclxuICAudWktanFkaWFsb2cgPiAudWktcmVzaXphYmxlLXNlIHtcclxuICB9XHJcblxyXG4udWktanFncmlkID4gLnVpLXJlc2l6YWJsZS1zZSB7XHJcbn1cclxuLyogZW5kIE1vZGFsIHdpbmRvdyovXHJcbi8qIEZvcm0gZWRpdCAqL1xyXG4udWktanFkaWFsb2ctY29udGVudCAuRm9ybUdyaWQge1xyXG4gIG1hcmdpbjogMCA4cHggMCA4cHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udWktanFkaWFsb2ctY29udGVudCAuRWRpdFRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udWktanFkaWFsb2ctY29udGVudCAuRGVsVGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5FZGl0VGFibGUgdGQgaW5wdXQsXHJcbi5FZGl0VGFibGUgdGQgc2VsZWN0LFxyXG4uRWRpdFRhYmxlIHRkIHRleHRhcmVhIHtcclxuICB3aWR0aDogOTglO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLkVkaXRUYWJsZSB0ZCB0ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uRWRpdFRhYmxlIC5Gb3JtRGF0YSB0ZCB7XHJcbiAgaGVpZ2h0OiAzN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS1qcWRpYWxvZy1jb250ZW50IHRkLkVkaXRCdXR0b24ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDA7XHJcbn1cclxuXHJcbi51aS1qcWRpYWxvZy1jb250ZW50IHRkLm5hdkJ1dHRvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1sZWZ0OiAwIG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogMCBub25lO1xyXG4gIGJvcmRlci1yaWdodDogMCBub25lO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLnVpLWpxZGlhbG9nLWNvbnRlbnQgaW5wdXQuRm9ybUVsZW1lbnQge1xyXG4gIHBhZGRpbmc6IC41ZW0gLjNlbTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHhcclxufVxyXG5cclxuLnVpLWpxZGlhbG9nLWNvbnRlbnQgc2VsZWN0LkZvcm1FbGVtZW50IHtcclxuICBwYWRkaW5nOiAuM2VtO1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLnVpLWpxZGlhbG9nLWNvbnRlbnQgLmRhdGEtbGluZSB7XHJcbiAgcGFkZGluZy10b3A6IC4xZW07XHJcbiAgYm9yZGVyOiAwIG5vbmU7XHJcbn1cclxuXHJcbi51aS1qcWRpYWxvZy1jb250ZW50IC5DYXB0aW9uVEQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi51aS1qcWRpYWxvZy1jb250ZW50IC5EYXRhVEQge1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBib3JkZXI6IDAgbm9uZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4udWktanFkaWFsb2ctY29udGVudCAuZm9ybS12aWV3LWRhdGEge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmVcclxufVxyXG5cclxuLmZtLWJ1dHRvbiB7XHJcbn1cclxuXHJcbi5mbS1idXR0b24taWNvbi1sZWZ0IHtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG4uZm0tYnV0dG9uLWljb24tcmlnaHQge1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5mbS1idXR0b24taWNvbi1sZWZ0IHtcclxufVxyXG5cclxuLmZtLWJ1dHRvbi1pY29uLXJpZ2h0IHtcclxufVxyXG5cclxuI25EYXRhLCAjcERhdGEge1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbiNzRGF0YSBzcGFuLCAjY0RhdGEgc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4vKiBFbmQgRW9ybSBlZGl0ICovXHJcbi8qLnVpLWpxZ3JpZCAuZWRpdC1jZWxsIHt9Ki9cclxuLnVpLWpxZ3JpZCAuc2VsZWN0ZWQtcm93LFxyXG5kaXYudWktanFncmlkIC5zZWxlY3RlZC1yb3cgdGQge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG4vKiBpbmxpbmUgZWRpdCBhY3Rpb25zIGJ1dHRvbiovXHJcbi51aS1pbmxpbmUtZGVsLCAudWktaW5saW5lLWNhbmNlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLmlubGluZS1lZGl0LWNlbGwge1xyXG59XHJcbi8qIFRyZWUgR3JpZCAqL1xyXG4udHJlZS13cmFwIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudHJlZS1taW51cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDogMThweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udWktanFncmlkIC50cmVlLXBsdXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudHJlZS1sZWFmIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnRyZWVjbGljayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi8qIG1vZGEgZGlhbG9nICovXHJcbiogaWZyYW1lLmpxbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbi8qXHQgd2lkdGg6IGV4cHJlc3Npb24odGhpcy5wYXJlbnROb2RlLm9mZnNldFdpZHRoKydweCcpO2hlaWdodDogZXhwcmVzc2lvbih0aGlzLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0KydweCcpO30qL1xyXG4udWktanFncmlkLWRuZCB0ciB0ZCB7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgaGVpZ2h0OiAyMHB4XHJcbn1cclxuLyogUlRMIFN1cHBvcnQgKi9cclxuLnVpLWpxZ3JpZCAudWktanFncmlkLWNhcHRpb24tcnRsIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktanFncmlkLWhib3gtcnRsIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLypwYWRkaW5nLWxlZnQ6IDIwcHg7Ki9cclxufVxyXG5cclxuLnVpLWpxZ3JpZCAudWktanFncmlkLXJlc2l6ZS1sdHIge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IC0ycHggLTJweCAtMnB4IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udWktanFncmlkIC51aS1qcWdyaWQtcmVzaXplLXJ0bCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAtMnB4IC0ycHggLTJweCAtMHB4O1xyXG59XHJcblxyXG4udWktanFncmlkIC51aS1zb3J0LXJ0bCB7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnRyZWUtd3JhcC1sdHIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udWktanFncmlkIC50cmVlLXdyYXAtcnRsIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLWVsbGlwc2lzIHtcclxuICAtbW96LXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi8qIFRvb2xiYXIgU2VhcmNoIE1lbnUuIE5hdiBtZW51ICovXHJcbi51aS1zZWFyY2gtbWVudSxcclxuLnVpLW5hdi1tZW51IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxuICB6LWluZGV4OiA5OTk5OTtcclxufVxyXG5cclxuICAudWktc2VhcmNoLW1lbnUudWktbWVudSAudWktbWVudS1pdGVtLFxyXG4gIC51aS1uYXYtbWVudS51aS1tZW51IC51aS1tZW51LWl0ZW0ge1xyXG4gICAgbGlzdC1zdHlsZS1pbWFnZTogbm9uZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAgIC51aS1zZWFyY2gtbWVudS51aS1tZW51IC51aS1tZW51LWl0ZW0gYSxcclxuICAgIC51aS1uYXYtbWVudS51aS1tZW51IC51aS1tZW51LWl0ZW0gYSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgICAgLnVpLXNlYXJjaC1tZW51LnVpLW1lbnUgLnVpLW1lbnUtaXRlbSBhLmctbWVudS1pdGVtOmhvdmVyLFxyXG4gICAgICAudWktbmF2LW1lbnUudWktbWVudSAudWktbWVudS1pdGVtIGEuZy1tZW51LWl0ZW06aG92ZXIge1xyXG4gICAgICAgIG1hcmdpbjogLTFweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICB9XHJcblxyXG4udWktanFncmlkIC51aS1zZWFyY2gtdGFibGUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gIC51aS1qcWdyaWQgLnVpLXNlYXJjaC10YWJsZSAudWktc2VhcmNoLW9wZXIge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgfVxyXG5cclxuYS5nLW1lbnUtaXRlbSwgYS5zb3B0Y2xhc3MsIGEuY2xlYXJzZWFyY2hjbGFzcyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udWktanFncmlkIC51aS1qcWdyaWQtdmlldyBpbnB1dCxcclxuLnVpLWpxZ3JpZCAudWktanFncmlkLXZpZXcgc2VsZWN0LFxyXG4udWktanFncmlkIC51aS1qcWdyaWQtdmlldyB0ZXh0YXJlYSxcclxuLnVpLWpxZ3JpZCAudWktanFncmlkLXZpZXcgYnV0dG9uIHtcclxuICAvKmZvbnQtc2l6ZTogMTFweCovXHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLXNjcm9sbC1wb3B1cCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4udWktc2VhcmNoLXRhYmxlIHNlbGVjdCxcclxuLnVpLXNlYXJjaC10YWJsZSBpbnB1dCB7XHJcbiAgcGFkZGluZzogNHB4IDNweDtcclxufVxyXG5cclxuLnVpLWRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAuMzU7XHJcbiAgZmlsdGVyOiBBbHBoYShPcGFjaXR5PTM1KTsgLyogc3VwcG9ydDogSUU4ICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuLnVpLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gIG9wYWNpdHk6IC4zO1xyXG4gIGZpbHRlcjogQWxwaGEoT3BhY2l0eT0zMCk7IC8qIHN1cHBvcnQ6IElFOCAqL1xyXG59XHJcblxyXG4udWktanFncmlkLXBhZ2VyIC51aS1wZy10YWJsZSAudWktcGctYnV0dG9uOmhvdmVyLFxyXG4udWktanFncmlkLXRvcHBhZ2VyIC51aS1wZy10YWJsZSAudWktcGctYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4udWktanFncmlkLWNvcm5lciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4XHJcbn1cclxuXHJcbi51aS1yZXNpemFibGUtaGFuZGxlIHtcclxuICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGxlZnQ6IDk3JTtcclxufVxyXG5cclxuLnVpLWpxZGlhbG9nIC51aS1yZXNpemFibGUtc2Uge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICByaWdodDogLTVweDtcclxuICBib3R0b206IC01cHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTZweCAxNnB4O1xyXG59XHJcblxyXG4udWktcmVzaXphYmxlLXNlIHtcclxuICBjdXJzb3I6IHNlLXJlc2l6ZTtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgcmlnaHQ6IDFweDtcclxuICBib3R0b206IDFweDtcclxufVxyXG5cclxuLnVpLXRvcC1jb3JuZXIge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udWktYm90dG9tLWNvcm5lciB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi51aS1zZWFyY2gtdGFibGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbiAgLnVpLXNlYXJjaC10YWJsZSAuY29sdW1ucywgLnVpLXNlYXJjaC10YWJsZSAub3BlcmF0b3JzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4ub3BzZWwge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmFkZC1ncm91cCwgLmFkZC1ydWxlLCAuZGVsZXRlLWdyb3VwIHtcclxuICB3aWR0aDogMTQlO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uZGVsZXRlLXJ1bGUge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG51bC51aS1zZWFyY2gtbWVudSwgdWwudWktbmF2LW1lbnUge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuICB1bC51aS1zZWFyY2gtbWVudSBsaSBhLFxyXG4gIHVsLnVpLW5hdi1tZW51IGxpIGEsXHJcbiAgLnNvcHRjbGFzcyxcclxuICAuY2xlYXJzZWFyY2hjbGFzcyB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzAxMDEwMTtcclxuICB9XHJcblxyXG4gICAgdWwudWktc2VhcmNoLW1lbnUgbGkgYTpob3ZlciwgdWwudWktbmF2LW1lbnUgbGkgYTpob3ZlciwgYS5zb3B0Y2xhc3M6aG92ZXIsIGEuY2xlYXJzZWFyY2hjbGFzczpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICAgIHBhZGRpbmc6IDFweCAxcHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgdWwudWktc2VhcmNoLW1lbnUgbGksIHVsLnVpLW5hdi1tZW51IGxpIHtcclxuICAgIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgfVxyXG5cclxuLnVpLW1lbnUtaXRlbSBociB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnNlYXJjaEZpbHRlciAudWktc2VhcmNoLXRhYmxlIHRkLFxyXG4uc2VhcmNoRmlsdGVyIC51aS1zZWFyY2gtdGFibGUgdGgge1xyXG4gIGJvcmRlci10b3A6IDBweCBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2hGaWx0ZXIgLnF1ZXJ5cmVzdWx0IHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbiAgLnNlYXJjaEZpbHRlciAucXVlcnlyZXN1bHQgdHIgdGQge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4IG5vbmU7XHJcbiAgfVxyXG5cclxuLnVpLXNlYXJjaC1sYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5mcm96ZW4tZGl2LCAuZnJvemVuLWJkaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLypcclxuLnVpLWpxZ3JpZCAudWktanFncmlkLWNhcHRpb24sXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC1wYWdlcixcclxuLnVpLWpxZ3JpZCAudWktanFncmlkLXRvcHBhZ2VyLFxyXG4udWktanFncmlkIC51aS1qcWdyaWQtaHRhYmxlIHRoZWFkIHRoLFxyXG4udWktanFncmlkIC51aS11c2VyZGF0YS10b3AsXHJcbi51aS1qcWdyaWQgLnVpLXVzZXJkYXRhLWJvdHRvbSxcclxuLnVpLWpxZ3JpZCAudWktanFncmlkLWhkaXYsXHJcbi51aS1qcWRpYWxvZyAudWktanFkaWFsb2ctdGl0bGViYXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZiAwcHgsICNlMGUwZTAgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmO1xyXG59XHJcbiovXHJcbi8qIENvbHVtbiBtZW51ICovXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC1odGFibGUgLmNvbG1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC1odGFibGUgLmNvbG1lbnUtcnRsIHtcclxuICByaWdodDogYXV0bztcclxuICBsZWZ0OiAxcHg7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC1odGFibGUgLmNvbG1lbnVzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi51aS1qcWdyaWQgLnVpLWpxZ3JpZC1odGFibGUgLnVpLXRoLWRpdiB7XHJcbiAgaGVpZ2h0OiAxN3B4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmNvbHVtbi1tZW51LCAudWktc2VhcmNoLW1lbnUge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG5cclxuICAuY29sdW1uLW1lbnUgLmRpdmlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuLnVpLW1lbnUtaXRlbSAudWktY29tbW9uLXRhYmxlIC5tZW51X2ljb24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxudGQubWVudV90ZXh0IHtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4jc2VhcmNoX21lbnUgLnVpLW1lbnUtaXRlbSBkaXYge1xyXG4gIHBhZGRpbmc6IDNweCAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbiNzZWFyY2hfbWVudSAuc2VhcmNoX2J1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNTAlO1xyXG4gIHBhZGRpbmc6IDNweCAzcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfYnV0dG9ucyAuYnRuLWRlZmF1bHQ6aG92ZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgcGFkZGluZy10b3A6IDZweDtcclxufVxyXG5cclxuLnNlYXJjaF9idXR0b25zICNic19yZXNldCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfYnV0dG9ucyAjYnNfc2VhcmNoIHtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cards/cards-table/cards-table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/cards/cards-table/cards-table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\r\n\r\n  <div style=\"margin-top:20px; \">\r\n    <div class=\"col-md-6\">\r\n      <button [disabled]=\"createMode\"\r\n              (click)=\"addCard(card); $event.stopPropagation();\"\r\n              mat-raised-button\r\n              color=\"primary\"\r\n              style=\"\"\r\n              class=\"mat-button\">\r\n        Добавить препарат\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <search-cards [cards]=\"cards\"\r\n                    (filtered)=\"onFiltered($event)\"\r\n                    class=\"pull-right\">\r\n      </search-cards>\r\n    </div>\r\n  </div>\r\n\r\n  <table matSort (matSortChange)=\"sortCards($event)\"\r\n         class=\"table table-responsive\"\r\n         style=\"margin-top:20px; \">\r\n    <thead>\r\n      <tr>\r\n        <th mat-sort-header=\"name\">Название препарата</th>\r\n        <th style=\"float:right !important; margin-right: 190px !important;\">Действия</th>\r\n        <!--<th mat-sort-header=\"type\">Тип</th>\r\n        <th mat-sort-header=\"owner\">Держатель</th>\r\n        <th class=\"visible-lg\">Топливо/Услуги</th>\r\n        <th mat-sort-header=\"status\">Состояние</th>-->\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n      <ng-template ngFor let-card [ngForOf]=\"viewData\" let-i=\"index\">\r\n\r\n        <!--Обычная строка-->\r\n        <ng-container>\r\n\r\n          <tr card-row\r\n              [card]=\"card\"\r\n              (click)=\"selectCard(card)\"\r\n              class=\"material-grey-bg \"\r\n              style=\"cursor:pointer !important;\"\r\n              (cardDeleted)=\"deleteCard($event)\"></tr>\r\n\r\n        </ng-container>\r\n\r\n\r\n        <!--Карта выбрана-->\r\n        <tr class=\"material-grey-bg\">\r\n          <td colspan=\"6\"\r\n              class=\"td-container\">\r\n            <card-selected *ngIf=\"card.isSelected && !card.isEdited\"\r\n                           @ngIfAnimation\r\n                           [card]=\"card\">\r\n            </card-selected>\r\n          </td>\r\n        </tr>\r\n\r\n        <!--Карта редактируется-->\r\n        <tr class=\"material-grey-bg\">\r\n          <td colspan=\"6\"\r\n              class=\"td-container\">\r\n            <card-edit *ngIf=\"card.isEdited\"\r\n                       @ngIfAnimation\r\n                       [card]=\"card\"\r\n                       (cardEdited)=\"onCardEdited($event)\"\r\n                       (editingCanceled)=\"onEditingCanceled($event)\">\r\n            </card-edit>\r\n          </td>\r\n        </tr>\r\n\r\n      </ng-template>\r\n    </tbody>\r\n  </table>\r\n\r\n</ng-container>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/cards/cards-table/cards-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cards/cards-table/cards-table.component.ts ***!
  \************************************************************/
/*! exports provided: CardsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsTableComponent", function() { return CardsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards.service */ "./src/app/cards/cards.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations */ "./src/app/cards/animations.ts");
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui.service */ "./src/app/cards/ui.service.ts");
/* harmony import */ var _models_contract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/contract */ "./src/app/cards/models/contract.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_Drugs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/Drugs */ "./src/app/cards/models/Drugs.ts");









var notificationConfig = {
    closeButton: true,
    progressBar: true,
    timeOut: 8000
};
var CardsTableComponent = /** @class */ (function () {
    function CardsTableComponent(cardsService, uiServise) {
        this.cardsService = cardsService;
        this.uiServise = uiServise;
        this.cardsLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CardsTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.contract && changes.contract.currentValue) {
            if (this.viewData)
                this.viewData.length = 0;
            this.getDataFromServer();
        }
    };
    CardsTableComponent.prototype.ngOnInit = function () {
        this.getDataFromServer();
    };
    CardsTableComponent.prototype.selectCard = function (card) {
        card.isSelected = card.isEdited === true ? false : !card.isSelected;
    };
    CardsTableComponent.prototype.addCard = function (card) {
        var newCard = new _models_Drugs__WEBPACK_IMPORTED_MODULE_8__["Drug"]();
        newCard.isEdited = true;
        this.viewData.unshift(newCard);
    };
    CardsTableComponent.prototype.onCardEdited = function (card) {
        var i = this.viewData.indexOf(this.viewData.find(function (c) { return c.id == card.id; }));
        if (i > -1) {
            this.viewData[i] = card;
            card.isEdited = false;
        }
    };
    CardsTableComponent.prototype.deleteCard = function (card) {
        debugger;
        var i = this.viewData.indexOf(this.viewData.find(function (c) { return c.id == card.id; }));
        if (i > -1) {
            this.viewData.splice(i, 1);
        }
    };
    CardsTableComponent.prototype.onEditingCanceled = function (editedCopy) {
        var card = this.viewData.find(function (c) { return c.id == editedCopy.id; });
        card.isEdited = false;
    };
    CardsTableComponent.prototype.expandAllCards = function () {
        this.cards.forEach(function (c) { return c.isSelected = true; });
    };
    CardsTableComponent.prototype.collapseAllCards = function () {
        this.cards.forEach(function (c) { return c.isSelected = false; });
    };
    CardsTableComponent.prototype.onFiltered = function (result) {
        this.filteredData = result;
        this.viewData = this.filteredData.slice();
        if (this.sortState && this.sortState.active && this.sortState.direction !== '') {
            this.sortCards(this.sortState);
        }
    };
    CardsTableComponent.prototype.sortCards = function (sort) {
        this.sortState = sort;
        var shallowCopy;
        if (this.filteredData) {
            shallowCopy = this.filteredData.slice();
        }
        else if (this.cards) {
            shallowCopy = this.cards.slice();
        }
        if (!sort || !sort.active || sort.direction === '') {
            this.viewData = shallowCopy;
            return;
        }
        var isAsc = sort.direction === 'asc';
        //this.viewData = shallowCopy.sort((a, b) => {
        //  switch (sort.active) {
        //    case 'number': return this.compare(a.number, b.number, isAsc);
        //    case 'type': return this.compare(a.type, b.type, isAsc);
        //    case 'owner': return this.compare(a.ownerName, b.ownerName, isAsc);
        //    case 'status': return this.compare(a.status, b.status, isAsc);
        //    default: return 0;
        //  }
        //});
    };
    CardsTableComponent.prototype.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    CardsTableComponent.prototype.getDataFromServer = function () {
        var _this = this;
        this.uiServise.showSpinner();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.cardsService.getDrugs(), this.cardsService.getDiseases()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(function (_a) {
            var drugs = _a[0], diseases = _a[1];
            _this.uiServise.stopSpinner();
            _this.diseases = diseases;
            _this.handleLoadedCards(drugs);
        }, function (error) {
            _this.uiServise.stopSpinner();
        });
    };
    CardsTableComponent.prototype.handleLoadedCards = function (cards) {
        this.cards = cards;
        //this.cards.forEach(c => c.initFields(cardStatuses));
        this.viewData = this.cards.slice();
        this.cardsLoaded.emit(this.cards);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_contract__WEBPACK_IMPORTED_MODULE_6__["Contract"])
    ], CardsTableComponent.prototype, "contract", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CardsTableComponent.prototype, "isMobileView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardsTableComponent.prototype, "cardsLoaded", void 0);
    CardsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cards-table',
            template: __webpack_require__(/*! ./cards-table.component.html */ "./src/app/cards/cards-table/cards-table.component.html"),
            //providers: [CardsService],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_4__["ngIfAnimation"]
            ],
            styles: [__webpack_require__(/*! ./cards-table.component.css */ "./src/app/cards/cards-table/cards-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cards_service__WEBPACK_IMPORTED_MODULE_2__["CardsService"],
            _ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"]])
    ], CardsTableComponent);
    return CardsTableComponent;
}());



/***/ }),

/***/ "./src/app/cards/cards.module.ts":
/*!***************************************!*\
  !*** ./src/app/cards/cards.module.ts ***!
  \***************************************/
/*! exports provided: CardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsModule", function() { return CardsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _cards_table_cards_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cards-table/cards-table.component */ "./src/app/cards/cards-table/cards-table.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/cards/cards/cards.component.ts");
/* harmony import */ var _card_type_card_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./card-type/card-type.component */ "./src/app/cards/card-type/card-type.component.ts");
/* harmony import */ var _card_row_card_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./card-row/card-row.component */ "./src/app/cards/card-row/card-row.component.ts");
/* harmony import */ var _card_selected_card_selected_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./card-selected/card-selected.component */ "./src/app/cards/card-selected/card-selected.component.ts");
/* harmony import */ var _card_edit_card_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./card-edit/card-edit.component */ "./src/app/cards/card-edit/card-edit.component.ts");
/* harmony import */ var _search_cards_search_cards_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search-cards/search-cards.component */ "./src/app/cards/search-cards/search-cards.component.ts");
/* harmony import */ var _extended_search_extended_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./extended-search/extended-search.component */ "./src/app/cards/extended-search/extended-search.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _card_top_up_balance_card_top_up_balance_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./card-top-up-balance/card-top-up-balance.component */ "./src/app/cards/card-top-up-balance/card-top-up-balance.component.ts");
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ui.service */ "./src/app/cards/ui.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _limit_new_edit_limit_new_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./limit-new-edit/limit-new-edit.component */ "./src/app/cards/limit-new-edit/limit-new-edit.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/cards/notification/notification.component.ts");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./window.service */ "./src/app/cards/window.service.ts");
/* harmony import */ var _redirect_dialog_redirect_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./redirect-dialog/redirect-dialog.component */ "./src/app/cards/redirect-dialog/redirect-dialog.component.ts");
/* harmony import */ var _angular_js_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./angular-js.service */ "./src/app/cards/angular-js.service.ts");
















;












var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    CardsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_11__["CardsComponent"],
                _cards_table_cards_table_component__WEBPACK_IMPORTED_MODULE_10__["CardsTableComponent"],
                _card_type_card_type_component__WEBPACK_IMPORTED_MODULE_12__["CardTypeComponent"],
                _card_row_card_row_component__WEBPACK_IMPORTED_MODULE_13__["CardRowComponent"],
                _card_selected_card_selected_component__WEBPACK_IMPORTED_MODULE_14__["CardSelectedComponent"],
                _card_selected_card_selected_component__WEBPACK_IMPORTED_MODULE_14__["CardSelectedComponent"],
                _card_edit_card_edit_component__WEBPACK_IMPORTED_MODULE_15__["CardEditComponent"],
                _limit_new_edit_limit_new_edit_component__WEBPACK_IMPORTED_MODULE_22__["LimitNewEditComponent"],
                _search_cards_search_cards_component__WEBPACK_IMPORTED_MODULE_16__["SearchCardsComponent"],
                _extended_search_extended_search_component__WEBPACK_IMPORTED_MODULE_17__["ExtendedSearchComponent"],
                //CommonSearchComponent,
                _card_top_up_balance_card_top_up_balance_component__WEBPACK_IMPORTED_MODULE_19__["CardTopUpBalanceComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_23__["NotificationComponent"],
                _redirect_dialog_redirect_dialog_component__WEBPACK_IMPORTED_MODULE_25__["RedirectDialogComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"]
            ],
            exports: [
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_11__["CardsComponent"]
            ],
            providers: [
                { provide: 'windowObject', useValue: window },
                angular_notifier__WEBPACK_IMPORTED_MODULE_18__["NotifierService"],
                //CardsService,
                _ui_service__WEBPACK_IMPORTED_MODULE_20__["UiService"],
                _window_service__WEBPACK_IMPORTED_MODULE_24__["WindowService"],
                _angular_js_service__WEBPACK_IMPORTED_MODULE_26__["AngularJsService"]
                //{
                //  provide: HTTP_INTERCEPTORS,
                //  useClass: HttpErrorInterceptor,
                //  multi: true,
                //  deps: [ NotifierService ]
                //}
            ],
            entryComponents: [_angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSpinner"], _redirect_dialog_redirect_dialog_component__WEBPACK_IMPORTED_MODULE_25__["RedirectDialogComponent"]]
        })
    ], CardsModule);
    return CardsModule;
}());



/***/ }),

/***/ "./src/app/cards/cards.service.ts":
/*!****************************************!*\
  !*** ./src/app/cards/cards.service.ts ***!
  \****************************************/
/*! exports provided: notificationConfig, CardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationConfig", function() { return notificationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsService", function() { return CardsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_Disease__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/Disease */ "./src/app/cards/models/Disease.ts");
/* harmony import */ var _models_Drugs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/Drugs */ "./src/app/cards/models/Drugs.ts");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var json2typescript_src_json2typescript_json_convert_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! json2typescript/src/json2typescript/json-convert-enums */ "./node_modules/json2typescript/src/json2typescript/json-convert-enums.js");
/* harmony import */ var json2typescript_src_json2typescript_json_convert_enums__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(json2typescript_src_json2typescript_json_convert_enums__WEBPACK_IMPORTED_MODULE_7__);








var baseUrl = 'https://lit-lake-94488.herokuapp.com';
var getDrugsUrl = baseUrl + "/getDrugs";
var getDrugUrl = baseUrl + "/getDrug";
var getDiseasesUrl = baseUrl + "/getDiseases";
var getDiseaseUrl = baseUrl + "/getDisease";
var createDrugUrl = baseUrl + "/createDrug";
var createDiseaseUrl = baseUrl + "/createDisease";
var updateDrugUrl = baseUrl + "/updateDrug";
var updateDiseaseUrl = baseUrl + "/updateDisease";
var deleteDrugUrl = baseUrl + "/deleteDrug";
var deleteDiseaseUrl = baseUrl + "/deleteDisease";
var serverErrorMessage = 'Сервер временно недоступен, повторите позже';
var notificationConfig = {
    closeButton: true,
    progressBar: true,
    timeOut: 8000
};
var CardsService = /** @class */ (function () {
    function CardsService(http) {
        this.http = http;
        this.initConvertor();
    }
    CardsService.prototype.getRole = function () {
        return this.role;
    };
    CardsService.prototype.logInAsAdmin = function (login, password) {
        if (login === 'admin' && password === '1234') {
            this.role = 'admin';
            return true;
        }
        return false;
    };
    CardsService.prototype.logOut = function () {
        this.role = undefined;
    };
    CardsService.prototype.getDrugs = function () {
        var _this = this;
        return this.http.get("" + getDrugsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log('drugsJson:', data.drugs);
            var drugs = _this.jsonConverter.deserializeArray(data.drugs, _models_Drugs__WEBPACK_IMPORTED_MODULE_5__["Drug"]);
            console.log('drugs:', drugs);
            return drugs;
        }));
    };
    CardsService.prototype.getDrug = function (id) {
        var _this = this;
        return this.http.get(getDrugUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var drug = _this.jsonConverter.deserializeObject(data, _models_Drugs__WEBPACK_IMPORTED_MODULE_5__["Drug"]);
            console.log('drug:', drug);
            return drug;
        }));
    };
    CardsService.prototype.getDiseases = function () {
        var _this = this;
        return this.http.get("" + getDiseasesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log('diseasesJson:', data.diseases);
            var diseases = _this.jsonConverter.deserializeArray(data.diseases, _models_Disease__WEBPACK_IMPORTED_MODULE_4__["Disease"]);
            console.log('diseases:', diseases);
            return diseases;
        }));
    };
    CardsService.prototype.getDisease = function (id) {
        var _this = this;
        return this.http.get(getDiseaseUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var disease = _this.jsonConverter.deserializeObject(data, _models_Disease__WEBPACK_IMPORTED_MODULE_4__["Disease"]);
            console.log(disease);
            return disease;
        }));
    };
    CardsService.prototype.initConvertor = function () {
        this.jsonConverter = new json2typescript__WEBPACK_IMPORTED_MODULE_6__["JsonConvert"]();
        this.jsonConverter.operationMode = json2typescript__WEBPACK_IMPORTED_MODULE_6__["OperationMode"].ENABLE;
        this.jsonConverter.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
        this.jsonConverter.valueCheckingMode = json2typescript__WEBPACK_IMPORTED_MODULE_6__["ValueCheckingMode"].ALLOW_NULL;
        this.jsonConverter.propertyMatchingRule = json2typescript_src_json2typescript_json_convert_enums__WEBPACK_IMPORTED_MODULE_7__["PropertyMatchingRule"].CASE_INSENSITIVE;
    };
    CardsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CardsService);
    return CardsService;
}());



/***/ }),

/***/ "./src/app/cards/cards/cards.component.css":
/*!*************************************************!*\
  !*** ./src/app/cards/cards/cards.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-block {\r\n  float: none;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n.material-primary-bg {\r\n  background-color: #3f51b5;\r\n  color:white;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiIiwiZmlsZSI6ImNhcmRzL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWJsb2NrIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuXHJcbi5tYXRlcmlhbC1wcmltYXJ5LWJnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/cards/cards/cards.component.html":
/*!**************************************************!*\
  !*** ./src/app/cards/cards/cards.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{cardsService.role}}\r\n<div class=\"col-md-10 center-block\">\r\n\r\n  <div class=\"hpanel\">\r\n    <div class=\"panel-heading  hbuilt material-primary-bg\">\r\n      <div class=\"panel-tools\" style=\"margin-left: 20px !important;\">\r\n\r\n        <button *ngIf=\"!cardsService.role\"\r\n                (click)=\"isLogInScreen = true\"\r\n                mat-raised-button\r\n                color=\"primary\"\r\n                style=\"margin-top:4px; background-color:#7986CB\">\r\n          Войти как администратор\r\n        </button>\r\n\r\n        <button *ngIf=\"cardsService.role\"\r\n                (click)=\"logOut()\"\r\n                mat-raised-button\r\n                color=\"primary\"\r\n                style=\"margin-top:4px; background-color:#7986CB\">\r\n          <span>\r\n            Выйти из учетной записи\r\n          </span>\r\n        </button>\r\n\r\n      </div>\r\n      <div *ngIf=\"!isMobileView\"\r\n           class=\"panel-tools\">\r\n\r\n        <button *ngIf=\"!isLogInScreen\"\r\n                (click)=\"expandCards()\"\r\n                mat-raised-button\r\n                color=\"primary\"\r\n                style=\"margin-top:4px; background-color:#7986CB\">\r\n          <span>\r\n            {{ isExpanded === true ? 'Свернуть все' : 'Раскрыть все'}}\r\n          </span>\r\n        </button>\r\n\r\n      </div>\r\n      <h3 class=\"font-uppercase\">\r\n        Препараты\r\n      </h3>\r\n\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n\r\n      <cards-table *ngIf=\"!isLogInScreen\"\r\n                   [contract]=\"contract\"\r\n                   [isMobileView]=\"isMobileView\"\r\n                   (cardsLoaded)=\"onCardsLoaded($event)\">\r\n      </cards-table>\r\n\r\n      <div *ngIf=\"isLogInScreen\" class=\"col-md-7 col-md-offset-5\">\r\n\r\n        <div class=\"row\" *ngIf=\"showError\">\r\n          <div class=\"form-group col-md-12\">\r\n            <h4 style=\"color: red\"> Неверный логин или пароль</h4>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-2\">\r\n            <mat-form-field>\r\n              <input matInput\r\n                     autocomplete=\"off\"\r\n                     [(ngModel)]=\"login\"\r\n                     placeholder=\"Логин\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-2\">\r\n            <mat-form-field>\r\n              <input matInput\r\n                     autocomplete=\"off\"\r\n                     [(ngModel)]=\"password\"\r\n                     type=\"password\"\r\n                     placeholder=\"Пароль\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-12\">\r\n\r\n          <button (click)=\"logIn()\"\r\n                  mat-raised-button\r\n                  color=\"primary\">\r\n            Войти\r\n          </button>\r\n\r\n          <button (click)=\"cancelLogIn()\"\r\n                  mat-raised-button\r\n                  color=\"basic\"\r\n                  style=\"margin-left:20px;\">\r\n            <span>\r\n              Отмена\r\n            </span>\r\n          </button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/cards/cards/cards.component.ts":
/*!************************************************!*\
  !*** ./src/app/cards/cards/cards.component.ts ***!
  \************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cards_table_cards_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards-table/cards-table.component */ "./src/app/cards/cards-table/cards-table.component.ts");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window.service */ "./src/app/cards/window.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_js_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../angular-js.service */ "./src/app/cards/angular-js.service.ts");
/* harmony import */ var _cards_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cards.service */ "./src/app/cards/cards.service.ts");








var CardsComponent = /** @class */ (function () {
    function CardsComponent(windowService, angularJs, cardsService) {
        this.windowService = windowService;
        this.angularJs = angularJs;
        this.cardsService = cardsService;
        this.isExpanded = false;
        this.hasRosneftEmvCards = false;
        this.isMobileView = false;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.showError = false;
        this.isLogInScreen = false;
    }
    CardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.add(this.windowService.windowSizeChanged.subscribe(function (v) { return _this.isMobileView = v.isMobile; }));
        this.subscriptions.add(this.angularJs.contractChanged.subscribe(function (c) {
            _this.contract = c;
            _this.angularJs.disableLoadingIndicator();
        }));
    };
    CardsComponent.prototype.ngOnDestroy = function () {
        window.my.namespace.publicFunc = null;
        this.subscriptions.unsubscribe();
    };
    CardsComponent.prototype.onCardsLoaded = function (cards) {
        if (!cards || cards.length === 0)
            return;
        this.hasRosneftEmvCards = cards.some(function (c) { return c.cardGroup === 'РнРусПетрол'; });
    };
    CardsComponent.prototype.expandCards = function () {
        if (this.isExpanded) {
            this.cardsTableComponent.collapseAllCards();
            this.isExpanded = !this.isExpanded;
        }
        else {
            this.cardsTableComponent.expandAllCards();
            this.isExpanded = !this.isExpanded;
        }
    };
    CardsComponent.prototype.logIn = function () {
        var result = this.cardsService.logInAsAdmin(this.login, this.password);
        if (result === true) {
            this.cancelLogIn();
        }
        else {
            this.showError = true;
        }
    };
    CardsComponent.prototype.cancelLogIn = function () {
        this.login = undefined;
        this.password = undefined;
        this.isLogInScreen = false;
        this.showError = false;
    };
    CardsComponent.prototype.logOut = function () {
        this.cardsService.logOut();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_cards_table_cards_table_component__WEBPACK_IMPORTED_MODULE_2__["CardsTableComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _cards_table_cards_table_component__WEBPACK_IMPORTED_MODULE_2__["CardsTableComponent"])
    ], CardsComponent.prototype, "cardsTableComponent", void 0);
    CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/cards/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.css */ "./src/app/cards/cards/cards.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_window_service__WEBPACK_IMPORTED_MODULE_3__["WindowService"],
            _angular_js_service__WEBPACK_IMPORTED_MODULE_5__["AngularJsService"],
            _cards_service__WEBPACK_IMPORTED_MODULE_6__["CardsService"]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/cards/extended-search/extended-search.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/cards/extended-search/extended-search.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy9leHRlbmRlZC1zZWFyY2gvZXh0ZW5kZWQtc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/cards/extended-search/extended-search.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/cards/extended-search/extended-search.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"searchForm\"\r\n     class=\"inline-block\">\r\n\r\n  <mat-form-field style=\"width: 250px !important;\">\r\n    <mat-label>Поиск по</mat-label>\r\n    <mat-select formControlName=\"column\">\r\n      <mat-option *ngFor=\"let column of columns\" [value]=\"column.value\">{{column.name}}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n\r\n  <ng-container *ngIf=\"column.value\">\r\n\r\n    <mat-form-field>\r\n      <input matInput\r\n             formControlName=\"keyword\"\r\n             placeholder=\"Запрос\"\r\n             type=\"text\"\r\n             autocomplete=\"off\">\r\n    </mat-form-field>\r\n\r\n  </ng-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cards/extended-search/extended-search.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/cards/extended-search/extended-search.component.ts ***!
  \********************************************************************/
/*! exports provided: ExtendedSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedSearchComponent", function() { return ExtendedSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ExtendedSearchComponent = /** @class */ (function () {
    function ExtendedSearchComponent() {
        this.filtered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.columns = [
            { value: 'name', name: 'Название' },
            { value: 'pharmacodynamics', name: 'Основной механизм действия' },
            { value: 'indications', name: 'Показания' },
            { value: 'min_age', name: 'Минимальный возраст' },
            { value: 'during_pregnancy', name: 'Беременность' },
            { value: 'during_lactation', name: 'Лактация' },
            { value: 'during_old_age', name: 'Пожилой возраст' },
            { value: 'contraindications', name: 'Противопоказания' },
            { value: 'side_effects', name: 'Побочный эффект' },
            { value: 'interactions', name: 'Возможные взаимодействия' },
            { value: 'dosing', name: 'Режим дозирования' },
            { value: 'storage_conditions', name: 'Правила хранения' },
            { value: 'sales_rules', name: 'Правила отпуска' },
        ];
    }
    Object.defineProperty(ExtendedSearchComponent.prototype, "column", {
        get: function () { return this.searchForm.get('column'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedSearchComponent.prototype, "keyword", {
        get: function () { return this.searchForm.get('keyword'); },
        enumerable: true,
        configurable: true
    });
    ExtendedSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            column: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            keyword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.column.setValue(this.columns[0].value);
        this.subscriptions.add(this.searchForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function () { return _this.search(); }));
        this.subscriptions.add(this.column.valueChanges.subscribe(function () { return _this.onColumnChange(); }));
    };
    ExtendedSearchComponent.prototype.ngOnChanges = function (changes) {
        if (changes.cards && changes.cards.currentValue !== changes.cards.previousValue && !changes.cards.isFirstChange()) {
            this.search();
        }
    };
    ExtendedSearchComponent.prototype.ngOnDestroy = function () {
        this.notifyParent(this.cards);
        this.subscriptions.unsubscribe;
    };
    ExtendedSearchComponent.prototype.onColumnChange = function () {
        this.search();
    };
    ExtendedSearchComponent.prototype.search = function () {
        if (this.keyword.value) {
            var column = this.column.value;
            this.filteredData = this.filter(column, this.keyword.value);
        }
        else {
            this.filteredData = this.cards;
        }
        this.notifyParent(this.filteredData);
    };
    ExtendedSearchComponent.prototype.filter = function (column, value) {
        return this.cards.filter(function (c) {
            return c[column].includes(value);
        });
    };
    ExtendedSearchComponent.prototype.notifyParent = function (filteredData) {
        this.filtered.emit(filteredData);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ExtendedSearchComponent.prototype, "cards", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExtendedSearchComponent.prototype, "filtered", void 0);
    ExtendedSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'extended-search',
            template: __webpack_require__(/*! ./extended-search.component.html */ "./src/app/cards/extended-search/extended-search.component.html"),
            styles: [__webpack_require__(/*! ./extended-search.component.css */ "./src/app/cards/extended-search/extended-search.component.css")]
        })
    ], ExtendedSearchComponent);
    return ExtendedSearchComponent;
}());



/***/ }),

/***/ "./src/app/cards/limit-new-edit/limit-new-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/cards/limit-new-edit/limit-new-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nmat-form-field input {\r\n  color: rgba(0,0,0,.87) !important;\r\n}\r\n\r\n/*.limit-inline {\r\n  display: inline-block;\r\n  margin-right: 80px;\r\n}*/\r\n\r\n/*.goods-input {\r\n  width: 50px;\r\n}\r\n\r\n.limit-input {\r\n  width: 80px;\r\n}\r\n\r\n.unit-input {\r\n  width: 60px;\r\n}\r\n\r\n.period-input {\r\n  width: 100px;\r\n}*/\r\n\r\n@media (min-width: 992px) {\r\n  .goods-input {\r\n    width: 160px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .goods-input {\r\n    width: 200px;\r\n  }\r\n}\r\n\r\n.limit-input {\r\n  width: 100px;\r\n}\r\n\r\n.unit-input {\r\n  width: 100px;\r\n}\r\n\r\n.period-input {\r\n  width: 100px;\r\n}\r\n\r\n/*mobile*/\r\n\r\n.mobile-input{\r\n  width: 100%;\r\n}\r\n\r\n.border-top {\r\n  border-top: 2px solid #3f51b5 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzL2xpbWl0LW5ldy1lZGl0L2xpbWl0LW5ldy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTs7O0VBR0U7O0FBRUY7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBQ0Y7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFJQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQSxTQUFTOztBQUNUO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDIiwiZmlsZSI6ImNhcmRzL2xpbWl0LW5ldy1lZGl0L2xpbWl0LW5ldy1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbm1hdC1mb3JtLWZpZWxkIGlucHV0IHtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuODcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qLmxpbWl0LWlubGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogODBweDtcclxufSovXHJcblxyXG4vKi5nb29kcy1pbnB1dCB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5saW1pdC1pbnB1dCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi51bml0LWlucHV0IHtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLnBlcmlvZC1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59Ki9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmdvb2RzLWlucHV0IHtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuZ29vZHMtaW5wdXQge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4ubGltaXQtaW5wdXQge1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnVuaXQtaW5wdXQge1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnBlcmlvZC1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG5cclxuLyptb2JpbGUqL1xyXG4ubW9iaWxlLWlucHV0e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm9yZGVyLXRvcCB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzZjUxYjUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/cards/limit-new-edit/limit-new-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/cards/limit-new-edit/limit-new-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isMobileView\"\r\n     [formGroup]=\"limitForm\">\r\n\r\n  <div class=\"form-group limit-inline col-md-3 col-lg-3\">\r\n\r\n    <mat-form-field *ngIf=\"!isGroup\" class=\"goods-input\">\r\n      <mat-label>Одиночный лимит</mat-label>\r\n      <mat-select formControlName=\"includedGoods\">\r\n        <mat-option *ngFor=\"let good of availableGoods\" [value]=\"good\">\r\n          {{good.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"includedGoods.errors?.required\">\r\n        <strong>Заполните поле</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field *ngIf=\"isGroup\" class=\"goods-input\">\r\n      <mat-label>Групповой лимит</mat-label>\r\n      <mat-select formControlName=\"includedGoods\" multiple>\r\n        <mat-option *ngFor=\"let good of availableGoods\" [value]=\"good\">{{good.name}}</mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"includedGoods.errors?.required\">\r\n        <strong>Заполните поле</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group limit-inline col-md-3 col-lg-2\">\r\n\r\n    <mat-form-field class=\"limit-input\">\r\n      <input matInput\r\n             formControlName=\"limit\"\r\n             placeholder=\"Лимит\"\r\n             type=\"number\"\r\n             autocomplete=\"off\"\r\n             required>\r\n      <mat-error *ngIf=\"limit.errors?.required\">\r\n        <strong>Заполните поле</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-group limit-inline col-md-2 col-lg-2\">\r\n\r\n    <mat-form-field class=\"unit-input\">\r\n      <mat-label>Ед. изм.</mat-label>\r\n      <mat-select formControlName=\"unit\">\r\n        <mat-option *ngFor=\"let unit of availableUnits\" [value]=\"unit\">{{unit.name}}</mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"unit.errors?.required\">\r\n        <strong>Заполните поле</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-group limit-inline col-md-4 col-lg-4\">\r\n\r\n    <mat-form-field class=\"period-input\">\r\n      <mat-label>Период</mat-label>\r\n      <mat-select formControlName=\"period\">\r\n        <mat-option *ngFor=\"let period of periods\" [value]=\"period\">{{period.name}}</mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"period.errors?.required\">\r\n        <strong>Заполните поле</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <div class=\"form-group\" style=\"display:inline-block; margin-left:35px;\">\r\n      <button (click)=\"deleteLimit();\"\r\n              mat-raised-button\r\n              matTooltip=\"Удалить лимит\"\r\n              [matTooltipPosition]=\"'after'\"\r\n              class=\"mat-button mat-small btn-right\">\r\n        <i class=\"fa fa-trash\"></i>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<div *ngIf=\"isMobileView\"\r\n     [formGroup]=\"limitForm\">\r\n  <div class=\"hpanel hblue\">\r\n    <div class=\"panel-body border-top\" style=\"padding:10px;\" >\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-sm-12 m-b-xs\">\r\n          <mat-form-field *ngIf=\"!isGroup\" class=\"mobile-input\">\r\n            <mat-label>Одиночный лимит</mat-label>\r\n            <mat-select formControlName=\"includedGoods\">\r\n              <mat-option *ngFor=\"let good of availableGoods\" [value]=\"good\">\r\n                {{good.name}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"includedGoods.errors?.required\">\r\n              <strong>Заполните поле</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field *ngIf=\"isGroup\" class=\"mobile-input\">\r\n            <mat-label>Групповой лимит</mat-label>\r\n            <mat-select formControlName=\"includedGoods\" multiple>\r\n              <mat-option *ngFor=\"let good of availableGoods\" [value]=\"good\">{{good.name}}</mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"includedGoods.errors?.required\">\r\n              <strong>Заполните поле</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-sm-8 m-b-xs\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-8\">\r\n              <mat-form-field class=\"mobile-input\">\r\n                <input matInput\r\n                       formControlName=\"limit\"\r\n                       placeholder=\"Лимит\"\r\n                       type=\"number\"\r\n                       autocomplete=\"off\"\r\n                       required>\r\n                <mat-error *ngIf=\"limit.errors?.required\">\r\n                  <strong>Заполните поле</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-xs-4\">\r\n              <mat-form-field class=\"mobile-input\">\r\n                <mat-label>Ед. изм.</mat-label>\r\n                <mat-select formControlName=\"unit\">\r\n                  <mat-option *ngFor=\"let unit of availableUnits\" [value]=\"unit\">{{unit.name}}</mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"unit.errors?.required\">\r\n                  <strong>Заполните поле</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <mat-form-field class=\"mobile-input\">\r\n            <mat-label>Период</mat-label>\r\n            <mat-select formControlName=\"period\">\r\n              <mat-option *ngFor=\"let period of periods\" [value]=\"period\">{{period.name}}</mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"period.errors?.required\">\r\n              <strong>Заполните поле</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel-footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-6\">\r\n          <!--Остаток: {{group.remains}}  {{group.unit.name}}-->\r\n        </div>\r\n        <div class=\"col-xs-6\">\r\n          <button (click)=\"deleteLimit();\"\r\n                  mat-raised-button\r\n                  class=\"mat-button pull-right\">\r\n            <i class=\"fa fa-trash\"></i>\r\n            Удалить\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cards/limit-new-edit/limit-new-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/cards/limit-new-edit/limit-new-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: LimitNewEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitNewEditComponent", function() { return LimitNewEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/card */ "./src/app/cards/models/card.ts");
/* harmony import */ var _models_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/group */ "./src/app/cards/models/group.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var LimitNewEditComponent = /** @class */ (function () {
    function LimitNewEditComponent() {
        this.goodsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.limitDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isGroup = true;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
    }
    Object.defineProperty(LimitNewEditComponent.prototype, "includedGoods", {
        get: function () { return this.limitForm.get('includedGoods'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LimitNewEditComponent.prototype, "limit", {
        get: function () { return this.limitForm.get('limit'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LimitNewEditComponent.prototype, "unit", {
        get: function () { return this.limitForm.get('unit'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LimitNewEditComponent.prototype, "period", {
        get: function () { return this.limitForm.get('period'); },
        enumerable: true,
        configurable: true
    });
    LimitNewEditComponent.prototype.ngOnChanges = function (changes) {
        if (changes.group && changes.group.currentValue) {
            this.isCreated = !this.group.id;
            if (this.isCreated)
                this.isGroup = this.group.isCreatedGroupLimit;
            else
                this.isGroup = this.group.includedGoods.length > 1;
        }
    };
    LimitNewEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isCreated ? this.createFormNoModel() : this.createFormWithModel();
        this.updateAvailableGoods();
        this.updateAvailableUnits();
        this.subscriptions.add(this.includedGoods.valueChanges.subscribe(function () { return _this.handleGoodsChange(); }));
    };
    LimitNewEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    LimitNewEditComponent.prototype.createFormNoModel = function () {
        this.limitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            includedGoods: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            limit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            period: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    LimitNewEditComponent.prototype.createFormWithModel = function () {
        var _this = this;
        this.limitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            includedGoods: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.isGroup ? this.card.availableGoods.filter(function (ag) { return _this.group.includedGoods.some(function (ig) { return ag.id === ig.id; }); })
                : this.card.availableGoods.find(function (ag) { return ag.id === _this.group.includedGoods[0].id; })),
            limit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.group.limit, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.units.find(function (u) { return u.id === _this.group.unit.id; }), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            period: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.periods.find(function (u) { return u.id === _this.group.period.id; }), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    LimitNewEditComponent.prototype.handleGoodsChange = function () {
        this.group.includedGoods = this.isGroup ? this.includedGoods.value : new Array(this.includedGoods.value);
        this.updateAvailableUnits();
        this.goodsChanged.emit();
    };
    LimitNewEditComponent.prototype.updateAvailableGoods = function () {
        var _this = this;
        if (this.isGroup) {
            this.availableGoods = this.card.availableGoods.filter(function (g) {
                var isRubleGroup = g.goodsGroup.id === 12;
                var isSelectedGlobally = g.isSelected;
                var isSelectedInThisLimit = _this.group.includedGoods.some(function (ig) { return ig.id === g.id; });
                return !isRubleGroup && (!isSelectedGlobally || isSelectedInThisLimit);
            });
        }
        else {
            this.availableGoods = this.card.availableGoods.filter(function (g) {
                var isSelectedGlobally = g.isSelected;
                var isSelectedInThisLimit = (_this.group.includedGoods.length > 0 && _this.group.includedGoods[0].id === g.id);
                return !isSelectedGlobally || isSelectedInThisLimit;
            });
        }
    };
    LimitNewEditComponent.prototype.updateAvailableUnits = function () {
        this.availableUnits = this.units;
        if (!this.isGroup && this.includedGoods.value) {
            var isRubleGroup = this.includedGoods.value.goodsGroup.id === 12;
            if (isRubleGroup) {
                var rubleUnitId_1 = 3;
                this.availableUnits = this.units.filter(function (u) { return u.id === rubleUnitId_1; });
                if (this.unit.value.id !== rubleUnitId_1) {
                    this.unit.setValue(this.availableUnits.find(function (u) { return u.id === rubleUnitId_1; }));
                }
            }
        }
    };
    LimitNewEditComponent.prototype.deleteLimit = function () {
        this.limitDeleted.emit(this.group);
    };
    LimitNewEditComponent.prototype.saveChanges = function () {
        if (this.limitForm.valid) {
            this.group.includedGoods = this.isGroup ? this.includedGoods.value : new Array(this.includedGoods.value);
            this.group.limit = this.limit.value;
            this.group.unit = this.unit.value;
            this.group.period = this.period.value;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_card__WEBPACK_IMPORTED_MODULE_3__["Card"])
    ], LimitNewEditComponent.prototype, "card", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('card-group'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_group__WEBPACK_IMPORTED_MODULE_4__["Group"])
    ], LimitNewEditComponent.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], LimitNewEditComponent.prototype, "units", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], LimitNewEditComponent.prototype, "periods", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LimitNewEditComponent.prototype, "isMobileView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LimitNewEditComponent.prototype, "goodsChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LimitNewEditComponent.prototype, "limitDeleted", void 0);
    LimitNewEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'limit-new-edit',
            template: __webpack_require__(/*! ./limit-new-edit.component.html */ "./src/app/cards/limit-new-edit/limit-new-edit.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].Emulated,
            styles: [__webpack_require__(/*! ./limit-new-edit.component.css */ "./src/app/cards/limit-new-edit/limit-new-edit.component.css")]
        })
    ], LimitNewEditComponent);
    return LimitNewEditComponent;
}());



/***/ }),

/***/ "./src/app/cards/models/Disease.ts":
/*!*****************************************!*\
  !*** ./src/app/cards/models/Disease.ts ***!
  \*****************************************/
/*! exports provided: Disease */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disease", function() { return Disease; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);


var Disease = /** @class */ (function () {
    function Disease() {
        this.id = undefined;
        this.name = undefined;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('id_disease', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Disease.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('name', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Disease.prototype, "name", void 0);
    Disease = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])('Disease')
    ], Disease);
    return Disease;
}());



/***/ }),

/***/ "./src/app/cards/models/Drugs.ts":
/*!***************************************!*\
  !*** ./src/app/cards/models/Drugs.ts ***!
  \***************************************/
/*! exports provided: Drug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drug", function() { return Drug; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);


var Drug = /** @class */ (function () {
    function Drug() {
        this.id = undefined;
        this.name = undefined;
        this.pharmacodynamics = undefined;
        this.indications = undefined;
        this.min_age = undefined;
        this.during_pregnancy = undefined;
        this.during_lactation = undefined;
        this.during_old_age = undefined;
        this.contraindications = undefined;
        this.side_effects = undefined;
        this.interactions = undefined;
        this.dosing = undefined;
        this.storage_conditions = undefined;
        this.sales_rules = undefined;
        this.isSelected = false;
        this.isEdited = false;
    }
    Drug_1 = Drug;
    Drug.prototype.deepCopy = function () {
        var source = this;
        var copy = new Drug_1();
        copy = Object.assign(copy, source);
        return copy;
    };
    var Drug_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('id_drug', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Drug.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('name', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Drug.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('pharmacodynamics', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Drug.prototype, "pharmacodynamics", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('indications', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Drug.prototype, "indications", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('min_age', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Drug.prototype, "min_age", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('during_pregnancy', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Drug.prototype, "during_pregnancy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('during_lactation', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Drug.prototype, "during_lactation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('during_old_age', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Drug.prototype, "during_old_age", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('contraindications', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Drug.prototype, "contraindications", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('side_effects', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Drug.prototype, "side_effects", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('interactions', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Drug.prototype, "interactions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('dosing', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Drug.prototype, "dosing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('storage_conditions', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Drug.prototype, "storage_conditions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('sales_rules', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Drug.prototype, "sales_rules", void 0);
    Drug = Drug_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])('Drug')
    ], Drug);
    return Drug;
}());



/***/ }),

/***/ "./src/app/cards/models/card.ts":
/*!**************************************!*\
  !*** ./src/app/cards/models/card.ts ***!
  \**************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group */ "./src/app/cards/models/group.ts");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _good__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./good */ "./src/app/cards/models/good.ts");




var Card = /** @class */ (function () {
    function Card() {
        this.id = undefined;
        this.number = undefined;
        this.type = undefined;
        this.cardGroup = undefined;
        this.ownerName = undefined;
        this.status = undefined;
        this.displayName = undefined;
        this.groups = undefined;
        this.availableGoods = undefined;
        this.isEdited = false;
        this.isSelected = false;
        this.isTopUp = false;
        this.isInProc = false;
        this.statusObj = undefined;
        this.ewalletObj = undefined;
        this.groupsToDelete = [];
    }
    Card_1 = Card;
    Card.prototype.getImgSrc = function () {
        var baseUrl = "/Content/images";
        var result = "";
        if (!this.cardGroup)
            return result;
        else if (this.cardGroup.match(/газпром/i))
            result = baseUrl + "/ico_gzp.png";
        else if (this.cardGroup.match(/лукойл/i))
            result = baseUrl + "/ico_luk.png";
        else if (this.cardGroup.match(/роснефть/i) || this.cardGroup.startsWith("Рн"))
            result = baseUrl + "/ico_rosn.png";
        else if (this.cardGroup.match(/валар/i))
            result = baseUrl + "/ico_valar.png";
        return result;
    };
    ;
    Card.prototype.deepCopy = function () {
        var source = this;
        var copy = new Card_1();
        copy = Object.assign(copy, source);
        copy.availableGoods = source.availableGoods.map(function (ag) { return Object.assign(new _good__WEBPACK_IMPORTED_MODULE_3__["Good"](), ag); });
        copy.groups = source.groups.map(function (g) { return Object.assign(new _group__WEBPACK_IMPORTED_MODULE_1__["Group"](), g); });
        copy.groups.forEach(function (g) { return g.includedGoods = g.includedGoods.map(function (gg) { return Object.assign(new _good__WEBPACK_IMPORTED_MODULE_3__["Good"](), gg); }); });
        return copy;
    };
    Card.prototype.getGoodsUsageClasses = function () {
        if (!this.groups || !this.groups.length || !this.groups.length)
            return null;
        var included = [].concat.apply([], this.groups.map(function (g) { return g.includedGoods; })).map(function (g) { return g.getIconClass(); });
        var avilable = this.availableGoods.map(function (g) { return g.getIconClass(); });
        var distinctAvilable = Array.from(new Set(avilable));
        var distinctIncluded = Array.from(new Set(included));
        var result = distinctAvilable.map(function (className) {
            return {
                icon: className,
                active: distinctIncluded.some(function (cn) { return cn === className; }) ? 'active' : 'notactive'
            };
        });
        return result;
    };
    Card.prototype.markSelectedGoods = function () {
        var included = [].concat.apply([], this.groups.map(function (g) { return g.includedGoods; }));
        this.availableGoods.forEach(function (ag) {
            if (included.some(function (ig) { return ig.id == ag.id; })) {
                ag.isSelected = true;
            }
            else {
                ag.isSelected = false;
            }
        });
    };
    Card.prototype.initStatusObject = function (statuses) {
        var _this = this;
        this.statusObj = statuses.find(function (s) { return s.name === _this.status; });
    };
    Card.prototype.initInProc = function () {
        this.isInProc = this.groups.some(function (g) { return g.inProc === true || g.inProc2 === true; });
    };
    Card.prototype.initEwallet = function () {
        if (this.type === 'WR') {
            var group = this.groups.find(function (g) { return (g.ewallet && g.ewallet.length > 0); });
            if (group)
                this.ewalletObj = group.ewallet[0];
        }
    };
    Card.prototype.initFields = function (statuses) {
        this.initStatusObject(statuses);
        this.initInProc();
        this.markSelectedGoods();
        this.initEwallet();
    };
    var Card_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonProperty"])('Id', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Card.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonProperty"])('Number', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Card.prototype, "number", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonProperty"])('Type', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Card.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonProperty"])('Group', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Card.prototype, "cardGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonProperty"])('OwnerName', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Card.prototype, "ownerName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonProperty"])('Status', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Card.prototype, "status", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonProperty"])('DisplayName', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Card.prototype, "displayName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonProperty"])('Groups', [_group__WEBPACK_IMPORTED_MODULE_1__["Group"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], Card.prototype, "groups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonProperty"])('AvailableGoods', [_good__WEBPACK_IMPORTED_MODULE_3__["Good"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], Card.prototype, "availableGoods", void 0);
    Card = Card_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonObject"])('Card')
    ], Card);
    return Card;
}());



/***/ }),

/***/ "./src/app/cards/models/contract.ts":
/*!******************************************!*\
  !*** ./src/app/cards/models/contract.ts ***!
  \******************************************/
/*! exports provided: Contract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contract", function() { return Contract; });
var Contract = /** @class */ (function () {
    function Contract() {
        this.Guid = undefined;
    }
    return Contract;
}());



/***/ }),

/***/ "./src/app/cards/models/ewallet.ts":
/*!*****************************************!*\
  !*** ./src/app/cards/models/ewallet.ts ***!
  \*****************************************/
/*! exports provided: Ewallet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ewallet", function() { return Ewallet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nomen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nomen */ "./src/app/cards/models/nomen.ts");



var Ewallet = /** @class */ (function () {
    function Ewallet() {
        this.value = undefined;
        this.nomen = undefined;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('Value', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Ewallet.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('Nomen', _nomen__WEBPACK_IMPORTED_MODULE_2__["Nomen"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _nomen__WEBPACK_IMPORTED_MODULE_2__["Nomen"])
    ], Ewallet.prototype, "nomen", void 0);
    Ewallet = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])('Ewallet')
    ], Ewallet);
    return Ewallet;
}());



/***/ }),

/***/ "./src/app/cards/models/good.ts":
/*!**************************************!*\
  !*** ./src/app/cards/models/good.ts ***!
  \**************************************/
/*! exports provided: Good */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Good", function() { return Good; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _goods_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods-group */ "./src/app/cards/models/goods-group.ts");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unit */ "./src/app/cards/models/unit.ts");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_3__);




var Good = /** @class */ (function () {
    function Good() {
        this.id = undefined;
        this.name = undefined;
        this.guid = undefined;
        this.goodsGroup = undefined;
        this.unit = undefined;
        this.isSelected = false;
    }
    Good.prototype.getIconClass = function () {
        var className = "";
        var numberPattern = new RegExp(/\d+/g);
        var matches = this.name.match(numberPattern);
        if (matches && matches.length > 0) {
            if (matches[0] === '100') {
                matches[0] = '98';
            }
            className = "ai" + matches[0];
        }
        else if (this.name.toLowerCase().includes('дт')) {
            className = 'DT';
        }
        else {
            switch (this.name.toLowerCase()) {
                case "газ": return "gas";
                case "кпг": return "gas";
                case "услуги": return "shower";
                case "мойка": return "shower";
                case "сервис":
                case "шиномонтаж":
                    return "service";
            }
        }
        return className;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_3__["JsonProperty"])('Id', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Good.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_3__["JsonProperty"])('Name', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Good.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_3__["JsonProperty"])('Guid', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Good.prototype, "guid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_3__["JsonProperty"])('GoodsGroup', _goods_group__WEBPACK_IMPORTED_MODULE_1__["GoodsGroup"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _goods_group__WEBPACK_IMPORTED_MODULE_1__["GoodsGroup"])
    ], Good.prototype, "goodsGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_3__["JsonProperty"])('Unit', _unit__WEBPACK_IMPORTED_MODULE_2__["Unit"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _unit__WEBPACK_IMPORTED_MODULE_2__["Unit"])
    ], Good.prototype, "unit", void 0);
    Good = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_3__["JsonObject"])('Good')
    ], Good);
    return Good;
}());



/***/ }),

/***/ "./src/app/cards/models/goods-group.ts":
/*!*********************************************!*\
  !*** ./src/app/cards/models/goods-group.ts ***!
  \*********************************************/
/*! exports provided: GoodsGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsGroup", function() { return GoodsGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit */ "./src/app/cards/models/unit.ts");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_2__);



var GoodsGroup = /** @class */ (function () {
    function GoodsGroup() {
        this.id = undefined;
        this.ocId = undefined;
        this.name = undefined;
        this.units = undefined;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonProperty"])('Id', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GoodsGroup.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonProperty"])('OcId', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], GoodsGroup.prototype, "ocId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonProperty"])('Name', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GoodsGroup.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonProperty"])('Units', [_unit__WEBPACK_IMPORTED_MODULE_1__["Unit"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GoodsGroup.prototype, "units", void 0);
    GoodsGroup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonObject"])('GoodsGroup')
    ], GoodsGroup);
    return GoodsGroup;
}());



/***/ }),

/***/ "./src/app/cards/models/group.ts":
/*!***************************************!*\
  !*** ./src/app/cards/models/group.ts ***!
  \***************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit */ "./src/app/cards/models/unit.ts");
/* harmony import */ var _period__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./period */ "./src/app/cards/models/period.ts");
/* harmony import */ var _good__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./good */ "./src/app/cards/models/good.ts");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ewallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ewallet */ "./src/app/cards/models/ewallet.ts");






var Group = /** @class */ (function () {
    function Group(init) {
        this.id = undefined;
        this.name = undefined;
        this.limit = undefined;
        this.remains = undefined;
        this.inProc = undefined;
        this.inProc2 = undefined;
        this.canChange = undefined;
        this.isCommon = undefined;
        this.unit = undefined;
        this.period = undefined;
        this.includedGoods = undefined;
        this.ewallet = undefined;
        //@JsonProperty('AvailableGoods', [Good])
        //availableGoods: Good[] = undefined;
        this.isCreatedGroupLimit = undefined;
        this.markedAsDeleted = false;
        Object.assign(this, init);
    }
    Group.prototype.getGoodsDisplayName = function () {
        var result = this.includedGoods.map(function (g) { return g.name; }).join(', ');
        return result;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonProperty"])('Id', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Group.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonProperty"])('Name', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Group.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonProperty"])('Limit', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Group.prototype, "limit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonProperty"])('Remains', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Group.prototype, "remains", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonProperty"])('InProc', Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], Group.prototype, "inProc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonProperty"])('InProc2', Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], Group.prototype, "inProc2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonProperty"])('CanChange', Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], Group.prototype, "canChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonProperty"])('IsCommon', Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], Group.prototype, "isCommon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonProperty"])('Unit', _unit__WEBPACK_IMPORTED_MODULE_1__["Unit"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _unit__WEBPACK_IMPORTED_MODULE_1__["Unit"])
    ], Group.prototype, "unit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonProperty"])('Period', _period__WEBPACK_IMPORTED_MODULE_2__["Period"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _period__WEBPACK_IMPORTED_MODULE_2__["Period"])
    ], Group.prototype, "period", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonProperty"])('IncludedGoods', [_good__WEBPACK_IMPORTED_MODULE_3__["Good"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], Group.prototype, "includedGoods", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonProperty"])('Ewallet', [_ewallet__WEBPACK_IMPORTED_MODULE_5__["Ewallet"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], Group.prototype, "ewallet", void 0);
    Group = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonObject"])('Groups'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], Group);
    return Group;
}());



/***/ }),

/***/ "./src/app/cards/models/nomen.ts":
/*!***************************************!*\
  !*** ./src/app/cards/models/nomen.ts ***!
  \***************************************/
/*! exports provided: Nomen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nomen", function() { return Nomen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);


var Nomen = /** @class */ (function () {
    function Nomen() {
        this.id = undefined;
        this.guid = undefined;
        this.name = undefined;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('Id', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Nomen.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('Guid', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Nomen.prototype, "guid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('Name', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Nomen.prototype, "name", void 0);
    Nomen = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])('Nomen')
    ], Nomen);
    return Nomen;
}());



/***/ }),

/***/ "./src/app/cards/models/period.ts":
/*!****************************************!*\
  !*** ./src/app/cards/models/period.ts ***!
  \****************************************/
/*! exports provided: Period */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Period", function() { return Period; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);


var Period = /** @class */ (function () {
    function Period() {
        this.id = undefined;
        this.name = undefined;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('Id', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Period.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('Name', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Period.prototype, "name", void 0);
    Period = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])('Period')
    ], Period);
    return Period;
}());



/***/ }),

/***/ "./src/app/cards/models/unit.ts":
/*!**************************************!*\
  !*** ./src/app/cards/models/unit.ts ***!
  \**************************************/
/*! exports provided: Unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_1__);


var Unit = /** @class */ (function () {
    function Unit() {
        this.id = undefined;
        this.name = undefined;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('Id', Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], Unit.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonProperty"])('Name', String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Unit.prototype, "name", void 0);
    Unit = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(json2typescript__WEBPACK_IMPORTED_MODULE_1__["JsonObject"])('Unit')
    ], Unit);
    return Unit;
}());



/***/ }),

/***/ "./src/app/cards/notification/notification.component.css":
/*!***************************************************************!*\
  !*** ./src/app/cards/notification/notification.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/cards/notification/notification.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cards/notification/notification.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <div class=\"hpanel\">\r\n      <div class=\"panel-heading hbuilt h-bg-yellow\">\r\n        <div class=\"panel-tools\">\r\n          <a class=\"showhide\"><i class=\"fa fa-chevron-up text-white\"></i></a>\r\n          <a class=\"closebox\"><i class=\"fa fa-times text-white\"></i></a>\r\n        </div>\r\n        <span class=\"font-uppercase text-white\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          Уведомление\r\n        </span>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <blockquote>\r\n          <p>\r\n            Обращаем Ваше внимание, что мы запустили <a href=\"/Rosneft/Emv\" target=\"_blank\">сервис</a> самостоятельной проверки состояния карт Роснефть, остатков лимитов и балансов кошельков по ним.\r\n          </p>\r\n          <p>\r\n            C помощью сервиса ваши водители смогут быстро и удобно проверить актуальное состояние карты с любого мобильного устройства.\r\n          </p>\r\n        </blockquote>\r\n      </div>\r\n      <div class=\"panel-footer\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cards/notification/notification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cards/notification/notification.component.ts ***!
  \**************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/cards/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/cards/notification/notification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/cards/redirect-dialog/redirect-dialog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/cards/redirect-dialog/redirect-dialog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-content {\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  color: #777;\r\n}\r\n\r\n.margin-bottom{\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzL3JlZGlyZWN0LWRpYWxvZy9yZWRpcmVjdC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJjYXJkcy9yZWRpcmVjdC1kaWFsb2cvcmVkaXJlY3QtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuLm1hcmdpbi1ib3R0b217XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/cards/redirect-dialog/redirect-dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/cards/redirect-dialog/redirect-dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <p class=\"dialog-content \">\r\n    Редактирование карт по данному договору осуществляется в другом окне.\r\n  </p>\r\n</div>\r\n<div mat-dialog-actions align=\"center\" class=\"margin-bottom\">\r\n  <a mat-raised-button\r\n     color=\"primary\"\r\n     href=\"{{data.link}}\"\r\n     target=\"_blank\">\r\n    Перейти\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cards/redirect-dialog/redirect-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/cards/redirect-dialog/redirect-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: RedirectDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectDialogComponent", function() { return RedirectDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var RedirectDialogComponent = /** @class */ (function () {
    function RedirectDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    RedirectDialogComponent.prototype.ngOnInit = function () {
    };
    RedirectDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'redirect-dialog',
            template: __webpack_require__(/*! ./redirect-dialog.component.html */ "./src/app/cards/redirect-dialog/redirect-dialog.component.html"),
            styles: [__webpack_require__(/*! ./redirect-dialog.component.css */ "./src/app/cards/redirect-dialog/redirect-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], RedirectDialogComponent);
    return RedirectDialogComponent;
}());



/***/ }),

/***/ "./src/app/cards/search-cards/search-cards.component.css":
/*!***************************************************************!*\
  !*** ./src/app/cards/search-cards/search-cards.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-type-btn {\r\n  margin-top: 15px;\r\n  margin-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzL3NlYXJjaC1jYXJkcy9zZWFyY2gtY2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiY2FyZHMvc2VhcmNoLWNhcmRzL3NlYXJjaC1jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC10eXBlLWJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/cards/search-cards/search-cards.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cards/search-cards/search-cards.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--<ng-container>\r\n  <common-search [cards]=\"cards\"\r\n                 (filtered)=\"onCommonFiltered($event)\">\r\n  </common-search>\r\n</ng-container>-->\r\n\r\n<ng-container *ngIf=\"extendedSearch\">\r\n  <extended-search [cards]=\"commonFilterOutput\"\r\n                   (filtered)=\"onExtendedFiltered($event)\">\r\n  </extended-search>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/cards/search-cards/search-cards.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cards/search-cards/search-cards.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCardsComponent", function() { return SearchCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _extended_search_extended_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extended-search/extended-search.component */ "./src/app/cards/extended-search/extended-search.component.ts");



var SearchCardsComponent = /** @class */ (function () {
    function SearchCardsComponent() {
        this.filtered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.extendedSearch = true;
    }
    SearchCardsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.cards && changes.cards.currentValue !== changes.cards.previousValue) {
            this.commonFilterOutput = this.cards;
        }
    };
    SearchCardsComponent.prototype.onCommonFiltered = function (filteredData) {
        this.commonFilterOutput = filteredData;
        this.notifyParent(this.commonFilterOutput);
    };
    SearchCardsComponent.prototype.onExtendedFiltered = function (filteredData) {
        this.extendedFilterOutput = filteredData;
        this.notifyParent(this.extendedFilterOutput);
    };
    SearchCardsComponent.prototype.notifyParent = function (filteredData) {
        this.filtered.emit(filteredData);
    };
    SearchCardsComponent.prototype.handleModeChange = function () {
        //this.extendedSearch = !this.extendedSearch;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SearchCardsComponent.prototype, "cards", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchCardsComponent.prototype, "filtered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_extended_search_extended_search_component__WEBPACK_IMPORTED_MODULE_2__["ExtendedSearchComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _extended_search_extended_search_component__WEBPACK_IMPORTED_MODULE_2__["ExtendedSearchComponent"])
    ], SearchCardsComponent.prototype, "extendedSearchComponent", void 0);
    SearchCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'search-cards',
            template: __webpack_require__(/*! ./search-cards.component.html */ "./src/app/cards/search-cards/search-cards.component.html"),
            styles: [__webpack_require__(/*! ./search-cards.component.css */ "./src/app/cards/search-cards/search-cards.component.css")]
        })
    ], SearchCardsComponent);
    return SearchCardsComponent;
}());



/***/ }),

/***/ "./src/app/cards/ui.service.ts":
/*!*************************************!*\
  !*** ./src/app/cards/ui.service.ts ***!
  \*************************************/
/*! exports provided: UiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiService", function() { return UiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _redirect_dialog_redirect_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redirect-dialog/redirect-dialog.component */ "./src/app/cards/redirect-dialog/redirect-dialog.component.ts");






var UiService = /** @class */ (function () {
    function UiService(overlay, dialog) {
        this.overlay = overlay;
        this.dialog = dialog;
        this.spinnerTopRef = this.cdkSpinnerCreate();
    }
    UiService.prototype.showSpinner = function () {
        console.log("attach");
        this.spinnerTopRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"]));
    };
    UiService.prototype.stopSpinner = function () {
        console.log("dispose");
        this.spinnerTopRef.detach();
    };
    UiService.prototype.cdkSpinnerCreate = function () {
        return this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'dark-backdrop',
            positionStrategy: this.overlay.position()
                .global()
                .centerHorizontally()
                .centerVertically()
        });
    };
    UiService.prototype.openDialog = function (link) {
        this.dialog.open(_redirect_dialog_redirect_dialog_component__WEBPACK_IMPORTED_MODULE_5__["RedirectDialogComponent"], {
            width: '470px',
            data: { link: link }
        });
    };
    UiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], UiService);
    return UiService;
}());



/***/ }),

/***/ "./src/app/cards/window.service.ts":
/*!*****************************************!*\
  !*** ./src/app/cards/window.service.ts ***!
  \*****************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




;
var WindowService = /** @class */ (function () {
    function WindowService(window) {
        var _this = this;
        this.window = window;
        this.windowSizeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            width: this.window.innerWidth,
            height: this.window.innerHeight,
            isMobile: this.window.innerWidth < 992
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) { return ({
            width: event.currentTarget['innerWidth'],
            height: event.currentTarget['innerHeight'],
            isMobile: event.currentTarget['innerWidth'] < 992
        }); })).subscribe(function (windowSize) {
            _this.windowSizeChanged.next(windowSize);
        });
    }
    ;
    WindowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('windowObject')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Window])
    ], WindowService);
    return WindowService;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/pipes/range.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/range.pipe.ts ***!
  \********************************************/
/*! exports provided: RangePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePipe", function() { return RangePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RangePipe = /** @class */ (function () {
    function RangePipe() {
    }
    RangePipe.prototype.transform = function (value) {
        return (new Array(value)).fill(1);
    };
    RangePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'range'
        })
    ], RangePipe);
    return RangePipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_range_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/range.pipe */ "./src/app/shared/pipes/range.pipe.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var customNotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12
        },
        vertical: {
            position: 'top',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        //autoHide: 10000,
        //onClick: 'hide',
        //onMouseover: 'pauseAutoHide',
        autoHide: false,
        onClick: false,
        onMouseover: false,
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pipes_range_pipe__WEBPACK_IMPORTED_MODULE_3__["RangePipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierModule"].withConfig(customNotifierOptions),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot()
            ],
            exports: [
                _pipes_range_pipe__WEBPACK_IMPORTED_MODULE_3__["RangePipe"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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

module.exports = __webpack_require__(/*! C:\Projects\Cursach\Cursach\Cursach\angularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map