(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(71),r=a.n(c),i=(a(90),a(7)),o=a(26),u=a(10),s=a(9),d=a(0),m=(a(92),a(77)),f=a(47),b=function(e){var t=e.onSubmit,a=e.onAddTag,c=e.tags,r=e.noteToEdit,o=Object(n.useState)(r?c.filter(function(e){return r.tagIds.includes(e.id)}).map(function(e){return{label:e.label,value:e.id}}):[]),u=Object(s.a)(o,2),b=u[0],E=u[1],p=Object(n.useRef)(null),g=Object(n.useRef)(null),v=Object(n.useRef)("strat"),y=Object(d.m)();console.log(b);return l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:p.current.value,body:g.current.value,tags:b}),y("/")}},l.a.createElement("div",{className:"container_title_tags"},l.a.createElement("div",{className:"title"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{ref:p,type:"text",id:"title",name:"title",defaultValue:r?r.title:""})),l.a.createElement("div",{className:"tag"},l.a.createElement("label",{htmlFor:"tags"},"Tags"),l.a.createElement(m.a,{ref:v,isMulti:!0,onCreateOption:function(e){var t={label:e,id:Object(f.v4)()};a(t),E(function(e){return[].concat(Object(i.a)(e),[t])})},options:c.map(function(e){return{label:e.label,value:e.id}}),value:b.map(function(e){return{label:e.label,value:e.id}}),onChange:function(e){E(e.map(function(e){return{label:e.label,id:e.value}}))}}))),l.a.createElement("div",{className:"container_body"},l.a.createElement("textarea",{ref:g,type:"textarea",cols:"50",rows:"10",defaultValue:r?r.body:""})),l.a.createElement("div",{className:"container_buttons"},l.a.createElement("button",null,"Cancel"),l.a.createElement("input",{type:"submit"}))))},E=function(e){var t=e.onSubmit,a=e.onAddTag,n=e.tags;return l.a.createElement("div",null,l.a.createElement("h1",null,"New note"),l.a.createElement(b,{onSubmit:t,onAddTag:a,tags:n}))},p=function(e,t){var a=Object(n.useState)(function(){var a=localStorage.getItem(e);return null===a?"function"===typeof t?t():t:JSON.parse(a)}),l=Object(s.a)(a,2),c=l[0],r=l[1];return Object(n.useEffect)(function(){localStorage.setItem(e,JSON.stringify(c))},[c,e]),[c,r]},g=a(72),v=a(16),y=(a(112),function(e){var t=e.NoteWithTags,a=e.DeleteNotes,c=e.tags,r=e.setTags,i=Object(n.useState)(""),o=Object(s.a)(i,2),d=o[0],m=o[1],f=Object(n.useState)([]),b=Object(s.a)(f,2),E=b[0],p=b[1],y=Object(n.useState)(!0),N=Object(s.a)(y,2),h=N[0],j=N[1];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Notes"),l.a.createElement("div",{className:"buttons"},l.a.createElement(v.b,{to:"/new"},l.a.createElement("button",null,"Create")),l.a.createElement("button",{onClick:function(){return j(!1)}},"Edit Tag"),l.a.createElement("button",{onClick:a},"Clear All Notes"))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"},className:"sub_body"},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",padding:"10px",alignItems:"center"},className:"title"},l.a.createElement("label",{style:{paddingRight:"10px"},htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",id:"title",value:d,onChange:function(e){return m(e.target.value)}})),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",padding:"10px",alignItems:"center"},className:"tags"},l.a.createElement("label",{style:{paddingRight:"10px"},htmlFor:"tags"},"Tags"),l.a.createElement(g.a,{styles:{width:"200px"},isMulti:!0,id:"tags",options:c.map(function(e){return{label:e.label,value:e.id}}),value:E.map(function(e){return{label:e.label,value:e.id}}),onChange:function(e){return p(e.map(function(e){return{label:e.label,id:e.value}}))}}))),l.a.createElement("div",{className:"main_body",style:{display:"flex",flexDirection:"column"}},d||E.length?t.filter(function(e){return""===d?E.some(function(t){return e.tagIds.includes(t.id)}):e.title.toLowerCase().includes(d.toLocaleLowerCase())||E.some(function(t){return e.tagIds.includes(t.id)})}).map(function(e){return l.a.createElement(v.b,{key:e.id,to:"/".concat(e.id,"/note")},l.a.createElement("div",{className:"card",style:{border:"2px solid black"}},l.a.createElement("h3",null,e.title),E.filter(function(t){return e.tagIds.includes(t.id)}).map(function(e){return l.a.createElement("h5",{key:e.id},e.label)})))}):t.map(function(e){return l.a.createElement(v.b,{key:e.id,to:"/".concat(e.id,"/note")},l.a.createElement("div",{className:"card",style:{border:"2px solid black"}},l.a.createElement("h3",null,e.title),e.tag.map(function(e){return l.a.createElement("h5",{key:e.id},e.label)})))}),l.a.createElement("div",{className:"modal_container",style:{border:"solid black 2px"}},l.a.createElement("div",{className:"overlay ".concat(h?"inactive":""),style:{width:"100%",position:"absolute",top:"0px",zIndex:10}}),l.a.createElement("div",{className:"modal ".concat(h?"inactive":""),style:{width:"37%",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"absolute",top:"0px",backgroundColor:"whitesmoke",zIndex:10}},l.a.createElement("h1",{style:{display:"flex",alignItems:"center",justifyContent:"end"}},"Edit tags ",l.a.createElement("button",{style:{width:"40%",textAlign:"end",border:"none",backgroundColor:"transparent",fontSize:"50px"},onClick:function(){return j(!0)}}," \xd7")),c.map(function(e){return l.a.createElement("div",{style:{display:"flex",flexDirection:"row",padding:"10px",justifyContent:"space-evenly"},key:e.id},l.a.createElement("input",{type:"text",value:e.label,onChange:function(t){return a=e.id,n=t.target.value,void r(function(e){return e.map(function(e){return e.id===a?Object(u.a)({},e,{label:n}):e})});var a,n}}),l.a.createElement("button",{onClick:function(){return t=e.id,void r(function(e){return e.filter(function(e){return e.id!==t})});var t}},"\xd7"))})))))}),N=a(128),h=function(e){var t=e.notes,a=e.setNotes,n=Object(d.o)().id,c=Object(d.m)(),r=t.find(function(e){return e.id===n});return l.a.createElement("div",{className:"noteContainer"},l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignContent:"flex-end"},className:"noteHeader"},l.a.createElement("h1",null,"Note"),l.a.createElement("div",{style:{display:"flex",alignItems:"center"},className:"noteHeaderButtons"},l.a.createElement("button",null,l.a.createElement(v.b,{to:"/".concat(r.id,"/edit")},"Edit")),l.a.createElement("button",{onClick:function(){return function(e){a(function(){return t.filter(function(t){return t.id!==e.id})}),c("/")}(r)}},"Delete"),l.a.createElement("button",null,l.a.createElement(v.b,{to:"/"},"Back")))),l.a.createElement("div",{className:"noteDetails"},l.a.createElement("div",{className:"noteTitleandTags"},l.a.createElement("input",{type:"text",defaultValue:r.title}),l.a.createElement("div",{className:"noteTags"},r.tag.map(function(e){return l.a.createElement("div",{key:e.id,className:"tag"},e.label)}))),l.a.createElement("div",{className:"noteBody"},l.a.createElement(N.a,null,r.body))))},j=function(e){var t=e.onSubmit,a=e.onAddTag,n=e.tags,c=e.notes,r=Object(d.o)().id,i=c.find(function(e){return e.id===r});return l.a.createElement("div",null,l.a.createElement("h1",null,"Edit note"),l.a.createElement(b,{onSubmit:t,onAddTag:a,tags:n,noteToEdit:i}))};var x=function(){var e=p("NOTES",[]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=p("TAGS",[]),m=Object(s.a)(r,2),b=m[0],g=m[1],v=Object(n.useMemo)(function(){return a.map(function(e){return console.log(e,"memo"),Object(u.a)({},e,{tag:b.filter(function(t){return e.tagIds.includes(t.id)})})})},[b,a]),N=function(e){g(function(t){return[].concat(Object(i.a)(t),[e])})};return l.a.createElement("div",{className:"App"},l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/",element:l.a.createElement(y,{NoteWithTags:v,DeleteNotes:function(){localStorage.clear(),window.location.reload()},tags:b,setTags:g})}),l.a.createElement(d.b,{path:"/new",element:l.a.createElement(E,{onSubmit:function(e){var t=e.tags,a=Object(o.a)(e,["tags"]);console.log("truely verily"),c(function(e){return[].concat(Object(i.a)(e),[Object(u.a)({},a,{id:Object(f.v4)(),tagIds:t.map(function(e){return e.id})})])})},onAddTag:N,tags:b})}),l.a.createElement(d.b,{path:"*",element:l.a.createElement(d.a,{to:"/"})}),l.a.createElement(d.b,{path:"/:id"},l.a.createElement(d.b,{path:"show",element:l.a.createElement("h1",null,"Show")}),l.a.createElement(d.b,{path:"note",element:l.a.createElement(h,{notes:v,setNotes:c})}),l.a.createElement(d.b,{path:"edit",element:l.a.createElement(j,{onSubmit:function(e){var t=e.tags,a=e.id,n=Object(o.a)(e,["tags","id"]);c(function(e){return e.map(function(e){return e.id===a?Object(u.a)({},e,n,{tagIds:t.map(function(e){return e.id})}):e})})},onAddTag:N,tags:b,notes:v})}))))};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v.a,null,l.a.createElement(x,null))))},82:function(e,t,a){e.exports=a(118)},90:function(e,t,a){},92:function(e,t,a){}},[[82,2,1]]]);
//# sourceMappingURL=main.8b26a8bc.chunk.js.map