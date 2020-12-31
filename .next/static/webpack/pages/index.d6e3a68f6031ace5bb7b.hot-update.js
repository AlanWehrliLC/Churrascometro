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

  var _s = $RefreshSig$();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      adults = _useState[0],
      setAdults = _useState[1]; //const kids = window.document.getElementById('kids').value
  //const duration = window.document.getElementById('duration').value
  //const result = window.document.getElementById('result')


  function calculation() {
    _s();

    var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(setAdults(adults)),
        adult = _useState2[0],
        setAdult = _useState2[1];

    setAdult;
    console.log(adult);
  }

  _s(calculation, "mlfvuU/NFq2Qh7UrL12ehIh40Vs=");

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
      lineNumber: 41,
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
      lineNumber: 42,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      id: "kids",
      name: "kids",
      type: "number",
      placeholder: "Kids"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      id: "duration",
      name: "duration",
      type: "number",
      placeholder: "Duration (h)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "result",
      children: adult
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s2(Barbecue, "O7edndZExDC2F+hh2XWwSuFQ4ko=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0cyIsInNldEFkdWx0cyIsImNhbGN1bGF0aW9uIiwiYWR1bHQiLCJzZXRBZHVsdCIsImNvbnNvbGUiLCJsb2ciLCJtZWF0UGVyUGVyc29uIiwiZHVyYXRpb24iLCJiZWVyUGVyUGVyc29uIiwiZHJpbmtQZXJQZXJzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxFQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJLGlCQUVuQjtBQUNBO0FBQ0E7OztBQUVBLFdBQVNDLFdBQVQsR0FBc0I7QUFBQTs7QUFBQSxxQkFDTUgsc0RBQVEsQ0FBQ0UsU0FBUyxDQUFDRCxNQUFELENBQVYsQ0FEZDtBQUFBLFFBQ2JHLEtBRGE7QUFBQSxRQUNOQyxRQURNOztBQUVwQkEsWUFBUTtBQUNSQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNEOztBQVZrQixLQU1WRCxXQU5VOztBQVluQixXQUFTSyxhQUFULENBQXVCQyxRQUF2QixFQUFnQztBQUM5QixRQUFHQSxRQUFRLElBQUksQ0FBZixFQUFpQjtBQUNmLGFBQU8sR0FBUDtBQUNELEtBRkQsTUFFSztBQUNILGFBQU8sR0FBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBU0MsYUFBVCxDQUF1QkQsUUFBdkIsRUFBZ0M7QUFDOUIsUUFBR0EsUUFBUSxJQUFJLENBQWYsRUFBaUI7QUFDZixhQUFPLElBQVA7QUFDRCxLQUZELE1BRUs7QUFDSCxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFdBQVNFLGNBQVQsQ0FBd0JGLFFBQXhCLEVBQWlDO0FBQy9CLFFBQUdBLFFBQVEsSUFBSSxDQUFmLEVBQWlCO0FBQ2YsYUFBTyxJQUFQO0FBQ0QsS0FGRCxNQUVLO0FBQ0gsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTyxlQUFTLEVBQUMsYUFBakI7QUFBK0IsUUFBRSxFQUFDLFFBQWxDO0FBQTJDLFVBQUksRUFBQyxRQUFoRDtBQUF5RCxVQUFJLEVBQUMsUUFBOUQ7QUFBdUUsaUJBQVcsRUFBQyxRQUFuRjtBQUE0RixXQUFLLEVBQUVSO0FBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQU8sZUFBUyxFQUFDLGFBQWpCO0FBQStCLFFBQUUsRUFBQyxNQUFsQztBQUF5QyxVQUFJLEVBQUMsTUFBOUM7QUFBcUQsVUFBSSxFQUFDLFFBQTFEO0FBQW1FLGlCQUFXLEVBQUM7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBSUk7QUFBTyxlQUFTLEVBQUMsYUFBakI7QUFBK0IsUUFBRSxFQUFDLFVBQWxDO0FBQTZDLFVBQUksRUFBQyxVQUFsRDtBQUE2RCxVQUFJLEVBQUMsUUFBbEU7QUFBMkUsaUJBQVcsRUFBQztBQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSTtBQUFRLGVBQVMsRUFBQyxtQkFBbEI7QUFBc0MsYUFBTyxFQUFFRSxXQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBTUk7QUFBSyxRQUFFLEVBQUMsUUFBUjtBQUFBLGdCQUFrQkM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0M7O0lBL0NRTCxROztLQUFBQSxRO0FBaURNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNmUzYTY4ZjYwMzFhY2U1YmI3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJhcmJlY3VlKCl7XHJcbmNvbnN0IFthZHVsdHMsIHNldEFkdWx0c10gPSB1c2VTdGF0ZSgpXHJcbi8vY29uc3Qga2lkcyA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2lkcycpLnZhbHVlXHJcbi8vY29uc3QgZHVyYXRpb24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1cmF0aW9uJykudmFsdWVcclxuLy9jb25zdCByZXN1bHQgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpXHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGlvbigpe1xyXG4gIGNvbnN0IFthZHVsdCwgc2V0QWR1bHRdID0gdXNlU3RhdGUoc2V0QWR1bHRzKGFkdWx0cykpXHJcbiAgc2V0QWR1bHRcclxuICBjb25zb2xlLmxvZyhhZHVsdClcclxufVxyXG5cclxuZnVuY3Rpb24gbWVhdFBlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gNjUwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gNDAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiZWVyUGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiAyMDAwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gMTIwMFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJpbmtQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDE1MDBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiAxMDAwXHJcbiAgfVxyXG59XHJcblxyXG5yZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdiYXJiZWN1ZSc+QmFyYmVjdWU8L2gxPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyBpZD0nYWR1bHRzJyBuYW1lPSdhZHVsdHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0FkdWx0cycgdmFsdWU9e2FkdWx0c30gLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgaWQ9J2tpZHMnIG5hbWU9J2tpZHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0tpZHMnIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIGlkPSdkdXJhdGlvbicgbmFtZT0nZHVyYXRpb24nIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0R1cmF0aW9uIChoKScgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2FsY3VsYXRpb25HbG9iYWwnIG9uQ2xpY2s9e2NhbGN1bGF0aW9ufT5DYWxjdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgaWQ9J3Jlc3VsdCc+e2FkdWx0fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFyYmVjdWUiXSwic291cmNlUm9vdCI6IiJ9