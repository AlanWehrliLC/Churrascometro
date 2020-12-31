webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Alan\\Documents\\GitHub\\Churrascometro\\pages\\index.js",
    _s = $RefreshSig$();



function Barbecue() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      adult = _useState[0],
      setAdult = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([adult]),
      adults = _useState2[0],
      setAdults = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      kid = _useState3[0],
      setKid = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([kid]),
      kids = _useState4[0],
      setKids = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      duration = _useState5[0],
      setDuration = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([duration]),
      durations = _useState6[0],
      setDurations = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      resultado = _useState7[0],
      setResultado = _useState7[1];

  function calculation() {
    setAdults([adults, adult]);
    setKids([kids, kid]);
    setDurations([durations, duration]); //pop, includes, shift

    var inputAdults = adults.pop(adult);
    var inputKids = kids.pop(kid);
    var inputDurations = durations.pop(duration); //inputAdults
    //inputKids
    //inputDurations

    var todalAmountOfMeat = meatPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;
    var todalAmountOfBeer = beerPerPerson(inputDurations) * inputAdults;
    var todalAmountOfDrink = drinkPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;

    var screenDiv = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [todalAmountOfMeat / 1000, "Kg de Meat"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfBeer / 355), " Beer Cans"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfDrink / 2000), " Drink Bottle"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 22
    }, this);

    console.log(inputAdults, inputKids, inputDurations);
    return setResultado(screenDiv), setAdults([adults, 0]), setKids([kids, 0]), setDurations([durations, 0]);
  }

  function limpeza() {}

  function meatPerPerson(duration) {
    if (duration >= 6) {
      return 650;
    } else {
      return 400;
    }
  }

  function beerPerPerson(duration) {
    if (duration >= 6) {
      return 2000;
    } else {
      return 1200;
    }
  }

  function drinkPerPerson(duration) {
    if (duration >= 6) {
      return 1500;
    } else {
      return 1000;
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "barbecue",
      children: "Barbecue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      value: adult,
      onChange: function onChange(e) {
        return setAdult(e.target.value);
      },
      name: "adults",
      type: "number",
      placeholder: "Adults"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      value: kid,
      onChange: function onChange(e) {
        return setKid(e.target.value);
      },
      name: "kids",
      type: "number",
      placeholder: "Kids"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      value: duration,
      onChange: function onChange(e) {
        return setDuration(e.target.value);
      },
      name: "duratio",
      type: "number",
      placeholder: "Duratio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      onChange: limpeza,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "xEMqHf+9aF8xizVfTtk19P4kXGs=");

_c = Barbecue;
/* harmony default export */ __webpack_exports__["default"] = (Barbecue);

var _c;

$RefreshReg$(_c, "Barbecue");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0Iiwic2V0QWR1bHQiLCJhZHVsdHMiLCJzZXRBZHVsdHMiLCJraWQiLCJzZXRLaWQiLCJraWRzIiwic2V0S2lkcyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJkdXJhdGlvbnMiLCJzZXREdXJhdGlvbnMiLCJyZXN1bHRhZG8iLCJzZXRSZXN1bHRhZG8iLCJjYWxjdWxhdGlvbiIsImlucHV0QWR1bHRzIiwicG9wIiwiaW5wdXRLaWRzIiwiaW5wdXREdXJhdGlvbnMiLCJ0b2RhbEFtb3VudE9mTWVhdCIsIm1lYXRQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mQmVlciIsImJlZXJQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mRHJpbmsiLCJkcmlua1BlclBlcnNvbiIsInNjcmVlbkRpdiIsIk1hdGgiLCJjZWlsIiwiY29uc29sZSIsImxvZyIsImxpbXBlemEiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxFQURmO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLFFBREs7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsQ0FBQ0MsS0FBRCxDQUFELENBRmpCO0FBQUEsTUFFWkUsTUFGWTtBQUFBLE1BRUpDLFNBRkk7O0FBQUEsbUJBSUdKLHNEQUFRLEVBSlg7QUFBQSxNQUlaSyxHQUpZO0FBQUEsTUFJUEMsTUFKTzs7QUFBQSxtQkFLS04sc0RBQVEsQ0FBQyxDQUFDSyxHQUFELENBQUQsQ0FMYjtBQUFBLE1BS1pFLElBTFk7QUFBQSxNQUtOQyxPQUxNOztBQUFBLG1CQU9hUixzREFBUSxFQVByQjtBQUFBLE1BT1pTLFFBUFk7QUFBQSxNQU9GQyxXQVBFOztBQUFBLG1CQVFlVixzREFBUSxDQUFD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UTs7S0FBQUEsUTtBQXVGTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjc2YzE0MDg4YzQ0NzM0ZWQ0OWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBCYXJiZWN1ZSgpe1xyXG5jb25zdCBbYWR1bHQsIHNldEFkdWx0XSA9IHVzZVN0YXRlKClcclxuY29uc3QgW2FkdWx0cywgc2V0QWR1bHRzXSA9IHVzZVN0YXRlKFthZHVsdF0pXHJcblxyXG5jb25zdCBba2lkLCBzZXRLaWRdID0gdXNlU3RhdGUoKVxyXG5jb25zdCBba2lkcywgc2V0S2lkc10gPSB1c2VTdGF0ZShba2lkXSlcclxuXHJcbmNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoKVxyXG5jb25zdCBbZHVyYXRpb25zLCBzZXREdXJhdGlvbnNdID0gdXNlU3RhdGUoW2R1cmF0aW9uXSlcclxuXHJcbmNvbnN0IFtyZXN1bHRhZG8sIHNldFJlc3VsdGFkb10gPSB1c2VTdGF0ZSgpXHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGlvbigpe1xyXG4gIHNldEFkdWx0cyhbYWR1bHRzLCBhZHVsdF0pXHJcbiAgc2V0S2lkcyhba2lkcywga2lkXSlcclxuICBzZXREdXJhdGlvbnMoW2R1cmF0aW9ucywgZHVyYXRpb25dKVxyXG5cclxuICBcclxuLy9wb3AsIGluY2x1ZGVzLCBzaGlmdFxyXG4gIGNvbnN0IGlucHV0QWR1bHRzID0gYWR1bHRzLnBvcChhZHVsdClcclxuICBjb25zdCBpbnB1dEtpZHMgPSBraWRzLnBvcChraWQpXHJcbiAgY29uc3QgaW5wdXREdXJhdGlvbnMgPSBkdXJhdGlvbnMucG9wKGR1cmF0aW9uKVxyXG4gXHJcbi8vaW5wdXRBZHVsdHNcclxuLy9pbnB1dEtpZHNcclxuLy9pbnB1dER1cmF0aW9uc1xyXG5cclxuICBjb25zdCB0b2RhbEFtb3VudE9mTWVhdCA9IG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpICogaW5wdXRBZHVsdHMgKyAobWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgLyAyICogaW5wdXRLaWRzKVxyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZCZWVyID0gYmVlclBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgKiBpbnB1dEFkdWx0c1xyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZEcmluayA9IGRyaW5rUGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAqIGlucHV0QWR1bHRzICsgKG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpIC8gMiAqIGlucHV0S2lkcylcclxuXHJcbiAgY29uc3Qgc2NyZWVuRGl2ID0gKDxkaXY+XHJcbiAgICA8cD57dG9kYWxBbW91bnRPZk1lYXQgLyAxMDAwfUtnIGRlIE1lYXQ8L3A+XHJcbiAgICA8cD57TWF0aC5jZWlsKHRvZGFsQW1vdW50T2ZCZWVyIC8gMzU1KX0gQmVlciBDYW5zPC9wPiBcclxuICAgIDxwPntNYXRoLmNlaWwodG9kYWxBbW91bnRPZkRyaW5rIC8gMjAwMCl9IERyaW5rIEJvdHRsZTwvcD4gXHJcbiAgPC9kaXY+KVxyXG5jb25zb2xlLmxvZyhpbnB1dEFkdWx0cywgaW5wdXRLaWRzLCBpbnB1dER1cmF0aW9ucylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHNldFJlc3VsdGFkbyhzY3JlZW5EaXYpLFxyXG4gICAgc2V0QWR1bHRzKFthZHVsdHMsIDBdKSxcclxuICAgIHNldEtpZHMoW2tpZHMsIDBdKSxcclxuICAgIHNldER1cmF0aW9ucyhbZHVyYXRpb25zLCAwXSlcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpbXBlemEoKXtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lYXRQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDY1MFxyXG4gIH1lbHNle1xyXG4gICAgcmV0dXJuIDQwMFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmVlclBlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gMjAwMFxyXG4gIH1lbHNle1xyXG4gICAgcmV0dXJuIDEyMDBcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyaW5rUGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiAxNTAwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gMTAwMFxyXG4gIH1cclxufVxyXG5cclxuXHJcbnJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J2JhcmJlY3VlJz5CYXJiZWN1ZTwvaDE+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIHZhbHVlPXthZHVsdH0gb25DaGFuZ2U9eyhlKT0+c2V0QWR1bHQoZS50YXJnZXQudmFsdWUpfSBuYW1lPSdhZHVsdHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0FkdWx0cycgIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIHZhbHVlPXtraWR9IG9uQ2hhbmdlPXsoZSk9PnNldEtpZChlLnRhcmdldC52YWx1ZSl9IG5hbWU9J2tpZHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0tpZHMnICAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyB2YWx1ZT17ZHVyYXRpb259IG9uQ2hhbmdlPXsoZSk9PnNldER1cmF0aW9uKGUudGFyZ2V0LnZhbHVlKX0gbmFtZT0nZHVyYXRpbycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nRHVyYXRpbycgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2NhbGN1bGF0aW9uR2xvYmFsJyBvbkNsaWNrPXtjYWxjdWxhdGlvbn0gb25DaGFuZ2U9e2xpbXBlemF9PkNhbGN1bGF0aW9uPC9idXR0b24+XHJcbiAgICAgICAge3Jlc3VsdGFkb31cclxuICAgICAgPC9kaXY+XHJcbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFyYmVjdWUiXSwic291cmNlUm9vdCI6IiJ9