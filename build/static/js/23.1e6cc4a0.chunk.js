(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{676:function(e,t,a){"use strict";a.r(t);var n=a(26),l=a(27),c=a(42),s=a(43),r=a(28),o=a(6),i=a.n(o),u=a(667),m=a(524),p=a(18),f=a(309),g=a(308),d=a(16),E=a(82),h=a(1),b=a(363),v=a(390),N=a(508);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(r.a)(e);if(t){var l=Object(r.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(s.a)(this,a)}}var w=function(e){Object(c.a)(a,e);var t=j(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).responseGoogleFailiure=function(e){console.log(e)},l.state={offers:!1,isAuthenticated:1},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("jwtToken")&&(this.props.showResponseMessage("You are already logged in...","danger"),p.a.push({pathname:"/"}))}},{key:"render",value:function(){this.props.user;return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"login-page"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},i.a.createElement("span",null," ","Login / ",i.a.createElement("b",null,"Register"))),i.a.createElement("div",{className:"offer"},i.a.createElement("div",{className:"d-flex"},i.a.createElement("span",{className:"bg"}),i.a.createElement("span",{className:"text"},"Register or login now to ",i.a.createElement("b",null,"get rs. 2500")," worth of cash coupons in your account to begin shopping"," "))),i.a.createElement(u.a,{className:"m-0 pb-5"},i.a.createElement(m.a,{md:0,lg:1,className:"p-0"},i.a.createElement("div",{className:"sub-title mb"})),i.a.createElement(m.a,{md:6,lg:2,className:"p-sm-3 p-lg-0"},i.a.createElement("div",{className:"sub-title"},"Existing customer login"),i.a.createElement(v.a,null)),i.a.createElement(m.a,{md:6,lg:3,className:"p-m-0 p-lg-0 p-sm-3"},i.a.createElement("div",{className:"sub-title ml-lg-0 pl-lg-5"},"New Customer SignUp"),i.a.createElement(N.a,null)),i.a.createElement(m.a,{md:6,lg:6,className:"p-m-0 p-lg-0 p-sm-3 "},i.a.createElement("div",{className:"sub-title social"},"Social Plugins"),i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"or"},i.a.createElement("span",null,"OR")),i.a.createElement("div",{class:"d-flex flex-column pl-5 ml-5 "},i.a.createElement("div",{className:"d-flex flex-column social-login1"},i.a.createElement("span",{className:"d-block pb-4"},"Use your Social accounts to",i.a.createElement("br",null)," Signup / Login"),i.a.createElement(b.a,null))))))))," ")}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(null!=e.user)p.a.push({pathname:"/",state:{reRender:3}});else if(null==e.user)return{msg:e.msg}}}]),a}(o.Component);t.default=Object(f.a)("authentication",E.a)(Object(g.a)(function(e){return{isAuthenticated:e.authentication.auth.isAuthenticated,user_object:e.authentication.auth.user_object}},function(e,t){return Object(d.c)({showResponseMessage:h.oc},e)})(w))}}]);
//# sourceMappingURL=23.1e6cc4a0.chunk.js.map