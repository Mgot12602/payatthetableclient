(this["webpackJsonppayatthetable-client"]=this["webpackJsonppayatthetable-client"]||[]).push([[0],{26:function(e,t,n){},48:function(e,t,n){},54:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),r=n.n(a),c=n(27),i=n.n(c),o=n(2),l=n(3),d=n(5),h=n(4),u=n(7),j=(n(48),function(){return Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsxs)("div",{className:"spinner",children:[Object(s.jsx)("div",{className:"bounce1"}),Object(s.jsx)("div",{className:"bounce2"}),Object(s.jsx)("div",{className:"bounce3"})]})})}),b=n(14),m=n(6),p="/admin/view-all-orders",O="/admin/create-menu",x="/admin/create-dish",f=function(e){var t=r.a.useState(""),n=Object(b.a)(t,2),a=n[0],c=n[1];return Object(s.jsx)("nav",{className:"navbar has-background-primary is-fixed-top",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"navbar-start",children:Object(s.jsx)(m.b,{to:"/",className:" navbar-item is-size-3 is-size-5-mobile",children:"Pay at the table App"})}),Object(s.jsx)("div",{className:"navbar-end",children:e.user?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(m.b,{to:p,className:" navbar-item",children:"View All Orders"}),Object(s.jsx)(m.b,{to:O,className:" navbar-item",children:"Edit your menu"}),Object(s.jsx)(m.b,{to:x,className:" navbar-item",children:"Create new dish"}),Object(s.jsx)("button",{className:" navbar-item",onClick:e.handleLogout,children:"Logout"})]}):Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"navbar-item has-dropdown ".concat(a?"is-active":""),children:[Object(s.jsx)("a",{onClick:function(){return c(!a)},className:"navbar-link",children:"Admin Access"}),Object(s.jsxs)("div",{className:"navbar-dropdown is-boxed",children:[Object(s.jsx)(m.b,{to:"/auth/signup",className:"navbar-item",children:"Join?"}),Object(s.jsx)(m.b,{to:"/auth/login",className:"navbar-item",children:"Log In"})]})]})})})]})})},v=(n.p,n(54),n(18)),g=n.n(v);function N(e){return console.log("err:",e.response.data),e.response&&e.response.data&&e.response.data.errorMessage?{status:!1,errorMessage:e.response.data.errorMessage}:{status:!1,errorMessage:"Internal server error. Please check your server"}}var y=g.a.create({baseURL:"".concat("http://localhost:5005/api","/order")});function S(e){return y.post("/addNewOrder",e).then((function(e){return e.data})).catch(N)}function C(e){return y.post("/addDishToOrder",e).then((function(e){return e.data})).catch(N)}function w(e){return y.post("/getOrder",e).then((function(e){return e.data})).catch(N)}function k(e){return y.post("/getTotal",e).then((function(e){return e.data})).catch(N)}function L(e){return y.post("/changeToPaid",e).then((function(e){return e.data})).catch(N)}function T(){return y.get("/getAllOrders").then((function(e){return e.data})).catch(N)}function D(e){return y.post("/clearTable",e).then((function(e){return e.data})).catch(N)}function I(e){return y.post("/removeDishFromOrder",e).then((function(e){return e.data})).catch(N)}var P=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={tableNumber:0},e.handleChange=function(t){e.setState({tableNumber:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),S({table:e.state.tableNumber}).then((function(){})).then((function(){e.props.history.push("/".concat(e.state.tableNumber))}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"hero is-fullheight-with-navbar",children:[Object(s.jsx)(f,{handleLogout:this.handleLogout,user:this.state.user}),Object(s.jsxs)("div",{className:"section main-image",style:{backgroundImage:"url(/images/coolrestaurant.jpg)"},children:[Object(s.jsx)("section",{className:"section",children:Object(s.jsx)("div",{className:"tile-ancestor",children:Object(s.jsx)("div",{className:"tile is-parent is-justify-content-center",children:Object(s.jsx)("div",{className:"tile is-child box has-text-centered has-background-primary is-4 is-justify-content-center",children:Object(s.jsx)("h1",{className:"title ",children:"The Iron Restaurant"})})})})}),Object(s.jsx)("div",{className:"section",children:Object(s.jsx)("div",{className:"container ",children:Object(s.jsxs)("div",{className:"tile is-ancestor evenly ",children:[Object(s.jsx)("div",{className:"tile is-parent  is-4 ",children:Object(s.jsx)("div",{className:"tile is-child box has-background-primary is-justify-content-center",children:Object(s.jsx)("h2",{className:"title has-text-centered",children:"Scan the QR code on your table"})})}),Object(s.jsx)("div",{className:"tile is-parent  is-4 ",children:Object(s.jsx)("div",{className:"tile is-child box has-background-primary has-text-centered",children:Object(s.jsxs)("form",{className:"is-justify-content-center",onSubmit:this.handleSubmit,children:[Object(s.jsxs)("div",{className:"field",children:[Object(s.jsx)("label",{className:"label",id:"table-number",children:"Enter your table Number for the Demo:"}),Object(s.jsx)("div",{className:"control",children:Object(s.jsx)("div",{className:"column is-4 is-offset-4",children:Object(s.jsx)("input",{className:"input",name:"tableNumber",type:"number",value:this.state.tableNumber,onChange:this.handleChange})})})]}),Object(s.jsx)("div",{className:"field ",children:Object(s.jsx)("div",{className:"control ",children:Object(s.jsx)("button",{className:"button is-link is-large",type:"submit",children:"Enter"})})})]})})})]})})})]})]})}}]),n}(a.Component),A=n(13);function M(e){return console.log("err:",e.response.data),e.response&&e.response.data&&e.response.data.errorMessage?{status:!1,errorMessage:e.response.data.errorMessage}:{status:!1,errorMessage:"Internal server error. Please check your server"}}function F(e){return{status:!0,data:e.data}}var _=g.a.create({baseURL:"".concat("http://localhost:5005/api","/auth")});function R(e){return _.post("/login",e).then(F).catch(M)}function E(){return _.get("session",{headers:{Authorization:localStorage.getItem("accessToken")}}).then(F).catch(M)}function z(e){return _.post("/signup",e).then(F).catch(M)}function U(){return _.delete("/logout",{headers:{Authorization:localStorage.getItem("accessToken")}}).then(F).catch(M)}var J=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",error:null},e.handleInputChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(A.a)({},s,a))},e.handleFormSubmission=function(t){t.preventDefault(),z({username:e.state.username,password:e.state.password}).then((function(t){t.status,localStorage.setItem("accessToken",t.data.accessToken),e.props.authenticate(t.data.user),e.props.history.push(p)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Sign Up"}),Object(s.jsxs)("form",{onSubmit:this.handleFormSubmission,className:"auth__form",children:[Object(s.jsx)("label",{htmlFor:"input-username",children:"Username"}),Object(s.jsx)("input",{id:"input-username",type:"text",name:"username",placeholder:"Text",value:this.state.username,onChange:this.handleInputChange,required:!0}),Object(s.jsx)("label",{htmlFor:"input-password",children:"Password"}),Object(s.jsx)("input",{id:"input-password",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleInputChange,required:!0,minLength:"8"}),this.state.error&&Object(s.jsxs)("div",{className:"error-block",children:[Object(s.jsx)("p",{children:"There was an error submiting the form:"}),Object(s.jsx)("p",{children:this.state.error.message})]}),Object(s.jsx)("button",{className:"button__submit",type:"submit",children:"Submit"})]})]})}}]),n}(a.Component),q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",error:null},e.handleInputChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(A.a)({},s,a))},e.handleFormSubmission=function(t){t.preventDefault(),R({username:e.state.username,password:e.state.password}).then((function(t){t.status,localStorage.setItem("accessToken",t.data.accessToken),e.props.authenticate(t.data.user),e.props.history.push(p)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Log In"}),Object(s.jsxs)("form",{onSubmit:this.handleFormSubmission,className:"signup__form",children:[Object(s.jsx)("label",{htmlFor:"input-username",children:"Username"}),Object(s.jsx)("input",{id:"input-username",type:"text",name:"username",placeholder:"username",value:this.state.username,onChange:this.handleInputChange,required:!0}),Object(s.jsx)("label",{htmlFor:"input-password",children:"Password"}),Object(s.jsx)("input",{id:"input-password",type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleInputChange,required:!0,minLength:"8"}),this.state.error&&Object(s.jsxs)("div",{className:"error-block",children:[Object(s.jsx)("p",{children:"There was an error submiting the form:"}),Object(s.jsx)("p",{children:this.state.error.message})]}),Object(s.jsx)("button",{className:"button__submit",type:"submit",children:"Submit"})]})]})}}]),n}(a.Component),V=n(16),Y=n(23),B=function(e){var t=e.exact,n=e.to,a=e.path,r=e.component,c=Object(Y.a)(e,["exact","to","path","component"]),i=r;return Object(s.jsx)(u.b,{exact:t,to:n,path:a,render:function(e){return Object(s.jsx)(i,Object(V.a)(Object(V.a)({},c),e))}})},H=function(e){var t=e.user,n=e.exact,a=e.to,r=e.component,c=Object(Y.a)(e,["user","exact","to","component"]),i=r;return t?Object(s.jsx)(u.b,{exact:n,to:a,render:function(e){return Object(s.jsx)(i,Object(V.a)(Object(V.a)(Object(V.a)({},c),e),{},{user:t}))}}):Object(s.jsx)(u.a,{to:"/"})};function W(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("nav",{className:"admin-navbar",children:[Object(s.jsx)(m.b,{to:p,children:"View All Orders"}),Object(s.jsx)(m.b,{to:O,children:"Edit your menu"}),Object(s.jsx)(m.b,{to:x,children:"Create new dish"}),Object(s.jsx)("button",{onClick:e.handleLogout,children:"Logout"})]})})}n(26);var G=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={orders:null},e.componentDidMount=function(){T().then((function(t){e.setState({orders:t})}))},e.handleClear=function(t){D({table:t}).then((function(t){T().then((function(t){e.setState({orders:t})}))}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return this.state.orders?Object(s.jsxs)("div",{children:[Object(s.jsx)(W,{handleLogout:this.props.handleLogout}),Object(s.jsx)("div",{className:"viewallorders-container",children:this.state.orders.map((function(t,n){return Object(s.jsxs)("div",{className:"allOrders-container",children:[Object(s.jsxs)("h2",{children:["table: ",t.table]}),t.dishesOrdered.map((function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.units}),Object(s.jsxs)("td",{children:["  ","\xa0\xa0 ",e.dishType.name]})]})})})),Object(s.jsx)("button",{onClick:function(){return e.handleClear(t.table)},children:"Clear order"})]})}))})]}):Object(s.jsx)("div",{children:"NO ORDERS ..."})}}]),n}(a.Component);function K(e){return console.log("err:",e.response.data),e.response&&e.response.data&&e.response.data.errorMessage?{status:!1,errorMessage:e.response.data.errorMessage}:{status:!1,errorMessage:"Internal server error. Please check your server"}}var Q=g.a.create({baseURL:"".concat("http://localhost:5005/api")});function Z(e){return Q.post("/newDish",e).then((function(e){console.log(e)})).catch(K)}function X(e){return Q.post("/addDishToMenu",e).then((function(e){return e.data})).catch(K)}function $(e){return Q.post("/removeDishFromMenu",e).then((function(e){return e.data})).catch(K)}function ee(){return Q.get("/getAllDishes").then((function(e){return e.data})).catch(K)}function te(){return Q.get("/getMenu").then((function(e){return e.data})).catch(K)}var ne=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={dishes:[],selectedDishName:"",menu:[],user:"",isLoading:!0},e.componentDidMount=function(){console.log("what is the data in this.props.user?",e.props.user),ee().then((function(t){e.setState({dishes:t,user:e.props.user})})),te().then((function(t){e.setState({menu:t,isLoading:!1})}))},e.handleSubmit=function(t){t.preventDefault(),X({filteredDish:e.state.dishes.filter((function(t){return t.name===e.state.selectedDishName})),user:e.state.user}).then((function(t){e.setState({menu:t})}))},e.handleRemove=function(t){t.preventDefault(),console.log("this.state.selectedDishName",e.state.selectedDishName),$({filteredDish:e.state.dishes.filter((function(t){return t.name===e.state.selectedDishName})),user:e.state.user}).then((function(t){e.setState({menu:t})}))},e.handleChange=function(t){e.setState({selectedDishName:t.target.value})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.dishes;return this.state.isLoading?Object(s.jsx)("div",{children:"Loading ..."}):Object(s.jsxs)("div",{children:[Object(s.jsx)(W,{handleLogout:this.props.handleLogout,onChange:this.handleChange}),Object(s.jsxs)("div",{className:"createMenuContainer",children:[Object(s.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(s.jsx)("label",{id:"dish",children:"Select the dish to add:"}),Object(s.jsx)("select",{name:"SelectedDishName",id:"dish",value:this.state.selectedDishName,onChange:this.handleChange,children:e.map((function(e){return Object(s.jsx)("option",{children:e.name})}))}),Object(s.jsx)("button",{id:"green",type:"submit",children:"Add to menu"})]}),Object(s.jsxs)("div",{className:"createMenuContainer",children:[Object(s.jsx)("h1",{children:"Current Menu"}),this.state.menu[0].dishes.map((function(e){return Object(s.jsx)("div",{children:e.name})}))]}),Object(s.jsxs)("form",{onSubmit:this.handleRemove,children:[Object(s.jsx)("label",{id:"dish",children:"Select the dish to remove:"}),Object(s.jsx)("select",{name:"SelectedDishName",id:"dish",value:this.state.selectedDishName,onChange:this.handleChange,children:e.map((function(e){return Object(s.jsx)("option",{children:e.name})}))}),Object(s.jsx)("button",{id:"red",type:"submit",children:"Remove"})]})]})]})}}]),n}(a.Component),se=n(42),ae=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={dishes:[],name:"",description:"",tags:"",format:"",picture_url:"",stock:"",type:"",price:0},e.handleChange=function(t){e.setState(Object(A.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),Z({name:e.state.name,description:e.state.description,tags:e.state.tags,format:e.state.format,picture_url:e.state.picture_url,stock:e.state.stock,type:e.state.type,price:e.state.price}).then((function(t){e.setState({dishes:[t].concat(Object(se.a)(e.state.dishes))})}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(W,{handleLogout:this.props.handleLogout}),Object(s.jsx)("h1",{className:"form-container",children:"Create a new dish"}),Object(s.jsxs)("form",{className:"form-container",onSubmit:this.handleSubmit,children:[Object(s.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(s.jsx)("input",{id:"name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange}),Object(s.jsx)("label",{htmlFor:"description",children:"Description: "}),Object(s.jsx)("input",{className:"long",id:"description",name:"description",type:"text",value:this.state.description,onChange:this.handleChange}),Object(s.jsx)("label",{htmlFor:"tags",children:"Tags: "}),Object(s.jsx)("input",{id:"tags",name:"tags",type:"text",value:this.state.tags,onChange:this.handleChange}),Object(s.jsx)("label",{htmlFor:"format",children:"Format: "}),Object(s.jsx)("input",{id:"format",name:"format",type:"text",value:this.state.format,onChange:this.handleChange}),Object(s.jsx)("label",{htmlFor:"picture_url",children:"Picture Url: "}),Object(s.jsx)("input",{id:"picture_url",name:"picture_url",type:"text",value:this.state.picture_url,onChange:this.handleChange}),Object(s.jsx)("label",{htmlFor:"stock",children:"Stock: "}),Object(s.jsx)("input",{id:"stock",name:"stock",type:"text",value:this.state.stock,onChange:this.handleChange}),Object(s.jsx)("label",{htmlFor:"type",children:"Type: "}),Object(s.jsx)("input",{id:"type",name:"type",type:"text",value:this.state.type,onChange:this.handleChange}),Object(s.jsx)("label",{htmlFor:"Price",children:"Price: "}),Object(s.jsx)("input",{id:"price",name:"price",type:"text",value:this.state.price,onChange:this.handleChange}),Object(s.jsx)("button",{id:"button-createdish",type:"submit",children:"Add to your menu"})]})]})}}]),n}(a.Component);function re(e){return Object(s.jsx)("div",{className:"columns ",children:Object(s.jsx)("div",{className:"column is-full is-mobile",children:Object(s.jsx)("nav",{className:"navbar is-fixed-top has-background-primary",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("h1",{className:"navbar-item navbar-start title is-size-6-mobile",children:["Table ",e.tableNumber]}),Object(s.jsx)(m.b,{className:"navbar-item",to:"/".concat(e.tableNumber),children:"Menu"}),Object(s.jsx)(m.b,{className:"navbar-item",to:"/".concat(e.tableNumber,"/order"),children:"Order"}),Object(s.jsx)(m.b,{className:"navbar-item navbar-end",to:"/",children:"Exit"})]})})})})}var ce=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"box ",children:Object(s.jsxs)("div",{className:"level is-mobile",children:[Object(s.jsxs)("div",{className:"level-left",children:[Object(s.jsx)("figure",{className:"image is-96x96 level-item",children:Object(s.jsx)("img",{src:this.props.dish.picture_url,alt:""})}),Object(s.jsx)("div",{className:"level-item",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"  title is-size-4-mobile",children:this.props.dish.name}),Object(s.jsx)("p",{className:"heading  is-size-6-mobile",children:this.props.dish.tags})]})})]}),Object(s.jsxs)("div",{className:"level-right ",children:[Object(s.jsxs)("p",{className:"level-item",children:[this.props.dish.price," \u20ac"]}),Object(s.jsx)("button",{className:"button is-link level-item",onClick:function(){return e.props.handleOrder(e.props.dish._id,e.props.tableNumber)},children:"Order"})]})]})})}}]),n}(a.Component),ie=(a.Component,function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).price=function(){return e.props.order.dishesOrdered.reduce((function(e,t){return console.log("el.dishType.price : ".concat(t.dishType.price," and el.units: ").concat(t.units,"=>acc:").concat(e," ")),e+t.dishType.price*t.units}),0)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return this.props.isLoading?(console.log("this.state.isLoading before return",this.state.isLoading1),Object(s.jsx)("div",{children:"Loading ..."})):this.props.order?Object(s.jsxs)("div",{className:"table-order-container mx-0",children:[console.log("props.order inside Table order",this.props.order),Object(s.jsxs)("table",{className:"table has-text-centered mx-0",children:[Object(s.jsxs)("thead",{className:"is-size-6-mobile",children:[Object(s.jsx)("th",{children:Object(s.jsx)("h2",{className:" is-size-6-mobile",children:"Item"})}),Object(s.jsx)("th",{children:Object(s.jsx)("h2",{className:" is-size-6-mobile ",children:"Units"})}),Object(s.jsx)("th",{children:Object(s.jsx)("h2",{className:" is-size-6-mobile"})}),Object(s.jsx)("th",{children:Object(s.jsx)("h2",{className:" is-size-6-mobile",children:"Total"})}),Object(s.jsx)("th",{})]}),Object(s.jsx)("tbody",{className:"has-text-centered",children:this.props.order.dishesOrdered.map((function(t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("p",{children:t.dishType.name})}),Object(s.jsxs)("td",{children:[" ",Object(s.jsxs)("h3",{children:[t.units," u."]})]}),Object(s.jsx)("td",{children:Object(s.jsxs)("h3",{children:[t.dishType.price,"\u20ac/u."]})}),Object(s.jsxs)("td",{children:[" ",Object(s.jsxs)("h3",{children:[" ",t.dishType.price*t.units," \u20ac"]})]}),Object(s.jsx)("td",{children:e.props.order.paid?Object(s.jsx)("p",{}):Object(s.jsx)("button",{className:"button is-small is-danger is-light",onClick:function(){return e.props.handleRemoveDish(e.props.order,t.dishType._id)},children:"Remove"})})]})}))})]}),Object(s.jsxs)("h2",{children:["Total: ",this.price(),"\u20ac"]})]}):(console.log("this.state.isLoading before return",this.state.isLoading1),Object(s.jsx)("div",{children:"NO ORDERS YET"}))}}]),n}(a.Component)),oe=n(41),le=n(17),de=n(21),he=n.n(de),ue=n(30);function je(e){var t=Object(a.useState)(!1),n=Object(b.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(null),o=Object(b.a)(i,2),l=o[0],d=o[1],h=Object(a.useState)(""),u=Object(b.a)(h,2),j=u[0],m=u[1],p=Object(a.useState)(!0),O=Object(b.a)(p,2),x=O[0],f=O[1],v=Object(a.useState)(""),g=Object(b.a)(v,2),N=g[0],y=g[1],S=Object(le.useStripe)(),C=Object(le.useElements)();Object(a.useEffect)((function(){window.fetch("".concat("http://localhost:5005/api","/payment/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:e.tableNumber})}).then((function(e){return e.json()})).then((function(e){y(e.clientSecret)}))}),[]);var w=function(){var e=Object(ue.a)(he.a.mark((function e(t){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(t.empty),d(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var t=Object(ue.a)(he.a.mark((function t(n){var s;return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),m(!0),t.next=4,S.confirmCardPayment(N,{payment_method:{card:C.getElement(le.CardElement)}});case 4:(s=t.sent).error?(d("Payment failed ".concat(s.error.message)),m(!1)):(d(null),m(!1),c(!0),e.changeToPaid());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(s.jsxs)("form",{id:"payment-form",onSubmit:k,children:[Object(s.jsxs)("div",{className:"field",children:[Object(s.jsx)("label",{className:"label",children:"Enter your payment details:"}),Object(s.jsx)("div",{className:"control",children:Object(s.jsx)(le.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",border:"1px",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:w})})]}),Object(s.jsx)("div",{className:"field",children:Object(s.jsx)("button",{className:"button is-success",disabled:j||x||r,id:"submit",children:Object(s.jsx)("span",{id:"button-text",children:j?Object(s.jsx)("div",{className:"spinner",id:"spinner"}):"Pay"})})}),l&&Object(s.jsx)("div",{className:"card-error",role:"alert",children:l}),Object(s.jsx)("p",{className:r?"result-message":"result-message hidden",children:"Payment succeeded! Your food is on the way to your table. Enjoy your mail :)"})]})}var be=Object(oe.a)("pk_test_51Hw8omAFjvuOhmpP8r2GkrfRJ1nImw1IHoT7Wsp1nPxuPMhB62V2lKL0tB8izdcRTG45RxDN3iYEHKpZb8WALVtA00WUAU57hF");function me(e){return Object(s.jsx)("div",{className:"stripe",children:Object(s.jsx)(le.Elements,{stripe:be,children:Object(s.jsx)(je,{tableNumber:e.tableNumber,changeToPaid:e.changeToPaid})})})}var pe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,menu:[],order:null,total:0},e.componentDidMount=function(){Promise.all([te(),w({table:e.props.match.params.table})]).then((function(t){e.setState({menu:t[0],order:t[1][0],isLoading:!1})}))},e.changeToPaid=function(){L({table:e.props.match.params.table}).then((function(t){e.setState({order:t[0]})}))},e.handleRemoveDish=function(t,n){I({orderId:t._id,dishId:n}).then((function(t){e.setState({order:t[0]})}))},e.handleClick=function(){k({table:e.props.match.params.table}).then((function(t){e.setState({total:t})}))},e}return Object(l.a)(n,[{key:"render",value:function(){if(this.state.isLoading)return Object(s.jsx)("div",{children:"Loading ..."});var e=this.props.match.params.table;return Object(s.jsxs)("div",{className:"has-navbar-fixed-top",children:[Object(s.jsx)(re,{tableNumber:e}),Object(s.jsx)("div",{className:"section mx-0",children:Object(s.jsx)(ie,{order:this.state.order,isLoading:this.state.isLoading,handleRemoveDish:this.handleRemoveDish,tableNumber:e})}),Object(s.jsx)("div",{className:"section",children:Object(s.jsxs)("div",{className:"container",children:[this.state.order.paid?Object(s.jsxs)("h3",{className:"has-text-success",children:["Thank you! Your dish is being prepared and soon we will serve you."," "]}):Object(s.jsx)("h3",{className:"has-text-danger",children:"Pending to pay"}),this.state.order.paid?"":Object(s.jsx)(me,{tableNumber:e,changeToPaid:this.changeToPaid})]})})]})}}]),n}(a.Component),Oe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,menu:[],order:null,price:0,totalItems:0},e.componentDidMount=function(){Promise.all([te(),w({table:e.props.tableNumber})]).then((function(t){var n=0;t[1][0].dishesOrdered&&(n=t[1][0].dishesOrdered.reduce((function(e,t){return e+t.dishType.price*t.units}),0));var s=t[1][0].dishesOrdered.reduce((function(e,t){return e+t.units}),0);e.setState({menu:t[0],order:t[1][0],isLoading:!1,price:n,totalItems:s})}))},e.handleOrder=function(t,n){C({dishId:t,table:n}).then((function(t){var n=t.dishesOrdered.reduce((function(e,t){return e+t.dishType.price*t.units}),0),s=t.dishesOrdered.reduce((function(e,t){return e+t.units}),0);e.setState({order:t,price:n,totalItems:s})}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return this.state.isLoading?Object(s.jsx)("div",{children:"Loading ..."}):Object(s.jsxs)("div",{className:"container",children:[this.state.menu[0].dishes.map((function(t){return Object(s.jsx)("div",{children:Object(s.jsx)(ce,{dish:t,tableNumber:e.props.tableNumber,handleOrder:e.handleOrder},t.name)})})),this.state.order&&Object(s.jsx)("nav",{className:"navbar is-fixed-bottom",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("h1",{className:"is-size-2 navbar-item is-size-5-mobile",children:["Items selected:"," ",this.state.totalItems||"0"," ","Total: ",this.state.price," \u20ac"," "]})," ",Object(s.jsx)("button",{className:"button is-success navbar-item",children:Object(s.jsx)(m.b,{className:"has-text-white  is-size-5-mobile",to:"/".concat(this.props.tableNumber,"/order"),children:"Finish"})})," "]})})||Object(s.jsx)("p",{children:"Loading..."})]})}}]),n}(a.Component),xe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.match.params.table;return Object(s.jsxs)("div",{className:"has-navbar-fixed-top",children:[Object(s.jsx)(re,{className:"section",tableNumber:e}),Object(s.jsx)(Oe,{className:"section",tableNumber:e})]})}}]),n}(a.Component),fe=(n(73),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={user:null,isLoading:!0},e.componentDidMount=function(){var t=localStorage.getItem("accessToken");if(!t)return e.setState({isLoading:!1});E().then((function(t){if(!t.status)return e.setState({isLoading:!1});e.setState({user:t.data.user,isLoading:!1})}))},e.handleLogout=function(){var t=localStorage.getItem("accessToken");if(!t)return e.setState({user:null,isLoading:!1});e.setState({isLoading:!0},(function(){U().then((function(t){return t.status,localStorage.removeItem("accessToken"),e.setState({isLoading:!1,user:null})}))}))},e.authenticate=function(t){e.setState({user:t})},e}return Object(l.a)(n,[{key:"render",value:function(){return this.state.isLoading?Object(s.jsx)(j,{}):Object(s.jsx)("div",{children:Object(s.jsxs)(u.d,{children:[Object(s.jsx)(B,{exact:!0,path:"/",component:P}),Object(s.jsx)(B,{exact:!0,path:"/auth/signup",authenticate:this.authenticate,component:J}),Object(s.jsx)(B,{exact:!0,path:"/auth/login",authenticate:this.authenticate,component:q}),Object(s.jsx)(B,{exact:!0,path:"/:table/order",authenticate:this.authenticate,component:pe}),Object(s.jsx)(B,{exact:!0,path:"/:table",authenticate:this.authenticate,component:xe}),Object(s.jsx)(H,{exact:!0,path:p,component:G,user:this.state.user,handleLogout:this.handleLogout}),Object(s.jsx)(H,{exact:!0,path:O,component:ne,user:this.state.user,handleLogout:this.handleLogout}),Object(s.jsx)(H,{exact:!0,path:x,component:ae,user:this.state.user,handleLogout:this.handleLogout})]})})}}]),n}(r.a.Component));i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(m.a,{children:Object(s.jsx)(fe,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.6c53bb09.chunk.js.map