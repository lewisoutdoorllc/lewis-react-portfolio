(this["webpackJsonplewis-react-portfolio"]=this["webpackJsonplewis-react-portfolio"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"React Portfolio","image":"./assets/portfolioImages/react-ss.jpg","gitHub":"https://github.com/lewisoutdoorllc/lewis-react-portfolio","app":"https://github.com/lewisoutdoorllc/lewis-react-portfolio"},{"id":2,"name":"PWA Budget Tracker","image":"./assets/portfolioImages/pwa-budget-tracker-ss.png","gitHub":"https://github.com/lewisoutdoorllc/PWA_budget_tracker","app":"https://lewis-pwa-budget-tracker.herokuapp.com/"},{"id":3,"name":"Social Network API","image":"./assets/portfolioImages/socialNetworkApi-ss.png","gitHub":"https://github.com/lewisoutdoorllc/lewis_socialNetwork_API","app":"https://drive.google.com/file/d/1Y94Vg-X3X4IRICFg5aFIbelyOt01wqdb/view"},{"id":4,"name":"Sports Buzz","image":"./assets/portfolioImages/sportsbuzz-ss.png","gitHub":"https://github.com/mrhumpherys/social-sports","app":"https://sports-buzz.herokuapp.com/"},{"id":5,"name":"Tech Blog","image":"./assets/portfolioImages/tech_blog.gif","gitHub":"https://github.com/lewisoutdoorllc/tech-blog","app":"https://stark-stream-49625.herokuapp.com/"},{"id":6,"name":"Team Building Generator","image":"./assets/portfolioImages/screenshot-team-generator.ss.png","gitHub":"https://github.com/lewisoutdoorllc/team-building-generator","app":"https://drive.google.com/file/d/1iv6y53L0LdPQElbOSg9qw-Rpd4VOxpVt/view"},{"id":7,"name":"Sneaker Bay","image":"./assets/portfolioImages/sneakerbay-snapshot.png","gitHub":"https://github.com/mrhumpherys/sneakerBay","app":"https://sneakerbay.herokuapp.com/"}]')},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(7),i=s.n(c),r=s(2),l=s(0);var n=function(e){return Object(l.jsx)("ul",{className:"nav nav-pills sticky-top p-4",children:["About Me","Portfolio","Contact","Resume"].map((function(t){return Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link",children:t})},t)}))})},o=s.p+"static/media/head-shot.2eaedb59.jpg",m=function(){return Object(l.jsxs)("div",{className:"p-3",children:[Object(l.jsx)("img",{src:o,className:"head-shot",alt:""}),Object(l.jsx)("h1",{children:"A Little About Me"}),Object(l.jsx)(l.Fragment,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus."})]})},d=s.p+"static/media/Lewis_Coding_Resume.52ae433d.PDF";var j=function(){return Object(l.jsx)("main",{id:"main",children:Object(l.jsx)("section",{id:"about",className:"about",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"col-lg-8 pt-4 pt-lg-0 content","data-aos":"fade-left",children:Object(l.jsxs)("div",{className:"section-title about content",children:[Object(l.jsx)("h2",{children:"Resume"}),Object(l.jsx)("button",{id:"resume-button",className:"about content resume-btn",children:Object(l.jsx)("a",{href:d,target:"blank",children:Object(l.jsx)("span",{className:"resume-btn m-3",children:"Click here to Download my Resume"})})})]})})})})})},b=s(6);var u=function(e){return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"img-container",children:Object(l.jsx)("img",{alt:e.name,src:e.image})}),Object(l.jsxs)("div",{className:"card-body content",children:[Object(l.jsx)("h5",{className:"card-title",children:e.name}),Object(l.jsx)("a",{href:e.gitHub,id:"portfolio-btn",target:"blank",className:"btn",children:Object(l.jsx)(b.b,{className:"portfolio-icons"})}),Object(l.jsx)("a",{href:e.app,id:"portfolio-btn",target:"blank",className:"btn",children:Object(l.jsx)(b.a,{className:"portfolio-icons"})})]})]})},h=s(3),p=s(5);var x=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(""),n=Object(r.a)(i,2),o=n[0],m=n[1],d=s.name,j=s.email,b=s.message,u=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);m(t?"":"Your email is invalid.")}else e.target.value.length?m(""):m("".concat(e.target.name," is required."));o||(c(Object(p.a)(Object(p.a)({},s),{},Object(h.a)({},e.target.name,e.target.value))),console.log("Handle Form",s))};return Object(l.jsx)("main",{children:Object(l.jsxs)("section",{className:"mb-4 p-5",children:[Object(l.jsx)("h2",{className:"h1-responsive font-weight-bold text-center my-4",children:"Contact Me!"}),Object(l.jsx)("p",{className:"text-center w-responsive mx-auto mb-5",children:"Do you have any questions? Please do not hesitate to contact me directly."}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-md-6 mb-md-0 mb-5 p-4",children:[Object(l.jsxs)("form",{id:"contact-form",name:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",s)},children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsx)("div",{className:"md-form mb-4",children:Object(l.jsx)("input",{className:"form-control",placeholder:"Name",type:"text",name:"name",defaultValue:d,onBlur:u})})}),Object(l.jsx)("div",{className:"col-md-6",children:Object(l.jsx)("div",{className:"md-form mb-4",children:Object(l.jsx)("input",{className:"form-control",placeholder:"Email Address",type:"email",name:"email",defaultValue:j,onBlur:u})})})]}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsx)("div",{className:"md-form mb-4",children:Object(l.jsx)("input",{placeholder:"Subject",type:"text",id:"subject",name:"subject",className:"form-control"})})})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-med-12",children:[Object(l.jsx)("div",{className:"md-form",children:Object(l.jsx)("textarea",{placeholder:"Message",className:"form-control md-textarea",type:"text",id:"message",name:"message",rows:"6",defaultValue:b,onBlur:u})}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})})]})})]}),Object(l.jsx)("div",{className:"text-center text-md-left mt-2",children:Object(l.jsx)("button",{className:"btn btn-primary",children:"Send"})}),Object(l.jsx)("div",{className:"status"})]}),Object(l.jsx)("div",{className:"col-md-3 text-center",children:Object(l.jsxs)("ul",{className:"list-unstyled mb-0",children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"fas fa-map-marker-alt fa-2x"}),Object(l.jsx)("p",{children:"Oviedo, Fl 32765, USA"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"fas fa-phone mt-4 fa-2x"}),Object(l.jsx)("p",{children:"(407)792-9470"})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("i",{className:"fas fa-envelope mt-4 fa-2x"}),Object(l.jsx)("p",{children:"lewisoutdoorllc@gmail.com"})]})]})})]})]})})};s(14);var O=function(e){return Object(l.jsx)("div",{className:"wrapper",children:e.children})},g=s(8);var f=function(){var e=Object(a.useState)("About Me"),t=Object(r.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(g),o=Object(r.a)(i,1)[0];return Object(l.jsxs)("div",{children:[Object(l.jsx)(n,{currentPage:s,handlePageChange:c}),Object(l.jsx)("div",{children:function(){switch(s){case"Resume":return Object(l.jsx)(j,{});case"Portfolio":return Object(l.jsxs)(O,{children:[Object(l.jsx)("h1",{className:"title",children:"Portfolio"}),o.map((function(e){return Object(l.jsx)(u,{id:e.id,name:e.name,image:e.image,gitHub:e.gitHub,app:e.app},e.id)}))]});case"Contact":return Object(l.jsx)(x,{});default:return Object(l.jsx)(m,{})}}()})]})};var v=function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"columns",children:[Object(l.jsxs)("ul",{className:"social-links",children:[Object(l.jsx)("li",{children:Object(l.jsxs)("a",{href:"https://linkedin.com/in/cody-lewis-1165b91bb",target:"blank",children:[" ",Object(l.jsx)("i",{className:"fab fa-linkedin"})," "]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("a",{href:"https://github.com/lewisoutdoorllc",target:"blank",children:[" ",Object(l.jsx)("i",{className:"fab fa-github"})," "]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("a",{href:"https://stackoverflow.com/users/14606660/cody-lewis",target:"blank",children:[" ",Object(l.jsx)("i",{className:"fab fa-stack-overflow"})," "]})})]}),Object(l.jsx)("ul",{className:"copyright",children:Object(l.jsx)("li",{children:"\xa9 2021 Cody Lewis"})})]})})})};var N=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsx)("div",{className:"jumbotron"})})})})},w=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(N,{}),Object(l.jsx)(f,{}),Object(l.jsx)(v,{})]})};s(15),s(16),s(17),s(18),s(19),s(20),s(21);i.a.render(Object(l.jsx)(w,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.0e9bd036.chunk.js.map