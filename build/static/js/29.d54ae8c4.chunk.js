(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{684:function(e,a,t){"use strict";t.r(a);var r=t(26),s=t(27),n=t(42),c=t(43),o=t(28),l=t(6),m=t.n(l),u=t(664),i=t(523),d=t(688),w=t(524);t(3);function p(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,r=Object(o.a)(e);if(a){var s=Object(o.a)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return Object(c.a)(this,t)}}var f=function(e){Object(n.a)(t,e);var a=p(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).handleSubmit=function(){var e=s.pswdForm,a=e.currentPassword,t=e.newPassword,r=e.confirmPassword;s.props.submitPassword(a.value,t.value,r.value)},s.clearPswdField=function(){},s.state={user:null},s}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return"green"===this.state.variant&&this.clearPswdField(),m.a.createElement("div",{id:"password"},m.a.createElement("div",{className:"head"},"Change Password"),m.a.createElement(u.a,{className:"m-0"},m.a.createElement(i.a,{md:7},m.a.createElement(d.a,{ref:function(a){return e.pswdForm=a}},m.a.createElement(d.a.Group,{as:u.a,controlId:"current-password",className:"mb-4"},m.a.createElement(d.a.Label,{column:!0,sm:3,className:"pr-0"},"Current Password*:"),m.a.createElement(i.a,{sm:9},m.a.createElement(d.a.Control,{type:"password",name:"currentPassword",placeholder:"Current Password"}))),m.a.createElement(d.a.Group,{as:u.a,controlId:"new-password",className:"mb-4"},m.a.createElement(d.a.Label,{column:!0,sm:3,className:"pr-0"},"New Password*:"),m.a.createElement(i.a,{sm:9},m.a.createElement(d.a.Control,{type:"password",name:"newPassword",placeholder:"New Password"}))),m.a.createElement(d.a.Group,{as:u.a,controlId:"confirm-password",className:"mb-4"},m.a.createElement(d.a.Label,{column:!0,sm:3,className:"pr-0"},"Confirm Password*:"),m.a.createElement(i.a,{sm:9},m.a.createElement(d.a.Control,{type:"password",name:"confirmPassword",className:"mb-4",placeholder:"Confirm Password"}),m.a.createElement("p",{style:{color:"".concat(this.state.variant)}},this.state.Pswdmsg),m.a.createElement(w.a,{className:"btn-submit",onClick:this.handleSubmit},"Save"),m.a.createElement(w.a,{className:"btn-submit btn-cancel",onClick:this.clearPswdField},"Cancel"))))),m.a.createElement(i.a,{md:5})))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return{user:e.user,Pswdmsg:e.Pswdmsg,variant:e.variant}}}]),t}(l.Component);a.default=f}}]);
//# sourceMappingURL=29.d54ae8c4.chunk.js.map