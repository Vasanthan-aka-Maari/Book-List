(this.webpackJsonpbooklist=this.webpackJsonpbooklist||[]).push([[0],{14:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),o=n.n(r),s=n(6),i=n.n(s),a=(n(14),n(3)),u=n(8),l=n(7),j=n.n(l),b=function(e,t){switch(t.type){case"ADD_BOOK":return[].concat(Object(u.a)(e),[{title:t.book.title,author:t.book.author,id:j()()}]);case"REMOVE_BOOK":return[e.filter((function(e){return e.id!==t.id}))];default:return e}},d=Object(r.createContext)(),O=function(e){var t=Object(r.useReducer)(b,[],(function(){var e=localStorage.getItem("books");return e?JSON.parse(e):[]})),n=Object(a.a)(t,2),o=n[0],s=n[1];return Object(r.useEffect)((function(){localStorage.setItem("books",JSON.stringify(o))}),[o]),Object(c.jsx)(d.Provider,{value:{books:o,dispatch:s},children:e.children})};var h=function(){var e=Object(r.useContext)(d).dispatch,t=Object(r.useState)(""),n=Object(a.a)(t,2),o=n[0],s=n[1],i=Object(r.useState)(""),u=Object(a.a)(i,2),l=u[0],j=u[1],b=Object(r.useRef)();return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==o&&""!==l?(e({type:"ADD_BOOK",book:{title:o,author:l}}),s(""),j(""),b.current.focus()):alert("Please add Title and Author")},children:[Object(c.jsx)("h2",{className:"heading",children:"Add a Book"}),Object(c.jsx)("label",{htmlFor:"title",children:"Title"}),Object(c.jsx)("input",{value:o,onChange:function(e){return s(e.target.value)},type:"text",placeholder:"Book Title",ref:b}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:"author",children:"Author"}),Object(c.jsx)("input",{value:l,onChange:function(e){return j(e.target.value)},type:"text",placeholder:"Book Author"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"submit",value:"Add Book"})]})};var x=function(e){var t=e.book,n=Object(r.useContext)(d).dispatch;return Object(c.jsxs)("li",{children:[Object(c.jsx)("div",{className:"title",children:t.title}),Object(c.jsx)("div",{className:"author",children:t.author}),Object(c.jsx)("button",{className:"remove-book",onClick:function(){return n({type:"REMOVE_BOOK",id:t.id})},children:"Delete Book"})]})};var f=function(){var e=Object(r.useContext)(d).books;return e.length?Object(c.jsx)("div",{className:"book-list",children:Object(c.jsx)("ul",{children:e&&e.map((function(e){return Object(c.jsx)(x,{book:e},e.id)}))})}):Object(c.jsx)("div",{className:"empty",children:"Add some books to read."})};var v=function(){var e=Object(r.useContext)(d).books;return Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsx)("h1",{children:"Reading List"}),Object(c.jsxs)("p",{children:["Currently you have ",e.length," books"]})]})};var p=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(O,{children:[Object(c.jsx)(v,{}),Object(c.jsx)(f,{}),Object(c.jsx)(h,{})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),o(e),s(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.a48d3aa3.chunk.js.map