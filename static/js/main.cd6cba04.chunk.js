(this.webpackJsonpbookhub=this.webpackJsonpbookhub||[]).push([[0],{41:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(24),r=a.n(c),o=a(6),i=a(9),l=a(10),u=a(12),d=a(11),h=a(4),j=a(5),b=a.n(j),m=a(13),x=a(7),v=a.n(x),g=(a(41),a(1)),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={username:"henry",password:"henry_the_developer",showError:!1,errorMsg:"",showDivLogin:!0,showDivRegister:!1,showErrorRegister:!1,errorMsgRegister:"Enter Correct Credentials",name:"",gender:"male"},e.updatePassword=function(t){e.setState({password:t.target.value})},e.updateUsername=function(t){e.setState({username:t.target.value})},e.updateName=function(t){e.setState({name:t.target.value})},e.updateGender=function(t){e.setState({gender:t.target.id})},e.changeDiv=function(){e.setState((function(e){return{showDivLogin:!e.showDivLogin,showDivRegister:!e.showDivRegister,username:"",password:"",name:"",gender:""}}))},e.SubmitForm=function(){var t=Object(m.a)(b.a.mark((function t(a){var s,n,c,r,o,i,l,u;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),s=e.state,n=s.username,c=s.password,"https://apis.ccbp.in/login",r={username:n,password:c},o={method:"POST",body:JSON.stringify(r)},t.next=7,fetch("https://apis.ccbp.in/login",o);case 7:return i=t.sent,t.next=10,i.json();case 10:l=t.sent,!0===i.ok?(u=e.props.history,v.a.set("jwt_token",l.jwt_token,{expires:30}),u.replace("/bookHub")):e.setState({showError:!0,errorMsg:l.error_msg});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.ShowError=function(t){t.preventDefault(),e.setState({showError:!0,errorMsg:"Username or Password invalid"})},e.ShowErrorRegister=function(t){t.preventDefault(),e.setState({showErrorRegister:!0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,s=e.showError,n=e.errorMsg,c=e.showDivLogin;e.showDivRegister,e.errorMsgRegister,e.showErrorRegister,e.name,e.gender;return void 0!==v.a.get("jwt_token")?Object(g.jsx)(h.a,{to:"/bookHub"}):Object(g.jsxs)("div",{className:"LoginRoute",children:[Object(g.jsxs)("div",{className:"LoginPageImageContainer",children:[Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670662951/Rectangle_1467loginPageImage_em61aq.jpg",alt:"login website logo",className:"LoginPageImage"}),Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670745169/Ellipse_99_xxxgdn.png",alt:"login website logo",className:"LoginPageImageMobile"})]}),Object(g.jsx)("div",{className:"LoginBoxContainer",children:Object(g.jsxs)("div",{className:"LoginContainer",children:[Object(g.jsx)("div",{className:"LogoContainerLogin",children:Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670662961/Group_7731bookHubLogo_uliueq.jpg",alt:"website login",className:"LoginImage"})}),Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:""===t||""===a?this.ShowError:this.SubmitForm,className:"FormContainerLogin ".concat(c?"":"hideLogin"),showDivLogin:!0,children:[Object(g.jsx)("label",{htmlFor:"username",className:"FormLabelLogin",children:"Username"}),Object(g.jsx)("input",{id:"username",type:"text",onChange:this.updateUsername,value:t,placeholder:"Enter username",className:"FormInputLogin"}),Object(g.jsx)("label",{htmlFor:"password",className:"FormLabelLogin",children:"Password"}),Object(g.jsx)("input",{id:"password",type:"password",onChange:this.updatePassword,value:a,placeholder:"Enter Password",className:"FormInputLogin"}),Object(g.jsx)("button",{type:"submit",className:"LoginButton",children:"Login"}),Object(g.jsx)("p",{className:"red",children:s?n:""})]})})]})})]})}}]),a}(s.Component),O=p,N=a(20),f=function(e){var t=v.a.get("jwt_token");return console.log(t),void 0!==t?Object(g.jsx)(h.b,Object(N.a)({},e)):Object(g.jsx)(h.a,{to:"/login"})},k=a(18),y=a.n(k),S=a(29),B=a.n(S),w=(a(80),a(81),a(82),function(e){var t=e.itemDetails,a=t.authorName,s=t.coverPic,n=t.id,c=t.title;return Object(g.jsx)(o.b,{to:"/books/".concat(n),style:{textDecoration:"none",color:"inherit"},children:Object(g.jsxs)("li",{type:"none",className:"topRatedItem",children:[Object(g.jsx)("img",{src:s,alt:c,className:"bookTopRated"}),Object(g.jsx)("h1",{className:"sliderItemHeading",children:c}),Object(g.jsx)("p",{className:"sliderItemTitle",children:a})]})})}),L=(a(83),a(34)),C=n.a.createContext({active:"",changeActive:function(){},activeNav:"",changeNavItem:function(){},search:"",onSearch:function(){}}),_=(a(84),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={visible:!1},e.changeVisible=function(){e.setState((function(e){return{visible:!e.visible}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=function(){var t=e.props.history;v.a.remove("jwt_token"),t.replace("/bookHub")};return Object(g.jsx)(C.Consumer,{children:function(a){var s=a.active,n=a.changeActive,c=e.state.visible;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"Header",children:[Object(g.jsx)("div",{className:"LogoContainerHeader",children:Object(g.jsx)(o.b,{to:"/bookHub",children:Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670662961/Group_7731bookHubLogo_uliueq.jpg",alt:"website Logo"})})}),Object(g.jsxs)("div",{className:"linksContainerHeader",children:[Object(g.jsx)("li",{type:"none",children:Object(g.jsx)(o.b,{to:"/bookHub",style:{textDecoration:"none",color:"inherit"},className:"link ".concat("Home"===s?"activeLinkHeader":""),id:"Home",type:"none",onClick:n,children:"Home"})}),Object(g.jsx)("li",{type:"none",children:Object(g.jsx)(o.b,{to:"/shelf",style:{textDecoration:"none",color:"inherit"},className:"link ".concat("Shelves"===s?"activeLinkHeader":""),id:"Shelves",type:"none",onClick:n,children:"Bookshelves"})}),Object(g.jsx)("li",{className:"link",type:"none",children:Object(g.jsx)("button",{type:"button",onClick:t,className:"LogoutButton",children:"Logout"})})]})]}),Object(g.jsxs)("div",{className:"HeaderMobile",children:[Object(g.jsx)("div",{className:"LogoContainerHeader",children:Object(g.jsx)(o.b,{to:"/",children:Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670662961/Group_7731bookHubLogo_uliueq.jpg",alt:"website Logo",className:"websiteLogoNav"})})}),Object(g.jsx)("button",{type:"button",className:"MenuButton",onClick:e.changeVisible,children:Object(g.jsx)(L.a,{className:"MenuLogo"})})]}),Object(g.jsxs)("div",{className:"linksContainerHeaderMobile ".concat(c?"visible":""),children:[Object(g.jsx)("li",{type:"none",className:"Li",children:Object(g.jsx)(o.b,{to:"/",style:{textDecoration:"none",color:"inherit"},className:"link ".concat("Home"===s?"activeLinkHeader":""),id:"Home",type:"none",onClick:n,children:"Home"})}),Object(g.jsx)("li",{type:"none",className:"Li",children:Object(g.jsx)(o.b,{to:"/shelf",style:{textDecoration:"none",color:"inherit"},className:"link ".concat("Shelves"===s?"activeLinkHeader":""),id:"Shelves",type:"none",onClick:n,children:"Bookshelves"})}),Object(g.jsx)("li",{className:"Li",type:"none",children:Object(g.jsx)("button",{type:"button",onClick:t,className:"LogoutButton",children:"Logout"})})]})]})}})}}]),a}(s.Component)),D=Object(h.g)(_),R=a(14),T=(a(85),function(){return Object(g.jsxs)("div",{className:"Footer",children:[Object(g.jsxs)("div",{className:"iconsContainerFooter",children:[Object(g.jsx)(R.a,{className:"icons"}),Object(g.jsx)(R.d,{className:"icons"}),Object(g.jsx)(R.b,{className:"icons"}),Object(g.jsx)(R.e,{className:"icons"})]}),Object(g.jsx)("p",{children:"Contact us"})]})}),A=(a(86),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={topRatedList:[],success:!0,isLoading:!0},e.getData=Object(m.a)(b.a.mark((function t(){var a,s,n,c,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://apis.ccbp.in/book-hub/top-rated-books",a=v.a.get("jwt_token"),s={method:"GET",headers:{Authorization:"Bearer ".concat(a)}},t.next=5,fetch("https://apis.ccbp.in/book-hub/top-rated-books",s);case 5:return n=t.sent,t.next=8,n.json();case 8:c=t.sent,!0===n.ok?(r=c.books.map((function(e){return{authorName:e.author_name,coverPic:e.cover_pic,id:e.id,title:e.title}})),e.setState({isLoading:!1,success:!0,topRatedList:r})):e.setState({isLoading:!1,success:!1});case 10:case"end":return t.stop()}}),t)}))),e.renderFailureView=function(){return Object(g.jsxs)("div",{className:"FailureContainer",children:[Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670692230/Group_7522_hxe6g6.png",alt:"failure view",className:"FailureImage"}),Object(g.jsx)("p",{className:"FailureText",children:"Something went wrong. Please try again"}),Object(g.jsx)("button",{type:"button",onClick:e.getData,className:"NotFoundButton",children:"Try Again"})]})},e.renderLoader=function(){return Object(g.jsx)("div",{className:"Loader",testid:"loader",children:Object(g.jsx)(y.a,{type:"TailSpin",color:"#0284C7"})})},e.renderSuccessView=function(){var t=e.state.topRatedList;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"HomeRoute",children:[Object(g.jsx)("h1",{className:"headingHome",children:"Find Your Next Favorite Books?"}),Object(g.jsx)("p",{className:"descriptionHome",children:"You are in the right place.Tell us what titles or genres you have enjoyed in the past, and we will give you surprisingly insightful recommendations."}),Object(g.jsxs)("div",{className:"sliderContainerHome",children:[Object(g.jsxs)("div",{className:"headerContainerSliderHome",children:[Object(g.jsx)("h1",{className:"topRatedHeading",children:"Top Rated Books"}),Object(g.jsx)(o.b,{to:"/shelf",style:{textDecoration:"none"},children:Object(g.jsx)("button",{type:"button",className:"FindBooksButton",children:"Find Books"})})]}),Object(g.jsx)("ul",{className:"Slider",children:Object(g.jsx)(B.a,Object(N.a)(Object(N.a)({},{infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,arrows:!0}),{},{className:"sliderHome",children:t.map((function(e){return Object(g.jsx)(w,{itemDetails:e},e.id)}))}))}),Object(g.jsx)("ul",{className:"SliderMobile",children:Object(g.jsx)(B.a,Object(N.a)(Object(N.a)({},{infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0}),{},{className:"sliderHomeMobile",children:t.map((function(e){return Object(g.jsx)(w,{itemDetails:e},e.id)}))}))})]})]})})},e.renderHome=function(){return e.state.success?e.renderSuccessView():e.renderFailureView()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.isLoading;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(D,{}),e?this.renderLoader():this.renderHome(),Object(g.jsx)(T,{})]})}}]),a}(s.Component)),F=A,H=(a(87),a(22)),I=a(35),E=(a(88),function(e){var t=e.itemDetails,a=t.authorName,s=t.coverPic,n=t.id,c=t.rating,r=t.readStatus,i=t.title;return Object(g.jsx)(o.b,{to:"/books/".concat(n),style:{textDecoration:"none",color:"inherit"},children:Object(g.jsxs)("div",{type:"none",className:"BookItem",children:[Object(g.jsx)("div",{className:"BookImageContainer",children:Object(g.jsx)("img",{src:s,alt:i,className:"bookImage"})}),Object(g.jsxs)("div",{className:"BookDetailss",children:[Object(g.jsx)("h1",{className:"BookHeadingItem",children:i}),Object(g.jsx)("p",{children:a}),Object(g.jsxs)("p",{children:["Avg Rating: ",Object(g.jsx)(I.a,{color:"#FBBF24"})," ",c]}),Object(g.jsxs)("p",{children:["Status:",Object(g.jsx)("span",{className:"blue",children:r})]})]})]})})}),V=(a(89),function(){return Object(g.jsx)(C.Consumer,{children:function(e){var t=e.activeNav,a=e.changeNavItem;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"NavigatorContainer",children:[Object(g.jsx)("h1",{className:"NavigatorHeading",children:"Bookshelves"}),Object(g.jsxs)("ul",{className:"NavigatorItem",children:[Object(g.jsx)("li",{type:"none",children:Object(g.jsx)("button",{className:"NavItem ".concat("ALL"===t?"activeNav":""),type:"button",onClick:a,id:"ALL",children:"All"})}),Object(g.jsx)("li",{type:"none",children:Object(g.jsx)("button",{className:"NavItem ".concat("READ"===t?"activeNav":""),type:"button",onClick:a,id:"READ",children:"Read"})}),Object(g.jsx)("li",{type:"none",children:Object(g.jsx)("button",{className:"NavItem ".concat("CURRENTLY_READING"===t?"activeNav":""),type:"button",onClick:a,id:"CURRENTLY_READING",children:"Currently Reading"})}),Object(g.jsx)("li",{type:"none",children:Object(g.jsx)("button",{className:"NavItem ".concat("WANT_TO_READ"===t?"activeNav":""),type:"button",onClick:a,id:"WANT_TO_READ",children:"Want to Read"})})]})]}),Object(g.jsxs)("div",{className:"NavigatorContainerMobile",children:[Object(g.jsx)("h1",{className:"NavigatorHeading",children:"Bookshelves"}),Object(g.jsxs)("div",{className:"NavigatorItem",children:[Object(g.jsx)("button",{className:"NavItem ".concat("ALL"===t?"activeNav":""),type:"button",onClick:a,id:"ALL",children:"All"}),Object(g.jsx)("button",{className:"NavItem ".concat("READ"===t?"activeNav":""),type:"button",onClick:a,id:"READ",children:"Read"}),Object(g.jsx)("button",{className:"NavItem ".concat("CURRENTLY_READING"===t?"activeNav":""),type:"button",onClick:a,id:"CURRENTLY_READING",children:"Currently Reading"}),Object(g.jsx)("button",{className:"NavItem ".concat("WANT_TO_READ"===t?"activeNav":""),type:"button",onClick:a,id:"WANT_TO_READ",children:"Want to Read"})]})]})]})}})}),P=(a(90),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchValue:"",dataList:[],success:!1,isLoading:!0},e.getData=Object(m.a)(b.a.mark((function t(){var a,s,n,c,r,o,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.searchValue,s=v.a.get("jwt_token"),n="https://apis.ccbp.in/book-hub/books?shelf=ALL&search=".concat(a),c={method:"GET",headers:{Authorization:"Bearer ".concat(s)}},t.next=6,fetch(n,c);case 6:return r=t.sent,t.next=9,r.json();case 9:o=t.sent,!0===r.ok&&(i=o.books.map((function(e){return{authorName:e.author_name,coverPic:e.cover_pic,id:e.id,rating:e.rating,readStatus:e.read_status,title:e.title}})),e.setState({dataList:i,success:!0,isLoading:!1}));case 11:case"end":return t.stop()}}),t)}))),e.onSearch=function(t){e.setState({searchValue:t.target.value})},e.searchResult=function(){e.setState(e.getData)},e.renderLoading=function(){return Object(g.jsx)("div",{className:"Loader",testid:"loader",children:Object(g.jsx)(y.a,{type:"TailSpin",color:"#0284C7"})})},e.renderNoBooks=function(){var t=e.state.searchValue;return Object(g.jsxs)("div",{className:"NoBooksContainer",children:[Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670693482/Asset_1_1_d43olf.png",alt:"no books"}),Object(g.jsxs)("p",{children:["Your search for ",t," did not find any matches."]})]})},e.renderBooks=function(){var t=e.state.dataList;return Object(g.jsx)("div",{className:"itemsContainerBookShelves",children:t.map((function(e){return Object(g.jsx)(E,{itemDetails:e},e.id)}))})},e.renderSuccessView=function(){return e.state.dataList.length?e.renderBooks():e.renderNoBooks()},e.renderFailureView=function(){return Object(g.jsxs)("div",{className:"FailureContainer",children:[Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670692230/Group_7522_hxe6g6.png",alt:"failure view",className:"FailureImage"}),Object(g.jsx)("p",{className:"FailureText",children:"Something went wrong. Please try again"}),Object(g.jsx)("button",{type:"button",onClick:e.getData,className:"NotFoundButton",children:"Try Again"})]})},e.renderBookShelve=function(){return e.state.success?e.renderSuccessView():e.renderFailureView()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state,t=e.searchValue,a=e.isLoading;return Object(g.jsxs)("div",{className:"BookShelvesRoute",children:[Object(g.jsxs)("div",{className:"searchBoxContainerMobile",children:[Object(g.jsx)("input",{type:"search",className:"searchBox",placeholder:"Search",value:t,onChange:this.onSearch}),Object(g.jsx)("button",{testid:"searchButton",type:"button",className:"SearchButton",onClick:this.searchResult,children:Object(g.jsx)(H.b,{})})]}),Object(g.jsx)(V,{}),Object(g.jsxs)("div",{className:"BookShelves",children:[Object(g.jsxs)("div",{className:"BookShelvesHeadingContainer",children:[Object(g.jsx)("p",{className:"BookShelvesHeading",children:"All Books"}),Object(g.jsxs)("div",{className:"searchBoxContainer",children:[Object(g.jsx)("input",{type:"search",className:"searchBox",placeholder:"Search",value:t,onChange:this.onSearch}),Object(g.jsx)("button",{testid:"searchButton",type:"button",className:"SearchButton",onClick:this.searchResult,children:Object(g.jsx)(H.b,{})})]})]}),a?this.renderLoading():this.renderBookShelve()]})]})}}]),a}(s.Component)),M=P,G=(a(91),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchText:"",dataList:[],success:!1,isLoading:!0},e.getData=Object(m.a)(b.a.mark((function t(){var a,s,n,c,r,o,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.searchText,s=v.a.get("jwt_token"),n="https://apis.ccbp.in/book-hub/books?shelf=READ&search=".concat(a),c={method:"GET",headers:{Authorization:"Bearer ".concat(s)}},t.next=6,fetch(n,c);case 6:return r=t.sent,t.next=9,r.json();case 9:o=t.sent,!0===r.ok&&(i=o.books.map((function(e){return{authorName:e.author_name,coverPic:e.cover_pic,id:e.id,rating:e.rating,readStatus:e.read_status,title:e.title}})),e.setState({dataList:i,success:!0,isLoading:!1}));case 11:case"end":return t.stop()}}),t)}))),e.onSearch=function(t){e.setState({searchText:t.target.value})},e.searchResult=function(){e.setState(e.getData)},e.renderLoading=function(){return Object(g.jsx)("div",{className:"ShelvesLoading",children:Object(g.jsx)(y.a,{type:"TailSpin",color:"#0284C7"})})},e.renderNoBooks=function(){var t=e.state.searchText;return Object(g.jsxs)("div",{className:"NoBooksContainer",children:[Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670693482/Asset_1_1_d43olf.png",alt:"No Videos"}),Object(g.jsxs)("p",{children:["Your search for ",t," did not find any matches."]})]})},e.renderBooks=function(){var t=e.state.dataList;return Object(g.jsx)("div",{className:"itemsContainerBookShelves",children:t.map((function(e){return Object(g.jsx)(E,{itemDetails:e},e.id)}))})},e.renderSuccessView=function(){var t=e.state.dataList;return console.log(t),t.length?e.renderBooks():e.renderNoBooks()},e.renderFailureView=function(){return Object(g.jsxs)("div",{className:"FailureContainer",children:[Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670692230/Group_7522_hxe6g6.png",alt:"failure view",className:"FailureImage"}),Object(g.jsx)("p",{className:"FailureText",children:"Something went wrong. Please try again"}),Object(g.jsx)("button",{type:"button",onClick:e.getData,className:"NotFoundButton",children:"Try Again"})]})},e.renderBookShelve=function(){return e.state.success?e.renderSuccessView():e.renderFailureView()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state,t=e.searchText,a=e.isLoading;return Object(g.jsxs)("div",{className:"BookShelvesRoute",children:[Object(g.jsxs)("div",{className:"searchBoxContainerMobile",children:[Object(g.jsx)("input",{type:"search",className:"searchBox",placeholder:"Search",value:t,onChange:this.onSearch}),Object(g.jsx)("button",{testid:"searchButton",type:"button",className:"SearchButton",onClick:this.searchResult,children:Object(g.jsx)(R.c,{})})]}),Object(g.jsx)(V,{}),Object(g.jsxs)("div",{className:"BookShelves",children:[Object(g.jsxs)("div",{className:"BookShelvesHeadingContainer",children:[Object(g.jsx)("p",{className:"BookShelvesHeading",children:"Read Books"}),Object(g.jsxs)("div",{className:"searchBoxContainer",children:[Object(g.jsx)("input",{type:"search",className:"searchBox",placeholder:"Search",value:t,onChange:this.onSearch}),Object(g.jsx)("button",{type:"button",onClick:this.searchResult,className:"SearchButton",children:Object(g.jsx)(R.c,{})})]})]}),a?this.renderLoading():this.renderBookShelve()]})]})}}]),a}(s.Component)),Y=G,U=(a(92),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchText:"",dataList:[],success:!1,isLoading:!0},e.getData=Object(m.a)(b.a.mark((function t(){var a,s,n,c,r,o,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.searchText,s=v.a.get("jwt_token"),n="https://apis.ccbp.in/book-hub/books?shelf=CURRENTLY_READING&search=".concat(a),c={method:"GET",headers:{Authorization:"Bearer ".concat(s)}},t.next=6,fetch(n,c);case 6:return r=t.sent,t.next=9,r.json();case 9:o=t.sent,!0===r.ok&&(i=o.books.map((function(e){return{authorName:e.author_name,coverPic:e.cover_pic,id:e.id,rating:e.rating,readStatus:e.read_status,title:e.title}})),e.setState({dataList:i,success:!0,isLoading:!1}));case 11:case"end":return t.stop()}}),t)}))),e.onSearch=function(t){e.setState({searchText:t.target.value})},e.searchResult=function(){e.setState(e.getData)},e.renderLoading=function(){return Object(g.jsx)("div",{className:"ShelvesLoading",children:Object(g.jsx)(y.a,{type:"TailSpin",color:"#0284C7"})})},e.renderNoBooks=function(){var t=e.state.searchText;return Object(g.jsxs)("div",{className:"NoBooksContainer",children:[Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670693482/Asset_1_1_d43olf.png",alt:"No Videos",className:""}),Object(g.jsxs)("p",{children:["Your search for ",t," did not find any matches."]})]})},e.renderBooks=function(){var t=e.state.dataList;return Object(g.jsx)("div",{className:"itemsContainerBookShelves",children:t.map((function(e){return Object(g.jsx)(E,{itemDetails:e},e.id)}))})},e.renderSuccessView=function(){var t=e.state.dataList;return console.log(t),t.length?e.renderBooks():e.renderNoBooks()},e.renderFailureView=function(){return Object(g.jsxs)("div",{className:"FailureContainer",children:[Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670692230/Group_7522_hxe6g6.png",alt:"failure view",className:"FailureImage"}),Object(g.jsx)("p",{className:"FailureText",children:"Something went wrong. Please try again"}),Object(g.jsx)("button",{type:"button",onClick:e.getData,className:"NotFoundButton",children:"Try Again"})]})},e.renderBookShelve=function(){return e.state.success?e.renderSuccessView():e.renderFailureView()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state,t=e.searchText,a=e.isLoading;return Object(g.jsxs)("div",{className:"BookShelvesRoute",children:[Object(g.jsxs)("div",{className:"searchBoxContainerMobile",children:[Object(g.jsx)("input",{type:"search",className:"searchBox",placeholder:"Search",value:t,onChange:this.onSearch}),Object(g.jsx)("button",{testid:"searchButton",type:"button",className:"SearchButton",onClick:this.searchResult,children:Object(g.jsx)(R.c,{})})]}),Object(g.jsx)(V,{}),Object(g.jsxs)("div",{className:"BookShelves",children:[Object(g.jsxs)("div",{className:"BookShelvesHeadingContainer",children:[Object(g.jsx)("p",{className:"BookShelvesHeading",children:"Currently Reading Books"}),Object(g.jsxs)("div",{className:"searchBoxContainer",children:[Object(g.jsx)("input",{type:"search",className:"searchBox",placeholder:"Search",value:t,onChange:this.onSearch}),Object(g.jsx)("button",{type:"button",onClick:this.searchResult,className:"SearchButton",children:Object(g.jsx)(R.c,{})})]})]}),a?this.renderLoading():this.renderBookShelve()]})]})}}]),a}(s.Component)),W=U,z=(a(93),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchText:"",dataList:[],success:!1,isLoading:!0},e.getData=Object(m.a)(b.a.mark((function t(){var a,s,n,c,r,o,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.searchText,s=v.a.get("jwt_token"),n="https://apis.ccbp.in/book-hub/books?shelf=WANT_TO_READ&search=".concat(a),c={method:"GET",headers:{Authorization:"Bearer ".concat(s)}},t.next=6,fetch(n,c);case 6:return r=t.sent,t.next=9,r.json();case 9:o=t.sent,!0===r.ok&&(i=o.books.map((function(e){return{authorName:e.author_name,coverPic:e.cover_pic,id:e.id,rating:e.rating,readStatus:e.read_status,title:e.title}})),e.setState({dataList:i,success:!0,isLoading:!1}));case 11:case"end":return t.stop()}}),t)}))),e.onSearch=function(t){e.setState({searchText:t.target.value})},e.searchResult=function(){e.setState(e.getData)},e.renderLoading=function(){return Object(g.jsx)("div",{className:"ShelvesLoading",children:Object(g.jsx)(y.a,{type:"TailSpin",color:"#0284C7"})})},e.renderNoBooks=function(){var t=e.state.searchText;return Object(g.jsxs)("div",{className:"NoBooksContainer",children:[Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670693482/Asset_1_1_d43olf.png",alt:"No Videos"}),Object(g.jsxs)("p",{children:["Your search for ",t," did not find any matches."]})]})},e.renderBooks=function(){var t=e.state.dataList;return Object(g.jsx)("div",{className:"itemsContainerBookShelves",children:t.map((function(e){return Object(g.jsx)(E,{itemDetails:e},e.id)}))})},e.renderSuccessView=function(){return e.state.dataList.length?e.renderBooks():e.renderNoBooks()},e.renderFailureView=function(){return Object(g.jsxs)("div",{className:"FailureContainer",children:[Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670692230/Group_7522_hxe6g6.png",alt:"failure view",className:"FailureImage"}),Object(g.jsx)("p",{className:"FailureText",children:"Something went wrong. Please try again"}),Object(g.jsx)("button",{type:"button",onClick:e.getData,className:"NotFoundButton",children:"Try Again"})]})},e.renderBookShelve=function(){return e.state.success?e.renderSuccessView():e.renderFailureView()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state,t=e.searchText,a=e.isLoading;return Object(g.jsxs)("div",{className:"BookShelvesRoute",children:[Object(g.jsxs)("div",{className:"searchBoxContainerMobile",children:[Object(g.jsx)("input",{type:"search",className:"searchBox",placeholder:"Search",value:t,onChange:this.onSearch}),Object(g.jsx)("button",{testid:"searchButton",type:"button",className:"SearchButton",onClick:this.searchResult,children:Object(g.jsx)(R.c,{})})]}),Object(g.jsx)(V,{}),Object(g.jsxs)("div",{className:"BookShelves",children:[Object(g.jsxs)("div",{className:"BookShelvesHeadingContainer",children:[Object(g.jsx)("p",{className:"BookShelvesHeading",children:"Books That You Wanted To Read"}),Object(g.jsxs)("div",{className:"searchBoxContainer",children:[Object(g.jsx)("input",{type:"search",className:"searchBox",placeholder:"Search",value:t,onChange:this.onSearch}),Object(g.jsx)("button",{type:"button",onClick:this.searchResult,className:"SearchButton",children:Object(g.jsx)(R.c,{})})]})]}),a?this.renderLoading():this.renderBookShelve()]})]})}}]),a}(s.Component)),q=z,J=(a(94),function(){return Object(g.jsx)(C.Consumer,{children:function(e){var t=e.search,a=(e.onSearch,e.activeNav);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(D,{}),function(){switch(!0){case"ALL"===a:return Object(g.jsx)(M,{searchText:t});case"READ"===a:return Object(g.jsx)(Y,{searchText:t});case"CURRENTLY_READING"===a:return Object(g.jsx)(W,{searchText:t});case"WANT_TO_READ"===a:return Object(g.jsx)(q,{searchText:t});default:return Object(g.jsx)(M,{searchText:t})}}(),Object(g.jsx)(T,{})]})}})}),K=(a(95),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},success:!0,isLoading:!0},e.getData=Object(m.a)(b.a.mark((function t(){var a,s,n,c,r,o,i,l,u;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.match,s=a.params,n=s.id,c=v.a.get("jwt_token"),r="https://apis.ccbp.in/book-hub/books/".concat(n),o={methods:"GET",headers:{Authorization:"Bearer ".concat(c)}},t.next=8,fetch(r,o);case 8:return i=t.sent,t.next=11,i.json();case 11:l=t.sent,!0===i.ok?(u={aboutAuthor:l.book_details.about_author,aboutBook:l.book_details.about_book,authorName:l.book_details.author_name,coverPic:l.book_details.cover_pic,id:l.book_details.id,rating:l.book_details.rating,readStatus:l.book_details.read_status,title:l.book_details.title},e.setState({data:u,isLoading:!1,success:!0})):e.setState({isLoading:!1,success:!1});case 13:case"end":return t.stop()}}),t)}))),e.renderFailureView=function(){return Object(g.jsxs)("div",{className:"FailureContainer",children:[Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670692230/Group_7522_hxe6g6.png",alt:"failure view",className:"FailureImage"}),Object(g.jsx)("p",{className:"FailureText",children:"Something went wrong. Please try again"}),Object(g.jsx)("button",{type:"button",onClick:e.getData,className:"NotFoundButton",children:"Try Again"})]})},e.renderLoader=function(){return Object(g.jsx)("div",{className:"Loader",testid:"loader",children:Object(g.jsx)(y.a,{type:"TailSpin",color:"#0284C7"})})},e.renderSuccessView=function(){var t=e.state.data,a=t.rating,s=t.coverPic,n=t.authorName,c=t.title,r=t.readStatus,o=(t.id,t.aboutAuthor),i=t.aboutBook;return Object(g.jsx)("div",{className:"BookDetails",children:Object(g.jsxs)("div",{className:"DetailsBox",children:[Object(g.jsxs)("div",{className:"BookItemDetails",children:[Object(g.jsx)("div",{className:"BookImageContainer",children:Object(g.jsx)("img",{src:s,alt:c,className:"bookImageDetail"})}),Object(g.jsxs)("div",{className:"BookDetailsDetail",children:[Object(g.jsx)("h1",{className:"BookHeadingItemDetail",children:c}),Object(g.jsx)("p",{className:"p",children:n}),Object(g.jsxs)("p",{className:"p",children:["Avg Rating: ",Object(g.jsx)(H.a,{color:"#FBBF24"})," ",a]}),Object(g.jsxs)("p",{className:"p",children:["Status:",Object(g.jsx)("span",{className:"blue",children:r})]})]})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"authorContainer",children:[Object(g.jsx)("h1",{className:"authorHeading",children:"About Author"}),Object(g.jsx)("p",{className:"authorDescription",children:o})]}),Object(g.jsxs)("div",{className:"authorContainer",children:[Object(g.jsx)("h1",{className:"authorHeading",children:"About Book"}),Object(g.jsx)("p",{className:"authorDescription",children:i})]})]})})},e.renderBookDetails=function(){return e.state.success?e.renderSuccessView():e.renderFailureView()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.isLoading;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(D,{}),e?this.renderLoader():this.renderBookDetails(),Object(g.jsx)(T,{})]})}}]),a}(s.Component)),Q=K,X=(a(96),function(){return Object(g.jsxs)("div",{className:"NotFound",children:[Object(g.jsx)("img",{src:"https://res.cloudinary.com/dub9ymu0j/image/upload/v1670702789/Group_7484_yzrfuf.png",alt:"not found"}),Object(g.jsx)("h1",{className:"NotFoundHeading",children:"Page Not Found"}),Object(g.jsx)("p",{className:"NotFoundText",children:"we are sorry, the page you requested could not be found,Please go back to the homepage."}),Object(g.jsx)(o.b,{to:"/bookHub",children:Object(g.jsx)("button",{type:"button",className:"NotFoundButton",children:"Go Back to Home"})})]})}),Z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={active:"",activeNav:"ALL",search:""},e.onSearch=function(t){e.setState({search:t.target.id})},e.changeNavItem=function(t){e.setState({activeNav:t.target.id})},e.onChangeActive=function(t){e.setState({active:t.target.id}),console.log(t.target.id)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.active,a=e.activeNav,s=e.search;return Object(g.jsx)(C.Provider,{value:{active:t,changeActive:this.onChangeActive,activeNav:a,changeNavItem:this.changeNavItem,search:s,onSearch:this.onSearch},children:Object(g.jsxs)(h.d,{children:[Object(g.jsx)(h.b,{path:"/login",component:O}),Object(g.jsx)(f,{exact:!0,path:"/bookHub",component:F}),Object(g.jsx)(f,{exact:!0,path:"/shelf",component:J}),Object(g.jsx)(f,{exact:!0,path:"/books/:id",component:Q}),Object(g.jsx)(h.b,{component:X})]})})}}]),a}(s.Component),$=Z;r.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(o.a,{basename:"/bookHub",children:Object(g.jsx)($,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.cd6cba04.chunk.js.map