(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/progress-bar/progress-bar.stories.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small})),__webpack_require__.d(__webpack_exports__,"WithLabel",(function(){return WithLabel}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_storybook_client_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js");__webpack_exports__.default={title:"Components/Progress Bar",args:{size:"m",percentage:50,showLabel:!1},argTypes:{percentage:{control:{type:"range",min:0,max:100}},size:{options:["s","m"],control:{type:"radio"}}}};var Template=function Template(args){var wrapper=document.createElement("div");wrapper.innerHTML='\n    <ifx-progress-bar\n      percentage="'+args.percentage+'"\n      size="'+args.size+'"\n      show-label="'+args.showLabel+'"\n    ></ifx-progress-bar>\n  ';var progressBar=wrapper.querySelector("ifx-progress-bar");return progressBar.addEventListener("percentageChange",(function(event){console.log("Percentage:",null==event?void 0:event.detail),Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("Percentage:")(null==event?void 0:event.detail)})),Object(_storybook_client_api__WEBPACK_IMPORTED_MODULE_3__.c)((function(){progressBar.dispatchEvent(new CustomEvent("percentageChange",{detail:args.percentage}))}),[args.percentage]),wrapper.innerHTML},Default=Template.bind({});Default.args={size:"m",percentage:50,showLabel:!1};var Small=Template.bind({});Small.args={percentage:75,size:"s"};var WithLabel=Template.bind({});WithLabel.args={percentage:25,showLabel:!0},Default.parameters=Object.assign({storySource:{source:"(args) => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n    <ifx-progress-bar\n      percentage=\"${args.percentage}\"\n      size=\"${args.size}\"\n      show-label=\"${args.showLabel}\"\n    ></ifx-progress-bar>\n  `;\n\n  const progressBar = wrapper.querySelector('ifx-progress-bar');\n  progressBar.addEventListener('percentageChange', (event: CustomEvent<number>) => {\n    console.log('Percentage:', event?.detail);\n    action('Percentage:')(event?.detail);\n  });\n\n  // Run this useEffect hook whenever the percentage changes\n  useEffect(() => {\n    // Trigger the percentageChange event manually\n    progressBar.dispatchEvent(new CustomEvent('percentageChange', { detail: args.percentage }));\n  }, [args.percentage]);\n\n  return wrapper.innerHTML;\n}"}},Default.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n    <ifx-progress-bar\n      percentage=\"${args.percentage}\"\n      size=\"${args.size}\"\n      show-label=\"${args.showLabel}\"\n    ></ifx-progress-bar>\n  `;\n\n  const progressBar = wrapper.querySelector('ifx-progress-bar');\n  progressBar.addEventListener('percentageChange', (event: CustomEvent<number>) => {\n    console.log('Percentage:', event?.detail);\n    action('Percentage:')(event?.detail);\n  });\n\n  // Run this useEffect hook whenever the percentage changes\n  useEffect(() => {\n    // Trigger the percentageChange event manually\n    progressBar.dispatchEvent(new CustomEvent('percentageChange', { detail: args.percentage }));\n  }, [args.percentage]);\n\n  return wrapper.innerHTML;\n}"}},Small.parameters),WithLabel.parameters=Object.assign({storySource:{source:"(args) => {\n  const wrapper = document.createElement('div');\n  wrapper.innerHTML = `\n    <ifx-progress-bar\n      percentage=\"${args.percentage}\"\n      size=\"${args.size}\"\n      show-label=\"${args.showLabel}\"\n    ></ifx-progress-bar>\n  `;\n\n  const progressBar = wrapper.querySelector('ifx-progress-bar');\n  progressBar.addEventListener('percentageChange', (event: CustomEvent<number>) => {\n    console.log('Percentage:', event?.detail);\n    action('Percentage:')(event?.detail);\n  });\n\n  // Run this useEffect hook whenever the percentage changes\n  useEffect(() => {\n    // Trigger the percentageChange event manually\n    progressBar.dispatchEvent(new CustomEvent('percentageChange', { detail: args.percentage }));\n  }, [args.percentage]);\n\n  return wrapper.innerHTML;\n}"}},WithLabel.parameters)}}]);