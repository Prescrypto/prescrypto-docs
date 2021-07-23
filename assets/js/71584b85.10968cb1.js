(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[94],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9739:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:7},s="Medication",p={unversionedId:"api/medication",id:"api/medication",isDocsHomePage:!1,title:"Medication",description:"List all Medications",source:"@site/docs/api/medication.md",sourceDirName:"api",slug:"/api/medication",permalink:"/prescrypto-docs/docs/api/medication",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Prescription",permalink:"/prescrypto-docs/docs/api/prescription"},next:{title:"Overview",permalink:"/prescrypto-docs/docs/deeplink/overview"}},l=[{value:"Response",id:"response",children:[]},{value:"List a Single Medication",id:"list-a-single-medication",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"medication"},"Medication"),(0,o.kt)("p",null,"##\xa0List all Medications"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/medications/"',title:'"GET','/api/v2/medications/"':!0},"import requests\nimport json\n\nurl = \"{{Base_URL}}/api/v2/medications/\"\n\npayload={}\nheaders = {\n  'Authorization': 'Token {{Token}}',\n  'Content-Type': 'application/json'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload)\n\nprint(response.text)\n")),(0,o.kt)("h3",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[200]"',title:'"[200]"'},'{\n    "count": 661,\n    "next": "https://www.prescrypto.com/api/v2/medications/?limit=15&offset=15",\n    "previous": null,\n    "results": [\n        {\n            "id": 2872,\n            "presentation": "aspirina",\n            "instructions": "tomar 1 pastilla cada 8 horas durante 7 dias",\n            "drug": "aspirina",\n            "cost": 0.0,\n            "bought": false,\n            "qty": 3,\n            "bought_qty": 0,\n            "drug_upc": "", // This field will have a hash of the real upc of the medication\n            "order_id": 0,\n            "category": "unstructured_drug",\n            "ad_id": "",\n            "qty_label": "3"\n        }\n\n')),(0,o.kt)("h3",{id:"list-a-single-medication"},"List a Single Medication"),(0,o.kt)("p",null,"You can also filter the information for a single Medication, by adding the Medication id to the endpoint route."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/medications/{{Medication_ID}}"',title:'"GET','/api/v2/medications/{{Medication_ID}}"':!0},"{{Base_URL}}/api/v2/medication/1/\n")),(0,o.kt)("p",null,"[WIP]"),(0,o.kt)("p",null,"[EOF]"))}d.isMDXComponent=!0}}]);