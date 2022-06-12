"use strict";
(() => {
var exports = {};
exports.id = 949;
exports.ids = [949];
exports.modules = {

/***/ 440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _shipId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: ./pages/[shipId]/index.tsx



const Ship = ({ ship  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    console.log(ship);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            children: Object.values(ship).map((el, index)=>{
                if (typeof el === "string") {
                    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        marginBlock: "10px",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: el
                        }, el)
                    });
                }
            })
        })
    });
};
async function getStaticPaths() {
    let data = await fetch("https://api.spacexdata.com/v4/dragons");
    let data1 = await fetch("https://api.spacexdata.com/v4/rockets");
    let data2 = await fetch("https://api.spacexdata.com/v4/ships");
    let dataParsed = await data.json();
    let data1Parsed = await data1.json();
    let data2Parsed = await data2.json();
    const paths = [
        ...dataParsed,
        ...data1Parsed,
        ...data2Parsed
    ].map((ship)=>({
            params: {
                shipId: ship.id
            }
        })
    );
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    let data = await fetch("https://api.spacexdata.com/v4/dragons");
    let data1 = await fetch("https://api.spacexdata.com/v4/rockets");
    let data2 = await fetch("https://api.spacexdata.com/v4/ships");
    let dataParsed = await data.json();
    let data1Parsed = await data1.json();
    let data2Parsed = await data2.json();
    const ship1 = [
        ...dataParsed,
        ...data1Parsed,
        ...data2Parsed
    ].filter((ship)=>ship.id === params.shipId
    )[0];
    return {
        props: {
            ship: ship1
        }
    };
}
/* harmony default export */ const _shipId_ = (Ship);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(440));
module.exports = __webpack_exports__;

})();