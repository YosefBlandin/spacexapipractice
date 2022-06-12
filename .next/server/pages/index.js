(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 493:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "styles_card__zHLIo",
	"card__image": "styles_card__image__U2KGK",
	"card__title": "styles_card__title__Cry11",
	"card__subtitle": "styles_card__subtitle__Fu6zl",
	"card__description": "styles_card__description__cdWFN"
};


/***/ }),

/***/ 399:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/Card/styles.module.css
var styles_module = __webpack_require__(493);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Card/index.tsx




const Card = ({ element  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/${element?.id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: (styles_module_default()).card,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (styles_module_default()).card__image,
                    children: element?.flickr_images || element?.image ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        placeholder: "blur",
                        blurDataURL: "https://dummyimage.com/10x10/fff/aaa",
                        width: "100%",
                        height: "100%",
                        layout: "responsive",
                        src: (element?.flickr_images?.[0] ?? element?.image) ?? "",
                        alt: element?.name
                    }) : false
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (styles_module_default()).card__title,
                    children: element?.name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (styles_module_default()).card__subtitle,
                    children: element?.type
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (styles_module_default()).card__description,
                    children: [
                        element.heat_shield ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "Heat shield material:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                element?.heat_shield?.material
                            ]
                        }) : false,
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "Diameters:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                element?.diameter?.feet,
                                                " feets"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                element?.diameter?.meters,
                                                " meters"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }, element?.name);
};

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/index.tsx




const Home = ({ dragonShips , rockets , ships  })=>{
    console.log(dragonShips);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Spacex API practice by Yosef Blandin"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (Home_module_default()).main,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: (Home_module_default()).title,
                        children: [
                            "Welcome to",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://nextjs.org",
                                children: "Yosef Blandin SpaceX API Practice"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: (Home_module_default()).description,
                        children: [
                            "You can see different ships retrieved from the SpaceX Open Source API",
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (Home_module_default()).description,
                        children: "Dragon Capsules"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: (Home_module_default()).grid,
                        children: dragonShips?.map((element)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                                element: element
                            }, element.name)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (Home_module_default()).description,
                        children: "Rockets"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: (Home_module_default()).grid,
                        children: rockets?.map((element)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                                element: element
                            }, element.name)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (Home_module_default()).description,
                        children: "Ships"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: (Home_module_default()).grid,
                        children: ships?.map((element)=>/*#__PURE__*/ jsx_runtime_.jsx(Card, {
                                element: element
                            }, element.name)
                        )
                    })
                ]
            })
        ]
    });
};
async function getServerSideProps() {
    let data = await fetch("https://api.spacexdata.com/v4/dragons?limit=5");
    let data1 = await fetch("https://api.spacexdata.com/v4/rockets");
    let data2 = await fetch("https://api.spacexdata.com/v4/ships");
    let dragonShips = await data.json();
    let rockets = await data1.json();
    let ships = await data2.json();
    return {
        props: {
            dragonShips,
            rockets,
            ships
        }
    };
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,675], () => (__webpack_exec__(275)));
module.exports = __webpack_exports__;

})();