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
    _s2 = $RefreshSig$();



function Barbecue() {
  _s2();

  var _s = $RefreshSig$(),
      _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      adults = _useState[0],
      setAdults = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      adult = _useState2[0],
      setAdult = _useState2[1];

  function calculation() {
    _s();

    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        resultado = _useState3[0],
        setResultado = _useState3[1];
  }

  _s(calculation, "RKGuSFo4PCC2sEuy0Nbu8C91PZs=");

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "barbecue",
      children: "Barbecue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
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
      lineNumber: 15,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: resultado
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this), adults.map(function (adult) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: adult
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 29
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_s2(Barbecue, "tf/S6TIoLrt5dNo6CgQFFXJT22Y=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0cyIsInNldEFkdWx0cyIsImFkdWx0Iiwic2V0QWR1bHQiLCJjYWxjdWxhdGlvbiIsInJlc3VsdGFkbyIsInNldFJlc3VsdGFkbyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDWkMsTUFEWTtBQUFBLE1BQ0pDLFNBREk7O0FBQUEsbUJBRU9GLHNEQUFRLEVBRmY7QUFBQSxNQUVaRyxLQUZZO0FBQUEsTUFFTEMsUUFGSzs7QUFJbkIsV0FBU0MsV0FBVCxHQUFzQjtBQUFBOztBQUFBLHFCQUNjTCxzREFBUSxFQUR0QjtBQUFBLFFBQ2JNLFNBRGE7QUFBQSxRQUNGQyxZQURFO0FBR3JCOztBQVBrQixLQUlWRixXQUpVOztBQVNuQixzQkFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTyxlQUFTLEVBQUMsYUFBakI7QUFBK0IsUUFBRSxFQUFDLFFBQWxDO0FBQTJDLFdBQUssRUFBRUYsS0FBbEQ7QUFBeUQsY0FBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEsZUFBS0osUUFBUSxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQUEsT0FBbkU7QUFBa0csVUFBSSxFQUFDLFFBQXZHO0FBQWdILFVBQUksRUFBQyxRQUFySDtBQUE4SCxpQkFBVyxFQUFDO0FBQTFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQVEsZUFBUyxFQUFDLG1CQUFsQjtBQUFzQyxhQUFPLEVBQUVMLFdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFBLGdCQUFNQztBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixFQUtLTCxNQUFNLENBQUNVLEdBQVAsQ0FBVyxVQUFBUixLQUFLO0FBQUEsMEJBQUc7QUFBQSxrQkFBTUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUg7QUFBQSxLQUFoQixDQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUM7O0lBbkJRSixROztLQUFBQSxRO0FBcUJNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMzMwNTExNzA2MzExMDI2Yjk5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJhcmJlY3VlKCl7XHJcbmNvbnN0IFthZHVsdHMsIHNldEFkdWx0c10gPSB1c2VTdGF0ZShbXSlcclxuY29uc3QgW2FkdWx0LCBzZXRBZHVsdF0gPSB1c2VTdGF0ZSgpXHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGlvbigpe1xyXG4gIGNvbnN0IFtyZXN1bHRhZG8sIHNldFJlc3VsdGFkb10gPSB1c2VTdGF0ZSgpXHJcbiAgXHJcbn1cclxuXHJcbnJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J2JhcmJlY3VlJz5CYXJiZWN1ZTwvaDE+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIGlkPSdhZHVsdHMnIHZhbHVlPXthZHVsdH0gb25DaGFuZ2U9eyhlKT0+c2V0QWR1bHQoZS50YXJnZXQudmFsdWUpfSBuYW1lPSdhZHVsdHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0FkdWx0cycgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2NhbGN1bGF0aW9uR2xvYmFsJyBvbkNsaWNrPXtjYWxjdWxhdGlvbn0+Q2FsY3VsYXRpb248L2J1dHRvbj5cclxuICAgICAgICA8ZGl2PntyZXN1bHRhZG99PC9kaXY+XHJcbiAgICAgICAge2FkdWx0cy5tYXAoYWR1bHQ9Pig8ZGl2PnthZHVsdH08L2Rpdj4pKX1cclxuICAgICAgPC9kaXY+XHJcbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhcmJlY3VlIl0sInNvdXJjZVJvb3QiOiIifQ==