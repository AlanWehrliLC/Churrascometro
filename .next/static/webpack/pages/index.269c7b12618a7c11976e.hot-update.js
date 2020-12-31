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
    setAdults([adults, adult]); //const restAdults = adults.pop(adult => ({adult}))

    var restKids = kids.pop(function (kid) {
      return {
        kid: kid
      };
    });
    setResultado(console.log(restKids));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "barbecue",
      children: "Barbecue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      id: "adults",
      value: adult,
      onVolumeChange: function onVolumeChange(e) {
        return setAdult(e.target.value);
      },
      name: "adults",
      type: "number",
      placeholder: "Adults"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 26,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0cyIsInNldEFkdWx0cyIsImFkdWx0Iiwic2V0QWR1bHQiLCJraWRzIiwic2V0S2lkcyIsImtpZCIsInNldEtpZCIsInJlc3VsdGFkbyIsInNldFJlc3VsdGFkbyIsImNhbGN1bGF0aW9uIiwicmVzdEtpZHMiLCJwb3AiLCJjb25zb2xlIiwibG9nIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsR0FBbUI7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDWkMsTUFEWTtBQUFBLE1BQ0pDLFNBREk7O0FBQUEsbUJBRU9GLHNEQUFRLEVBRmY7QUFBQSxNQUVaRyxLQUZZO0FBQUEsTUFFTEMsUUFGSzs7QUFBQSxtQkFJS0osc0RBQVEsQ0FBQyxFQUFELENBSmI7QUFBQSxNQUlaSyxJQUpZO0FBQUEsTUFJTkMsT0FKTTs7QUFBQSxtQkFLR04sc0RBQVEsRUFMWDtBQUFBLE1BS1pPLEdBTFk7QUFBQSxNQUtQQyxNQUxPOztBQUFBLG1CQU9lUixzREFBUSxFQVB2QjtBQUFBLE1BT1pTLFNBUFk7QUFBQSxNQU9EQyxZQVBDOztBQVNuQixXQUFTQyxXQUFULEdBQXNCO0FBQ3BCTCxXQUFPLENBQUMsQ0FBQ0QsSUFBRCxFQUFNRSxHQUFOLENBQUQsQ0FBUDtBQUNBTCxhQUFTLENBQUMsQ0FBQ0QsTUFBRCxFQUFTRSxLQUFULENBQUQsQ0FBVCxDQUZvQixDQUdwQjs7QUFDQSxRQUFNUyxRQUFRLEdBQUdQLElBQUksQ0FBQ1EsR0FBTCxDQUFTLFVBQUFOLEdBQUc7QUFBQSxhQUFLO0FBQUNBLFdBQUcsRUFBSEE7QUFBRCxPQUFMO0FBQUEsS0FBWixDQUFqQjtBQUVBRyxnQkFBWSxDQUFDSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBWixDQUFELENBQVo7QUFDRDs7QUFHRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTyxlQUFTLEVBQUMsYUFBakI7QUFBK0IsUUFBRSxFQUFDLFFBQWxDO0FBQTJDLFdBQUssRUFBRVQsS0FBbEQ7QUFBeUQsb0JBQWMsRUFBRSx3QkFBQ2EsQ0FBRDtBQUFBLGVBQUtaLFFBQVEsQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUFBLE9BQXpFO0FBQXdHLFVBQUksRUFBQyxRQUE3RztBQUFzSCxVQUFJLEVBQUMsUUFBM0g7QUFBb0ksaUJBQVcsRUFBQztBQUFoSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFPLGVBQVMsRUFBQyxhQUFqQjtBQUErQixRQUFFLEVBQUMsTUFBbEM7QUFBeUMsV0FBSyxFQUFFYixJQUFoRDtBQUFzRCxjQUFRLEVBQUUsa0JBQUNXLENBQUQ7QUFBQSxlQUFLUixNQUFNLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBQSxPQUFoRTtBQUE2RixVQUFJLEVBQUMsTUFBbEc7QUFBeUcsVUFBSSxFQUFDLFFBQTlHO0FBQXVILGlCQUFXLEVBQUM7QUFBbkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBSUk7QUFBUSxlQUFTLEVBQUMsbUJBQWxCO0FBQXNDLGFBQU8sRUFBRVAsV0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixFQUtLRixTQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUM7O0dBN0JRVixROztLQUFBQSxRO0FBK0JNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNjljN2IxMjYxOGE3YzExOTc2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJhcmJlY3VlKCl7XHJcbmNvbnN0IFthZHVsdHMsIHNldEFkdWx0c10gPSB1c2VTdGF0ZShbXSlcclxuY29uc3QgW2FkdWx0LCBzZXRBZHVsdF0gPSB1c2VTdGF0ZSgpXHJcblxyXG5jb25zdCBba2lkcywgc2V0S2lkc10gPSB1c2VTdGF0ZShbXSlcclxuY29uc3QgW2tpZCwgc2V0S2lkXSA9IHVzZVN0YXRlKClcclxuXHJcbmNvbnN0IFtyZXN1bHRhZG8sIHNldFJlc3VsdGFkb10gPSB1c2VTdGF0ZSgpXHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGlvbigpe1xyXG4gIHNldEtpZHMoW2tpZHMsa2lkXSlcclxuICBzZXRBZHVsdHMoW2FkdWx0cywgYWR1bHRdKVxyXG4gIC8vY29uc3QgcmVzdEFkdWx0cyA9IGFkdWx0cy5wb3AoYWR1bHQgPT4gKHthZHVsdH0pKVxyXG4gIGNvbnN0IHJlc3RLaWRzID0ga2lkcy5wb3Aoa2lkID0+ICh7a2lkfSkpXHJcblxyXG4gIHNldFJlc3VsdGFkbyhjb25zb2xlLmxvZyhyZXN0S2lkcykpXHJcbn1cclxuXHJcblxyXG5yZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdiYXJiZWN1ZSc+QmFyYmVjdWU8L2gxPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyBpZD0nYWR1bHRzJyB2YWx1ZT17YWR1bHR9IG9uVm9sdW1lQ2hhbmdlPXsoZSk9PnNldEFkdWx0KGUudGFyZ2V0LnZhbHVlKX0gbmFtZT0nYWR1bHRzJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdBZHVsdHMnICAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyBpZD0na2lkcycgdmFsdWU9e2tpZHN9IG9uQ2hhbmdlPXsoZSk9PnNldEtpZChlLnRhcmdldC52YWx1ZSl9IG5hbWU9J2tpZHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0tpZHMnICAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjYWxjdWxhdGlvbkdsb2JhbCcgb25DbGljaz17Y2FsY3VsYXRpb259PkNhbGN1bGF0aW9uPC9idXR0b24+XHJcbiAgICAgICAge3Jlc3VsdGFkb31cclxuICAgICAgPC9kaXY+XHJcbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhcmJlY3VlIl0sInNvdXJjZVJvb3QiOiIifQ==