import{u as k,m as B,c as x}from"./links.b05f56db.js";import{s as a,_ as s}from"./default-i18n.3881921e.js";import{r as i,o as c,c as m,d as l,w as r,a as S,t as u,g as p,F as w,h as L,b as h,f as y}from"./vue.runtime.esm-bundler.b39e1078.js";import{_ as b}from"./_plugin-vue_export-helper.b97bdf23.js";import"./index.0eabb636.js";import{C as U}from"./Index.f7bbb33f.js";import"./constants.1758f66e.js";/* empty css                                              */import{C as P}from"./Blur.8cc39c73.js";import{C as M}from"./Card.c4f6abf5.js";import{C as N}from"./ProBadge.34da75c2.js";import{C as D}from"./SettingsRow.1adac8e2.js";import"./isArrayLikeObject.22a096cb.js";import"./Caret.164d8058.js";import"./Row.5242dafa.js";/* empty css                                            *//* empty css                                              */import"./Tooltip.6979830f.js";import"./Slide.cdf6c622.js";const e="all-in-one-seo-pack",V=()=>{const t={tooltip:a(s("By default, only users with an Administrator role have permission to manage %1$s within your WordPress admin area. With Access Controls, though, you can easily extend specific access permissions to other user roles.",e),"All in One SEO"),accessControl:s("Access Control Settings",e),useDefaultSettings:s("Use Default Settings",e)},o=[{label:s("Administrator",e),name:"administrator",description:a(s("By default Admins have access to %1$sall SEO site settings%2$s",e),"<strong>","</strong>")},{label:s("Editor",e),name:"editor",description:a(s("By default Editors have access to %1$sSEO settings for General Settings, Search Appearance, Social Networks, and Redirects as well as all settings for individual pages and posts.%2$s",e),"<strong>","</strong>")},{label:s("Author",e),name:"author",description:a(s("By default Authors have access to %1$sSEO settings for individual pages and posts that they already have permission to edit.%2$s",e),"<strong>","</strong>")},{label:s("Contributor",e),name:"contributor",description:a(s("By default Contributors have access to %1$sSEO settings for individual pages and posts that they already have permission to edit.%2$s",e),"<strong>","</strong>")},{label:s("SEO Manager",e),name:"seoManager",description:a(s("By default SEO Managers have access to %1$sSEO settings for General Settings, Sitemaps, Link Assistant, Redirects, Local SEO, and individual pages and posts.%2$s",e),"<strong>","</strong>")},{label:s("SEO Editor",e),name:"seoEditor",description:a(s("By default SEO Editors have access to %1$sSEO settings for individual pages and posts.%2$s",e),"<strong>","</strong>")}];return{strings:t,roles:o}},G={computed:{getRoles(){const t=k();return this.roles.concat(Object.keys(t.aioseo.user.customRoles).map(o=>({label:t.aioseo.user.roles[o],name:o,description:this.$t.sprintf(this.$t.__("By default the %1$s role %2$shas no access%3$s to %4$s settings.",this.$td),t.aioseo.user.roles[o],"<strong>","</strong>","All in One SEO"),dynamic:!0})))}}};const T={setup(){const{strings:t,roles:o}=V();return{composableStrings:t,roles:o}},components:{CoreBlur:P,CoreCard:M,CoreProBadge:N,CoreSettingsRow:D,Cta:U},mixins:[G],data(){return{strings:B(this.composableStrings,{wpRoles:this.$t.__("WP Roles (Editor, Author)",this.$td),seoManagerRole:this.$t.__("SEO Manager Role",this.$td),seoEditorRole:this.$t.__("SEO Editor Role",this.$td),defaultSettings:this.$t.__("Default settings that just work",this.$td),granularControl:this.$t.__("Granular controls per role",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Access Control",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Access Control is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")})}},computed:{getLiteRoles(){const t=this.getRoles;let o=1;for(;8>t.length;)t.push({label:this.$t.__("Custom Role",this.$td)+" "+o,name:"customRole"+o}),o++;return t}}},W={class:"aioseo-access-control-lite"},j={class:"toggle"};function F(t,o,E,d,n,f){const g=i("core-pro-badge"),_=i("base-toggle"),A=i("core-settings-row"),v=i("core-blur"),R=i("cta"),O=i("core-card");return c(),m("div",W,[l(O,{slug:"accessControl"},{header:r(()=>[S("span",null,u(n.strings.accessControl),1),l(g)]),tooltip:r(()=>[p(u(n.strings.tooltip),1)]),default:r(()=>[l(v,null,{default:r(()=>[(c(!0),m(w,null,L(f.getLiteRoles,$=>(c(),h(A,{key:$.name,name:$.label},{content:r(()=>[S("div",j,[l(_,{disabled:!0,modelValue:!0},{default:r(()=>[p(u(n.strings.useDefaultSettings),1)]),_:1})])]),_:2},1032,["name"]))),128))]),_:1}),l(R,{"feature-list":[n.strings.granularControl,n.strings.wpRoles,n.strings.seoManagerRole,n.strings.seoEditorRole],"cta-link":t.$links.getPricingUrl("access-control","access-control-upsell"),"button-text":n.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("access-control",null,"home"),"align-top":""},{"header-text":r(()=>[p(u(n.strings.ctaHeader),1)]),description:r(()=>[p(u(n.strings.tooltip),1)]),_:1},8,["feature-list","cta-link","button-text","learn-more-link"])]),_:1})])}const C=b(T,[["render",F]]),H={setup(){return{licenseStore:x()}},components:{AccessControl:C,AccessControlLite:C}},I={class:"aioseo-access-control"};function q(t,o,E,d,n,f){const g=i("access-control",!0),_=i("access-control-lite");return c(),m("div",I,[d.licenseStore.isUnlicensed?y("",!0):(c(),h(g,{key:0})),d.licenseStore.isUnlicensed?(c(),h(_,{key:1})):y("",!0)])}const dt=b(H,[["render",q]]);export{dt as default};
