(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e12c96b"],{"2bc5":function(t,e,s){"use strict";s("abd3");var i=s("1c87"),r=s("58df"),a=Object(r["a"])(i["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(t){const{tag:e,data:s}=this.generateRouteLink();return t("li",[t(e,{...s,attrs:{...s.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}}),n=s("80d2"),c=Object(n["h"])("v-breadcrumbs__divider","li"),d=s("7560");e["a"]=Object(r["a"])(d["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(c,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const t=[],e=!!this.$scopedSlots.item,s=[];for(let i=0;i<this.items.length;i++){const r=this.items[i];s.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(a,{key:s.join("."),props:r},[r.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render(t){const e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},"6ea8":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-theme-provider",{attrs:{dark:""}},[s("section",{attrs:{id:"hero-alt"}},[s("base-img",{attrs:{gradient:t.gradient,height:t.$vuetify.breakpoint.mdAndUp?350:225,src:t.src,color:"#45516b",flat:"","max-width":"100%",tile:""}},[t.title?s("v-row",{staticClass:"ma-0 fill-height text-center",attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("base-heading",{attrs:{title:t.title,space:"2",weight:"500"}}),s("base-divider",{attrs:{color:"primary",dense:""}}),s("v-breadcrumbs",{staticClass:"justify-center pa-0",attrs:{items:t.items,divider:">"}})],1)],1):t._e()],1)],1)])},r=[],a=(s("99af"),s("7bc6")),n={name:"SectionHeroAlt",metaInfo:function(){var t=this;return{changed:function(e){return t.title=e.titleChunk.toUpperCase()}}},provide:{heading:{align:"center"}},data:function(){return{title:""}},computed:{gradient:function(){var t="".concat(this.$vuetify.theme.themes.light.secondary,"CC"),e=Object(a["b"])(Object(a["a"])(t));return"to top, ".concat(e,", ").concat(e)},src:function(){return this.$route.meta.src},items:function(){return[{text:"HOME",to:"/"},{text:this.title}]}}},c=n,d=(s("9871"),s("2877")),o=s("6544"),l=s.n(o),u=s("2bc5"),h=s("62ad"),m=s("0fd9"),b=s("480e"),p=Object(d["a"])(c,i,r,!1,null,null,null);e["default"]=p.exports;l()(p,{VBreadcrumbs:u["a"],VCol:h["a"],VRow:m["a"],VThemeProvider:b["a"]})},"6ecd":function(t,e,s){},9871:function(t,e,s){"use strict";s("6ecd")},abd3:function(t,e,s){}}]);
//# sourceMappingURL=chunk-4e12c96b.a847acfb.js.map