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
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_12__);







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
  return Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])({
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
  }, dispatch);
};

var Inputbox =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Inputbox, _Component);

  function Inputbox() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Inputbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Inputbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      productId: null
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Inputbox, [{
    key: "render",
    value: function render() {
      console.log(this.state.productId);
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["FormLayout"], {
        title: "Vue Nutrition Label"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["FormLayout"].Group, null, __jsx("p", null, __jsx("label", null, "Serving Weight"), __jsx("input", {
        className: "inputfield",
        onChange: this.props.setWeight,
        placeholder: this.props.Weight,
        value: this.props.Weight,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Calories"), __jsx("input", {
        className: "inputfield",
        onChange: this.props.setCalories,
        placeholder: this.props.Calories,
        value: this.props.Calories,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Total Fat"), __jsx("input", {
        className: "inputfield",
        onChange: this.props.setTotalFat,
        placeholder: this.props.TotalFat,
        value: this.props.TotalFat,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Saturated Fat"), __jsx("input", {
        className: "inputfield",
        onChange: this.props.setSaturatedFat,
        placeholder: this.props.SaturatedFat,
        value: this.props.SaturatedFat,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Trans Fat"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setTransFat,
        placeholder: this.props.TransFat,
        value: this.props.TransFat,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Cholesterol"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setCholesterol,
        placeholder: this.props.Cholesterol,
        value: this.props.Cholesterol,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Sodium"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setSodium,
        placeholder: this.props.Sodium,
        value: this.props.Sodium,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Carbohydrate"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setCarbohydrate,
        placeholder: this.props.Carbohydrate,
        value: this.props.Carbohydrate,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Fiber"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setFiber,
        placeholder: this.props.Fiber,
        value: this.props.Fiber,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Sugars"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setSugars,
        placeholder: this.props.Sugars,
        value: this.props.Sugars,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Added Sugars"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setAddedSugars,
        placeholder: this.props.AddedSugars,
        value: this.props.AddedSugars,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Protein"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setProtein,
        placeholder: this.props.Protein,
        value: this.props.Protein,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Vitamin A"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setA,
        placeholder: this.props.A,
        value: this.props.A,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Vitamin C"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setC,
        placeholder: this.props.C,
        value: this.props.C,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Vitamin D"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setD,
        placeholder: this.props.D,
        value: this.props.D,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Calcium"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setCalcium,
        placeholder: this.props.Calcium,
        value: this.props.Calcium,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Iron"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setIron,
        placeholder: this.props.Iron,
        value: this.props.Iron,
        type: "number"
      })), __jsx("p", null, __jsx("label", null, "Potassium"), " ", __jsx("input", {
        className: "inputfield",
        onChange: this.props.setPotassium,
        placeholder: this.props.Potassium,
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
//# sourceMappingURL=Label.js.52ef4717bfd39f4870af.hot-update.js.map