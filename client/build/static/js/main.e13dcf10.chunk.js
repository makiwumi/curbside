(this.webpackJsonpcurbside=this.webpackJsonpcurbside||[]).push([[0],{103:function(e,t,a){},116:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),i=a.n(r),c=a(10),s=function(){return fetch("/user/authenticated").then((function(e){return 200===e.status?{isAuthenticated:!0,user:{email:"CurbSide@CSadmin.com",role:"Admin"}}:{isAuthenticated:!1,user:{email:"",role:""}}}))},o=Object(n.createContext)(),m=function(e){var t=e.children,a=Object(n.useState)(null),r=Object(c.a)(a,2),i=r[0],m=r[1],u=Object(n.useState)(!1),d=Object(c.a)(u,2),g=d[0],E=d[1],p=Object(n.useState)(!1),h=Object(c.a)(p,2),f=h[0],v=h[1];return Object(n.useEffect)((function(){s().then((function(e){m(e.user),E(e.isAuthenicated),v(!0)}))}),[]),l.a.createElement("div",null,f?l.a.createElement(o.Provider,{value:{user:i,setUser:m,isAuthenicated:g,setIsAuthenicated:E}},t):l.a.createElement("h1",null,"Loading"))},u=a(29),d=a(8),g=(a(27),a(45),a(102),a(32)),E=a(44);a(103);var p=function(e){return l.a.createElement("header",{className:"navigation m-4"},l.a.createElement(E.a,{collapseOnSelect:!0,expand:"lg",bg:"custom-nav"},l.a.createElement(E.a.Brand,{className:"p-2",href:"/"},"Curbside"),l.a.createElement(E.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(E.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(u.a,null,l.a.createElement(g.a,{className:"mr-auto"},l.a.createElement(d.a,{path:"/(.+)"},l.a.createElement(g.a.Link,{href:"/upload"},"Upload"),l.a.createElement(g.a.Link,{className:"ml-2",href:"/search"},"Search"))),l.a.createElement(g.a,null,l.a.createElement(d.a,{exact:!0,path:"/"},l.a.createElement(g.a.Link,{className:"mr-2",href:"/signin"},"Sign In"),l.a.createElement(g.a.Link,{className:"",href:"/signup"},"Sign Up")))))))},h=a(90);a(116);var f=function(){return l.a.createElement("div",{className:"homepage"},l.a.createElement(p,null),l.a.createElement("h1",{className:"homepage-name"},"CURBSIDE"),l.a.createElement("h2",{className:"tag-line"},"THE EASIEST WAY TO LET GO"),l.a.createElement(h.Link,{activeClass:"active",to:"section1",spy:!0,smooth:!0,offset:-70,duration:500}))};function v(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function b(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function _(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}var N=a(21),O=a(22),y=a(24),j=a(23),S=a(43),C=a.n(S),w=function(){return C.a.get("/api/listings")},k=function(e){return C.a.get("/api/listings/"+e)},x=function(e){return C.a.delete("/api/listings/"+e)},A=function(e){return C.a.post("/api/listings",e)};var I=function(e){return l.a.createElement("form",{className:"search sticky-top"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"listings"},"search:"),l.a.createElement("input",{onChange:e.handleInputChange,value:e.value,id:"listings",type:"text",name:"search",list:"listing",className:"inputBox",placeholder:"search listings"}),l.a.createElement("button",{type:"submit",onClick:e.handleSearch,className:"btn btn-custom"},"Search")))},T=a(57),B=a(36),D=(a(134),a(42)),L=a(41),F=a(38);var P=function(e){var t=l.a.useState(!1),a=Object(c.a)(t,2),n=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,{show:n,"aria-labelledby":"contained-modal-title-vcenter"},l.a.createElement(F.a.Header,{closeButton:!0},l.a.createElement(F.a.Title,{id:"contained-modal-title-vcenter"},e.content)),l.a.createElement(F.a.Body,{className:"show-grid"},l.a.createElement(T.a,null,l.a.createElement(L.a,{size:"md-6"},l.a.createElement("p",null,e.description)),l.a.createElement(B.a,null,l.a.createElement(L.a,{size:"md-12"},l.a.createElement("p",null,e.location))))),l.a.createElement(F.a.Footer,null,l.a.createElement(D.a,{className:"btn-custom",variant:"custom",onClick:function(){return r(!1)}},"Close"))),l.a.createElement(D.a,{className:"btn-custom",variant:"custom",onClick:function(){return r(!0)}},"View"))},R=a(33),U=a(70);var z=function(e){return l.a.createElement(R.a,{style:{width:"18rem"}},l.a.createElement(R.a.Img,{variant:"top",src:"holder.js/100px180?text=Image cap"}),l.a.createElement(R.a.Body,null,l.a.createElement(R.a.Title,null,e.listingTitle),l.a.createElement(R.a.Text,null,e.listingDescription)),l.a.createElement(U.a,{className:"list-group-flush"},l.a.createElement(U.a.Item,null,e.location)),l.a.createElement(R.a.Body,null,e.modalButton))},K=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:"",listings:[],listingSort:[],order:""},e.sortByName=function(){var t=e.state.listingSort;if("ascending"===e.state.order){var a=t.sort((function(e,t){return e.date>t.date?1:-1}));console.log(a),e.setState({listingSort:a,order:"descending"})}else{var n=t.sort((function(e,t){return e.date>t.date?-1:1}));e.setState({listingSort:n,order:"ascending"})}},e.handleInputChange=function(t){var a=e.state.listings,n=t.target.value,l=a.filter((function(e){return e.listing_title.toLowerCase().indexOf(n.toLowerCase())>-1}));e.setState({listingSort:l})},e.listingSearch=function(){w().then((function(t){return e.setState({listingSort:t.data,listings:t.data})})).catch((function(e){return console.log(e)}))},e.handleSearch=function(t){t.preventDefault(),t.persist();var a=e.state,n=a.listings,l=a.search;t.target.value;console.log(t);var r=n.filter((function(e){return e.listing_title.toLowerCase().includes(l.toLowerCase())}));e.setState({listingSort:r})},e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this;w().then((function(t){return e.setState({listings:t.data,listingSort:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(T.a,{fluid:!0},l.a.createElement(B.a,null,l.a.createElement(_,{size:"md-3 sm-12"},l.a.createElement(I,{listing:this.state.listings,handleSearch:this.handleSearch,handleInputChange:this.handleInputChange})),l.a.createElement(_,{size:"md-9 sm-12"},l.a.createElement("thead",{className:""},l.a.createElement(B.a,{className:" sticky-top"},l.a.createElement("h2",{className:"hover-pointer heading",onClick:this.sortByName},"Date Added"))),this.state.listings.length?l.a.createElement("tbody",{className:""},this.state.listingSort.map((function(e){return console.log(e),l.a.createElement(B.a,{key:e._id,className:""},l.a.createElement(z,{listingTitle:e.listing_title,listingDescription:e.listing_description,location:e.listing_location,modalButton:l.a.createElement(P,{content:e.listing_title,description:e.listing_description,location:e.listing_location})}))}))):l.a.createElement("h3",null,"No Results to Display")))))}}]),a}(n.Component);var W=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("head",null),l.a.createElement(p,null),l.a.createElement(v,{fluid:!0},l.a.createElement(K,null)))},H=a(30),G=a(19);a(135);var M=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(c.a)(t,2),r=(a[0],a[1],Object(n.useState)(null)),i=Object(c.a)(r,2);return i[0],i[1],Object(n.useContext)(m),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 px-0 d-none d-sm-block"},l.a.createElement("img",{className:"login-img"})),l.a.createElement("div",{className:"col-sm-6 login-section-wrapper"},l.a.createElement("div",{className:"brand-wrapper"},l.a.createElement("h4",null,l.a.createElement("a",{className:"log-brand",href:"/"},"CURBSIDE  "))),l.a.createElement("div",{className:"login-wrapper my-auto"},l.a.createElement("h1",{className:"login-title"},"Log in"),l.a.createElement("form",{className:"formbox",onSubmit:onsubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",placeholder:"Email..."})),l.a.createElement("div",{className:"form-group mb-4"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",class:"form-control",id:"password",name:"password",placeholder:"Password..."})),l.a.createElement("input",{className:"btn btn-dark",type:"submit"})),l.a.createElement("p",{className:"login-wrapper-footer-text"},"Don't have an account? ",l.a.createElement(u.b,{id:"signin-link",to:"/signup"},"Register here"))))))};a(136);var V=function(e){var t=Object(n.useState)({email:"",password:"",role:""}),a=Object(c.a)(t,2),r=(a[0],a[1],Object(n.useState)(null)),i=Object(c.a)(r,2),s=(i[0],i[1],Object(n.useRef)(null));return Object(n.useEffect)((function(){return function(){clearTimeout(s)}}),[]),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 px-0 d-none d-sm-block"},l.a.createElement("img",{className:"login-img"})),l.a.createElement("div",{className:"col-sm-6 login-section-wrapper"},l.a.createElement("div",{className:"brand-wrapper"},l.a.createElement("h4",null,l.a.createElement("a",{className:"log-brand",href:"/"},"CURBSIDE  "))),l.a.createElement("div",{className:"login-wrapper my-auto"},l.a.createElement("h1",{className:"login-title"},"Create an account"),l.a.createElement("form",{className:"formbox",onSubmit:onsubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",placeholder:"Email..."})),l.a.createElement("div",{className:"form-group mb-4"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",class:"form-control",id:"password",name:"password",placeholder:"Password..."})),l.a.createElement("input",{className:"btn btn-dark",type:"submit"})),l.a.createElement("p",{className:"login-wrapper-footer-text"},"Already have an account? ",l.a.createElement(u.b,{id:"signin-link",to:"/signin"},"Sign in"))))))},J=a(58),Y=a.n(J);a(138);var q=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};a(139);function Q(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function X(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var Z=a(37),$=a(59);a(140);function ee(e){return l.a.createElement(Z.a.Control,Object.assign({type:"text"},e))}function te(e){return l.a.createElement(D.a,Object.assign({},e,{style:{float:"right",marginBottom:10},variant:"custom"}),e.children)}var ae=a(94),ne=a.n(ae);a(141);var le=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({listing_title:"",listing_description:"",listing_condition:"",listing_location:"",listing_category:"",listing_latlong:null}),s=Object(c.a)(i,2),o=s[0],m=s[1],u=Object(n.useState)(1),d=Object(c.a)(u,2),g=(d[0],d[1]);function E(){w().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}function h(e){var t=e.target,a=t.name,n=t.value;m(Object(G.a)(Object(G.a)({},o),{},Object(H.a)({},a,n)))}return Object(n.useEffect)((function(){E()}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement("div",{style:{maxWidth:"1200px",margin:"2rem auto"}},l.a.createElement("div",{style:{textAlign:"center",marginBottom:"2rem"}},l.a.createElement("h2",null,"Upload Item")),l.a.createElement(v,{fluid:!0},l.a.createElement(b,null,l.a.createElement(_,{size:"md-6 sm-12"},a.length?l.a.createElement(Q,null,a.map((function(e){return l.a.createElement(X,{key:e._id},l.a.createElement("a",{href:"/listings/"+e._id},l.a.createElement("strong",null,e.listing_title," in ",e.listing_location)),l.a.createElement(q,{onClick:function(){return t=e._id,void x(t).then((function(e){return E()})).catch((function(e){return console.log(e)}));var t}}))}))):l.a.createElement("h3",null,"No Results to Display")),l.a.createElement(_,{size:"md-6 input"},l.a.createElement("form",null,l.a.createElement(ne.a,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(ee,{onChange:h,name:"listing_title",placeholder:"listing title",value:o.listing_title}),l.a.createElement(ee,{onChange:h,name:"listing_description",placeholder:"listing description",value:o.listing_description}),l.a.createElement(ee,{onChange:h,name:"listing_condition",placeholder:"condition (used, new, etc.)",value:o.listing_condition}),l.a.createElement(ee,{onChange:h,name:"listing_location",placeholder:"city, state",value:o.listing_location}),l.a.createElement("label",null,"Item Category"),l.a.createElement(Z.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement($.a.Prepend,null,l.a.createElement(Z.a.Control,{as:"select",onChange:function(e){g(e.currentTarget.value)}},[{key:1,value:"Furniture"},{key:2,value:"Electronics"},{key:3,value:"Apparral"},{key:4,value:"Toys/Games"},{key:5,value:"Books"}].map((function(e){return l.a.createElement("option",{key:e.key,value:o.CategoriesValue},e.value)}))))),l.a.createElement(te,{onClick:function(e){e.preventDefault(),o.listing_title&&o.listing_location&&Y.a.fromAddress(o.listing_location).then((function(e){console.log(e);var t=e.results[0].geometry.location;return m(Object(G.a)(Object(G.a)({},o),{},{listing_latlong:t})),t}),(function(e){console.error(e)})).then((function(e){A({listing_title:o.listing_title,listing_description:o.listing_description,listing_condition:o.listing_condition,listing_location:o.listing_location,listing_latlong:e})})).then((function(){return m({listing_title:"",listing_description:"",listing_condition:"",listing_location:"",listing_category:"",listing_latlong:""})})).then((function(){return E()})).catch((function(e){return console.log(e)}))}}," Submit Listing")))))))},re=a(61),ie=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY;Y.a.setApiKey(ie);var ce={width:"400px",height:"400px"},se=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(N.a)(this,a),n=t.call(this,e),console.log(e),n.state={center:e.latlong||{lat:39.2904,lng:-76.6122},address:""},n}return Object(O.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(re.c,{googleMapsApiKey:ie},l.a.createElement(re.b,{mapContainerStyle:ce,center:this.state.center,zoom:13},l.a.createElement(re.a,{center:this.state.center,radius:500}),l.a.createElement(l.a.Fragment,null))))}}]),a}(n.Component),oe=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(O.a)(a,[{key:"render",value:function(){return l.a.createElement(se,null)}}]),a}(n.Component),me=a(144),ue=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={listing_title:"",listing_description:"",listing_condition:"",listing_location:"",listing_latlong:null},n}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this;k(this.props.listing_id).then((function(t){e.setState(t.data)}))}},{key:"render",value:function(){var e=this.state.listing_latlong?l.a.createElement(se,{latlong:this.state.listing_latlong}):null;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(B.a,null,l.a.createElement(L.a,{md:6}),l.a.createElement(L.a,{sm:12,md:6},l.a.createElement("h1",{className:"text-center"},this.state.listing_title))),l.a.createElement(B.a,null,l.a.createElement(me.a,{width:400,fluid:!0}),l.a.createElement("p",null,this.state.listing_description)),l.a.createElement(B.a,null,e))}}]),a}(n.Component),de=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(O.a)(a,[{key:"render",value:function(){return l.a.createElement(ue,{listing_id:this.props.listing_id},this.props.children)}}]),a}(n.Component);var ge=function(){var e=Object(n.useContext)(o),t=e.user,a=(e.setUser,e.isAuthenicated);return e.setIsAuthenicated,console.log(t),console.log(a),l.a.createElement(u.a,null,l.a.createElement(d.a,{exact:!0,path:["/","/homepage"],component:f}),l.a.createElement(d.a,{path:"/map",component:oe}),l.a.createElement(d.a,{path:"/search",component:W}),l.a.createElement(d.a,{path:"/signin",component:M}),l.a.createElement(d.a,{path:"/signup",component:V}),l.a.createElement(d.a,{path:"/upload",component:le}),l.a.createElement(d.a,{exact:!0,path:"/listings/:listing_id",render:function(e){return l.a.createElement(de,{listing_id:e.match.params.listing_id})}}))};i.a.render(l.a.createElement(m,null,l.a.createElement(ge,null)),document.getElementById("root"))},27:function(e,t,a){},94:function(e,t){},97:function(e,t,a){e.exports=a(142)}},[[97,1,2]]]);
//# sourceMappingURL=main.e13dcf10.chunk.js.map