/*! For license information please see components-sidebar-Usage-mdx.6915465c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4915,9504],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>action});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("../../node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/components/sidebar/sidebar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithNumberIndicator:()=>WithNumberIndicator,WithSubmenu:()=>WithSubmenu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Sidebar",args:{icon:!0,applicationName:"Application Name",showFooter:!0,displayTermsOfUseLink:!0,displayImprintLink:!0,displayPrivacyPolicyLink:!0},argTypes:{ifxSidebarNavigationItem:{action:"ifxSidebarNavigationItem",description:"Custom event emitted when a navigation item becomes active on selection"},ifxSidebarActionItem:{action:"ifxSidebarActionItem",description:"Custom event emitted when an action item is selected"},ifxSidebarMenu:{action:"ifxSidebarMenu",description:"Custom event emitted when a menu is expanded or closed"}}},Default=(args=>{const sidebarElement=document.createElement("ifx-sidebar");sidebarElement.setAttribute("application-name",args.applicationName),sidebarElement.addEventListener("ifxSidebarNavigationItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxSidebarNavigationItem")),sidebarElement.addEventListener("ifxSidebarActionItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxSidebarActionItem")),sidebarElement.addEventListener("ifxSidebarMenu",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxSidebarMenu")),sidebarElement.setAttribute("show-footer",args.showFooter),sidebarElement.setAttribute("display-terms-of-use-link",args.displayTermsOfUseLink),sidebarElement.setAttribute("display-imprint-link",args.displayImprintLink),sidebarElement.setAttribute("display-privacy-policy-link",args.displayPrivacyPolicyLink);["Item One","Item Two","Item Three","Item Four"].forEach((itemTitle=>{const itemElement=document.createElement("ifx-sidebar-item");itemElement.setAttribute("href","http://google.com"),itemElement.setAttribute("target","_blank"),itemElement.setAttribute("is-action-item","false"),args.icon&&itemElement.setAttribute("icon","image-16"),itemElement.textContent=itemTitle,sidebarElement.appendChild(itemElement)}));return sidebarElement.querySelectorAll("ifx-sidebar-item")[2].setAttribute("active","true"),sidebarElement}).bind({}),WithSubmenu=(args=>{const sidebarElement=document.createElement("ifx-sidebar");sidebarElement.setAttribute("application-name",args.applicationName),sidebarElement.addEventListener("ifxSidebarNavigationItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxSidebarNavigationItem")),sidebarElement.addEventListener("ifxSidebarActionItem",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxSidebarActionItem")),sidebarElement.addEventListener("ifxSidebarMenu",(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("ifxSidebarMenu"));for(let i=0;i<3;i++){const sectionElement=document.createElement("ifx-sidebar-item");sectionElement.textContent=`Header Section ${i+1}`;for(let j=0;j<3;j++){const menuItemElement=document.createElement("ifx-sidebar-item");if(menuItemElement.setAttribute("icon",args.icon?"image-16":""),menuItemElement.textContent=`Menu Item ${j+1}`,0===j)for(let k=0;k<3;k++){const subMenuItemElement=document.createElement("ifx-sidebar-item");subMenuItemElement.textContent=`Sub Menu Item ${k+1}`,menuItemElement.appendChild(subMenuItemElement)}sectionElement.appendChild(menuItemElement)}sidebarElement.appendChild(sectionElement)}const firstMenuItem=sidebarElement.querySelectorAll("ifx-sidebar-item")[0].querySelectorAll("ifx-sidebar-item")[0];return firstMenuItem.querySelectorAll("ifx-sidebar-item")[0].setAttribute("active","true"),firstMenuItem.querySelectorAll("ifx-sidebar-item")[0].setAttribute("is-action-item","false"),firstMenuItem.querySelectorAll("ifx-sidebar-item")[1].setAttribute("is-action-item","true"),firstMenuItem.querySelectorAll("ifx-sidebar-item")[2].setAttribute("is-action-item","true"),sidebarElement}).bind({}),WithNumberIndicator=(()=>'<ifx-sidebar application-name="Application name">\n  <ifx-sidebar-item icon="image-16" number-indicator="5">Menu Item</ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16" number-indicator="1">Menu Item</ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16" number-indicator="23">Menu Item</ifx-sidebar-item>\n  <ifx-sidebar-item active="false">\n    Header Section\n    <ifx-sidebar-item icon="image-16" active="false" >\n      Second layer\n      <ifx-sidebar-item target="_blank" active="false" icon="image-16">\n      3rd layer Menu Item\n      </ifx-sidebar-item>\n\n      <ifx-sidebar-item target="_blank" active="false" icon="image-16" value="thisPage">\n      This Page\n      </ifx-sidebar-item>\n\n      <ifx-sidebar-item target="_blank" active="false" icon="image-16">\n      3rd layer Menu Item\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n\n    <ifx-sidebar-item icon="image-16" active="false">\n      Second layer\n      <ifx-sidebar-item target="_blank" icon="image-16" active="false">\n      Menu Item\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n\n    <ifx-sidebar-item icon="image-16" active="false">\n      Second layer\n      <ifx-sidebar-item target="_blank" icon="image-16" active="false">\n      Menu Item\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  \n\n  <ifx-sidebar-item>\n  Header Section\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item active="false" is-action-item="false" target="_blank" icon="image-16">\n    Sub Menu Item\n    </ifx-sidebar-item>\n    <ifx-sidebar-item is-action-item="true" icon="image-16" value="thisPage">\n    This one too\n    </ifx-sidebar-item>\n    <ifx-sidebar-item is-action-item="false" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  </ifx-sidebar-item>\n\n\n  <ifx-sidebar-item>\n  Header Section\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  </ifx-sidebar-item>\n</ifx-sidebar>').bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  // Create the sidebar element and attach event listener\n  const sidebarElement = (document.createElement('ifx-sidebar') as HTMLIfxSidebarElement);\n  sidebarElement.setAttribute('application-name', args.applicationName);\n  sidebarElement.addEventListener('ifxSidebarNavigationItem', action(`ifxSidebarNavigationItem`));\n  sidebarElement.addEventListener('ifxSidebarActionItem', action(`ifxSidebarActionItem`));\n  sidebarElement.addEventListener('ifxSidebarMenu', action(`ifxSidebarMenu`));\n  sidebarElement.setAttribute('show-footer', args.showFooter);\n  sidebarElement.setAttribute('display-terms-of-use-link', args.displayTermsOfUseLink);\n  sidebarElement.setAttribute('display-imprint-link', args.displayImprintLink);\n  sidebarElement.setAttribute('display-privacy-policy-link', args.displayPrivacyPolicyLink);\n  const items = [\"Item One\", \"Item Two\", \"Item Three\", \"Item Four\"];\n  items.forEach(itemTitle => {\n    const itemElement = (document.createElement('ifx-sidebar-item') as HTMLIfxSidebarItemElement);\n    itemElement.setAttribute('href', \"http://google.com\");\n    itemElement.setAttribute('target', \"_blank\");\n    itemElement.setAttribute('is-action-item', \"false\");\n    if (args.icon) {\n      itemElement.setAttribute('icon', 'image-16');\n    }\n    itemElement.textContent = itemTitle;\n\n    // Append the item to the sidebar\n    sidebarElement.appendChild(itemElement);\n  });\n  const thirdItem = sidebarElement.querySelectorAll('ifx-sidebar-item')[2];\n  thirdItem.setAttribute('active', 'true'); //first submenu item\n\n  return sidebarElement;\n}",...Default.parameters?.docs?.source}}},WithSubmenu.parameters={...WithSubmenu.parameters,docs:{...WithSubmenu.parameters?.docs,source:{originalSource:"args => {\n  // Create the sidebar element and attach event listener\n  const sidebarElement = (document.createElement('ifx-sidebar') as HTMLIfxSidebarElement);\n  sidebarElement.setAttribute('application-name', args.applicationName);\n  sidebarElement.addEventListener('ifxSidebarNavigationItem', action('ifxSidebarNavigationItem'));\n  sidebarElement.addEventListener('ifxSidebarActionItem', action('ifxSidebarActionItem'));\n  sidebarElement.addEventListener('ifxSidebarMenu', action('ifxSidebarMenu'));\n\n  // Create 3 sections\n  for (let i = 0; i < 3; i++) {\n    const sectionElement = document.createElement('ifx-sidebar-item');\n    sectionElement.textContent = `Header Section ${i + 1}`;\n\n    // In each section, create 3 menu items\n    for (let j = 0; j < 3; j++) {\n      const menuItemElement = document.createElement('ifx-sidebar-item');\n      menuItemElement.setAttribute('icon', args.icon ? 'image-16' : '');\n      menuItemElement.textContent = `Menu Item ${j + 1}`;\n\n      // In the first menu item of each section, create 3 submenu items\n      if (j === 0) {\n        for (let k = 0; k < 3; k++) {\n          const subMenuItemElement = document.createElement('ifx-sidebar-item');\n          subMenuItemElement.textContent = `Sub Menu Item ${k + 1}`;\n          menuItemElement.appendChild(subMenuItemElement);\n        }\n      }\n      sectionElement.appendChild(menuItemElement);\n    }\n    sidebarElement.appendChild(sectionElement);\n  }\n  const firstSection = sidebarElement.querySelectorAll('ifx-sidebar-item')[0];\n  const firstMenuItem = firstSection.querySelectorAll('ifx-sidebar-item')[0];\n  firstMenuItem.querySelectorAll('ifx-sidebar-item')[0].setAttribute('active', 'true'); //first submenu item\n  firstMenuItem.querySelectorAll('ifx-sidebar-item')[0].setAttribute('is-action-item', 'false');\n  firstMenuItem.querySelectorAll('ifx-sidebar-item')[1].setAttribute('is-action-item', 'true'); //2nd submenu item\n  firstMenuItem.querySelectorAll('ifx-sidebar-item')[2].setAttribute('is-action-item', 'true'); //3rd sub menu item\n\n  return sidebarElement;\n}",...WithSubmenu.parameters?.docs?.source}}},WithNumberIndicator.parameters={...WithNumberIndicator.parameters,docs:{...WithNumberIndicator.parameters?.docs,source:{originalSource:'() => `<ifx-sidebar application-name="Application name">\n  <ifx-sidebar-item icon="image-16" number-indicator="5">Menu Item</ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16" number-indicator="1">Menu Item</ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16" number-indicator="23">Menu Item</ifx-sidebar-item>\n  <ifx-sidebar-item active="false">\n    Header Section\n    <ifx-sidebar-item icon="image-16" active="false" >\n      Second layer\n      <ifx-sidebar-item target="_blank" active="false" icon="image-16">\n      3rd layer Menu Item\n      </ifx-sidebar-item>\n\n      <ifx-sidebar-item target="_blank" active="false" icon="image-16" value="thisPage">\n      This Page\n      </ifx-sidebar-item>\n\n      <ifx-sidebar-item target="_blank" active="false" icon="image-16">\n      3rd layer Menu Item\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n\n    <ifx-sidebar-item icon="image-16" active="false">\n      Second layer\n      <ifx-sidebar-item target="_blank" icon="image-16" active="false">\n      Menu Item\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n\n    <ifx-sidebar-item icon="image-16" active="false">\n      Second layer\n      <ifx-sidebar-item target="_blank" icon="image-16" active="false">\n      Menu Item\n      </ifx-sidebar-item>\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  \n\n  <ifx-sidebar-item>\n  Header Section\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item active="false" is-action-item="false" target="_blank" icon="image-16">\n    Sub Menu Item\n    </ifx-sidebar-item>\n    <ifx-sidebar-item is-action-item="true" icon="image-16" value="thisPage">\n    This one too\n    </ifx-sidebar-item>\n    <ifx-sidebar-item is-action-item="false" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  </ifx-sidebar-item>\n\n\n  <ifx-sidebar-item>\n  Header Section\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  <ifx-sidebar-item icon="image-16">\n    Menu Item\n    <ifx-sidebar-item href="http://google.com" target="_blank" icon="image-16">\n    Menu Item\n    </ifx-sidebar-item>\n  </ifx-sidebar-item>\n  </ifx-sidebar-item>\n</ifx-sidebar>`',...WithNumberIndicator.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithSubmenu","WithNumberIndicator"]},"./src/components/sidebar/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),sidebar_stories=__webpack_require__("./src/components/sidebar/sidebar.stories.ts");const sidebar_sections_namespaceObject=__webpack_require__.p+"static/media/sidebar-sections.8dcf2f04.png",sidebar_anatomy_namespaceObject=__webpack_require__.p+"static/media/sidebar-anatomy.914f71bf.png",sidebar_expanded_anatomy_namespaceObject=__webpack_require__.p+"static/media/sidebar-expanded-anatomy.4db4106a.png",navigation_bar_variant_namespaceObject=__webpack_require__.p+"static/media/navigation-bar-variant.7a570db6.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",br:"br",hr:"hr",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:sidebar_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"sidebar",children:"Sidebar"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For dashboards or similar functional application we provide a different and usually common variant of navigation. The sidebar gives users an easy access to different sections."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"placement-of-sidebar",children:"Placement of sidebar"}),"\n",(0,jsx_runtime.jsx)("img",{src:sidebar_sections_namespaceObject,alt:"Sidebar Sections"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy-of-default-sidebar",children:"Anatomy of default sidebar"}),"\n",(0,jsx_runtime.jsx)("img",{src:sidebar_anatomy_namespaceObject,alt:"Sidebar Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Logo (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The header always starts with the brand logo."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Application name (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The application name is always shown below the brand logo."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Main Menu item list (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","To navigate through different sections and pages. It is possible to attach a supportive icon before the menu item-labels."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Divider (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","To visually cluster different sub menus or to differentiate the sticky footer from the rest above."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Cluster Title (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","This menu item opens another subordinate menu. It is always denoted with a chevron-down icon to the right. The cluster title has always a divider above. Do not use any icons before this menu item."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Footer (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The footer at the bottom can be displayed optionally. The text links within the footer are displayed in one line and wrapped if they become too long. A dividing line at the top indicates the margin of the footer."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Border (7)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A 1px border indicates the right edge of the sidebar at anytime."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Number Indicator (8)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Informs the user about the amount of unseen content inside the menu item's page."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy-of-expanded-sidebar-navigation",children:"Anatomy of expanded sidebar navigation"}),"\n",(0,jsx_runtime.jsx)("img",{src:sidebar_expanded_anatomy_namespaceObject,alt:"Sidebar Expanded Anatomy"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Hidden overflow header (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","As with the footer, if the content in the sidebar becomes too large, the further overflow is clipped."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Search field (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","If needed the search field can be displayed inside the sidebar's navigation bar."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Scroll bar (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A scroll bar appears as the sidebar's height increases."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Expanded menu item (4)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","The chevron-up icon indicates that the menu item is expanded."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Subordinated menu (5)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Opens a subordinated menu when you click on the referenced cluster title. It is possible to attach a supportive icon before the menu item-labels."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Intended subordinate menu (6)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Shows another subordinate menu in an intended style. Avoid using icons in this menu-depth. Up to here the maximum available menu-depth is reached."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Hidden overflow footer(7)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","When the content in the sidebar gets too big than the further overflow is clipped."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"anatomy-of-navigation-bar-variant",children:"Anatomy of navigation bar variant"}),"\n",(0,jsx_runtime.jsx)("img",{src:navigation_bar_variant_namespaceObject,alt:"Navigation Bar Variant"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Navigation bar (1)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Can be displayed optionally. If displayed the navigation bar is sticky."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Secondary navigation (2)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","Crucial functions can be placed here. Please pay attention to the placement by priority."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Border (3)"}),(0,jsx_runtime.jsx)(_components.br,{}),"\n","A 1px border indicates the bottom edge of the navigation bar at anytime."]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=39925-19973&mode=design&t=F2eqm8hE80jZouGN-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Sidebar"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);