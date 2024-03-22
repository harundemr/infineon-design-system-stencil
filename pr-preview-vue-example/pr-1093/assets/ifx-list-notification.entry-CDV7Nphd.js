import{r as c,h as s,g as r}from"./index-U6mkxyhw.js";const f=".list-group-notification{width:350px;height:88px;padding:16px;margin-bottom:8px;background-color:#FFFFFF;border:1px solid #EEEDED;font-family:var(--ifx-font-family)}.list-group-notification .description__section{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-notification .heading__section{display:flex;justify-content:space-between;margin-bottom:8px;color:#0A8276}.list-group-notification .heading__section-title{flex:1;margin:0;font-weight:600;line-height:1.2;font-size:1rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification .heading__section-time{flex:none;margin-left:2px;font-size:0.875rem;line-height:1.25rem;font-weight:400;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}",d=f,h=class{constructor(t){c(this,t),this.titleText="",this.isFlush=!1,this.creationTime=void 0,this.postTime=void 0,this.shownTime=void 0}setDisplayTime(t,i,e,o){t<=60?this.shownTime="Just now":i<=60?this.shownTime=`${i} min. ago`:e<=24?this.shownTime=e>1?`${e} hr. ago`:`${e} hrs. ago`:o&&(this.shownTime=e<48?"1 day ago":`${o} days ago`,e>168&&(this.shownTime=`${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`))}stringToDate(t){if(!t)return null;let i=t.split("/");if(i[2]&&i[2].split(" ")[1]){let e=i[2].split(" ")[1].split(":");return i[2]=i[2].split(" ")[0],new Date(+i[2],i[1]-1,+i[0],e[0],e[1],e[2])}}getElapsedTime(t){let i=this.stringToDate(t);if(i){let e=Date.now()-i.getTime(),o=Math.floor(e/1e3),n=Math.floor(e/6e4),l=Math.floor(n/60),a=Math.floor(l/24);this.setDisplayTime(o,n,l,a)}}setTimeInterval(t){this.postTime=window.setInterval(()=>{this.getElapsedTime(t)},1e3)}componentWillLoad(){this.getElapsedTime(this.creationTime),this.setTimeInterval(this.creationTime),this.el.closest("ifx-list-group").flush?this.isFlush=!0:this.isFlush=!1}disconnectedCallback(){window.clearInterval(this.postTime)}render(){return s("div",{key:"0e4bb636f0e114217eb0b584c4852cb57842f16d",class:`list-group-notification ${this.isFlush?"flush":""}`},s("div",{key:"35167adeb7d8b0d5c57ebc8a3041123147ae8afd",class:"heading__section"},s("h6",{key:"f56b785afd8c399666b3c4d204c897dcb4cfdabd",class:"heading__section-title"},this.titleText),s("div",{key:"73ab51b24cc5e35c63d00fd03517485efc70c47f",class:"heading__section-time"},this.shownTime)),s("div",{key:"566d04b72db4d0c260c215855b5d0caabcc477cc",class:"description__section"},s("slot",{key:"b663a536f906709320100108e20f5ef2a5c56319"})))}get el(){return r(this)}};h.style=d;export{h as ifx_list_notification};
