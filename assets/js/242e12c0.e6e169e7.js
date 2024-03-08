"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Changelog",p={unversionedId:"changelog/overview",id:"changelog/overview",title:"Changelog",description:"This sections aims to provide updates about changes to the Prescrypto API, where they were and how the new change improve or add new features.",source:"@site/docs/changelog/overview.md",sourceDirName:"changelog",slug:"/changelog/overview",permalink:"/prescrypto-docs/docs/changelog/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/prescrypto-docs/docs/openendpoints/overview"},next:{title:"API Error Codes Guide",permalink:"/prescrypto-docs/docs/errorCodes/overview"}},l={},s=[{value:"Log",id:"log",level:2},{value:"Notifications",id:"notifications",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"changelog"},"Changelog"),(0,o.kt)("p",null,"This sections aims to provide updates about changes to the Prescrypto API, where they were and how the new change improve or add new features."),(0,o.kt)("h2",{id:"log"},"Log"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(12 Jun, 2022) Add ",(0,o.kt)("inlineCode",{parentName:"p"},"hospital")," parameter to Deeplink in order to temporary set the hospital id of the Medic user.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(7 Apr, 2022) Removed unused parmateres mentions and references, cleaned some typos and compacted info from different pages into the same related ones.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(24 Jan, 2022) Add the param ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," to products docs, it explains how to navigate in products results")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(4 Feb, 2022) Add the filter param ",(0,o.kt)("inlineCode",{parentName:"p"},"created_filter")," for the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},'"api/v2/medics/"')," It can be used to get the full list of created users, in order to see one medic details it has to be added to the url aswell.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(4 Feb, 2022) Remove ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password(encrypted)")," for the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},'"api/v2/medics/"')," They only will be appear on created response. In order to increase security.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(18 Feb, 2022) Remove ",(0,o.kt)("inlineCode",{parentName:"p"},"medications")," section, instead check our ",(0,o.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/products/overview"},"Products api docs"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(1 Mar, 2022) Add ",(0,o.kt)("inlineCode",{parentName:"p"},"Patient landing page")," endpoint documentation, on the new section ",(0,o.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/openendpoints/overview"},"Prescription CTA endpoints"),"."))),(0,o.kt)("p",null,"Important note for  integrators: After create a medic, don't forget to save the ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," fields given in the response."),(0,o.kt)("h2",{id:"notifications"},"Notifications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The v1 endpoints are deprecated, so we encourage to all our users to update to v2")),(0,o.kt)("p",null,"[EOF]"))}d.isMDXComponent=!0}}]);