(this["webpackJsonpreact-redux-hw-06-counter"]=this["webpackJsonpreact-redux-hw-06-counter"]||[]).push([[0],{23:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),o=n.n(c),u=n(3),a=n.n(u),i=n(4),s=n(11);function l(e){e.stepValue;var t=e.onChangeStep,n=Object(c.useState)(5),o=Object(s.a)(n,2),u=o[0],a=o[1];return Object(c.useEffect)((function(){t(u)}),[t,u]),Object(r.jsx)("input",{type:"text",value:u,onChange:function(e){a(Number(e.target.value))},style:{display:"block",marginBottom:"15px",width:"30px",textAlign:"center"}})}function p(e){var t=e.value;return Object(r.jsx)("span",{style:{marginBottom:"15px"},children:t})}function d(e){var t=e.step,n=e.onIncrement,c=e.onDecrement;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("button",{onClick:function(){return c(t)},children:["\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043d\u0430 ",t]}),Object(r.jsxs)("button",{onClick:function(){return n(t)},children:["\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043d\u0430 ",t]})]})}var j=Object(i.b)((function(e){return{value:e.counter.value,step:e.counter.step}}),(function(e){return{onIncrement:function(t){return e({type:"counter/Increment",payload:{increment:t}})},onDecrement:function(t){return e({type:"counter/Decrement",payload:{decrement:t}})},onChangeStep:function(t){return e({type:"counter/Step",payload:{stepValue:t}})}}}))((function(e){var t=e.step,n=e.onChangeStep,c=e.value,o=e.onIncrement,u=e.onDecrement;return Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"100px"},children:[Object(r.jsx)(l,{stepValue:t,onChangeStep:n}),Object(r.jsx)(p,{value:c}),Object(r.jsx)(d,{onIncrement:o,onDecrement:u,step:t})]})}));function b(){return Object(r.jsx)(j,{})}var m=n(2),h=n(10),v=Object(m.combineReducers)({value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"counter/Increment":return e+r.increment;case"counter/Decrement":return e-r.decrement;default:return e}},step:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"counter/Step":return r.stepValue;default:return e}}}),f=Object(m.combineReducers)({counter:v}),x=Object(m.createStore)(f,Object(h.composeWithDevTools)());a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(i.a,{store:x,children:Object(r.jsx)(b,{})})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6412bbf2.chunk.js.map