(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/ifxRange/ifxRange.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithPercentageDisplay",(function(){return WithPercentageDisplay})),__webpack_require__.d(__webpack_exports__,"WithIcons",(function(){return WithIcons})),__webpack_require__.d(__webpack_exports__,"WithTexts",(function(){return WithTexts})),__webpack_require__.d(__webpack_exports__,"Disabled",(function(){return Disabled}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@infineon/infineon-icons/dist/icons.js");__webpack_exports__.default={title:"Components/Range",component:"ifx-range",argTypes:{value:{control:"number"},min:{control:"number"},max:{control:"number"},showPercentage:{control:"boolean"},disabled:{control:"boolean"},leftIcon:{options:Object.keys(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_4__.a),control:{type:"select"}},rightIcon:{options:Object.keys(_infineon_infineon_icons__WEBPACK_IMPORTED_MODULE_4__.a),control:{type:"select"}},leftText:{control:"text"},rightText:{control:"text"}}};var Template=function Template(args){var rangeElement=document.createElement("ifx-range");return rangeElement.setAttribute("value",args.value),rangeElement.setAttribute("min",args.min),rangeElement.setAttribute("max",args.max),args.showPercentage&&rangeElement.setAttribute("show-percentage","true"),args.disabled&&rangeElement.setAttribute("disabled","true"),args.leftIcon&&rangeElement.setAttribute("left-icon",args.leftIcon),args.rightIcon&&rangeElement.setAttribute("right-icon",args.rightIcon),args.leftText&&rangeElement.setAttribute("left-text",args.leftText),args.rightText&&rangeElement.setAttribute("right-text",args.rightText),rangeElement.addEventListener("valueChanged",Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("valueChanged")),rangeElement},Default=Template.bind({});Default.args={value:50,min:0,max:100,showPercentage:!1,disabled:!1};var WithPercentageDisplay=Template.bind({});WithPercentageDisplay.args={value:50,min:0,max:100,showPercentage:!0,disabled:!1};var WithIcons=Template.bind({});WithIcons.args=Object.assign({},Default.args,{leftIcon:"arrowright16",rightIcon:"arrowleft16"});var WithTexts=Template.bind({});WithTexts.args=Object.assign({},Default.args,{leftText:"LeftText",rightText:"RightText"});var Disabled=Template.bind({});Disabled.args=Object.assign({},Default.args,{disabled:!0}),Default.parameters=Object.assign({storySource:{source:"(args) => {\n  const rangeElement = document.createElement('ifx-range');\n  rangeElement.setAttribute('value', args.value);\n  rangeElement.setAttribute('min', args.min);\n  rangeElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    rangeElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    rangeElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n\n  if (args.leftIcon) {\n    rangeElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    rangeElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    rangeElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    rangeElement.setAttribute('right-text', args.rightText);\n  }\n  rangeElement.addEventListener('valueChanged', action('valueChanged'));\n\n  return rangeElement;\n}"}},Default.parameters),WithPercentageDisplay.parameters=Object.assign({storySource:{source:"(args) => {\n  const rangeElement = document.createElement('ifx-range');\n  rangeElement.setAttribute('value', args.value);\n  rangeElement.setAttribute('min', args.min);\n  rangeElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    rangeElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    rangeElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n\n  if (args.leftIcon) {\n    rangeElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    rangeElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    rangeElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    rangeElement.setAttribute('right-text', args.rightText);\n  }\n  rangeElement.addEventListener('valueChanged', action('valueChanged'));\n\n  return rangeElement;\n}"}},WithPercentageDisplay.parameters),WithIcons.parameters=Object.assign({storySource:{source:"(args) => {\n  const rangeElement = document.createElement('ifx-range');\n  rangeElement.setAttribute('value', args.value);\n  rangeElement.setAttribute('min', args.min);\n  rangeElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    rangeElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    rangeElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n\n  if (args.leftIcon) {\n    rangeElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    rangeElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    rangeElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    rangeElement.setAttribute('right-text', args.rightText);\n  }\n  rangeElement.addEventListener('valueChanged', action('valueChanged'));\n\n  return rangeElement;\n}"}},WithIcons.parameters),WithTexts.parameters=Object.assign({storySource:{source:"(args) => {\n  const rangeElement = document.createElement('ifx-range');\n  rangeElement.setAttribute('value', args.value);\n  rangeElement.setAttribute('min', args.min);\n  rangeElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    rangeElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    rangeElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n\n  if (args.leftIcon) {\n    rangeElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    rangeElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    rangeElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    rangeElement.setAttribute('right-text', args.rightText);\n  }\n  rangeElement.addEventListener('valueChanged', action('valueChanged'));\n\n  return rangeElement;\n}"}},WithTexts.parameters),Disabled.parameters=Object.assign({storySource:{source:"(args) => {\n  const rangeElement = document.createElement('ifx-range');\n  rangeElement.setAttribute('value', args.value);\n  rangeElement.setAttribute('min', args.min);\n  rangeElement.setAttribute('max', args.max);\n  if (args.showPercentage) {\n    rangeElement.setAttribute('show-percentage', 'true');\n  }\n  if (args.disabled) {\n    rangeElement.setAttribute('disabled', 'true'); // Set disabled attribute\n  }\n\n  if (args.leftIcon) {\n    rangeElement.setAttribute('left-icon', args.leftIcon);\n  }\n  if (args.rightIcon) {\n    rangeElement.setAttribute('right-icon', args.rightIcon);\n  }\n  if (args.leftText) {\n    rangeElement.setAttribute('left-text', args.leftText);\n  }\n  if (args.rightText) {\n    rangeElement.setAttribute('right-text', args.rightText);\n  }\n  rangeElement.addEventListener('valueChanged', action('valueChanged'));\n\n  return rangeElement;\n}"}},Disabled.parameters)}}]);