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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
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
    setDurations([durations, duration]);
    var inputAdults = adults.pop(adult);
    var inputKids = kids.pop(kid);
    var inputDurations = durations.pop(duration);
    var todalAmountOfMeat = meatPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;
    var todalAmountOfBeer = beerPerPerson(inputDurations) * inputAdults;
    var todalAmountOfDrink = drinkPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;

    var screenDiv = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [todalAmountOfMeat / 1000, "Kg de Meat"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfBeer / 355), " Beer Cans"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfDrink / 2000), " Drink Bottle"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 22
    }, this);

    var screenAlert = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Preencha todos os campos!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 24
    }, this);

    var welcome = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Welcome!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, this);

    console.log(typeof inputAdults, inputKids, inputDurations);

    if (inputAdults > 0 && inputKids > 0 && inputDurations > 0) {
      return setResultado(screenDiv);
    }

    if (typeof inputAdults === "undefined" && typeof inputKids === "undefined" && typeof inputDurations === "undefined") {
      return setResultado(welcome);
    } else {
      setResultado(screenAlert);
    }
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
      lineNumber: 81,
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
      lineNumber: 82,
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
      lineNumber: 83,
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
      lineNumber: 84,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "calculationGlobal",
      type: "button",
      onClick: calculation,
      value: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "RzSUQnV0fUfn5jqLJP45+nk+lPg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0Iiwic2V0QWR1bHQiLCJhZHVsdHMiLCJzZXRBZHVsdHMiLCJraWQiLCJzZXRLaWQiLCJraWRzIiwic2V0S2lkcyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJkdXJhdGlvbnMiLCJzZXREdXJhdGlvbnMiLCJyZXN1bHRhZG8iLCJzZXRSZXN1bHRhZG8iLCJjYWxjdWxhdGlvbiIsImlucHV0QWR1bHRzIiwicG9wIiwiaW5wdXRLaWRzIiwiaW5wdXREdXJhdGlvbnMiLCJ0b2RhbEFtb3VudE9mTWVhdCIsIm1lYXRQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mQmVlciIsImJlZXJQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mRHJpbmsiLCJkcmlua1BlclBlcnNvbiIsInNjcmVlbkRpdiIsIk1hdGgiLCJjZWlsIiwic2NyZWVuQWxlcnQiLCJ3ZWxjb21lIiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLEVBRGY7QUFBQSxNQUNaQyxLQURZO0FBQUEsTUFDTEMsUUFESzs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUZqQjtBQUFBLE1BRVpHLE1BRlk7QUFBQSxNQUVKQyxTQUZJOztBQUFBLG1CQUlHSixzREFBUSxFQUpYO0FBQUEsTUFJWkssR0FKWTtBQUFBLE1BSVBDLE1BSk87O0FBQUEsbUJBS0tOLHNEQUFRLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FMYjtBQUFBLE1BS1pPLElBTFk7QUFBQSxNQUtOQyxPQUxNOztBQUFBLG1CQU9hUixzREFBUSxFQVByQjtBQUFBLE1BT1pTLFFBUFk7QUFBQSxNQU9GQyxXQVBFOztBQUFBLG1CQVFl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O0FBQUEsT0FBMUQ7QUFBNEYsVUFBSSxFQUFDLFNBQWpHO0FBQTJHLFVBQUksRUFBQyxRQUFoSDtBQUF5SCxpQkFBVyxFQUFDO0FBQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJO0FBQU8sZUFBUyxFQUFDLG1CQUFqQjtBQUFxQyxVQUFJLEVBQUMsUUFBMUM7QUFBb0QsYUFBTyxFQUFFcEIsV0FBN0Q7QUFBMEUsV0FBSyxFQUFDO0FBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixFQU1LRixTQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUM7O0dBdEZRZCxROztLQUFBQSxRO0FBd0ZNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNDhmZWU1ZGU3NTNkN2E3MTAzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJhcmJlY3VlKCl7XHJcbmNvbnN0IFthZHVsdCwgc2V0QWR1bHRdID0gdXNlU3RhdGUoKVxyXG5jb25zdCBbYWR1bHRzLCBzZXRBZHVsdHNdID0gdXNlU3RhdGUoWzBdKVxyXG5cclxuY29uc3QgW2tpZCwgc2V0S2lkXSA9IHVzZVN0YXRlKClcclxuY29uc3QgW2tpZHMsIHNldEtpZHNdID0gdXNlU3RhdGUoWzBdKVxyXG5cclxuY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgpXHJcbmNvbnN0IFtkdXJhdGlvbnMsIHNldER1cmF0aW9uc10gPSB1c2VTdGF0ZShbMF0pXHJcblxyXG5jb25zdCBbcmVzdWx0YWRvLCBzZXRSZXN1bHRhZG9dID0gdXNlU3RhdGUoKVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRpb24oKXtcclxuICBzZXRBZHVsdHMoW2FkdWx0cywgYWR1bHRdKVxyXG4gIHNldEtpZHMoW2tpZHMsIGtpZF0pXHJcbiAgc2V0RHVyYXRpb25zKFtkdXJhdGlvbnMsIGR1cmF0aW9uXSlcclxuICBjb25zdCBpbnB1dEFkdWx0cyA9IGFkdWx0cy5wb3AoYWR1bHQpXHJcbiAgY29uc3QgaW5wdXRLaWRzID0ga2lkcy5wb3Aoa2lkKVxyXG4gIGNvbnN0IGlucHV0RHVyYXRpb25zID0gZHVyYXRpb25zLnBvcChkdXJhdGlvbilcclxuIFxyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZNZWF0ID0gbWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgKiBpbnB1dEFkdWx0cyArIChtZWF0UGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAvIDIgKiBpbnB1dEtpZHMpXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZkJlZXIgPSBiZWVyUGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAqIGlucHV0QWR1bHRzXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZkRyaW5rID0gZHJpbmtQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpICogaW5wdXRBZHVsdHMgKyAobWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgLyAyICogaW5wdXRLaWRzKVxyXG5cclxuICBjb25zdCBzY3JlZW5EaXYgPSAoPGRpdj5cclxuICAgIDxwPnt0b2RhbEFtb3VudE9mTWVhdCAvIDEwMDB9S2cgZGUgTWVhdDwvcD5cclxuICAgIDxwPntNYXRoLmNlaWwodG9kYWxBbW91bnRPZkJlZXIgLyAzNTUpfSBCZWVyIENhbnM8L3A+IFxyXG4gICAgPHA+e01hdGguY2VpbCh0b2RhbEFtb3VudE9mRHJpbmsgLyAyMDAwKX0gRHJpbmsgQm90dGxlPC9wPiBcclxuICA8L2Rpdj4pXHJcblxyXG4gIGNvbnN0IHNjcmVlbkFsZXJ0ID0gKDxkaXY+XHJcbiAgICA8cD5QcmVlbmNoYSB0b2RvcyBvcyBjYW1wb3MhPC9wPlxyXG4gIDwvZGl2PilcclxuXHJcbiAgY29uc3Qgd2VsY29tZSA9IChcclxuICAgIDxkaXY+XHJcbiAgICA8cD5XZWxjb21lITwvcD5cclxuICA8L2Rpdj5cclxuICApXHJcblxyXG4gIGNvbnNvbGUubG9nKHR5cGVvZiBpbnB1dEFkdWx0cywgaW5wdXRLaWRzLCBpbnB1dER1cmF0aW9ucylcclxuXHJcbiAgaWYoaW5wdXRBZHVsdHMgPiAwICYmIGlucHV0S2lkcyA+IDAgJiYgaW5wdXREdXJhdGlvbnMgPiAwKXtcclxuICAgIHJldHVybiBzZXRSZXN1bHRhZG8oc2NyZWVuRGl2KVxyXG4gIH1pZih0eXBlb2YgaW5wdXRBZHVsdHMgPT09IFwidW5kZWZpbmVkXCIgICYmIHR5cGVvZiBpbnB1dEtpZHMgPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGlucHV0RHVyYXRpb25zID09PSBcInVuZGVmaW5lZFwiKXtcclxuICAgIHJldHVybiBzZXRSZXN1bHRhZG8od2VsY29tZSlcclxuICB9ZWxzZXtcclxuICAgIHNldFJlc3VsdGFkbyhzY3JlZW5BbGVydClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lYXRQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDY1MFxyXG4gIH1lbHNle1xyXG4gICAgcmV0dXJuIDQwMFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmVlclBlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gMjAwMFxyXG4gIH1lbHNle1xyXG4gICAgcmV0dXJuIDEyMDBcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyaW5rUGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiAxNTAwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gMTAwMFxyXG4gIH1cclxufVxyXG5cclxuXHJcbnJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J2JhcmJlY3VlJz5CYXJiZWN1ZTwvaDE+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIHZhbHVlPXthZHVsdH0gb25DaGFuZ2U9eyhlKT0+c2V0QWR1bHQoZS50YXJnZXQudmFsdWUpfSBuYW1lPSdhZHVsdHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0FkdWx0cycgIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIHZhbHVlPXtraWR9IG9uQ2hhbmdlPXsoZSk9PnNldEtpZChlLnRhcmdldC52YWx1ZSl9IG5hbWU9J2tpZHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0tpZHMnICAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyB2YWx1ZT17ZHVyYXRpb259IG9uQ2hhbmdlPXsoZSk9PnNldER1cmF0aW9uKGUudGFyZ2V0LnZhbHVlKX0gbmFtZT0nZHVyYXRpbycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nRHVyYXRpbycgIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nY2FsY3VsYXRpb25HbG9iYWwnIHR5cGU9J2J1dHRvbicgIG9uQ2xpY2s9e2NhbGN1bGF0aW9ufSB2YWx1ZT0nQ2FsY3VsYXRpb24nIC8+XHJcbiAgICAgICAge3Jlc3VsdGFkb31cclxuICAgICAgPC9kaXY+XHJcbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFyYmVjdWUiXSwic291cmNlUm9vdCI6IiJ9