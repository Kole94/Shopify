webpackHotUpdate("static/development/pages/Label.js",{

/***/ "./pages/Nutrition.js":
/*!****************************!*\
  !*** ./pages/Nutrition.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var mapStateToProps = function mapStateToProps(state) {
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

var Nutrition =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Nutrition, _Component);

  function Nutrition() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Nutrition);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Nutrition)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      units: 1
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Nutrition, [{
    key: "render",
    value: function render() {
      var _this2 = this;

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
        onChange: function onChange(event) {
          return _this2.setState({
            units: event.target.value
          });
        },
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
  }]);

  return Nutrition;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(Nutrition));

/***/ })

})
//# sourceMappingURL=Label.js.15e19888b8e11bdf3b94.hot-update.js.map