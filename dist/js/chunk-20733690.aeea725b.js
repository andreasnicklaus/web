(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20733690"],{"89dd":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.getPageTitleClass()},[null!=t.background_image||null!=t.background_video?a("div",{staticClass:"background"},[null!=t.background_image?a("img",{attrs:{src:t.background_image,alt:t.background_image_alt}}):null!=t.background_video?a("video",{attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:t.background_video,type:"video/mp4"}})]):t._e()]):t._e(),a("div",{attrs:{id:"pagetitle-content"}},[t.no_back_arrow?t._e():a("router-link",{staticClass:"material-icons",attrs:{id:"back-arrow",to:t.back_arrow_goal?{name:t.back_arrow_goal}:t.back_link}},[a("ArrowLeftIcon",{attrs:{title:"go back",size:36}})],1),a("div",{class:t.getHeadingDivClass()},[a("hr"),a("h1",[t._v(t._s(this.title))]),a("hr")]),t.paragraph?a("p",[t._v(t._s(this.paragraph))]):t._e(),t._t("default"),void 0!==t.down_arrow_goal?a("a",{attrs:{id:"down-arrow",href:t.down_arrow_goal}},[a("ArrowDownIcon",{staticClass:"material-icons",attrs:{title:null,size:48}})],1):t._e()],2)])},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",t._b({staticClass:"material-design-icon arrow-left-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}},[t.title?a("title",[t._v(t._s(t.title))]):t._e()])])])},l=[],o=(a("a9e3"),{name:"ArrowLeftIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),s=o,c=a("2877"),u=Object(c["a"])(s,r,l,!1,null,null,null),g=u.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",t._b({staticClass:"material-design-icon menu-down-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[a("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M7,10L12,15L17,10H7Z"}},[t.title?a("title",[t._v(t._s(t.title))]):t._e()])])])},p=[],_={name:"MenuDownIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},m=_,w=Object(c["a"])(m,d,p,!1,null,null,null),b=w.exports,k={name:"PageTitle",components:{ArrowLeftIcon:g,ArrowDownIcon:b},props:{title:String,paragraph:String,back_arrow_goal:String,down_arrow_goal:String,no_back_arrow:Boolean,background_image:String,background_image_alt:String,background_video:String,miniature:Boolean},data:function(){return{back_link:window.previousUrl}},methods:{getHeadingDivClass:function(){var t="deco ",e="";return t+e},getPageTitleClass:function(){var t="page-title ",e=null!=this.background_image||null!=this.background_video?"backdrop-set ":"";return e+=this.miniature?"mini ":"",t+e}}},h=k,v=Object(c["a"])(h,i,n,!1,null,null,null);e["a"]=v.exports},a2e9:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"games"}},[a("PageTitle",{attrs:{title:"Games",miniature:t.miniature(),background_image:t.pageimg}},[a("Button",{attrs:{link:{name:"Civilization"},text:"WIP: Civilization",type:"inline"}}),a("Button",{attrs:{link:"http://github.com/andreasnicklaus/spyfall",text:"Spyfall",type:"inline"}}),a("Button",{attrs:{link:"http://github.com/andreasnicklaus/werewolves-dawn",text:"Werewolves Dawn",type:"inline"}}),a("Button",{attrs:{link:"http://github.com/andreasnicklaus/concept-game",text:"Concept",type:"inline"}})],1),a("router-view",{staticClass:"selectedGame"})],1)},n=[],r=a("89dd"),l=a("2a7d"),o=a("c9c3"),s=a.n(o),c={name:"Games",components:{Button:l["a"],PageTitle:r["a"]},metaInfo:{title:"Games - "},data:function(){return{pageimg:s.a}},methods:{miniature:function(){return"/games"!==this.$router.currentRoute.path}}},u=c,g=a("2877"),d=Object(g["a"])(u,i,n,!1,null,"bc1adc7c",null);e["default"]=d.exports},c9c3:function(t,e,a){t.exports=a.p+"img/pexels-switch.5723b002.jpg"}}]);
//# sourceMappingURL=chunk-20733690.aeea725b.js.map