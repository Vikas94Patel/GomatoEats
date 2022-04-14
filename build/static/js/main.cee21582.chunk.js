(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__9RpD6",summary:"CartItem_summary__1WHqb",price:"CartItem_price__3f0RH",amount:"CartItem_amount__2E-39",actions:"CartItem_actions__3NZ9-"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2bbmM",total:"Cart_total__3QjTi",actions:"Cart_actions__3w2aX","button--alt":"Cart_button--alt__3wo9G",button:"Cart_button__1PPWC"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__ByBPB",icon:"HeaderCartButton_icon__7FJpv",badge:"HeaderCartButton_badge__28qFV",bump:"HeaderCartButton_bump__hyNGC"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__Ipvtp",modal:"Modal_modal__sM6yb","slide-down":"Modal_slide-down__2Z4Gp"}},function(e,t,n){e.exports={meal:"MealItem_meal__ZAloq",description:"MealItem_description__1WRDA",price:"MealItem_price__3Da-g"}},function(e,t,n){e.exports={header:"Header_header__kff_J","main-image":"Header_main-image__1hcYV"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__3OBHr"}},function(e,t,n){e.exports={card:"Card_card__2KNf9"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2HAx2","meals-appear":"AvailableMeals_meals-appear__1i7af"}},function(e,t,n){e.exports={input:"Input_input__25IuI"}},function(e,t,n){e.exports={form:"MealItemForm_form__2sZOW"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(2)),r=n(1),s=n.n(r),o=n(8),l=n.n(o),m=n(10),u=n.n(m),d=n(0),j=function(e){return Object(d.jsx)("div",{className:u.a.backdrop,onClick:e.onClose})},b=function(e){return Object(d.jsx)("div",{className:u.a.modal,children:Object(d.jsx)("div",{className:u.a.content,children:e.children})})},p=document.getElementById("overlays");var x=function(e){return Object(d.jsxs)(r.Fragment,{children:[l.a.createPortal(Object(d.jsx)(j,{onClose:e.onClose}),p),l.a.createPortal(Object(d.jsx)(b,{children:e.children}),p)]})},O=s.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(){}}),h=n(4),_=n.n(h),f=function(e){var t="\u20b9".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:_.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:_.a.summary,children:[Object(d.jsx)("span",{className:_.a.price,children:t}),Object(d.jsxs)("span",{className:_.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:_.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},v=n(5),C=n.n(v);var g=function(e){var t=Object(r.useContext)(O),n="\u20b9".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.addItem(e)},i=function(e){t.removeItem(e)},s=Object(d.jsx)("ul",{className:C.a["cart-items"],children:t.items.map((function(e){return Object(d.jsx)(f,{name:e.name,amount:e.amount,price:e.price,onRemove:i.bind(null,e.id),onAdd:c.bind(null,e)},e.id)}))});return Object(d.jsxs)(x,{onClose:e.onClose,children:[s,Object(d.jsxs)("div",{className:C.a.total,children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:n})]}),Object(d.jsxs)("div",{className:C.a.actions,children:[Object(d.jsx)("button",{className:C.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(d.jsx)("button",{className:C.a.button,children:"Order"})]})]})},N=n.p+"static/media/meals.e0eefc1a.jpg",A=n(12),y=n.n(A),I=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},w=n(7),M=n.n(w);var H=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(O).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(M.a.button," ").concat(a?M.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(d.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(d.jsx)("span",{className:M.a.icon,children:Object(d.jsx)(I,{})}),Object(d.jsx)("span",{children:"Your Cart"}),Object(d.jsx)("span",{className:M.a.badge,children:o})]})};var B=function(e){return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsxs)("header",{className:y.a.header,children:[Object(d.jsx)("h1",{children:"GomatoEats"}),Object(d.jsx)(H,{onClick:e.onShowCart})]}),Object(d.jsx)("div",{className:y.a["main-image"],children:Object(d.jsx)("img",{src:N,alt:"Burger"})})]})},k=n(16),F=n.n(k),R=function(){return Object(d.jsxs)("section",{className:F.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},D=n(17),E=n.n(D),P=function(e){return Object(d.jsx)("div",{className:E.a.card,children:e.children})},S=n(18),T=n.n(S),z=n(11),G=n.n(z),V=n(3),q=n(19),J=n.n(q),W=s.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:J.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(V.a)({ref:t},e.input))]})})),Z=n(20),Y=n.n(Z);var K=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(d.jsxs)("form",{className:Y.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>10?c(!1):e.onAddToCart(a)},children:[Object(d.jsx)(W,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"10",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"+"}),!a&&Object(d.jsx)("p",{children:"Please Enter a valid amount (1-10)."})]})};var Q=function(e){var t=Object(r.useContext)(O),n="\u20b9".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:G.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{className:G.a.description,children:e.description}),Object(d.jsx)("div",{className:G.a.price,children:n})]}),Object(d.jsx)("div",{children:Object(d.jsx)(K,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},X=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:499.99},{id:"m2",name:"Pizza",description:"A german specialty!",price:250},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:399.5},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:189.99}];var L=function(){var e=X.map((function(e){return Object(d.jsx)(Q,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(d.jsx)("section",{className:T.a.meals,children:Object(d.jsx)(P,{children:Object(d.jsx)("ul",{children:e})})})};var U=function(){return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(R,{}),Object(d.jsx)(L,{})]})},$=n(13),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(V.a)(Object(V.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object($.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(V.a)(Object(V.a)({},l),{},{amount:l.amount-1});(s=Object($.a)(e.items))[o]=u}return{items:s,totalAmount:m}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(d.jsx)(O.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(ne,{children:[n&&Object(d.jsx)(g,{onClose:function(){a(!1)}}),Object(d.jsx)(B,{onShowCart:function(){a(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(U,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.cee21582.chunk.js.map