(function(t){function e(e){for(var a,i,c=e[0],o=e[1],u=e[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={website:0},s={website:0},r=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2ad7443f":"f3f2476a","chunk-58e8b003":"70dd8b97","chunk-58e915ba":"d2c2dd23","chunk-58fef8a9":"ace28fc5","chunk-58ffc4f3":"ebe865e3","chunk-7898d3c2":"7d5f2ef6","chunk-08ad7502":"bc0be142","chunk-538b791a":"c8c0b74d","chunk-c0a7a86e":"bc328a7b","chunk-f6042272":"66c545fc","chunk-0b4d9f40":"b0792419","chunk-186d04d4":"aa07d183","chunk-2d0a3fdd":"64788bd0","chunk-2d0abbc2":"abbc2725","chunk-2d0c87e9":"7010dd47","chunk-2d0d317f":"a54b2c51","chunk-2d0e266d":"14630f0e","chunk-2d0e8bf0":"bd7c2948","chunk-2d20ec1e":"cd96d098","chunk-2d216218":"60bde7a1","chunk-2d21b107":"e2032d42","chunk-4e12c96b":"a847acfb","chunk-6c8bd5fa":"79127e67","chunk-6d6b7180":"b07ef995","chunk-8b0e279e":"3100c332","chunk-2d230a39":"488e79c6","chunk-80da9898":"4ea1638b"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-2ad7443f":1,"chunk-08ad7502":1,"chunk-538b791a":1,"chunk-c0a7a86e":1,"chunk-f6042272":1,"chunk-186d04d4":1,"chunk-4e12c96b":1,"chunk-6d6b7180":1,"chunk-8b0e279e":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2ad7443f":"b53b4043","chunk-58e8b003":"31d6cfe0","chunk-58e915ba":"31d6cfe0","chunk-58fef8a9":"31d6cfe0","chunk-58ffc4f3":"31d6cfe0","chunk-7898d3c2":"31d6cfe0","chunk-08ad7502":"0fe94c4b","chunk-538b791a":"eca096df","chunk-c0a7a86e":"38b45c62","chunk-f6042272":"68e6a77c","chunk-0b4d9f40":"31d6cfe0","chunk-186d04d4":"e266095d","chunk-2d0a3fdd":"31d6cfe0","chunk-2d0abbc2":"31d6cfe0","chunk-2d0c87e9":"31d6cfe0","chunk-2d0d317f":"31d6cfe0","chunk-2d0e266d":"31d6cfe0","chunk-2d0e8bf0":"31d6cfe0","chunk-2d20ec1e":"31d6cfe0","chunk-2d216218":"31d6cfe0","chunk-2d21b107":"31d6cfe0","chunk-4e12c96b":"65692769","chunk-6c8bd5fa":"31d6cfe0","chunk-6d6b7180":"17b9da0b","chunk-8b0e279e":"2c658a13","chunk-2d230a39":"31d6cfe0","chunk-80da9898":"31d6cfe0"}[t]+".css",s=o.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],f.parentNode.removeChild(f),n(r)},f.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){i[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/webapp/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;r.push([1,"chunk-vendors","chunk-common"]),n()})({"0d19":function(t,e,n){},1:function(t,e,n){n("c37e"),t.exports=n("53c6")},1408:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-section-heading",class:t.classes},[t.icon?n("base-avatar",{staticClass:"mb-4",attrs:{icon:t.icon,outlined:t.outlined,color:"primary",dark:""}}):t._e(),t.subtitle?n("base-subtitle",{attrs:{title:t.subtitle,space:"1",tag:"h2"}}):t._e(),t.title?n("base-subheading",{staticClass:"text-uppercase",attrs:{align:t.align,title:t.title,space:"2"}}):t._e(),n("base-divider",{attrs:{color:t.color}}),t.$slots.default||t.text?n("base-body",{staticClass:"mx-auto",attrs:{"max-width":"700"}},[t.$slots.default?t._t("default"):[t._v(" "+t._s(t.text)+" ")]],2):t._e()],1)},i=[],s=(n("a9e3"),n("4b4f")),r={name:"BaseSectionHeading",mixins:[s["a"]],props:{align:{type:String,default:"center"},color:{type:String,default:"primary"},icon:String,outlined:Boolean,space:{type:[Number,String],default:12},subtitle:String,text:String,title:String},computed:{classes:function(){return["text-".concat(this.align),"mb-".concat(this.space)]}}},c=r,o=n("2877"),u=Object(o["a"])(c,a,i,!1,null,null,null);e["default"]=u.exports},1707:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-2",class:t.classes},[t.icon?n("base-avatar",{staticClass:"mb-3",attrs:{color:t.color,dark:t.dark,icon:t.icon,outlined:t.outlined,size:t.size}}):t._e(),n("div",{class:t.horizontal&&t.title&&"ml-6"},[n("base-title",{staticClass:"text-uppercase",attrs:{title:t.title,space:"3"}}),t.text||t.$slots.default?n("base-body",{staticClass:"mx-auto",attrs:{space:t.horizontal?0:void 0,text:t.text,"max-width":"700"}},[t._t("default")],2):t._e()],1)],1)},i=[],s=(n("a9e3"),n("4b4f")),r={name:"BaseAvatarCard",mixins:[s["a"]],props:{align:{type:String,default:"left"},color:String,dark:Boolean,horizontal:Boolean,icon:String,outlined:{type:Boolean,default:!0},space:{type:[Number,String],default:8},size:{type:[Number,String],default:72},text:String,title:String},computed:{classes:function(){var t=["mb-".concat(this.space)];return this.horizontal&&(t.push("d-flex"),this.$slots.default||this.text||t.push("align-center")),t}}},c=r,o=n("2877"),u=Object(o["a"])(c,a,i,!1,null,null,null);e["default"]=u.exports},"190c":function(t,e,n){t.exports=n.p+"img/about.3946684e.jpg"},"1cfc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",t._g(t._b({staticClass:"font-weight-bold",attrs:{color:t.color,depressed:t.depressed,"min-width":t.minWidth,tile:t.tile,"x-large":""}},"v-btn",t.$attrs,!1),t.$listeners),[t._t("default")],2)},i=[],s=(n("a9e3"),{name:"BaseBtn",props:{color:{type:String,default:"primary"},depressed:{type:Boolean,default:!0},minWidth:{type:[Number,String],default:164},tile:{type:Boolean,default:!0}}}),r=s,c=n("2877"),o=n("6544"),u=n.n(o),l=n("8336"),d=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=d.exports;u()(d,{VBtn:l["a"]})},"1f4d":function(t,e,n){"use strict";n("23b4")},2152:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-avatar d-inline-flex",class:t.classes},[t.outlined?n("v-avatar",{staticClass:"base-avatar__outline",staticStyle:{opacity:".4"},style:t.styles,attrs:{color:t.color||"grey lighten-3",size:t.outlineSize}}):t._e(),n("v-avatar",t._g(t._b({staticClass:"base-avatar__avatar",attrs:{color:t.color||"white",size:t.size}},"v-avatar",t.$attrs,!1),t.$listeners),[t.icon?n("base-icon",{attrs:{dark:t.dark,size:t.size/2}},[t._v(" "+t._s(t.icon)+" ")]):t._e()],1)],1)},i=[],s=(n("a9e3"),n("99af"),{name:"BaseAvatar",props:{color:String,dark:Boolean,icon:String,outlined:Boolean,size:{type:[Number,String],default:56}},data:function(){return{multiply:6}},computed:{classes:function(){return[this.outlined&&"base-avatar--outlined"]},outlineSize:function(){return Number(this.size)+this.size/this.multiply},styles:function(){var t=this.size/(2*this.multiply);return{margin:"-".concat(t,"px 0 0 -").concat(t,"px")}}}}),r=s,c=(n("1f4d"),n("2877")),o=n("6544"),u=n.n(o),l=n("8212"),d=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=d.exports;u()(d,{VAvatar:l["a"]})},"23b4":function(t,e,n){},"23c0":function(t,e,n){"use strict";n("ce7c")},"26da":function(t,e,n){t.exports=n.p+"img/contact.68e57a91.jpg"},"305c":function(t,e,n){t.exports=n.p+"img/pro.4393142f.jpg"},"35e7":function(t,e,n){},"381b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",t._g(t._b({style:t.styles},"section",t.$attrs,!1),t.$listeners),[t._t("default")],2)},i=[],s=n("5530"),r=(n("a9e3"),n("24b2")),c={name:"BaseSection",mixins:[r["a"]],props:{space:{type:[Number,String],default:96}},computed:{styles:function(){var t=this.$vuetify.breakpoint.mdAndUp?this.space:this.space/2;return Object(s["a"])(Object(s["a"])({},this.measurableStyles),{},{padding:"".concat(t,"px 0")})}}},o=c,u=n("2877"),l=Object(u["a"])(o,a,i,!1,null,null,null);e["default"]=l.exports},3964:function(t,e,n){"use strict";n.r(e);var a,i,s=n("421e"),r={name:"BaseTitle",extends:s["default"],props:{size:{type:String,default:"headline"},sizeMobile:{type:String,default:"title"},weight:{type:String,default:"bold"}}},c=r,o=n("2877"),u=Object(o["a"])(c,a,i,!1,null,null,null);e["default"]=u.exports},"3e4c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-theme-provider",{attrs:{dark:t.dark}},[n("div",[n("base-info-card",{attrs:{pace:"6",title:"KEEP IN TOUCH WITH US"}},[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere. ")]),n("base-business-contact",{attrs:{dense:""}})],1)])},i=[],s=n("5530"),r=n("2f62"),c={name:"BaseBusinessInfo",props:{dark:Boolean},computed:Object(s["a"])({},Object(r["c"])({business:"website/business"}))},o=c,u=n("2877"),l=n("6544"),d=n.n(l),f=n("480e"),h=Object(u["a"])(o,a,i,!1,null,null,null);e["default"]=h.exports;d()(h,{VThemeProvider:f["a"]})},"421e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,t._g(t._b({tag:"component",class:t.classes},"component",t.$attrs,!1),t.$listeners),[t.title?[t._v(" "+t._s(t.title)+" ")]:t._t("default")],2)},i=[],s=(n("a9e3"),{name:"BaseHeading",inject:{theme:{default:function(){return{isDark:!1}}},heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}},dense:{type:Boolean,default:function(){return this.isDense}},size:{type:String,default:"display-2"},space:{type:[Number,String],default:4},mobileSize:{type:String,default:"display-1"},mobileBreakPoint:{type:[Number,String],default:768},tag:{type:String,default:"h1"},title:String,weight:{type:String,default:"black"}},computed:{classes:function(){var t=[this.fontSize,"font-weight-".concat(this.weight),"mb-".concat(this.space),"text-".concat(this.align),this.theme.isDark&&"white--text"];return t},fontSize:function(){return this.$vuetify.breakpoint.width>=this.mobileBreakPoint?this.size:this.mobileSize}}}),r=s,c=n("2877"),o=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=o.exports},"4b4f":function(t,e,n){"use strict";e["a"]={name:"Heading",inject:{heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}}},computed:{justify:function(){switch(this.align){case"center":return"center";case"right":return"end";default:return"start"}}}}},"4c09":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-theme-provider",{attrs:{dark:t.dark}},[n("v-container",{staticClass:"pa-0"},[n("v-row",{attrs:{justify:t.justify,"no-gutters":""}},[t.icon?n("v-col",{staticClass:"mb-4",class:"text-"+t.align,attrs:{cols:"12"}},[n("base-icon",{attrs:{color:t.color}},[t._v(" "+t._s(t.icon)+" ")])],1):t._e(),t.title||t.subtitle?n("v-col",{attrs:{cols:t.callout?9:12}},[t.subtitle?n("base-subtitle",{attrs:{title:t.subtitle,space:"1"}}):t._e(),n("base-title",{staticClass:"text-uppercase",attrs:{title:t.title,space:"1"}}),n("base-divider",{attrs:{color:t.color}}),t.text||t.$slots.default?n("base-body",{attrs:{text:t.text,space:"6"}},[t._t("default")],2):t._e()],1):t._e(),t.callout?n("v-col",{attrs:{cols:"2"}},[n("div",{staticClass:"display-3 grey--text text--lighten-4 font-weight-bold pr-8",domProps:{textContent:t._s(t.callout)}})]):t._e()],1)],1)],1)},i=[],s=n("4b4f"),r={name:"BaseInfoCard",mixins:[s["a"]],props:{dark:Boolean,callout:String,color:{type:String,default:"primary"},icon:String,subtitle:String,text:String,title:String}},c=r,o=n("2877"),u=n("6544"),l=n.n(u),d=n("62ad"),f=n("a523"),h=n("0fd9"),p=n("480e"),b=Object(o["a"])(c,a,i,!1,null,null,null);e["default"]=b.exports;l()(b,{VCol:d["a"],VContainer:f["a"],VRow:h["a"],VThemeProvider:p["a"]})},"4c3e":function(t,e,n){},"4e61":function(t,e,n){"use strict";n("6f1f")},"4fcb":function(t,e,n){"use strict";n.r(e);var a,i,s=n("421e"),r=n("4b4f"),c={name:"BaseTitle",extends:s["default"],mixins:[r["a"]],props:{size:{type:String,default:"title"},mobileSize:{type:String,default:"subtitle-1"},tag:{type:String,default:"h3"},weight:{type:String,default:"bold"}}},o=c,u=n("2877"),l=Object(u["a"])(o,a,i,!1,null,null,null);e["default"]=l.exports},"53c6":function(t,e,n){},"658f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-info-card",{attrs:{subtitle:t.subtitle,title:t.title,color:"primary",space:"4"}}),n("base-text-field",{attrs:{label:"Name"}}),n("base-text-field",{attrs:{label:"Email"}}),n("base-text-field",{attrs:{label:"Subject"}}),n("base-textarea",{staticClass:"mb-6",attrs:{label:"Your Need & Description"}}),n("base-btn",{attrs:{color:t.theme.isDark?"white":"accent",href:"mailto:nghiennet89@gmail.com?subject=Latify Question",outlined:"",target:"_blank"}},[t._v(" Send message ")])],1)},i=[],s={name:"BaseContactForm",inject:["theme"],props:{subtitle:String,title:{type:String,default:"MAIL US YOUR MESSAGE"}}},r=s,c=n("2877"),o=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=o.exports},"6f1f":function(t,e,n){},"74a7":function(t,e,n){},"7b3d":function(t,e,n){"use strict";n("74a7")},"7d24":function(t,e,n){"use strict";n("0d19")},"80dc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-theme-provider",{attrs:{dark:t.dark}},[n("div",[n("div",{staticClass:"app-name dark"},[t._v(" "+t._s(t.appName)+" ")]),n("base-title",{attrs:{size:"body-1",space:"4",title:"Web application base on laravel & vuetify",weight:"regular"}}),n("base-body",[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate. Nulla minus voluptatum nostrum deleniti, asperiores facere. ")]),n("base-btn",{staticClass:"mb-12",attrs:{color:"white",outlined:""}},[t._v(" More Info ")])],1)])},i=[],s=n("5530"),r=n("9b43"),c=n("2f62"),o={name:"BaseInfo",props:{title:String,dark:Boolean},data:function(){return{appName:r["appName"]}},computed:Object(s["a"])({},Object(c["c"])({business:"website/business"}))},u=o,l=n("2877"),d=n("6544"),f=n.n(d),h=n("480e"),p=Object(l["a"])(u,a,i,!1,null,null,null);e["default"]=p.exports;f()(p,{VThemeProvider:h["a"]})},"8e55":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,t._g(t._b({tag:"component",staticClass:"base-body body-1",class:t.classes,style:t.styles},"component",t.$attrs,!1),t.$listeners),[t.text?n("div",{domProps:{textContent:t._s(t.text)}}):t.html?n("div",{domProps:{innerHTML:t._s(t.html)}}):t._t("default")],2)},i=[],s=(n("a9e3"),n("4b4f")),r={name:"BaseBody",mixins:[s["a"]],inject:["theme"],props:{html:String,maxWidth:{type:[Number,String],default:void 0},space:{type:[Number,String],default:10},tag:{type:String,default:"p"},text:String},computed:{classes:function(){return["grey--text",this.theme.isDark?"text--lighten-1":"text--darken-1","text-".concat(this.heading.align),"mb-".concat(this.space)]},styles:function(){return{maxWidth:"".concat(this.maxWidth,"px")}}}},c=r,o=n("2877"),u=Object(o["a"])(c,a,i,!1,null,null,null);e["default"]=u.exports},"8e5d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-textarea",t._g(t._b({attrs:{dense:"",outlined:"","single-line":""}},"v-textarea",Object.assign({},{rows:6},t.$attrs),!1),t.$listeners))},i=[],s={name:"BaseTextarea"},r=s,c=(n("4e61"),n("2877")),o=n("6544"),u=n.n(o),l=n("a844"),d=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=d.exports;u()(d,{VTextarea:l["a"]})},"97b0":function(t,e,n){"use strict";n("97ed")},"97ed":function(t,e,n){},"9b0a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-icon",t._g(t._b({attrs:{size:t.size}},"v-icon",t.$attrs,!1),t.$listeners),[t._t("default")],2)},i=[],s=(n("a9e3"),{name:"BaseIcon",props:{size:{type:[Number,String],default:56}}}),r=s,c=n("2877"),o=n("6544"),u=n.n(o),l=n("132d"),d=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=d.exports;u()(d,{VIcon:l["a"]})},a654:function(t,e,n){"use strict";n("4c3e")},aab1:function(t,e,n){var a={"./Avatar.vue":"2152","./AvatarCard.vue":"1707","./Body.vue":"8e55","./Btn.vue":"1cfc","./BusinessContact.vue":"fdee","./BusinessInfo.vue":"3e4c","./Card.vue":"d796","./ContactForm.vue":"658f","./Divider.vue":"c971","./Heading.vue":"421e","./Icon.vue":"9b0a","./Img.vue":"dbeb","./Info.vue":"80dc","./InfoCard.vue":"4c09","./Section.vue":"381b","./SectionHeading.vue":"1408","./Subheading.vue":"3964","./Subtitle.vue":"b154","./TextField.vue":"eb90","./Textarea.vue":"8e5d","./Title.vue":"4fcb"};function i(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=s,t.exports=i,i.id="aab1"},b154:function(t,e,n){"use strict";n.r(e);var a,i,s=n("2909"),r=(n("a9e3"),n("99af"),n("421e")),c={name:"BaseSubtitle",extends:r["default"],props:{size:{type:String,default:"body-2"},mobileSize:{type:String,default:"body-1"},space:{type:[String,Number],default:0},tag:{type:String,default:"div"},weight:{type:[Number,String],default:"regular"}},computed:{classes:function(){return[].concat(Object(s["a"])(r["default"].computed.classes.call(this)),["grey--text"])}}},o=c,u=n("2877"),l=Object(u["a"])(o,a,i,!1,null,null,null);e["default"]=l.exports},c37e:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("f5df1"),n("bf40"),n("d5e8"),n("39bd");var a=n("2b0e"),i=n("bc3a"),s=n.n(i),r=n("a7fe"),c=n.n(r),o=n("a65d"),u=n.n(o),l=n("2b27"),d=n.n(l),f=n("8a9b"),h=n.n(f),p=n("9b43"),b=n.n(p),m=n("587c"),v=n("5cff"),g=n("f309"),y=n("62ad"),_=n("0fd9");a["a"].use(g["a"],{components:{VCol:y["a"],VRow:_["a"]}});var S=new g["a"]({theme:{dark:!1,themes:{light:{primary:"#42a5f6",secondary:"#050b1f",accent:"#204165"},dark:{}}}}),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view",{ref:"content"})],1),n("SiteNotice")],1)},x=[],w=n("5530"),O=(n("b0c0"),n("2f62")),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span")},N=[],C=n("5638"),j={name:"SiteNotice",data:function(){return{toastShowing:0,echo:null}},computed:Object(w["a"])(Object(w["a"])({},Object(O["c"])({notices:"system/notices",serverNotifications:"serverNotifications",authenticatedUser:"user/authenticatedUser"})),{},{authenticatedUserId:function(){return this.authenticatedUser?this.authenticatedUser.id:null},isEchoConnected:function(){return this.echo&&null!==this.echo.connector.pusher.connection.connection},notifyIcon:function(){return"mdi-bell"},notifyColor:function(){return"secondary"},notifyUnreadCount:function(){return this.serverNotifications.length>0?this.serverNotifications.length:""}}),methods:Object(w["a"])(Object(w["a"])({},Object(O["b"])({removeNotice:"system/removeNotice",gotServerNotification:"gotServerNotification"})),{},{showNotice:function(t){var e=this,n={className:"vue-toast-notices",duration:5759+579*this.toastShowing,action:{class:"action-close-toast v-icon mdi mdi-close",onClick:function(t,n){e.toastShowing-=1,n.goAway(0)}},onComplete:function(){return e.toastShowing-=1}};this.toastShowing+=1,t.type===b.a.CONSTANTS.NOTICE_TYPE.SUCCESS&&(n.type="success"),t.type===b.a.CONSTANTS.NOTICE_TYPE.ERROR&&(n.type="error"),t.type===b.a.CONSTANTS.NOTICE_TYPE.INFO&&(n.className+=" toast-info"),t.type===b.a.CONSTANTS.NOTICE_TYPE.WARNING&&(n.className+=" toast-warning"),this.$toasted.show(t.message,n),this.removeNotice(t)},registerEcho:function(){this.echo=new C["a"](Object(w["a"])(Object(w["a"])({},b.a.auth().pusher),{},{broadcaster:"pusher",forceTLS:!0,authEndpoint:"/broadcasting/auth",auth:{headers:{Authorization:null}}}))},connectEcho:function(){var t=this;this.echo||(this.registerEcho(),this.echo.connector.pusher.connection.bind("connected",(function(e){return t.bindChannels(e)})),this.echo.connector.pusher.connection.bind("disconnected",(function(){return t.disconnectEcho()}))),this.echo.connector.pusher.config.auth.headers.Authorization="Bearer "+this.$auth.token(),this.echo.connector.pusher.connect()},disconnectEcho:function(){this.echo&&this.echo.disconnect()},bindChannels:function(){var t=this;console.log("Echo: Bind channels"),this.echo.private("App.Entities.User."+this.authenticatedUserId).notification((function(e){return t.handleNotification(e)})),this.listenEvent("BaseEvent"),this.listenEvent("App\\Events\\BaseEvent")},listenEvent:function(t){var e=this;this.echo.private("App.Entities.User."+this.authenticatedUserId).listen(t,(function(n){e.handleEvent(t,n)}))},handleEvent:function(t,e){this.gotServerNotification({icon:"mdi-message",iconClass:"blue white--text",title:"New Event: "+t,subtitle:e,fullData:e,unread:!0}),this.noticeInfo(this.$t("notification.new"))},handleNotification:function(t){this.gotServerNotification({icon:"mdi-message",iconClass:"blue white--text",title:t.data.title?t.data.title:t.data,subtitle:t.created_at,fullData:t,unread:!0}),this.noticeInfo(this.$t("notification.new"))},onExplainNotificationsBox:function(){}}),watch:{notices:{handler:function(t){while(this.toastShowing<b.a.settings.maxNoticesDisplay&&t.length>0)this.showNotice(t.pop())},deep:!0},toastShowing:{handler:function(){while(this.toastShowing<b.a.settings.maxNoticesDisplay&&this.notices.length>0)this.showNotice(this.notices.pop())}},authenticatedUserId:{handler:function(t){return t?this.connectEcho():this.disconnectEcho()},deep:!0},isEchoConnected:{handler:function(t){return t?console.log("Echo: Connected"):console.log("Echo: Disconnected")}}},mounted:function(){this.authenticatedUserId&&!this.isEchoConnected&&this.connectEcho()}},$=j,B=(n("23c0"),n("2877")),T=Object(B["a"])($,E,N,!1,null,null,null),A=T.exports,z={name:"Site",metaInfo:{title:"App",titleTemplate:"%s | Latify",htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}]},data:function(){return{needUserMasterData:!0,watchUserAuth:null,initializing:!0}},components:{SiteNotice:A},computed:Object(w["a"])(Object(w["a"])({},Object(O["c"])({appLoading:"system/appLoading",notices:"system/notices"})),{},{_user:function(){return this.$auth.user()}}),methods:Object(w["a"])({},Object(O["b"])({loadMasterData:"loadMasterData",loadUserMasterData:"loadUserMasterData",setAuthenticatedUser:"user/setAuthenticatedUser"})),watch:{$route:{handler:function(t){if(!t||!t.matched||t.matched.length<1)return this.$router.push({name:"Page404"})}}},created:function(){var t=this;this.watchUserAuth=this.$watch("_user",(function(e){console.log("SET_AUTHENTICATED_USER",e),e&&e.id&&e.role_id?(t.setAuthenticatedUser(JSON.parse(JSON.stringify(e))),t.needUserMasterData=!1,t.loadUserMasterData().then((function(e){if(console.log("User's master data :",e),"Login"===t.$route.name)return t.$router.push({name:"Dashboard"})}))):t.setAuthenticatedUser(null)})),this.loadMasterData().then((function(t){console.log("Master data :",t)}))},updated:function(){var t=this;this.initializing&&this.$nextTick((function(){"undefined"!=typeof t.$refs.content&&(t.initializing=!1)}))}},I=z,U=(n("97b0"),n("a654"),n("7d24"),n("6544")),P=n.n(U),D=n("0789"),V=Object(B["a"])(I,k,x,!1,null,"45280931",null),M=V.exports;P()(V,{VFadeTransition:D["d"]});n("3ca3"),n("ddb0"),n("99af");var L=n("8c4f");a["a"].use(L["a"]);var R,W=[{path:"/",component:function(){return n.e("chunk-2ad7443f").then(n.bind(null,"9092"))},children:[{path:"",name:"Home",component:function(){return n.e("chunk-58e8b003").then(n.bind(null,"181e"))}},{path:"about",name:"About",component:function(){return n.e("chunk-58e915ba").then(n.bind(null,"244d"))},meta:{src:n("190c")}},{path:"contact-us",name:"Contact",component:function(){return n.e("chunk-58ffc4f3").then(n.bind(null,"d153"))},meta:{src:n("26da")}},{path:"features",name:"Features",component:function(){return n.e("chunk-58fef8a9").then(n.bind(null,"b7f2"))},meta:{src:n("305c")}},{path:"*",name:"Page404",component:function(){return n.e("chunk-7898d3c2").then(n.bind(null,"7bb0"))}}]}],H=new L["a"]({mode:"history",scrollBehavior:function(t,e,n){return t.hash?{selector:t.hash}:n||{x:0,y:0}},routes:[].concat(W)}),q=n("b85c"),F=(n("ac1f"),n("5319"),n("8103")),Y=n.n(F),J=n("bba4"),G=n.n(J),K=n("aab1"),X=Object(q["a"])(K.keys());try{for(X.s();!(R=X.n()).done;){var Q=R.value,Z=K(Q),tt=Q.replace(/index.js/,"").replace(/^\.\//,"").replace(/\.\w+$/,""),et=Y()(G()(tt));a["a"].component("Base".concat(et),Z.default||Z)}}catch(rt){X.e(rt)}finally{X.f()}var nt=n("58ca");a["a"].use(nt["a"],{refreshOnceOnNavigation:!0});var at=n("27d6"),it=n.n(at);it.a.load({google:{families:["PT+Sans:400,700&display=swap","Work+Sans:100,300,400,500,700,900&display=swap"]}}),window.VueComp||(window.VueComp={Others:[],Config:b.a}),window.Pusher=n("782e"),window._=n("2ef0");var st=document.getElementById("website");st&&(window.axios=s.a,window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",a["a"].use(c.a,window.axios),a["a"].axios.defaults.baseURL="/api",a["a"].use(u.a),a["a"].use(d.a),a["a"].mixin(v["a"]),a["a"].config.productionTip=!1,a["a"].router=H,a["a"].use(h.a,b.a.auth().VueAuth),window._VueWebApp=new a["a"]({router:H,store:m["a"],vuetify:S,render:function(t){return t(M)}}).$mount("#website"),s.a.interceptors.request.use((function(t){return window._VueWebApp.$store.dispatch("system/fireRequest",t),t}),(function(t){return window._VueWebApp.$store.dispatch("system/addResponse",t.response),Promise.reject(t)})),s.a.interceptors.response.use((function(t){return window._VueWebApp.$store.dispatch("system/addResponse",t),t}),(function(t){return window._VueWebApp.$store.dispatch("system/addResponse",t.response),Promise.reject(t)})))},c971:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-responsive",t._g(t._b({staticClass:"base-divider",class:t.classes,attrs:{"max-width":"28"}},"v-responsive",t.$attrs,!1),t.$listeners),[n("v-divider")],1)},i=[],s=(n("a9e3"),n("4b4f")),r={name:"BaseDivider",mixins:[s["a"]],props:{color:String,dense:Boolean,space:{type:[Number,String],default:6}},computed:{classes:function(){return[this.color,this.margin,"mb-".concat(this.space),this.dense&&"base-divider--dense"]},margin:function(){switch(this.align){case"left":return"mr-auto";case"right":return"ml-auto";default:return"mx-auto"}}}},c=r,o=(n("7b3d"),n("2877")),u=n("6544"),l=n.n(u),d=n("ce7e"),f=n("6b53"),h=Object(o["a"])(c,a,i,!1,null,null,null);e["default"]=h.exports;l()(h,{VDivider:d["a"],VResponsive:f["a"]})},ce7c:function(t,e,n){},d796:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",t._g(t._b({staticClass:"mb-4",attrs:{height:t.height,width:t.width,flat:"",tile:""},on:{click:function(e){return t.$emit("click")}}},"v-card",t.$attrs,!1),t.$listeners),[t._t("default")],2),t.title?n("base-title",{staticClass:"text-uppercase",attrs:{title:t.title,size:"subtitle-1",space:"0"}}):t._e(),t.subtitle?n("base-subtitle",{attrs:{title:t.subtitle}}):t._e()],1)},i=[],s=(n("a9e3"),{name:"BaseCard",inheritAttrs:!1,props:{height:[Number,String],width:[Number,String],subtitle:String,title:String}}),r=s,c=n("2877"),o=n("6544"),u=n.n(o),l=n("b0af"),d=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=d.exports;u()(d,{VCard:l["a"]})},d99c:function(t,e,n){"use strict";n("35e7")},dbeb:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-img",t._g(t._b({},"v-img",t.$attrs,!1),t.$listeners),[t._t("default")],2)},i=[],s={name:"BaseImage"},r=s,c=n("2877"),o=n("6544"),u=n.n(o),l=n("adda"),d=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=d.exports;u()(d,{VImg:l["a"]})},eb90:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-text-field",t._g(t._b({attrs:{dense:"",outlined:"","single-line":""}},"v-text-field",t.$attrs,!1),t.$listeners),[t._t("append-outer",null,{slot:"append-outer"})],2)},i=[],s={name:"BaseTextField"},r=s,c=(n("d99c"),n("2877")),o=n("6544"),u=n.n(o),l=n("8654"),d=Object(c["a"])(r,a,i,!1,null,null,null);e["default"]=d.exports;u()(d,{VTextField:l["a"]})},fdee:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-theme-provider",{attrs:{dark:t.dark}},[n("div",[n("base-info-card",{attrs:{title:t.title,color:"primary"}},[t._t("default")],2),t._l(t.business,(function(e,a){var i=e.icon,s=e.text,r=e.title;return[n("base-avatar-card",{key:a,attrs:{icon:i,outlined:!1,title:t.dense?void 0:r,color:"transparent",horizontal:"",space:"0"}},[n("div",{domProps:{innerHTML:t._s(s)}})]),a+1!==t.business.length?n("v-divider",{key:"divider-"+a,staticClass:"my-2"}):t._e()]}))],2)])},i=[],s=n("5530"),r=n("2f62"),c={name:"BaseBusinessContact",props:{dark:Boolean,dense:Boolean,title:String},computed:Object(s["a"])({},Object(r["c"])({business:"website/business"}))},o=c,u=n("2877"),l=n("6544"),d=n.n(l),f=n("ce7e"),h=n("480e"),p=Object(u["a"])(o,a,i,!1,null,null,null);e["default"]=p.exports;d()(p,{VDivider:f["a"],VThemeProvider:h["a"]})}});
//# sourceMappingURL=website.e730044c.js.map