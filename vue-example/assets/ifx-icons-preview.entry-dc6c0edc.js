import{r as t,h as i,g as n}from"./index-f915d969.js";import{i as r}from"./icons-af2bd2c4-47dae1ca.js";const a='.container{display:flex;flex-direction:column;gap:10px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:relative}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:10000;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}',s=class{constructor(e){t(this,e),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}handleCopiedText(){this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},2e3)}copyIconText(e){this.htmlTag=`<ifx-icon icon="${e}"></ifx-icon>`,this.iconName=`"${e}"`}copyHtmlString(){const e=`<ifx-icon icon=${this.iconName}></ifx-icon>`;navigator.clipboard.writeText(e),this.handleCopiedText()}componentWillLoad(){for(let e in r)this.iconsArray.push(e)}render(){return i("div",{class:"container"},i("div",{class:"html-wrapper"},i("span",{class:"html-tag"},"<"),i("span",{class:"component-name"},"ifx-icon"),i("span",{class:"attribute-name"}," icon"),"=",i("span",{class:"attribute-value"},this.iconName),i("span",{class:"html-tag"},">"),i("span",{class:"html-tag"},"</"),i("span",{class:"component-name"},"ifx-icon"),i("span",{class:"html-tag"},">"),i("button",{onClick:()=>this.copyHtmlString()},this.isCopied?"Copied":"Copy")),i("div",{class:"preview__container"},this.iconsArray.map((e,o)=>i("div",{class:`preview__container-item ${this.isCopied&&this.copiedIndex===o?"copied":""}`,onClick:()=>this.copyIconText(e)},i("ifx-icon",{icon:e})))))}get el(){return n(this)}};s.style=a;export{s as ifx_icons_preview};
