"use strict";(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[5761],{"./src/components/footer/footer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Medium:()=>Medium,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Footer",tags:["autodocs"],args:{variant:"medium",termsUrl:"https://yourwebsite.com/terms",termsTarget:"_blank",imprintUrl:"https://yourwebsite.com/imprint",imprintTarget:"_blank",privacyPolicyUrl:"https://yourwebsite.com/privacy-policy",privacyPolicyTarget:"_blank",glossaryUrl:"https://yourwebsite.com/glossary",glossaryTarget:"_blank"},argTypes:{variant:{options:["small","medium","large"],control:{type:"radio"}},termsUrl:{control:"text"},imprintUrl:{control:"text"},privacyPolicyUrl:{control:"text"},glossaryUrl:{control:"text"}}},Medium=(args=>`\n    <ifx-footer key="${Object.values(args).join("-")}" variant="${args.variant}" \n               terms-url="${args.termsUrl}" terms-target="${args.termsTarget}" \n               imprint-url="${args.imprintUrl}" imprint-target="${args.imprintTarget}" \n               privacy-policy-url="${args.privacyPolicyUrl}" privacy-policy-parget="${args.privacyPolicyTarget}" \n               glossary-url="${args.glossaryUrl}" glossary-target="${args.glossaryTarget}">\n    <div slot="socials">\n      <ifx-link variant="title" href="http://facebook.com/infineon">\n        <ifx-icon icon="facebook"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://youtube.com/infineon">\n        <ifx-icon icon="youtube"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://instagram.com/infineon">\n        <ifx-icon icon="instagram"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://linkedin.com/infineon">\n        <ifx-icon icon="linkedin"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://twitter.com/infineon">\n        <ifx-icon icon="twitter"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://xing.com/infineon">\n        <ifx-icon icon="xing"></ifx-icon>\n      </ifx-link>\n    </div>\n  </ifx-footer>`).bind({}),Small=(()=>'<ifx-footer variant="small"></ifx-footer>').bind({}),Large=(()=>'<ifx-footer variant="large">\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <div slot="socials">\n    <ifx-link variant="title" href="http://facebook.com/infineon">\n      <ifx-icon icon="facebook"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://youtube.com/infineon">\n      <ifx-icon icon="youtube"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://instagram.com/infineon">\n      <ifx-icon icon="instagram"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://linkedin.com/infineon">\n      <ifx-icon icon="linkedin"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://twitter.com/infineon">\n      <ifx-icon icon="twitter"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://xing.com/infineon">\n      <ifx-icon icon="xing"></ifx-icon>\n    </ifx-link>\n  </div>\n</ifx-footer>').bind({});Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:'args => {\n  const key = Object.values(args).join(\'-\');\n  return `\n    <ifx-footer key="${key}" variant="${args.variant}" \n               terms-url="${args.termsUrl}" terms-target="${args.termsTarget}" \n               imprint-url="${args.imprintUrl}" imprint-target="${args.imprintTarget}" \n               privacy-policy-url="${args.privacyPolicyUrl}" privacy-policy-parget="${args.privacyPolicyTarget}" \n               glossary-url="${args.glossaryUrl}" glossary-target="${args.glossaryTarget}">\n    <div slot="socials">\n      <ifx-link variant="title" href="http://facebook.com/infineon">\n        <ifx-icon icon="facebook"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://youtube.com/infineon">\n        <ifx-icon icon="youtube"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://instagram.com/infineon">\n        <ifx-icon icon="instagram"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://linkedin.com/infineon">\n        <ifx-icon icon="linkedin"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://twitter.com/infineon">\n        <ifx-icon icon="twitter"></ifx-icon>\n      </ifx-link>\n      <ifx-link variant="title" href="http://xing.com/infineon">\n        <ifx-icon icon="xing"></ifx-icon>\n      </ifx-link>\n    </div>\n  </ifx-footer>`;\n}',...Medium.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'() => `<ifx-footer variant="small"></ifx-footer>`',...Small.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'() => `<ifx-footer variant="large">\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link href="#" variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <ifx-footer-column slot="col">\n    <h5 slot="title">Title</h5>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n    <ifx-link variant="underlined" slot="link">Footer Link</ifx-link>\n  </ifx-footer-column>\n  <div slot="socials">\n    <ifx-link variant="title" href="http://facebook.com/infineon">\n      <ifx-icon icon="facebook"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://youtube.com/infineon">\n      <ifx-icon icon="youtube"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://instagram.com/infineon">\n      <ifx-icon icon="instagram"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://linkedin.com/infineon">\n      <ifx-icon icon="linkedin"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://twitter.com/infineon">\n      <ifx-icon icon="twitter"></ifx-icon>\n    </ifx-link>\n    <ifx-link variant="title" href="http://xing.com/infineon">\n      <ifx-icon icon="xing"></ifx-icon>\n    </ifx-link>\n  </div>\n</ifx-footer>`',...Large.parameters?.docs?.source}}};const __namedExportsOrder=["Medium","Small","Large"]}}]);