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
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\Users\\Alan\\Documents\\GitHub\\Churrascometro\\pages\\index.js",
    _s = $RefreshSig$();



function Barbecue() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(adult),
      adults = _useState[0],
      setAdults = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      adult = _useState2[0],
      setAdult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(kid),
      kids = _useState3[0],
      setKids = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      kid = _useState4[0],
      setKid = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(duration),
      durations = _useState5[0],
      setDurations = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      duration = _useState6[0],
      setDuration = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(resultado),
      resultado = _useState7[0],
      setResultado = _useState7[1];

  function calculation() {
    var arraySetAdults = setAdults([adults, adult]);
    var arraySetKids = setKids([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(kids), [kid]));
    var arraySetDurations = setDurations([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(durations), [duration])); //pop, includes, shift

    var inputAdults = adults.push(function (adult) {
      return adult;
    });
    var inputKids = kids.push(function (kid) {
      return kid;
    });
    var inputDurations = durations.push(function (duration) {
      return duration;
    });
    var todalAmountOfMeat = meatPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;
    var todalAmountOfBeer = beerPerPerson(inputDurations) * inputAdults;
    var todalAmountOfDrink = drinkPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;

    var screenDiv = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [todalAmountOfMeat / 1000, "Kg de Meat"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfBeer / 355), " Beer Cans"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfDrink / 2000), " Drink Bottle"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 22
    }, this);

    console.log(screenDiv.props.children);
    return setResultado(screenDiv), function () {
      return arraySetAdults = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("arraySetAdults"), 0), arraySetKids = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("arraySetKids"), 0), arraySetDurations = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("arraySetDurations"), 0);
    };
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      className: "barbecue",
      children: "Barbecue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
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
      lineNumber: 79,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
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
      lineNumber: 80,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
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
      lineNumber: 81,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      onChange: limpeza,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "j989Trfsd+6G7M25c4h1sbczyjM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0IiwiYWR1bHRzIiwic2V0QWR1bHRzIiwic2V0QWR1bHQiLCJraWQiLCJraWRzIiwic2V0S2lkcyIsInNldEtpZCIsImR1cmF0aW9uIiwiZHVyYXRpb25zIiwic2V0RHVyYXRpb25zIiwic2V0RHVyYXRpb24iLCJyZXN1bHRhZG8iLCJzZXRSZXN1bHRhZG8iLCJjYWxjdWxhdGlvbiIsImFycmF5U2V0QWR1bHRzIiwiYXJyYXlTZXRLaWRzIiwiYXJyYXlTZXREdXJhdGlvbnMiLCJpbnB1dEFkdWx0cyIsInB1c2giLCJpbnB1dEtpZHMiLCJpbnB1dER1cmF0aW9ucyIsInRvZGFsQW1vdW50T2ZNZWF0IiwibWVhdFBlclBlcnNvbiIsInRvZGFsQW1vdW50T2ZCZWVyIiwiYmVlclBlclBlcnNvbiIsInRvZGFsQW1vdW50T2ZEcmluayIsImRyaW5rUGVyUGVyc29uIiwic2NyZWVuRGl2IiwiTWF0aCIsImNlaWwiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJjaGlsZHJlbiIsImxpbXBlemEiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsR0FBbUI7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQ0MsS0FBRCxDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJOztBQUFBLG1CQUVPSCxzREFBUSxFQUZmO0FBQUEsTUFFWkMsS0FGWTtBQUFBLE1BRUxHLFFBRks7O0FBQUEsbUJBSUtKLHNEQUFRLENBQUNLLEdBQUQsQ0FKYjtBQUFBLE1BSVpDLElBSlk7QUFBQSxNQUlOQyxPQUpNOztBQUFBLG1CQUtHUCxzREFBUSxFQUxYO0FBQUEsTUFLWkssR0FMWTtBQUFBLE1BS1BHLE1BTE87O0FBQUEsbUJBT2VSLHNEQUFRLENBQUNT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YUFBTyxFQUFFeEIsV0FBL0M7QUFBNEQsY0FBUSxFQUFFcUIsT0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixFQU1LdkIsU0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVDOztHQW5GUWQsUTs7S0FBQUEsUTtBQXFGTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTM2Mjg1NTRkNTFmMmVlZjFlZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBCYXJiZWN1ZSgpe1xyXG5jb25zdCBbYWR1bHRzLCBzZXRBZHVsdHNdID0gdXNlU3RhdGUoYWR1bHQpXHJcbmNvbnN0IFthZHVsdCwgc2V0QWR1bHRdID0gdXNlU3RhdGUoKVxyXG5cclxuY29uc3QgW2tpZHMsIHNldEtpZHNdID0gdXNlU3RhdGUoa2lkKVxyXG5jb25zdCBba2lkLCBzZXRLaWRdID0gdXNlU3RhdGUoKVxyXG5cclxuY29uc3QgW2R1cmF0aW9ucywgc2V0RHVyYXRpb25zXSA9IHVzZVN0YXRlKGR1cmF0aW9uKVxyXG5jb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKClcclxuXHJcbmNvbnN0IFtyZXN1bHRhZG8sIHNldFJlc3VsdGFkb10gPSB1c2VTdGF0ZShyZXN1bHRhZG8pXHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGlvbigpe1xyXG4gIGNvbnN0IGFycmF5U2V0QWR1bHRzICA9IHNldEFkdWx0cyhbYWR1bHRzLCBhZHVsdF0pXHJcbiAgY29uc3QgYXJyYXlTZXRLaWRzID0gc2V0S2lkcyhbLi4uIGtpZHMsIGtpZF0pXHJcbiAgY29uc3QgYXJyYXlTZXREdXJhdGlvbnMgPSBzZXREdXJhdGlvbnMoWy4uLiBkdXJhdGlvbnMsIGR1cmF0aW9uXSlcclxuXHJcbiAgXHJcbi8vcG9wLCBpbmNsdWRlcywgc2hpZnRcclxuICBjb25zdCBpbnB1dEFkdWx0cyA9IGFkdWx0cy5wdXNoKGFkdWx0ID0+IGFkdWx0KVxyXG4gIGNvbnN0IGlucHV0S2lkcyA9IGtpZHMucHVzaChraWQgPT4ga2lkKVxyXG4gIGNvbnN0IGlucHV0RHVyYXRpb25zID0gZHVyYXRpb25zLnB1c2goZHVyYXRpb24gPT4gZHVyYXRpb24pXHJcblxyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZNZWF0ID0gbWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgKiBpbnB1dEFkdWx0cyArIChtZWF0UGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAvIDIgKiBpbnB1dEtpZHMpXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZkJlZXIgPSBiZWVyUGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAqIGlucHV0QWR1bHRzXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZkRyaW5rID0gZHJpbmtQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpICogaW5wdXRBZHVsdHMgKyAobWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgLyAyICogaW5wdXRLaWRzKVxyXG5cclxuICBjb25zdCBzY3JlZW5EaXYgPSAoPGRpdj5cclxuICAgIDxwPnt0b2RhbEFtb3VudE9mTWVhdCAvIDEwMDB9S2cgZGUgTWVhdDwvcD5cclxuICAgIDxwPntNYXRoLmNlaWwodG9kYWxBbW91bnRPZkJlZXIgLyAzNTUpfSBCZWVyIENhbnM8L3A+IFxyXG4gICAgPHA+e01hdGguY2VpbCh0b2RhbEFtb3VudE9mRHJpbmsgLyAyMDAwKX0gRHJpbmsgQm90dGxlPC9wPiBcclxuICA8L2Rpdj4pXHJcbiAgXHJcbmNvbnNvbGUubG9nKHNjcmVlbkRpdi5wcm9wcy5jaGlsZHJlbilcclxuICByZXR1cm4gKFxyXG4gICAgc2V0UmVzdWx0YWRvKHNjcmVlbkRpdiksXHJcbiAgICAoKT0+KFxyXG4gICAgICBhcnJheVNldEFkdWx0cyA9IDAsXHJcbiAgICAgIGFycmF5U2V0S2lkcyA9IDAsXHJcbiAgICAgIGFycmF5U2V0RHVyYXRpb25zID0gMFxyXG4gICAgICApXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaW1wZXphKCl7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBtZWF0UGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiA2NTBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiA0MDBcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZXJQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDIwMDBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiAxMjAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmlua1BlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gMTUwMFxyXG4gIH1lbHNle1xyXG4gICAgcmV0dXJuIDEwMDBcclxuICB9XHJcbn1cclxuXHJcblxyXG5yZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdiYXJiZWN1ZSc+QmFyYmVjdWU8L2gxPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyB2YWx1ZT17YWR1bHR9IG9uQ2hhbmdlPXsoZSk9PnNldEFkdWx0KGUudGFyZ2V0LnZhbHVlKX0gbmFtZT0nYWR1bHRzJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdBZHVsdHMnICAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyB2YWx1ZT17a2lkfSBvbkNoYW5nZT17KGUpPT5zZXRLaWQoZS50YXJnZXQudmFsdWUpfSBuYW1lPSdraWRzJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdLaWRzJyAgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2R1cmF0aW9ufSBvbkNoYW5nZT17KGUpPT5zZXREdXJhdGlvbihlLnRhcmdldC52YWx1ZSl9IG5hbWU9J2R1cmF0aW8nIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0R1cmF0aW8nICAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjYWxjdWxhdGlvbkdsb2JhbCcgb25DbGljaz17Y2FsY3VsYXRpb259IG9uQ2hhbmdlPXtsaW1wZXphfT5DYWxjdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIHtyZXN1bHRhZG99XHJcbiAgICAgIDwvZGl2PlxyXG4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhcmJlY3VlIl0sInNvdXJjZVJvb3QiOiIifQ==