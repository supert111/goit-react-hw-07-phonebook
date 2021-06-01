(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={wrapper:"ContactForm_wrapper__Yju5d",input_display:"ContactForm_input_display__1HQ6E",button_prime:"ContactForm_button_prime__iavMc"}},29:function(t,e,n){t.exports={button:"ContactList_button__3gFlr",contact:"ContactList_contact__1-Sk9"}},30:function(t,e,n){t.exports={container:"App_container__3_Wnq",wrapper:"App_wrapper__3AY0F"}},42:function(t,e,n){t.exports={input_display:"Filter_input_display__1-LR_"}},81:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(17),o=n.n(r),u=n(20),i=n(21),s=n(24),l=n(22),b=n(9),p=n(4),d=n(14),j=n.n(d),f=n(28),h=n.n(f),O=n(10),m=n.n(O),v=n(25),x=n(15),C=n.n(x),y=n(3),_=Object(y.b)("contacts/fetchContactRequest"),g=Object(y.b)("contacts/fetchContactSuccess"),w=Object(y.b)("contacts/fetchContactError"),k=Object(y.b)("contacts/addContactRequest"),A=Object(y.b)("contacts/addContactSuccess"),S=Object(y.b)("contacts/addContactError"),F=Object(y.b)("contacts/deleteContactRequest"),N=Object(y.b)("contacts/deleteContactSuccess"),z=Object(y.b)("contacts/deleteContactError"),L=Object(y.b)("contacts/SearchByFilter");C.a.defaults.baseURL="http://localhost:4040";var q,B,Z,D=n(19),E=function(t){return t.state.loading},M=Object(D.a)([function(t){return t.state.contacts},function(t){return t.state.filter}],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),R=n(23),J=n(5),P=Object(y.c)([],(q={},Object(p.a)(q,g,(function(t,e){return e.payload})),Object(p.a)(q,A,(function(t,e){var n=e.payload;return t.find((function(t){return t.name===n.name}))?(alert("".concat(n.name," is already in contacts.")),t):""===n.name?(alert("Please fill out the form it is empty."),t):""===n.number?(alert("Please fill out the form with your phone number, it is empty."),t):[n].concat(Object(R.a)(t))})),Object(p.a)(q,N,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),q)),Y=Object(y.c)(!1,(B={},Object(p.a)(B,_,(function(){return!0})),Object(p.a)(B,g,(function(){return!1})),Object(p.a)(B,w,(function(){return!1})),Object(p.a)(B,k,(function(){return!0})),Object(p.a)(B,A,(function(){return!1})),Object(p.a)(B,S,(function(){return!1})),Object(p.a)(B,F,(function(){return!0})),Object(p.a)(B,N,(function(){return!1})),Object(p.a)(B,z,(function(){return!1})),B)),$=Object(y.c)("",Object(p.a)({},L,(function(t,e){return e.payload}))),H=Object(y.c)(null,(Z={},Object(p.a)(Z,w,(function(t,e){return e.payload})),Object(p.a)(Z,S,(function(t,e){return e.payload})),Object(p.a)(Z,z,(function(t,e){return e.payload})),Z)),I=Object(J.b)({contacts:P,filter:$,loading:Y,error:H}),Q=n(1),T=h.a.generate(),U=h.a.generate(),W=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(Q.jsxs)("form",{className:j.a.wrapper,onSubmit:this.handleSubmit,children:[Object(Q.jsxs)("label",{htmlFor:T,children:["Name",Object(Q.jsx)("input",{className:j.a.input_display,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:T,onChange:this.handleChange})]}),Object(Q.jsxs)("label",{htmlFor:U,children:["Number",Object(Q.jsx)("input",{className:j.a.input_display,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:U,onChange:this.handleChange})]}),Object(Q.jsx)("button",{className:j.a.button_prime,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),G=Object(b.b)(null,(function(t){return{onSubmit:function(e,n){return t(function(t){var e=t.name,n=t.number;return function(){var t=Object(v.a)(m.a.mark((function t(a){var c,r,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={name:e,number:n},a(k()),t.prev=2,t.next=5,C.a.post("/contacts",c);case 5:r=t.sent,o=r.data,console.log("add",o),a(A(o)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),a(S(t.t0));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}()}(e))}}}))(W),K=n(29),V=n.n(K),X=Object(b.b)((function(t){return{phoneBook:M(t)}}),(function(t){return{onDeleteContact:function(e){return t((n=e,function(){var t=Object(v.a)(m.a.mark((function t(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(F()),t.prev=1,t.next=4,C.a.delete("/contacts/".concat(n));case 4:e(N(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e(z(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()));var n}}}))((function(t){var e=t.phoneBook,n=t.onDeleteContact;return Object(Q.jsx)("ul",{children:e.map((function(t){return Object(Q.jsxs)("li",{className:V.a.contact,children:[t.name,": ",t.number,Object(Q.jsx)("button",{className:V.a.button,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})),tt=n(42),et=n.n(tt),nt=Object(b.b)(null,(function(t){return{onChange:function(e){return t(L(e.target.value))}}}))((function(t){var e=t.onChange;return Object(Q.jsxs)("label",{children:["Find contacts by name",Object(Q.jsx)("input",{className:et.a.input_display,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:e})]})})),at=n(30),ct=n.n(at),rt=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={},t.handleFilter=function(e){var n=e.target.value;t.setState({filter:n})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContact()}},{key:"render",value:function(){return Object(Q.jsx)("div",{className:ct.a.container,children:Object(Q.jsxs)("div",{className:ct.a.wrapper,children:[Object(Q.jsx)("h1",{children:"Phonebook"}),Object(Q.jsx)(G,{}),Object(Q.jsx)("h2",{children:"Contacts"}),Object(Q.jsx)(nt,{}),this.props.isLoading&&Object(Q.jsx)("h1",{children:"Loading..."}),Object(Q.jsx)(X,{})]})})}}]),n}(a.Component),ot=Object(b.b)((function(t){return{isLoading:E(t)}}),(function(t){return{fetchContact:function(){return t(function(){var t=Object(v.a)(m.a.mark((function t(e){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(_()),t.prev=1,t.next=4,C.a.get("/contacts");case 4:n=t.sent,a=n.data,console.log("fetchContacts",a),e(g(a)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e(w(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}())}}}))(rt),ut=n(44),it=n(11),st=n(43),lt=n.n(st),bt=[].concat(Object(R.a)(Object(y.d)({serializableCheck:{ignoredActions:[it.a,it.f,it.b,it.c,it.d,it.e]}})),[lt.a]),pt=Object(y.a)({reducer:{state:I},middleware:bt,devTools:!1});o.a.render(Object(Q.jsx)(c.a.StrictMode,{children:Object(Q.jsx)(b.a,{store:pt,children:Object(Q.jsx)(ut.a,{children:Object(Q.jsx)(ot,{})})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.40586bb4.chunk.js.map