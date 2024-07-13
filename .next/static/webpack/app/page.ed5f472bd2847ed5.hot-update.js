"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"(app-pages-browser)/./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/metamask */ \"(app-pages-browser)/./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/utils/units.js\");\n/* harmony import */ var _abi_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abi.json */ \"(app-pages-browser)/./app/abi.json\");\n/* harmony import */ var _components_Poke__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Poke */ \"(app-pages-browser)/./app/components/Poke.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Knowledge about Ether.js https://docs.ethers.org/v6/getting-started/\n\n\n\n\nconst [metaMask, hooks] = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.initializeConnector)((actions)=>new _web3_react_metamask__WEBPACK_IMPORTED_MODULE_3__.MetaMask({\n        actions\n    }));\nconst { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;\nconst contractChain = 11155111;\nconst contractAddress = \"0xfA8586F464D059E23bcd6F60F55295232769b8f9\";\nfunction Home() {\n    _s();\n    const chainId = useChainId();\n    const accounts = useAccounts();\n    const isActive = useIsActive();\n    const provider = useProvider();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    //เชือ่มต่อ\n    const handleConnect = ()=>{\n        metaMask.activate(contractChain);\n    };\n    //ยกเลิกการเชื่อมต่อ\n    const handleDisconnect = ()=>{\n        metaMask.resetState();\n    };\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchBalance = async ()=>{\n            const signer = provider.getSigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const myBalance = await smartContract.balanceOf(accounts[0]);\n            console.log((0,ethers__WEBPACK_IMPORTED_MODULE_7__.formatEther)(myBalance));\n            setBalance((0,ethers__WEBPACK_IMPORTED_MODULE_7__.formatEther)(myBalance));\n        };\n        if (isActive) {\n            fetchBalance();\n        }\n    }, [\n        isActive\n    ]);\n    const [aonValue, setAonValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleSetAonValue = (event)=>{\n        setAonValue(event.target.value);\n    };\n    const handleBuy = async ()=>{\n        try {\n            if (aonValue <= 0) {\n                return;\n            }\n            const signer = provider.getSigner();\n            const smartContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract(contractAddress, _abi_json__WEBPACK_IMPORTED_MODULE_4__, signer);\n            const buyValue = (0,ethers__WEBPACK_IMPORTED_MODULE_7__.parseUnits)(aonValue.toString(), \"ether\");\n            const tx = await smartContract.buy({\n                value: buyValue.toString()\n            });\n            console.log(\"Transaction hash:\", tx.hash);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        void metaMask.connectEagerly().catch(()=>{\n            console.debug(\"Failed to connect eagerly to metamask\");\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"navbar bg-neutral text-neutral-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-start \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"btn btn-ghost text-xl \",\n                            children: \"My Wallet\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-center outline outline-2 outline-neutral-content rounded-full p-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-base-300 px-3\",\n                            children: [\n                                \"Accounts : \",\n                                accounts ? accounts[0] : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-end flex-3\",\n                        children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost text-error\",\n                            type: \"button\",\n                            onClick: handleDisconnect,\n                            value: \"Disconnect\",\n                            children: \"Disconnect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-ghost\",\n                            type: \"button\",\n                            onClick: handleConnect,\n                            value: \"Connect\",\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 flex justify-center items-center text-center drop-shadow-lg \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card w-[90vh] bg-base-100 shadow-lg items-center drop-shadow border\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Poke__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            handleBuy: handleBuy,\n                            handleSetAonValue: handleSetAonValue\n                        }, void 0, false, {\n                            fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                            lineNumber: 106,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                        lineNumber: 105,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                    lineNumber: 104,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, this),\n            !isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" h-[91vh]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto h-[70vh] flex justify-center items-center py-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl\",\n                        children: \"Please connect To MetaMask!!\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                        lineNumber: 114,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\T.NEE\\\\blockchain-poke\\\\app\\\\page.js\",\n                lineNumber: 112,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"vs/Ra8QomxTRPLV7YsWiGNJgGaQ=\", false, function() {\n    return [\n        useChainId,\n        useAccounts,\n        useIsActive,\n        useProvider\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ0k7QUFDUDtBQUNoRCx1RUFBdUU7QUFDdkM7QUFDaUI7QUFDcEI7QUFDTztBQUVwQyxNQUFNLENBQUVVLFVBQVdDLE1BQU8sR0FBR1IscUVBQW1CQSxDQUFDLENBQUNTLFVBQVksSUFBSVIsMERBQVFBLENBQUM7UUFBRVE7SUFBUTtBQUNyRixNQUFNLEVBQUVDLFVBQVUsRUFBR0MsV0FBVyxFQUFFQyxlQUFlLEVBQUdDLFdBQVcsRUFBR0MsV0FBVyxFQUFFLEdBQUdOO0FBQ2xGLE1BQU1PLGdCQUFnQjtBQUN0QixNQUFNQyxrQkFBa0I7QUFFVCxTQUFTQzs7SUFDdEIsTUFBTUMsVUFBVVI7SUFDaEIsTUFBTVMsV0FBV1I7SUFDakIsTUFBTVMsV0FBV1A7SUFDakIsTUFBTVEsV0FBV1A7SUFDakIsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUd6QiwrQ0FBUUEsQ0FBQzBCO0lBRWpDLFdBQVc7SUFDWCxNQUFNQyxnQkFBZ0I7UUFDcEJsQixTQUFTbUIsUUFBUSxDQUFDWDtJQUNwQjtJQUNBLG9CQUFvQjtJQUNwQixNQUFNWSxtQkFBbUI7UUFDdkJwQixTQUFTcUIsVUFBVTtJQUNyQjtJQUVBLE1BQU0sQ0FBRUMsU0FBVUMsV0FBWSxHQUFHaEMsK0NBQVFBLENBQUM7SUFDMUNDLGdEQUFTQSxDQUFFO1FBQ1QsTUFBTWdDLGVBQWU7WUFDbkIsTUFBTUMsU0FBU1gsU0FBU1ksU0FBUztZQUNqQyxNQUFNQyxnQkFBZ0IsSUFBSWhDLDRDQUFlLENBQUVjLGlCQUFpQlgsc0NBQUdBLEVBQUcyQjtZQUNsRSxNQUFNSSxZQUFZLE1BQU1GLGNBQWNHLFNBQVMsQ0FBQ2xCLFFBQVEsQ0FBQyxFQUFFO1lBQzNEbUIsUUFBUUMsR0FBRyxDQUFDcEMsbURBQVdBLENBQUNpQztZQUN4Qk4sV0FBVzNCLG1EQUFXQSxDQUFDaUM7UUFFekI7UUFDQSxJQUFJaEIsVUFBVTtZQUNaVztRQUNGO0lBQ0YsR0FBRTtRQUFDWDtLQUFTO0lBSVosTUFBTSxDQUFDb0IsVUFBVUMsWUFBWSxHQUFHM0MsK0NBQVFBLENBQUM7SUFFekMsTUFBTTRDLG9CQUFvQkMsQ0FBQUE7UUFDeEJGLFlBQVlFLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNoQztJQUVBLE1BQU1DLFlBQVk7UUFDaEIsSUFBSTtZQUNGLElBQUlOLFlBQVksR0FBRztnQkFDakI7WUFDRjtZQUVBLE1BQU1SLFNBQVNYLFNBQVNZLFNBQVM7WUFDakMsTUFBTUMsZ0JBQWdCLElBQUloQyw0Q0FBZSxDQUFDYyxpQkFBaUJYLHNDQUFHQSxFQUFFMkI7WUFDaEUsTUFBTWUsV0FBVzNDLGtEQUFVQSxDQUFDb0MsU0FBU1EsUUFBUSxJQUFJO1lBQ2pELE1BQU1DLEtBQUssTUFBTWYsY0FBY2dCLEdBQUcsQ0FBQztnQkFDakNMLE9BQU9FLFNBQVNDLFFBQVE7WUFDMUI7WUFDQVYsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQlUsR0FBR0UsSUFBSTtRQUMxQyxFQUFFLE9BQU9DLEtBQUs7WUFDWmQsUUFBUUMsR0FBRyxDQUFDYTtRQUNkO0lBQ0Y7SUFHRnJELGdEQUFTQSxDQUFDO1FBQ1IsS0FBS1EsU0FBUzhDLGNBQWMsR0FBR0MsS0FBSyxDQUFDO1lBQ25DaEIsUUFBUWlCLEtBQUssQ0FBQztRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUlMLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQUlDLE9BQU07O2tDQUNULDhEQUFDRDt3QkFBSUUsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQUVELFdBQVU7c0NBQXlCOzs7Ozs7Ozs7OztrQ0FJeEMsOERBQUNGO3dCQUFJRSxXQUFVO2tDQUNiLDRFQUFDRTs0QkFBS0YsV0FBVTs7Z0NBQXFCO2dDQUFZdkMsV0FBV0EsUUFBUSxDQUFDLEVBQUUsR0FBRzs7Ozs7Ozs7Ozs7O2tDQUU1RSw4REFBQ3FDO3dCQUFJRSxXQUFVO2tDQUNadEMseUJBQ0MsOERBQUN5Qzs0QkFBT0gsV0FBVTs0QkFBMkJJLE1BQUs7NEJBQVNDLFNBQVNwQzs0QkFBa0JrQixPQUFPO3NDQUFjOzs7OztpREFFM0csOERBQUNnQjs0QkFBT0gsV0FBVTs0QkFBZ0JJLE1BQUs7NEJBQVNDLFNBQVN0Qzs0QkFBZW9CLE9BQU87c0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSS9GekIsMEJBQ0MsOERBQUNvQztnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQUlFLFdBQVU7OEJBQ2IsNEVBQUNGO3dCQUFJRSxXQUFVO2tDQUNiLDRFQUFDcEQsd0RBQUlBOzRCQUFDd0MsV0FBV0E7NEJBQVdKLG1CQUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUt0RCxDQUFDdEIsMEJBQ0EsOERBQUNvQztnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQUlFLFdBQVU7OEJBQ2IsNEVBQUNNO3dCQUFFTixXQUFVO2tDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEM7R0F2R3dCekM7O1FBQ05QO1FBQ0NDO1FBQ0FFO1FBQ0FDOzs7S0FKS0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGluaXRpYWxpemVDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgTWV0YU1hc2sgfSBmcm9tIFwiQHdlYjMtcmVhY3QvbWV0YW1hc2tcIjtcbi8vIEtub3dsZWRnZSBhYm91dCBFdGhlci5qcyBodHRwczovL2RvY3MuZXRoZXJzLm9yZy92Ni9nZXR0aW5nLXN0YXJ0ZWQvXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBmb3JtYXRFdGhlciwgcGFyc2VVbml0cyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBhYmkgZnJvbSBcIi4vYWJpLmpzb25cIjtcbmltcG9ydCBQb2tlIGZyb20gXCIuL2NvbXBvbmVudHMvUG9rZVwiXG5cbmNvbnN0IFsgbWV0YU1hc2sgLCBob29rcyBdID0gaW5pdGlhbGl6ZUNvbm5lY3RvcigoYWN0aW9ucykgPT4gbmV3IE1ldGFNYXNrKHsgYWN0aW9ucyB9KSlcbmNvbnN0IHsgdXNlQ2hhaW5JZCAsIHVzZUFjY291bnRzLCB1c2VJc0FjdGl2YXRpbmcgLCB1c2VJc0FjdGl2ZSAsIHVzZVByb3ZpZGVyIH0gPSBob29rc1xuY29uc3QgY29udHJhY3RDaGFpbiA9IDExMTU1MTExIFxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4ZkE4NTg2RjQ2NEQwNTlFMjNiY2Q2RjYwRjU1Mjk1MjMyNzY5YjhmOSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgY2hhaW5JZCA9IHVzZUNoYWluSWQoKVxuICBjb25zdCBhY2NvdW50cyA9IHVzZUFjY291bnRzKClcbiAgY29uc3QgaXNBY3RpdmUgPSB1c2VJc0FjdGl2ZSgpXG4gIGNvbnN0IHByb3ZpZGVyID0gdXNlUHJvdmlkZXIoKVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcblxuICAgIC8v4LmA4LiK4Li34Lit4LmI4Lih4LiV4LmI4LitXG4gICAgY29uc3QgaGFuZGxlQ29ubmVjdCA9ICgpID0+IHtcbiAgICAgIG1ldGFNYXNrLmFjdGl2YXRlKGNvbnRyYWN0Q2hhaW4pXG4gICAgfVxuICAgIC8v4Lii4LiB4LmA4Lil4Li04LiB4LiB4Liy4Lij4LmA4LiK4Li34LmI4Lit4Lih4LiV4LmI4LitXG4gICAgY29uc3QgaGFuZGxlRGlzY29ubmVjdCA9ICgpID0+IHtcbiAgICAgIG1ldGFNYXNrLnJlc2V0U3RhdGUoKVxuICAgIH1cbiAgXG4gICAgY29uc3QgWyBiYWxhbmNlICwgc2V0QmFsYW5jZSBdID0gdXNlU3RhdGUoXCJcIikgXG4gICAgdXNlRWZmZWN0ICgoKSA9PiB7XG4gICAgICBjb25zdCBmZXRjaEJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgICAgIGNvbnN0IHNtYXJ0Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KCBjb250cmFjdEFkZHJlc3MsIGFiaSAsIHNpZ25lciApXG4gICAgICAgIGNvbnN0IG15QmFsYW5jZSA9IGF3YWl0IHNtYXJ0Q29udHJhY3QuYmFsYW5jZU9mKGFjY291bnRzWzBdKVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtYXRFdGhlcihteUJhbGFuY2UpKTtcbiAgICAgICAgc2V0QmFsYW5jZShmb3JtYXRFdGhlcihteUJhbGFuY2UpKVxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICBmZXRjaEJhbGFuY2UoKVxuICAgICAgfVxuICAgIH0sW2lzQWN0aXZlXSlcbiAgXG4gIFxuICAgIFxuICAgIGNvbnN0IFthb25WYWx1ZSwgc2V0QW9uVmFsdWVdID0gdXNlU3RhdGUoMCk7XG4gIFxuICAgIGNvbnN0IGhhbmRsZVNldEFvblZhbHVlID0gZXZlbnQgPT4ge1xuICAgICAgc2V0QW9uVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICBcbiAgICBjb25zdCBoYW5kbGVCdXkgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoYW9uVmFsdWUgPD0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICBcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIGNvbnN0IHNtYXJ0Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgYWJpLCBzaWduZXIpO1xuICAgICAgICBjb25zdCBidXlWYWx1ZSA9IHBhcnNlVW5pdHMoYW9uVmFsdWUudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcbiAgICAgICAgY29uc3QgdHggPSBhd2FpdCBzbWFydENvbnRyYWN0LmJ1eSh7XG4gICAgICAgICAgdmFsdWU6IGJ1eVZhbHVlLnRvU3RyaW5nKCksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIGhhc2g6XCIsIHR4Lmhhc2gpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdm9pZCBtZXRhTWFzay5jb25uZWN0RWFnZXJseSgpLmNhdGNoKCgpID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ0ZhaWxlZCB0byBjb25uZWN0IGVhZ2VybHkgdG8gbWV0YW1hc2snKVxuICAgIH0pXG4gIH0sIFtdKVxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyIGJnLW5ldXRyYWwgdGV4dC1uZXV0cmFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItc3RhcnQgXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCB0ZXh0LXhsIFwiPlxuICAgICAgICAgICAgTXkgV2FsbGV0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY2VudGVyIG91dGxpbmUgb3V0bGluZS0yIG91dGxpbmUtbmV1dHJhbC1jb250ZW50IHJvdW5kZWQtZnVsbCBwLTJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UtMzAwIHB4LTNcIj5BY2NvdW50cyA6IHthY2NvdW50cyA/IGFjY291bnRzWzBdIDogJyd9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZW5kIGZsZXgtM1wiPlxuICAgICAgICAgIHtpc0FjdGl2ZSA/XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgdGV4dC1lcnJvclwiIHR5cGU9J2J1dHRvbicgb25DbGljaz17aGFuZGxlRGlzY29ubmVjdH0gdmFsdWU9eydEaXNjb25uZWN0J30+RGlzY29ubmVjdDwvYnV0dG9uPlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0XCIgdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtoYW5kbGVDb25uZWN0fSB2YWx1ZT17J0Nvbm5lY3QnfT5Db25uZWN0PC9idXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzQWN0aXZlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIGRyb3Atc2hhZG93LWxnIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB3LVs5MHZoXSBiZy1iYXNlLTEwMCBzaGFkb3ctbGcgaXRlbXMtY2VudGVyIGRyb3Atc2hhZG93IGJvcmRlclwiPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IFwiPlxuICAgICAgICAgICAgICA8UG9rZSBoYW5kbGVCdXk9e2hhbmRsZUJ1eX0gaGFuZGxlU2V0QW9uVmFsdWU9e2hhbmRsZVNldEFvblZhbHVlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHshaXNBY3RpdmUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLVs5MXZoXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gaC1bNzB2aF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHktOFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5QbGVhc2UgY29ubmVjdCBUbyBNZXRhTWFzayEhPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluaXRpYWxpemVDb25uZWN0b3IiLCJNZXRhTWFzayIsImV0aGVycyIsImZvcm1hdEV0aGVyIiwicGFyc2VVbml0cyIsImFiaSIsIlBva2UiLCJtZXRhTWFzayIsImhvb2tzIiwiYWN0aW9ucyIsInVzZUNoYWluSWQiLCJ1c2VBY2NvdW50cyIsInVzZUlzQWN0aXZhdGluZyIsInVzZUlzQWN0aXZlIiwidXNlUHJvdmlkZXIiLCJjb250cmFjdENoYWluIiwiY29udHJhY3RBZGRyZXNzIiwiSG9tZSIsImNoYWluSWQiLCJhY2NvdW50cyIsImlzQWN0aXZlIiwicHJvdmlkZXIiLCJlcnJvciIsInNldEVycm9yIiwidW5kZWZpbmVkIiwiaGFuZGxlQ29ubmVjdCIsImFjdGl2YXRlIiwiaGFuZGxlRGlzY29ubmVjdCIsInJlc2V0U3RhdGUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImZldGNoQmFsYW5jZSIsInNpZ25lciIsImdldFNpZ25lciIsInNtYXJ0Q29udHJhY3QiLCJDb250cmFjdCIsIm15QmFsYW5jZSIsImJhbGFuY2VPZiIsImNvbnNvbGUiLCJsb2ciLCJhb25WYWx1ZSIsInNldEFvblZhbHVlIiwiaGFuZGxlU2V0QW9uVmFsdWUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQnV5IiwiYnV5VmFsdWUiLCJ0b1N0cmluZyIsInR4IiwiYnV5IiwiaGFzaCIsImVyciIsImNvbm5lY3RFYWdlcmx5IiwiY2F0Y2giLCJkZWJ1ZyIsImRpdiIsImNsYXNzIiwiY2xhc3NOYW1lIiwiYSIsInNwYW4iLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});