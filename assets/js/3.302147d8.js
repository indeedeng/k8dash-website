(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{308:function(t,e,a){},309:function(t,e,a){"use strict";a.d(e,"b",(function(){return h})),a.d(e,"a",(function(){return f}));a(67),a(47),a(307),a(313),a(166),a(66),a(94),a(95),a(28),a(96),a(165);var n=/#.*$/,i=/\.(md|html)$/,r=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(n,"").replace(i,"")}function l(t){return s.test(t)}function u(t){if(l(t))return t;var e=t.match(n),a=e?e[0]:"",i=o(t);return r.test(i)?t:i+".html"+a}function c(t,e,a){if(l(e))return{type:"external",path:e};a&&(e=function(t,e,a){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var i=e.split("/");a&&i[i.length-1]||i.pop();for(var r=t.replace(/^\//,"").split("/"),s=0;s<r.length;s++){var o=r[s];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,a));for(var n=o(e),i=0;i<t.length;i++)if(o(t[i].regularPath)===n)return Object.assign({},t[i],{type:"page",path:u(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function h(t,e,a,n){var i=a.pages,r=a.themeConfig,s=n&&r.locales&&r.locales[n]||r;if("auto"===(t.frontmatter.sidebar||s.sidebar||r.sidebar))return d(t);var o=s.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var a in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(a)))return{base:a,config:e[a]};var n;return{}}(e,o),u=l.base,h=l.config;return"auto"===h?d(t):h?h.map((function(t){return function t(e,a,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return c(a,e,n);if(Array.isArray(e))return Object.assign(c(a,e[0],n),{title:e[1]});var r=e.children||[];return 0===r.length&&e.path?Object.assign(c(a,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:r.map((function(e){return t(e,a,n,i+1)})),collapsable:!1!==e.collapsable}}(t,i,u)})):[]}return[]}function d(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function f(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},310:function(t,e,a){},311:function(t,e,a){},314:function(t,e,a){"use strict";var n=a(44),i=(a(97),a(66),a(67),a(47),a(93),a(172),a(307),a(317),a(318),a(346)),r=a(309),s={name:"NavLinks",components:{NavLink:a(312).a,DropdownLink:i.a},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var a=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(n){var s,o=e[n],l=r[n]&&r[n].label||o.lang;return o.lang===t.$lang?s=a:(s=a.replace(t.$localeConfig.path,n),i.some((function(t){return t.path===s}))||(s=n)),{text:l,link:s}}))};return[].concat(Object(n.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(r.a)(t),{items:(t.items||[]).map(r.a)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],a=0;a<e.length;a++){var n=e[a];if(new RegExp(n,"i").test(t))return n}return"Source"}}}},o=(a(319),a(46)),l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.userLinks.length||t.repoLink?a("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return a("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?a("DropdownLink",{attrs:{item:t}}):a("NavLink",{attrs:{item:t}})],1)})),t._v(" "),"/install/"===this.$page.path?a("a",{staticClass:"button-disabled"},[t._v("\n    "+t._s("Install")+"\n  ")]):a("a",{staticClass:"button",attrs:{href:t.$withBase("/install/")}},[t._v("\n    "+t._s("Install")+"\n  ")])],2):t._e()}),[],!1,null,null,null);e.a=l.exports},315:function(t,e,a){"use strict";a(308)},319:function(t,e,a){"use strict";a(310)},320:function(t,e,a){"use strict";a(311)},321:function(t,e,a){"use strict";var n={name:"Home",components:{NavLink:a(312).a},computed:{data:function(){return this.$page.frontmatter}}},i=(a(315),a(46)),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"A Kubernetes dashboard that helps you understand and manage your cluster at a glance."}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?a("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actions&&t.data.actions.length?a("div",t._l(t.data.actions,(function(e,n){return a("span",{staticClass:"action"},[a("a",{staticClass:"action-button",attrs:{href:e.link}},[t._v("\n        "+t._s(e.text)+"\n        ")])])})),0):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("img",{attrs:{src:t.$withBase(e.image),alt:e.alt,width:"75%"}}),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),a("div",{staticClass:"split-div"},[a("div",{staticClass:"each-div"},[a("Content",{attrs:{"slot-key":"quick-install"}})],1),t._v(" "),a("div",{staticClass:"each-div"},[a("Content",{attrs:{"slot-key":"quick-start"}})],1)])])}),[],!1,null,null,null);e.a=r.exports},322:function(t,e,a){"use strict";a(323);var n=a(325),i=a(345),r=a(349),s=a(314),o=a(331);function l(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var u={name:"Navbar",components:{SidebarButton:r.a,NavLinks:s.a,SearchBox:i.a,AlgoliaSearchBox:n.a,GithubButton:o.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(l(this.$el,"paddingLeft"))+parseInt(l(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)}},c=(a(320),a(46)),h=Object(c.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),t.$site.themeConfig.repo?a("GithubButton",{staticClass:"repo-button",attrs:{href:t.$site.themeConfig.repo,"data-icon":"octicon-star","data-size":"small","data-show-count":"true","aria-label":"Star k8dash on GitHub"}},[t._v("\n    "+t._s(t.$site.themeConfig.repoButtonLabel?t.$site.themeConfig.repoButtonLabel:"Star")+"\n  ")]):t._e(),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=h.exports},339:function(t,e,a){},370:function(t,e,a){"use strict";a(339)},374:function(t,e,a){"use strict";a.r(e);var n=a(321),i=a(322),r=a(343),s=a(348),o=(a(370),a(46)),l=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-cncf"},[a("br"),a("br"),t._v(" "),a("h4",[t._v("k8dash is a CNCF Sandbox project")]),t._v(" "),a("img",{attrs:{src:"/images/cncf.png",alt:"Cloud Native Computing Foundation Logo"}}),t._v(" "),a("br"),a("br"),t._v(" "),t._m(0),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("p",[t._m(1),t._v(" "),a("span",{staticClass:"footer-links"},[a("a",{attrs:{href:"https://twitter.com/IndeedEng",target:"”_blank”"}},[a("img",{attrs:{src:t.$withBase("/images/twitter.png"),alt:"twitter icon",width:"20px"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/indeedeng/k8dash",target:"”_blank”"}},[a("img",{attrs:{src:t.$withBase("/images/github.png"),alt:"github icon",width:"20px"}})]),t._v("\n            \n          "),a("br")]),t._v(" "),a("br"),a("br")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("k8dash was originally created by "),e("a",{attrs:{href:"https://opensource.indeedeng.io/",target:"”_blank”","aria-label":"Link opens in new tab"}},[this._v("Indeed")]),this._v(" and made successful by its community"),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"copyright"},[this._v("\n          © Copyright The k8dash Authors "),e("br"),this._v(" "),e("b",[this._v("    "),e("a",{attrs:{href:"https://github.com/cncf/foundation/blob/master/code-of-conduct.md",target:"”_blank”","aria-label":"Link opens in new tab"}},[this._v("Code of Conduct")])])])}],!1,null,null,null).exports,u=a(309),c={name:"Layout",components:{Home:n.a,Page:r.a,Sidebar:s.a,Navbar:i.a,Footer:l},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(u.b)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},h=Object(o.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),a("Footer")],1)}),[],!1,null,null,null);e.default=h.exports}}]);