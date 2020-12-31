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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      adults = _useState[0],
      setAdults = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      adult = _useState2[0],
      setAdult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      kids = _useState3[0],
      setKids = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      kid = _useState4[0],
      setKid = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      durations = _useState5[0],
      setDurations = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      duration = _useState6[0],
      setDuration = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      resultado = _useState7[0],
      setResultado = _useState7[1];

  function calculation() {
    setAdults([adults, adult]);
    setKids([kids, kid]);
    setDurations([durations, duration]); //pop, includes, shift

    var inputAdults = adults.includes(adult);
    var inputKids = kids.includes(kid);
    var inputDurations = durations.includes(duration);
    var todalAmountOfMeat = meatPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;
    var todalAmountOfBeer = beerPerPerson(inputDurations) * inputAdults;
    var todalAmountOfDrink = drinkPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;

    var screenDiv = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [todalAmountOfMeat / 1000, "Kg de Meat"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfBeer / 355), " Beer Cans"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfDrink / 2000), " Drink Bottle"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 22
    }, this);

    console.log(screenDiv.props.children);
    return setResultado(screenDiv);
  }

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
      lineNumber: 64,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      value: adult,
      onChange: function onChange(e) {
        return setAdult(e.currentTarget.value);
      },
      name: "adults",
      type: "number",
      placeholder: "Adults"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      value: kid,
      onChange: function onChange(e) {
        return setKid(e.currentTarget.value);
      },
      name: "kids",
      type: "number",
      placeholder: "Kids"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      value: duration,
      onChange: function onChange(e) {
        return setDuration(e.currentTarget.value);
      },
      name: "duratio",
      type: "number",
      placeholder: "Duratio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0cyIsInNldEFkdWx0cyIsImFkdWx0Iiwic2V0QWR1bHQiLCJraWRzIiwic2V0S2lkcyIsImtpZCIsInNldEtpZCIsImR1cmF0aW9ucyIsInNldER1cmF0aW9ucyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJyZXN1bHRhZG8iLCJzZXRSZXN1bHRhZG8iLCJjYWxjdWxhdGlvbiIsImlucHV0QWR1bHRzIiwiaW5jbHVkZXMiLCJpbnB1dEtpZHMiLCJpbnB1dER1cmF0aW9ucyIsInRvZGFsQW1vdW50T2ZNZWF0IiwibWVhdFBlclBlcnNvbiIsInRvZGFsQW1vdW50T2ZCZWVyIiwiYmVlclBlclBlcnNvbiIsInRvZGFsQW1vdW50T2ZEcmluayIsImRyaW5rUGVyUGVyc29uIiwic2NyZWVuRGl2IiwiTWF0aCIsImNlaWwiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJjaGlsZHJlbiIsImUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLEVBQUQsQ0FEakI7QUFBQSxNQUNaQyxNQURZO0FBQUEsTUFDSkMsU0FESTs7QUFBQSxtQkFFT0Ysc0RBQVEsRUFGZjtBQUFBLE1BRVpHLEtBRlk7QUFBQSxNQUVMQyxRQUZLOztBQUFBLG1CQUlLSixzREFBUSxDQUFDLEVBQUQsQ0FKYjtBQUFBLE1BSVpLLElBSlk7QUFBQSxNQUlOQyxPQUpNOztBQUFBLG1CQUtHTixzREFBUSxFQUxYO0FBQUEsTUFLWk8sR0FMWTtBQUFBLE1BS1BDLE1BTE87O0FBQUEsbUJBT2VSLHNEQUFRLENBQUMsRUFBRCxDQVB2QjtBQUFBLE1BT1pTLFNBUFk7QUFBQSxNQU9EQyxZQVBDOztBQUFBLG1CQVFhVixz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UUFBaEg7QUFBeUgsaUJBQVcsRUFBQztBQUFySTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFPLGVBQVMsRUFBQyxhQUFqQjtBQUErQixXQUFLLEVBQUU1QixHQUF0QztBQUEyQyxjQUFRLEVBQUUsa0JBQUMwQixDQUFEO0FBQUEsZUFBS3pCLE1BQU0sQ0FBQ3lCLENBQUMsQ0FBQ0MsYUFBRixDQUFnQkMsS0FBakIsQ0FBWDtBQUFBLE9BQXJEO0FBQXlGLFVBQUksRUFBQyxNQUE5RjtBQUFxRyxVQUFJLEVBQUMsUUFBMUc7QUFBbUgsaUJBQVcsRUFBQztBQUEvSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFPLGVBQVMsRUFBQyxhQUFqQjtBQUErQixXQUFLLEVBQUV4QixRQUF0QztBQUFnRCxjQUFRLEVBQUUsa0JBQUNzQixDQUFEO0FBQUEsZUFBS3JCLFdBQVcsQ0FBQ3FCLENBQUMsQ0FBQ0MsYUFBRixDQUFnQkMsS0FBakIsQ0FBaEI7QUFBQSxPQUExRDtBQUFtRyxVQUFJLEVBQUMsU0FBeEc7QUFBa0gsVUFBSSxFQUFDLFFBQXZIO0FBQWdJLGlCQUFXLEVBQUM7QUFBNUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBS0k7QUFBUSxlQUFTLEVBQUMsbUJBQWxCO0FBQXNDLGFBQU8sRUFBRXBCLFdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosRUFNS0YsU0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVDOztHQXJFUWQsUTs7S0FBQUEsUTtBQXVFTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTQxMWM3OGYyZjRmMDVmYmI2ZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBCYXJiZWN1ZSgpe1xyXG5jb25zdCBbYWR1bHRzLCBzZXRBZHVsdHNdID0gdXNlU3RhdGUoW10pXHJcbmNvbnN0IFthZHVsdCwgc2V0QWR1bHRdID0gdXNlU3RhdGUoKVxyXG5cclxuY29uc3QgW2tpZHMsIHNldEtpZHNdID0gdXNlU3RhdGUoW10pXHJcbmNvbnN0IFtraWQsIHNldEtpZF0gPSB1c2VTdGF0ZSgpXHJcblxyXG5jb25zdCBbZHVyYXRpb25zLCBzZXREdXJhdGlvbnNdID0gdXNlU3RhdGUoW10pXHJcbmNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoKVxyXG5cclxuY29uc3QgW3Jlc3VsdGFkbywgc2V0UmVzdWx0YWRvXSA9IHVzZVN0YXRlKClcclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0aW9uKCl7XHJcbiAgc2V0QWR1bHRzKFthZHVsdHMsIGFkdWx0XSlcclxuICBzZXRLaWRzKFtraWRzLGtpZF0pXHJcbiAgc2V0RHVyYXRpb25zKFtkdXJhdGlvbnMsZHVyYXRpb25dKVxyXG4vL3BvcCwgaW5jbHVkZXMsIHNoaWZ0XHJcbiAgY29uc3QgaW5wdXRBZHVsdHMgPSBhZHVsdHMuaW5jbHVkZXMoYWR1bHQpXHJcbiAgY29uc3QgaW5wdXRLaWRzID0ga2lkcy5pbmNsdWRlcyhraWQpXHJcbiAgY29uc3QgaW5wdXREdXJhdGlvbnMgPSBkdXJhdGlvbnMuaW5jbHVkZXMoZHVyYXRpb24pXHJcblxyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZNZWF0ID0gbWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgKiBpbnB1dEFkdWx0cyArIChtZWF0UGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAvIDIgKiBpbnB1dEtpZHMpXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZkJlZXIgPSBiZWVyUGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAqIGlucHV0QWR1bHRzXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZkRyaW5rID0gZHJpbmtQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpICogaW5wdXRBZHVsdHMgKyAobWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgLyAyICogaW5wdXRLaWRzKVxyXG5cclxuICBjb25zdCBzY3JlZW5EaXYgPSAoPGRpdj5cclxuICAgIDxwPnt0b2RhbEFtb3VudE9mTWVhdCAvIDEwMDB9S2cgZGUgTWVhdDwvcD5cclxuICAgIDxwPntNYXRoLmNlaWwodG9kYWxBbW91bnRPZkJlZXIgLyAzNTUpfSBCZWVyIENhbnM8L3A+IFxyXG4gICAgPHA+e01hdGguY2VpbCh0b2RhbEFtb3VudE9mRHJpbmsgLyAyMDAwKX0gRHJpbmsgQm90dGxlPC9wPiBcclxuICA8L2Rpdj4pXHJcbmNvbnNvbGUubG9nKHNjcmVlbkRpdi5wcm9wcy5jaGlsZHJlbilcclxuICByZXR1cm4gc2V0UmVzdWx0YWRvKHNjcmVlbkRpdilcclxufVxyXG5cclxuZnVuY3Rpb24gbWVhdFBlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gNjUwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gNDAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiZWVyUGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiAyMDAwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gMTIwMFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJpbmtQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDE1MDBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiAxMDAwXHJcbiAgfVxyXG59XHJcblxyXG5cclxucmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nYmFyYmVjdWUnPkJhcmJlY3VlPC9oMT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2FkdWx0fSBvbkNoYW5nZT17KGUpPT5zZXRBZHVsdChlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSBuYW1lPSdhZHVsdHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0FkdWx0cycgIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIHZhbHVlPXtraWR9IG9uQ2hhbmdlPXsoZSk9PnNldEtpZChlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSBuYW1lPSdraWRzJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdLaWRzJyAgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2R1cmF0aW9ufSBvbkNoYW5nZT17KGUpPT5zZXREdXJhdGlvbihlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSBuYW1lPSdkdXJhdGlvJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdEdXJhdGlvJyAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2FsY3VsYXRpb25HbG9iYWwnIG9uQ2xpY2s9e2NhbGN1bGF0aW9ufT5DYWxjdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIHtyZXN1bHRhZG99XHJcbiAgICAgIDwvZGl2PlxyXG4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhcmJlY3VlIl0sInNvdXJjZVJvb3QiOiIifQ==