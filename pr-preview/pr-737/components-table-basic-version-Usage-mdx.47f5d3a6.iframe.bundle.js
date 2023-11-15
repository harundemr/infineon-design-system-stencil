/*! For license information please see components-table-basic-version-Usage-mdx.47f5d3a6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[1803,7177],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/table-basic-version/Usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Usage});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),table_stories=__webpack_require__("./src/components/table-basic-version/table.stories.ts");const table_cell_button_items_namespaceObject=__webpack_require__.p+"static/media/table-cell-button-items.244139f9.png",table_cell_checkbox_items_namespaceObject=__webpack_require__.p+"static/media/table-cell-checkbox-items.38fdb498.png",table_cell_status_items_namespaceObject=__webpack_require__.p+"static/media/table-cell-status-items.3879f56c.png",table_cell_text_items_namespaceObject=__webpack_require__.p+"static/media/table-cell-text-items.0fffc6f2.png",table_cell_tree_items_namespaceObject=__webpack_require__.p+"static/media/table-cell-tree-items.a0a3bdc2.png",table_example_compact_namespaceObject=(__webpack_require__.p,__webpack_require__.p+"static/media/table-example-compact.4df7959d.png"),table_example_default_namespaceObject=__webpack_require__.p+"static/media/table-example-default.87acbdc4.png",table_header_template_items_namespaceObject=__webpack_require__.p+"static/media/table-header-template-items.32d2fbdd.png",table_header_sorting_items_namespaceObject=__webpack_require__.p+"static/media/table-header-sorting-items.944e9dd1.png",table_header_content_logic_namespaceObject=__webpack_require__.p+"static/media/table-header-content-logic.d3cb5bb8.png";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",hr:"hr",strong:"strong",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:table_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"table",children:"Table"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The table component is a crucial element within our design system, designed to display tabular data in a structured and user-friendly manner. It enhances consistency and usability across our products by providing a standardized way to present data."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-to-use",children:"When to use"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you want to display data in rows and columns, such as lists, grids, or matrices."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"When users need to compare values across different categories or entities."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you want to present a relatively large amount of data in a compact manner."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"headers",children:"Headers"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Headers define the columns of the table and provide context for the data presented. Each header represents a different attribute or piece of information related to the dataset. There is a set of maximum 10 header columns available."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_header_template_items_namespaceObject,alt:"Table Header Items"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"rows",children:"Rows"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Rows contain the actual data entries. Each row corresponds to a unique item, record, or data point. The data within a row aligns with the headers, making it easy to read and comprehend."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_header_content_logic_namespaceObject,alt:"Table Header Content Logic"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cells",children:"Cells"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Cells are the individual units within a row. They align with a specific header and contain the data relevant to that column."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"text--text-links",children:"Text & Text Links"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The basis of a table is the presentation of information in the form of text. The DDS offers both left and right aligned text cells. For pure numbers or prices, the right-aligned variant should be used."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_cell_text_items_namespaceObject,alt:"Table Cell Text Items"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"button--icon-button",children:"Button & Icon Button"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'If a table should offer the user further possibilities for interaction, buttons can be used. A button should be used for primary actions such as "Buy" and icon buttons for secondary actions like "PDF Download" or "More".'}),"\n",(0,jsx_runtime.jsx)("img",{src:table_cell_button_items_namespaceObject,alt:"Table Cell Button Items"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"tree-navigation",children:"Tree Navigation"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A tree navigation offers the possibility to nest more complex data rows and the user the possibility to expand and collapse them. The DDS offers tree navigation up to the third level."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_cell_tree_items_namespaceObject,alt:"Table Cell Tree Items",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"checkbox",children:"Checkbox"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"If it is a question of selecting certain rows in a table in order to carry out a type of batch processing, for example, the DDS offers the checkbox cell."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_cell_checkbox_items_namespaceObject,alt:"Table Cell Checkbox Items",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"status",children:"Status"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"If you want to highlight the status of processes to enhance the user's understanding of the content. In those cases use the status cell."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_cell_status_items_namespaceObject,alt:"Table Cell Status Items",width:"50%"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"layout",children:"Layout"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Two layout variants are available. The default and the compact variant."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To display a table generously with more white space, the DDS offers this default variant."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_example_default_namespaceObject,alt:"Table Example Default"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"compact",children:"Compact"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"When it comes to show a lot of data in a table, you can end up with a very long table. In such cases, the compact table variant is the best option."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_example_compact_namespaceObject,alt:"Table Example Compact"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"sorting",children:"Sorting"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Our table component supports sorting columns in ascending or descending order, facilitating quick data analysis. Additionally, users can often filter data directly within the table, enhancing data manipulation capabilities."}),"\n",(0,jsx_runtime.jsx)("img",{src:table_header_sorting_items_namespaceObject,alt:"Table Sorting Items"}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Check out the Figma component: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?type=design&node-id=16048-11054&mode=design&t=vxTx374xQDtV53ic-4",target:"_blank",rel:"nofollow noopener noreferrer",children:"Table"})})]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{})]})}const Usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/table-basic-version/table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FixedHeight:()=>FixedHeight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const columnDefs=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"}],rowData=[{make:"Toyota",model:"Celica",price:35e3,age:10},{make:"Ford",model:"Mondeo",price:32e3,age:12},{make:"Porsche",model:"Boxster",price:72e3}],__WEBPACK_DEFAULT_EXPORT__={title:"Components/Table (basic)",args:{tableHeight:"auto",rowHeight:40},argTypes:{tableHeight:{table:{type:{summary:"Options",detail:'Default: "auto"\nExample for fixed height: "400px"'}}},rowHeight:{options:["compact","default"],control:{type:"radio"}},columnDefs:{table:{type:{summary:"Column header options",detail:'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"'}}},rowData:{table:{type:{summary:"Row data options",detail:'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}'}}}}},DefaultTemplate=args=>`<ifx-basic-table \nrow-height='${args.rowHeight}'\ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`,Default=DefaultTemplate.bind({});Default.args={rowHeight:"default",columnDefs,rowData};const FixedHeight=DefaultTemplate.bind({});FixedHeight.args={tableHeight:"400px",rowHeight:"default",columnDefs,rowData},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => `<ifx-basic-table \nrow-height='${args.rowHeight}'\ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`",...Default.parameters?.docs?.source}}},FixedHeight.parameters={...FixedHeight.parameters,docs:{...FixedHeight.parameters?.docs,source:{originalSource:"args => `<ifx-basic-table \nrow-height='${args.rowHeight}'\ncols='${JSON.stringify(args.columnDefs)}' \nrows='${JSON.stringify(args.rowData)}'\ntable-height='${args.tableHeight}'>\n</ifx-basic-table>`",...FixedHeight.parameters?.docs?.source}}};const __namedExportsOrder=["Default","FixedHeight"]},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);