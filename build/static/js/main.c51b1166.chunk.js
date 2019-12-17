(this["webpackJsonpjobportal-frontend"]=this["webpackJsonpjobportal-frontend"]||[]).push([[0],{146:function(e,t,a){"use strict";a.r(t);var n=a(191),r=a(112),l=a(186),o=a.n(l),s=a(39),i=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userdetails:{}},t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"SIGNIN_USER":case"SIGNUP_USER":return{userdetails:t.payload};case"SIGNOUT":return{userdetails:{}};default:return e}}}),c={key:"job_portal",storage:o.a},u=Object(r.a)(c,i),m=a(187),p=a(188),d=a(145),h=a.n(d),b=a(189),f=a.n(b),E=a(374),g=function(e,t,a){E.a[e]({message:t,description:a})},v=f.a.create({baseURL:"https://api.atjp.squareboat.info/",timeout:3e4});v.interceptors.request.use((function(e){return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return Promise.resolve().then(a.bind(null,146)).then((function(t){var a=t.default.store.getState();a.auth.userdetails&&(e.headers.Authorization="Bearer ".concat(a.auth.userdetails.token))})),t.next=3,h.a.awrap(e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}))})),v.interceptors.response.use((function(e){return e.data}),(function(e){return 422==e.response.status?g("error","ERROR OCCURED",e.response.data.errors):401==e.response.data.code?g("error","ERROR OCCURED",e.response.data.errors):(console.log("EEROORRR:::::",e.response),g("error","ERROR OCCURED",e.response.data.errors)),Promise.reject(e)}));Object(p.createLogger)();var j=[m.a.withExtraArgument({axios:v})];t.default=function(){var e=Object(s.d)(s.a.apply(void 0,Object(n.a)(j))),t=Object(s.e)(u,e);return{store:t,persistor:Object(r.b)(t)}}()},196:function(e,t,a){e.exports=a(371)},201:function(e,t,a){},202:function(e,t,a){},371:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),o=a.n(l),s=(a(201),a(202),a(21)),i=a(42),c=a(10),u=a(11),m=a(13),p=a(12),d=a(14),h=a(383),b=a(380),f=a(373),E=function(e){return function(t,a,n){var r=n.axios;return new r.post("/signin",e).then((function(e){var a=e.data;return t({type:"SIGNIN_USER",payload:a}),r.defaults.headers.common.Authorization="Bearer ".concat(a.token),e.data}))}},g=a(15),v=(h.a.SubMenu,b.a.Title),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={current:"mail",redirect:!1},a.handleClick=function(e,t){"/signout"==t&&(e.preventDefault(),a.props.signout(),a.setState({redirect:!0}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;if(this.state.redirect)return r.a.createElement(i.a,{to:"/signin"});var t=this.props,a=t.text,n=t.to;t.history;return(r.a.createElement(f.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"5px 10px"}},r.a.createElement(v,{level:2,key:"mail"},"Job portal"),r.a.createElement(v,{level:4,key:"mail"},r.a.createElement(s.b,{onClick:function(t){return e.handleClick(t,n)},to:n},a))))}}]),t}(r.a.Component),O=Object(g.b)(null,{signout:function(){return function(e,t,a){var n=a.axios;return e({type:"SIGNOUT",payload:null}),n.defaults.headers.common.Authorization="",null}}})(j),y=(n.Component,a(386)),w=a(379),C=a(192),S=a(88),$=a(9),A=a(382),N=a(147),D="/signin",R="/signout",k="/candidate/jobs",I="/recruiter/jobs",x=y.a.Option,P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1,autoCompleteResult:[]},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){console.log(t),e||a.props.signup(t).then((function(e){"0"==e.role?a.props.history.push(k):"1"==e.role&&a.props.history.push(I)}))}))},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()},a.validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a.handleWebsiteChange=function(e){var t;t=e?[".com",".org",".net"].map((function(t){return"".concat(e).concat(t)})):[],a.setState({autoCompleteResult:t})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;this.state.autoCompleteResult.map((function(e){return r.a.createElement(x,{key:e},e)}));return r.a.createElement("div",null,r.a.createElement(O,{text:"Signin",to:"/signin"}),r.a.createElement(w.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit,className:"wrapperForm"}),r.a.createElement(w.a.Item,{label:"E-Mail"},e("username",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(C.a,null))),r.a.createElement(w.a.Item,{label:r.a.createElement("span",null,"Password\xa0",r.a.createElement(S.a,{title:"Password must be minimum 6 character long "},r.a.createElement($.a,{type:"question-circle-o"}))),hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{min:6,message:"Password should be minimum of 6 character"},{validator:this.validateToNextPassword}]})(r.a.createElement(C.a.Password,null))),r.a.createElement(w.a.Item,{label:r.a.createElement("span",null,"Name\xa0",r.a.createElement(S.a,{title:"Please write full name seperated with space - eg. Aman Kumar"},r.a.createElement($.a,{type:"question-circle-o"})))},e("name",{rules:[{required:!0,message:"Please input your name!",whitespace:!0}]})(r.a.createElement(C.a,null))),r.a.createElement(w.a.Item,{label:"Your Profile"},e("role",{rules:[{required:!0,message:"Please select your role!"}]})(r.a.createElement(A.a.Group,null,r.a.createElement(A.a.Button,{value:"0"},"I am a Candidate"),r.a.createElement(A.a.Button,{value:"1"},"I am a Recruiter")))),r.a.createElement(w.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},r.a.createElement(N.a,{type:"primary",htmlType:"submit"},"Signup"))))}}]),t}(r.a.Component);P=Object(g.b)((function(e){return{userdetails:e.auth.userdetails}}),{signup:function(e){return function(t,a,n){var r=n.axios;return new r.post("/signup",e).then((function(e){var a=e.data;return t({type:"SIGNUP_USER",payload:a}),r.defaults.headers.common.Authorization="Bearer ".concat(a.token),e.data}))}}})(P);var T=w.a.create({name:"normal_signup"})(P),F=a(31),L=a(374),J=function(e,t,a){L.a[e]({message:t,description:a})},U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||a.props.signin(t).then((function(e){console.log("###########",e),"0"==e.role&&a.props.history.push(k),"2"==e.role&&(a.props.history.push(D),J("error","ADMIN CAN'T GOT THROUGH THIS ROUTE")),"1"==e.role&&a.props.history.push("/recruiter")}))}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",null,r.a.createElement(O,{text:"Signup",to:"/signup"}),r.a.createElement("div",{align:"left"},r.a.createElement(s.b,{to:"/adminsignin"},r.a.createElement("span",{className:"links"},r.a.createElement("u",null,"Admin Signin Window")))),r.a.createElement(w.a,Object(F.a)({onSubmit:this.handleSubmit,className:"login-form"},"className","wrapperForm"),r.a.createElement(w.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(C.a,{prefix:r.a.createElement($.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(w.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(C.a,{prefix:r.a.createElement($.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(w.a.Item,null,r.a.createElement(N.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),r.a.createElement("br",null),"Forgot password ? ",r.a.createElement(s.b,{to:"/resetpasswordsteps"},"Click Here "),r.a.createElement("br",null),"OR ",r.a.createElement("b",null,r.a.createElement(s.b,{to:"/signup"},"register now!")))))}}]),t}(r.a.Component);U=Object(g.b)((function(e){return{userdetails:e.auth.userdetails}}),{signin:E})(U);var q=w.a.create({name:"normal_signin"})(U),G=function(e){return function(t,a,n){var r=n.axios;return console.log(e),new r.get("/jobs",{params:e}).then((function(e){return e.data}))}},_=a(65),B=a(378),M=a(381),W=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={list:[],isApplied:!1,page:1,limit:6,total:0},a.applyToJob=function(e,t){e.preventDefault();a.props.applyForJob(t).then((function(e){var n=a.state.list.map((function(e){return e.uuid===t?Object(_.a)({},e,{isApplied:!0}):e}));a.setState({list:n})}))},a.delJob=function(e,t){e.preventDefault();a.props.deleteJob(t).then((function(e){var n=a.state.list.map((function(e){return e.uuid===t?Object(_.a)({},e,{isApplied:!0}):e}));a.setState({list:n})}))},a.onChange=function(e){var t={page:e,limit:a.state.limit};a.props.availablejobs(t).then((function(e){a.setState({total:e.metadata.count,list:e.results})}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;if("0"==this.props.userData.auth.userdetails.role){var t={page:this.state.page,limit:this.state.limit};this.props.availablejobs(t).then((function(t){e.setState({total:t.metadata.count,list:t.results})}))}else this.props.allJobs().then((function(t){e.setState({total:t.metadata.count,list:t.results})}))}},{key:"render",value:function(){var e=this,t=this.state.list;return t.length<1?r.a.createElement("h2",null,r.a.createElement("center",null,"No Jobs Published So far...")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{align:"center"},"LIST OF JOBS"),"0"==this.props.userData.auth.userdetails.role?t.map((function(t){return r.a.createElement("div",{className:"cards"},r.a.createElement(B.a,{title:t.job_title},r.a.createElement("p",null,t.job_description),r.a.createElement(N.a,{type:"primary",onClick:function(a){return e.applyToJob(a,t.uuid)},disabled:t.isApplied},"Apply")))})):t.map((function(t){return r.a.createElement("div",{className:"cards"},r.a.createElement(B.a,{title:t.job_title},r.a.createElement("p",null,t.job_description),r.a.createElement(N.a,{type:"danger",onClick:function(a){return e.delJob(a,t.uuid)},disabled:t.isApplied},"Delete")))})),r.a.createElement(M.a,{onChange:this.onChange,total:this.state.total,pageSize:this.state.limit}))}}]),t}(n.Component),z=Object(g.b)((function(e){return{userData:e}}),{applyForJob:function(e){return function(t,a,n){var r=n.axios,l="/jobs/:jobId".replace(":jobId",e);return new r.post(l).then((function(e){return e.data}))}},availablejobs:G,allJobs:function(){return function(e,t,a){return new a.axios.get("/jobs").then((function(e){return e.data}))}},deleteJob:function(e){return function(t,a,n){var r=n.axios,l="/jobs/:jobId".replace(":jobId",e);return new r.delete(l).then((function(e){return e.data}))}}})(W),X=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={initLoading:!1,loading:!1,data:[],current:1},a.onChange=function(e){console.log(e),a.setState({current:e})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.availablejobs;return r.a.createElement("div",null,r.a.createElement(O,{text:"Logout",to:R}),r.a.createElement("div",{align:"left"},r.a.createElement(s.b,{to:"/candidate/jobs/applications"},r.a.createElement("span",{className:"links"},r.a.createElement("u",null,"View Applied Jobs")))),r.a.createElement("div",{className:"listCards"},r.a.createElement(z,{availablejobs:e})))}}]),t}(r.a.Component);X=Object(g.b)((function(e){return{userData:e}}),{availablejobs:G})(X);var V=w.a.create({name:"candidateJobs"})(X),H=a(375),K=a(385),Y=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{text:"Logout",to:R}),r.a.createElement(H.a,null,r.a.createElement(K.a,null,r.a.createElement(K.a.Body,null,r.a.createElement(s.b,{to:"/admin/candidates"},r.a.createElement(K.a.Title,null,"Candidates")),r.a.createElement(K.a.Text,null,"All candidates with their email and Id's are listed. Manage Candidates here."))),r.a.createElement(K.a,null,r.a.createElement(K.a.Body,null,r.a.createElement(s.b,{to:"/admin/recruiters"},r.a.createElement(K.a.Title,null,"Recruiters")),r.a.createElement(K.a.Text,null,"All Recruiters with their email and Id's are listed. Manage Recruiters here."))),r.a.createElement(K.a,null,r.a.createElement(K.a.Body,null,r.a.createElement(s.b,{to:"/admin/jobs"},r.a.createElement(K.a.Title,null,"Jobs Available")),r.a.createElement(K.a.Text,null,"Here you can manage the jobs posted by Recruiters. Click on Jobs above to view.")))))}}]),t}(n.Component),Q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={list:[],isApplied:!1,page:1,limit:6},a.deleteCandidate=function(e,t){e.preventDefault();a.props.candidateDelete(t).then((function(e){var n=a.state.list.map((function(e){return e.uuid===t?Object(_.a)({},e,{isApplied:!0}):e}));a.setState({list:n})}))},a.onChange=function(e){console.log("PAGE CLICKED ::::",e);var t={page:e,limit:a.state.limit};a.props.allCandidates(t).then((function(e){console.log("$$$$$$$$$$$$",e),a.setState({total:e.metadata.count,list:e.results})}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={page:this.state.page,limit:this.state.limit};this.props.allCandidates(t).then((function(t){e.setState(Object(F.a)({list:t.results,total:t.metadata.count},"list",t.results))}))}},{key:"render",value:function(){var e=this,t=this.state.list;return t.length<1?r.a.createElement("h2",null,r.a.createElement("center",null,"No candidates to Show currently...")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{align:"center"},"LIST OF CANDIDATES"),t.map((function(t){return r.a.createElement("div",{className:"cards"},r.a.createElement(B.a,{title:t.username},r.a.createElement("p",null,"Name:",t.name,r.a.createElement("br",null),"ID:",t.uuid),r.a.createElement(N.a,{type:"danger",onClick:function(a){return e.deleteCandidate(a,t.uuid)},disabled:t.isApplied},"Delete")))})),r.a.createElement(M.a,{onChange:this.onChange,total:this.state.total,pageSize:this.state.limit}))}}]),t}(n.Component),Z=Object(g.b)(null,{candidateDelete:function(e){return function(t,a,n){var r=n.axios,l="/candidates/:candidateId".replace(":candidateId",e);return new r.delete(l).then((function(e){return console.log("@@@@@@@@",e.data),e.data}))}},allCandidates:function(e){return function(t,a,n){return new n.axios.get("/candidates",{params:e}).then((function(e){return console.log("$$$$$$$$$$",e.data),e.data}))}}})(Q),ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={initLoading:!1,loading:!1,data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.allCandidates;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(O,{text:"Logout",to:R})),r.a.createElement("div",{align:"left",className:"linksDivLeft"},r.a.createElement(s.b,{to:"/admin"},r.a.createElement("span",{className:"links"},r.a.createElement("u",null,"Dashboard")))),r.a.createElement("div",{className:"listCards"},r.a.createElement(Z,{allCandidates:e})))}}]),t}(r.a.Component),te=Object(g.b)((function(e){return{candidateData:e}}))(ee),ae=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={list:[],isApplied:!1,page:1,limit:6},a.onChange=function(e){console.log("PAGE CLICKED ::::",e);var t={page:e,limit:a.state.limit};a.props.allRecruiters(t).then((function(e){console.log("$$$$$$$$$$$$",e),a.setState({total:e.metadata.count,list:e.results})}))},a.deleteRecruiter=function(e,t){e.preventDefault();a.props.recruiterDelete(t).then((function(e){var n=a.state.list.map((function(e){return e.uuid===t?Object(_.a)({},e,{isApplied:!0}):e}));a.setState({list:n})}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={page:this.state.page,limit:this.state.limit};this.props.allRecruiters(t).then((function(t){e.setState(Object(F.a)({list:t.results,total:t.metadata.count},"list",t.results))}))}},{key:"render",value:function(){var e=this,t=this.state.list;return t.length<1?r.a.createElement("h2",null,r.a.createElement("center",null,"No Recruiters present...")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{align:"center"},"LIST OF RECRUITERS"),t.map((function(t){return r.a.createElement("div",{className:"cards"},r.a.createElement(B.a,{title:t.username},r.a.createElement("p",null,t.name,r.a.createElement("br",null),"ID:",t.uuid),r.a.createElement(N.a,{type:"danger",onClick:function(a){return e.deleteRecruiter(a,t.uuid)},disabled:t.isApplied},"Delete")))})),r.a.createElement(M.a,{onChange:this.onChange,total:this.state.total,pageSize:this.state.limit}))}}]),t}(n.Component),ne=Object(g.b)(null,{allRecruiters:function(e){return function(t,a,n){return new n.axios.get("/recruiters",{params:e}).then((function(e){return console.log("$$$$$$ALLRECRUITERS::",e.data),e.data}))}},recruiterDelete:function(e){return function(t,a,n){var r=n.axios,l="/recruiters/:recruiterId".replace(":recruiterId",e);return r.delete(l).then((function(e){return console.log("$$$$$$$$AFTER REC DELETE DATA",e.data),e.data}))}}})(ae),re=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={initLoading:!1,loading:!1,data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(O,{text:"Logout",to:R})),r.a.createElement("div",{align:"left",className:"linksDivLeft"},r.a.createElement(s.b,{to:"/admin"},r.a.createElement("span",{className:"links"},r.a.createElement("u",null,"Dashboard")))),r.a.createElement("div",{className:"listCards"},r.a.createElement(ne,null)))}}]),t}(n.Component),le=Object(g.b)((function(e){return{candidateData:e}}))(re),oe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={initLoading:!1,loading:!1,data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(O,{text:"Logout",to:R})),r.a.createElement("div",{align:"left",className:"linksDivLeft"},r.a.createElement(s.b,{to:"/admin"},r.a.createElement("span",{className:"links"},r.a.createElement("u",null,"Dashboard")))),r.a.createElement("div",{className:"listCards"},r.a.createElement(z,null)))}}]),t}(n.Component),se=Object(g.b)((function(e){return{candidateData:e}}))(oe),ie=C.a.TextArea,ce=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||a.props.postJob(t).then((function(e){alert("Job is posted Successfully"),console.log("$$$JOB POSTED$$$ :: ",e)}))}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(O,{text:"Logout",to:R})),r.a.createElement("div",{align:"left"},r.a.createElement(s.b,{to:"/recruiter/jobs"},r.a.createElement("span",{className:"links"},r.a.createElement("u",null,"View Your Published Jobs!")))),r.a.createElement("div",{className:"wrapperForm"},r.a.createElement(w.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement("h2",null,r.a.createElement("strong",null,"Publish New Job")),r.a.createElement(w.a.Item,null,e("title",{rules:[{required:!0,message:"Please mention title of Job!"}]})(r.a.createElement(C.a,{prefix:r.a.createElement($.a,{type:"tag",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Job Title"}))),r.a.createElement(w.a.Item,null,e("description",{rules:[{required:!0,message:"Please mention description of job!"}]})(r.a.createElement(ie,{rows:4,prefix:r.a.createElement($.a,{type:"form",style:{color:"rgba(0,0,0,.25)"},rows:4}),placeholder:"Job Description"}))),r.a.createElement(w.a.Item,null,r.a.createElement(N.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Publish Job")))))}}]),t}(r.a.Component);ce=Object(g.b)((function(e){return{userData:e}}),{postJob:function(e){return function(t,a,n){return new n.axios.post("/jobs",e).then((function(e){return e.data}))}}})(ce);var ue=w.a.create({name:"candidateJobs"})(ce),me=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={list:[],isApplied:!1,page:1,limit:6},a.onChange=function(e){console.log("PAGE CLICKED ::::",e);var t={page:e,limit:a.state.limit};a.props.allJobsByRecruiter(t).then((function(e){console.log("$$$$$$$$$$$$",e),a.setState({total:e.metadata.count,list:e.results})}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={page:this.state.page,limit:this.state.limit};this.props.allJobsByRecruiter(t).then((function(t){e.setState(Object(F.a)({list:t.results,total:t.count},"list",t.results))}))}},{key:"render",value:function(){var e=this.state.list;return e.length<1?r.a.createElement("h2",null,r.a.createElement("center",null,"No Jobs Published!")):r.a.createElement(r.a.Fragment,null,e.map((function(e){var t="/recruiter/jobs/"+e.uuid;return r.a.createElement("div",{className:"cards"},r.a.createElement(B.a,{title:e.job_title},r.a.createElement("p",null,e.job_description,r.a.createElement("br",null),"ID:",e.uuid),r.a.createElement(s.b,{to:t},"View Applications")))})),r.a.createElement(M.a,{onChange:this.onChange,total:this.state.total,pageSize:this.state.limit}))}}]),t}(n.Component),pe=Object(g.b)(null,{allJobsByRecruiter:function(e){return function(t,a,n){return new n.axios.get("/jobs/posted",{params:e}).then((function(e){return e.data}))}}})(me),de=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={initLoading:!1,loading:!1,data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{text:"Logout",to:"/signout"}),r.a.createElement("div",{align:"left"},r.a.createElement(s.b,{to:"/recruiter"},r.a.createElement("span",{className:"links"},r.a.createElement("u",null,"Post a Job !!")))),r.a.createElement("div",{className:"listCards"},r.a.createElement(pe,null)))}}]),t}(n.Component),he=Object(g.b)((function(e){return{candidateData:e}}))(de),be=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={list:[],page:1,limit:6},a.onChange=function(e){console.log("PAGE CLICKED ::::",e);var t={page:e,limit:a.state.limit};a.props.getAppliedCandidates(a.props.jobId,t).then((function(e){console.log("$$$$$$$$$$$$",e),a.setState({total:e.metadata.count,list:e.results})}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={page:this.state.page,limit:this.state.limit};this.props.getAppliedCandidates(this.props.jobId,t).then((function(t){e.setState(Object(F.a)({list:t.results,total:t.metadata.count},"list",t.results))}))}},{key:"render",value:function(){var e=this.state.list;return e.length<1?r.a.createElement("h2",null,r.a.createElement("center",null,"No Applications Received")):r.a.createElement(r.a.Fragment,null,e.map((function(e){return r.a.createElement("div",{className:"cards"},r.a.createElement(B.a,{title:e.username},"Name:",e.name,r.a.createElement("br",null),"ID :",e.uuid))})),r.a.createElement(M.a,{onChange:this.onChange,total:this.state.total,pageSize:this.state.limit}))}}]),t}(n.Component),fe=Object(g.b)((function(e){return{userData:e}}),{getAppliedCandidates:function(e,t){return function(a,n,r){var l=r.axios,o="/jobs/posted/:jobId".replace(":jobId",e);return new l.get(o,{params:t}).then((function(e){return e.data}))}}})(be),Ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={initLoading:!1,loading:!1,data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{text:"Logout",to:R}),r.a.createElement("div",{align:"left",className:"linksDivLeft"},r.a.createElement(s.b,{to:"/recruiter/jobs"},r.a.createElement("span",{className:"links"},r.a.createElement("u",null,"View Published Jobs")))),r.a.createElement("div",{align:"right",className:"linksDivRight"},r.a.createElement(s.b,{to:"/recruiter"},r.a.createElement("span",{className:"linksRight"},r.a.createElement("u",null,"Post New Job")))),r.a.createElement(fe,{jobId:this.props.match.params.jobId}))}}]),t}(n.Component),ge=Object(g.b)((function(e){return{candidateData:e}}))(Ee),ve=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e?(console.log("ERROR OCCUREDD::::",e),alert("ERROR OCCURED"+e)):a.props.forgetpassword(t)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(w.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(w.a.Item,null,e("username",{rules:[{required:!0,message:"E-Mail is needed to Reset password!"}]})(r.a.createElement(C.a,{prefix:r.a.createElement($.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"E-mail"}))),r.a.createElement(w.a.Item,null,r.a.createElement(N.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Reset Password")))}}]),t}(r.a.Component),je=w.a.create({name:"normal_signin"})(ve),Oe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||(console.log("VALUE =GONE TO RESETPASS STEPS VALUE--\x3e",t),a.props.resetpassword(t))}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(w.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(w.a.Item,{label:r.a.createElement("span",null,"Your E-mail"),hasFeedback:!0},e("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(C.a,{prefix:r.a.createElement($.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(w.a.Item,{label:r.a.createElement("span",null,"New Password\xa0",r.a.createElement(S.a,{title:"Password must be minimum 6 character long "},r.a.createElement($.a,{type:"question-circle-o"}))),hasFeedback:!0},e("password",{rules:[{required:!0,message:"Please input your password!"},{min:6,message:"Password should be minimum of 6 character"},{validator:this.validateToNextPassword}]})(r.a.createElement(C.a.Password,null))),r.a.createElement(w.a.Item,{label:r.a.createElement("span",null,"OTP\xa0",r.a.createElement(S.a,{title:"OTP has been shared to your account"},r.a.createElement($.a,{type:"question-circle-o"}))),hasFeedback:!0},e("otp",{rules:[{required:!0,message:"OTP will be 6 digit code sent to your account"},{min:6,message:"OTP too short"},{max:6,message:"OTP too long"}]})(r.a.createElement(C.a,{prefix:r.a.createElement($.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"otp"}))),r.a.createElement(w.a.Item,null,r.a.createElement(N.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Reset Password")))}}]),t}(r.a.Component),ye=w.a.create({name:"reset_form"})(Oe),we=a(384),Ce=a(376),Se=a(377),$e=we.a.Step,Ae=function(e,t,a){L.a[e]({message:t,description:a})},Ne=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={current:0,loading:!1},a.handleResetRequest=function(e){a.setState({loading:!0}),a.props.forgetpassword(e).then((function(e){a.next()})).catch((function(e){Ae("error","Check Email","E-Mail you entered doesn't exists!"),a.setState({loading:!1}),console.log("XXXXX ERRROR IN FORGOT PASS--\x3e",e.response)}))},a.handleFinalResetRequest=function(e){a.props.resetpassword(e).then((function(e){Ce.a.success("XXXXX Password Changed Successfully"),console.log("SUUCESSFULLY RESET RESPONSE ->",e)})).catch((function(e){Ae("error",e.response.data.errors[0].message)}))},a.steps=[{title:"ForgotPassword",content:r.a.createElement(je,{loading:a.state.loa,forgetpassword:a.handleResetRequest})},{title:"ResetPassword",content:r.a.createElement(ye,{resetpassword:a.handleFinalResetRequest})}],a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"next",value:function(){var e=this.state.current+1;this.setState({current:e,loading:!1})}},{key:"prev",value:function(){var e=this.state.current-1;this.setState({current:e,loading:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.current,n=t.loading;return r.a.createElement("div",null,r.a.createElement(O,{text:"Signup",to:"/signup"}),r.a.createElement("div",{className:"wrapperForgetPass"},r.a.createElement(we.a,{current:a},this.steps.map((function(e){return r.a.createElement($e,{key:e.title,title:e.title})}))),r.a.createElement("div",{className:"steps-content"},n?r.a.createElement("span",{className:"spin"},r.a.createElement(Se.a,null)):this.steps[a].content),r.a.createElement("div",{className:"steps-action",align:"right"},a<this.steps.length-1&&r.a.createElement(N.a,{type:"default",onClick:function(){return e.next()}},"Aready Have An OTP?"),a>0&&r.a.createElement(N.a,{style:{marginLeft:8},onClick:function(){return e.prev()}},"Send OTP AGAIN"))))}}]),t}(r.a.Component),De=Object(g.b)(null,{forgetpassword:function(e){return function(t,a,n){var r=n.axios;return console.log("INSIDE ACTION:::::",e,e.username),new r.post("/forgetpassword",{username:e.username}).then((function(e){return console.log("WWWWWW RESPONSE:::",e),e.data}))}},resetpassword:function(e){return function(t,a,n){return new n.axios.post("/resetpassword",e).then((function(e){return e.data}))}}})(Ne),Re=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={list:[],page:1,limit:6},a.onChange=function(e){console.log("PAGE CLICKED ::::",e);var t={page:e,limit:a.state.limit};a.props.appliedjobslist(t).then((function(e){console.log("$$$$$$$$$$$$",e),a.setState({total:e.metadata.count,list:e.results})}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={page:this.state.page,limit:this.state.limit};this.props.appliedjobslist(t).then((function(t){e.setState(Object(F.a)({list:t.results,total:t.metadata.count},"list",t.results))}))}},{key:"render",value:function(){var e=this.state.list;return e.length<1?r.a.createElement("h2",null,r.a.createElement("center",null,"You have not applied to any Job !!")):r.a.createElement(r.a.Fragment,null,e.map((function(e){return r.a.createElement("div",{className:"cards"},r.a.createElement(B.a,{title:e.job_title},e.job_description,r.a.createElement("br",null),"ID :",e.uuid))})),r.a.createElement(M.a,{onChange:this.onChange,total:this.state.total,pageSize:this.state.limit}))}}]),t}(n.Component),ke=Object(g.b)(null,{appliedjobslist:function(e){return function(t,a,n){return new n.axios.get("/applications",{params:e}).then((function(e){return e.data}))}}})(Re),Ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={initLoading:!1,loading:!1,data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.allCandidates;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(O,{text:"Logout",to:R})),r.a.createElement("div",{align:"left"},r.a.createElement(s.b,{to:"/candidate/jobs"},r.a.createElement("span",{className:"links"},r.a.createElement("u",null,"View Available Jobs")))),r.a.createElement("div",{className:"listCards"},r.a.createElement(ke,{allCandidates:e})))}}]),t}(r.a.Component),xe=Object(g.b)((function(e){return{candidateData:e}}))(Ie);function Pe(e){var t=function(e,t,a){L.a[e]({message:t,description:a})},a=function(a){function n(){var e,a;Object(c.a)(this,n);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(l)))).state={isAuthenticated:!0},a.handleAuth=function(){var e=a.props.history,n=a.props.userData.auth.userdetails.role;a.props.location.pathname.startsWith("/admin")&&"2"!=n?(console.log("ROle",a.props.location.pathname.startsWith("/admin")),e.push("/adminsignin"),console.log(a.props.location),t("error","Not authorized to Access this route"),a.state.isAuthenticated=!1):a.props.location.pathname.startsWith("/candidate")&&"0"!==n?(e.push("/signin"),t("error","Not authorized to Access this route"),a.state.isAuthenticated=!1):a.props.location.pathname.startsWith("/recruiter")&&"1"!==n&&(e.push("/signin"),t("error","Not authorized to Access this route"),a.state.isAuthenticated=!1)},a}return Object(d.a)(n,a),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.handleAuth()}},{key:"render",value:function(){return r.a.createElement("div",null,1==this.state.isAuthenticated?r.a.createElement(e,this.props):null)}}]),n}(r.a.Component);return Object(g.b)((function(e){return{userData:e}}),{})(a)}var Te=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||a.props.signin(t).then((function(e){console.log("#######ADMIN LOGIN####",e),"2"==e.role&&a.props.history.push("/admin")}))}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",null,r.a.createElement(O,{text:"Not An Admin?",to:"/signin"}),r.a.createElement(w.a,Object(F.a)({onSubmit:this.handleSubmit,className:"login-form"},"className","wrapperForm"),r.a.createElement("h2",null,r.a.createElement("span",{class:"adminh2"},"ADMIN")," SIGNIN WINDOW"),r.a.createElement(w.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(C.a,{prefix:r.a.createElement($.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(w.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(C.a,{prefix:r.a.createElement($.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(w.a.Item,null,r.a.createElement(N.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"))))}}]),t}(r.a.Component);Te=Object(g.b)((function(e){return{userdetails:e.auth.userdetails}}),{signin:E})(Te);var Fe=w.a.create({name:"normal_signin"})(Te),Le=function(){return r.a.createElement(s.a,null,r.a.createElement(i.b,{exact:!0,path:"/",component:q}),r.a.createElement(i.b,{path:"/signup",component:T}),r.a.createElement(i.b,{path:"/signin",component:q}),r.a.createElement(i.b,{path:"/dashboard",component:_e}),r.a.createElement(i.b,{exact:!0,path:"/candidate/jobs",component:Pe(V)}),r.a.createElement(i.b,{path:"/admin/candidates/",component:Pe(te)}),r.a.createElement(i.b,{path:"/admin/recruiters/",component:Pe(le)}),r.a.createElement(i.b,{path:"/admin/jobs",component:Pe(se)}),r.a.createElement(i.b,{exact:!0,path:"/admin",component:Pe(Y)}),r.a.createElement(i.b,{exact:!0,path:"/recruiter",component:Pe(ue)}),r.a.createElement(i.b,{exact:!0,path:"/recruiter/jobs",component:Pe(he)}),r.a.createElement(i.b,{path:"/recruiter/jobs/:jobId",component:Pe(ge)}),r.a.createElement(i.b,{path:"/forgetpassword",component:je}),r.a.createElement(i.b,{path:"/resetpassword",component:ye}),r.a.createElement(i.b,{path:"/resetpasswordsteps",component:De}),r.a.createElement(i.b,{path:"/candidate/jobs/applications",component:Pe(xe)}),r.a.createElement(i.b,{path:"/adminsignin",component:Fe}))},Je=a(146),Ue=a(190),qe=Je.default.store,Ge=Je.default.persistor;var _e=function(){return r.a.createElement(g.a,{store:qe},r.a.createElement(Ue.a,{loading:null,persistor:Ge},r.a.createElement(Le,null)))};a(369),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(370);o.a.render(r.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[196,1,2]]]);
//# sourceMappingURL=main.c51b1166.chunk.js.map