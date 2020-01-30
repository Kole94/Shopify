webpackHotUpdate("static/development/pages/Label.js",{

/***/ "./pages/View.js":
/*!***********************!*\
  !*** ./pages/View.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




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

var View =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(View, _Component);

  function View(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, View);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(View).call(this, props));
    _this.state = {
      units: 1,
      SaturatedF: 345
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(View, [{
    key: "render",
    value: function render() {
      var _this2 = this;

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
        onChange: function onChange(event) {
          return _this2.setState({
            units: event.target.value
          });
        },
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
      }, q * (this.state.SaturatedF + 5 * (Math.floor(this.props.SaturatedFat) - 69)), "%"), __jsx("span", null, "Saturated Fat"), __jsx("span", {
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
      }, "  ", q * this.props.TransFat, "g"), __jsx("span", {
        className: "sr-only"
      }, " grams"))), __jsx("div", {
        className: "nf-line"
      }, __jsx("span", {
        "aria-hidden": "true",
        className: "nf-highlight nf-pr"
      }, q * (3 + Math.floor((this.props.Cholesterol - 10) / 3)), "%"), __jsx("span", {
        className: "nf-highlight"
      }, "Cholesterol"), __jsx("span", {
        itemprop: "cholesterolContent"
      }, __jsx("span", {
        "aria-hidden": "true"
      }, q * this.props.Cholesterol, "mg"), __jsx("span", {
        className: "sr-only"
      }, " milligrams"))), __jsx("div", {
        className: "nf-line"
      }, __jsx("span", {
        "aria-hidden": "true",
        className: "nf-highlight nf-pr"
      }, q * (33 + Math.floor((Math.floor(this.props.Sodium) - 780) / 20)), "%"), __jsx("span", {
        className: "nf-highlight"
      }, "Sodium"), __jsx("span", {
        itemprop: "sodiumContent"
      }, __jsx("span", {
        "aria-hidden": "true"
      }, q * Math.floor(this.props.Sodium), "mg"), __jsx("span", {
        className: "sr-only"
      }, " milligrams"))), __jsx("div", {
        className: "nf-line"
      }, __jsx("span", {
        "aria-hidden": "true",
        className: "nf-highlight nf-pr"
      }, q * (3 + Math.floor((Math.floor(this.props.Carbohydrate) - 7) / 3)), "%"), __jsx("span", {
        className: "nf-highlight"
      }, "Total Carbohydrates"), __jsx("span", {
        itemprop: "carbohydrateContent"
      }, __jsx("span", {
        "aria-hidden": "true"
      }, q * Math.floor(this.props.Carbohydrate), "g"), __jsx("span", {
        className: "sr-only"
      }, " grams"))), __jsx("div", {
        className: "nf-line nf-indent"
      }, __jsx("span", {
        "aria-hidden": "true",
        className: "nf-highlight nf-pr"
      }, q * (60 + (Math.floor(this.props.Fiber) - 15) * 4), "%"), __jsx("span", null, "Dietary Fiber"), __jsx("span", {
        itemprop: "fiberContent"
      }, __jsx("span", {
        "aria-hidden": "true"
      }, q * Math.floor(this.props.Fiber), "g"), __jsx("span", {
        className: "sr-only"
      }, " grams"))), __jsx("div", {
        className: "nf-line nf-indent"
      }, __jsx("span", null, "Sugars"), __jsx("span", {
        itemprop: "sugarContent"
      }, __jsx("span", {
        "aria-hidden": "true"
      }, q * Math.floor(this.props.Sugars), "g"), __jsx("span", {
        className: "sr-only"
      }, " grams"))), __jsx("div", {
        className: "nf-line nf-indent2"
      }, __jsx("span", {
        "aria-hidden": "true",
        className: "nf-highlight nf-pr"
      }, q * (2 * this.props.AddedSugars), "%"), __jsx("span", null, __jsx("span", null, "Includes"), " ", __jsx("span", {
        itemprop: ""
      }, q * this.props.AddedSugars, __jsx("span", {
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
      }, q * Math.floor(this.props.Protein), "g"), __jsx("span", {
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
      }, q * this.props.A, "%")), __jsx("div", {
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
      }, __jsx("span", null, "Calcium"), " ", q * this.props.Calcium * 10 + 110, __jsx("span", {
        "aria-hidden": "true"
      }, "mg"), __jsx("span", {
        className: "sr-only"
      }, " milligrams"), " ", __jsx("span", {
        "aria-hidden": "true",
        className: "nf-pr"
      }, q * this.props.Calcium, "%")), __jsx("div", {
        className: "nf-vitamin-column"
      }, __jsx("span", null, "Iron"), Math.floor(q * this.props.Iron / 6), __jsx("span", {
        "aria-hidden": "true"
      }, "mg"), __jsx("span", {
        className: "sr-only"
      }, " milligrams"), " ", __jsx("span", {
        "aria-hidden": "true",
        className: "nf-pr"
      }, q * this.props.Iron, "%")), __jsx("div", {
        className: "nf-vitamin-column"
      }, __jsx("span", null, "Potassium"), " 5120", __jsx("span", {
        "aria-hidden": "true"
      }, "mg"), __jsx("span", {
        className: "sr-only"
      }, " milligrams"), " ", __jsx("span", {
        "aria-hidden": "true",
        className: "nf-pr"
      }, q * this.props.Potassium, "%")))), __jsx("div", {
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
  }]);

  return View;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(View));

/***/ })

})
//# sourceMappingURL=Label.js.d5127d534ad3aa6fb073.hot-update.js.map