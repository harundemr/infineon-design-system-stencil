(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/link/ifx-link.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");__webpack_exports__.default={title:"Components/Ifx-Link",args:{label:"Link",icon:!0,position:"right",underline:!1,href:"",target:"_blank"},argTypes:{target:{options:["_blank","_self","_parent"],control:{type:"radio"}},position:{options:["right","left"],control:{type:"radio"}}}};var Default=function DefaultTemplate(args){return'<ifx-link href="'+args.href+'" target="'+args.target+'" position="'+args.position+'" underline="'+args.underline+'" icon="'+args.icon+'">\n  '+args.label+"\n  </ifx-link>"}.bind({});Default.parameters=Object.assign({storySource:{source:'(args) =>\n  `<ifx-link href="${args.href}" target="${args.target}" position="${args.position}" underline="${args.underline}" icon="${args.icon}">\n  ${args.label}\n  </ifx-link>`'}},Default.parameters)}}]);