(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./dist/esm/ifx-card.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ifx_card",(function(){return Card}));__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-f90c8b66.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Card=function(){function Card(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Card),Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.f)(this,hostRef),this.skyline=void 0,this.headline=void 0,this.subtitle=void 0,this.text=void 0,this.button=void 0,this.list=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Card,[{key:"render",value:function render(){return Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.a,null,Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:"card"},Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:"card-body"},Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{part:"img"},Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)("slot",{name:"img"})),""+this.skyline=="true"?Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:"card-subtitle"},this.subtitle):null,Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:"card-title"},this.headline),Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)("p",{class:"card-text"},this.text),Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{part:"action"},this.button?Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)("slot",{name:"action"}):"")),""+this.list=="true"?Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:"list-group list-group-flush"},Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:"list-group-item"},"An item"),Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:"list-group-item"},"A second item"),Object(_index_f90c8b66_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:"list-group-item"},"A third item")):null))}}]),Card}();Card.style='@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:400;src:local(""), url("../../node_modules/@infineon/design-system-tokens/dist/fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-regular.woff2") format("woff2"), url("../../node_modules/@infineon/design-system-tokens/dist/fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-regular.woff") format("woff")}@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:600;src:local(""), url("../../node_modules/@infineon/design-system-tokens/dist/fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-600.woff2") format("woff2"), url("../../node_modules/@infineon/design-system-tokens/dist/fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-600.woff") format("woff")}@font-face{font-family:"Source Sans Pro";font-style:normal;font-weight:700;src:local(""), url("../../node_modules/@infineon/design-system-tokens/dist/fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-700.woff2") format("woff2"), url("../../node_modules/@infineon/design-system-tokens/dist/fonts/source-sans-pro-v18-latin/source-sans-pro-v18-latin-700.woff") format("woff")}:root{font-family:"Source Sans Pro", sans-serif}*{box-sizing:border-box;line-height:1.75;font-family:"Source Sans Pro"}ifx-icon:empty{display:none}.btn{display:inline-flex;align-items:center;min-width:80px;min-height:40px;padding:0px 16px;gap:8px;color:#FFFFFF;flex-direction:row;font-weight:600;border-radius:1px;line-height:24px;outline:none;font-family:"Source Sans Pro";text-decoration:none;user-select:none;border:1px solid rgba(0, 0, 0, 0);font-size:1rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.btn:not(.disabled){cursor:pointer}.btn-primary{color:#ffffff;background-color:#378375;border-color:#378375}.btn-outline-primary{background-color:#ffffff;color:#378375;border-color:#378375}.btn-secondary{color:#ffffff;background-color:#ab377a;border-color:#ab377a}.btn-outline-secondary{background-color:#ffffff;color:#ab377a;border-color:#ab377a}.btn-success{color:#1d1d1d;background-color:#aec067;border-color:#aec067}.btn-outline-success{background-color:#ffffff;border-color:#aec067}.btn-danger{color:#ffffff;background-color:#cd002f;border-color:#cd002f}.btn-outline-danger{background-color:#ffffff;color:#cd002f;border-color:#cd002f}.btn-warning{color:#1d1d1d;background-color:#f07f3c;border-color:#f07f3c}.btn-outline-warning{background-color:#ffffff;border-color:#f07f3c}.btn.btn-s{font-size:0.8125rem;min-width:71px;min-height:32px;line-height:16px}.btn.btn-primary:focus,.btn.btn-outline-primary:focus,.btn.btn-secondary:focus,.btn.btn-outline-secondary:focus,.btn.btn-success:focus,.btn.btn-outline-success:focus,.btn.btn-danger:focus,.btn.btn-outline-danger:focus,.btn.btn-warning:focus,.btn.btn-outline-warning:focus,.btn.btn-outline-text:focus{box-shadow:none}.btn.btn-primary:focus-visible,.btn.btn-outline-primary:focus-visible,.btn.btn-secondary:focus-visible,.btn.btn-outline-secondary:focus-visible,.btn.btn-success:focus-visible,.btn.btn-outline-success:focus-visible,.btn.btn-danger:focus-visible,.btn.btn-outline-danger:focus-visible,.btn.btn-warning:focus-visible,.btn.btn-outline-warning:focus-visible,.btn.btn-outline-text:focus-visible{box-shadow:0 0 0 3px #B4DDD8}.btn:disabled,.btn.disabled{opacity:1;background-color:#dcd5d7;border-color:#dcd5d7;color:#ffffff}.btn.btn-primary:not(:disabled,.disabled):focus{background-color:#378375;border-color:#378375}.btn.btn-primary:not(:disabled,.disabled):hover{background-color:#2d6357;border-color:#2d6357}.btn.btn-primary:not(:disabled,.disabled):active,.btn.btn-primary:not(:disabled,.disabled).active{background-color:#28594e;border-color:#28594e}.btn.btn-outline-primary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-primary:not(:disabled,.disabled):hover{color:#ffffff;background-color:#2d6357;border-color:#2d6357}.btn.btn-outline-primary:not(:disabled,.disabled):active,.btn.btn-outline-primary:not(:disabled,.disabled).active{background-color:#28594e;border-color:#28594e}.btn.btn-secondary:not(:disabled,.disabled):focus{background-color:#ab377a;border-color:#ab377a}.btn.btn-secondary:not(:disabled,.disabled):hover{background-color:#99316d;border-color:#99316d}.btn.btn-secondary:not(:disabled,.disabled):active,.btn.btn-secondary:not(:disabled,.disabled).active{background-color:#822060;border-color:#822060}.btn.btn-outline-secondary:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-secondary:not(:disabled,.disabled):hover{color:#ffffff;background-color:#99316d;border-color:#99316d}.btn.btn-outline-secondary:not(:disabled,.disabled):active,.btn.btn-outline-secondary:not(:disabled,.disabled).active{background-color:#822060;border-color:#822060}.btn.btn-success:not(:disabled,.disabled):focus{background-color:#aec067;border-color:#aec067}.btn.btn-success:not(:disabled,.disabled):hover{background-color:#91a646;border-color:#91a646}.btn.btn-success:not(:disabled,.disabled):active,.btn.btn-success:not(:disabled,.disabled).active{background-color:#7d933c;border-color:#7d933c}.btn.btn-outline-success:not(:disabled,.disabled){color:#1d1d1d}.btn.btn-outline-success:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-success:not(:disabled,.disabled):hover{background-color:#91a646;border-color:#91a646}.btn.btn-outline-success:not(:disabled,.disabled):active,.btn.btn-outline-success:not(:disabled,.disabled).active{background-color:#7d933c;border-color:#7d933c}.btn.btn-danger:not(:disabled,.disabled):focus{background-color:#cd002f;border-color:#cd002f}.btn.btn-danger:not(:disabled,.disabled):hover{background-color:#bf0023;border-color:#bf0023}.btn.btn-danger:not(:disabled,.disabled):active,.btn.btn-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-outline-danger:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-danger:not(:disabled,.disabled):hover{color:#ffffff;background-color:#bf0023;border-color:#bf0023}.btn.btn-outline-danger:not(:disabled,.disabled):active,.btn.btn-outline-danger:not(:disabled,.disabled).active{background-color:#900021;border-color:#900021}.btn.btn-warning:not(:disabled,.disabled):focus{background-color:#f07f3c;border-color:#f07f3c}.btn.btn-warning:not(:disabled,.disabled):hover{background-color:#d97336;border-color:#d97336}.btn.btn-warning:not(:disabled,.disabled):active,.btn.btn-warning:not(:disabled,.disabled).active{background-color:#cc6e33;border-color:#cc6e33}.btn.btn-outline-warning:not(:disabled,.disabled){color:#1d1d1d}.btn.btn-outline-warning:not(:disabled,.disabled):focus{background-color:transparent}.btn.btn-outline-warning:not(:disabled,.disabled):hover{background-color:#d97336;border-color:#d97336}.btn.btn-outline-warning:not(:disabled,.disabled):active,.btn.btn-outline-warning:not(:disabled,.disabled).active{background-color:#cc6e33;border-color:#cc6e33}.btn.btn-primary-outline-text{background-color:transparent;color:#378375}.btn.btn-primary-outline-text:hover{color:#2d6357}.btn.btn-primary-outline-text:active,.btn.btn-primary-outline-text.active{color:#28594e}.btn.btn-primary-outline-text:disabled,.btn.btn-primary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-secondary-outline-text{background-color:transparent;color:#ab377a}.btn.btn-secondary-outline-text:hover{color:#99316d}.btn.btn-secondary-outline-text:active,.btn.btn-secondary-outline-text.active{color:#822060}.btn.btn-secondary-outline-text:disabled,.btn.btn-secondary-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-success-outline-text{background-color:transparent;color:#aec067}.btn.btn-success-outline-text:hover{color:#91a646}.btn.btn-success-outline-text:active,.btn.btn-success-outline-text.active{color:#7d933c}.btn.btn-success-outline-text:disabled,.btn.btn-success-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-danger-outline-text{background-color:transparent;color:#cd002f}.btn.btn-danger-outline-text:hover{color:#bf0023}.btn.btn-danger-outline-text:active,.btn.btn-danger-outline-text.active{color:#900021}.btn.btn-danger-outline-text:disabled,.btn.btn-danger-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}.btn.btn-warning-outline-text{background-color:transparent;color:#f07f3c}.btn.btn-warning-outline-text:hover{color:#d97336}.btn.btn-warning-outline-text:active,.btn.btn-warning-outline-text.active{color:#cc6e33}.btn.btn-warning-outline-text:disabled,.btn.btn-warning-outline-text.disabled{opacity:1;background-color:transparent;border-color:transparent;color:#dcd5d7}:host{--background:white --radius: 1px}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid #ebe9e9;border-radius:1px;width:22rem}.img-fluid{max-width:100%;height:auto}.card-body{flex:1 1 auto;padding:24px 24px}.card-subtitle{font-size:1rem;font-weight:400;color:#343a40;margin-top:0;margin-bottom:4px;font-family:"Source Sans Pro";line-height:1.2}.card-title{margin-top:0;margin-bottom:0.5rem;font-family:"Source Sans Pro";font-weight:600;line-height:1.2}p{margin-top:0;margin-bottom:1rem}.card-text:last-child{margin-bottom:0}.card .list-group .list-group-item{padding-left:24px;padding-right:24px}.card-subtitle{font-size:1rem;font-weight:400;color:#7d6f72;margin-top:0;margin-bottom:4px}.card-title{font-size:1.5rem}.card-body .badge{margin-bottom:16px}.card>.list-group{border-top:inherit}.list-group{max-width:350px;border-radius:1px}.list-group .list-group-item{padding:8px 16px;color:#1d1d1d}.list-group .list-group-item:hover{background-color:#ebe9e9}.list-group .list-group-item.active{color:#ffffff;background-color:#378375;border-color:#ebe9e9}.list-group .badge{color:#ffffff;padding:2px 8px}.list-group-item{border:1px solid #ebe9e9}.ifx__list-group-heading{font-weight:600;line-height:20px;color:#378375;padding-bottom:11px}.active .ifx__list-group-heading{color:#ffffff}.ifx__list-group-date{font-size:13px;line-height:20px;color:#378375}.active .ifx__list-group-date{color:#ffffff}.active .badge{color:#378375}.ifx__list-group-notification .list-group-item{padding:16px}.list-group.ifx__list-group-bulletpoints .list-group-item{display:list-item;list-style-position:inside}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-item{border:1px solid #ebe9e9}.list-group-item{position:relative;display:block;text-decoration:none;background-color:#fff}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.ifx__list-icon{padding-left:0}.ifx__list-icon ul{padding-left:0}.ifx__list-icon li{position:relative;list-style-type:none;padding-left:2em}.ifx__list-icon--check li:before{content:"";position:absolute;left:0.25em;top:0.25em;height:1.25em;width:1.25em;background-size:contain;background-repeat:no-repeat;background-position:center;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' height=\'20\' width=\'20\' fill=\'%231d1d1d\' viewBox=\'0 0 448 512\'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d=\'M443.3 100.7C449.6 106.9 449.6 117.1 443.3 123.3L171.3 395.3C165.1 401.6 154.9 401.6 148.7 395.3L4.686 251.3C-1.562 245.1-1.562 234.9 4.686 228.7C10.93 222.4 21.06 222.4 27.31 228.7L160 361.4L420.7 100.7C426.9 94.44 437.1 94.44 443.3 100.7H443.3z\'/%3E%3C/svg%3E")}.dropdown{position:relative}.dropdown .btn{min-width:200px}.dropdown .dropdown-toggle::after{content:"";display:inline-block;border:none;vertical-align:-2px;margin-left:10px;width:14px;height:14px;background-size:14px;background-position:center;background-repeat:no-repeat;transition:transform 0.2s ease-in-out;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23FFF\' viewBox=\'0 0 448 512\'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d=\'M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z\'/%3E%3C/svg%3E")}.dropdown.show .dropdown-toggle::after{transform:rotate(-180deg);background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23FFF\' viewBox=\'0 0 448 512\'%3E%3C!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d=\'M4.251 181.1C7.392 177.7 11.69 175.1 16 175.1c3.891 0 7.781 1.406 10.86 4.25l197.1 181.1l197.1-181.1c6.5-6 16.64-5.625 22.61 .9062c6 6.5 5.594 16.59-.8906 22.59l-208 192c-6.156 5.688-15.56 5.688-21.72 0l-208-192C-1.343 197.7-1.749 187.6 4.251 181.1z\'/%3E%3C/svg%3E")}.dropdown .btn-sm+.dropdown-menu{transform:translate3d(0px, 56.75px, 0px) !important}.dropdown .btn-lg+.dropdown-menu{transform:translate3d(0px, 72.5px, 0px) !important}.show>.btn-secondary.dropdown-toggle:focus{box-shadow:none}.svg-wrapper{display:inline-block}.dropdown-menu{display:none}.dropdown-menu.show{display:inline-block;position:absolute;z-index:1000;inset:0px auto auto 0px;min-width:200px;padding:0;border:none;border-radius:1px;background-color:#fafafa;transform:translate3d(0px, 52px, 0px) !important}.dropdown-menu.show.nested{transform:none !important;position:static}.dropdown-menu.show .form-control,.dropdown-menu.show .form-select{margin:16px}.dropdown-menu.show .form-select{color:#c5bbbd}.dropdown-menu.show .inf__search-input,.dropdown-menu.show .inf__filter-input{width:160px;min-height:calc(1.75em + 18px);font-size:0.8125rem;margin:16px;display:block;padding:8px 16px;font-family:"Source Sans Pro";font-weight:400;line-height:1.75;color:#1d1d1d;background-color:#fff;background-clip:padding-box;border:1px solid #c5bbbd;appearance:none;border-radius:1px;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.dropdown-menu.show .ifx__search-icon-wrapper{margin-right:24px}.dropdown-menu.show .dropdown-item{display:flex;align-items:center;width:100%;text-align:inherit;white-space:nowrap;border:0;padding:8px 16px;background-color:rgba(0, 0, 0, 0);text-decoration:none;color:#1d1d1d}.dropdown-menu.show .dropdown-item .form-check-label:hover{cursor:pointer}.dropdown-menu.show .dropdown-item:focus{background-color:#fafafa}.dropdown-menu.show .dropdown-item:focus-visible{outline:none;background-color:#fafafa;border:3px solid #B4DDD8;padding-left:13px;margin-left:0}.dropdown-menu.show .dropdown-item:hover{font-weight:600;background-color:#ebe9e9}.dropdown-menu.show .dropdown-item:hover svg{color:#1d1d1d}.dropdown-menu.show .dropdown-item.active,.dropdown-menu.show .dropdown-item:active{font-weight:600;background-color:transparent;color:#378375}.dropdown-menu.show .dropdown-item.active svg,.dropdown-menu.show .dropdown-item:active svg{color:#378375}.dropdown-menu.show .dropdown-item svg{width:13px;height:13px;margin-right:10px;vertical-align:-0.5px}.dropdown-menu.show .form-check-label{font-weight:400}.dropdown-item{display:flex;align-items:center;gap:12px;width:100%;text-align:inherit;white-space:nowrap;border:0;padding:8px 16px;background-color:rgba(0, 0, 0, 0);text-decoration:none;color:#1d1d1d}.dropdown-item.primary input[type=checkbox]{accent-color:#378375}.dropdown-item.secondary input[type=checkbox]{accent-color:#ab377a}.dropdown-item.success input[type=checkbox]{accent-color:#aec067}.dropdown-item.danger input[type=checkbox]{accent-color:#cd002f}.dropdown-item.warning input[type=checkbox]{accent-color:#f07f3c}.dropdown-item .form-check-label:hover{cursor:pointer}.dropdown-item .form-check-input{border-radius:1px}.dropdown-item:focus{background-color:#fafafa}.dropdown-item:focus-visible{outline:none;background-color:#fafafa;border:3px solid #B4DDD8;padding-left:13px;margin-left:0}.dropdown-item:hover{font-weight:600;background-color:#ebe9e9}.dropdown-item:hover svg{color:#1d1d1d}.dropdown-item.active,.dropdown-item:active{font-weight:600;background-color:transparent;color:#378375}.dropdown-item.active svg,.dropdown-item:active svg{color:#378375;fill:none}.inf__search-input{width:160px;min-height:calc(1.75em + 18px);font-size:0.8125rem;margin:16px;display:block;padding:8px 16px;font-family:"Source Sans Pro";font-weight:400;line-height:1.75;color:#1d1d1d;background-color:#fff;background-clip:padding-box;border:1px solid #c5bbbd;appearance:none;border-radius:1px;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.inf__filter-input{width:160px;min-height:calc(1.75em + 18px);font-size:0.8125rem;margin:16px;display:block;padding:8px 16px;font-family:"Source Sans Pro";font-weight:400;line-height:1.75;color:#1d1d1d;background-color:#fff;background-clip:padding-box;border:1px solid #c5bbbd;appearance:none;border-radius:1px;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.ifx__alert-text{font-size:16px;width:100%;padding:12px 0px 12px 12px;color:#1d1d1d}.ifx__alert-text.text-overflow{word-break:break-all}.ifx__alert-icon-wrapper{display:none}.ifx__alert-icon-wrapper.show{position:relative;min-width:48px;display:flex;justify-content:center;align-items:center;background-color:#378375}.ifx__close-icon-wrapper{display:flex;align-items:center;justify-content:center;min-width:40px}.ifx__close-icon-wrapper a{line-height:0;color:#1d1d1d}.ifx__close-icon-wrapper a:hover svg{stroke:#378375}.alert{display:flex;border:1px solid #378375;border-radius:1px;max-width:800px}.alert-primary,.alert-secondary,.alert-danger,.alert-success,.alert-warning{color:#1d1d1d;background-color:#ffffff}.alert-primary{border:1px solid #378375}.alert-primary .ifx__alert-icon-wrapper{background-color:#378375;color:#ffffff}.alert-secondary{border:1px solid #ab377a}.alert-secondary .ifx__alert-icon-wrapper{background-color:#ab377a;color:#ffffff}.alert-success{border:1px solid #aec067}.alert-success .ifx__alert-icon-wrapper{background-color:#aec067;color:#ffffff}.alert-danger{border:1px solid #cd002f}.alert-danger .ifx__alert-icon-wrapper{background-color:#cd002f;color:#ffffff}.alert-warning{border:1px solid #f07f3c}.alert-warning .ifx__alert-icon-wrapper{background-color:#f07f3c;color:#ffffff}'}}]);