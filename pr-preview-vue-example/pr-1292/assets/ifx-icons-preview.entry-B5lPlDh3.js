import{r as o,h as e,g as t}from"./index-CcfV5UdY.js";import{i as n}from"./icons-af2bd2c4-F2dXUTE1.js";const c='.container{display:flex;flex-direction:column;gap:10px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:relative}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:1000;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}',r=c,s=class{constructor(i){o(this,i),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}handleCopiedText(){this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},2e3)}copyIconText(i){this.htmlTag=`<ifx-icon icon="${i}"></ifx-icon>`,this.iconName=`"${i}"`}copyHtmlString(){const i=`<ifx-icon icon=${this.iconName}></ifx-icon>`;navigator.clipboard.writeText(i),this.handleCopiedText()}componentWillLoad(){for(let i in n)this.iconsArray.push(i)}render(){return e("div",{key:"abba7c322a84b78d080e0a12c7995a99b5eb6d22",class:"container"},e("div",{key:"c7997ba6c8cb2a3fe8fdc9c5d3a9fe8db8137899",class:"html-wrapper"},e("span",{key:"ea69c5821233fa40ef11ef3ac14d886965c5a575",class:"html-tag"},"<"),e("span",{key:"c975541065694eec75fc0ad679ba7a809e0b92d1",class:"component-name"},"ifx-icon"),e("span",{key:"e7cffd3b37454da3c457a2c3c59ba352d0b7c083",class:"attribute-name"}," icon"),"=",e("span",{key:"fa072b8a61095aa4b383c035a0fae6596a86fc86",class:"attribute-value"},this.iconName),e("span",{key:"9e672339a4df1572c224fe35d202d831d8e888ef",class:"html-tag"},">"),e("span",{key:"abd9f0b60204110643fd63c81d34be8ec4e8f918",class:"html-tag"},"</"),e("span",{key:"73beab1226410965f5f350d0e5f620776999d3e5",class:"component-name"},"ifx-icon"),e("span",{key:"a177a1cee309c17df06b0af920777204cdf2bf5f",class:"html-tag"},">"),e("button",{key:"11530b8d08d49aad5d3de211708692aa3a0b0e40",onClick:()=>this.copyHtmlString()},this.isCopied?"Copied":"Copy")),e("div",{key:"c01d434a0c4668b846e1b5c8719f614261556fd4",class:"preview__container"},this.iconsArray.map((i,a)=>e("div",{class:`preview__container-item ${this.isCopied&&this.copiedIndex===a?"copied":""}`,onClick:()=>this.copyIconText(i)},e("ifx-icon",{icon:i})))))}get el(){return t(this)}};s.style=r;export{s as ifx_icons_preview};
