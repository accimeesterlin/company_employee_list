(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(e,t,a){e.exports=a(352)},206:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(17),c=a.n(r),i=(a(206),a(44)),s=a(26),l=a(27),u=a(29),m=a(28),d=a(30),h=a(121),p=a(15),f=a(43),b=a.n(f),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",position:"",company:""},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(h.a)({},t,n))},a.submit=function(e){e.preventDefault();var t=a.state,n=t.name,o=t.position,r=t.company;b()({url:"/add",method:"POST",data:{name:n,position:o,company:r}}).then(function(e){a.props.addUser(e.data),a.setState({name:"",company:"",position:""})}).catch(function(){return alert("Failed uploading data")})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"form noValidate",autoComplete:"off",onSubmit:this.submit},o.a.createElement("h2",null,"Tell us about you"),o.a.createElement(p.g,{id:"standard-dense",value:this.state.name,label:"Name",name:"name",onChange:this.handleChange}),o.a.createElement(p.g,{name:"company",value:this.state.company,id:"standard-dense",onChange:this.handleChange,label:"Company"}),o.a.createElement(p.g,{name:"position",value:this.state.position,id:"standard-dense",onChange:this.handleChange,label:"Position"}),o.a.createElement(p.a,{variant:"contained",color:"primary",onClick:this.submit}," Submit "))}}]),t}(n.Component),v=a(349).isEmpty,y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.users,t=v(e)?[]:e;return o.a.createElement("div",{className:"users"},v(t)?null:o.a.createElement(p.b,null,o.a.createElement(p.e,null,o.a.createElement(p.f,null,o.a.createElement(p.d,null,"Name"),o.a.createElement(p.d,{align:"right"},"Company"),o.a.createElement(p.d,{align:"right"},"Position"))),o.a.createElement(p.c,null,t.map(function(e,t){var a=e.name,n=e.position,r=e.company;return o.a.createElement(p.f,{key:t},o.a.createElement(p.d,{component:"th",scope:"row"}," ",a||"No Name Found"," "),o.a.createElement(p.d,{align:"right"},r||"No Company Found"),o.a.createElement(p.d,{align:"right"},n||"No Position Found"))}))))}}]),t}(n.Component),E=(a(351),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={users:[]},a.componentDidMount=function(){a.fetchUsers()},a.fetchUsers=function(){b.a.get("/users").then(function(e){var t=e.data.users;a.setState({users:[].concat(Object(i.a)(a.state.users),Object(i.a)(t))})}).catch(function(){return alert("Error fetching new users")})},a.addUser=function(e){var t=e.name,n=e.position,o=e.company;a.setState({users:[].concat(Object(i.a)(a.state.users),[{name:t,position:n,company:o}])})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,{addUser:this.addUser}),o.a.createElement(y,{users:this.state.users}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[201,1,2]]]);
//# sourceMappingURL=main.7d1174bc.chunk.js.map