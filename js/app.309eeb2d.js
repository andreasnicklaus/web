(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);m&&m(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0c25feeb":"b522ea61","chunk-20733690":"aeea725b","chunk-23e697c9":"53a207b9","chunk-3021f98b":"586ab91f","chunk-3458f2d4":"f4be5169","chunk-60386774":"eff64aa1","chunk-6fe43e46":"2f76e056","chunk-7fd8ce24":"da1977c6","chunk-ba35d23a":"3dde7cf9","chunk-be3927c6":"ddec6e60"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/web/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var m=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2a7d":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.link&&(e.link.name||e.link.startsWith("/"))?n("router-link",{attrs:{to:e.link}},[n("div",{class:"button "+(e.type?e.type:"")},[e._t("default"),e._v(" "+e._s(e.text)+" ")],2)]):e.link&&!e.link.startsWith("/")?n("a",{class:"button "+(e.type?e.type:""),attrs:{href:e.link}},[e._t("default"),e._v(" "+e._s(e.text)+" ")],2):n("div",{class:"button "+(e.type?e.type:""),attrs:{id:"non-link-button"}},[e._t("default"),e._v(" "+e._s(e.text)+" ")],2)},o=[],a={name:"Button",props:["text","link","type"]},i=a,c=n("2877"),u=Object(c["a"])(i,r,o,!1,null,null,null);t["a"]=u.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:this.theme,attrs:{id:"app"}},[n("MyHeader",{attrs:{theme:e.theme},on:{theme_change:e.changeTheme}}),n("router-view",{staticClass:"main"}),e.show_dp_overlay?n("DataProtectionOverlay",{on:{consent:e.consent}}):e._e(),n("MyFooter")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",[n("h3",[e._v("Topics")]),n("router-link",{attrs:{to:{name:"Games"}}},[e._v("Games")]),n("router-link",{attrs:{to:{name:"MyWork"}}},[e._v("My Work")])],1),n("div",[n("h3",[e._v("About")]),n("router-link",{attrs:{to:{name:"About"}}},[e._v("About")]),n("router-link",{attrs:{to:{name:"CV"}}},[e._v("My resumé")]),n("router-link",{attrs:{to:{name:"Imprint"}}},[e._v("Imprint")])],1)])},c=[],u={name:"MyFooter"},s=u,l=n("2877"),m=Object(l["a"])(s,i,c,!1,null,null,null),d=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"row between",attrs:{id:"header-content"}},[n("div",{staticClass:"row col-3 nowrap center"},[n("span",{attrs:{id:"menuicon"},on:{click:function(t){e.menuOpen=!e.menuOpen}}},[!1===e.menuOpen?n("MenuIcon",{attrs:{size:36}}):n("CloseIcon",{attrs:{size:36}})],1)]),n("div",{staticClass:"row col-3 nowrap center",attrs:{id:"center-head"}},[n("router-link",{attrs:{to:{name:"Home"},id:"page-name",title:"Asante sana squash Banana - Rafiki"}},[e._v("Andreas Nicklaus")])],1),n("div",{staticClass:"row right-sided col-3 nowrap center"},[n("ThemeLightDarkIcon",{staticClass:"material-icons clickable",attrs:{size:36,title:"Change the theme"},on:{click:function(t){return e.change_theme()}}}),n("span",{attrs:{id:"clock"}},[e._v(e._s(e.time))])],1)]),n("div",{class:e.getMenuClasses(),attrs:{id:"menu"}},[n("img",{attrs:{id:"profile-pic",alt:"Profile Picture of Andreas Nicklaus",src:e.profilePic}}),n("p",[e._v("Hi, I'm Andi 👋")]),n("nav",e._l([{link:"Home",name:"Home"},{link:"About",name:"About me"},{link:"MyWork",name:"My work"},{link:"Games",name:"Games"}],(function(t){return n("router-link",{key:t.name,attrs:{to:{name:t.link}},nativeOn:{click:function(t){e.menuOpen=!e.menuOpen}}},[e._v(e._s(t.name))])})),1)])])},f=[],p=n("6b08"),v=n("8aa8"),b=n("7eb5"),k=n("db76"),y=n.n(k),g={name:"MyHeader",props:["theme"],components:{ThemeLightDarkIcon:p["a"],MenuIcon:v["a"],CloseIcon:b["a"]},data:function(){return{timer:setInterval(this.update_time,1e3),time:"",menuOpen:!1,profilePic:y.a,get username(){return localStorage.getItem("username")}}},methods:{getMenuClasses:function(){return this.menuOpen?"open":"closed"},change_theme:function(){this.$emit("theme_change")},update_time:function(){var e=new Date;this.time=e.toLocaleTimeString("de-DE")}},destroyed:function(){this.timer=null}},_=g,w=Object(l["a"])(_,h,f,!1,null,null,null),O=w.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"data-protection"}},[n("div",{staticClass:"inset-box"},[n("div",{staticClass:"left"},[n("h1",[e._v("Usage data collection")]),n("span",[e._v(" When using this site, you agree with me collecting usage data. You can get more information "),n("router-link",{staticClass:"underline",attrs:{to:{name:"Imprint"}}},[e._v("here")]),e._v(". "),n("br"),e._v(" Additionally, I use cookies to store your authentication when you log in. "),n("br"),e._v(" You need to consent to get rid of this message. ")],1)]),n("Button",{attrs:{text:"Consent"},nativeOn:{click:function(t){return e.$emit("consent")}}})],1)])},A=[],P=n("2a7d"),M={name:"DataProtectionOverlay",components:{Button:P["a"]}},j=M,x=Object(l["a"])(j,C,A,!1,null,"020819fb",null),I=x.exports,S=n("d4ec"),T=n("bee2"),E=function(){function e(){Object(S["a"])(this,e)}return Object(T["a"])(e,[{key:"get",value:function(e){return localStorage.getItem(e)}},{key:"store",value:function(e,t){return localStorage.setItem(e,t)}},{key:"remove",value:function(e){return localStorage.removeItem(e)}}]),e}(),N=new E,D={name:"App",components:{DataProtectionOverlay:I,MyHeader:O,MyFooter:d},metaInfo:{titleTemplate:"%sAndreas Nicklaus",meta:[{name:"description",content:"Come take a look at my website and let me know how I'm doing! Come get to know me!"},{name:"author",content:"Andreas Nicklaus"},{name:"keywords",content:"Andreas Nicklaus, Nicklaus, About, Life, Skills, Job, Resume, CV, work, study, student, website, software developer, hobby"},{name:"author",content:"Andreas Nicklaus"}]},data:function(){return{theme:"light",show_dp_overlay:!0}},methods:{changeTheme:function(){"light"===this.theme?this.theme="dark":"dark"===this.theme&&(this.theme="light")},consent:function(){this.show_dp_overlay=!1,N.store("AcceptedDataProctection",!0)}},created:function(){var e=N.get("AcceptedDataProctection");e&&this.consent()}},H=D,$=(n("fb9f"),Object(l["a"])(H,o,a,!1,null,null,null)),W=$.exports,L=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),z=n("5f35");r["a"].use(L["a"]);var B=new L["a"]({mode:"history",base:z["publicPath"],routes:[{path:"/",name:"Home",component:function(){return n.e("chunk-7fd8ce24").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-3021f98b").then(n.bind(null,"f820"))}},{path:"/imprint",name:"Imprint",component:function(){return n.e("chunk-ba35d23a").then(n.bind(null,"5a7f"))}},{path:"/CV",name:"CV",component:function(){return n.e("chunk-3458f2d4").then(n.bind(null,"3f23"))}},{path:"/my-work",name:"MyWork",component:function(){return n.e("chunk-0c25feeb").then(n.bind(null,"9f8c"))}},{path:"/currency_converter",name:"CurrencyConverter",component:function(){return n.e("chunk-6fe43e46").then(n.bind(null,"60a4"))}},{path:"/games",name:"Games",component:function(){return n.e("chunk-20733690").then(n.bind(null,"a2e9"))},children:[{path:"civilization",name:"Civilization",component:function(){return n.e("chunk-60386774").then(n.bind(null,"9560"))}}]},{path:"/error",name:"BackendError",component:function(){return n.e("chunk-be3927c6").then(n.bind(null,"1b04"))}},{path:"/*",name:"404",component:function(){return n.e("chunk-23e697c9").then(n.bind(null,"8cdb"))}}]});B.beforeEach((function(e,t,n){window.previousUrl=t.path,n()}));var G=n("58ca");r["a"].use(G["a"],{refreshOnceOnNavigation:!0}),r["a"].config.productionTip=!1,new r["a"]({router:B,render:function(e){return e(W)}}).$mount("#app")},"5f35":function(e,t){e.exports={publicPath:"/web/",devServer:{port:12345,headers:{"Access-Control-Allow-Private-Network":!0,"Access-Control-Allow-Origin":"*"}}}},6630:function(e,t,n){},db76:function(e,t,n){e.exports=n.p+"img/AndreasNicklaus.1e4984f4.jpeg"},fb9f:function(e,t,n){"use strict";n("6630")}});
//# sourceMappingURL=app.309eeb2d.js.map