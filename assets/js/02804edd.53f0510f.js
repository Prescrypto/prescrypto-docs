"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[290],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3166:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},l="Prescrypto Tutorial",p={unversionedId:"tutorial/overview",id:"tutorial/overview",title:"Prescrypto Tutorial",description:"This page explains how developers can get started using Prescrypto APIs.",source:"@site/docs/tutorial/overview.md",sourceDirName:"tutorial",slug:"/tutorial/overview",permalink:"/prescrypto-docs/docs/tutorial/overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Products",permalink:"/prescrypto-docs/docs/products/overview"},next:{title:"Changelog",permalink:"/prescrypto-docs/docs/changelog/overview"}},d=[{value:"Creating the main Models",id:"creating-the-main-models",children:[{value:"Creating a Hospital",id:"creating-a-hospital",children:[],level:3},{value:"Creating Medics",id:"creating-medics",children:[],level:3}],level:2},{value:"Creating Prescriptions",id:"creating-prescriptions",children:[{value:"Creating a Patient",id:"creating-a-patient",children:[],level:3},{value:"Adding Medications",id:"adding-medications",children:[],level:3},{value:"Create prescription",id:"create-prescription",children:[],level:3},{value:"Listening webhooks",id:"listening-webhooks",children:[],level:3}],level:2},{value:"Management Memberships",id:"management-memberships",children:[{value:"See list of memberships that admin user can manage",id:"see-list-of-memberships-that-admin-user-can-manage",children:[],level:3},{value:"See list of memberships from one hospital",id:"see-list-of-memberships-from-one-hospital",children:[],level:3},{value:"Search a medic to use the medic id",id:"search-a-medic-to-use-the-medic-id",children:[],level:3},{value:"Create a membership",id:"create-a-membership",children:[],level:3},{value:"Set as default hospital",id:"set-as-default-hospital",children:[],level:3},{value:"Modify memberships",id:"modify-memberships",children:[],level:3},{value:"Delete or remove memberships",id:"delete-or-remove-memberships",children:[],level:3}],level:2}],m={toc:d};function c(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prescrypto-tutorial"},"Prescrypto Tutorial"),(0,o.kt)("p",null,"This page explains how developers can get started using Prescrypto APIs."),(0,o.kt)("p",null,"If you are using Prescrypto APIs for the first time, you can follow the steps in this guide to call the APIs using curl commands. You can use curl commands to experiment with an API before you develop your application."),(0,o.kt)("h2",{id:"creating-the-main-models"},"Creating the main Models"),(0,o.kt)("p",null,"Below we can see the main models to start using the API. Hospitals, and Medics. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Base Models Diagram",src:n(2687).Z})),(0,o.kt)("h3",{id:"creating-a-hospital"},"Creating a Hospital"),(0,o.kt)("p",null,"First, we recommend you create a place to work. So the endpoint ",(0,o.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/hospital"},"hospital")," will be the first to hint!"),(0,o.kt)("p",null,"Example Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --request POST \\\n  --url <BASE>/api/v2/hospital/ \\\n  --header \'Authorization: Token <TOKEN>\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n      "name": "Test Hospital(Short name)",\n      // PRINTED FIELDS\n      "patron": "TEST HOSPITAL",\n      "headline": "Slogan",\n      "location": "My address",\n      "contact": "2384094571, 557658394 hola@gmail.com",\n      // Optional fields\n      "page_size": 0, // DEFAULT LETTER \'0\', HALF PAGE \'1\'\n      "info": false // DEFAULT false, whether shows extra info or not in the prescription pdf\n}\'\n')),(0,o.kt)("p",null,"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "id": 9<HOSPITAL_ID>,\n  "created_at": "2021-07-21T23:00:30.278678Z",\n  "name": "Test Hospital",\n  "patron": "TEST HOSPITAL",\n  "headline": "Slogan",\n  "location": "My address",\n  "contact": "5551111222, hola@gmail.com"\n  "page_size": 0,\n  "picture": null,\n  "university_logo": null,\n  "is_active": true,\n  "is_admin": true,\n  "info": false\n}\n')),(0,o.kt)("p",null,"The pictures could be uploaded by using the web form on the plataform or by postman forms alike.  There's an example in our postman collection"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"TIP: Pay attention to required and non required fields")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Also what the default configurations means, these fields affect the medic workflow alongside Prescrypto platform."))),(0,o.kt)("h3",{id:"creating-medics"},"Creating Medics"),(0,o.kt)("p",null,"Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"HOSPITAL")," has been created, we can proceed to create new medic users. Let's create two medics, one with the hospital recently created and the other without hospital"),(0,o.kt)("p",null,"So we will use the endpoint ",(0,o.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/medic"},"medics")),(0,o.kt)("p",null,"Example Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --request POST \\\n  --url <BASE>/api/v2/medics/ \\\n  --header \'Authorization: Token <TOKEN>\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n    "name": "Test Doctor Who",\n    "password": "SomeRandomPASS",\n    "email": "testemailing@email.com",\n    "date_of_birth": "1991-09-03",\n    "cedula_prof": "ABC1234",\n    "specialty_no": "ABC12345",\n    "specialty": "Oftalm\xf3logo",\n    "alma_mater": "Testing University",\n    "female": false,\n    "specialty_verified": true,\n    "hospital": 9,\n    // Optional fields\n    "is_active": true, // Default true\n    "is_admin_membership": true // Default false\n}\'\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),'Note: What about "is_admin_membership"')),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the field is settled TRUE, the medic user can edit the hospital or invite new members to it, otherwise, the medic will be only a member, who can create prescriptions from that location or remove their own membership. There is more information in the membership section"))),(0,o.kt)("p",null,"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "id": 3253,\n  "token": "ee8c126TEST",\n  "name": "Test Doctor Who",\n  "password": "pbkdf2_sha256$150000$seSHVhCcpeF0$Lt7E9e9hpXYg5iG4Z7nGa5YWTb6LIjRzP8FIkiskWT0=",\n  "email": "testemailing@email.com",\n  "hospital": 9,\n  "date_of_birth": "1991-09-03",\n  "cedula_prof": "ABC1234",\n  "specialty_no": "ABC1234",\n  "specialty": "Oftalm\xf3logo",\n  "alma_mater": "Testing University",\n  "female": false,\n  "is_active": true,\n  "specialty_verified": true,\n  "campaign": null,\n  "is_admin_membership": false\n}\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"INFO: Save the medic id on your own database")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In order to have a better integration, we highly recommend you to save the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," fields after created medic users."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"INFO: About ",(0,o.kt)("inlineCode",{parentName:"h5"},"token")," field")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," field is only showed on create response ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"p"},'"api/v2/medics"')))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We verify the metadata of every medic on our plataform, if the medic has not specialty verified, shamely that medic couldn't create any prescription. Please let us know if your integrations have or haven't got specialty verified users")),(0,o.kt)("h2",{id:"creating-prescriptions"},"Creating Prescriptions"),(0,o.kt)("p",null,"The next step is to create the first prescription"),(0,o.kt)("p",null,"Regarding the before steps, we have the following data:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"LABEL"),(0,o.kt)("th",{parentName:"tr",align:null},"value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HOSPITAL_ID"),(0,o.kt)("td",{parentName:"tr",align:null},"9")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MEDIC_ID"),(0,o.kt)("td",{parentName:"tr",align:null},"3253")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MEDIC_TOKEN"),(0,o.kt)("td",{parentName:"tr",align:null},"ee8c126TEST")))),(0,o.kt)("h3",{id:"creating-a-patient"},"Creating a Patient"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Attention. From now on the ",(0,o.kt)("inlineCode",{parentName:"p"},"medic's token")," will be used instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"admin's"))),(0,o.kt)("p",null,"You can see the ",(0,o.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/patient"},"patient endpoint")," as well, in order to have more details about patient model.\nBefore creating a prescription, the patient ID is required, you have to create or search for the patient, as follows:"),(0,o.kt)("p",null,"Search patient"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// \"search_word\" could be email or name\n\ncurl --location \n  --request GET '<BASE>/api/v2/patient/?search=<SEARCH_WORD>' \\\n  --header 'Authorization: Token <MEDIC_TOKEN>'\n\n")),(0,o.kt)("p",null,"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n    {\n        "id": 180,\n        "name": "Jesus Alvarado",\n        "email": "testPatient@email.com",\n        "date_of_birth": "1990-01-18",\n        "external_patient_file": "",\n        "gender": "M",\n        "curp": "ABCTEST",\n        "phone": "555123456",\n        "address": "",\n        "state": "",\n        "zip_code": "",\n        "location": "CDMX, Ciudad de M\xe9xico",\n        "uid": "da59b2a8-5473-4b6c-b67e-06b07b6602e7". // <PATIENT_ID>\n    }\n]\n\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"So the important field is ",(0,o.kt)("inlineCode",{parentName:"p"},"uid"),". Save it."))),(0,o.kt)("h3",{id:"adding-medications"},"Adding Medications"),(0,o.kt)("p",null,"The medication object has a lot of useful fields, but in this tutorial only we take care of the needed in order to create a prescription. For more details see the ",(0,o.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/medication"},"medication api")," section"),(0,o.kt)("p",null,"Example of a simple medication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "presentation": "Spiolto Respimat Soluci\xf3n Cartucho de 4ML 30 Dosis Caja (tiotropio 0.226 mg, clorhidrato de olodaterol 0.226 mg)",\n    "instructions": "Una vez cada 8 horas",\n    "qty": 3,\n    "drug_upc": "0b7949396af3a5c03d68f22b267b0d85f5175b23f8533ad1ff261c0d5bd5191e",\n    "category": "standard_drug"\n}\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Notice that the field ",(0,o.kt)("inlineCode",{parentName:"p"},"drug_upc")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"category")," are special. See the following table to know how to fullfil those fields. "))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Whether you have  this field"),(0,o.kt)("th",{parentName:"tr",align:null},"MUST"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"drug_upc"),': "from your catalog"'),(0,o.kt)("td",{parentName:"tr",align:null},"category: ",(0,o.kt)("inlineCode",{parentName:"td"},'"basic_drug"')),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"drug_upc"),': "from our catalog"'),(0,o.kt)("td",{parentName:"tr",align:null},"category: ",(0,o.kt)("inlineCode",{parentName:"td"},'"from our catalog category"')," We send you the correct category for the product"),(0,o.kt)("td",{parentName:"tr",align:null},"category: ",(0,o.kt)("inlineCode",{parentName:"td"},'"basic_drug"')," Could be ",(0,o.kt)("inlineCode",{parentName:"td"},"basic_drug")," if it belong to your catalog too")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"drug_upc"),": ",(0,o.kt)("inlineCode",{parentName:"td"},'""')),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See the ",(0,o.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/products/overview"},"products endpoint")," to see more details about how to find medications from our catalog")),(0,o.kt)("h3",{id:"create-prescription"},"Create prescription"),(0,o.kt)("p",null,"Now the process of create a prescription is as follow:"),(0,o.kt)("p",null,"First we have to create the payload adding the before values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location --request POST \'<BASE>/api/v2/rx-endpoint/\' \\\n--header \'Authorization: Token <MEDIC_TOKEN>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "hospital": 9,  // <HOSPITAL_ID>\n    "clinic": null,\n    "patient": {\n        "uid": "cba292ec-2a76-47d7-b746-902c9d41a9f4" // <PATIENT_UID> \n    },\n    "diagnosis": "Diagnostico de prueba!",\n    "medications": [\n        {\n            "presentation": "Spiolto Respimat Soluci\xf3n Cartucho de 4ML 30 Dosis Caja (tiotropio 0.226 mg, clorhidrato de olodaterol 0.226 mg)",\n            "instructions": "Spiolto Med",\n            "qty": 1,\n            "drug_upc": "0b7949396af3a5c03d68f22b267b0d85f5175b23f8533ad1ff261c0d5bd5191e",\n            "category": "standard_drug"\n        },\n        {\n            "presentation": "Prueba de Detecci\xf3n de SARS-CoV-2 (COVID-19)",\n            "instructions": "Porfavor haga esta prueba",\n            "qty": 3,\n            "drug_upc": "83cd6128a7f3f50dab182b20cee7aa966a2255e77ba2d16b200f2c2d191430e4",\n            "category": "standard_drug",\n        }\n    ],\n    "extras": "Indicaciones extras para el paciente u observaciones",\n    "show_diagnosis": true,\n    "send_rx": true, // if set false, the rx won\'t sent\n}\'\n\n')),(0,o.kt)("p",null,"The response is as follow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "id": 2136,\n  "hospital": 9,\n  "clinic": null,\n  "medic": "<MEDIC_EMAIL>",\n  "patient": {\n    "uid": "<PATIENT_UID>",\n    "name": "<PATIENT_NAME>",\n    "email": "<PATIENT_EMAIL>"\n  },\n  "diagnosis": "Prueba para medicamentos , pharmacy",\n  "medications": [\n    {\n      "id": 439,\n      "presentation": "Prueba de Detecci\xf3n de SARS-CoV-2 (COVID-19)",\n      "instructions": "Porfavor haga esta prueba",\n      "drug": "Prueba de Deteccion de SARS-CoV-2 (COVID-19)",\n      "cost": 0.0,\n      "bought": false,\n      "qty": 1,\n      "bought_qty": 0,\n      "drug_upc": "<DRUG_UPC>",\n      "order_id": 0,\n      "category": "standard_drug",\n      "qty_label": "Sin suspender"\n    },\n    {\n      "id": 438,\n      "presentation": "Spiolto Respimat Soluci\xf3n Cartucho de 4ML 30 Dosis Caja (tiotropio 0.226 mg, clorhidrato de olodaterol 0.226 mg)",\n      "instructions": "Spiolto Med",\n      "drug": "Spiolto Respimat Solucion Cartucho de 4ML 30 Dosis Caja (tiotropio 0.226 mg, clorhidrato de olodaterol 0.226 mg)",\n      "cost": 0.0,\n      "bought": false,\n      "qty": 3,\n      "bought_qty": 0,\n      "drug_upc": "0b7949396af3a5c03d68f22b267b0d85f5175b23f8533ad1ff261c0d5bd5191e",\n      "order_id": 0,\n      "category": "standard_drug",\n      "qty_label": "A la discreci\xf3n del farmac\xe9utico(a)"\n    }\n  ],\n  "extras": "Indicaciones extras para el paciente u observaciones",\n  "signature": "c3096f28b4df5f19f04bcf39ba8cc0b81ce38068dd03a98c7eb37a8be38fdfd7", // <RX_ID>\n  "created_at": "2021-08-14",\n  "sent": null, // The API sent the email in async way, that means that the status will be update after some minutes\n  "send_rx": true,\n  "additional_data": {},\n  "show_diagnosis": true,\n  "rejected": false,\n  "bought": false,\n  "cta_link": "<BASE_URL>/r/4q" // Link that redirect the user to our patient landing, where can found an external service to get the medications\n}\n\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The important field is the ",(0,o.kt)("inlineCode",{parentName:"p"},"signature")," field and the status of the rx about bought medications. So you can see details of the prescription everytime using the ",(0,o.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/prescription"},"prescription detail endpoint")))),(0,o.kt)("h3",{id:"listening-webhooks"},"Listening webhooks"),(0,o.kt)("p",null,"The webhooks are important in cases where you have external services who need to know when a prescription is made by one of your medics."),(0,o.kt)("p",null,"You must define a POST Endpoint where we can send the information. And give us the list of the medics by email or the hospitals that you manage, so whenever a medic listed before made a prescription we send a post request to your webhook endpoint. "),(0,o.kt)("p",null,"Let's see an example:\nWe send to a Prescrypto admin the follow information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'HOSPITAL_ID_LIST = [<HOSPITAL_ID_01>, <HOSPITAL_ID_2>]\nMEDIC_ID_LIST = [<MEDIC_ID>, <MEDIC_EMAIL>]\nWEBHOOOK_URL = "<MY_SITE_DOMAIN><WEBHOOK_PATH_URL>"\n\n')),(0,o.kt)("p",null,"We validate that the hospitals and medics exists, besides the webhook has allowed POST requests."),(0,o.kt)("p",null,"Then whenever a prescription is made from that list of users, we sent to your webhook the follow information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    signature: "<SIGNATURE_ID>"\n}\n\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"So you can hit the prescription ",(0,o.kt)("a",{parentName:"p",href:"/prescrypto-docs/docs/api/prescription"},"detail view")," or do whatever your bussiness logic need")),(0,o.kt)("h2",{id:"management-memberships"},"Management Memberships"),(0,o.kt)("p",null,"Below we can see the main use cases to start using the membership endpoints. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Base Models Diagram",src:n(1761).Z})),(0,o.kt)("p",null,"Let's see the Prescrypto API endpoints about to manage the memberships."),(0,o.kt)("h3",{id:"see-list-of-memberships-that-admin-user-can-manage"},"See list of memberships that admin user can manage"),(0,o.kt)("p",null,"As you can see in the above diagram, the membership is the model object that act as union between medic and hospital, you can register new medics to a hospital creating a membership, revoke permisions making a ",(0,o.kt)("inlineCode",{parentName:"p"},'"DELETE"')," request or modify between ",(0,o.kt)("inlineCode",{parentName:"p"},'"MEMBER"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"ADMIN"')," type of membership."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url <BASE>/api/v2/management/memberships/ \\\n  --header 'Authorization: Token <ADMIN_TOKEN>' \\\n  --header 'Content-Type: application/json' \\\n\n")),(0,o.kt)("p",null,"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "count": 2, // Number of memberships found\n  "next": null,\n  "previous": null,\n  "results": [\n    {\n      "id": 1,\n      "medic": {\n        "id": 1,\n        "email": "test.1@email.com",\n        "name": "Medic TEST 01"\n      },\n      "hospital": <HOSPITAL_ID_01>,\n      "type_membership": "ADMIN",\n      "is_active": true,\n      "is_deleted": false,\n      "date_joined": "2019-06-21T17:00:09.472000Z"\n    },\n    {\n      "id": <MEMBERSHIP_ID>,\n      "medic": {\n        "id": <MEDIC_ID>,\n        "email": "<MEDIC_EMAIL>",\n        "name": "<MEDIC_NAME>"\n      },\n      "hospital": <HOSPITAL_ID_02>,\n      "type_membership": "<MEMBER_OR_ADMIN>",\n      "is_active": true,   // Means the hospital is the currect active hospital with the user\n      "is_deleted": false, // whether the user can use the location or not\n      "date_joined": "2019-06-21T17:00:21.424000Z"\n    }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"TIP: Don't forget the  ",(0,o.kt)("inlineCode",{parentName:"p"},"MEMBERSHIP_ID")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"MEDIC_ID"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"HOSPITAL_ID")," these are the most important fields in this section"))),(0,o.kt)("h3",{id:"see-list-of-memberships-from-one-hospital"},"See list of memberships from one hospital"),(0,o.kt)("p",null,"Other use of case is when a medic admin only wants to see the memberships by hospital. Let's see one example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url <BASE>/api/v2/memberships/<HOSPITAL_ID>/ \\\n  --header 'Authorization: Token <TOKEN>' \\\n  --header 'Content-Type: application/json' \\\n\n")),(0,o.kt)("p",null,"Response "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' [\n    {\n      "id": <MEMBERSHIP_ID>,\n      "medic": {\n        "id": <MEDIC_ID>,\n        "email": "<MEDIC_EMAIL>",\n        "name": "<MEDIC_NAME>"\n      },\n      "hospital": <HOSPITAL_ID>,\n      "type_membership": "<MEMBER_OR_ADMIN>",\n      "is_active": true,   // Means the hospital is the currect active hospital with the user\n      "is_deleted": false, // whether the user can use the location or not\n      "date_joined": "2019-06-21T17:00:21.424000Z"\n    }\n]\n')),(0,o.kt)("p",null,"For example you can see this list when enter to edit a hospital, a hit to the hospital and other for the list of memberships inside are requested."),(0,o.kt)("h3",{id:"search-a-medic-to-use-the-medic-id"},"Search a medic to use the medic id"),(0,o.kt)("p",null,"For almost all interaction with memberships, looking for a medic id could be tedious. For that reason, the endpoint search medic could be useful, let's see the example:"),(0,o.kt)("p",null,"Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --request GET \\\n  --url '<BASE>/api/v2/search/medics/?query=<EMAIL>' \\\n  --header 'Authorization: Token  <TOKEN>' \\\n  --header 'Content-Type: application/json' \\\n\n")),(0,o.kt)("p",null,"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "count": 1,\n  "next": null,\n  "previous": null,\n  "results": [\n    {\n      "id": 25,\n      "email": "<EMAIL>"\n    }\n  ]\n}\n\n')),(0,o.kt)("p",null,"Note that the response could be 200 okay but not founded any match, the response will be as follow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "count": 0,\n  "next": null,\n  "previous": null,\n  "results": []\n}\n')),(0,o.kt)("h3",{id:"create-a-membership"},"Create a membership"),(0,o.kt)("p",null,"As part of the flow, creating memberships will require at least the medic id, hospital id, and what type of membership.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"is_active"),' field will require a specific endpoint to update it. Please see the next section "Set as default hospital"'),(0,o.kt)("p",null,"Create membership request example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "hospital": <HOSPITAL_ID>,\n  "type_membership": "<ADMIN or MEMBER>",\n  "medic": <MEDIC_ID>\n}\n\n')),(0,o.kt)("p",null,"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# status 201 created\n\n{\n  "medic": <MEDIC_ID>,\n  "type_membership": "<ADMIN or MEMBER>"\n}\n\n')),(0,o.kt)("p",null,"Although chances are that the medic has already a membership on the hospital selected.\nWe catch that flow and still return the 201 created, but reactivating the membership with the field ",(0,o.kt)("inlineCode",{parentName:"p"},"is_deleted=false")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only your management hospitals are allowed to create new memberships ")),(0,o.kt)("h3",{id:"set-as-default-hospital"},"Set as default hospital"),(0,o.kt)("p",null,"Creating more than one memberships for a medic means that the medic has to select what location is the current or active hospital, using the following endpoint is the best aproach, othwerwise, you must change all the medic memberships ",(0,o.kt)("inlineCode",{parentName:"p"},"is_active=false")," and the active membership change it to ",(0,o.kt)("inlineCode",{parentName:"p"},"is_active=true"),". This endpoint made that, let's see the example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --request PATCH \\\n  --url <BASE>/api/v2/locations/update/ \\\n  --header 'Authorization: Token <MEDIC_TOKEN> ' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n  \"hospital_id\": <HOSPITAL_ID>\n}'\n")),(0,o.kt)("p",null,"Response "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# status code 200\n{\n  "message": "HOSPITAL UPDATE SUCCESSFULLY"\n}\n')),(0,o.kt)("p",null,"If the medic has not membership on that hospital a 404 status code will be the response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# status code 404\n{\n  "message": "HOSPITAL UPDATE SUCCESSFULLY"\n}\n')),(0,o.kt)("h3",{id:"modify-memberships"},"Modify memberships"),(0,o.kt)("p",null,"The important fields to change are, ",(0,o.kt)("inlineCode",{parentName:"p"},"type_of_membership"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"medic")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"hospital"),".\nSo you have to store these values before proceed to change the membership, also the <MEMBERSHIP_ID>"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only your management memberships are allowed to modify , Let's see an example:")),(0,o.kt)("p",null,"Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --request PATCH \\\n  --url <BASE>/api/v2/management/memberships/<MEMBERSHIP_ID>/ \\\n  --header 'Authorization: Token <ADMIN_TOKEN>' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n      \"type_membership\": \"MEMBER\"\n}'\n\n")),(0,o.kt)("p",null,"Response 200 OK"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "id": <MEMBERSHIP_ID>,\n  "medic": {\n    "id": <MEDIC_ID>,\n    "name": "<MEDIC_NAME",\n    "email": "<MEDIC_EMAIL>"\n  },\n  "hospital": <HOSPITAL_ID>,\n  "type_membership": "MEMBER",\n  "is_active": false,\n  "is_deleted": false,\n  "date_joined": "2021-07-21T21:43:41.315975Z"\n}\n\n')),(0,o.kt)("h3",{id:"delete-or-remove-memberships"},"Delete or remove memberships"),(0,o.kt)("p",null,"There is a way to elimitate a membership, using this endpoint but this will be as a soft delete. That means that the ",(0,o.kt)("inlineCode",{parentName:"p"},'"is_deleted"')," field will be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". Let's see the example"),(0,o.kt)("p",null,"Request "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --request DELETE \\\n  --url <BASE>/api/v2/management/memberships/<MEMBERSHIP_ID>/ \\\n  --header 'Authorization: Token <ADMIN_TOKEN>' \\\n  --header 'Content-Type: application/json'\n")),(0,o.kt)("p",null,"Response HTTP_204_NO_CONTENT"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Notice that the response is empty, but the status code is ",(0,o.kt)("em",{parentName:"p"},"204"))))}c.isMDXComponent=!0},2687:function(e,t,n){t.Z=n.p+"assets/images/base_models-96f2894b12e87d796c0ba09589a13056.png"},1761:function(e,t,n){t.Z=n.p+"assets/images/membership_diagram-bab15d8d1ca1d5af7d940d347a540cd4.png"}}]);