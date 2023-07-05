"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1272],{"./dist/esm/ifx-radio-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ifx_radio_button:()=>RadioButton});var _index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-fbf4ddae.js");const RadioButton=class{constructor(hostRef){(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.disabled=!1,this.checked=!1,this.error=!1,this.hasSlot=!0}handleRadioButtonClick(){this.disabled||this.error||(this.checked=!this.checked)}componentWillLoad(){const slot=this.el.innerHTML;this.hasSlot=!!slot}render(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"radioButton__container"},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{tabindex:"0",onClick:this.handleRadioButtonClick.bind(this),class:`radioButton__wrapper \n        ${this.checked?"checked":""} \n        ${this.disabled?"disabled":""}\n        ${this.error?"error":""}`},this.checked&&(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"radioButton__wrapper-mark"})),this.hasSlot&&(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:`label ${this.error?"error":""} ${this.disabled?"disabled":""}`,onClick:this.handleRadioButtonClick.bind(this)},(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))}get el(){return(0,_index_fbf4ddae_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};RadioButton.style=":host{display:inline-flex;vertical-align:top}.radioButton__container{box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;padding:0px;gap:8px}.radioButton__container .radioButton__wrapper{display:flex;justify-content:center;align-items:center;width:20px;height:20px;border-radius:50%;background-color:#ffffff;border:1px solid #575352;flex:none;order:0;flex-grow:0}.radioButton__container .radioButton__wrapper .radioButton__wrapper-mark{background-color:#0A8276;width:8.75px;height:8.75px;border-radius:50%;display:flex;justify-content:center;align-items:center;border-color:transparent}.radioButton__container .radioButton__wrapper.error{border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:hover{border-color:#CD002F}.radioButton__container .radioButton__wrapper.error:focus-visible{border:1px solid #CD002F;outline:2px solid #CD002F;outline-offset:2px}.radioButton__container .radioButton__wrapper:focus-visible{border:1px solid #575352;outline:2px solid #0A8276;outline-offset:2px}.radioButton__container .radioButton__wrapper:hover{border:1px solid #575352;border-color:#0A8276;border-radius:50%;flex:none;order:0;flex-grow:0}.radioButton__container .radioButton__wrapper.disabled{background-color:#BFBBBB;border-color:#BFBBBB;flex:none;order:0;flex-grow:0}.radioButton__container .radioButton__wrapper.checked{border-color:#0A8276}.radioButton__container .radioButton__wrapper.checked:focus-visible{outline:2px solid #0A8276;outline-offset:2px}.radioButton__container .radioButton__wrapper.checked:hover{border-color:#08665C;border-radius:50%;flex:none;order:0;flex-grow:0}.radioButton__container .radioButton__wrapper.checked:hover .radioButton__wrapper-mark{background-color:#08665C}.radioButton__container .radioButton__wrapper.checked.disabled{background-color:#ffffff;border:1px solid #BFBBBB;flex:none;order:0;flex-grow:0}.radioButton__container .radioButton__wrapper.checked.disabled .radioButton__wrapper-mark{background-color:#BFBBBB;border-color:#BFBBBB}.radioButton__container .label{width:25px;height:20px;font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#1d1d1d;flex:none;order:1;flex-grow:0}.radioButton__container .label.disabled{color:#BFBBBB}.radioButton__container .label.error{color:#CD002F}.radioButton__container .radioButton__wrapper:hover,.radioButton__container .label:hover{cursor:pointer}"}}]);