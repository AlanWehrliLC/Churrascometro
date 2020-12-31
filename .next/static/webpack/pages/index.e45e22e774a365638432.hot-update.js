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
      adults = _useState[0],
      setAdults = _useState[1]; //const kids = window.document.getElementById('kids').value
  //const duration = window.document.getElementById('duration').value
  //const result = window.document.getElementById('result')


  function calculation() {}

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
      lineNumber: 39,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      id: "adults",
      name: "adults",
      type: "number",
      placeholder: "Adults",
      value: adults
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      id: "kids",
      name: "kids",
      type: "number",
      placeholder: "Kids"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      id: "duration",
      name: "duration",
      type: "number",
      placeholder: "Duration (h)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "result",
      children: adult
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "O7edndZExDC2F+hh2XWwSuFQ4ko=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0cyIsInNldEFkdWx0cyIsImNhbGN1bGF0aW9uIiwibWVhdFBlclBlcnNvbiIsImR1cmF0aW9uIiwiYmVlclBlclBlcnNvbiIsImRyaW5rUGVyUGVyc29uIiwiYWR1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxFQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJLGlCQUVuQjtBQUNBO0FBQ0E7OztBQUVBLFdBQVNDLFdBQVQsR0FBc0IsQ0FFckI7O0FBRUQsV0FBU0MsYUFBVCxDQUF1QkMsUUFBdkIsRUFBZ0M7QUFDOUIsUUFBR0EsUUFBUSxJQUFJLENBQWYsRUFBaUI7QUFDZixhQUFPLEdBQVA7QUFDRCxLQUZELE1BRUs7QUFDSCxhQUFPLEdBQVA7QUFDRDtBQUNGOztBQUVELFdBQVNDLGFBQVQsQ0FBdUJELFFBQXZCLEVBQWdDO0FBQzlCLFFBQUdBLFFBQVEsSUFBSSxDQUFmLEVBQWlCO0FBQ2YsYUFBTyxJQUFQO0FBQ0QsS0FGRCxNQUVLO0FBQ0gsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTRSxjQUFULENBQXdCRixRQUF4QixFQUFpQztBQUMvQixRQUFHQSxRQUFRLElBQUksQ0FBZixFQUFpQjtBQUNmLGFBQU8sSUFBUDtBQUNELEtBRkQsTUFFSztBQUNILGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU8sZUFBUyxFQUFDLGFBQWpCO0FBQStCLFFBQUUsRUFBQyxRQUFsQztBQUEyQyxVQUFJLEVBQUMsUUFBaEQ7QUFBeUQsVUFBSSxFQUFDLFFBQTlEO0FBQXVFLGlCQUFXLEVBQUMsUUFBbkY7QUFBNEYsV0FBSyxFQUFFSjtBQUFuRztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFPLGVBQVMsRUFBQyxhQUFqQjtBQUErQixRQUFFLEVBQUMsTUFBbEM7QUFBeUMsVUFBSSxFQUFDLE1BQTlDO0FBQXFELFVBQUksRUFBQyxRQUExRDtBQUFtRSxpQkFBVyxFQUFDO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJO0FBQU8sZUFBUyxFQUFDLGFBQWpCO0FBQStCLFFBQUUsRUFBQyxVQUFsQztBQUE2QyxVQUFJLEVBQUMsVUFBbEQ7QUFBNkQsVUFBSSxFQUFDLFFBQWxFO0FBQTJFLGlCQUFXLEVBQUM7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBS0k7QUFBUSxlQUFTLEVBQUMsbUJBQWxCO0FBQXNDLGFBQU8sRUFBRUUsV0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQU1JO0FBQUssUUFBRSxFQUFDLFFBQVI7QUFBQSxnQkFBa0JLO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdDOztHQTdDUVQsUTs7S0FBQUEsUTtBQStDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTQ1ZTIyZTc3NGEzNjU2Mzg0MzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBCYXJiZWN1ZSgpe1xyXG5jb25zdCBbYWR1bHRzLCBzZXRBZHVsdHNdID0gdXNlU3RhdGUoKVxyXG4vL2NvbnN0IGtpZHMgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tpZHMnKS52YWx1ZVxyXG4vL2NvbnN0IGR1cmF0aW9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdXJhdGlvbicpLnZhbHVlXHJcbi8vY29uc3QgcmVzdWx0ID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRpb24oKXtcclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gbWVhdFBlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gNjUwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gNDAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiZWVyUGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiAyMDAwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gMTIwMFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJpbmtQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDE1MDBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiAxMDAwXHJcbiAgfVxyXG59XHJcblxyXG5yZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdiYXJiZWN1ZSc+QmFyYmVjdWU8L2gxPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyBpZD0nYWR1bHRzJyBuYW1lPSdhZHVsdHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0FkdWx0cycgdmFsdWU9e2FkdWx0c30gLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgaWQ9J2tpZHMnIG5hbWU9J2tpZHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0tpZHMnIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIGlkPSdkdXJhdGlvbicgbmFtZT0nZHVyYXRpb24nIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0R1cmF0aW9uIChoKScgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2FsY3VsYXRpb25HbG9iYWwnIG9uQ2xpY2s9e2NhbGN1bGF0aW9ufT5DYWxjdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgaWQ9J3Jlc3VsdCc+e2FkdWx0fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFyYmVjdWUiXSwic291cmNlUm9vdCI6IiJ9