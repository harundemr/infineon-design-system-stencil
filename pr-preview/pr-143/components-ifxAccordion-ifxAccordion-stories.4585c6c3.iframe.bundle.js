(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/components/ifxAccordion/ifxAccordion.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js");__webpack_exports__.default={title:"Components/Accordion",component:"ifx-accordion",argTypes:{amountOfItems:{control:"number"}}};var Default=function Template(args){for(var accordionElement=document.createElement("ifx-accordion"),i=0;i<args.amountOfItems;i++){var item=document.createElement("ifx-accordion-item");item.setAttribute("caption","Item Title #"+(i+1)),item.innerHTML="\n      <p>\n        Content for Item #"+(i+1)+". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n      </p>\n    ",item.addEventListener("itemOpened",Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("itemOpened")),item.addEventListener("itemClosed",Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("itemClosed")),accordionElement.append(item)}return accordionElement}.bind({});Default.args={amountOfItems:3},Default.parameters=Object.assign({storySource:{source:"(args) => {\n  const accordionElement = document.createElement('ifx-accordion');\n\n  for (let i = 0; i < args.amountOfItems; i++) {\n    const item = document.createElement('ifx-accordion-item');\n    item.setAttribute('caption', `Item Title #${i+1}`);\n    item.innerHTML = `\n      <p>\n        Content for Item #${i+1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.\n      </p>\n    `;\n    item.addEventListener('itemOpened', action('itemOpened'));\n    item.addEventListener('itemClosed', action('itemClosed'));\n\n    accordionElement.append(item);\n  }\n\n  return accordionElement;\n}"}},Default.parameters)}}]);