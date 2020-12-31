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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      adults = _useState[0],
      setAdults = _useState[1]; //const kids = window.document.getElementById('kids').value
  //const duration = window.document.getElementById('duration').value
  //const result = window.document.getElementById('result')


  function calculation() {
    var inputAdults = setAdults(inputAdults + 1);
    console.log(inputAdults);
    var inputKids = kids;
    var inputDuratio = duration;
    var todalAmountOfMeat = meatPerPerson(inputDuratio) * inputAdults + meatPerPerson(inputDuratio) / 2 * inputKids;
    var todalAmountOfBeer = beerPerPerson(inputDuratio) * inputAdults;
    var todalAmountOfDrink = drinkPerPerson(inputDuratio) * inputAdults + meatPerPerson(inputDuratio) / 2 * inputKids;
    result.innerHTML = "<p>".concat(todalAmountOfMeat / 1000, "Kg de Meat<p/>");
    result.innerHTML += "<p>".concat(Math.ceil(todalAmountOfBeer / 355), " Beer Cans<p/>");
    result.innerHTML += "<p>".concat(Math.ceil(todalAmountOfDrink / 2000), " Drink Bottle<p/>");
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
      lineNumber: 51,
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
      lineNumber: 52,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      id: "kids",
      name: "kids",
      type: "number",
      placeholder: "Kids"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      id: "duration",
      name: "duration",
      type: "number",
      placeholder: "Duration (h)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "result"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "pMKJ6+f9d7+wC5yxxk1qv9vBOG8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0cyIsInNldEFkdWx0cyIsImNhbGN1bGF0aW9uIiwiaW5wdXRBZHVsdHMiLCJjb25zb2xlIiwibG9nIiwiaW5wdXRLaWRzIiwia2lkcyIsImlucHV0RHVyYXRpbyIsImR1cmF0aW9uIiwidG9kYWxBbW91bnRPZk1lYXQiLCJtZWF0UGVyUGVyc29uIiwidG9kYWxBbW91bnRPZkJlZXIiLCJiZWVyUGVyUGVyc29uIiwidG9kYWxBbW91bnRPZkRyaW5rIiwiZHJpbmtQZXJQZXJzb24iLCJyZXN1bHQiLCJpbm5lckhUTUwiLCJNYXRoIiwiY2VpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsQ0FBRCxDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJLGlCQUVuQjtBQUNBO0FBQ0E7OztBQUVBLFdBQVNDLFdBQVQsR0FBc0I7QUFDcEIsUUFBTUMsV0FBVyxHQUFHRixTQUFTLENBQUNFLFdBQVcsR0FBRyxDQUFmLENBQTdCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaO0FBRUEsUUFBTUcsU0FBUyxHQUFHQyxJQUFsQjtBQUNBLFFBQU1DLFlBQVksR0FBR0MsUUFBckI7QUFFQSxRQUFNQyxpQkFBaUIsR0FBR0MsYUFBYSxDQUFDSCxZQUFELENBQWIsR0FBOEJMLFdBQTlCLEdBQTZDUSxhQUFhLENBQUNILFlBQUQsQ0FBYixHQUE4QixDQUE5QixHQUFrQ0YsU0FBekc7QUFDQSxRQUFNTSxpQkFBaUIsR0FBR0MsYUFBYSxDQUFDTCxZQUFELENBQWIsR0FBOEJMLFdBQXhEO0FBQ0EsUUFBTVcsa0JBQWtCLEdBQUdDLGNBQWMsQ0FBQ1AsWUFBRCxDQUFkLEdBQStCTCxXQUEvQixHQUE4Q1EsYUFBYSxDQUFDSCxZQUFELENBQWIsR0FBOEIsQ0FBOUIsR0FBa0NGLFNBQTNHO0FBRUFVLFVBQU0sQ0FBQ0MsU0FBUCxnQkFBeUJQLGlCQUFpQixHQUFHLElBQTdDO0FBQ0FNLFVBQU0sQ0FBQ0MsU0FBUCxpQkFBMEJDLElBQUksQ0FBQ0MsSUFBTCxDQUFVUCxpQkFBaUIsR0FBRyxHQUE5QixDQUExQjtBQUNBSSxVQUFNLENBQUNDLFNBQVAsaUJBQTBCQyxJQUFJLENBQUNDLElBQUwsQ0FBVUwsa0JBQWtCLEdBQUcsSUFBL0IsQ0FBMUI7QUFDRDs7QUFFRCxXQUFTSCxhQUFULENBQXVCRixRQUF2QixFQUFnQztBQUM5QixRQUFHQSxRQUFRLElBQUksQ0FBZixFQUFpQjtBQUNmLGFBQU8sR0FBUDtBQUNELEtBRkQsTUFFSztBQUNILGFBQU8sR0FBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBU0ksYUFBVCxDQUF1QkosUUFBdkIsRUFBZ0M7QUFDOUIsUUFBR0EsUUFBUSxJQUFJLENBQWYsRUFBaUI7QUFDZixhQUFPLElBQVA7QUFDRCxLQUZELE1BRUs7QUFDSCxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFdBQVNNLGNBQVQsQ0FBd0JOLFFBQXhCLEVBQWlDO0FBQy9CLFFBQUdBLFFBQVEsSUFBSSxDQUFmLEVBQWlCO0FBQ2YsYUFBTyxJQUFQO0FBQ0QsS0FGRCxNQUVLO0FBQ0gsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBTyxlQUFTLEVBQUMsYUFBakI7QUFBK0IsUUFBRSxFQUFDLFFBQWxDO0FBQTJDLFVBQUksRUFBQyxRQUFoRDtBQUF5RCxVQUFJLEVBQUMsUUFBOUQ7QUFBdUUsaUJBQVcsRUFBQyxRQUFuRjtBQUE0RixXQUFLLEVBQUVUO0FBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQU8sZUFBUyxFQUFDLGFBQWpCO0FBQStCLFFBQUUsRUFBQyxNQUFsQztBQUF5QyxVQUFJLEVBQUMsTUFBOUM7QUFBcUQsVUFBSSxFQUFDLFFBQTFEO0FBQW1FLGlCQUFXLEVBQUM7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBSUk7QUFBTyxlQUFTLEVBQUMsYUFBakI7QUFBK0IsUUFBRSxFQUFDLFVBQWxDO0FBQTZDLFVBQUksRUFBQyxVQUFsRDtBQUE2RCxVQUFJLEVBQUMsUUFBbEU7QUFBMkUsaUJBQVcsRUFBQztBQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSTtBQUFRLGVBQVMsRUFBQyxtQkFBbEI7QUFBc0MsYUFBTyxFQUFFRSxXQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBTUk7QUFBSyxRQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXQzs7R0F6RFFKLFE7O0tBQUFBLFE7QUEyRE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ2Y2UyODJhMmVkNDUxMmJjNmNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gQmFyYmVjdWUoKXtcclxuY29uc3QgW2FkdWx0cywgc2V0QWR1bHRzXSA9IHVzZVN0YXRlKDApXHJcbi8vY29uc3Qga2lkcyA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2lkcycpLnZhbHVlXHJcbi8vY29uc3QgZHVyYXRpb24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1cmF0aW9uJykudmFsdWVcclxuLy9jb25zdCByZXN1bHQgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpXHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGlvbigpe1xyXG4gIGNvbnN0IGlucHV0QWR1bHRzID0gc2V0QWR1bHRzKGlucHV0QWR1bHRzICsgMSlcclxuICBjb25zb2xlLmxvZyhpbnB1dEFkdWx0cylcclxuXHJcbiAgY29uc3QgaW5wdXRLaWRzID0ga2lkc1xyXG4gIGNvbnN0IGlucHV0RHVyYXRpbyA9IGR1cmF0aW9uXHJcblxyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZNZWF0ID0gbWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW8pICogaW5wdXRBZHVsdHMgKyAobWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW8pIC8gMiAqIGlucHV0S2lkcylcclxuICBjb25zdCB0b2RhbEFtb3VudE9mQmVlciA9IGJlZXJQZXJQZXJzb24oaW5wdXREdXJhdGlvKSAqIGlucHV0QWR1bHRzXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZkRyaW5rID0gZHJpbmtQZXJQZXJzb24oaW5wdXREdXJhdGlvKSAqIGlucHV0QWR1bHRzICsgKG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvKSAvIDIgKiBpbnB1dEtpZHMpXHJcblxyXG4gIHJlc3VsdC5pbm5lckhUTUwgPSBgPHA+JHt0b2RhbEFtb3VudE9mTWVhdCAvIDEwMDB9S2cgZGUgTWVhdDxwLz5gXHJcbiAgcmVzdWx0LmlubmVySFRNTCArPSBgPHA+JHtNYXRoLmNlaWwodG9kYWxBbW91bnRPZkJlZXIgLyAzNTUpfSBCZWVyIENhbnM8cC8+YFxyXG4gIHJlc3VsdC5pbm5lckhUTUwgKz0gYDxwPiR7TWF0aC5jZWlsKHRvZGFsQW1vdW50T2ZEcmluayAvIDIwMDApfSBEcmluayBCb3R0bGU8cC8+YFxyXG59XHJcblxyXG5mdW5jdGlvbiBtZWF0UGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiA2NTBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiA0MDBcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZXJQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDIwMDBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiAxMjAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmlua1BlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gMTUwMFxyXG4gIH1lbHNle1xyXG4gICAgcmV0dXJuIDEwMDBcclxuICB9XHJcbn1cclxuXHJcbnJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J2JhcmJlY3VlJz5CYXJiZWN1ZTwvaDE+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIGlkPSdhZHVsdHMnIG5hbWU9J2FkdWx0cycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nQWR1bHRzJyB2YWx1ZT17YWR1bHRzfSAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyBpZD0na2lkcycgbmFtZT0na2lkcycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nS2lkcycgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgaWQ9J2R1cmF0aW9uJyBuYW1lPSdkdXJhdGlvbicgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nRHVyYXRpb24gKGgpJyAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjYWxjdWxhdGlvbkdsb2JhbCcgb25DbGljaz17Y2FsY3VsYXRpb259PkNhbGN1bGF0aW9uPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBpZD0ncmVzdWx0Jz48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhcmJlY3VlIl0sInNvdXJjZVJvb3QiOiIifQ==