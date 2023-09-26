"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Pharmacy",l={unversionedId:"pharmacy/overview",id:"pharmacy/overview",title:"Pharmacy",description:"Pharmacy tokens are limited to be used on the Pharmacy endpoints which are contained in this page. Trying to use this token in other edpoints will result in error of permisions.",source:"@site/docs/pharmacy/overview.md",sourceDirName:"pharmacy",slug:"/pharmacy/overview",permalink:"/prescrypto-docs/docs/pharmacy/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/prescrypto-docs/docs/deeplink/overview"},next:{title:"Products",permalink:"/prescrypto-docs/docs/products/overview"}},s={},d=[{value:"Response Fields Explanation",id:"response-fields-explanation",level:2},{value:"Search an eRx",id:"search-an-erx",level:2},{value:"GET Search an eRx",id:"get-search-an-erx",level:4},{value:"Response to Search an eRx",id:"response-to-search-an-erx",level:4},{value:"Burn Medication",id:"burn-medication",level:2},{value:"POST Burn Medication",id:"post-burn-medication",level:4},{value:"Response to Burn Medication",id:"response-to-burn-medication",level:4},{value:"Reject",id:"reject",level:2},{value:"Body Fields",id:"body-fields",level:3},{value:"POST Reject",id:"post-reject",level:4},{value:"Response to Reject",id:"response-to-reject",level:4},{value:"Download PDF (in base64)",id:"download-pdf-in-base64",level:2},{value:"GET Download PDF",id:"get-download-pdf",level:4},{value:"Respose to Download PDF",id:"respose-to-download-pdf",level:4}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pharmacy"},"Pharmacy"),(0,r.kt)("p",null,"Pharmacy tokens are limited to be used on the Pharmacy endpoints which are contained in this page. Trying to use this token in other edpoints will result in error of permisions."),(0,r.kt)("p",null,"A Pharmacy token can search, download, reject a prescription, and indicate when a medication has been sold."),(0,r.kt)("p",null,'The "sello electronico" in an eRx it\'s it unique identificator, from now on it will be mentioned as "Signature", with this you can search an eRx in the platform.'),(0,r.kt)("p",null,"Be careful with the routes of the Pharmacy endpoints, some are in v1 others in v2!!!."),(0,r.kt)("h2",{id:"response-fields-explanation"},"Response Fields Explanation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Diagnosis"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")," The diagnosis of the eRx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Medications"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")," It will contain the information of each medication that has been prescribed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extras"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String"),' General indications that are not tied to a specific medication, ex: "Fiebre 38\xbaC, tomar abundate agua,.."')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"signature"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")," uniuqe identifier of the eRx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created_at"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")," date of creation of the eRx, format: YYYY-MM-DD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sent"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")," indicates if the eRX has been sent by email, true=the eRx has been sent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")," indicates if the eRX has been canceled, true=the eRx has been Canceled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transaction_url"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")," Link where it can be verified the compliance of this individual eRx with the NOM151-SCFI-2016")))),(0,r.kt)("p",null,"Medications inner Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Int")," the id of the medication, get this id from the Search endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"presentation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String"),' The commercial name of the Medication, eg: "Aspirina"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instructions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String"),' "Posolog\xeda" for that specific medication')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cost"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Int")," ","[WIP]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bought"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")," Indicates if this medication can still be sold, if ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," it means all prescribed quantities have been sold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"qty"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Int")," Number of this medication that has been prescribed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bought_qty"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Int")," the number of medication that has been sold, calculate the amount that you can sell based on the available qty (",(0,r.kt)("inlineCode",{parentName:"td"},"qty"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"qty_bought"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"qty_label"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String"),' IT can be used for non-controlled medications, the Medic will indicate either "A la discreci\xf3n del farmaceutico" or "Sin Suspender" so the pharmacyst determines the amount to be sold based on ',(0,r.kt)("inlineCode",{parentName:"td"},"instructions")," (n.pills x hour x days of treatment)")))),(0,r.kt)("h2",{id:"search-an-erx"},"Search an eRx"),(0,r.kt)("p",null,'The first element that you will have from an eRx, it\'s the "Signature" or "Sello electr\xf3nico", with this value you can search for it in Prescrypto and get a ',(0,r.kt)("inlineCode",{parentName:"p"},"json")," with the relevant data of the eRx including the SKU of the medications."),(0,r.kt)("h4",{id:"get-search-an-erx"},"GET Search an eRx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/pharmacy/rx/{{eRx_signature}}"',title:'"GET','/api/v2/pharmacy/rx/{{eRx_signature}}"':!0},"import requests\n\nurl = \"{{Base_URL}}/api/v2/pharmacy/rx/{{eRx_signature}}\"\n\nheaders = {\n  'Authorization': 'Token {{Token}}',\n  'Content-Type': 'application/json'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n\nprint(response.text)\n\n")),(0,r.kt)("h4",{id:"response-to-search-an-erx"},"Response to Search an eRx"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[200] Success, here is the detail of the eRx"',title:'"[200]',"Success,":!0,here:!0,is:!0,the:!0,detail:!0,of:!0,'eRx"':!0},'{\n    "id": 1837,\n    "hospital": {\n        "id": 162,\n        "patron": "Consultorio Demo",\n        "location": "Nombre de la Calle, Colonia, CP, Alcaldia, Estado"\n    },\n    "clinic": null,\n    "medic": "hola@prescrypto.com",\n    "patient": {\n        "uid": "1234567890",\n        "name": "Pedro S\xe1nchez",\n        "email": "pedro@email.com",\n        "date_of_birth": "1973-03-01",\n        "gender": "M"\n    },\n    "diagnosis": "Gripe por virus de la gripe estacional identificado",\n    "medications": [\n        {\n            "id": 2156,\n            "presentation": "Actron 10 C\xe1psulas Caja (ibuprofeno 400 mg)",\n            "instructions": "Tomar 1 pastilla cada  8 horas",\n            "cost": 0.0,\n            "bought": false,\n            "qty": 1,\n            "bought_qty": 0,\n            "drug_upc": "1234567890",\n            "order_id": 0,\n            "category": "",\n            "ad_id": "",\n            "qty_label": "",\n            "sku": "1234567890"\n        },\n        {\n            "id": 2155,\n            "presentation": "Aspirina Protect 28 Tabletas Caja (acetilsalicilico 100 mg)",\n            "instructions": "Tomar 1 pastilla cada  8 horas",\n            "cost": 0.0,\n            "bought": false,\n            "qty": 1,\n            "bought_qty": 0,\n            "drug_upc": "1234567890",\n            "order_id": 0,\n            "category": "",\n            "ad_id": "",\n            "qty_label": "",\n            "sku": "1234567890"\n        }\n    ],\n    "extras": "",\n    "signature": "1234567890",\n    "created_at": "2022-07-28",\n    "sent": null,\n    "send_rx": true,\n    "show_diagnosis": false,\n    "bought": false,\n    "rejected": false,\n    "cta_link": "",\n    "transaction_url": "https://www.rexchain.io/hash/1234567890"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 404] Rx not found"',title:'"[Error:',"404]":!0,Rx:!0,not:!0,'found"':!0},'{\n    "error": "rx not found"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 401] Invalid Token"',title:'"[Error:',"401]":!0,Invalid:!0,'Token"':!0},'{\n    "message": "Invalid Token"\n}\n')),(0,r.kt)("h2",{id:"burn-medication"},"Burn Medication"),(0,r.kt)("p",null,"When a medication has been bought by the patient, the status can be changed through the api."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sales_code"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")," Can be an internal identifier of the Pharmacy, example: the Sales Ticket")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"medications"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")," nested arrays of the Medications QTY that will be modified")))),(0,r.kt)("p",null,"Medications inner Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Int")," the id of the medication, get this id from the Search endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bought_qty"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Int")," the number of medication that will be sold, calculate the amount that you can sell based on the available qty (",(0,r.kt)("inlineCode",{parentName:"td"},"qty"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"qty_bought"),")")))),(0,r.kt)("h4",{id:"post-burn-medication"},"POST Burn Medication"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="POST api/v1/prescriptions/burn/{{eRx_Signature}}/"',title:'"POST','api/v1/prescriptions/burn/{{eRx_Signature}}/"':!0},'import requests\nimport json\n\nurl = "{{Base_URL}}api/v1/prescriptions/burn/{{eRx_Signature}}"\n\npayload = json.dumps({\n  "sales_code": "PHX12345",\n  "medications": [\n    {\n      "id": 2874,\n      "bought_qty": 1\n    }\n  ]\n})\nheaders = {\n  \'Authorization\': \'Token {{Token}}\',\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("POST", url, headers=headers, data=payload)\n\nprint(response.text)\n\n')),(0,r.kt)("h4",{id:"response-to-burn-medication"},"Response to Burn Medication"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="here are some examples Status Codes that you can get"',title:'"here',are:!0,some:!0,examples:!0,Status:!0,Codes:!0,that:!0,you:!0,can:!0,'get"':!0},'{"status": "202 OK"} // Everthing went fine \n{"status": "400 Bad Response"} // Something is bad in your JSON "Body".\n{"status": "500 Server Error"} // There has been an issue on our side please contact us.\n')),(0,r.kt)("h2",{id:"reject"},"Reject"),(0,r.kt)("p",null,"A prescription can be rejected by a Medic or Pharmacy, once a prescription has been rejected it cannot be used or modified again, be very careful with this procedure."),(0,r.kt)("h3",{id:"body-fields"},"Body Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rejected")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reason_of_rejected")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")," Description of the reason for the rejection")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON body example"',title:'"JSON',body:!0,'example"':!0},'{\n    "rejected": true,\n    "reason_of_rejected": "Does not have the Medic information"\n\n}\n')),(0,r.kt)("h4",{id:"post-reject"},"POST Reject"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="POST /api/v1/prescriptions/reject/{{eRx_Signature}}"',title:'"POST','/api/v1/prescriptions/reject/{{eRx_Signature}}"':!0},'import requests\nimport json\n\nurl = "{{Base_URL}}/api/v1/prescriptions/reject/{{eRx_Signature}}"\n\npayload = json.dumps({\n  "rejected": True,\n  "reason_of_rejected": "Does not have the Medic information"\n})\nheaders = {\n  \'Authorization\': \'Token {{Token}}\',\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("POST", url, headers=headers, data=payload)\n\nprint(response.text)\n\n')),(0,r.kt)("h4",{id:"response-to-reject"},"Response to Reject"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 200] Success! "',title:'"[StatusCode:',"200]":!0,"Success!":!0,'"':!0},'{\n    "status": "202 OK"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 404] Rx not found"',title:'"[Error:',"404]":!0,Rx:!0,not:!0,'found"':!0},'{\n    "status": "400 Bad Response",\n    "error": "rx not found"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 401] Invalid Token"',title:'"[Error:',"401]":!0,Invalid:!0,'Token"':!0},'{\n    "message": "Invalid Token"\n}\n')),(0,r.kt)("h2",{id:"download-pdf-in-base64"},"Download PDF (in base64)"),(0,r.kt)("p",null,"Prescriptions can be downloaded in their PDF representation with this endpoint, the response will be in base64, which will be needed to decode from base64 to PDF."),(0,r.kt)("h4",{id:"get-download-pdf"},"GET Download PDF"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="GET /api/v2/rx/pdf/{{eRx_Signature}}/"',title:'"GET','/api/v2/rx/pdf/{{eRx_Signature}}/"':!0},"import requests\n\nurl = \"{{Base_URL}}/api/v2/rx/pdf/{{eRx_Signature}}/\"\n\nheaders = {\n  'Authorization': 'Token {{Token}}',\n  'Content-Type': 'application/json'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n\nprint(response.text)\n")),(0,r.kt)("h4",{id:"respose-to-download-pdf"},"Respose to Download PDF"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[StatusCode: 200] Success! "',title:'"[StatusCode:',"200]":!0,"Success!":!0,'"':!0},'{\n    "pdf": "pdf_in_base_64"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 404] Rx not found"',title:'"[Error:',"404]":!0,Rx:!0,not:!0,'found"':!0},'{\n    "error": "rx not found"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[Error: 401] Invalid Token"',title:'"[Error:',"401]":!0,Invalid:!0,'Token"':!0},'{\n    "message": "Invalid Token"\n}\n')),(0,r.kt)("p",null,"[EOF]"))}c.isMDXComponent=!0}}]);