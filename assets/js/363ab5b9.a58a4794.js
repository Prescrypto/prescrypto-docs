"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,c=h["".concat(o,".").concat(u)]||h[u]||d[u]||s;return n?r.createElement(c,i(i({ref:t},m),{},{components:n})):r.createElement(c,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:3},i="Membership",l={unversionedId:"api/membership",id:"api/membership",title:"Membership",description:'The relati\xf3n between the Medic with an Hospital are defined by Membership. It could be either "Admin" or "Member".',source:"@site/docs/api/membership.md",sourceDirName:"api",slug:"/api/membership",permalink:"/prescrypto-docs/docs/api/membership",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hospital",permalink:"/prescrypto-docs/docs/api/hospital"},next:{title:"Patient",permalink:"/prescrypto-docs/docs/api/patient"}},o={},p=[{value:"List all Memberships",id:"list-all-memberships",level:2},{value:"GET List all Memberships",id:"get-list-all-memberships",level:4},{value:"Response List all Memberships",id:"response-list-all-memberships",level:4},{value:"List a singular Membership",id:"list-a-singular-membership",level:3},{value:"GET to singular Membership",id:"get-to-singular-membership",level:4},{value:"Response to singular Membership",id:"response-to-singular-membership",level:4},{value:"List Medics Memberships for a singular Hospital",id:"list-medics-memberships-for-a-singular-hospital",level:2},{value:"Response to List Medics Memberships",id:"response-to-list-medics-memberships",level:3},{value:"Create Membership",id:"create-membership",level:2},{value:"Fields of a Membership",id:"fields-of-a-membership",level:3},{value:"POST Create Membership",id:"post-create-membership",level:4},{value:"Response to Create Membership",id:"response-to-create-membership",level:4},{value:"Delete Membership",id:"delete-membership",level:2},{value:"DELETE Membership",id:"delete-membership-1",level:4},{value:"Response to Delete Membership",id:"response-to-delete-membership",level:4},{value:"Update Membership",id:"update-membership",level:2},{value:"PATCH Update Membership",id:"patch-update-membership",level:4},{value:"Response to Delete Membership",id:"response-to-delete-membership-1",level:4}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"membership"},"Membership"),(0,a.kt)("p",null,'The relati\xf3n between the Medic with an Hospital are defined by Membership. It could be either "Admin" or "Member".'),(0,a.kt)("p",null,"A MEMBER of an ",(0,a.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/hospital"},"Hospital")," can only prescribe from that Hospital but he is unable to edit it."),(0,a.kt)("p",null,"An ADMIN of an ",(0,a.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/hospital"},"Hospital")," can Edit its content, view, add and remove the Medics linked to the Hospital."),(0,a.kt)("h2",{id:"list-all-memberships"},"List all Memberships"),(0,a.kt)("p",null,"It will display the ",(0,a.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/hospital"},"Hospitals")," in which the Medic has a Membership."),(0,a.kt)("h4",{id:"get-list-all-memberships"},"GET List all Memberships"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/management/memberships/"',title:'"GET','/api/v2/management/memberships/"':!0},"import requests\n\nurl = \"{{BASE_URL}}/api/v2/management/memberships/\"\n\nheaders = {\n  'Authorization': 'Token {{YOUR_TOKEN}}'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n\nprint(response.text)\n")),(0,a.kt)("h4",{id:"response-list-all-memberships"},"Response List all Memberships"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 200] Success here are all your memberships created"',title:'"[StatusCode:',"200]":!0,Success:!0,here:!0,are:!0,all:!0,your:!0,memberships:!0,'created"':!0},'{\n    "count": 2,\n    "next": null,\n    "previous": null,\n    "results": [\n        {\n            "id": 191,\n            "medic": {\n                "name": "Alexander Flemming",\n                "email": "hola@prescrypto.com"\n            },\n            "hospital": 99,\n            "type_membership": "ADMIN",\n            "is_active": true,\n            "is_deleted": false,\n            "date_joined": "2020-11-04T01:12:12.017392Z"\n        },\n        {\n            "id": 203,\n            "medic": {\n                "name": "Alexander Flemming",\n                "email": "hola@prescrypto.com"\n            },\n            "hospital": 108,\n            "type_membership": "MEMBER",\n            "is_active": true,\n            "is_deleted": false,\n            "date_joined": "2020-21-04T01:15:12.017992Z"\n        }\n    ]\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 401] Invalid Token"',title:'"[Error:',"401]":!0,Invalid:!0,'Token"':!0},'{\n    "message": "Invalid Token"\n}\n')),(0,a.kt)("h3",{id:"list-a-singular-membership"},"List a singular Membership"),(0,a.kt)("p",null,"You can obtain the detail for a single Membership, by adding the Membership ID to the endpoint route."),(0,a.kt)("h4",{id:"get-to-singular-membership"},"GET to singular Membership"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/management/memberships/{{Membership_ID}}"',title:'"GET','/api/v2/management/memberships/{{Membership_ID}}"':!0},"import requests\n\nurl = \"{{BASE_URL}}/api/v2/management/memberships/{{MEMBERSHIP_ID}}\"\n\nheaders = {\n  'Authorization': 'Token {{YOUR_TOKEN}}'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n\nprint(response.text)\n")),(0,a.kt)("h4",{id:"response-to-singular-membership"},"Response to singular Membership"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 200] Success here are the details of the memberships of choice"',title:'"[StatusCode:',"200]":!0,Success:!0,here:!0,are:!0,the:!0,details:!0,of:!0,memberships:!0,'choice"':!0},'{\n    "id": 191,\n    "medic": {\n        "name": "Alexander Flemming",\n        "email": "hola@prescrypto.com"\n    },\n    "hospital": 99,\n    "type_membership": "ADMIN",\n    "is_active": true,\n    "is_deleted": false,\n    "date_joined": "2020-11-04T01:12:12.017392Z"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 404] Membership not found or your token do not created the membership"',title:'"[Error:',"404]":!0,Membership:!0,not:!0,found:!0,or:!0,your:!0,token:!0,do:!0,created:!0,the:!0,'membership"':!0},'{\n    "message": "Not found"\n}\n')),(0,a.kt)("h2",{id:"list-medics-memberships-for-a-singular-hospital"},"List Medics Memberships for a singular Hospital"),(0,a.kt)("p",null,"This endpoint will respond with the list of the Medics who has a Membership in the Hospital indicated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/memberships/{{Hospital_ID}}"',title:'"GET','/api/v2/memberships/{{Hospital_ID}}"':!0},"import requests\n\nurl = \"{{BASE_URL}}/api/v2/memberships/{{Hospital_ID}}\"\n\nheaders = {\n  'Authorization': 'Token {{YOUR_TOKEN}}'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n\nprint(response.text)\n")),(0,a.kt)("h3",{id:"response-to-list-medics-memberships"},"Response to List Medics Memberships"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 200]"',title:'"[StatusCode:','200]"':!0},'[\n    {\n        "id": 344,\n        "medic": {\n            "name": "Alexander Fleming",\n            "email": "hola@prescrypto.com"\n        },\n        "hospital": 44,\n        "type_membership": "ADMIN",\n        "is_active": false,\n        "is_deleted": false,\n        "date_joined": "2021-08-11T04:52:38.327771Z"\n    },\n    {\n        "id": 343,\n        "medic": {\n            "name": "Matilde Montoya",\n            "email": "hola@prescrypto.com"\n        },\n        "hospital": 44,\n        "type_membership": "MEMBER",\n        "is_active": false,\n        "is_deleted": false,\n        "date_joined": "2021-08-11T04:51:37.863184Z"\n    },\n    {\n        "id": 342,\n        "medic": {\n            "name": "Elizabeth Blackwell",\n            "email": "hola@prescrypto.com"\n        },\n        "hospital": 44,\n        "type_membership": "ADMIN",\n        "is_active": false,\n        "is_deleted": false,\n        "date_joined": "2021-08-11T04:46:09.314508Z"\n    }\n]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 401] Invalid Token"',title:'"[Error:',"401]":!0,Invalid:!0,'Token"':!0},'{\n    "message": "Invalid Token"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 401] Invalid Token to make the consult"',title:'"[Error:',"401]":!0,Invalid:!0,Token:!0,to:!0,make:!0,the:!0,'consult"':!0},'{\n    "message": "Unauthorized Medic"\n}\n')),(0,a.kt)("h2",{id:"create-membership"},"Create Membership"),(0,a.kt)("p",null,"You can create a relatioship between a Medic and a Hospital trough a Membership"),(0,a.kt)("h3",{id:"fields-of-a-membership"},"Fields of a Membership"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"medic"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Int")," ID of the Medic for whom the Membership will be created")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hospital"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Int")," ID of the Hospital to which the Medic will be added, you need to be have an ADMIN Membership to this Hospital")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type_membership"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")," Can be ",(0,a.kt)("a",{parentName:"td",href:"/prescrypto-docs/docs/api/membership"},"ADMIN")," or ",(0,a.kt)("a",{parentName:"td",href:"/prescrypto-docs/docs/api/membership"},"MEMBER"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"is_active"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")," indicates if it's the current active hospital for the Medic")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"is_deleted"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")," determines if the Medic can see or select the hospital from the UI")))),(0,a.kt)("h4",{id:"post-create-membership"},"POST Create Membership"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="POST /api/v2/management/memberships/"',title:'"POST','/api/v2/management/memberships/"':!0},'import requests\nimport json\n\nurl = "{{Base_URL}}/api/v2/management/memberships/"\n\npayload = json.dumps({\n  "medic": 33,  \n  "hospital": 1,\n  "type_membership": "ADMIN"\n})\nheaders = {\n  \'Authorization\': \'Token {{token}}\',\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("POST", url, headers=headers, data=payload)\n\nprint(response.text)\n\n')),(0,a.kt)("h4",{id:"response-to-create-membership"},"Response to Create Membership"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 201] Success for create membership"',title:'"[StatusCode:',"201]":!0,Success:!0,for:!0,create:!0,'membership"':!0},'{\n    "medic": 330,\n    "type_membership": "ADMIN"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 409] Duplicate Membership"',title:'"[Error:',"409]":!0,Duplicate:!0,'Membership"':!0},'{\n    "message": "Membership already exists please edit instead of trying to create it again."\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 401] Invalid Token"',title:'"[Error:',"401]":!0,Invalid:!0,'Token"':!0},'{\n    "message": "Invalid Token"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 401] Invalid Token to make the consult"',title:'"[Error:',"401]":!0,Invalid:!0,Token:!0,to:!0,make:!0,the:!0,'consult"':!0},'{\n    "message": "Unauthorized Medic"\n}\n')),(0,a.kt)("h2",{id:"delete-membership"},"Delete Membership"),(0,a.kt)("p",null,'It will generate a "soft_delete" for the membership, the medic will not see anymore the Hospital from the UI. This can be undone by updating the field "is_deleted" to "false" with a PATCH Request.'),(0,a.kt)("h4",{id:"delete-membership-1"},"DELETE Membership"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="DELETE /api/v2/management/memberships/{{Memberhip_ID}}"',title:'"DELETE','/api/v2/management/memberships/{{Memberhip_ID}}"':!0},"import requests\n\nurl = \"{{Base_URL}}}/api/v2/management/memberships/{{Memberhip_ID}}\"\n\nheaders = {\n  'Authorization': 'Token {{token}}'\n}\n\nresponse = requests.request(\"DELETE\", url, headers=headers)\n\nprint(response.text)\n")),(0,a.kt)("h4",{id:"response-to-delete-membership"},"Response to Delete Membership"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 201] Success for delete membership"',title:'"[StatusCode:',"201]":!0,Success:!0,for:!0,delete:!0,'membership"':!0},'{\n    "id": 10,\n    "medic": {\n        "id": 21,\n        "email": "hola@prescrypto.com",\n        "name": "Ely"\n    },\n    "hospital": 7,\n    "type_membership": "ADMIN",\n    "is_active": true,\n    "is_deleted": true,\n    "date_joined": "YYYY-MM-DDT00:00:00.00000Z"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 404] Membership not found"',title:'"[Error:',"404]":!0,Membership:!0,not:!0,'found"':!0},'{\n    "message": "Not found"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 401] Invalid Token"',title:'"[Error:',"401]":!0,Invalid:!0,'Token"':!0},'{\n    "message": "Invalid Token"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 401] Invalid Token to make the consult"',title:'"[Error:',"401]":!0,Invalid:!0,Token:!0,to:!0,make:!0,the:!0,'consult"':!0},'{\n    "message": "Unauthorized Medic"\n}\n')),(0,a.kt)("h2",{id:"update-membership"},"Update Membership"),(0,a.kt)("p",null,'This will allow you to update your "type of Membership" from ADMIN to MEMBER and undo the soft_deletion of the Membership.'),(0,a.kt)("h4",{id:"patch-update-membership"},"PATCH Update Membership"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="PATCH /api/v2/management/memberships/{{Memberhip_ID}}"',title:'"PATCH','/api/v2/management/memberships/{{Memberhip_ID}}"':!0},'import requests\nimport json\n\nurl = "{{Base_URL}}}/api/v2/management/memberships/{{Memberhip_ID}}"\n\npayload = json.dumps({\n  "is_deleted": false,\n  "type_membership": "MEMBER"\n})\nheaders = {\n  \'Authorization\': \'Token {{token}}\',\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("PATCH", url, headers=headers, data=payload)\n\nprint(response.text)\n')),(0,a.kt)("h4",{id:"response-to-delete-membership-1"},"Response to Delete Membership"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 201] Success for update a membership"',title:'"[StatusCode:',"201]":!0,Success:!0,for:!0,update:!0,a:!0,'membership"':!0},'{\n    "id": 14,\n    "medic": {\n        "id": 20,\n        "email": "hola@prescrypto.com",\n        "name": "Ely"\n    },\n    "hospital": 9,\n    "type_membership": "Member",\n    "is_active": true,\n    "is_deleted": false,\n    "date_joined": "YYYY-MM-DDT00:00:00.00000Z"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 404] Membership not found"',title:'"[Error:',"404]":!0,Membership:!0,not:!0,'found"':!0},'{\n    "message": "Not found"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 401] Invalid Token"',title:'"[Error:',"401]":!0,Invalid:!0,'Token"':!0},'{\n    "message": "Invalid Token"\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 401] Invalid Token to make the consult"',title:'"[Error:',"401]":!0,Invalid:!0,Token:!0,to:!0,make:!0,the:!0,'consult"':!0},'{\n    "message": "Unauthorized Medic"\n}\n')),(0,a.kt)("p",null,"[EOF]"))}d.isMDXComponent=!0}}]);