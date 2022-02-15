"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3401:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:1},d="Medic",s={unversionedId:"api/medic",id:"api/medic",title:"Medic",description:"Medics are the basic pilars that can perform all different actions in the platform from creating Prescriptions, Patients, to Hospitals. For all the actions that the Medic will perform, use the Medic's Token for Autorization.",source:"@site/docs/api/medic.md",sourceDirName:"api",slug:"/api/medic",permalink:"/prescrypto-docs/docs/api/medic",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Prescrypto API Docs",permalink:"/prescrypto-docs/docs/intro"},next:{title:"Hospital",permalink:"/prescrypto-docs/docs/api/hospital"}},p=[{value:"List Medics",id:"list-medics",children:[{value:"Response",id:"response",children:[],level:3},{value:"Detail Medic",id:"detail-medic",children:[],level:3}],level:2},{value:"Create Medic",id:"create-medic",children:[{value:"Body Fields",id:"body-fields",children:[],level:3},{value:"Response",id:"response-1",children:[],level:3}],level:2},{value:"Update Medic",id:"update-medic",children:[{value:"Request Body",id:"request-body",children:[],level:3},{value:"Response",id:"response-2",children:[],level:3}],level:2}],m={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"medic"},"Medic"),(0,i.kt)("p",null,"Medics are the basic pilars that can perform all different actions in the platform from creating Prescriptions, Patients, to Hospitals. For all the actions that the Medic will perform, use the Medic's Token for Autorization."),(0,i.kt)("h2",{id:"list-medics"},"List Medics"),(0,i.kt)("p",null,"This endpoint will list all medics created with your token."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Query Parameters")),(0,i.kt)("p",null,"The following parameters may be included as part of a URL query string."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"limit"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"offset"),(0,i.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/medics"',title:'"GET','/api/v2/medics"':!0},'import requests\nimport json\n# Assign the necessary parameters for the request (url and parameters payload)\nurl = "/api/v2/medics/"\n\nresult = requests.get(url=url)\nprint(result.json())\n')),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=\"[StatusCode: 200] Success there's the list of your Medics Created]",title:'"[StatusCode:',"200]":!0,Success:!0,"there's":!0,the:!0,list:!0,of:!0,your:!0,Medics:!0,"Created]":!0},'{\n    "count": 1,\n    "next": "{{Base_URL}}/api/v2/medics/?limit=15&offset=15",\n    "previous": null,\n    "results": [\n        {\n            "id": 1,\n            "name": "Elizabeth Blackwell",\n            "email": "hola@prescrypto.com",\n            "hospital": 7,\n            "date_of_birth": "1979-01-24",\n            "cedula_prof": "123123123",\n            "specialty_no": "123123123",\n            "specialty": "Medico Cirujano",\n            "alma_mater": "Universidad Nacional Aut\xf3noma de M\xe9xico",\n            "female": true,\n            "is_active": true,\n            "specialty_verified": false,\n            "campaign": "",\n            "is_admin_membership": true\n        }\n    ]\n}\n')),(0,i.kt)("h3",{id:"detail-medic"},"Detail Medic"),(0,i.kt)("p",null,"You can also filter the information for a single account, by adding the Medic id to the endpoint route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/medics/{{Medic_ID}}/"',title:'"GET','/api/v2/medics/{{Medic_ID}}/"':!0},"{{Base_URL}}/api/v2/medics/1/\n")),(0,i.kt)("h2",{id:"create-medic"},"Create Medic"),(0,i.kt)("p",null,'You can create as many Medics as needed. A Medic requires to be a member of an "Hospital" which can be created during or after the creation of the Medic, usually creating the "Hospital" after is what is best suited for most of integrations.'),(0,i.kt)("h3",{id:"body-fields"},"Body Fields"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name ",(0,i.kt)("inlineCode",{parentName:"td"},"required")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")," for medic name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password ",(0,i.kt)("inlineCode",{parentName:"td"},"required")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")," for medic password, can only take effect during medic creation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"email ",(0,i.kt)("inlineCode",{parentName:"td"},"required")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")," 'Email address has to be unique or you'll get an error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hospital"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"int")," , (Optional) Token user has to be the ADMIN of the Hospital id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"date_of_birth"),(0,i.kt)("td",{parentName:"tr",align:null},"format: yyyy-mm-dd  eg 1990-12-31")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cedula_prof"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"int"),' number of the medical "C\xe9dula Profesional" emited by the SEP ("Secretar\xeda de Educaci\xf3n P\xfablica")')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"specialty_no"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"int"),' number of the medical "C\xe9dula Profesional" of Speciality emited by the SEP')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"specialty"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")," name of the medical branch that the medic practice")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"alma_mater"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")," name of the University")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"female"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),' Gender of the medic, will be used for medic title "Dr" or "Dra"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_active"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," to deactive or active accounts, this has nothing to do with cedula validation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"campaign"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"int")," It assigns automatically a campaign to a medic, ask adminstrators to create a campaign first")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_admin_membership"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),' to indicate what kind of ownership the Medic has to an hospital, can be an "Admin" or a "Member", Admins can edit the Hospital, members only use it')))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Don\u2019t forget to save your medic token, as you\u2019ll need it later to create a Deeplink for logging in."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="POST /api/v2/medics/"',title:'"POST','/api/v2/medics/"':!0},'import requests\nimport json\n\nurl = "{{Base_URL}}/api/v2/medics/"\n\npayload = json.dumps({\n  "name": "Algun Nombre",\n  "password": "Algunpassword",\n  "email": "name@domain.com",\n  "date_of_birth": "1992-09-22",\n  "cedula_prof": "123456789",\n  "specialty_no": "",\n  "specialty": "Medicina General",\n  "alma_mater": "Universidad Nacional Aut\xf3noma de M\xe9xico",\n  "female": False,\n  "is_active": True\n})\nheaders = {\n  \'Authorization\': \'Token {{Token}}\',\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("POST", url, headers=headers, data=payload)\n\nprint(response.text)\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'If you want to add this Medic to an Hospital that you have created, you can add the "Hospital: {id}" to the body.'))),(0,i.kt)("h3",{id:"response-1"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 201] The Medic has been created successfully"',title:'"[StatusCode:',"201]":!0,The:!0,Medic:!0,has:!0,been:!0,created:!0,'successfully"':!0},'{\n    "id": 1,\n    "token": "eaeaeaeaeae123eaeaedummyToken",\n    "name": "Algun Nombre",\n    "password": "pbkdf2_sha256$150000$X1Very36lhLongZ9GnBAStringnI5KWOnrnVQ=",\n    "email": "name@domain.com",\n    "hospital": null,\n    "date_of_birth": "1992-09-22",\n    "cedula_prof": "123456789",\n    "specialty_no": "",\n    "specialty": "Medicina General",\n    "alma_mater": "Universidad Nacional Aut\xf3noma de M\xe9xico",\n    "female": false,\n    "is_active": true,\n    "specialty_verified": false,\n    "campaign": null,\n    "is_admin_membership": null\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 400] You are not the admin of the Hospital id"',title:'"[Error:',"400]":!0,You:!0,are:!0,not:!0,the:!0,admin:!0,of:!0,Hospital:!0,'id"':!0},'{\n    "details": "No tiene permisos suficientes para asignar este hospital: 1"\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 400] The email already exists in Prescrypto, you need to use a new one"',title:'"[Error:',"400]":!0,The:!0,email:!0,already:!0,exists:!0,in:!0,"Prescrypto,":!0,you:!0,need:!0,to:!0,use:!0,a:!0,new:!0,'one"':!0},'[\n    "duplicate key value violates unique constraint \\"medics_medic_email_c4aaaa6a_uniq\\"\\nDETAIL:  Key (email)=(name@domain.com) already exists.\\n"\n]\n')),(0,i.kt)("h2",{id:"update-medic"},"Update Medic"),(0,i.kt)("p",null,"You can update partial data of a Medic already created."),(0,i.kt)("h3",{id:"request-body"},"Request Body"),(0,i.kt)("p",null,'The request body should be a "application/json" encoded object, containing the following items.'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")," for medic name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"email"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")," 'Email address has to be unique or you'll get an error")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hospital"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"int")," , Token user has to be the ADMIN of the Hospital id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"date_of_birth"),(0,i.kt)("td",{parentName:"tr",align:null},"format: yyyy-mm-dd  eg 1990-12-31")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cedula_prof"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"int"),' number of the medical "C\xe9dula Profesional" emited by the SEP')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"specialty_no"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"int"),' number of the medical "C\xe9dula Profesional" of Speciality emited by the SEP')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"specialty"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")," name of the medical branch that the medic practice")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"alma_mater"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")," name of the University")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"female"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),' Gender of the medic, will be used for medic title "Dr" or "Dra"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_active"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," to deactive or active accounts, this has nothing to do with cedula validation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"campaign"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"int")," It assigns automatically a campaign to a medic, ask adminstrators to create a campaign first")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"is_admin_membership"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),' to indicate what kind of ownership the Medic has to an hospital, can be an "Admin" or a "Member", Admins can edit the Hospital, members only use it')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="PATCH /api/v2/medics/{{Medic_ID}}"',title:'"PATCH','/api/v2/medics/{{Medic_ID}}"':!0},"import requests\nimport json\n\nurl = \"{{Base_URL}}/api/v2/medics/1/\"\n\npayload = json.dumps({\n  \"name\": \"Daniel Hale Williams\"\n})\nheaders = {\n  'Authorization': 'Token {{Token}}',\n  'Content-Type': 'application/json'\n}\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload)\n\nprint(response.text)\n")),(0,i.kt)("h3",{id:"response-2"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 202] The Medic has been updated successfully"',title:'"[StatusCode:',"202]":!0,The:!0,Medic:!0,has:!0,been:!0,updated:!0,'successfully"':!0},'{\n    "id": 1,\n    "name": "Daniel Hale Williams",\n    "email": "hola@prescrypto.com",\n    "hospital": 1,\n    "date_of_birth": "1992-09-22",\n    "cedula_prof": "123456789",\n    "specialty_no": "",\n    "specialty": "Medicina General",\n    "alma_mater": "Universidad Nacional Aut\xf3noma de M\xe9xico",\n    "female": false,\n    "is_active": true,\n    "specialty_verified": false,\n    "campaign": "",\n    "is_admin_membership": null\n}\n')),(0,i.kt)("p",null,"[EOF]"))}c.isMDXComponent=!0}}]);