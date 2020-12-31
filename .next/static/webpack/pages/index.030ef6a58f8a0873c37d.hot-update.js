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

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      adults = _useState[0],
      setAdults = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      adult = _useState2[0],
      setAdult = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      className: "barbecue",
      children: "Barbecue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
      className: "inputGlobal",
      id: "adults",
      value: adult,
      onChange: function onChange(e) {
        return setAdult(e.target.value);
      },
      name: "adults",
      type: "number",
      placeholder: "Adults"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: function onClick() {
        return setAdults([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(adults), [adult]));
      },
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this), adults.map(function (adult) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: adult
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 29
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "9HcMsEY8K2kTk8a9fZaF3IkC8lo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0cyIsInNldEFkdWx0cyIsImFkdWx0Iiwic2V0QWR1bHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLEVBRGpCO0FBQUEsTUFDWkMsTUFEWTtBQUFBLE1BQ0pDLFNBREk7O0FBQUEsbUJBRU9GLHNEQUFRLEVBRmY7QUFBQSxNQUVaRyxLQUZZO0FBQUEsTUFFTEMsUUFGSzs7QUFLbkIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU8sZUFBUyxFQUFDLGFBQWpCO0FBQStCLFFBQUUsRUFBQyxRQUFsQztBQUEyQyxXQUFLLEVBQUVELEtBQWxEO0FBQXlELGNBQVEsRUFBRSxrQkFBQ0UsQ0FBRDtBQUFBLGVBQUtELFFBQVEsQ0FBQ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUFBLE9BQW5FO0FBQWtHLFVBQUksRUFBQyxRQUF2RztBQUFnSCxVQUFJLEVBQUMsUUFBckg7QUFBOEgsaUJBQVcsRUFBQztBQUExSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFRLGVBQVMsRUFBQyxtQkFBbEI7QUFBc0MsYUFBTyxFQUFFO0FBQUEsZUFBTUwsU0FBUyx3R0FBTUQsTUFBTixJQUFjRSxLQUFkLEdBQWY7QUFBQSxPQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLEVBSUtGLE1BQU0sQ0FBQ08sR0FBUCxDQUFXLFVBQUFMLEtBQUs7QUFBQSwwQkFBRztBQUFBLGtCQUFNQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSDtBQUFBLEtBQWhCLENBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTQzs7R0FkUUosUTs7S0FBQUEsUTtBQWdCTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDMwZWY2YTU4ZjhhMDg3M2MzN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBCYXJiZWN1ZSgpe1xyXG5jb25zdCBbYWR1bHRzLCBzZXRBZHVsdHNdID0gdXNlU3RhdGUoKVxyXG5jb25zdCBbYWR1bHQsIHNldEFkdWx0XSA9IHVzZVN0YXRlKClcclxuXHJcblxyXG5yZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdiYXJiZWN1ZSc+QmFyYmVjdWU8L2gxPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyBpZD0nYWR1bHRzJyB2YWx1ZT17YWR1bHR9IG9uQ2hhbmdlPXsoZSk9PnNldEFkdWx0KGUudGFyZ2V0LnZhbHVlKX0gbmFtZT0nYWR1bHRzJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdBZHVsdHMnICAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjYWxjdWxhdGlvbkdsb2JhbCcgb25DbGljaz17KCkgPT4gc2V0QWR1bHRzKFsuLi4gYWR1bHRzLCBhZHVsdF0pfT5DYWxjdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIHthZHVsdHMubWFwKGFkdWx0PT4oPGRpdj57YWR1bHR9PC9kaXY+KSl9XHJcbiAgICAgIDwvZGl2PlxyXG4pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXJiZWN1ZSJdLCJzb3VyY2VSb290IjoiIn0=