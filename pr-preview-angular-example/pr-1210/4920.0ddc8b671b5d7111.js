"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4920],{4920:(s,a,o)=>{o.r(a),o.d(a,{ifx_icons_preview:()=>t});var e=o(3415),n=o(1706);const t=class{constructor(i){(0,e.r)(this,i),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}handleCopiedText(){this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},2e3)}copyIconText(i){this.htmlTag=`<ifx-icon icon="${i}"></ifx-icon>`,this.iconName=`"${i}"`}copyHtmlString(){navigator.clipboard.writeText(`<ifx-icon icon=${this.iconName}></ifx-icon>`),this.handleCopiedText()}componentWillLoad(){for(let i in n.i)this.iconsArray.push(i)}render(){return(0,e.h)("div",{key:"dd0ec0ebecbf0b2dd8238f2684da300254af1b30",class:"container"},(0,e.h)("div",{key:"66480fae3b2f874507bfa5c630c9bb448f8a41f7",class:"html-wrapper"},(0,e.h)("span",{key:"788d3c82b735b6355ad0fe68206f6617a8ba24e2",class:"html-tag"},"<"),(0,e.h)("span",{key:"47ca3b1ba7846867b4456124b1b9439b35550dc1",class:"component-name"},"ifx-icon"),(0,e.h)("span",{key:"7f4f71adf10d9af7d86cde843782fe339af0b1bf",class:"attribute-name"}," icon"),"=",(0,e.h)("span",{key:"ac79609c5ea343518d5509bdc29b034cb4092678",class:"attribute-value"},this.iconName),(0,e.h)("span",{key:"edf8c62469e060319df6762b46e4d6b741bc7321",class:"html-tag"},">"),(0,e.h)("span",{key:"996c22a3b446c8ef93a2d8907e4d2cc5f509e4bb",class:"html-tag"},"</"),(0,e.h)("span",{key:"f7c20a4691a4399240e6feba8df8c5585090a05a",class:"component-name"},"ifx-icon"),(0,e.h)("span",{key:"bfcc2a16a484325b28eba9daefc7b62de248c156",class:"html-tag"},">"),(0,e.h)("button",{key:"a837298aa025be0da340b1781e8f961af07c3c32",onClick:()=>this.copyHtmlString()},this.isCopied?"Copied":"Copy")),(0,e.h)("div",{key:"b1da7d3817ec22405953bef393d287e843355133",class:"preview__container"},this.iconsArray.map((i,r)=>(0,e.h)("div",{class:"preview__container-item "+(this.isCopied&&this.copiedIndex===r?"copied":""),onClick:()=>this.copyIconText(i)},(0,e.h)("ifx-icon",{icon:i})))))}get el(){return(0,e.g)(this)}};t.style='.container{display:flex;flex-direction:column;gap:10px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:relative}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:1000;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}'}}]);