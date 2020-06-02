(this.webpackJsonprobofriends1=this.webpackJsonprobofriends1||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),c=n.n(a),i=n(8),s=n(6),l=n(15),u=n(16),h=n(1),d={CHANGE_SEARCH_FIELD:"CHANGE_SEARCH_FIELD",REQUEST_ROBOTS_FAILED:"REQUEST_ROBOTS_FAILED",REQUEST_ROBOTS_PENDING:"REQUEST_ROBOTS_PENDING",REQUEST_ROBOTS_SUCCESS:"REQUEST_ROBOTS_SUCCESS"},E={searchField:""},f={robots:[],isPending:!0,error:""},b=(n(27),n(2)),p=n(3),O=n(5),g=n(4),m=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return o.a.createElement("h1",{className:"f1"},"RoboFriends")}}]),n}(r.Component),v=function(e){var t=e.id,n=e.name,r=e.email;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2 "},o.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=250x250"),alt:"jane-doe"}),o.a.createElement("h2",null,n),o.a.createElement("p",null,r))},S=function(e){var t=e.robots,n=t.map((function(e,n){return o.a.createElement(v,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}));return o.a.createElement("div",null,n)},R=function(e){var t=e.searchChange;return o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue ma3",type:"search",placeholder:"search robots",onChange:t})},_=(n(28),function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid #9FCFB8",height:"500px"}},e.children)}),j=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(p.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oops, thats not good"):this.props.children}}]),n}(r.Component),C=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.robots,r=e.onSearchChange,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return 0===n.length?o.a.createElement("h1",{className:"tc f1"},"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement(m,null),o.a.createElement(R,{searchChange:r}),o.a.createElement(_,null,o.a.createElement(j,null,o.a.createElement(S,{robots:a}))))}}]),n}(r.Component),w=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:d.CHANGE_SEARCH_FIELD,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:d.REQUEST_ROBOTS_PENDING}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:d.REQUEST_ROBOTS_SUCCESS,payload:t})})).catch((function(t){return e({type:d.REQUEST_ROBOTS_FAILED,payload:t})}))}))}}}))(C),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(29);var N=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.CHANGE_SEARCH_FIELD:return Object(h.a)(Object(h.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.REQUEST_ROBOTS_PENDING:return Object(h.a)(Object(h.a)({},e),{},{isPending:!0});case d.REQUEST_ROBOTS_FAILED:return Object(h.a)(Object(h.a)({},e),{},{error:t.payload,isPending:!1});case d.REQUEST_ROBOTS_SUCCESS:return Object(h.a)(Object(h.a)({},e),{},{robots:t.payload,isPending:!1});default:return e}}}),U=Object(l.createLogger)(),F=Object(s.d)(N,Object(s.a)(u.a,U));c.a.render(o.a.createElement(i.a,{store:F},o.a.createElement(w,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends","/service-worker.js");y?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):T(e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.522880d4.chunk.js.map