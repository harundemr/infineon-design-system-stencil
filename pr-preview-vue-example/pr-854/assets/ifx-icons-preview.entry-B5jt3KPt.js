import{r as t,h as e,g as a}from"./index-CkrPgG6F.js";import{i as n}from"./icons-af2bd2c4-F2dXUTE1.js";const r='.container{display:flex;flex-direction:column;gap:10px}.html-wrapper{background:rgb(38, 38, 38);padding:20px;color:white;font-family:monospace;position:relative}.html-wrapper button{position:absolute;right:0px;bottom:0px;background:rgba(0, 0, 0, 0.85);color:#C9CDCF;border:0 none;padding:4px 10px;font-size:0.75rem;font-family:"Nunito Sans";font-weight:700;border-top:1px solid rgba(255, 255, 255, 0.1);border-left:1px solid rgba(255, 255, 255, 0.1);margin-left:-1px;border-radius:4px 0 0 0;cursor:pointer}.html-wrapper .component-name{color:#A8FF60}.html-wrapper .attribute-name{color:rgb(150, 203, 254)}.html-wrapper .attribute-value{color:rgb(180, 116, 221)}.preview__container{box-sizing:border-box;display:flex;align-items:center;padding:2px;flex-wrap:wrap;gap:4px}.preview__container .preview__container-item{display:flex;justify-content:center;align-items:center;border:1px solid #f1f1f1;padding:2px;width:50px;height:50px;position:relative}.preview__container .preview__container-item:active{border-color:#378375}.preview__container .preview__container-item:hover{cursor:pointer}.preview__container .preview__container-item.copied::after{z-index:1000;content:"copied!";position:absolute;top:0;left:50px;background-color:#000;color:white;padding:3px;border-radius:4px}',c=r,s=class{constructor(i){t(this,i),this.iconsArray=[],this.isCopied=!1,this.copiedIndex=void 0,this.htmlTag='<ifx-icon icon="calendar-16"></ifx-icon>',this.iconName='"c-info-24"'}handleCopiedText(){this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},2e3)}copyIconText(i){this.htmlTag=`<ifx-icon icon="${i}"></ifx-icon>`,this.iconName=`"${i}"`}copyHtmlString(){const i=`<ifx-icon icon=${this.iconName}></ifx-icon>`;navigator.clipboard.writeText(i),this.handleCopiedText()}componentWillLoad(){for(let i in n)this.iconsArray.push(i)}render(){return e("div",{key:"84a495e2e3b1c9661a773804abee68fb2a51c6a4",class:"container"},e("div",{key:"fe1f08ea84c3d6dc4860d2043f4a709a91bf43ae",class:"html-wrapper"},e("span",{key:"962b82f7a018b8c90276c582cbe7d9bf6bf29dd7",class:"html-tag"},"<"),e("span",{key:"664bd8bfad0301a0635735d59c8411e170081281",class:"component-name"},"ifx-icon"),e("span",{key:"176e6486af5ea7565cb9b446077a918dd919625e",class:"attribute-name"}," icon"),"=",e("span",{key:"0a5438f56b5003ff03d0ac3d720fe2d3da675b14",class:"attribute-value"},this.iconName),e("span",{key:"9c17701dffc3a496b7d97f344051d503d4446896",class:"html-tag"},">"),e("span",{key:"38dd81f456a485d70b93875ac68b4551ee9cdcb1",class:"html-tag"},"</"),e("span",{key:"619bbb28c9dc5edd46df99f7ab18678625006def",class:"component-name"},"ifx-icon"),e("span",{key:"b5cfcb234ae9e0e332838009e15c361855615e63",class:"html-tag"},">"),e("button",{key:"178ddb75298a140eafda0ab14732bc3a753bf0d9",onClick:()=>this.copyHtmlString()},this.isCopied?"Copied":"Copy")),e("div",{key:"f2862108dca07eac409ea75827f4f3ca59a86f85",class:"preview__container"},this.iconsArray.map((i,o)=>e("div",{class:`preview__container-item ${this.isCopied&&this.copiedIndex===o?"copied":""}`,onClick:()=>this.copyIconText(i)},e("ifx-icon",{icon:i})))))}get el(){return a(this)}};s.style=c;export{s as ifx_icons_preview};
