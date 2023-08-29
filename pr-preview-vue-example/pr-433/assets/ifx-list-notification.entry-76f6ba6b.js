import{r,h as s,g as h}from"./index-f0e746ad.js";const c='.list-group-notification{width:350px;height:88px;padding:16px;margin-bottom:8px;background-color:#FFFFFF;border:1px solid #EEEDED}.list-group-notification .description__section{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification.flush{border:none;border-bottom:1px solid #EEEDED}.list-group-notification .heading__section{display:flex;justify-content:space-between;margin-bottom:8px;color:#0A8276}.list-group-notification .heading__section-title{flex:1;margin:0;font-family:"Source Sans Pro";font-weight:600;line-height:1.2;font-size:1rem;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.list-group-notification .heading__section-time{flex:none;margin-left:2px;font-size:0.813rem;line-height:1.25rem;font-weight:400;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}',f=class{constructor(e){r(this,e),this.titleText="",this.isFlush=!1,this.creationTime=void 0,this.postTime=void 0,this.shownTime=void 0}setDisplayTime(e,i,t,o){e<=60?this.shownTime="Just now":i<=60?this.shownTime=`${i} min. ago`:t<=24?this.shownTime=t>1?`${t} hr. ago`:`${t} hrs. ago`:o&&(this.shownTime=t<48?"1 day ago":`${o} days ago`,t>168&&(this.shownTime=`${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`))}stringToDate(e){if(!e)return null;let i=e.split("/");if(i[2]&&i[2].split(" ")[1]){let t=i[2].split(" ")[1].split(":");return i[2]=i[2].split(" ")[0],new Date(+i[2],i[1]-1,+i[0],t[0],t[1],t[2])}}getElapsedTime(e){let i=this.stringToDate(e);if(i){let t=Date.now()-i.getTime(),o=Math.floor(t/1e3),n=Math.floor(t/6e4),l=Math.floor(n/60),a=Math.floor(l/24);this.setDisplayTime(o,n,l,a)}}setTimeInterval(e){this.postTime=window.setInterval(()=>{this.getElapsedTime(e)},1e3)}componentWillLoad(){this.getElapsedTime(this.creationTime),this.setTimeInterval(this.creationTime),this.el.closest("ifx-list-group").flush?this.isFlush=!0:this.isFlush=!1}disconnectedCallback(){window.clearInterval(this.postTime)}render(){return s("div",{class:`list-group-notification ${this.isFlush?"flush":""}`},s("div",{class:"heading__section"},s("h6",{class:"heading__section-title"},this.titleText),s("div",{class:"heading__section-time"},this.shownTime)),s("div",{class:"description__section"},s("slot",null)))}get el(){return h(this)}};f.style=c;export{f as ifx_list_notification};
