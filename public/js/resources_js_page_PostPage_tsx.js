"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_page_PostPage_tsx"],{

/***/ "./resources/js/components/post/PostPageJSXElement.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/post/PostPageJSXElement.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _model_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/Post */ "./resources/js/model/Post.ts");
/* harmony import */ var _css_Post_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../css/Post.css */ "./resources/css/Post.css");
/* harmony import */ var _title_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../title-box */ "./resources/js/components/title-box.tsx");
/* harmony import */ var _LoadingAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoadingAnimation */ "./resources/js/components/LoadingAnimation.tsx");
/* harmony import */ var _NotAvailable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NotAvailable */ "./resources/js/components/NotAvailable.tsx");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/User */ "./resources/js/model/User.ts");
/* harmony import */ var _model_File__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/File */ "./resources/js/model/File.ts");
/* harmony import */ var _utilities_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/config */ "./resources/js/utilities/config.tsx");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _renderer_SyntaxHighlighter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../renderer/SyntaxHighlighter */ "./resources/js/components/renderer/SyntaxHighlighter.tsx");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};














var PostPageJSXElement = function PostPageJSXElement(props) {
  var unknownUser = new _model_User__WEBPACK_IMPORTED_MODULE_7__.default("unknown", "Unknown User", "unknown");
  var loadingPost = new _model_Post__WEBPACK_IMPORTED_MODULE_2__.default("Loading post...", "", "");
  var blankPost = new _model_Post__WEBPACK_IMPORTED_MODULE_2__.default("This post isn't available", "", "");
  var defaultCover = new _model_File__WEBPACK_IMPORTED_MODULE_8__.default("default-cover", _utilities_config__WEBPACK_IMPORTED_MODULE_9__.default.getTitleBoxDefaultBackground());
  var slug = props.slug,
      postService = props.postService,
      userService = props.userService,
      fileService = props.fileService;

  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    return loadingPost;
  }),
      post = _a[0],
      setPost = _a[1];

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    return unknownUser;
  }),
      user = _b[0],
      setUser = _b[1];

  var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LoadingAnimation__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0);
  }),
      content = _c[0],
      setContent = _c[1];

  var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    return defaultCover;
  }),
      cover = _d[0],
      setCover = _d[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    postService.getPost(slug, function (fetchedPost) {
      if (!fetchedPost) {
        setPost(blankPost);

        var blankContent = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NotAvailable__WEBPACK_IMPORTED_MODULE_6__.default, {
          text: "This page isn't available"
        }, void 0);

        setContent(blankContent);
        return;
      }

      setPost(fetchedPost);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (post == loadingPost) return;
    userService.getUser(post.getAuthor() || "", function (fetchedUser) {
      if (!fetchedUser) return;
      setUser(fetchedUser);
    });
    fileService.getFile(post.getCoverFileName(), function (fetchedCover) {
      if (!fetchedCover) return;
      setCover(fetchedCover);
    });
  }, [post]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (user == unknownUser) return;

    var properContent = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
      className: "post-content-container"
    }, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({
        className: "post-content"
      }, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", __assign({
          className: "post-content-title"
        }, {
          children: post.getTitle()
        }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", __assign({
          className: "post-content-info"
        }, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({
            className: "not-highlighted"
          }, {
            children: "Created by"
          }), void 0), " ", user.getUserName(), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __assign({
            className: "not-highlighted"
          }, {
            children: "on"
          }), void 0), " ", post.getLocalDateString()]
        }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_markdown__WEBPACK_IMPORTED_MODULE_10___default()), {
          children: post.getMarkdown(),
          renderers: {
            code: _renderer_SyntaxHighlighter__WEBPACK_IMPORTED_MODULE_11__.default
          }
        }, void 0)]
      }), void 0)
    }), void 0);

    setContent(properContent);
  }, [user]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_title_box__WEBPACK_IMPORTED_MODULE_4__.default, {
      backgroundURL: cover.getUrl(),
      title: post.getTitle()
    }, void 0), content]
  }, void 0);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPageJSXElement);

/***/ }),

/***/ "./resources/js/components/renderer/SyntaxHighlighter.tsx":
/*!****************************************************************!*\
  !*** ./resources/js/components/renderer/SyntaxHighlighter.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/prism.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/prism */ "./node_modules/react-syntax-highlighter/dist/esm/styles/prism/material-oceanic.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};





var SyntaxHighlighter = function SyntaxHighlighter(_a) {
  var language = _a.language,
      value = _a.value;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__.default, __assign({
    language: language,
    style: react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_2__.default,
    customStyle: preStyles,
    wrapLines: true,
    showLineNumbers: true
  }, {
    children: value
  }), void 0);
};

var preStyles = {
  fontSize: ".8em"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyntaxHighlighter);

/***/ }),

/***/ "./resources/js/components/title-box.tsx":
/*!***********************************************!*\
  !*** ./resources/js/components/title-box.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _css_title_box_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/title-box.css */ "./resources/css/title-box.css");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




var TitleBox = function TitleBox(props) {
  var title = props.title,
      backgroundURL = props.backgroundURL;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({
    style: {
      backgroundImage: "url(" + backgroundURL + ")",
      backgroundPosition: "center",
      backgroundSize: "cover"
    },
    className: "title-box-container"
  }, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", __assign({
      className: "title-box-post-title"
    }, {
      children: title
    }), void 0)
  }), void 0);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleBox);

/***/ }),

/***/ "./resources/js/model/File.ts":
/*!************************************!*\
  !*** ./resources/js/model/File.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var File = function () {
  function File(file_name, url) {
    this.file_name = file_name;
    this.url = url;
  }

  File.prototype.getFileName = function () {
    return this.file_name;
  };

  File.prototype.getUrl = function () {
    return this.url;
  };

  return File;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (File);

/***/ }),

/***/ "./resources/js/model/Post.ts":
/*!************************************!*\
  !*** ./resources/js/model/Post.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Post = function () {
  function Post(title, dateISOFormatString, coverFileName, postOptionalAttributes) {
    this.title = title;
    this.dateISOFormatString = dateISOFormatString;
    this.coverFileName = coverFileName;
    this.postOptionalAttributes = postOptionalAttributes;
  }

  Post.prototype.getTitle = function () {
    return this.title;
  };

  Post.prototype.getDateISOFormatString = function () {
    return this.dateISOFormatString;
  };

  Post.prototype.getLocalDateString = function () {
    return new Date(this.getDateISOFormatString()).toLocaleString();
  };

  Post.prototype.getCoverFileName = function () {
    return this.coverFileName;
  };

  Post.prototype.getDescription = function () {
    var _a;

    return (_a = this.postOptionalAttributes) === null || _a === void 0 ? void 0 : _a.description;
  };

  Post.prototype.getSlug = function () {
    var _a;

    return (_a = this.postOptionalAttributes) === null || _a === void 0 ? void 0 : _a.slug;
  };

  Post.prototype.getAuthor = function () {
    var _a;

    return (_a = this.postOptionalAttributes) === null || _a === void 0 ? void 0 : _a.author;
  };

  Post.prototype.getMarkdown = function () {
    var _a;

    if ((_a = this.postOptionalAttributes) === null || _a === void 0 ? void 0 : _a.markdown) return this.postOptionalAttributes.markdown;
    return "<h1>No content available</h1>";
  };

  Post.prototype.getURL = function () {
    if (!this.getSlug()) return this.getSlug();
    return "/post/" + this.getSlug();
  };

  Post.prototype.getCoverURL = function () {
    var _a;

    return (_a = this.postOptionalAttributes) === null || _a === void 0 ? void 0 : _a.coverUrl;
  };

  return Post;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }),

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

/***/ "./resources/js/page/PostPage.tsx":
/*!****************************************!*\
  !*** ./resources/js/page/PostPage.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_APIv2PostService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/APIv2PostService */ "./resources/js/service/APIv2PostService.ts");
/* harmony import */ var _service_APIv2UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/APIv2UserService */ "./resources/js/service/APIv2UserService.ts");
/* harmony import */ var _components_post_PostPageJSXElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/post/PostPageJSXElement */ "./resources/js/components/post/PostPageJSXElement.tsx");
/* harmony import */ var _service_APIv2FileService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/APIv2FileService */ "./resources/js/service/APIv2FileService.ts");





var PostPage = function PostPage(_a) {
  var match = _a.match;
  var postService = new _service_APIv2PostService__WEBPACK_IMPORTED_MODULE_0__.default();
  var userService = new _service_APIv2UserService__WEBPACK_IMPORTED_MODULE_1__.default();
  var fileService = new _service_APIv2FileService__WEBPACK_IMPORTED_MODULE_3__.default();
  return (0,_components_post_PostPageJSXElement__WEBPACK_IMPORTED_MODULE_2__.default)({
    postService: postService,
    userService: userService,
    fileService: fileService,
    slug: match.params.slug
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);

/***/ }),

/***/ "./resources/js/service/APIv2FileService.ts":
/*!**************************************************!*\
  !*** ./resources/js/service/APIv2FileService.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/File */ "./resources/js/model/File.ts");
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



var APIv2FileService = function () {
  function APIv2FileService() {}

  APIv2FileService.prototype.getFile = function (file_name, callback) {
    return __awaiter(this, void 0, void 0, function () {
      var response, file, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);

            return [4
            /*yield*/
            , fetch("/api/file/" + file_name)];

          case 1:
            response = _a.sent();
            if (!response.ok) throw new Error("Error");
            return [4
            /*yield*/
            , response.json()];

          case 2:
            file = _a.sent();
            callback(new _model_File__WEBPACK_IMPORTED_MODULE_0__.default(file.file_name, file.url));
            return [3
            /*break*/
            , 4];

          case 3:
            error_1 = _a.sent();
            callback(undefined);
            console.error("APIv2FileService.getFile(): Unable to fetch data from API");
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

  return APIv2FileService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIv2FileService);

/***/ }),

/***/ "./resources/js/service/APIv2PostService.ts":
/*!**************************************************!*\
  !*** ./resources/js/service/APIv2PostService.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Post */ "./resources/js/model/Post.ts");
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



var APIv2PostService = function () {
  function APIv2PostService() {}

  APIv2PostService.prototype.getListPosts = function (callback) {
    return __awaiter(this, void 0, void 0, function () {
      var response, posts, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);

            return [4
            /*yield*/
            , fetch("/api/posts")];

          case 1:
            response = _a.sent();
            return [4
            /*yield*/
            , response.json()];

          case 2:
            posts = _a.sent();
            if (!response.ok) throw new Error("Error");
            callback(posts.map(function (post) {
              return new _model_Post__WEBPACK_IMPORTED_MODULE_0__.default(post.title, post.created_at, "", {
                description: post.description,
                slug: post.slug,
                coverUrl: post.cover_url
              });
            }));
            return [3
            /*break*/
            , 4];

          case 3:
            error_1 = _a.sent();
            callback([]);
            console.error("APIv2PostService.getListPosts(): Unable to fetch data from API");
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

  APIv2PostService.prototype.getPost = function (slug, callback) {
    return __awaiter(this, void 0, void 0, function () {
      var response, post, error_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);

            return [4
            /*yield*/
            , fetch("/api/post/" + slug)];

          case 1:
            response = _a.sent();
            if (!response.ok) throw new Error("Error");
            return [4
            /*yield*/
            , response.json()];

          case 2:
            post = _a.sent();
            callback(new _model_Post__WEBPACK_IMPORTED_MODULE_0__.default(post.title, post.created_at, post.cover_file_name, {
              author: post.user_id,
              markdown: post.markdown
            }));
            return [3
            /*break*/
            , 4];

          case 3:
            error_2 = _a.sent();
            callback(undefined);
            console.error("APIv2PostService.getPost(): Unable to fetch data from API");
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

  return APIv2PostService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIv2PostService);

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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/css/Post.css":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/css/Post.css ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".post-content-container {\n    background: var(--card-background);\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    transition: background var(--transition-delay);\n    border-radius: 10px;\n    margin-top: 6vh;\n    display: flex;\n    min-height: 83vh;\n    padding: 2.5em;\n}\n\n.post-content {\n    width: 100%;\n    color: var(--main-font-color);\n    transition: color var(--transition-delay);\n}\n\n.post-content img {\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n}\n\n.post-content-title {\n    font-size: 28px;\n    font-weight: 300;\n    margin-bottom: 0;\n    margin-top: 0;\n}\n\n.post-content-info {\n    margin-top: 8px;\n    font-weight: 500;\n}\n\n.not-highlighted {\n    opacity: 0.8;\n    font-weight: 400;\n}\n\npre {\n    overflow-x: scroll;\n}\n\n@media screen and (max-width: 768px) {\n    .post-content-container {\n        margin-top: 0;\n        border: none;\n        border-radius: 0;\n    }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/css/title-box.css":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/css/title-box.css ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title-box-container {\n    position: relative;\n    top: 0;\n    display: flex;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);\n    align-items: center;\n    padding-left: 5%;\n    padding-right: 5%;\n    height: 30vh;\n    margin: auto;\n    border-radius: 15px;\n}\n\n.title-box-post-title {\n    color: white;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 36px;\n    font-weight: 300;\n    text-shadow: 0 0 5px rgb(47, 36, 75);\n    transition: font-size 0.5s;\n}\n\n@media screen and (max-width: 768px) {\n    .title-box-container {\n        border-radius: 0px;\n        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);\n    }\n\n    .title-box-post-title {\n        font-size: 28px;\n    }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/css/Post.css":
/*!********************************!*\
  !*** ./resources/css/Post.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Post_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Post.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/css/Post.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Post_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Post_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/css/title-box.css":
/*!*************************************!*\
  !*** ./resources/css/title-box.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_title_box_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./title-box.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/css/title-box.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_title_box_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_title_box_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);