(function(t){function e(e){for(var i,l,r=e[0],c=e[1],o=e[2],v=0,p=[];v<r.length;v++)l=r[v],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&p.push(s[l][0]),s[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);h&&h(e);while(p.length)p.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},s={app:0},n=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var h=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"07b0":function(t,e,a){"use strict";var i=a("9527"),s=a.n(i);s.a},"0f61":function(t,e,a){"use strict";var i=a("813a"),s=a.n(i);s.a},"160f":function(t,e,a){},4980:function(t,e,a){"use strict";var i=a("c577"),s=a.n(i);s.a},"4c5a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],l=(a("7faf"),a("2877")),r={},c=Object(l["a"])(r,s,n,!1,null,null,null),o=c.exports,h=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home",staticStyle:{"margin-top":"46px"}},[a("Header",{staticStyle:{"z-index":"999999"}}),a("router-view")],1)},p=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("van-nav-bar",{attrs:{title:"跑跑手游数据库 | "+t.titleText},on:{"click-right":t.onClickRight}},[a("div",{attrs:{slot:"right"},on:{click:t.showPopup},slot:"right"},[a("van-icon",{attrs:{size:"20px",name:"apps-o"}})],1)]),a("div",{staticStyle:{position:"relative",bottom:"0"}},[a("van-popup",{staticStyle:{height:"254px"},attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("van-nav-bar",{staticStyle:{position:"absolute",top:"-46px",height:"46px",width:"100%"},attrs:{title:"菜单","right-text":"关闭"},on:{"click-right":t.showPopup}}),a("div",{staticStyle:{height:"254px",width:"100%","overflow-y":"scroll"}},[a("van-collapse",{attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("div",{staticClass:"menu-box",on:{click:function(e){return t.changeTitle("新闻","/news")}}},[t._v(" 新闻 ")]),a("div",{staticClass:"menu-box",on:{click:function(e){return t.changeTitle("地图","/map")}}},[t._v(" 地图 ")]),a("van-collapse-item",{attrs:{title:"历史",name:"1"}},[a("div",{staticClass:"menu-box",on:{click:function(e){return t.changeTitle("大事件","/bigevent")}}},[t._v(" 大事件 ")]),a("div",{staticClass:"menu-box",on:{click:function(e){return t.changeTitle("车辆年表","/vehiclechronology")}}},[t._v(" 车辆年表 ")])]),a("van-collapse-item",{attrs:{title:"游戏道具",name:"2"}},[a("div",{staticClass:"menu-box",on:{click:function(e){return t.changeTitle("车辆","/vehicle")}}},[t._v(" 车辆 ")]),a("div",{staticClass:"menu-box",on:{click:function(e){return t.changeTitle("人物","/role")}}},[t._v(" 人物 ")])])],1)],1)],1)],1)],1)},u=[],m={name:"",data:function(){return{show:!1,activeName:"",titleText:"新闻"}},created:function(){this.determineTitle()},methods:{determineTitle:function(){var t=this.$route.path;switch(console.log(t),t){case"/news":this.titleText="新闻";break;case"/map":this.titleText="地图";break;case"/bigevent":this.titleText="大事件";break;case"/vehiclechronology":this.titleText="车辆年表";break;case"/vehicle":this.titleText="车辆";break;case"/role":this.titleText="人物";break;case"/vehicledetail":this.titleText="车辆详情";break}},onClickRight:function(){},showPopup:function(){this.show=!this.show},changeTitle:function(t,e){this.titleText=t,this.show=!this.show,this.activeName="",e!==this.$route.path&&this.$router.push(e)}}},f=m,g=(a("cf8c"),Object(l["a"])(f,d,u,!1,null,"9d877f4c",null)),x=g.exports,_={name:"home",data:function(){return{}},created:function(){},components:{Header:x}},y=_,b=Object(l["a"])(y,v,p,!1,null,null,null),w=b.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticStyle:{width:"100%",padding:"5px 10px"}},[t._l(this.newsList,(function(e,i){return a("div",{key:i,class:i%2==0?"odd-box":"even-box",staticStyle:{width:"100%","margin-bottom":"10px",border:"1px solid #ccc",padding:"5px","border-radius":"10px"}},[a("a",{staticStyle:{display:"block"},attrs:{href:e.url}},[a("div",{staticStyle:{"font-size":"15px",width:"100%",display:"flex","justify-content":"space-between"}},[a("div",{staticStyle:{width:"88%","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(e.title))]),a("div",[t._v(t._s(e.date))])]),a("div",{staticClass:"ellipsis",staticStyle:{"font-size":"12px",height:"70px",width:"100%",padding:"5px 0",color:"#aaa","text-indent":"2em","line-height":"16px"}},[t._v(t._s(e.abstract))])])])})),a("div",{staticClass:"loading"},[a("van-button",{attrs:{type:"info",plain:"",hairline:"",loading:t.loading,size:"normal","loading-text":"加载中..."},on:{click:t.handleLoading}},[t._v("加载更多...")])],1)],2)])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-box"},[t._v(" 官方新闻 "),a("a",{attrs:{href:"https://wepop.qq.com/list.shtml?type=news"}},[t._v("更多")])])}],C=(a("fb6a"),a("d3b7"),a("284c")),D=(a("96cf"),{name:"",data:function(){return{newsList:[],loading:!1,page:1,pageSize:10,dataLength:0}},created:function(){this.getNews()},methods:{getNews:function(){var t,e,a,i,s;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(this.$axios.get("/mock/news.json"));case 2:for(e=n.sent,a=e.data,this.dataLength=a.data.news.length,i=[],s=0;s<a.data.news.length;s+=10)i.push(a.data.news.slice(s,s+10));(t=this.newsList).push.apply(t,Object(C["a"])(i[this.page-1]));case 8:case"end":return n.stop()}}),null,this)},handleLoading:function(){this.newsList.length===this.dataLength?this.$toast("无更多新闻"):(this.loading=!0,this.page++,this.getNews(),this.loading=!1)}}}),S=D,T=(a("8198"),Object(l["a"])(S,L,k,!1,null,"14b35177",null)),P=T.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"select"},[a("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[a("van-collapse-item",{attrs:{title:"筛选",name:"1"}},[a("van-row",[a("van-col",{attrs:{span:"4"}},[a("van-tag",{attrs:{plain:"",type:"primary"}},[t._v("主题")])],1),a("van-col",{attrs:{span:"20"}},t._l(this.typeList,(function(e,i){return a("van-col",{key:i,attrs:{span:"6"}},[a("van-button",{attrs:{type:"info",size:"mini",disabled:t.typeSelect==i,"data-index":i},on:{click:function(e){return t.handleTypeDisable(e)}}},[t._v(t._s(e))])],1)})),1)],1),a("van-row",[a("van-col",{attrs:{span:"4"}},[a("van-tag",{attrs:{plain:"",type:"primary"}},[t._v("星级")])],1),a("van-col",{attrs:{span:"20"}},t._l(this.starsList,(function(e,i){return a("van-col",{key:i,attrs:{span:"6"}},[a("van-button",{attrs:{type:"info",size:"mini",disabled:t.starsSelect==i,"data-index":i},on:{click:function(e){return t.handleStarsDisable(e)}}},[t._v(t._s(e))])],1)})),1)],1),a("van-row",[a("van-col",{attrs:{span:"4"}},[a("van-tag",{attrs:{plain:"",type:"primary"}},[t._v("驾照")])],1),a("van-col",{attrs:{span:"20"}},t._l(this.levelList,(function(e,i){return a("van-col",{key:i,attrs:{span:"6"}},[a("van-button",{attrs:{type:"info",size:"mini",disabled:t.levelSelect==i,"data-index":i},on:{click:function(e){return t.handleLevelDisable(e)}}},[t._v(t._s(e))])],1)})),1)],1)],1)],1),a("div",{staticClass:"map-container"},t._l(this.mapList,(function(e,i){return a("div",{key:i,staticClass:"map-box"},[a("img",{attrs:{src:e.imgUrl}}),a("p",[t._v(t._s(e.name))])])})),0)],1),a("van-loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading",attrs:{size:"40px",vertical:"",color:"#fff"}})],1)},O=[],j=(a("4de4"),a("0d03"),a("25f0"),{name:"",data:function(){return{isLoading:!0,activeNames:["1"],typeList:[],starsList:[],levelList:[],mapList:[],oldMapList:[],typeSelect:0,starsSelect:0,levelSelect:0,selectParmas:{type:null,stars:null,level:null}}},created:function(){this.getMaps()},methods:{getMaps:function(){var t,e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return this.isLoading=!0,a.next=3,regeneratorRuntime.awrap(this.$axios.get("/mock/maps.json"));case 3:t=a.sent,e=t.data,this.typeList=e.data.type,this.starsList=e.data.stars,this.levelList=e.data.level,this.mapList=e.data.maps,this.oldMapList=this.mapList,this.isLoading=!1;case 11:case"end":return a.stop()}}),null,this)},handleTypeDisable:function(t){"0"===t.target.dataset.index?this.selectParmas.type=null:this.selectParmas.type=t.target.innerText,this.typeSelect=t.target.dataset.index,this.filterMap(this.selectParmas)},handleStarsDisable:function(t){"0"===t.target.dataset.index?this.selectParmas.stars=null:this.selectParmas.stars=t.target.innerText,this.starsSelect=t.target.dataset.index,this.filterMap(this.selectParmas)},handleLevelDisable:function(t){"0"===t.target.dataset.index?this.selectParmas.level=null:this.selectParmas.level=t.target.innerText,this.levelSelect=t.target.dataset.index,this.filterMap(this.selectParmas)},filterMap:function(t){if(this.isLoading=!0,t.type||t.stars||t.level){var e=this.oldMapList;t.type&&(this.mapList=e.filter((function(e){return e.type===t.type})),e=this.mapList),t.stars&&(this.mapList=e.filter((function(e){return e.stars.toString()===t.stars.toString()})),e=this.mapList),t.level&&(this.mapList=e.filter((function(e){return e.level===t.level})),e=this.mapList),this.isLoading=!1}else this.mapList=this.oldMapList,this.isLoading=!1}}}),N=j,z=(a("0f61"),Object(l["a"])(N,$,O,!1,null,"51dd52af",null)),E=z.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" 大事件 ")])},R=[],V={name:"",data:function(){return{}},created:function(){},methods:{}},q=V,U=Object(l["a"])(q,M,R,!1,null,"caa755b4",null),H=U.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"select"},[a("van-cell-group",[a("van-field",{attrs:{placeholder:"请输入车辆名"},on:{input:t.handleName},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._l(this.timeListData,(function(e,i){return a("div",{key:i,class:["time-box",i%2==0?"odd-box":""]},[a("div",{staticStyle:{color:"#888"}},[t._v(t._s(e.time))]),"传说"==e.level?a("div",{staticClass:"legend"},[t._v(t._s(e.name))]):"史诗"==e.level?a("div",{staticClass:"epic"},[t._v(t._s(e.name))]):"稀有"==e.level?a("div",{staticClass:"rare"},[t._v(t._s(e.name))]):"普通"==e.level?a("div",{staticClass:"common"},[t._v(t._s(e.name))]):t._e()])}))],2)])},I=[],A=(a("c975"),a("4e82"),a("b0c0"),{name:"",data:function(){return{name:null,timeListData:[],oldTimeListData:[]}},created:function(){this.getTimeData()},methods:{handleName:function(){var t=this;""===this.name&&(this.name=null);var e=this.oldTimeListData;null===this.name&&(this.timeListData=this.oldTimeListData),null!==this.name&&(this.timeListData=e.filter((function(e){return-1!==e.name.indexOf(t.name)})))},getTimeData:function(){var t,e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(this.$axios.get("/mock/vehicles.json"));case 2:t=a.sent,e=t.data,this.timeListData=e.data.vehicles,this.timeListData.sort((function(t,e){return t.time<e.time?1:-1})),this.oldTimeListData=this.timeListData;case 7:case"end":return a.stop()}}),null,this)}}}),B=A,F=(a("4980"),Object(l["a"])(B,J,I,!1,null,"3553a9de",null)),G=F.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"select"},[a("van-cell-group",[a("van-field",{attrs:{placeholder:"请输入车辆名"},on:{input:t.handleName},model:{value:t.selectParmas.name,callback:function(e){t.$set(t.selectParmas,"name",e)},expression:"selectParmas.name"}})],1),a("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[a("van-collapse-item",{attrs:{title:"筛选",name:"1"}},[a("van-row",[a("van-col",{attrs:{span:"4"}},[a("van-tag",{attrs:{plain:"",type:"primary"}},[t._v("类型")])],1),a("van-col",{attrs:{span:"20"}},t._l(this.typeList,(function(e,i){return a("van-col",{key:i,attrs:{span:"6"}},[a("van-button",{attrs:{type:"info",size:"mini",disabled:t.typeSelect==i,"data-index":i},on:{click:function(e){return t.handleTypeDisable(e)}}},[t._v(t._s(e))])],1)})),1)],1),a("van-row",[a("van-col",{attrs:{span:"4"}},[a("van-tag",{attrs:{plain:"",type:"primary"}},[t._v("级别")])],1),a("van-col",{attrs:{span:"20"}},t._l(this.levelList,(function(e,i){return a("van-col",{key:i,attrs:{span:"6"}},[a("van-button",{attrs:{type:"info",size:"mini",disabled:t.levelSelect==i,"data-index":i},on:{click:function(e){return t.handleLevelDisable(e)}}},[t._v(t._s(e))])],1)})),1)],1)],1)],1),a("div",{staticClass:"vehicles"},t._l(this.vehicleList,(function(e,i){return a("div",{key:i,staticClass:"vehicle-box",on:{click:function(a){return a.preventDefault(),t.handleDetail(e.name)}}},[a("div",{staticClass:"vehicle-img"},[a("img",{attrs:{src:e.imgUrl}})]),a("div",{staticClass:"vehicle-describe"},["传说"==e.level?a("div",{staticClass:"describe legend"},[t._v(" "+t._s(e.level)+"/"+t._s(e.type)+" ")]):"史诗"==e.level?a("div",{staticClass:"describe epic"},[t._v(" "+t._s(e.level)+"/"+t._s(e.type)+" ")]):"稀有"==e.level?a("div",{staticClass:"describe rare"},[t._v(" "+t._s(e.level)+"/"+t._s(e.type)+" ")]):"普通"==e.level?a("div",{staticClass:"describe common"},[t._v(" "+t._s(e.level)+"/"+t._s(e.type)+" ")]):t._e(),a("div",{staticClass:"describe"},[t._v(t._s(e.quantitative))]),a("div",{staticClass:"describe"},[t._v(t._s(e.name))])])])})),0)],1),a("van-loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading",attrs:{size:"40px",vertical:"",color:"#fff"}})],1)},Q=[],W={name:"",data:function(){return{isLoading:!0,activeNames:["1"],typeList:[],levelList:[],vehicleList:[],vehicleDetail:[],oldVehicleList:[],typeSelect:0,levelSelect:0,selectParmas:{level:null,type:null,name:null}}},created:function(){this.getVehicles()},methods:{getVehicles:function(){var t,e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return this.isLoading=!0,a.next=3,regeneratorRuntime.awrap(this.$axios.get("/mock/vehicles.json"));case 3:t=a.sent,e=t.data,this.typeList=e.data.type,this.levelList=e.data.level,this.vehicleList=e.data.vehicles,this.oldVehicleList=this.vehicleList,this.isLoading=!1;case 10:case"end":return a.stop()}}),null,this)},handleTypeDisable:function(t){"0"===t.target.dataset.index?this.selectParmas.type=null:this.selectParmas.type=t.target.innerText,this.typeSelect=t.target.dataset.index,this.filterVehicle(this.selectParmas)},handleLevelDisable:function(t){"0"===t.target.dataset.index?this.selectParmas.level=null:this.selectParmas.level=t.target.innerText,this.levelSelect=t.target.dataset.index,this.filterVehicle(this.selectParmas)},handleName:function(){""===this.selectParmas.name&&(this.selectParmas.name=null),this.filterVehicle(this.selectParmas)},filterVehicle:function(t){var e=this.oldVehicleList;null===t.name&&(this.vehicleList=this.oldVehicleList),null!==t.name&&(this.vehicleList=e.filter((function(e){return-1!==e.name.indexOf(t.name)})),e=this.vehicleList),t.level&&(this.vehicleList=e.filter((function(e){return e.level===t.level})),e=this.vehicleList),t.type&&(this.vehicleList=e.filter((function(e){return e.type===t.type})),e=this.vehicleList)},handleDetail:function(t){var e=this.oldVehicleList;this.vehicleDetail=e.filter((function(e){return e.name===t})),this.vehicleDetail=this.vehicleDetail[0],this.$router.push({name:"vehicledetail",params:{data:this.vehicleDetail}})}}},X=W,Y=(a("9055"),Object(l["a"])(X,K,Q,!1,null,"706ebb52",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" 人物 ")])},et=[],at={name:"",data:function(){return{}},created:function(){},methods:{}},it=at,st=Object(l["a"])(it,tt,et,!1,null,"816d38ca",null),nt=st.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"return-box"},[a("swiper",{staticClass:"swiper-container",attrs:{options:t.swiperOption}},[t._l(this.vehicleData.detailImgUrl,(function(t,e){return a("swiper-slide",{key:e},[a("img",{attrs:{src:t,alt:""}})])})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),a("div",{staticClass:"return-button",on:{click:t.handleReturn}},[t._v(" < ")])],1),a("div",{staticClass:"details-container"},[a("div",{staticClass:"details-name"},[a("h2",[t._v(t._s(t.vehicleData.name))]),"传说"==this.vehicleData.level?a("div",{staticClass:"type legend"},[t._v(" 传说 ")]):"史诗"==this.vehicleData.level?a("div",{staticClass:"type epic"},[t._v(" 史诗 ")]):"稀有"==this.vehicleData.level?a("div",{staticClass:"type rare"},[t._v(" 稀有 ")]):a("div",{staticClass:"type common"},[t._v("普通")])]),a("hr"),a("div",{staticClass:"details-acquisition"},[t._m(0),a("div",{staticStyle:{height:"50px","line-height":"50px","text-align":"center","font-size":"14px"}},[t._v(" "+t._s(t.vehicleData.acquisition)+" ")])]),a("hr"),a("div",{staticClass:"details-skill"},[t._m(1),0===this.vehicleData.skill.length?a("div",{staticStyle:{height:"50px","line-height":"50px","text-align":"center","font-size":"14px"}},[t._v(" 无技能信息 ")]):a("div",{staticStyle:{width:"100%"}},[a("img",{attrs:{src:t.vehicleData.skill,alt:""}})])]),a("hr"),a("div",{staticClass:"details-progress"},[t._m(2),a("van-row",[a("van-col",{staticStyle:{"line-height":"28px","text-align":"right"},attrs:{span:"4"}},[a("van-tag",{attrs:{plain:"",type:"primary"}},[t._v("漂移")])],1),a("van-col",{attrs:{span:"20"}},[a("div",{staticClass:"progress"},[a("van-progress",{attrs:{percentage:this.vehicleData.performance[0]/10,"stroke-width":"8","pivot-text":this.vehicleData.performance[0]+""}})],1)])],1),a("van-row",[a("van-col",{staticStyle:{"line-height":"28px","text-align":"right"},attrs:{span:"4"}},[a("van-tag",{attrs:{plain:"",type:"primary"}},[t._v("加速度")])],1),a("van-col",{attrs:{span:"20"}},[a("div",{staticClass:"progress"},[a("van-progress",{attrs:{percentage:this.vehicleData.performance[1]/10,"stroke-width":"8","pivot-text":this.vehicleData.performance[1]}})],1)])],1),a("van-row",[a("van-col",{staticStyle:{"line-height":"28px","text-align":"right"},attrs:{span:"4"}},[a("van-tag",{attrs:{plain:"",type:"primary"}},[t._v("弯道")])],1),a("van-col",{attrs:{span:"20"}},[a("div",{staticClass:"progress"},[a("van-progress",{attrs:{percentage:this.vehicleData.performance[2]/10,"stroke-width":"8","pivot-text":this.vehicleData.performance[2]}})],1)])],1),a("van-row",[a("van-col",{staticStyle:{"line-height":"28px","text-align":"right"},attrs:{span:"4"}},[a("van-tag",{attrs:{plain:"",type:"primary"}},[t._v("加速时间")])],1),a("van-col",{attrs:{span:"20"}},[a("div",{staticClass:"progress"},[a("van-progress",{attrs:{percentage:this.vehicleData.performance[3]/10,"stroke-width":"8","pivot-text":this.vehicleData.performance[3]}})],1)])],1),a("van-row",[a("van-col",{staticStyle:{"line-height":"28px","text-align":"right"},attrs:{span:"4"}},[a("van-tag",{attrs:{plain:"",type:"primary"}},[t._v("集气速度")])],1),a("van-col",{attrs:{span:"20"}},[a("div",{staticClass:"progress"},[a("van-progress",{attrs:{percentage:this.vehicleData.performance[4]/10,"stroke-width":"8","pivot-text":this.vehicleData.performance[4]}})],1)])],1)],1),a("hr")])])},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details-name"},[a("h2",[t._v("获得途径")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details-name"},[a("h2",[t._v("技能信息")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details-name"},[a("h2",[t._v("详细数据")])])}],ct=(a("dfa4"),a("7212")),ot={name:"",data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"},loop:!0,speed:1e3},vehicleData:{}}},created:function(){this.vehicleData=this.$route.params.data},methods:{handleReturn:function(){this.$router.push("/vehicle")}},components:{swiper:ct["swiper"],swiperSlide:ct["swiperSlide"]}},ht=ot,vt=(a("07b0"),Object(l["a"])(ht,lt,rt,!1,null,"b2994824",null)),pt=vt.exports;i["a"].use(h["a"]);var dt=[{path:"/",name:"home",component:w,redirect:"/news",children:[{path:"/news",name:"news",component:P},{path:"/map",name:"map",component:E},{path:"/bigevent",name:"bigevent",component:H},{path:"/vehiclechronology",name:"vehiclechronology",component:G},{path:"/vehicle",name:"vehicle",component:Z},{path:"/role",name:"role",component:nt},{path:"/vehicledetail",name:"vehicledetail",component:pt}]}],ut=new h["a"]({routes:dt}),mt=ut,ft=(a("160f"),a("b970")),gt=a("bc3a"),xt=a.n(gt);a("157a");i["a"].prototype.$axios=xt.a,i["a"].config.productionTip=!1,i["a"].use(ft["a"]),xt.a.defaults.baseURL="https://zxclnp0711.github.io/popkartm_database/dist/",new i["a"]({router:mt,render:function(t){return t(o)}}).$mount("#app")},"5a1d":function(t,e,a){},"7faf":function(t,e,a){"use strict";var i=a("b8ff"),s=a.n(i);s.a},"813a":function(t,e,a){},8198:function(t,e,a){"use strict";var i=a("4c5a"),s=a.n(i);s.a},9055:function(t,e,a){"use strict";var i=a("de40"),s=a.n(i);s.a},9527:function(t,e,a){},b8ff:function(t,e,a){},c577:function(t,e,a){},cf8c:function(t,e,a){"use strict";var i=a("5a1d"),s=a.n(i);s.a},de40:function(t,e,a){}});
//# sourceMappingURL=app.86101d7f.js.map