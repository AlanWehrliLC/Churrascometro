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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      resultado = _useState5[0],
      setResultado = _useState5[1];

  function calculation() {
    setKids([kids, kid]);
    setAdults([adults, adult]);
    var restAdults = adults.pop(function (adult) {
      return {
        adult: adult
      };
    });
    var restKids = adults.pop(function (adult) {
      return {
        adult: adult
      };
    });
    setResultado(console.log(restAdults));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "barbecue",
      children: "Barbecue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 23,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      id: "kids",
      value: kids,
      onChange: function onChange(e) {
        return setKid(e.target.value);
      },
      name: "kids",
      type: "number",
      placeholder: "Kids"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "XvQyWq9PUJBVcvMRZRdw/3EYQyw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0cyIsInNldEFkdWx0cyIsImFkdWx0Iiwic2V0QWR1bHQiLCJraWRzIiwic2V0S2lkcyIsImtpZCIsInNldEtpZCIsInJlc3VsdGFkbyIsInNldFJlc3VsdGFkbyIsImNhbGN1bGF0aW9uIiwicmVzdEFkdWx0cyIsInBvcCIsInJlc3RLaWRzIiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsRUFBRCxDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJOztBQUFBLG1CQUVPRixzREFBUSxFQUZmO0FBQUEsTUFFWkcsS0FGWTtBQUFBLE1BRUxDLFFBRks7O0FBQUEsbUJBR0tKLHNEQUFRLENBQUMsRUFBRCxDQUhiO0FBQUEsTUFHWkssSUFIWTtBQUFBLE1BR05DLE9BSE07O0FBQUEsbUJBSUdOLHNEQUFRLEVBSlg7QUFBQSxNQUlaTyxHQUpZO0FBQUEsTUFJUEMsTUFKTzs7QUFBQSxtQkFLZVIsc0RBQVEsRUFMdkI7QUFBQSxNQUtaUyxTQUxZO0FBQUEsTUFLREMsWUFMQzs7QUFPbkIsV0FBU0MsV0FBVCxHQUFzQjtBQUNwQkwsV0FBTyxDQUFDLENBQUNELElBQUQsRUFBTUUsR0FBTixDQUFELENBQVA7QUFDQUwsYUFBUyxDQUFDLENBQUNELE1BQUQsRUFBU0UsS0FBVCxDQUFELENBQVQ7QUFDQSxRQUFNUyxVQUFVLEdBQUdYLE1BQU0sQ0FBQ1ksR0FBUCxDQUFXLFVBQUFWLEtBQUs7QUFBQSxhQUFLO0FBQUNBLGFBQUssRUFBTEE7QUFBRCxPQUFMO0FBQUEsS0FBaEIsQ0FBbkI7QUFDQSxRQUFNVyxRQUFRLEdBQUdiLE1BQU0sQ0FBQ1ksR0FBUCxDQUFXLFVBQUFWLEtBQUs7QUFBQSxhQUFLO0FBQUNBLGFBQUssRUFBTEE7QUFBRCxPQUFMO0FBQUEsS0FBaEIsQ0FBakI7QUFFQU8sZ0JBQVksQ0FBQ0ssT0FBTyxDQUFDQyxHQUFSLENBQVlKLFVBQVosQ0FBRCxDQUFaO0FBQ0Q7O0FBR0Qsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU8sZUFBUyxFQUFDLGFBQWpCO0FBQStCLFFBQUUsRUFBQyxRQUFsQztBQUEyQyxXQUFLLEVBQUVULEtBQWxEO0FBQXlELGNBQVEsRUFBRSxrQkFBQ2MsQ0FBRDtBQUFBLGVBQUtiLFFBQVEsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUFBLE9BQW5FO0FBQWtHLFVBQUksRUFBQyxRQUF2RztBQUFnSCxVQUFJLEVBQUMsUUFBckg7QUFBOEgsaUJBQVcsRUFBQztBQUExSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFPLGVBQVMsRUFBQyxhQUFqQjtBQUErQixRQUFFLEVBQUMsTUFBbEM7QUFBeUMsV0FBSyxFQUFFZCxJQUFoRDtBQUFzRCxjQUFRLEVBQUUsa0JBQUNZLENBQUQ7QUFBQSxlQUFLVCxNQUFNLENBQUNTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBQSxPQUFoRTtBQUE2RixVQUFJLEVBQUMsTUFBbEc7QUFBeUcsVUFBSSxFQUFDLFFBQTlHO0FBQXVILGlCQUFXLEVBQUM7QUFBbkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBSUk7QUFBUSxlQUFTLEVBQUMsbUJBQWxCO0FBQXNDLGFBQU8sRUFBRVIsV0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixFQUtLRixTQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUM7O0dBM0JRVixROztLQUFBQSxRO0FBNkJNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNmE2OTkzNDI2MTdkNWVmNDU2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJhcmJlY3VlKCl7XHJcbmNvbnN0IFthZHVsdHMsIHNldEFkdWx0c10gPSB1c2VTdGF0ZShbXSlcclxuY29uc3QgW2FkdWx0LCBzZXRBZHVsdF0gPSB1c2VTdGF0ZSgpXHJcbmNvbnN0IFtraWRzLCBzZXRLaWRzXSA9IHVzZVN0YXRlKFtdKVxyXG5jb25zdCBba2lkLCBzZXRLaWRdID0gdXNlU3RhdGUoKVxyXG5jb25zdCBbcmVzdWx0YWRvLCBzZXRSZXN1bHRhZG9dID0gdXNlU3RhdGUoKVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRpb24oKXtcclxuICBzZXRLaWRzKFtraWRzLGtpZF0pXHJcbiAgc2V0QWR1bHRzKFthZHVsdHMsIGFkdWx0XSlcclxuICBjb25zdCByZXN0QWR1bHRzID0gYWR1bHRzLnBvcChhZHVsdCA9PiAoe2FkdWx0fSkpXHJcbiAgY29uc3QgcmVzdEtpZHMgPSBhZHVsdHMucG9wKGFkdWx0ID0+ICh7YWR1bHR9KSlcclxuXHJcbiAgc2V0UmVzdWx0YWRvKGNvbnNvbGUubG9nKHJlc3RBZHVsdHMpKVxyXG59XHJcblxyXG5cclxucmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nYmFyYmVjdWUnPkJhcmJlY3VlPC9oMT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgaWQ9J2FkdWx0cycgdmFsdWU9e2FkdWx0fSBvbkNoYW5nZT17KGUpPT5zZXRBZHVsdChlLnRhcmdldC52YWx1ZSl9IG5hbWU9J2FkdWx0cycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nQWR1bHRzJyAgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgaWQ9J2tpZHMnIHZhbHVlPXtraWRzfSBvbkNoYW5nZT17KGUpPT5zZXRLaWQoZS50YXJnZXQudmFsdWUpfSBuYW1lPSdraWRzJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdLaWRzJyAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2FsY3VsYXRpb25HbG9iYWwnIG9uQ2xpY2s9e2NhbGN1bGF0aW9ufT5DYWxjdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIHtyZXN1bHRhZG99XHJcbiAgICAgIDwvZGl2PlxyXG4pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXJiZWN1ZSJdLCJzb3VyY2VSb290IjoiIn0=