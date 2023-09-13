"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[7321],{"./src/components/list-group/list-group.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Notifications:()=>Notifications,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/List-Group",tags:["autodocs"],args:{title:"Notification title",description:"Notification description",flush:!1,bulletpoint:!1,badge:!1,badgeValue:0,creationTime:"30/03/2023 06:25:00"}},Default=(args=>`<ifx-list-group flush="${args.flush}" bulletpoint="${args.bulletpoint}">\n    <ifx-list-item slot="list-item" badge="${args.badge}" badge-value="${args.badgeValue}">Item 1</ifx-list-item>\n    <ifx-list-item slot="list-item" badge="${args.badge}" badge-value="${args.badgeValue}">Item 2</ifx-list-item>\n    <ifx-list-item slot="list-item">Item 3</ifx-list-item>\n    <ifx-list-item slot="list-item">Item 3</ifx-list-item>\n  </ifx-list-group>`).bind({});Default.argTypes={description:{table:{disable:!0}},title:{table:{disable:!0}},creationTime:{table:{disable:!0}}};const Notifications=(args=>`<ifx-list-group flush="${args.flush}">\n    <ifx-list-notification slot="list-notification" creation-time="${args.creationTime}" title="${args.title}">${args.description}</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="25/02/2023 10:30:00" title="${args.title}">${args.description}</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 13:40:00" title="${args.title}">${args.description}</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 12:02:00" title="${args.title}">${args.description}</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 09:23:00" title="${args.title}">${args.description}</ifx-list-notification>\n  </ifx-list-group>`).bind({});Notifications.argTypes={bulletpoint:{table:{disable:!0}},badge:{table:{disable:!0}},badgeValue:{table:{disable:!0}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `<ifx-list-group flush="${args.flush}" bulletpoint="${args.bulletpoint}">\n    <ifx-list-item slot="list-item" badge="${args.badge}" badge-value="${args.badgeValue}">Item 1</ifx-list-item>\n    <ifx-list-item slot="list-item" badge="${args.badge}" badge-value="${args.badgeValue}">Item 2</ifx-list-item>\n    <ifx-list-item slot="list-item">Item 3</ifx-list-item>\n    <ifx-list-item slot="list-item">Item 3</ifx-list-item>\n  </ifx-list-group>`',...Default.parameters?.docs?.source}}},Notifications.parameters={...Notifications.parameters,docs:{...Notifications.parameters?.docs,source:{originalSource:'args => `<ifx-list-group flush="${args.flush}">\n    <ifx-list-notification slot="list-notification" creation-time="${args.creationTime}" title="${args.title}">${args.description}</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="25/02/2023 10:30:00" title="${args.title}">${args.description}</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 13:40:00" title="${args.title}">${args.description}</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 12:02:00" title="${args.title}">${args.description}</ifx-list-notification>\n    <ifx-list-notification slot="list-notification" creation-time="30/03/2023 09:23:00" title="${args.title}">${args.description}</ifx-list-notification>\n  </ifx-list-group>`',...Notifications.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Notifications"]}}]);