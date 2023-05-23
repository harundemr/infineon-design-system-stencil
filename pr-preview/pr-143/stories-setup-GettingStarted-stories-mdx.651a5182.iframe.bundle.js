/*! For license information please see stories-setup-GettingStarted-stories-mdx.651a5182.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"./node_modules/@mdx-js/react/lib/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useMDXComponents}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);const MDXContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}},"./node_modules/@storybook/addon-docs/dist/esm/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js");__webpack_require__.d(__webpack_exports__,"a",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.AddContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.ArgsTable})),__webpack_require__.d(__webpack_exports__,"c",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Canvas})),__webpack_require__.d(__webpack_exports__,"d",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Description})),__webpack_require__.d(__webpack_exports__,"e",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Meta})),__webpack_require__.d(__webpack_exports__,"f",(function(){return _blocks__WEBPACK_IMPORTED_MODULE_0__.Story}))},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/setup/GettingStarted.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),GettingStarted_en='# Infineon Design System Stencil Web Components (MVP)\n[![GitHub Repo Issues](https://img.shields.io/github/issues/Infineon/infineon-design-system-stencil?style=plastic)](https://github.com/Infineon/infineon-design-system-stencil/issues)\n[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/Infineon/infineon-design-system-stencil?style=plastic)](https://github.com/Infineon/infineon-design-system-stencil/pulls)\n[![GitHub Repo Version](https://img.shields.io/github/package-json/v/Infineon/infineon-design-system-stencil?style=plastic)](https://github.com/Infineon/infineon-design-system-stencil/blob/master/package.json)\n[![GitHub Master Branch Weekly Commits](https://img.shields.io/github/commit-activity/w/Infineon/infineon-design-system-stencil/master?style=plastic)](https://github.com/Infineon/infineon-design-system-stencil/tree/master)\n[![GitHub Repo Contributors](https://img.shields.io/github/contributors/Infineon/infineon-design-system-stencil?style=plastic)](https://github.com/Infineon/infineon-design-system-stencil/graphs/contributors)\n[![GitHub Repo Discussions](https://img.shields.io/github/discussions/Infineon/infineon-design-system-stencil)](https://github.com/Infineon/infineon-design-system-stencil/)\n\n\n\x3c!-- TABLE OF CONTENTS --\x3e\n<details id="tableContent">\n  <summary>Table of Contents</summary>\n  <ol>\n    <li>\n      <a href="#about-the-project">About The Project</a>\n      <ul>\n        <li><a href="#built-with">Built With</a></li>\n      </ul>\n    </li>\n    <li>\n      <a href="#getting-started">Getting Started</a>\n      <ul>\n        <li><a href="#prerequisites">Prerequisites</a></li>\n        <li><a href="#installation">Installation</a></li>\n      </ul>\n    </li>\n    <li><a href="#usage-of-components">Usage</a></li>\n      <li><a href="#local-development">Local development</a></li>\n    <li><a href="#contributing">Contributing</a></li>\n    <li><a href="#contact">Contact</a></li>\n  </ol>\n</details>\n\n\x3c!-- ABOUT THE PROJECT --\x3e\n## About The Project\n\nAs part of the Infineon brand guidelines, the Infineon Digital Design System supports designers, developers and project managers to build user interfaces faster and better – with the ultimate goal to create a coherent and optimal user journey across all internal and external Infineon digital touchpoints.\n\nThis repository contains an implementation of Infineons Digital Design System and it\'s Storybook sourcecode using Stencil web components.\n\nUse it to build & run storybook and distribute the Stencil web components.\n\n### Built With\n\n[Stencil web components][Stencil-url]\n\n<p align="right"><a href="#tableContent">back to top</a></p>\n\n\x3c!-- GETTING STARTED --\x3e\n## Getting Started\n\n### Prerequisites\n\n- [Node](https://nodejs.org/en/) v14 or older.\n- [Yarn](https://classic.yarnpkg.com/en/) v1.22.10 or older, or [Npm](https://www.npmjs.com/) v6.14.13 or older.\n\n### Installation on React, Vue or Angular\n\n#### With NPM\n\n1. ```npm install --save @infineon/infineon-design-system-stencil```\n\n#### With Yarn\n\n1. ```yarn add @infineon/infineon-design-system-stencil```\n\n#### Import the module inside your entry point file.\n\nFor React: <b>index.js</b> <br />\nFor Vue: <b>main.js</b> <br />\nFor Angular: <b>main.ts</b>\n\n```bash\nimport { defineCustomElements } from "@infineon/infineon-design-system-stencil/loader";\n\ndefineCustomElements(window);\n```\n\n##### Additional steps for Angular\n\nInside <b>app.modules.ts</b> file:\n\n```bash\nimport { CUSTOM_ELEMENTS_SCHEMA } from \'@angular/core\';\n\n@NgModule({\n ...\n  schemas: [\n    CUSTOM_ELEMENTS_SCHEMA\n  ],\n ...\n})\n```\n\n#### Installation of SASS\n\x3c!-- For React projects only, run:  --\x3e\n```bash\nnpm install sass\n```\n\n## Using only the Icons\n\nFor the case in which you only want to use our icons, please follow these steps:\n\n1. install the package by following the instructions explained above\n2. Import only the ifx-icon component inside your entry point file as explained below;\n\nFor React: <b>index.js</b> <br />\nFor Vue: <b>main.js</b> <br />\nFor Angular: <b>main.ts</b>\n\n```bash\nimport { defineCustomElement as defineCustomElementIfxTag } from "@infineon/infineon-design-system-stencil/dist/components/ifx-icon";\n\ndefineCustomElementIfxTag(window);\n```';function _createMdxContent(props){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(esm.e,{title:"Setup & installation/Getting started",parameters:{previewTabs:{canvas:{hidden:!0},"storybook/docs/panel":{hidden:!0},"usage-tab/panel":{hidden:!0}}}}),"\n",Object(jsx_runtime.jsx)(esm.d,{markdown:GettingStarted_en})]})}function MDXContent(){var props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},MDXLayout=Object.assign({},Object(lib.a)(),props.components).wrapper;return MDXLayout?Object(jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:Object(jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()}var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Setup & installation/Getting started",parameters:{previewTabs:{canvas:{hidden:!0},"storybook/docs/panel":{hidden:!0},"usage-tab/panel":{hidden:!0}}},includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return react_default.a.createElement(esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},react_default.a.createElement(MDXContent,null))}});__webpack_exports__.default=componentMeta}}]);
//# sourceMappingURL=stories-setup-GettingStarted-stories-mdx.651a5182.iframe.bundle.js.map