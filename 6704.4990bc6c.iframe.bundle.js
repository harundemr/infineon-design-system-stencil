/*! For license information please see 6704.4990bc6c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[6704],{"./dist/esm/ifx-link.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_link:()=>Link});var _index_f0ed321b_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-f0ed321b.js"),_index_72ac5051_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-72ac5051.js");const Link=class{constructor(hostRef){(0,_index_f0ed321b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.href=void 0,this.target="_self",this.size=void 0,this.variant="bold"}render(){return(0,_index_f0ed321b_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",{key:"f261a4ab4555dd0821135fd399b49ae5e28f0f2d","aria-label":"a navigation link button",href:this.href,target:this.target,class:this.linkClassNames()},(0,_index_f0ed321b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{key:"acab1471e0da9404d1f8c8a7cb54762119bcb7ce"}))}getSizeClass(){const small="s"===this.size?"small":null,medium="m"===this.size?"medium":null,large="l"===this.size?"large":null,extraLarge="xl"===this.size?"extraLarge":null;return small||(medium||(large||(extraLarge&&"underlined"===this.variant?"large":extraLarge&&"underlined"!==this.variant?extraLarge:"")))}getVariantClass(){const bold="bold"===this.variant?"bold":null,title="title"===this.variant?"title":null,underlined="underlined"===this.variant?"underlined":null,menu="menu"===this.variant?"menu":null;return bold||(title||(underlined||(menu||bold)))}linkClassNames(){return(0,_index_72ac5051_js__WEBPACK_IMPORTED_MODULE_1__.c)("link","primary",this.getVariantClass(),this.getSizeClass())}};Link.style=':root{--ifx-font-family:"Source Sans 3";font-family:var(--ifx-font-family, sans-serif)}:host{display:inline-flex}.link{display:inline-flex;align-items:center;font-weight:400;font-size:1rem;text-decoration:none;color:#0A8276;gap:8px;line-height:1.6;font-family:var(--ifx-font-family)}.link:focus{outline-width:2px;outline-style:solid;outline-color:#0A8276;outline-offset:2px;border-radius:3px}.link.bold{font-weight:600}.link.bold:hover{text-decoration:underline}.link.bold:active{color:#08665C;font-style:normal;font-weight:600;text-decoration:underline}.link.underlined{text-decoration:underline;text-decoration-color:#0A8276;color:#1D1D1D}.link.underlined:hover{color:#0A8276}.link.underlined:active{color:#0A8276}.link.title{text-decoration:none;font-weight:600;color:#1D1D1D}.link.title:hover{color:#0A8276}.link.title:active{color:#08665C}.link.menu{font-weight:400;font-style:normal;line-height:26px;color:#1D1D1D}.link.menu:hover{color:#0A8276}.link.menu:active{color:#08665C}.link.small{font-size:0.875rem}.link.medium{font-size:1rem}.link.large{font-size:1.125rem}.link.extraLarge{font-size:1.25rem}.link.underline{text-decoration:underline}'},"./dist/esm/index-72ac5051.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classNames});var module,classnames={exports:{}};module=classnames,function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}();const classNames=classnames.exports}}]);