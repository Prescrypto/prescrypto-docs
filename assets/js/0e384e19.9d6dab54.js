"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Prescrypto API Docs",s={unversionedId:"intro",id:"intro",title:"Prescrypto API Docs",description:"Welcome to the complete reference of the Prescrypto REST API. Here you will find the information for all the calls, responses, and errors that are used in the API. All the responses of the API are in JSON.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/prescrypto-docs/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Medic",permalink:"/prescrypto-docs/docs/api/medic"}},l={},c=[{value:"Authentication",id:"authentication",level:2},{value:"Free Text Medications",id:"free-text-medications",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Postman collection",id:"postman-collection",level:2},{value:"Need more information???",id:"need-more-information",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prescrypto-api-docs"},"Prescrypto API Docs"),(0,o.kt)("p",null,"Welcome to the complete reference of the Prescrypto REST API. Here you will find the information for all the calls, responses, and errors that are used in the API. All the responses of the API are in JSON."),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Authentication keys are used to authenticate all of your API calls via HTTP Token Auth."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"Authentication : Token d3sjkT23Stks38jsnUk28012nIn\n")),(0,o.kt)("p",null,"Authentication keys will be provided through direct comunication, feel free to ",(0,o.kt)("a",{parentName:"p",href:"https://prescrypto.com/contact"},"contact us"),".\nThey are configured for production mode by default and can either be private for server-side usage or public for use in a browser. Be careful about sharing private keys as they have very powerful privileges."),(0,o.kt)("h2",{id:"free-text-medications"},"Free Text Medications"),(0,o.kt)("p",null,"They are usually text manually by the doctor, without using our product catalog."),(0,o.kt)("p",null,'Anything can be written on the "presentation" field.'),(0,o.kt)("p",null,'The free medications must contain the "presentation" and "instructions" fields.'),(0,o.kt)("p",null,'Additionally, it is recommended adding the category "unstructured_drug"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// Example for a free medication\n{\n  "presentation": "Alg\xfan Medicamento Libre", // Observe that "presentatio" field must be filled\n  "instructions": "Instrucciones para un medicamento libre",\n  "category": "unstructured_drug"\n}\n')),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"Prescrypto's API it's currently in version 2 ",(0,o.kt)("inlineCode",{parentName:"p"},"(api/v2/)")," nonetheless some endpoints are still existing in it's version1, please use v2 whenever possible, as the legacy endpoints are not longer supported and may not have the newest fucntionalities."),(0,o.kt)("h2",{id:"postman-collection"},"Postman collection"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Download our ",(0,o.kt)("a",{parentName:"strong",href:"https://s3-us-west-2.amazonaws.com/precript-collections/Prescrypto_Integration_Endpoints_V2.postman_collection.json"},"postman collection")," to test our API")),(0,o.kt)("h2",{id:"need-more-information"},"Need more information???"),(0,o.kt)("p",null,"We are rebuilding this documentation page, so some entries are still a work in progress. If something is missing from the documentation, feel free to ",(0,o.kt)("a",{parentName:"p",href:"https://www.prescrypto.com/contact/"},"Contact us"),"."))}u.isMDXComponent=!0}}]);