(function(t){function e(e){for(var a,r,c=e[0],s=e[1],l=e[2],h=0,f=[];h<c.length;h++)r=c[h],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c98":function(t,e,n){"use strict";var a=n("1bfa"),i=n.n(a);i.a},"160f":function(t,e,n){},"1bfa":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],r=(n("7faf"),n("2877")),c={},s=Object(r["a"])(c,i,o,!1,null,null,null),l=s.exports,u=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Header"),n("router-view")],1)},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("van-nav-bar",{attrs:{title:"跑跑手游数据库 | "+t.titleText},on:{"click-right":t.onClickRight}},[n("div",{attrs:{slot:"right"},on:{click:t.showPopup},slot:"right"},[n("van-icon",{attrs:{size:"20px",name:"apps-o"}})],1)]),n("div",{staticStyle:{position:"relative",bottom:"0"}},[n("van-popup",{staticStyle:{height:"254px"},attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("van-nav-bar",{staticStyle:{position:"absolute",top:"-46px",height:"46px",width:"100%"},attrs:{title:"菜单","right-text":"关闭"},on:{"click-right":t.showPopup}}),n("div",{staticStyle:{height:"254px",width:"100%","overflow-y":"scroll"}},[n("van-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("div",{staticClass:"menu-box",on:{click:function(e){return t.changeTitle("新闻","/news")}}},[t._v("新闻")]),n("div",{staticClass:"menu-box",on:{click:function(e){return t.changeTitle("地图","/map")}}},[t._v("地图")]),n("van-collapse-item",{attrs:{title:"历史",name:"1"}},[n("div",{staticClass:"menu-box",on:{click:function(e){return t.changeTitle("大事件","/bigevent")}}},[t._v("大事件")]),n("div",{staticClass:"menu-box",on:{click:function(e){return t.changeTitle("车辆年表","/vehiclechronology")}}},[t._v("车辆年表")])]),n("van-collapse-item",{attrs:{title:"游戏道具",name:"2"}},[n("div",{staticClass:"menu-box",on:{click:function(e){return t.changeTitle("车辆","/vehicle")}}},[t._v("车辆")]),n("div",{staticClass:"menu-box",on:{click:function(e){return t.changeTitle("人物","/role")}}},[t._v("人物")])])],1)],1)],1)],1)],1)},v=[],d={name:"",data:function(){return{show:!1,activeName:"",titleText:"新闻"}},created:function(){this.determineTitle()},methods:{determineTitle:function(){var t=this.$route.path;switch(t){case"/news":this.titleText="新闻";break;case"/map":this.titleText="地图";break;case"/bigevent":this.titleText="大事件";break;case"/vehiclechronology":this.titleText="车辆年表";break;case"/vehicle":this.titleText="车辆";break;case"/role":this.titleText="人物";break}},onClickRight:function(){},showPopup:function(){this.show=!this.show},changeTitle:function(t,e){this.titleText=t,this.show=!this.show,this.activeName="",e!==this.$route.path&&this.$router.push(e)}}},m=d,b=(n("0c98"),Object(r["a"])(m,p,v,!1,null,"2e77395a",null)),g=b.exports,w={name:"home",data:function(){return{}},created:function(){console.log(this.$route.path)},components:{Header:g}},x=w,_=Object(r["a"])(x,h,f,!1,null,null,null),y=_.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 新闻 "),n("div",{staticClass:"title-box"},[t._v(" 官方新闻 "),n("a",{attrs:{href:"https://wepop.qq.com/list.shtml?type=news"}},[t._v("更多")])])])}],O=(n("d3b7"),n("96cf"),{name:"",data:function(){return{newsList:[]}},created:function(){this.getNews()},methods:{getNews:function(){var t,e;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(this.$axios.get("/mock/news.json"));case 2:t=n.sent,e=t.data,console.log(e),this.newsList=e.data.news;case 6:case"end":return n.stop()}}),null,this)}}}),j=O,$=(n("7769"),Object(r["a"])(j,k,T,!1,null,"49e7ef98",null)),C=$.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 地图 ")])},P=[],S={name:"",data:function(){return{}},created:function(){},methods:{}},N=S,R=Object(r["a"])(N,E,P,!1,null,"183c3818",null),M=R.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 大事件 ")])},q=[],z={name:"",data:function(){return{}},created:function(){},methods:{}},H=z,J=Object(r["a"])(H,L,q,!1,null,"caa755b4",null),U=J.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 车辆年表 ")])},B=[],D={name:"",data:function(){return{}},created:function(){},methods:{}},F=D,G=Object(r["a"])(F,A,B,!1,null,"4372726c",null),I=G.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 车辆 ")])},Q=[],V={name:"",data:function(){return{}},created:function(){},methods:{}},W=V,X=Object(r["a"])(W,K,Q,!1,null,"47e431b4",null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 人物 ")])},tt=[],et={name:"",data:function(){return{}},created:function(){},methods:{}},nt=et,at=Object(r["a"])(nt,Z,tt,!1,null,"816d38ca",null),it=at.exports;a["a"].use(u["a"]);var ot=[{path:"/",name:"home",component:y,redirect:"/news",children:[{path:"/news",name:"news",component:C},{path:"/map",name:"map",component:M},{path:"/bigevent",name:"bigevent",component:U},{path:"/vehiclechronology",name:"vehiclechronology",component:I},{path:"/vehicle",name:"vehicle",component:Y},{path:"/role",name:"role",component:it}]}],rt=new u["a"]({routes:ot}),ct=rt,st=(n("160f"),n("b970")),lt=n("bc3a"),ut=n.n(lt);n("157a");a["a"].prototype.$axios=ut.a,a["a"].config.productionTip=!1,a["a"].use(st["a"]),ut.a.defaults.baseURL="https://zxclnp0711.github.io/popkartm_database/dist/",new a["a"]({router:ct,render:function(t){return t(l)}}).$mount("#app")},7769:function(t,e,n){"use strict";var a=n("da31"),i=n.n(a);i.a},"7faf":function(t,e,n){"use strict";var a=n("b8ff"),i=n.n(a);i.a},b8ff:function(t,e,n){},da31:function(t,e,n){}});
//# sourceMappingURL=app.6bcda0e6.js.map