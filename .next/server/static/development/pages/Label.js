module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@shopify/polaris/styles.css":
/*!**************************************************!*\
  !*** ./node_modules/@shopify/polaris/styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Inputbox.js":
/*!***************************!*\
  !*** ./pages/Inputbox.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/ActionCreator */ "./redux/ActionCreator.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const mapStateToProps = state => {
  return {
    Weight: state.inputReducer.Weight,
    Calories: state.inputReducer.Calories,
    TotalFat: state.inputReducer.TotalFat,
    SaturatedFat: state.inputReducer.SaturatedFat,
    TransFat: state.inputReducer.TransFat,
    Cholesterol: state.inputReducer.Cholesterol,
    Sodium: state.inputReducer.Sodium,
    Carbohydrate: state.inputReducer.Carbohydrate,
    Fiber: state.inputReducer.Fiber,
    Sugars: state.inputReducer.Sugars,
    AddedSugars: state.inputReducer.AddedSugars,
    Protein: state.inputReducer.Protein,
    A: state.inputReducer.A,
    C: state.inputReducer.C,
    D: state.inputReducer.D,
    Calcium: state.inputReducer.Calcium,
    Iron: state.inputReducer.Iron,
    Potassium: state.inputReducer.Potassium
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setWeight: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setWeight"])(event)),
    setCalories: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setCalories"])(event)),
    setTotalFat: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setTotalFat"])(event)),
    setSaturatedFat: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setSaturatedFat"])(event)),
    setTransFat: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setTransFat"])(event)),
    setCholesterol: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setCholesterol"])(event)),
    setSodium: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setSodium"])(event)),
    setCarbohydrate: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setCarbohydrate"])(event)),
    setFiber: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setFiber"])(event)),
    setSugars: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setSugars"])(event)),
    setAddedSugars: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setAddedSugars"])(event)),
    setProtein: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setProtein"])(event)),
    setA: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setA"])(event)),
    setC: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setC"])(event)),
    setD: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setD"])(event)),
    setCalcium: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setCalcium"])(event)),
    setIron: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setIron"])(event)),
    setPotassium: event => dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_3__["setPotassium"])(event))
  };
};

class Inputbox extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "componentDidMount", () => {
      console.log('comdidmount');
    });
  }

  render() {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      className: "Inputbox"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["FormLayout"], {
      className: "inputform"
    }, __jsx("p", null, __jsx("label", null, "Serving Weight"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setWeight,
      value: this.props.Weight,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Calories"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setCalories,
      value: this.props.Calories,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Total Fat"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setTotalFat,
      value: this.props.TotalFat,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Saturated Fat"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setSaturatedFat,
      value: this.props.SaturatedFat,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Trans Fat"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setTransFat,
      value: this.props.TransFat,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Cholesterol"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setCholesterol,
      value: this.props.Cholesterol,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Sodium"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setSodium,
      value: this.props.Sodium,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Carbohydrate"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setCarbohydrate,
      value: this.props.Carbohydrate,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Fiber"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setFiber,
      value: this.props.Fiber,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Sugars"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setSugars,
      value: this.props.Sugars,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Added Sugars"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setAddedSugars,
      value: this.props.AddedSugars,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Protein"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setProtein,
      value: this.props.Protein,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Vitamin A"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setA,
      value: this.props.A,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Vitamin C"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setC,
      value: this.props.C,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Vitamin D"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setD,
      value: this.props.D,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Calcium"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setCalcium,
      value: this.props.Calcium,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Iron"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setIron,
      value: this.props.Iron,
      type: "number"
    })), __jsx("p", null, __jsx("label", null, "Potassium"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
      className: "inputfield",
      onChange: this.props.setPotassium,
      value: this.props.Potassium,
      type: "number"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Inputbox));

/***/ }),

/***/ "./pages/Label.js":
/*!************************!*\
  !*** ./pages/Label.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Inputbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inputbox */ "./pages/Inputbox.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./View */ "./pages/View.js");
/* harmony import */ var _Nutrition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nutrition */ "./pages/Nutrition.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Label() {
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], null, __jsx("div", {
    className: "title"
  }, __jsx("h1", null, "Vue Nutrition Label")), __jsx("div", {
    className: "content"
  }, __jsx(_Inputbox__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_View__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_Nutrition__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./pages/Nutrition.js":
/*!****************************!*\
  !*** ./pages/Nutrition.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const mapStateToProps = state => {
  return {
    Weight: state.inputReducer.Weight,
    Calories: state.inputReducer.Calories,
    TotalFat: state.inputReducer.TotalFat,
    SaturatedFat: state.inputReducer.SaturatedFat,
    TransFat: state.inputReducer.TransFat,
    Cholesterol: state.inputReducer.Cholesterol,
    Sodium: state.inputReducer.Sodium,
    Carbohydrate: state.inputReducer.Carbohydrate,
    Fiber: state.inputReducer.Fiber,
    Sugars: state.inputReducer.Sugars,
    AddedSugars: state.inputReducer.AddedSugars,
    Protein: state.inputReducer.Protein,
    A: state.inputReducer.A,
    C: state.inputReducer.C,
    D: state.inputReducer.D,
    Calcium: state.inputReducer.Calcium,
    Iron: state.inputReducer.Iron,
    Potassium: state.inputReducer.Potassium
  };
};

class Nutrition extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      units: 1
    });
  }

  render() {
    return __jsx("div", {
      className: "Nutrition"
    }, __jsx("div", {
      itemtype: "http://schema.org/NutritionInformation",
      className: "nf uk"
    }, __jsx("div", {
      className: "nf-title"
    }, "Nutrition"), __jsx("table", null, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Typical Values"), __jsx("th", null, "Per 100g"), __jsx("th", null, __jsx("input", {
      type: "text",
      "data-role": "none",
      onChange: event => this.setState({
        units: event.target.value
      }),
      value: this.state.units,
      "aria-label": "Change the Quantity Textbox",
      className: "nf-modifier-field"
    }), "serving (", this.state.Weight, ")"), " ", __jsx("th", null, "%*(", this.state.Weight, ")"))), __jsx("tbody", null, __jsx("tr", null, __jsx("td", null, "Energy"), __jsx("td", null, " 1094kj"), " ", __jsx("td", null, " 2189kj"), __jsx("td", null)), " ", __jsx("tr", null, __jsx("td", null), " ", __jsx("td", {
      itemprop: "calories"
    }, " 262kcal"), __jsx("td", {
      itemprop: "calories"
    }, " 523kcal"), " ", __jsx("td", null, " 26%")), " ", __jsx("tr", null, __jsx("td", null, "Total Fat"), __jsx("td", {
      itemprop: "fatContent"
    }, " 24", __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams")), " ", __jsx("td", {
      itemprop: "fatContent"
    }, " 49", __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams")), __jsx("td", null, " 70%")), " ", __jsx("tr", null, __jsx("td", {
      className: "nf-indent"
    }, "Saturated Fat"), __jsx("td", {
      itemprop: "saturatedFatContent"
    }, " 35", __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams")), " ", __jsx("td", {
      itemprop: "saturatedFatContent"
    }, " 69", __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams")), __jsx("td", null, " 345%")), " ", __jsx("tr", null, __jsx("td", null, "Carbohydrate"), " ", __jsx("td", {
      itemprop: "carbohydrateContent"
    }, " 3.8", __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams")), __jsx("td", {
      itemprop: "carbohydrateContent"
    }, " 7.6", __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams")), " ", __jsx("td", null, " 3%")), " ", __jsx("tr", null, __jsx("td", {
      className: "nf-indent"
    }, "Sugars"), " ", __jsx("td", {
      itemprop: "sugarContent"
    }, " 11", __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams")), __jsx("td", {
      itemprop: "sugarContent"
    }, " 23", __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams")), " ", __jsx("td", null, " 26%")), __jsx("tr", null, __jsx("td", null, "Fibre"), " ", __jsx("td", {
      itemprop: "fiberContent"
    }, this.state.units * Math.round(this.props.Fiber / 2 * 10) / 10, __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams")), " ", __jsx("td", {
      itemprop: "fiberContent"
    }, " ", Math.floor(this.props.Fiber), __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams")), __jsx("td", null)), " ", __jsx("tr", null, __jsx("td", null, "Protein"), " ", __jsx("td", {
      itemprop: "proteinContent"
    }, this.state.units * Math.floor(this.props.Protein / 2), __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams")), __jsx("td", {
      itemprop: "proteinContent"
    }, this.state.units * Math.floor(this.props.Protein), __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams")), " ", __jsx("td", null, " ", 78 + Math.floor(this.props.Protein - 38) * 2, "%")), __jsx("tr", null, __jsx("td", null, "Salt"), " ", __jsx("td", {
      itemprop: "sodiumContent"
    }, " 0.98", __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, "grams")), " ", __jsx("td", {
      itemprop: "sodiumContent"
    }, " 2", __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, "grams")), __jsx("td", null, " 33%"))), " ", __jsx("tfoot", null, __jsx("tr", null, __jsx("td", {
      colspan: "4"
    }, __jsx("span", null, "* Reference intake of an average adult (8400kj/2000kcal)"), __jsx("div", {
      className: "nf-ingredient-statement"
    }, __jsx("strong", null, "Ingredients:"), __jsx("div", null, "Swiss cheese, American cheese, more cheese and a burger.")), __jsx("div", {
      className: "nf-disclaimer"
    }, "Disclaimer")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Nutrition));

/***/ }),

/***/ "./pages/View.js":
/*!***********************!*\
  !*** ./pages/View.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const mapStateToProps = state => {
  return {
    Weight: state.inputReducer.Weight,
    Calories: state.inputReducer.Calories,
    TotalFat: state.inputReducer.TotalFat,
    SaturatedFat: state.inputReducer.SaturatedFat,
    TransFat: state.inputReducer.TransFat,
    Cholesterol: state.inputReducer.Cholesterol,
    Sodium: state.inputReducer.Sodium,
    Carbohydrate: state.inputReducer.Carbohydrate,
    Fiber: state.inputReducer.Fiber,
    Sugars: state.inputReducer.Sugars,
    AddedSugars: state.inputReducer.AddedSugars,
    Protein: state.inputReducer.Protein,
    A: state.inputReducer.A,
    C: state.inputReducer.C,
    D: state.inputReducer.D,
    Calcium: state.inputReducer.Calcium,
    Iron: state.inputReducer.Iron,
    Potassium: state.inputReducer.Potassium
  };
};

class View extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      units: 1,
      SaturatedF: 345
    };
  }

  render() {
    var q = this.state.units * this.props.Weight / 200;
    return __jsx("div", {
      className: "View"
    }, __jsx("div", {
      itemtype: "http://schema.org/NutritionInformation",
      className: "nf us"
    }, __jsx("div", {
      className: "nf-title"
    }, "Nutrition Facts"), __jsx("div", {
      className: "nf-line"
    }, __jsx("div", {
      className: "nf-serving"
    }, __jsx("input", {
      type: "text",
      "data-role": "none",
      onChange: event => this.setState({
        units: event.target.value
      }),
      value: this.state.units,
      "aria-label": "Change the Quantity Textbox",
      className: "nf-modifier-field"
    }), __jsx("div", {
      className: "nf-item-name"
    }, __jsx("div", null, "serving (", this.state.units * this.props.Weight, ")")))), __jsx("div", {
      className: "nf-bar2"
    }), __jsx("div", {
      className: "nf-amount-per-serving"
    }, "Amount Per Serving"), __jsx("div", {
      className: "nf-calories"
    }, __jsx("span", null, "Calories"), __jsx("span", {
      itemprop: "calories",
      className: "nf-pr"
    }, q * Math.floor(this.props.Calories))), __jsx("div", {
      className: "nf-bar1"
    }), __jsx("div", {
      className: "nf-line nf-text-right"
    }, __jsx("span", {
      className: "nf-highlight nf-percent-dv"
    }, "%", __jsx("span", null, "Daily Value"), "*")), __jsx("div", {
      className: "nf-line"
    }, __jsx("span", {
      "aria-hidden": "true",
      className: "nf-highlight nf-pr"
    }, "75%"), __jsx("span", {
      className: "nf-highlight"
    }, "Total Fat"), __jsx("span", {
      itemprop: "fatContent"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams"))), __jsx("div", {
      className: "nf-line nf-indent"
    }, __jsx("span", {
      "aria-hidden": "true",
      className: "nf-highlight nf-pr"
    }, this.state.units * (this.state.SaturatedF + 5 * (Math.floor(this.props.SaturatedFat) - 69)), "%"), __jsx("span", null, "Saturated Fat"), __jsx("span", {
      itemprop: "saturatedFatContent"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams"))), __jsx("div", {
      className: "nf-line nf-indent"
    }, __jsx("span", null, "Trans Fat"), __jsx("span", {
      itemprop: "transFatContent"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "  ", this.state.units * this.props.TransFat, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams"))), __jsx("div", {
      className: "nf-line"
    }, __jsx("span", {
      "aria-hidden": "true",
      className: "nf-highlight nf-pr"
    }, this.state.units * (3 + Math.floor((this.props.Cholesterol - 10) / 3)), "%"), __jsx("span", {
      className: "nf-highlight"
    }, "Cholesterol"), __jsx("span", {
      itemprop: "cholesterolContent"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, this.state.units * this.props.Cholesterol, "mg"), __jsx("span", {
      className: "sr-only"
    }, " milligrams"))), __jsx("div", {
      className: "nf-line"
    }, __jsx("span", {
      "aria-hidden": "true",
      className: "nf-highlight nf-pr"
    }, this.state.units * (33 + Math.floor((Math.floor(this.props.Sodium) - 780) / 20)), "%"), __jsx("span", {
      className: "nf-highlight"
    }, "Sodium"), __jsx("span", {
      itemprop: "sodiumContent"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, this.state.units * Math.floor(this.props.Sodium), "mg"), __jsx("span", {
      className: "sr-only"
    }, " milligrams"))), __jsx("div", {
      className: "nf-line"
    }, __jsx("span", {
      "aria-hidden": "true",
      className: "nf-highlight nf-pr"
    }, this.state.units * (3 + Math.floor((Math.floor(this.props.Carbohydrate) - 7) / 3)), "%"), __jsx("span", {
      className: "nf-highlight"
    }, "Total Carbohydrates"), __jsx("span", {
      itemprop: "carbohydrateContent"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, this.state.units * Math.floor(this.props.Carbohydrate), "g"), __jsx("span", {
      className: "sr-only"
    }, " grams"))), __jsx("div", {
      className: "nf-line nf-indent"
    }, __jsx("span", {
      "aria-hidden": "true",
      className: "nf-highlight nf-pr"
    }, this.state.units * (60 + (Math.floor(this.props.Fiber) - 15) * 4), "%"), __jsx("span", null, "Dietary Fiber"), __jsx("span", {
      itemprop: "fiberContent"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, this.state.units * Math.floor(this.props.Fiber), "g"), __jsx("span", {
      className: "sr-only"
    }, " grams"))), __jsx("div", {
      className: "nf-line nf-indent"
    }, __jsx("span", null, "Sugars"), __jsx("span", {
      itemprop: "sugarContent"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, this.state.units * Math.floor(this.props.Sugars), "g"), __jsx("span", {
      className: "sr-only"
    }, " grams"))), __jsx("div", {
      className: "nf-line nf-indent2"
    }, __jsx("span", {
      "aria-hidden": "true",
      className: "nf-highlight nf-pr"
    }, this.state.units * (2 * this.props.AddedSugars), "%"), __jsx("span", null, __jsx("span", null, "Includes"), " ", __jsx("span", {
      itemprop: ""
    }, this.state.units * this.props.AddedSugars, __jsx("span", {
      "aria-hidden": "true"
    }, "g"), __jsx("span", {
      className: "sr-only"
    }, " grams")), __jsx("span", null, "Added Sugars"))), " ", __jsx("div", {
      className: "nf-line"
    }, __jsx("span", {
      className: "nf-highlight"
    }, "Protein"), __jsx("span", {
      itemprop: "proteinContent"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, this.state.units * Math.floor(this.props.Protein), "g"), __jsx("span", {
      className: "sr-only"
    }, " grams"))), __jsx("div", {
      className: "nf-bar2"
    }), " ", __jsx("div", {
      className: "nf-vitamins"
    }, __jsx("div", {
      className: "nf-vitamins"
    }, __jsx("div", {
      className: "nf-vitamin-column"
    }, __jsx("span", null, "Vitamin A"), 50 * this.props.A, __jsx("span", {
      "aria-hidden": "true"
    }, "IU"), __jsx("span", {
      className: "sr-only"
    }, " International Unit"), " ", __jsx("span", {
      "aria-hidden": "true",
      className: "nf-pr"
    }, this.state.units * this.props.A, "%")), __jsx("div", {
      className: "nf-vitamin-column"
    }, __jsx("span", null, "Vitamin C"), " 50", __jsx("span", {
      "aria-hidden": "true"
    }, "mg"), __jsx("span", {
      className: "sr-only"
    }, " milligrams"), " ", __jsx("span", {
      "aria-hidden": "true",
      className: "nf-pr"
    }, "83%")), __jsx("div", {
      className: "nf-vitamin-column"
    }, __jsx("span", null, "Vitamin D"), " 0", __jsx("span", {
      "aria-hidden": "true"
    }, "mcg"), __jsx("span", {
      className: "sr-only"
    }, " micrograms"), " ", __jsx("span", {
      "aria-hidden": "true",
      className: "nf-pr"
    }, "0%")), __jsx("div", {
      className: "nf-vitamin-column"
    }, __jsx("span", null, "Calcium"), " ", this.state.units * this.props.Calcium * 10 + 110, __jsx("span", {
      "aria-hidden": "true"
    }, "mg"), __jsx("span", {
      className: "sr-only"
    }, " milligrams"), " ", __jsx("span", {
      "aria-hidden": "true",
      className: "nf-pr"
    }, this.state.units * this.props.Calcium, "%")), __jsx("div", {
      className: "nf-vitamin-column"
    }, __jsx("span", null, "Iron"), Math.floor(this.state.units * this.props.Iron / 6), __jsx("span", {
      "aria-hidden": "true"
    }, "mg"), __jsx("span", {
      className: "sr-only"
    }, " milligrams"), " ", __jsx("span", {
      "aria-hidden": "true",
      className: "nf-pr"
    }, this.state.units * this.props.Iron, "%")), __jsx("div", {
      className: "nf-vitamin-column"
    }, __jsx("span", null, "Potassium"), " 5120", __jsx("span", {
      "aria-hidden": "true"
    }, "mg"), __jsx("span", {
      className: "sr-only"
    }, " milligrams"), " ", __jsx("span", {
      "aria-hidden": "true",
      className: "nf-pr"
    }, this.state.units * this.props.Potassium, "%")))), __jsx("div", {
      className: "nf-bar1"
    }), " ", __jsx("div", null, __jsx("span", {
      className: "nf-highlight"
    }, "Caffeine"), " ", __jsx("span", {
      "aria-hidden": "true"
    }, "mg"), __jsx("span", {
      className: "sr-only"
    }, " milligrams")), " ", __jsx("div", {
      className: "nf-bar2"
    }), " ", __jsx("div", {
      className: "nf-footnote"
    }, __jsx("span", null, "The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2000 calories a day is used for general nutrition advice."), __jsx("div", {
      className: "nf-ingredient-statement"
    }, __jsx("strong", null, "Ingredients:"), __jsx("div", null, "Swiss cheese, American cheese, more cheese and a burger.")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(View));

/***/ }),

/***/ "./redux/ActionCreator.js":
/*!********************************!*\
  !*** ./redux/ActionCreator.js ***!
  \********************************/
/*! exports provided: setWeight, setCalories, setTotalFat, setSaturatedFat, setCholesterol, setTransFat, setSodium, setCarbohydrate, setFiber, setSugars, setAddedSugars, setProtein, setA, setC, setD, setCalcium, setIron, setPotassium */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWeight", function() { return setWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCalories", function() { return setCalories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTotalFat", function() { return setTotalFat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSaturatedFat", function() { return setSaturatedFat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCholesterol", function() { return setCholesterol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransFat", function() { return setTransFat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSodium", function() { return setSodium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCarbohydrate", function() { return setCarbohydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFiber", function() { return setFiber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSugars", function() { return setSugars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAddedSugars", function() { return setAddedSugars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProtein", function() { return setProtein; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setA", function() { return setA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setC", function() { return setC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setD", function() { return setD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCalcium", function() { return setCalcium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIron", function() { return setIron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPotassium", function() { return setPotassium; });
const setWeight = event => {
  return {
    type: 'SET_WEIGHT',
    payload: event.target.value
  };
};
const setCalories = event => {
  return {
    type: 'SET_CALORIES',
    payload: event.target.value
  };
};
const setTotalFat = event => {
  return {
    type: 'SET_TOTALFAT',
    payload: event.target.value
  };
};
const setSaturatedFat = event => {
  return {
    type: 'SET_SATURATEDFET',
    payload: event.target.value
  };
};
const setCholesterol = event => {
  return {
    type: 'SET_CHOLESTEROL',
    payload: event.target.value
  };
};
const setTransFat = event => {
  return {
    type: 'SET_TRANSFAT',
    payload: event.target.value
  };
};
const setSodium = event => {
  return {
    type: 'SET_SODIUM',
    payload: event.target.value
  };
};
const setCarbohydrate = event => {
  return {
    type: 'SET_CARBOHYDRATE',
    payload: event.target.value
  };
};
const setFiber = event => {
  return {
    type: 'SET_FIBER',
    payload: event.target.value
  };
};
const setSugars = event => {
  return {
    type: 'SET_SUGARS',
    payload: event.target.value
  };
};
const setAddedSugars = event => {
  return {
    type: 'SET_ADDEDSUGARS',
    payload: event.target.value
  };
};
const setProtein = event => {
  return {
    type: 'SET_PROTEIN',
    payload: event.target.value
  };
};
const setA = event => {
  return {
    type: 'SET_A',
    payload: event.target.value
  };
};
const setC = event => {
  return {
    type: 'SET_C',
    payload: event.target.value
  };
};
const setD = event => {
  return {
    type: 'SET_D',
    payload: event.target.value
  };
};
const setCalcium = event => {
  return {
    type: 'SET_CALCIUM',
    payload: event.target.value
  };
};
const setIron = event => {
  return {
    type: 'SET_IRON',
    payload: event.target.value
  };
};
const setPotassium = event => {
  return {
    type: 'SET_POTASSIUM',
    payload: event.target.value
  };
};

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/Label.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kole/fullStack/candu/pages/Label.js */"./pages/Label.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=Label.js.map