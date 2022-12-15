(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 4162:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "post-body_content__1R6cU"
};


/***/ }),

/***/ 9358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Post),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(2606);
// EXTERNAL MODULE: ./components/post-body.module.css
var post_body_module = __webpack_require__(4162);
var post_body_module_default = /*#__PURE__*/__webpack_require__.n(post_body_module);
;// CONCATENATED MODULE: ./components/post-body.tsx


function PostBody({ content  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "max-w-2xl mx-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (post_body_module_default()).content,
            dangerouslySetInnerHTML: {
                __html: content
            }
        })
    });
}

// EXTERNAL MODULE: ./components/more-stories.tsx + 1 modules
var more_stories = __webpack_require__(7132);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/header.tsx


function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
        className: "text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                className: "hover:underline",
                children: "Blog"
            }),
            "."
        ]
    });
}

// EXTERNAL MODULE: ./components/avatar.tsx
var avatar = __webpack_require__(1295);
// EXTERNAL MODULE: ./components/date.tsx
var components_date = __webpack_require__(9863);
// EXTERNAL MODULE: ./components/cover-image.tsx
var cover_image = __webpack_require__(2007);
;// CONCATENATED MODULE: ./components/post-title.tsx

function PostTitle({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",
        dangerouslySetInnerHTML: {
            __html: children
        }
    });
}

;// CONCATENATED MODULE: ./components/categories.tsx

function Categories({ categories  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        className: "ml-1",
        children: [
            "under",
            categories.edges.length > 0 ? categories.edges.map((category, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "ml-1",
                    children: category.node.name
                }, index)) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-1",
                children: categories.edges.node.name
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/post-header.tsx






function PostHeader({ title , coverImage , date , author , categories  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PostTitle, {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:block md:mb-12",
                children: /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                    author: author
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-8 md:mb-16 sm:mx-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx(cover_image/* default */.Z, {
                    title: title,
                    coverImage: coverImage
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-2xl mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block md:hidden mb-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(avatar/* default */.Z, {
                            author: author
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-6 text-lg",
                        children: [
                            "Posted ",
                            /*#__PURE__*/ jsx_runtime_.jsx(components_date/* default */.Z, {
                                dateString: date
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Categories, {
                                categories: categories
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/section-separator.tsx

function SectionSeparator() {
    return /*#__PURE__*/ jsx_runtime_.jsx("hr", {
        className: "border-accent-2 mt-28 mb-24"
    });
}

// EXTERNAL MODULE: ./components/layout.tsx + 3 modules
var layout = __webpack_require__(4613);
;// CONCATENATED MODULE: ./components/tags.tsx

function Tags({ tags  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "max-w-2xl mx-auto",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            className: "mt-8 text-lg font-bold",
            children: [
                "Tagged",
                tags.edges.map((tag, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-4 font-normal",
                        children: tag.node.name
                    }, index))
            ]
        })
    });
}

// EXTERNAL MODULE: ./lib/api.ts
var api = __webpack_require__(1895);
// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(8038);
;// CONCATENATED MODULE: ./pages/posts/[slug].tsx















function Post({ post , posts , preview  }) {
    var _post_featuredImage;
    const router = (0,router_namespaceObject.useRouter)();
    const morePosts = posts === null || posts === void 0 ? void 0 : posts.edges;
    if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {
        return /*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 404
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        preview: preview,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                router.isFallback ? /*#__PURE__*/ jsx_runtime_.jsx(PostTitle, {
                    children: "Loading…"
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                                            children: [
                                                post.title,
                                                " | Next.js Blog Example with ",
                                                constants/* CMS_NAME */.yf
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                                            property: "og:image",
                                            content: (_post_featuredImage = post.featuredImage) === null || _post_featuredImage === void 0 ? void 0 : _post_featuredImage.node.sourceUrl
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PostHeader, {
                                    title: post.title,
                                    coverImage: post.featuredImage,
                                    date: post.date,
                                    author: post.author,
                                    categories: post.categories
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PostBody, {
                                    content: post.content
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                                    children: post.tags.edges.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(Tags, {
                                        tags: post.tags
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionSeparator, {}),
                        morePosts.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(more_stories/* default */.Z, {
                            posts: morePosts
                        })
                    ]
                })
            ]
        })
    });
}
const getStaticProps = async ({ params , preview =false , previewData  })=>{
    const data = await (0,api/* getPostAndMorePosts */.ds)(params === null || params === void 0 ? void 0 : params.slug, preview, previewData);
    return {
        props: {
            preview,
            post: data.post,
            posts: data.posts
        },
        revalidate: 10
    };
};
const getStaticPaths = async ()=>{
    const allPosts = await (0,api/* getAllPostsWithSlug */.h9)();
    return {
        paths: allPosts.edges.map(({ node  })=>`/posts/${node.slug}`) || [],
        fallback: true
    };
};


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,547], () => (__webpack_exec__(9358)));
module.exports = __webpack_exports__;

})();