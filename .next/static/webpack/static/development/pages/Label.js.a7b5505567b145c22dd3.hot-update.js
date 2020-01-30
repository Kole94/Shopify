webpackHotUpdate("static/development/pages/Label.js",{

/***/ "./pages/Inputbox.js":
/*!***************************!*\
  !*** ./pages/Inputbox.js ***!
  \***************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/ActionCreator */ "./redux/ActionCreator.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");







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

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setWeight: function setWeight(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setWeight"])(event));
    },
    setCalories: function setCalories(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setCalories"])(event));
    },
    setTotalFat: function setTotalFat(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setTotalFat"])(event));
    },
    setSaturatedFat: function setSaturatedFat(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setSaturatedFat"])(event));
    },
    setTransFat: function setTransFat(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setTransFat"])(event));
    },
    setCholesterol: function setCholesterol(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setCholesterol"])(event));
    },
    setSodium: function setSodium(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setSodium"])(event));
    },
    setCarbohydrate: function setCarbohydrate(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setCarbohydrate"])(event));
    },
    setFiber: function setFiber(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setFiber"])(event));
    },
    setSugars: function setSugars(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setSugars"])(event));
    },
    setAddedSugars: function setAddedSugars(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setAddedSugars"])(event));
    },
    setProtein: function setProtein(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setProtein"])(event));
    },
    setA: function setA(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setA"])(event));
    },
    setC: function setC(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setC"])(event));
    },
    setD: function setD(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setD"])(event));
    },
    setCalcium: function setCalcium(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setCalcium"])(event));
    },
    setIron: function setIron(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setIron"])(event));
    },
    setPotassium: function setPotassium(event) {
      return dispatch(Object(_redux_ActionCreator__WEBPACK_IMPORTED_MODULE_9__["setPotassium"])(event));
    }
  };
};

var Inputbox =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Inputbox, _Component);

  function Inputbox(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Inputbox);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Inputbox).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      console.log('comdidmount');
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Inputbox, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "Inputbox"
      }, __jsx("form", {
        className: "inputform"
      }, __jsx("p", null, __jsx("label", null, "Serving Weight"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setWeight,
        value: this.props.Weight,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Calories"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setCalories,
        value: this.props.Calories,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Total Fat"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setTotalFat,
        value: this.props.TotalFat,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Saturated Fat"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setSaturatedFat,
        value: this.props.SaturatedFat,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Trans Fat"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setTransFat,
        value: this.props.TransFat,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Cholesterol"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setCholesterol,
        value: this.props.Cholesterol,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Sodium"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setSodium,
        value: this.props.Sodium,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Carbohydrate"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setCarbohydrate,
        value: this.props.Carbohydrate,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Fiber"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setFiber,
        value: this.props.Fiber,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Sugars"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setSugars,
        value: this.props.Sugars,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Added Sugars"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setAddedSugars,
        value: this.props.AddedSugars,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Protein"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setProtein,
        value: this.props.Protein,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Vitamin A"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setA,
        value: this.props.A,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Vitamin C"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setC,
        value: this.props.C,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Vitamin D"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setD,
        value: this.props.D,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Calcium"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setCalcium,
        value: this.props.Calcium,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Iron"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setIron,
        value: this.props.Iron,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Potassium"), " ", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextField"], {
        className: "inputfield",
        onChange: this.props.setPotassium,
        value: this.props.Potassium,
        type: "number"
      }))));
    }
  }]);

  return Inputbox;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Inputbox));

/***/ })

})
//# sourceMappingURL=Label.js.a7b5505567b145c22dd3.hot-update.js.map