"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[369],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4577:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:8},l="Location",c={unversionedId:"api/location",id:"api/location",title:"Location",description:"A Medic can choose among the different Hospitals in which he has a Memberhip.",source:"@site/docs/api/location.md",sourceDirName:"api",slug:"/api/location",permalink:"/prescrypto-docs/docs/api/location",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Prescription",permalink:"/prescrypto-docs/docs/api/prescription"},next:{title:"Webhooks",permalink:"/prescrypto-docs/docs/api/webhooks"}},p=[{value:"List all Locations",id:"list-all-locations",children:[{value:"Response",id:"response",children:[],level:3}],level:2},{value:"Update Locations",id:"update-locations",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"location"},"Location"),(0,a.kt)("p",null,"A Medic can choose among the different ",(0,a.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/hospital"},"Hospitals")," in which he has a ",(0,a.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/membership"},"Memberhip"),". "),(0,a.kt)("p",null,"The use of this endpoint it's focused on integrations where the Medic has access to Prescrypto's UI. "),(0,a.kt)("h2",{id:"list-all-locations"},"List all Locations"),(0,a.kt)("p",null,"It will list the Hospitals in which the Medic has a Membership."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/locations/"',title:'"GET','/api/v2/locations/"':!0},"import requests\n\nurl = \"{{Base_URL}}api/v2/locations/\"\n\npayload={}\nheaders = {\n  'Authorization': 'Token {{token}}'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload)\n\nprint(response.text)\n\n")),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 200]"',title:'"[StatusCode:','200]"':!0},'[\n    {\n        "hospital": {\n            "name": "Clinica San Gregorio",\n            "id": 23,\n            "location": "Clzd Tlalpan #123, col. Portales, CDMX"\n        },\n        "default": true,\n        "clinics": [\n            {\n                "id": null,\n                "name": "Clinica San Gregorio",\n                "location": "Clzd Tlalpan #123, col. Portales, CDMX"\n            }\n        ]\n    },\n    {\n        "hospital": {\n            "name": "Hospitals Las Animas",\n            "id": 35,\n            "location": "Ciudad de Mexico, 06500"\n        },\n        "default": false,\n        "clinics": [\n            {\n                "id": null,\n                "name": "Hospitals Las Animas",\n                "location": "Ciudad de Mexico, 06500"\n            }\n        ]\n    }\n]\n')),(0,a.kt)("h2",{id:"update-locations"},"Update Locations"),(0,a.kt)("p",null,'It will change the default "Active" Hospital for which the Medic will prescribe.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="PATCH /api/v2/locations/update/"',title:'"PATCH','/api/v2/locations/update/"':!0},"import requests\n\nurl = \"{{Base_URL}}api/v2/locations/update/\"\n\npayload={\"hospital_id\": 35}\nheaders = {\n  'Authorization': 'Token {{token}}',\n  'Content-Type': 'application/json'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data=payload)\n\nprint(response.text)\n\n")),(0,a.kt)("p",null,"[EOF]"))}d.isMDXComponent=!0}}]);