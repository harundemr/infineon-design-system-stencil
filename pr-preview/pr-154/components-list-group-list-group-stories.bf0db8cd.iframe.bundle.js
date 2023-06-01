(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/components/list-group/list-group.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Notifications",(function(){return Notifications}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");__webpack_exports__.default={title:"Components/Ifx-List-Group",args:{title:"Notification title",description:"Notification description",flush:!1,bulletpoint:!1,badge:!1,badgeValue:0,creationTime:"30/03/2023 06:25:00"}};var Default=function DefaultTemplate(args){return'<ifx-list-group flush="'+args.flush+'" bulletpoint="'+args.bulletpoint+'">\n    <ifx-list-item slot="list-item" badge="'+args.badge+'" badge-value="'+args.badgeValue+'">Item 1</ifx-list-item>\n    <ifx-list-item slot="list-item" badge="'+args.badge+'" badge-value="'+args.badgeValue+'">Item 2</ifx-list-item>\n    <ifx-list-item slot="list-item">Item 3</ifx-list-item>\n    <ifx-list-item slot="list-item">Item 3</ifx-list-item>\n  </ifx-list-group>'}.bind({});Default.argTypes={description:{table:{disable:!0}},title:{table:{disable:!0}},creationTime:{table:{disable:!0}}};var Notifications=function NotificationTemplate(args){return'<ifx-list-group flush="'+args.flush+'">\n    <ifx-list-notification slot="list-notification" creation-time="'+args.creationTime+'" title="'+args.title+'">'+args.description+'</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="25/02/2023 10:30:00" title="'+args.title+'">'+args.description+'</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 13:40:00" title="'+args.title+'">'+args.description+'</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 12:02:00" title="'+args.title+'">'+args.description+'</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 09:23:00" title="'+args.title+'">'+args.description+"</ifx-list-notification>\n  </ifx-list-group>"}.bind({});Notifications.argTypes={bulletpoint:{table:{disable:!0}},badge:{table:{disable:!0}},badgeValue:{table:{disable:!0}}},Default.parameters=Object.assign({storySource:{source:'(args) =>\n  `<ifx-list-group flush="${args.flush}" bulletpoint="${args.bulletpoint}">\n    <ifx-list-item slot="list-item" badge="${args.badge}" badge-value="${args.badgeValue}">Item 1</ifx-list-item>\n    <ifx-list-item slot="list-item" badge="${args.badge}" badge-value="${args.badgeValue}">Item 2</ifx-list-item>\n    <ifx-list-item slot="list-item">Item 3</ifx-list-item>\n    <ifx-list-item slot="list-item">Item 3</ifx-list-item>\n  </ifx-list-group>`'}},Default.parameters),Notifications.parameters=Object.assign({storySource:{source:'(args) =>\n  `<ifx-list-group flush="${args.flush}">\n    <ifx-list-notification slot="list-notification" creation-time="${args.creationTime}" title="${args.title}">${args.description}</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="25/02/2023 10:30:00" title="${args.title}">${args.description}</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 13:40:00" title="${args.title}">${args.description}</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 12:02:00" title="${args.title}">${args.description}</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 09:23:00" title="${args.title}">${args.description}</ifx-list-notification>\n  </ifx-list-group>`'}},Notifications.parameters)}}]);