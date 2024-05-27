"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[4127],{"./src/components/table-advanced-version/table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IncludesButtons:()=>IncludesButtons,Pagination:()=>Pagination,SetFilter:()=>SetFilter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const columnDefs=[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"}],rowData=[{make:"Toyota",model:"Celica",price:35e3,age:10},{make:"Ford",model:"Mondeo",price:32e3,age:12},{make:"Porsche",model:"Boxster",price:72e3},{make:"Bmw",model:"x",price:72e3},{make:"Mercedes",model:"y",price:72e3},{make:"Ferrari",model:"z",price:72e3},{make:"Chrysler",model:"a",price:72e3},{make:"Range rover",model:"b",price:72e3},{make:"Tesla",model:"x",price:72e3},{make:"Audi",model:"3",price:72e3},{make:"Landrover",model:"x",price:72e3}],__WEBPACK_DEFAULT_EXPORT__={title:"Under Development/Table (advanced)",args:{tableHeight:"auto",pagination:!1,paginationPageSize:10,currentPage:1,rowHeight:40,showLoading:!1},argTypes:{tableHeight:{table:{type:{summary:"Options",detail:'Default: "auto"\nExample for fixed height: "400px"'}}},paginationPageSize:{description:"Results per page: minimum 10 - maximum 30",control:{type:"number",min:10,max:30,step:10}},showLoading:{options:[!0,!1],control:{type:"radio"}},rowHeight:{options:["compact","default"],control:{type:"radio"}},enableFiltering:{options:[!0,!1],control:{type:"radio"}},filterOrientation:{options:["sidebar","topbar"],control:{type:"radio"}},columnDefs:{table:{type:{summary:"Column header options",detail:'Standard columns:\nheaderName: "Model", \nfield: "model", \nsortable: true (optional),\nsort: "desc" (optional) => descending sort (show icon)\nunSortIcon: true (optional) => unsorted (show icon)\n\nSpecial columns:\nheaderName: "",\nfield: "button"\nheaderName: "",\nfield: "link"'}}},rowData:{table:{type:{summary:"Row data options",detail:'Standard row values:\nmake: "Toyota", \nmodel: "Celica", \nprice: 35000 \n\nSpecial row values (incl buttons):\nmake: "Porsche",\nmodel: "Boxster",\nprice: "72000",\nbutton: { \ndisabled: false (optional),\nvariant: "outline" (optional)\nsize: "s" (optional),\ntext: "Button"\n...other ifx-button properties\n}'}}}}},DefaultTemplate=args=>{let columnFilters=args.columnDefs.map((column=>{let uniqueColValues=[...new Set(args.rowData.map((row=>row[column.field])))];return{name:column.field,options:uniqueColValues.map((option=>({label:option,value:option,selected:!1})))}})),ifxTable=document.createElement("ifx-table");ifxTable.setAttribute("row-height",args.rowHeight),ifxTable.setAttribute("cols",JSON.stringify(args.columnDefs)),ifxTable.setAttribute("rows",JSON.stringify(args.rowData)),ifxTable.setAttribute("table-height",args.tableHeight),ifxTable.setAttribute("pagination",args.pagination),ifxTable.setAttribute("pagination-page-size",args.paginationPageSize),ifxTable.setAttribute("enable-filtering",args.enableFiltering),ifxTable.setAttribute("filter-orientation",args.filterOrientation);let filterTypeGroup=document.createElement("ifx-filter-type-group");filterTypeGroup.setAttribute("slot","set-filter");let filterSearch=document.createElement("ifx-filter-search");return filterSearch.setAttribute("slot","filter-search"),filterSearch.setAttribute("filter-name","search"),filterTypeGroup.appendChild(filterSearch),columnFilters.forEach(((columnFilter,_index)=>{let filterAccordion=document.createElement("ifx-filter-accordion");filterAccordion.setAttribute("slot","filter-accordion"),filterAccordion.setAttribute("filter-group-name",columnFilter.name),filterTypeGroup.appendChild(filterAccordion);let filterList=document.createElement("ifx-list");filterList.setAttribute("slot","list"),filterList.setAttribute("name",columnFilter.name),filterList.setAttribute("max-visible-items","6"),filterAccordion.appendChild(filterList),columnFilter.options.forEach(((option,optionIndex)=>{let listEntry=document.createElement("ifx-list-entry");listEntry.setAttribute("slot",`slot${optionIndex}`),listEntry.setAttribute("type","checkbox"),listEntry.setAttribute("label",option.label),listEntry.setAttribute("value",option.selected?"true":"false"),filterList.appendChild(listEntry)}))})),ifxTable.appendChild(filterTypeGroup),ifxTable.outerHTML},Pagination=DefaultTemplate.bind({});Pagination.args={pagination:!0,paginationPageSize:10,rowHeight:"default",columnDefs,rowData,enableFiltering:!1};const IncludesButtons=DefaultTemplate.bind({});IncludesButtons.args={rowHeight:"default",columnDefs:[{headerName:"Make",field:"make",sortable:!0,sort:"desc",unSortIcon:!0},{headerName:"Model",field:"model",sortable:!0,unSortIcon:!0},{headerName:"Price",field:"price"},{headerName:"Age",field:"age"},{headerName:"",field:"button"}],rowData:[{make:"Toyota",model:"Celica",price:35e3,age:10,button:"something about Toyota"},{make:"Ford",model:"Mondeo",price:32e3,age:12,button:"something about Ford"},{make:"Porsche",model:"Boxster",price:72e3,button:{disabled:!1,variant:"secondary",size:"s",target:"_blank",color:"secondary",text:"Button"}}],enableFiltering:!1};const SetFilter=DefaultTemplate.bind({});SetFilter.args={rowHeight:"default",columnDefs,rowData,enableFiltering:!0,filterOrientation:"topbar"},Pagination.parameters={...Pagination.parameters,docs:{...Pagination.parameters?.docs,source:{originalSource:"args => {\n  let columnFilters = args.columnDefs.map(column => {\n    let uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n    return {\n      name: column.field,\n      options: uniqueColValues.map(option => {\n        return {\n          label: option,\n          value: option,\n          selected: false\n        };\n      })\n    };\n  });\n\n  // Create main table element\n  let ifxTable = document.createElement('ifx-table');\n  ifxTable.setAttribute('row-height', args.rowHeight);\n  ifxTable.setAttribute('cols', JSON.stringify(args.columnDefs));\n  ifxTable.setAttribute('rows', JSON.stringify(args.rowData));\n  ifxTable.setAttribute('table-height', args.tableHeight);\n  ifxTable.setAttribute('pagination', args.pagination);\n  ifxTable.setAttribute('pagination-page-size', args.paginationPageSize);\n  ifxTable.setAttribute('enable-filtering', args.enableFiltering);\n  ifxTable.setAttribute('filter-orientation', args.filterOrientation);\n\n  // Create filter-type-group element\n  let filterTypeGroup = document.createElement('ifx-filter-type-group');\n  filterTypeGroup.setAttribute('slot', 'set-filter');\n\n  // Create filter-search element and append to filterTypeGroup\n  let filterSearch = document.createElement('ifx-filter-search');\n  filterSearch.setAttribute('slot', 'filter-search');\n  filterSearch.setAttribute('filter-name', 'search');\n  filterTypeGroup.appendChild(filterSearch);\n\n  // // Create filter-search element and append to filterTypeGroup\n  // let filterSearch1 = document.createElement('ifx-filter-search');\n  // filterSearch.setAttribute('slot', 'filter-search');\n  // filterSearch.setAttribute('filter-name', 'search');\n  // filterTypeGroup.appendChild(filterSearch1);\n\n  // Create filter-accordion elements and append to filterTypeGroup\n  columnFilters.forEach((columnFilter, _index) => {\n    let filterAccordion = document.createElement('ifx-filter-accordion');\n    filterAccordion.setAttribute('slot', 'filter-accordion');\n    filterAccordion.setAttribute('filter-group-name', columnFilter.name);\n    filterTypeGroup.appendChild(filterAccordion);\n\n    // Create ifx-list element and append to filterAccordion\n    let filterList = document.createElement('ifx-list');\n    filterList.setAttribute('slot', 'list');\n    filterList.setAttribute('name', columnFilter.name);\n    filterList.setAttribute('max-visible-items', '6');\n    filterAccordion.appendChild(filterList);\n\n    // Create ifx-list-entry elements and append to filterList\n    columnFilter.options.forEach((option, optionIndex) => {\n      let listEntry = document.createElement('ifx-list-entry');\n      listEntry.setAttribute('slot', `slot${optionIndex}`);\n      listEntry.setAttribute('type', 'checkbox');\n      listEntry.setAttribute('label', option.label);\n      listEntry.setAttribute('value', option.selected ? 'true' : 'false');\n      filterList.appendChild(listEntry);\n    });\n  });\n\n  // Append filterTypeGroup to ifxTable\n  ifxTable.appendChild(filterTypeGroup);\n  return ifxTable.outerHTML;\n}",...Pagination.parameters?.docs?.source}}},IncludesButtons.parameters={...IncludesButtons.parameters,docs:{...IncludesButtons.parameters?.docs,source:{originalSource:"args => {\n  let columnFilters = args.columnDefs.map(column => {\n    let uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n    return {\n      name: column.field,\n      options: uniqueColValues.map(option => {\n        return {\n          label: option,\n          value: option,\n          selected: false\n        };\n      })\n    };\n  });\n\n  // Create main table element\n  let ifxTable = document.createElement('ifx-table');\n  ifxTable.setAttribute('row-height', args.rowHeight);\n  ifxTable.setAttribute('cols', JSON.stringify(args.columnDefs));\n  ifxTable.setAttribute('rows', JSON.stringify(args.rowData));\n  ifxTable.setAttribute('table-height', args.tableHeight);\n  ifxTable.setAttribute('pagination', args.pagination);\n  ifxTable.setAttribute('pagination-page-size', args.paginationPageSize);\n  ifxTable.setAttribute('enable-filtering', args.enableFiltering);\n  ifxTable.setAttribute('filter-orientation', args.filterOrientation);\n\n  // Create filter-type-group element\n  let filterTypeGroup = document.createElement('ifx-filter-type-group');\n  filterTypeGroup.setAttribute('slot', 'set-filter');\n\n  // Create filter-search element and append to filterTypeGroup\n  let filterSearch = document.createElement('ifx-filter-search');\n  filterSearch.setAttribute('slot', 'filter-search');\n  filterSearch.setAttribute('filter-name', 'search');\n  filterTypeGroup.appendChild(filterSearch);\n\n  // // Create filter-search element and append to filterTypeGroup\n  // let filterSearch1 = document.createElement('ifx-filter-search');\n  // filterSearch.setAttribute('slot', 'filter-search');\n  // filterSearch.setAttribute('filter-name', 'search');\n  // filterTypeGroup.appendChild(filterSearch1);\n\n  // Create filter-accordion elements and append to filterTypeGroup\n  columnFilters.forEach((columnFilter, _index) => {\n    let filterAccordion = document.createElement('ifx-filter-accordion');\n    filterAccordion.setAttribute('slot', 'filter-accordion');\n    filterAccordion.setAttribute('filter-group-name', columnFilter.name);\n    filterTypeGroup.appendChild(filterAccordion);\n\n    // Create ifx-list element and append to filterAccordion\n    let filterList = document.createElement('ifx-list');\n    filterList.setAttribute('slot', 'list');\n    filterList.setAttribute('name', columnFilter.name);\n    filterList.setAttribute('max-visible-items', '6');\n    filterAccordion.appendChild(filterList);\n\n    // Create ifx-list-entry elements and append to filterList\n    columnFilter.options.forEach((option, optionIndex) => {\n      let listEntry = document.createElement('ifx-list-entry');\n      listEntry.setAttribute('slot', `slot${optionIndex}`);\n      listEntry.setAttribute('type', 'checkbox');\n      listEntry.setAttribute('label', option.label);\n      listEntry.setAttribute('value', option.selected ? 'true' : 'false');\n      filterList.appendChild(listEntry);\n    });\n  });\n\n  // Append filterTypeGroup to ifxTable\n  ifxTable.appendChild(filterTypeGroup);\n  return ifxTable.outerHTML;\n}",...IncludesButtons.parameters?.docs?.source}}},SetFilter.parameters={...SetFilter.parameters,docs:{...SetFilter.parameters?.docs,source:{originalSource:"args => {\n  let columnFilters = args.columnDefs.map(column => {\n    let uniqueColValues = [...new Set(args.rowData.map(row => row[column.field]))];\n    return {\n      name: column.field,\n      options: uniqueColValues.map(option => {\n        return {\n          label: option,\n          value: option,\n          selected: false\n        };\n      })\n    };\n  });\n\n  // Create main table element\n  let ifxTable = document.createElement('ifx-table');\n  ifxTable.setAttribute('row-height', args.rowHeight);\n  ifxTable.setAttribute('cols', JSON.stringify(args.columnDefs));\n  ifxTable.setAttribute('rows', JSON.stringify(args.rowData));\n  ifxTable.setAttribute('table-height', args.tableHeight);\n  ifxTable.setAttribute('pagination', args.pagination);\n  ifxTable.setAttribute('pagination-page-size', args.paginationPageSize);\n  ifxTable.setAttribute('enable-filtering', args.enableFiltering);\n  ifxTable.setAttribute('filter-orientation', args.filterOrientation);\n\n  // Create filter-type-group element\n  let filterTypeGroup = document.createElement('ifx-filter-type-group');\n  filterTypeGroup.setAttribute('slot', 'set-filter');\n\n  // Create filter-search element and append to filterTypeGroup\n  let filterSearch = document.createElement('ifx-filter-search');\n  filterSearch.setAttribute('slot', 'filter-search');\n  filterSearch.setAttribute('filter-name', 'search');\n  filterTypeGroup.appendChild(filterSearch);\n\n  // // Create filter-search element and append to filterTypeGroup\n  // let filterSearch1 = document.createElement('ifx-filter-search');\n  // filterSearch.setAttribute('slot', 'filter-search');\n  // filterSearch.setAttribute('filter-name', 'search');\n  // filterTypeGroup.appendChild(filterSearch1);\n\n  // Create filter-accordion elements and append to filterTypeGroup\n  columnFilters.forEach((columnFilter, _index) => {\n    let filterAccordion = document.createElement('ifx-filter-accordion');\n    filterAccordion.setAttribute('slot', 'filter-accordion');\n    filterAccordion.setAttribute('filter-group-name', columnFilter.name);\n    filterTypeGroup.appendChild(filterAccordion);\n\n    // Create ifx-list element and append to filterAccordion\n    let filterList = document.createElement('ifx-list');\n    filterList.setAttribute('slot', 'list');\n    filterList.setAttribute('name', columnFilter.name);\n    filterList.setAttribute('max-visible-items', '6');\n    filterAccordion.appendChild(filterList);\n\n    // Create ifx-list-entry elements and append to filterList\n    columnFilter.options.forEach((option, optionIndex) => {\n      let listEntry = document.createElement('ifx-list-entry');\n      listEntry.setAttribute('slot', `slot${optionIndex}`);\n      listEntry.setAttribute('type', 'checkbox');\n      listEntry.setAttribute('label', option.label);\n      listEntry.setAttribute('value', option.selected ? 'true' : 'false');\n      filterList.appendChild(listEntry);\n    });\n  });\n\n  // Append filterTypeGroup to ifxTable\n  ifxTable.appendChild(filterTypeGroup);\n  return ifxTable.outerHTML;\n}",...SetFilter.parameters?.docs?.source}}};const __namedExportsOrder=["Pagination","IncludesButtons","SetFilter"]}}]);