(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),s=(n(15),n(1)),i=n.n(s),l=n(4),u=n(5),m=n(6),h=n(8),d=n(7),p=n(9),f=(n(17),n(18),function(e){var t=e.monster;return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180"),alt:"monster"}),a.a.createElement("h2",null,t.name),a.a.createElement("p",null,t.email))}),v=(n(19),function(e){var t=e.monsters;return a.a.createElement("div",{className:"card-list"},t.map((function(e,t){return a.a.createElement(f,{key:e.id,monster:e})})))}),E=(n(20),function(e){var t=e.onSearch,n=e.placeholder;return a.a.createElement(r.Fragment,null,a.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t}))}),w=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).onSearch=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()}));case 2:t=e.sent,this.setState({monsters:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monsters Rolodex"),a.a.createElement(E,{onSearch:this.onSearch,placeholder:"search monsters"}),a.a.createElement(v,{monsters:r}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.8ce6f1b5.chunk.js.map