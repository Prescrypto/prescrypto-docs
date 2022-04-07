"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[581],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1754:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},p="Deeplink",s={unversionedId:"deeplink/deeplink",id:"deeplink/deeplink",title:"Deeplink",description:"This method consists of generating a link with params in order to send a medic from external services to the authenticated Prescrypto App with the prescription form auto-filled",source:"@site/docs/deeplink/deeplink.md",sourceDirName:"deeplink",slug:"/deeplink/",permalink:"/prescrypto-docs/docs/deeplink/",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Webhooks",permalink:"/prescrypto-docs/docs/api/webhooks"},next:{title:"Overview",permalink:"/prescrypto-docs/docs/deeplink/overview"}},c=[],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deeplink"},"Deeplink"),(0,i.kt)("p",null,"This method consists of generating a link with params in order to send a medic from external services to the authenticated Prescrypto App with the prescription form auto-filled"),(0,i.kt)("p",null,"The params specifications are below"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"i.e."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"token (required)"),(0,i.kt)("td",{parentName:"tr",align:null},"Belongs to the medic who will be authenticated"),(0,i.kt)("td",{parentName:"tr",align:null},"$token={{TOKEN}}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v2_redirect (required)"),(0,i.kt)("td",{parentName:"tr",align:null},"This param will bring your medic to the version 2 of Prescrypto, the newest version at the moment, if you avoid this param the medic will be redirected to the version 1 who it will be deprecated soon."),(0,i.kt)("td",{parentName:"tr",align:null},"$v2_redirect=true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"diagnosis"),(0,i.kt)("td",{parentName:"tr",align:null},"This is the text prescribed by the medic, if exists will be autofilled into the prescription form"),(0,i.kt)("td",{parentName:"tr",align:null},"$dianosis=A pill once per week")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"extras"),(0,i.kt)("td",{parentName:"tr",align:null},"It would be required if the integration sends patient info to autocomplete our prescription form. this field is compound by four params as following: patient_email,  patient_dob, patient_name, external_patient_file"),(0,i.kt)("td",{parentName:"tr",align:null},"&external_patient_file=0011R &patient_email=",(0,i.kt)("a",{parentName:"td",href:"mailto:some@mail.com"},"some@mail.com")," &patient_name=Miguel    &patient_dob=71")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"additional_data"),(0,i.kt)("td",{parentName:"tr",align:null},"This field is compound by any param your integrations would need, so you can allocate some extra data here and they will be saved in our Prescription Model"),(0,i.kt)("td",{parentName:"tr",align:null},"Some examples: $external_folio=1234 $external_medic_id=1234 $another_extra_field=Just like this")))),(0,i.kt)("p",null,"There is an example below with deeplink for autologin and autofill prescription:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"https://app.prescrypto.com/redirect/new/\n?external_patient_file=< EXTERNAL-ID>\n&patient_email=< EMAIL>\n&patient_name=< NAME>\n&patient_dob=< AGE(INT)>\n&token=< TOKEN>\n&diagnosis=< DIAGNOSIS>\n&v2_redirect=true\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT NOTE: All the param values have to be URI ENCODED, otherwise, the link could not work as expected")))}u.isMDXComponent=!0}}]);