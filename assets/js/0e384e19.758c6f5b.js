(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},426:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},c="Prescrypto API Docs",l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Prescrypto API Docs",description:"Welcome to the complete reference of the Prescrypto REST API. Here you will find the information for all the calls, responses, and errors that are used in the API. All the responses of the API are in JSON.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/prescrypto-docs/docs/intro",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create a Medic",permalink:"/prescrypto-docs/docs/api/overview"}},u=[{value:"Authentication",id:"authentication",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Difference between Basic Drugs and Free Medications",id:"difference-between-basic-drugs-and-free-medications",children:[{value:"Basic Drugs",id:"basic-drugs",children:[]},{value:"Free Medications",id:"free-medications",children:[]}]},{value:"Versioning",id:"versioning",children:[]},{value:"Postman collection",id:"postman-collection",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prescrypto-api-docs"},"Prescrypto API Docs"),(0,o.kt)("p",null,"Welcome to the complete reference of the Prescrypto REST API. Here you will find the information for all the calls, responses, and errors that are used in the API. All the responses of the API are in JSON."),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Authentication keys are used to authenticate all of your API calls via HTTP Token Auth."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"Authentication : Token d3sjkT23Stks38jsnUk28012nIn\n")),(0,o.kt)("p",null,"Keys can be retrieved and configured from within your ",(0,o.kt)("a",{parentName:"p",href:"https://prescrypto.com/contact"},"admin")," account. Each key is configured for production mode and either private use within serverside applications, or public use with javascript. Be careful about sharing private keys as they have very powerful privileges."),(0,o.kt)("h2",{id:"schema"},"Schema"),(0,o.kt)("p",null,"The relationship among the different Models may be confusing, to dissipate possible doubts beneath you will find a schematic visual representation of those differente hierarchy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hospital  \n\u251c\u2500\u2500 Medic\n    \u2514\u2500\u2500 Prescription\n    \u2514\u2500\u2500 Patient\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"A Medic can create\n\u251c\u2500\u2500Hospital\n\u2514\u2500\u2500Patient\n\u2514\u2500\u2500Prescription\n")),(0,o.kt)("h2",{id:"difference-between-basic-drugs-and-free-medications"},"Difference between Basic Drugs and Free Medications"),(0,o.kt)("p",null,'When you are creating the prescription payload you can notice that the medication field is a list of "Medication" objects, but these medications objects must be represented either a Basic Drug or Free Medication.'),(0,o.kt)("h3",{id:"basic-drugs"},"Basic Drugs"),(0,o.kt)("p",null,'A basic drug is a medication that is part of hospital or pharmacy\'s stock. It belongs to a Hospital entity and therefore might vary for every user. It can also be a "Study", laboratory or otherwise.'),(0,o.kt)("p",null,"You can create, modify, enable or disable basic drugs using the basic drugs endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// Example for a medication with BASIC DRUG\n{\n  "presentation": "", // Notice that "presentation" is empty on basic drugs because the "drug" reference will fill it instead\n  "instructions": "Tomes\xe9 cada 8 horas, instrucciones para Med de cuadro b\xe1sico",\n  "drug": 11 // Notice that "drug" field must be filled with basic drug id\n}\n')),(0,o.kt)("h3",{id:"free-medications"},"Free Medications"),(0,o.kt)("p",null,"By definition, free medications are whatever isn't a Basic Drug, they are usually auto-completed with text from our product catalog."),(0,o.kt)("p",null,'Anything can be written on the "presentation" field'),(0,o.kt)("p",null,'The free medications must contain the "presentation" and "instructions" fields'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// Example for a medication with FREE MEDICATION\n{\n  "presentation": "Alg\xfan Medicamento Libre", // Observe that "presentatio" field must be filled\n  "instructions": "Instrucciones para un medicamento libre",\n  "drug": null // Observe that "drug" field must be filled with "null"\n}\n')),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"Prescrypto's API it's currently in version 2 ",(0,o.kt)("inlineCode",{parentName:"p"},"(api/v2/)")," nonetheless some endpoints are still existing in it's version1, please use v2 whenever possible, as those legacy endpoints are not longer supported and may not have the newest fucntionalities."),(0,o.kt)("h2",{id:"postman-collection"},"Postman collection"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Download our ",(0,o.kt)("a",{parentName:"strong",href:"https://s3-us-west-2.amazonaws.com/precript-collections/Prescrypto_Integration_Endpoints_V2.postman_collection.json"},"postman collection")," to test our api")))}d.isMDXComponent=!0}}]);