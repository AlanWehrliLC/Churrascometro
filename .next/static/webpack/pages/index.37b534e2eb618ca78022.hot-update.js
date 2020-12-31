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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0]),
      adults = _useState2[0],
      setAdults = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      kid = _useState3[0],
      setKid = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0]),
      kids = _useState4[0],
      setKids = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      duration = _useState5[0],
      setDuration = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0]),
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

    function reset() {
      if (adults > 0 || kids > 0 || durations > 0) {
        setAdults([adults]), setKids([kids]), setDurations([durations]);
      }
    }

    console.log(inputAdults, inputKids, inputDurations);
    return setResultado(screenDiv), reset();
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
      lineNumber: 90,
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
      lineNumber: 91,
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
      lineNumber: 92,
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
      lineNumber: 93,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      onChange: limpeza,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "fplNDc43wpia07IyeTdKlAbUIVg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0Iiwic2V0QWR1bHQiLCJhZHVsdHMiLCJzZXRBZHVsdHMiLCJraWQiLCJzZXRLaWQiLCJraWRzIiwic2V0S2lkcyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJkdXJhdGlvbnMiLCJzZXREdXJhdGlvbnMiLCJyZXN1bHRhZG8iLCJzZXRSZXN1bHRhZG8iLCJjYWxjdWxhdGlvbiIsImlucHV0QWR1bHRzIiwicG9wIiwiaW5wdXRLaWRzIiwiaW5wdXREdXJhdGlvbnMiLCJ0b2RhbEFtb3VudE9mTWVhdCIsIm1lYXRQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mQmVlciIsImJlZXJQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mRHJpbmsiLCJkcmlua1BlclBlcnNvbiIsInNjcmVlbkRpdiIsIk1hdGgiLCJjZWlsIiwicmVzZXQiLCJjb25zb2xlIiwibG9nIiwibGltcGV6YSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLEVBRGY7QUFBQSxNQUNaQyxLQURZO0FBQUEsTUFDTEMsUUFESzs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUZqQjtBQUFBLE1BRVpHLE1BRlk7QUFBQSxNQUVKQyxTQUZJOztBQUFBLG1CQUlHSixzREFBUSxFQUpYO0FBQUEsTUFJWkssR0FKWTtBQUFBLE1BSVBDLE1BSk87O0FBQUEsbUJBS0tOLHNEQUFRLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FMYjtBQUFBLE1BS1pPLElBTFk7QUFBQSxNQUtOQyxPQUxNOztBQUFBLG1CQU9hUixzREFBUSxDQUFDLENBQUQsQ0FQckI7QUFBQSxNQU9aUyxRQVBZO0FBQUEsTUFPRkMsV0FQRTs7QUFBQSxt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QUE0RCxjQUFRLEVBQUVpQixPQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLEVBTUtuQixTQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUM7O0dBL0ZRZCxROztLQUFBQSxRO0FBaUdNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zN2I1MzRlMmViNjE4Y2E3ODAyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJhcmJlY3VlKCl7XHJcbmNvbnN0IFthZHVsdCwgc2V0QWR1bHRdID0gdXNlU3RhdGUoKVxyXG5jb25zdCBbYWR1bHRzLCBzZXRBZHVsdHNdID0gdXNlU3RhdGUoWzBdKVxyXG5cclxuY29uc3QgW2tpZCwgc2V0S2lkXSA9IHVzZVN0YXRlKClcclxuY29uc3QgW2tpZHMsIHNldEtpZHNdID0gdXNlU3RhdGUoWzBdKVxyXG5cclxuY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKVxyXG5jb25zdCBbZHVyYXRpb25zLCBzZXREdXJhdGlvbnNdID0gdXNlU3RhdGUoWzBdKVxyXG5cclxuY29uc3QgW3Jlc3VsdGFkbywgc2V0UmVzdWx0YWRvXSA9IHVzZVN0YXRlKClcclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0aW9uKCl7XHJcbiAgc2V0QWR1bHRzKFthZHVsdHMsIGFkdWx0XSlcclxuICBzZXRLaWRzKFtraWRzLCBraWRdKVxyXG4gIHNldER1cmF0aW9ucyhbZHVyYXRpb25zLCBkdXJhdGlvbl0pXHJcblxyXG4gIFxyXG4vL3BvcCwgaW5jbHVkZXMsIHNoaWZ0XHJcbiAgY29uc3QgaW5wdXRBZHVsdHMgPSBhZHVsdHMucG9wKGFkdWx0KVxyXG4gIGNvbnN0IGlucHV0S2lkcyA9IGtpZHMucG9wKGtpZClcclxuICBjb25zdCBpbnB1dER1cmF0aW9ucyA9IGR1cmF0aW9ucy5wb3AoZHVyYXRpb24pXHJcbiBcclxuLy9pbnB1dEFkdWx0c1xyXG4vL2lucHV0S2lkc1xyXG4vL2lucHV0RHVyYXRpb25zXHJcblxyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZNZWF0ID0gbWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgKiBpbnB1dEFkdWx0cyArIChtZWF0UGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAvIDIgKiBpbnB1dEtpZHMpXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZkJlZXIgPSBiZWVyUGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAqIGlucHV0QWR1bHRzXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZkRyaW5rID0gZHJpbmtQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpICogaW5wdXRBZHVsdHMgKyAobWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgLyAyICogaW5wdXRLaWRzKVxyXG5cclxuICBjb25zdCBzY3JlZW5EaXYgPSAoPGRpdj5cclxuICAgIDxwPnt0b2RhbEFtb3VudE9mTWVhdCAvIDEwMDB9S2cgZGUgTWVhdDwvcD5cclxuICAgIDxwPntNYXRoLmNlaWwodG9kYWxBbW91bnRPZkJlZXIgLyAzNTUpfSBCZWVyIENhbnM8L3A+IFxyXG4gICAgPHA+e01hdGguY2VpbCh0b2RhbEFtb3VudE9mRHJpbmsgLyAyMDAwKX0gRHJpbmsgQm90dGxlPC9wPiBcclxuICA8L2Rpdj4pXHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0KCl7XHJcbiAgICBpZihhZHVsdHMgPiAwIHx8IGtpZHMgPiAwIHx8IGR1cmF0aW9ucyA+IDApe1xyXG4gICAgICBzZXRBZHVsdHMoW2FkdWx0c10pLFxyXG4gICAgICBzZXRLaWRzKFtraWRzXSksXHJcbiAgICAgIHNldER1cmF0aW9ucyhbZHVyYXRpb25zXSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG5cclxuY29uc29sZS5sb2coaW5wdXRBZHVsdHMsIGlucHV0S2lkcywgaW5wdXREdXJhdGlvbnMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBzZXRSZXN1bHRhZG8oc2NyZWVuRGl2KSxcclxuICAgIHJlc2V0KClcclxuICAgIFxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gbGltcGV6YSgpe1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbWVhdFBlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gNjUwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gNDAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiZWVyUGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiAyMDAwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gMTIwMFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJpbmtQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDE1MDBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiAxMDAwXHJcbiAgfVxyXG59XHJcblxyXG5cclxucmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nYmFyYmVjdWUnPkJhcmJlY3VlPC9oMT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2FkdWx0fSBvbkNoYW5nZT17KGUpPT5zZXRBZHVsdChlLnRhcmdldC52YWx1ZSl9IG5hbWU9J2FkdWx0cycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nQWR1bHRzJyAgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2tpZH0gb25DaGFuZ2U9eyhlKT0+c2V0S2lkKGUudGFyZ2V0LnZhbHVlKX0gbmFtZT0na2lkcycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nS2lkcycgIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIHZhbHVlPXtkdXJhdGlvbn0gb25DaGFuZ2U9eyhlKT0+c2V0RHVyYXRpb24oZS50YXJnZXQudmFsdWUpfSBuYW1lPSdkdXJhdGlvJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdEdXJhdGlvJyAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2FsY3VsYXRpb25HbG9iYWwnIG9uQ2xpY2s9e2NhbGN1bGF0aW9ufSBvbkNoYW5nZT17bGltcGV6YX0+Q2FsY3VsYXRpb248L2J1dHRvbj5cclxuICAgICAgICB7cmVzdWx0YWRvfVxyXG4gICAgICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXJiZWN1ZSJdLCJzb3VyY2VSb290IjoiIn0=