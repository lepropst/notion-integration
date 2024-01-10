"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Presence: () => (/* binding */ $921a889cee6df7e8$export$99c2b779aa4e8b8b)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.47_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs\");\n\n\n\n\nfunction $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((state, event)=>{\n        const nextState = machine[state][event];\n        return nextState !== null && nextState !== void 0 ? nextState : state;\n    }, initialState);\n}\nconst $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props)=>{\n    const { present: present, children: children } = props;\n    const presence = $921a889cee6df7e8$var$usePresence(present);\n    const child = typeof children === \"function\" ? children({\n        present: presence.isPresent\n    }) : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);\n    const ref = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(presence.ref, child.ref);\n    const forceMount = typeof children === \"function\";\n    return forceMount || presence.isPresent ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {\n        ref: ref\n    }) : null;\n};\n$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = \"Presence\";\n/* -------------------------------------------------------------------------------------------------\n * usePresence\n * -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$usePresence(present) {\n    const [node1, setNode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    const stylesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});\n    const prevPresentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(present);\n    const prevAnimationNameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(\"none\");\n    const initialState = present ? \"mounted\" : \"unmounted\";\n    const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {\n        mounted: {\n            UNMOUNT: \"unmounted\",\n            ANIMATION_OUT: \"unmountSuspended\"\n        },\n        unmountSuspended: {\n            MOUNT: \"mounted\",\n            ANIMATION_END: \"unmounted\"\n        },\n        unmounted: {\n            MOUNT: \"mounted\"\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);\n        prevAnimationNameRef.current = state === \"mounted\" ? currentAnimationName : \"none\";\n    }, [\n        state\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{\n        const styles = stylesRef.current;\n        const wasPresent = prevPresentRef.current;\n        const hasPresentChanged = wasPresent !== present;\n        if (hasPresentChanged) {\n            const prevAnimationName = prevAnimationNameRef.current;\n            const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);\n            if (present) send(\"MOUNT\");\n            else if (currentAnimationName === \"none\" || (styles === null || styles === void 0 ? void 0 : styles.display) === \"none\") // so we unmount instantly\n            send(\"UNMOUNT\");\n            else {\n                /**\n         * When `present` changes to `false`, we check changes to animation-name to\n         * determine whether an animation has started. We chose this approach (reading\n         * computed styles) because there is no `animationrun` event and `animationstart`\n         * fires after `animation-delay` has expired which would be too late.\n         */ const isAnimating = prevAnimationName !== currentAnimationName;\n                if (wasPresent && isAnimating) send(\"ANIMATION_OUT\");\n                else send(\"UNMOUNT\");\n            }\n            prevPresentRef.current = present;\n        }\n    }, [\n        present,\n        send\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{\n        if (node1) {\n            /**\n       * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`\n       * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we\n       * make sure we only trigger ANIMATION_END for the currently active animation.\n       */ const handleAnimationEnd = (event)=>{\n                const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);\n                const isCurrentAnimation = currentAnimationName.includes(event.animationName);\n                if (event.target === node1 && isCurrentAnimation) // a frame after the animation ends, creating a flash of visible content.\n                // By manually flushing we ensure they sync within a frame, removing the flash.\n                (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>send(\"ANIMATION_END\"));\n            };\n            const handleAnimationStart = (event)=>{\n                if (event.target === node1) prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);\n            };\n            node1.addEventListener(\"animationstart\", handleAnimationStart);\n            node1.addEventListener(\"animationcancel\", handleAnimationEnd);\n            node1.addEventListener(\"animationend\", handleAnimationEnd);\n            return ()=>{\n                node1.removeEventListener(\"animationstart\", handleAnimationStart);\n                node1.removeEventListener(\"animationcancel\", handleAnimationEnd);\n                node1.removeEventListener(\"animationend\", handleAnimationEnd);\n            };\n        } else // We avoid doing so during cleanup as the node may change but still exist.\n        send(\"ANIMATION_END\");\n    }, [\n        node1,\n        send\n    ]);\n    return {\n        isPresent: [\n            \"mounted\",\n            \"unmountSuspended\"\n        ].includes(state),\n        ref: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node)=>{\n            if (node) stylesRef.current = getComputedStyle(node);\n            setNode(node);\n        }, [])\n    };\n}\n/* -----------------------------------------------------------------------------------------------*/ function $921a889cee6df7e8$var$getAnimationName(styles) {\n    return (styles === null || styles === void 0 ? void 0 : styles.animationName) || \"none\";\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXByZXNlbmNlQDEuMC4xX0B0eXBlcytyZWFjdC1kb21AMTguMi4xOF9AdHlwZXMrcmVhY3RAMTguMi40N19yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByZXNlbmNlL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdQO0FBQ3hMO0FBQytCO0FBQ0s7QUFPNUYsU0FBU29CLDBDQUEwQ0MsWUFBWSxFQUFFQyxPQUFPO0lBQ3BFLE9BQU9ULGlEQUFpQkEsQ0FBQyxDQUFDVSxPQUFPQztRQUM3QixNQUFNQyxZQUFZSCxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTTtRQUN2QyxPQUFPQyxjQUFjLFFBQVFBLGNBQWMsS0FBSyxJQUFJQSxZQUFZRjtJQUNwRSxHQUFHRjtBQUNQO0FBR0EsTUFBTUssNENBQTRDLENBQUNDO0lBQy9DLE1BQU0sRUFBRUMsU0FBU0EsT0FBTyxFQUFHQyxVQUFVQSxRQUFRLEVBQUcsR0FBR0Y7SUFDbkQsTUFBTUcsV0FBV0Msa0NBQWtDSDtJQUNuRCxNQUFNSSxRQUFRLE9BQU9ILGFBQWEsYUFBYUEsU0FBUztRQUNwREQsU0FBU0UsU0FBU0csU0FBUztJQUMvQixLQUFLaEMsMkNBQWVBLENBQUNpQyxJQUFJLENBQUNMO0lBQzFCLE1BQU1NLE1BQU1sQiw2RUFBc0JBLENBQUNhLFNBQVNLLEdBQUcsRUFBRUgsTUFBTUcsR0FBRztJQUMxRCxNQUFNQyxhQUFhLE9BQU9QLGFBQWE7SUFDdkMsT0FBT08sY0FBY04sU0FBU0csU0FBUyxHQUFHLFdBQVcsR0FBRzlCLG1EQUFtQkEsQ0FBQzZCLE9BQU87UUFDL0VHLEtBQUtBO0lBQ1QsS0FBSztBQUNUO0FBQ0FULDBDQUEwQ1csV0FBVyxHQUFHO0FBQ3hEOztrR0FFa0csR0FBRyxTQUFTTixrQ0FBa0NILE9BQU87SUFDbkosTUFBTSxDQUFD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TUFBTTtJQUN2SixPQUFPLENBQUNBLFdBQVcsUUFBUUEsV0FBVyxLQUFLLElBQUksS0FBSyxJQUFJQSxPQUFPUyxhQUFhLEtBQUs7QUFDckY7QUFLK0QsQ0FDL0Qsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90aW9uLWZvcm1zLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1wcmVzZW5jZUAxLjAuMV9AdHlwZXMrcmVhY3QtZG9tQDE4LjIuMThfQHR5cGVzK3JlYWN0QDE4LjIuNDdfcmVhY3QtZG9tQDE4LjIuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1wcmVzZW5jZS9kaXN0L2luZGV4Lm1qcz8zZDA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hpbGRyZW4gYXMgJGlxcTNyJENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgYXMgJGlxcTNyJGNsb25lRWxlbWVudCwgdXNlU3RhdGUgYXMgJGlxcTNyJHVzZVN0YXRlLCB1c2VSZWYgYXMgJGlxcTNyJHVzZVJlZiwgdXNlRWZmZWN0IGFzICRpcXEzciR1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIGFzICRpcXEzciR1c2VDYWxsYmFjaywgdXNlUmVkdWNlciBhcyAkaXFxM3IkdXNlUmVkdWNlcn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2ZsdXNoU3luYyBhcyAkaXFxM3IkZmx1c2hTeW5jfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQge3VzZUNvbXBvc2VkUmVmcyBhcyAkaXFxM3IkdXNlQ29tcG9zZWRSZWZzfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWNvbXBvc2UtcmVmc1wiO1xuaW1wb3J0IHt1c2VMYXlvdXRFZmZlY3QgYXMgJGlxcTNyJHVzZUxheW91dEVmZmVjdH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC11c2UtbGF5b3V0LWVmZmVjdFwiO1xuXG5cblxuXG5cblxuZnVuY3Rpb24gJGZlOTYzYjM1NTM0N2NjNjgkZXhwb3J0JDNlNjU0M2RlMTRmODYxNGYoaW5pdGlhbFN0YXRlLCBtYWNoaW5lKSB7XG4gICAgcmV0dXJuICRpcXEzciR1c2VSZWR1Y2VyKChzdGF0ZSwgZXZlbnQpPT57XG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IG1hY2hpbmVbc3RhdGVdW2V2ZW50XTtcbiAgICAgICAgcmV0dXJuIG5leHRTdGF0ZSAhPT0gbnVsbCAmJiBuZXh0U3RhdGUgIT09IHZvaWQgMCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICAgIH0sIGluaXRpYWxTdGF0ZSk7XG59XG5cblxuY29uc3QgJDkyMWE4ODljZWU2ZGY3ZTgkZXhwb3J0JDk5YzJiNzc5YWE0ZThiOGIgPSAocHJvcHMpPT57XG4gICAgY29uc3QgeyBwcmVzZW50OiBwcmVzZW50ICwgY2hpbGRyZW46IGNoaWxkcmVuICB9ID0gcHJvcHM7XG4gICAgY29uc3QgcHJlc2VuY2UgPSAkOTIxYTg4OWNlZTZkZjdlOCR2YXIkdXNlUHJlc2VuY2UocHJlc2VudCk7XG4gICAgY29uc3QgY2hpbGQgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbih7XG4gICAgICAgIHByZXNlbnQ6IHByZXNlbmNlLmlzUHJlc2VudFxuICAgIH0pIDogJGlxcTNyJENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIGNvbnN0IHJlZiA9ICRpcXEzciR1c2VDb21wb3NlZFJlZnMocHJlc2VuY2UucmVmLCBjaGlsZC5yZWYpO1xuICAgIGNvbnN0IGZvcmNlTW91bnQgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIGZvcmNlTW91bnQgfHwgcHJlc2VuY2UuaXNQcmVzZW50ID8gLyojX19QVVJFX18qLyAkaXFxM3IkY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIHJlZjogcmVmXG4gICAgfSkgOiBudWxsO1xufTtcbiQ5MjFhODg5Y2VlNmRmN2U4JGV4cG9ydCQ5OWMyYjc3OWFhNGU4YjhiLmRpc3BsYXlOYW1lID0gJ1ByZXNlbmNlJztcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIHVzZVByZXNlbmNlXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIGZ1bmN0aW9uICQ5MjFhODg5Y2VlNmRmN2U4JHZhciR1c2VQcmVzZW5jZShwcmVzZW50KSB7XG4gICAgY29uc3QgW25vZGUxLCBzZXROb2RlXSA9ICRpcXEzciR1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IHN0eWxlc1JlZiA9ICRpcXEzciR1c2VSZWYoe30pO1xuICAgIGNvbnN0IHByZXZQcmVzZW50UmVmID0gJGlxcTNyJHVzZVJlZihwcmVzZW50KTtcbiAgICBjb25zdCBwcmV2QW5pbWF0aW9uTmFtZVJlZiA9ICRpcXEzciR1c2VSZWYoJ25vbmUnKTtcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSBwcmVzZW50ID8gJ21vdW50ZWQnIDogJ3VubW91bnRlZCc7XG4gICAgY29uc3QgW3N0YXRlLCBzZW5kXSA9ICRmZTk2M2IzNTUzNDdjYzY4JGV4cG9ydCQzZTY1NDNkZTE0Zjg2MTRmKGluaXRpYWxTdGF0ZSwge1xuICAgICAgICBtb3VudGVkOiB7XG4gICAgICAgICAgICBVTk1PVU5UOiAndW5tb3VudGVkJyxcbiAgICAgICAgICAgIEFOSU1BVElPTl9PVVQ6ICd1bm1vdW50U3VzcGVuZGVkJ1xuICAgICAgICB9LFxuICAgICAgICB1bm1vdW50U3VzcGVuZGVkOiB7XG4gICAgICAgICAgICBNT1VOVDogJ21vdW50ZWQnLFxuICAgICAgICAgICAgQU5JTUFUSU9OX0VORDogJ3VubW91bnRlZCdcbiAgICAgICAgfSxcbiAgICAgICAgdW5tb3VudGVkOiB7XG4gICAgICAgICAgICBNT1VOVDogJ21vdW50ZWQnXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkaXFxM3IkdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBbmltYXRpb25OYW1lID0gJDkyMWE4ODljZWU2ZGY3ZTgkdmFyJGdldEFuaW1hdGlvbk5hbWUoc3R5bGVzUmVmLmN1cnJlbnQpO1xuICAgICAgICBwcmV2QW5pbWF0aW9uTmFtZVJlZi5jdXJyZW50ID0gc3RhdGUgPT09ICdtb3VudGVkJyA/IGN1cnJlbnRBbmltYXRpb25OYW1lIDogJ25vbmUnO1xuICAgIH0sIFtcbiAgICAgICAgc3RhdGVcbiAgICBdKTtcbiAgICAkaXFxM3IkdXNlTGF5b3V0RWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlc1JlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCB3YXNQcmVzZW50ID0gcHJldlByZXNlbnRSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgaGFzUHJlc2VudENoYW5nZWQgPSB3YXNQcmVzZW50ICE9PSBwcmVzZW50O1xuICAgICAgICBpZiAoaGFzUHJlc2VudENoYW5nZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZBbmltYXRpb25OYW1lID0gcHJldkFuaW1hdGlvbk5hbWVSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBbmltYXRpb25OYW1lID0gJDkyMWE4ODljZWU2ZGY3ZTgkdmFyJGdldEFuaW1hdGlvbk5hbWUoc3R5bGVzKTtcbiAgICAgICAgICAgIGlmIChwcmVzZW50KSBzZW5kKCdNT1VOVCcpO1xuICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudEFuaW1hdGlvbk5hbWUgPT09ICdub25lJyB8fCAoc3R5bGVzID09PSBudWxsIHx8IHN0eWxlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3R5bGVzLmRpc3BsYXkpID09PSAnbm9uZScpIC8vIElmIHRoZXJlIGlzIG5vIGV4aXQgYW5pbWF0aW9uIG9yIHRoZSBlbGVtZW50IGlzIGhpZGRlbiwgYW5pbWF0aW9ucyB3b24ndCBydW5cbiAgICAgICAgICAgIC8vIHNvIHdlIHVubW91bnQgaW5zdGFudGx5XG4gICAgICAgICAgICBzZW5kKCdVTk1PVU5UJyk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiBgcHJlc2VudGAgY2hhbmdlcyB0byBgZmFsc2VgLCB3ZSBjaGVjayBjaGFuZ2VzIHRvIGFuaW1hdGlvbi1uYW1lIHRvXG4gICAgICAgICAqIGRldGVybWluZSB3aGV0aGVyIGFuIGFuaW1hdGlvbiBoYXMgc3RhcnRlZC4gV2UgY2hvc2UgdGhpcyBhcHByb2FjaCAocmVhZGluZ1xuICAgICAgICAgKiBjb21wdXRlZCBzdHlsZXMpIGJlY2F1c2UgdGhlcmUgaXMgbm8gYGFuaW1hdGlvbnJ1bmAgZXZlbnQgYW5kIGBhbmltYXRpb25zdGFydGBcbiAgICAgICAgICogZmlyZXMgYWZ0ZXIgYGFuaW1hdGlvbi1kZWxheWAgaGFzIGV4cGlyZWQgd2hpY2ggd291bGQgYmUgdG9vIGxhdGUuXG4gICAgICAgICAqLyBjb25zdCBpc0FuaW1hdGluZyA9IHByZXZBbmltYXRpb25OYW1lICE9PSBjdXJyZW50QW5pbWF0aW9uTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAod2FzUHJlc2VudCAmJiBpc0FuaW1hdGluZykgc2VuZCgnQU5JTUFUSU9OX09VVCcpO1xuICAgICAgICAgICAgICAgIGVsc2Ugc2VuZCgnVU5NT1VOVCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldlByZXNlbnRSZWYuY3VycmVudCA9IHByZXNlbnQ7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHByZXNlbnQsXG4gICAgICAgIHNlbmRcbiAgICBdKTtcbiAgICAkaXFxM3IkdXNlTGF5b3V0RWZmZWN0KCgpPT57XG4gICAgICAgIGlmIChub2RlMSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgKiBUcmlnZ2VyaW5nIGFuIEFOSU1BVElPTl9PVVQgZHVyaW5nIGFuIEFOSU1BVElPTl9JTiB3aWxsIGZpcmUgYW4gYGFuaW1hdGlvbmNhbmNlbGBcbiAgICAgICAqIGV2ZW50IGZvciBBTklNQVRJT05fSU4gYWZ0ZXIgd2UgaGF2ZSBlbnRlcmVkIGB1bm1vdW50U3VzcGVuZGVkYCBzdGF0ZS4gU28sIHdlXG4gICAgICAgKiBtYWtlIHN1cmUgd2Ugb25seSB0cmlnZ2VyIEFOSU1BVElPTl9FTkQgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIGFuaW1hdGlvbi5cbiAgICAgICAqLyBjb25zdCBoYW5kbGVBbmltYXRpb25FbmQgPSAoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFuaW1hdGlvbk5hbWUgPSAkOTIxYTg4OWNlZTZkZjdlOCR2YXIkZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXNSZWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50QW5pbWF0aW9uID0gY3VycmVudEFuaW1hdGlvbk5hbWUuaW5jbHVkZXMoZXZlbnQuYW5pbWF0aW9uTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbm9kZTEgJiYgaXNDdXJyZW50QW5pbWF0aW9uKSAvLyBXaXRoIFJlYWN0IDE4IGNvbmN1cnJlbmN5IHRoaXMgdXBkYXRlIGlzIGFwcGxpZWRcbiAgICAgICAgICAgICAgICAvLyBhIGZyYW1lIGFmdGVyIHRoZSBhbmltYXRpb24gZW5kcywgY3JlYXRpbmcgYSBmbGFzaCBvZiB2aXNpYmxlIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgLy8gQnkgbWFudWFsbHkgZmx1c2hpbmcgd2UgZW5zdXJlIHRoZXkgc3luYyB3aXRoaW4gYSBmcmFtZSwgcmVtb3ZpbmcgdGhlIGZsYXNoLlxuICAgICAgICAgICAgICAgICRpcXEzciRmbHVzaFN5bmMoKCk9PnNlbmQoJ0FOSU1BVElPTl9FTkQnKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlQW5pbWF0aW9uU3RhcnQgPSAoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbm9kZTEpIC8vIGlmIGFuaW1hdGlvbiBvY2N1cnJlZCwgc3RvcmUgaXRzIG5hbWUgYXMgdGhlIHByZXZpb3VzIGFuaW1hdGlvbi5cbiAgICAgICAgICAgICAgICBwcmV2QW5pbWF0aW9uTmFtZVJlZi5jdXJyZW50ID0gJDkyMWE4ODljZWU2ZGY3ZTgkdmFyJGdldEFuaW1hdGlvbk5hbWUoc3R5bGVzUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5vZGUxLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbnN0YXJ0JywgaGFuZGxlQW5pbWF0aW9uU3RhcnQpO1xuICAgICAgICAgICAgbm9kZTEuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uY2FuY2VsJywgaGFuZGxlQW5pbWF0aW9uRW5kKTtcbiAgICAgICAgICAgIG5vZGUxLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZUFuaW1hdGlvbkVuZCk7XG4gICAgICAgICAgICByZXR1cm4gKCk9PntcbiAgICAgICAgICAgICAgICBub2RlMS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25zdGFydCcsIGhhbmRsZUFuaW1hdGlvblN0YXJ0KTtcbiAgICAgICAgICAgICAgICBub2RlMS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25jYW5jZWwnLCBoYW5kbGVBbmltYXRpb25FbmQpO1xuICAgICAgICAgICAgICAgIG5vZGUxLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZUFuaW1hdGlvbkVuZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgLy8gVHJhbnNpdGlvbiB0byB0aGUgdW5tb3VudGVkIHN0YXRlIGlmIHRoZSBub2RlIGlzIHJlbW92ZWQgcHJlbWF0dXJlbHkuXG4gICAgICAgIC8vIFdlIGF2b2lkIGRvaW5nIHNvIGR1cmluZyBjbGVhbnVwIGFzIHRoZSBub2RlIG1heSBjaGFuZ2UgYnV0IHN0aWxsIGV4aXN0LlxuICAgICAgICBzZW5kKCdBTklNQVRJT05fRU5EJyk7XG4gICAgfSwgW1xuICAgICAgICBub2RlMSxcbiAgICAgICAgc2VuZFxuICAgIF0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlzUHJlc2VudDogW1xuICAgICAgICAgICAgJ21vdW50ZWQnLFxuICAgICAgICAgICAgJ3VubW91bnRTdXNwZW5kZWQnXG4gICAgICAgIF0uaW5jbHVkZXMoc3RhdGUpLFxuICAgICAgICByZWY6ICRpcXEzciR1c2VDYWxsYmFjaygobm9kZSk9PntcbiAgICAgICAgICAgIGlmIChub2RlKSBzdHlsZXNSZWYuY3VycmVudCA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgICAgICBzZXROb2RlKG5vZGUpO1xuICAgICAgICB9LCBbXSlcbiAgICB9O1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBmdW5jdGlvbiAkOTIxYTg4OWNlZTZkZjdlOCR2YXIkZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXMpIHtcbiAgICByZXR1cm4gKHN0eWxlcyA9PT0gbnVsbCB8fCBzdHlsZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0eWxlcy5hbmltYXRpb25OYW1lKSB8fCAnbm9uZSc7XG59XG5cblxuXG5cbmV4cG9ydCB7JDkyMWE4ODljZWU2ZGY3ZTgkZXhwb3J0JDk5YzJiNzc5YWE0ZThiOGIgYXMgUHJlc2VuY2V9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbIkNoaWxkcmVuIiwiJGlxcTNyJENoaWxkcmVuIiwiY2xvbmVFbGVtZW50IiwiJGlxcTNyJGNsb25lRWxlbWVudCIsInVzZVN0YXRlIiwiJGlxcTNyJHVzZVN0YXRlIiwidXNlUmVmIiwiJGlxcTNyJHVzZVJlZiIsInVzZUVmZmVjdCIsIiRpcXEzciR1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsIiRpcXEzciR1c2VDYWxsYmFjayIsInVzZVJlZHVjZXIiLCIkaXFxM3IkdXNlUmVkdWNlciIsImZsdXNoU3luYyIsIiRpcXEzciRmbHVzaFN5bmMiLCJ1c2VDb21wb3NlZFJlZnMiLCIkaXFxM3IkdXNlQ29tcG9zZWRSZWZzIiwidXNlTGF5b3V0RWZmZWN0IiwiJGlxcTNyJHVzZUxheW91dEVmZmVjdCIsIiRmZTk2M2IzNTUzNDdjYzY4JGV4cG9ydCQzZTY1NDNkZTE0Zjg2MTRmIiwiaW5pdGlhbFN0YXRlIiwibWFjaGluZSIsInN0YXRlIiwiZXZlbnQiLCJuZXh0U3RhdGUiLCIkOTIxYTg4OWNlZTZkZjdlOCRleHBvcnQkOTljMmI3NzlhYTRlOGI4YiIsInByb3BzIiwicHJlc2VudCIsImNoaWxkcmVuIiwicHJlc2VuY2UiLCIkOTIxYTg4OWNlZTZkZjdlOCR2YXIkdXNlUHJlc2VuY2UiLCJjaGlsZCIsImlzUHJlc2VudCIsIm9ubHkiLCJyZWYiLCJmb3JjZU1vdW50IiwiZGlzcGxheU5hbWUiLCJub2RlMSIsInNldE5vZGUiLCJzdHlsZXNSZWYiLCJwcmV2UHJlc2VudFJlZiIsInByZXZBbmltYXRpb25OYW1lUmVmIiwic2VuZCIsIm1vdW50ZWQiLCJVTk1PVU5UIiwiQU5JTUFUSU9OX09VVCIsInVubW91bnRTdXNwZW5kZWQiLCJNT1VOVCIsIkFOSU1BVElPTl9FTkQiLCJ1bm1vdW50ZWQiLCJjdXJyZW50QW5pbWF0aW9uTmFtZSIsIiQ5MjFhODg5Y2VlNmRmN2U4JHZhciRnZXRBbmltYXRpb25OYW1lIiwiY3VycmVudCIsInN0eWxlcyIsIndhc1ByZXNlbnQiLCJoYXNQcmVzZW50Q2hhbmdlZCIsInByZXZBbmltYXRpb25OYW1lIiwiZGlzcGxheSIsImlzQW5pbWF0aW5nIiwiaGFuZGxlQW5pbWF0aW9uRW5kIiwiaXNDdXJyZW50QW5pbWF0aW9uIiwiaW5jbHVkZXMiLCJhbmltYXRpb25OYW1lIiwidGFyZ2V0IiwiaGFuZGxlQW5pbWF0aW9uU3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5vZGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiUHJlc2VuY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs\n");

/***/ })

};
;