(this["webpackJsonpjm-client-server-validation"]=this["webpackJsonpjm-client-server-validation"]||[]).push([[0],{199:function(e,a,t){e.exports=t(426)},425:function(e,a,t){},426:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(17),s=t.n(l),o=t(433),i=t(428),c=t(181),m=t(182),d=t(195),u=t(183),p=t(196),w=t(184),g=t(126),h=t(429),b=t(430),E=t(8),y=t(127),f=t(431),v=t(26),k=v.object().shape({name:v.string().max(50,"Too long Name").required("Name is required field."),password:v.string().required("Password is required field."),repeatPassword:v.string().required("You dont repeat password."),email:v.string().email("Invalid email address.").required("Email is required field."),website:v.string().url(),age:v.number().min(18,"18 is min age").max(65,"65 is the max age").required("Age is required field."),skills:v.array(),acceptTerms:v.bool()}),P=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).state={field:null},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state.field;return n.a.createElement(g.b,{initialValues:{name:"",email:"",password:"",repeatPassword:"",website:"",age:"",skills:[],acceptTerms:!1},validationSchema:k,onSubmit:function(e,a){(0,a.setSubmitting)(!1)},validate:function(e){var a={};return/^(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z]).*$/.test(e.password)||(a.password="Password must contains 8-40 latin symbols, one on upper case, and one digit."),e.password!==e.repeatPassword&&(a.repeatPassword="Passwords do not match"),a}},(function(a){var t=a.values,r=a.errors,l=a.touched,s=a.handleChange,o=a.handleBlur,i=a.handleSubmit,c=a.isSubmitting;return n.a.createElement(h.a,{onSubmit:i},n.a.createElement(h.a.Item,{label:"Name"},n.a.createElement(b.a,{placeholder:"Enter your name",name:"name",onBlur:o,onChange:s,value:t.name,prefix:n.a.createElement(E.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}})}),r.name&&l.name&&r.name),n.a.createElement(h.a.Item,{label:"Password"},n.a.createElement(b.a.Password,{placeholder:"Type password",name:"password",type:"password",onBlur:o,onChange:s,value:t.password,prefix:n.a.createElement(E.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}})}),r.password&&l.password&&r.password),n.a.createElement(h.a.Item,{label:"Repeat Password"},n.a.createElement(b.a.Password,{placeholder:"Repeat password",name:"repeatPassword",type:"password",onBlur:o,onChange:s,value:t.repeatPassword,prefix:n.a.createElement(E.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}})}),r.repeatPassword&&l.repeatPassword&&r.repeatPassword),n.a.createElement(h.a.Item,{label:"Email"},n.a.createElement(b.a,{placeholder:"Enter your email",name:"email",type:"email",onBlur:o,onChange:s,value:t.email,prefix:n.a.createElement(E.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}})}),r.email&&l.email&&r.email),n.a.createElement(h.a.Item,{label:"Website URL"},n.a.createElement(b.a,{placeholder:"Your Website",name:"website",onBlur:o,onChange:s,value:t.website,prefix:n.a.createElement(E.a,{type:"link",style:{color:"rgba(0,0,0,.25)"}})}),r.website&&l.website&&r.website),n.a.createElement(h.a.Item,{label:"Age"},n.a.createElement(b.a,{placeholder:"Your Age",name:"age",onBlur:o,onChange:s,value:t.age,prefix:n.a.createElement(E.a,{type:"idcard",style:{color:"rgba(0,0,0,.25)"}})}),r.age&&l.age&&r.age),n.a.createElement(g.a,{name:"skills"},(function(e){return n.a.createElement(h.a.Item,{label:"Skills"},t.skills.length>0&&t.skills.map((function(a,t){return n.a.createElement(n.a.Fragment,{key:Object(w.uniqueId)()},n.a.createElement(b.a,{placeholder:"Add Your Skill",name:"skills[".concat(t,"]"),onChange:s,value:a,prefix:n.a.createElement(E.a,{type:"star",style:{color:"rgba(0,0,0,.25)"}})}),n.a.createElement(E.a,{className:"dynamic-delete-button",type:"minus-circle-o",onClick:function(){return e.remove(t)}}))})),n.a.createElement(y.a,{type:"dashed",onClick:function(){return e.push("")},style:{width:"60%"}},n.a.createElement(E.a,{type:"plus"})," Add new skill"))})),n.a.createElement(h.a.Item,null,n.a.createElement(f.a,{name:"acceptTerms",checked:t.acceptTerms},"I have read the ",n.a.createElement("a",{href:"#agreement"},"agreement ",e)),r.acceptTerms&&l.acceptTerms&&r.acceptTerms),n.a.createElement(y.a,{type:"primary",htmlType:"submit",block:!0,disabled:c},"Register"))}))}}]),a}(n.a.Component),x=o.a.Content;var C=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o.a,null,n.a.createElement(x,null,n.a.createElement(i.a,{type:"flex",justify:"center"},n.a.createElement("h1",null,"New User Register")),n.a.createElement(i.a,{type:"flex",justify:"center"},n.a.createElement(P,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(423),t(424),t(425);s.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[199,1,2]]]);
//# sourceMappingURL=main.ac9dedb7.chunk.js.map