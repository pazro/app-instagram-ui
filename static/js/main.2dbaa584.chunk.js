(this["webpackJsonpapp-instagram-ui"]=this["webpackJsonpapp-instagram-ui"]||[]).push([[0],{146:function(e,t,a){e.exports=a(315)},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},159:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},315:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(59),s=a.n(r),l=(a(151),a(152),a(12)),i=a(13),o=a(15),m=a(14),u=a(16),p=(a(153),a(40)),E=a(320),b=a(321),d=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(E.a,{bg:"light",expand:"lg"},c.a.createElement(E.a.Brand,{href:"#home"},"Instagram"),c.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(b.a,{className:"mr-auto"},c.a.createElement(p.b,{className:"nav-link",to:"/"},"Home"),c.a.createElement(p.b,{className:"nav-link",to:"/profile"},"Profile"),c.a.createElement(p.b,{className:"nav-link",to:"/post/create"},"Create Post"))))}}]),t}(n.Component),h=(a(159),a(141)),f=a.n(h),v=(a(161),a(322)),g=(a(162),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"TagList"},this.props.tags.map((function(e,t){return c.a.createElement("div",{key:t,className:"tag"},c.a.createElement("a",{href:"#"},"#",e))})))}}]),t}(n.Component)),N=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"post"},c.a.createElement("div",{className:"post-header"},c.a.createElement("div",{className:"user-details"},c.a.createElement(v.e,{className:"user-icon"}),c.a.createElement("h4",{className:"user-id"},this.props.user)),c.a.createElement("div",{className:"created"},c.a.createElement(f.a,{format:"MMM DD, YYYY"},this.props.created))),c.a.createElement("img",{src:this.props.image,alt:"image",className:"post-image"}),c.a.createElement("div",{className:"post-reactions"},c.a.createElement("div",{className:"like-comment-share"},c.a.createElement("button",{className:"action-button"},c.a.createElement(v.c,{className:"icon"})),c.a.createElement("button",{className:"action-button"},c.a.createElement(v.b,{className:"icon"})),c.a.createElement("button",{className:"action-button"},c.a.createElement(v.d,{className:"icon"}))),c.a.createElement("div",{className:"bookmark"},c.a.createElement("button",{className:"action-button"},c.a.createElement(v.a,{className:"icon"})))),c.a.createElement("div",{className:"post-details"},c.a.createElement("span",{className:"post-likes"},this.props.likes," Likes"),c.a.createElement("p",{className:"post-title"},this.props.title),c.a.createElement(g,{tags:this.props.tags,className:"tags-list"})))}}]),t}(n.Component),j=a(142),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={posts:[],isLoading:!0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/evyros/fake-api/posts").then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,posts:t})}))}},{key:"render",value:function(){return this.state.isLoading?c.a.createElement("div",{className:"loader"},c.a.createElement(j.BeatLoader,{color:"#faebd7",size:"25",sizeUnit:"px"})):c.a.createElement("div",{className:"Feed"},this.state.posts.map((function(e,t){return c.a.createElement(N,{user:e.userId,image:e.image,title:e.title,likes:e.likes,tags:e.tags,created:e.created,key:t})})))}}]),t}(n.Component),k=(a(185),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Profile")}}]),t}(n.Component)),y=a(25),L=(a(186),a(319)),C=a(318),w=a(32),B=a(47),I=B.object().shape({title:B.string().min(2).max(255).required(),image:B.mixed().required(),tags:B.string()}),x=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"submit",value:function(e){console.log(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"create-post"},c.a.createElement("h2",null,"Create Post:"),c.a.createElement(w.d,{initialValues:{image:"",title:"",tags:""},validationSchema:I,onSubmit:this.submit.bind(this)},c.a.createElement(w.c,{className:"col-xs-12 col-sm-6"},c.a.createElement(L.a.Group,{controlId:"formBasicEmail"},c.a.createElement(L.a.Label,null,"Load Image:"),c.a.createElement(w.b,{type:"file",name:"image"})),c.a.createElement(L.a.Group,{controlId:"formBasicEmail"},c.a.createElement(L.a.Label,null,"Post Title:"),c.a.createElement(w.b,{name:"title",className:"form-control"}),c.a.createElement(w.a,{className:"alert alert-danger",name:"title",component:"div"})),c.a.createElement(L.a.Group,{controlId:"formBasicEmail"},c.a.createElement(L.a.Label,null,"Post Tags:"),c.a.createElement(w.b,{name:"tags",className:"form-control"})),c.a.createElement(C.a,{variant:"primary",type:"submit"},"Share"))))}}]),t}(n.Component);var P=function(){return c.a.createElement(p.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement("main",{className:"container"},c.a.createElement(y.c,null,c.a.createElement(y.a,{path:"/profile"},c.a.createElement(k,null)),c.a.createElement(y.a,{path:"/post/create"},c.a.createElement(x,null)),c.a.createElement(y.a,{path:"/"},c.a.createElement(O,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[146,1,2]]]);
//# sourceMappingURL=main.2dbaa584.chunk.js.map