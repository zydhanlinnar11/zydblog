"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_page_admin_Admin_tsx"],{

/***/ "./resources/js/model/User.ts":
/*!************************************!*\
  !*** ./resources/js/model/User.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var User = function () {
  function User(user_id, name, user_name) {
    this.user_id = user_id;
    this.name = name;
    this.user_name = user_name;
  }

  User.prototype.getId = function () {
    return this.user_id;
  };

  User.prototype.getName = function () {
    return this.name;
  };

  User.prototype.getUserName = function () {
    return this.user_name;
  };

  return User;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./resources/js/page/admin/Admin.tsx":
/*!*******************************************!*\
  !*** ./resources/js/page/admin/Admin.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/User */ "./resources/js/model/User.ts");
/* harmony import */ var _service_APIv2UserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/APIv2UserService */ "./resources/js/service/APIv2UserService.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};






var Admin = function Admin() {
  var noUser = new _model_User__WEBPACK_IMPORTED_MODULE_2__.default("", "", "");

  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    return noUser;
  }),
      user = _a[0],
      setUser = _a[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var authenticatedUser;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , new _service_APIv2UserService__WEBPACK_IMPORTED_MODULE_3__.default().getAuthenticatedUser()];

            case 1:
              authenticatedUser = _a.sent();
              if (authenticatedUser) setUser(authenticatedUser);
              window.open("/login", "_self");
              console.log(authenticatedUser);
              return [2
              /*return*/
              ];
          }
        });
      });
    })();
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}, void 0);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);

/***/ }),

/***/ "./resources/js/service/APIv2UserService.ts":
/*!**************************************************!*\
  !*** ./resources/js/service/APIv2UserService.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/User */ "./resources/js/model/User.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};



var APIv2UserService = function () {
  function APIv2UserService() {}

  APIv2UserService.prototype.getUser = function (id, callback) {
    return __awaiter(this, void 0, void 0, function () {
      var response, user, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);

            return [4
            /*yield*/
            , fetch("/api/user/" + id)];

          case 1:
            response = _a.sent();
            if (!response.ok) throw new Error("Error");
            return [4
            /*yield*/
            , response.json()];

          case 2:
            user = _a.sent();
            callback(new _model_User__WEBPACK_IMPORTED_MODULE_0__.default(id, user.name, user.username));
            return [3
            /*break*/
            , 4];

          case 3:
            error_1 = _a.sent();
            callback(undefined);
            console.error("APIv2UserService.getUser(): Unable to fetch data from API");
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  APIv2UserService.prototype.getAuthenticatedUser = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response, json, error_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);

            return [4
            /*yield*/
            , fetch("/api/user", {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                Accept: "application/json"
              }
            })];

          case 1:
            response = _a.sent();
            return [4
            /*yield*/
            , response.json()];

          case 2:
            json = _a.sent();
            if (response.status == 401) return [2
            /*return*/
            , null];
            return [2
            /*return*/
            , new _model_User__WEBPACK_IMPORTED_MODULE_0__.default(json.id, json.name, json.username)];

          case 3:
            error_2 = _a.sent();
            console.error(error_2);
            return [2
            /*return*/
            , null];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return APIv2UserService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIv2UserService);

/***/ })

}]);