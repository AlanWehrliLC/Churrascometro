webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\Alan\\Documents\\GitHub\\Churrascometro\\pages\\index.js",
    _s = $RefreshSig$();



function Barbecue() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      adults = _useState[0],
      setAdults = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      adult = _useState2[0],
      setAdult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      kids = _useState3[0],
      setKids = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      kid = _useState4[0],
      setKid = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      durations = _useState5[0],
      setDurations = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      duration = _useState6[0],
      setDuration = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      resultado = _useState7[0],
      setResultado = _useState7[1];

  function calculation() {
    setAdults([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(adults), [adult]));
    setKids([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(kids), [kid]));
    setDurations([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(durations), [duration])); //pop, includes, shift

    var inputAdults = adults.map(function (adult) {
      return adult;
    }).forEach;
    var inputKids = kids.map(function (kid) {
      return kid;
    }).length;
    var inputDurations = durations.map(function (duration) {
      return duration;
    }).length; //inputAdults
    //inputKids
    //inputDurations

    var todalAmountOfMeat = meatPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;
    var todalAmountOfBeer = beerPerPerson(inputDurations) * inputAdults;
    var todalAmountOfDrink = drinkPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;

    var screenDiv = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: [todalAmountOfMeat / 1000, "Kg de Meat"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfBeer / 355), " Beer Cans"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
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
    return setResultado(screenDiv);
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      className: "barbecue",
      children: "Barbecue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
      lineNumber: 78,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
      lineNumber: 79,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
      lineNumber: 80,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      onChange: limpeza,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "QXn9ToQviyzToBZ0yWr3VGVzPDI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0cyIsInNldEFkdWx0cyIsImFkdWx0Iiwic2V0QWR1bHQiLCJraWRzIiwic2V0S2lkcyIsImtpZCIsInNldEtpZCIsImR1cmF0aW9ucyIsInNldER1cmF0aW9ucyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJyZXN1bHRhZG8iLCJzZXRSZXN1bHRhZG8iLCJjYWxjdWxhdGlvbiIsImlucHV0QWR1bHRzIiwibWFwIiwiZm9yRWFjaCIsImlucHV0S2lkcyIsImxlbmd0aCIsImlucHV0RHVyYXRpb25zIiwidG9kYWxBbW91bnRPZk1lYXQiLCJtZWF0UGVyUGVyc29uIiwidG9kYWxBbW91bnRPZkJlZXIiLCJiZWVyUGVyUGVyc29uIiwidG9kYWxBbW91bnRPZkRyaW5rIiwiZHJpbmtQZXJQZXJzb24iLCJzY3JlZW5EaXYiLCJNYXRoIiwiY2VpbCIsImNvbnNvbGUiLCJsb2ciLCJsaW1wZXphIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLEVBQUQsQ0FEakI7QUFBQSxNQUNaQyxNQURZO0FBQUEsTUFDSkMsU0FESTs7QUFBQSxtQkFFT0Ysc0RBQVEsRUFGZjtBQUFBLE1BRVpHLEtBRlk7QUFBQSxNQUVMQyxRQUZLOztBQUFBLG1CQUlLSixzREFBUSxDQUFDLEVBQUQsQ0FKYjtBQUFBLE1BSVpLLElBSlk7QUFBQSxNQUlOQyxPQUpNOztBQUFBLG1CQUtHTixzREFBUSxFQUxYO0FBQUEsTUFLWk8sR0FMWTtBQUFBLE1BS1BDLE1BTE87O0FBQUEsbUJBT2VSLHNEQUFRLENBQUMsRUFBRCxDQVB2QjtBQUFBLE1BT1pTLFNBUFk7QUFBQSxNQU9EQyxZQVBDOztBQUFBLG1CQVFhVixz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MDA3MzkyMzA1ZjBjZjA5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJhcmJlY3VlKCl7XHJcbmNvbnN0IFthZHVsdHMsIHNldEFkdWx0c10gPSB1c2VTdGF0ZShbXSlcclxuY29uc3QgW2FkdWx0LCBzZXRBZHVsdF0gPSB1c2VTdGF0ZSgpXHJcblxyXG5jb25zdCBba2lkcywgc2V0S2lkc10gPSB1c2VTdGF0ZShbXSlcclxuY29uc3QgW2tpZCwgc2V0S2lkXSA9IHVzZVN0YXRlKClcclxuXHJcbmNvbnN0IFtkdXJhdGlvbnMsIHNldER1cmF0aW9uc10gPSB1c2VTdGF0ZShbXSlcclxuY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgpXHJcblxyXG5jb25zdCBbcmVzdWx0YWRvLCBzZXRSZXN1bHRhZG9dID0gdXNlU3RhdGUoKVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRpb24oKXtcclxuICBzZXRBZHVsdHMoWy4uLiBhZHVsdHMsIGFkdWx0XSlcclxuICBzZXRLaWRzKFsuLi4ga2lkcywga2lkXSlcclxuICBzZXREdXJhdGlvbnMoWy4uLiBkdXJhdGlvbnMsIGR1cmF0aW9uXSlcclxuXHJcbiAgXHJcbi8vcG9wLCBpbmNsdWRlcywgc2hpZnRcclxuICBjb25zdCBpbnB1dEFkdWx0cyA9IGFkdWx0cy5tYXAoYWR1bHQgPT4gYWR1bHQpLmZvckVhY2hcclxuICBjb25zdCBpbnB1dEtpZHMgPSBraWRzLm1hcChraWQgPT5raWQpLmxlbmd0aFxyXG4gIGNvbnN0IGlucHV0RHVyYXRpb25zID0gZHVyYXRpb25zLm1hcChkdXJhdGlvbiA9PiBkdXJhdGlvbikubGVuZ3RoXHJcbiBcclxuLy9pbnB1dEFkdWx0c1xyXG4vL2lucHV0S2lkc1xyXG4vL2lucHV0RHVyYXRpb25zXHJcblxyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZNZWF0ID0gbWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgKiBpbnB1dEFkdWx0cyArIChtZWF0UGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAvIDIgKiBpbnB1dEtpZHMpXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZkJlZXIgPSBiZWVyUGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAqIGlucHV0QWR1bHRzXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZkRyaW5rID0gZHJpbmtQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpICogaW5wdXRBZHVsdHMgKyAobWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgLyAyICogaW5wdXRLaWRzKVxyXG5cclxuICBjb25zdCBzY3JlZW5EaXYgPSAoPGRpdj5cclxuICAgIDxwPnt0b2RhbEFtb3VudE9mTWVhdCAvIDEwMDB9S2cgZGUgTWVhdDwvcD5cclxuICAgIDxwPntNYXRoLmNlaWwodG9kYWxBbW91bnRPZkJlZXIgLyAzNTUpfSBCZWVyIENhbnM8L3A+IFxyXG4gICAgPHA+e01hdGguY2VpbCh0b2RhbEFtb3VudE9mRHJpbmsgLyAyMDAwKX0gRHJpbmsgQm90dGxlPC9wPiBcclxuICA8L2Rpdj4pXHJcbmNvbnNvbGUubG9nKGlucHV0QWR1bHRzLCBpbnB1dEtpZHMsIGlucHV0RHVyYXRpb25zKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgc2V0UmVzdWx0YWRvKHNjcmVlbkRpdilcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpbXBlemEoKXtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lYXRQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDY1MFxyXG4gIH1lbHNle1xyXG4gICAgcmV0dXJuIDQwMFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmVlclBlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gMjAwMFxyXG4gIH1lbHNle1xyXG4gICAgcmV0dXJuIDEyMDBcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyaW5rUGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiAxNTAwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gMTAwMFxyXG4gIH1cclxufVxyXG5cclxuXHJcbnJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J2JhcmJlY3VlJz5CYXJiZWN1ZTwvaDE+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIHZhbHVlPXthZHVsdH0gb25DaGFuZ2U9eyhlKT0+c2V0QWR1bHQoZS50YXJnZXQudmFsdWUpfSBuYW1lPSdhZHVsdHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0FkdWx0cycgIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIHZhbHVlPXtraWR9IG9uQ2hhbmdlPXsoZSk9PnNldEtpZChlLnRhcmdldC52YWx1ZSl9IG5hbWU9J2tpZHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0tpZHMnICAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyB2YWx1ZT17ZHVyYXRpb259IG9uQ2hhbmdlPXsoZSk9PnNldER1cmF0aW9uKGUudGFyZ2V0LnZhbHVlKX0gbmFtZT0nZHVyYXRpbycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nRHVyYXRpbycgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2NhbGN1bGF0aW9uR2xvYmFsJyBvbkNsaWNrPXtjYWxjdWxhdGlvbn0gb25DaGFuZ2U9e2xpbXBlemF9PkNhbGN1bGF0aW9uPC9idXR0b24+XHJcbiAgICAgICAge3Jlc3VsdGFkb31cclxuICAgICAgPC9kaXY+XHJcbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFyYmVjdWUiXSwic291cmNlUm9vdCI6IiJ9