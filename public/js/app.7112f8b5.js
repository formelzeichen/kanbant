(function(t){function e(e){for(var s,a,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],s=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var s={},n={app:0},i=[];function a(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=s,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(o,s,function(e){return t[e]}.bind(null,s));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var s=o("85ec"),n=o.n(s);n.a},"16e3":function(t,e,o){t.exports=o.p+"img/todo.b8e08cd1.svg"},2459:function(t,e,o){t.exports=o.p+"img/mobile-messages.61b74373.svg"},"28c1":function(t,e,o){t.exports=o.p+"img/empty.4eade343.svg"},"2adc":function(t,e,o){"use strict";var s=o("672a"),n=o.n(s);n.a},"3fa0":function(t,e,o){t.exports=o.p+"img/inprogress.c3c06936.svg"},4304:function(t,e,o){t.exports=o.p+"img/survey.d7983ee6.svg"},4325:function(t,e,o){t.exports=o.p+"img/review.244323d8.svg"},4555:function(t,e,o){var s={"./code-review.svg":"8729","./design-notes.svg":"ce6e","./done.svg":"7317","./empty.svg":"28c1","./inprogress.svg":"3fa0","./login.svg":"ce03","./mobile-messages.svg":"2459","./mobile-testing.svg":"5bfd","./programming.svg":"9c74","./report.svg":"bbee","./review.svg":"4325","./survey.svg":"4304","./todo.svg":"16e3","./usability-testing.svg":"6147"};function n(t){var e=i(t);return o(e)}function i(t){if(!o.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="4555"},5336:function(t,e,o){t.exports=o.p+"img/kanbant_logo.a6ce05c2.svg"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("0cdd");var s=o("2b0e"),n=o("5f5b");o("ab8b"),o("2dd8");s["default"].use(n["a"]);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],r={name:"App"},c=r,l=(o("034f"),o("2877")),u=Object(l["a"])(c,i,a,!1,null,null,null),d=u.exports,p=o("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"background-template h-100"},[s("b-container",{staticClass:"h-100"},[s("b-row",{staticClass:"h-100"},[s("b-col",{staticClass:"d-flex justify-content-center align-items-center"},[s("b-col",{staticClass:"col-12 col-lg-6 col-xl-4",staticStyle:{padding:"0"}},[s("b-card",{staticStyle:{height:"500px"}},[s("div",{staticClass:"logo p-3 text-center",staticStyle:{"overflow-y":"hidden"}},[s("img",{staticStyle:{height:"100px"},attrs:{src:o("5336")}})]),s("b-form",[s("b-form-group",{staticClass:"has-icon",attrs:{label:"Email address:"}},[s("span",{staticClass:"fa fa-envelope form-control-feedback"}),s("b-form-input",{attrs:{type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),s("b-form-group",{staticClass:"has-icon",attrs:{label:"Password:"}},[s("span",{staticClass:"fa fa-key form-control-feedback"}),s("b-form-input",{attrs:{type:"password",required:"",placeholder:"Enter password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),s("b-alert",{directives:[{name:"show",rawName:"v-show",value:t.isError,expression:"isError"}],staticStyle:{"font-size":"15px",padding:"10px"},attrs:{variant:"danger",show:"",fade:""}},[t._v(t._s(t.error_message))]),s("b-form-group",[s("b-button",{staticClass:"login-buttons",attrs:{type:"submit",variant:"success"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Login")]),s("b-button",{staticClass:"login-buttons",attrs:{type:"submit",variant:"primary"},on:{click:function(e){return e.preventDefault(),t.register(e)}}},[t._v("Register")])],1)],1)],1)],1),s("b-col",{staticClass:"d-none d-xl-block col-xl-8",staticStyle:{padding:"0"}},[s("b-card",{staticStyle:{"background-color":"#17a2b869",height:"500px"}},[s("img",{staticClass:"todo-img",attrs:{src:o("ce03")}})])],1)],1)],1)],1)],1)},f=[],h={data:function(){return{form:{email:"",password:""},isError:!1,error_message:""}},methods:{login:function(){var t=this;this.$http.post("/auth/local",this.form).then((function(e){t.isError=!1,t.error_message="",!0===e.data.status&&(t.$router.push({path:"/dashboard"}),t.$swal({position:"bottom-end",icon:"success",toast:!0,title:"You successfully logged in",showConfirmButton:!1,timer:1500}))})).catch((function(e){t.isError=!0,t.error_message=e.response.data.message}))},register:function(){var t=this;this.$http.post("/auth/register",this.form).then((function(e){!0===e.data.status?(t.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Project successfully created",showConfirmButton:!1,timer:1500}),t.login()):(t.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred creating the project",showConfirmButton:!1,timer:1500}),t.isError=!0,t.error_message=e.data.message)})).catch((function(e){t.isError=!0,t.error_message=e.response.data.message}))}}},g=h,b=(o("658a"),Object(l["a"])(g,m,f,!1,null,"56cd8da0",null)),_=b.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-100",style:t.getBackgroundCustomization},[s("Navbar",{attrs:{user_email:t.user_email}}),s("Sidebar",{attrs:{customization:t.customization}}),t.projects.options.length>0?[s("transition",{attrs:{name:t.customization.animations.selected}},[s("ProjectSelection",{attrs:{projects:t.projects}})],1),s("transition",{attrs:{name:t.customization.animations.selected}},[t.loaded?s("PerfectScrollbar",{staticClass:"scroll-area"},[s("b-container",{staticStyle:{"max-width":"none !important"}},[s("b-row",[s("div",{staticClass:"d-flex"},t._l(t.project_details.columns,(function(e,o){return s("b-col",{key:o,staticClass:"col kanban-widget"},[s("Column",{attrs:{customization:t.customization,column:e}})],1)})),1),s("span",{staticClass:"badge badge-info ml-2",staticStyle:{height:"fit-content","font-size":"20px","margin-top":"10px",cursor:"pointer"},on:{click:function(e){return t.createNewColumn()}}},[s("i",{staticClass:"fas fa-plus"})])])],1)],1):t._e()],1)]:[s("transition",{attrs:{name:t.customization.animations.selected}},[s("div",{staticClass:"text-center",staticStyle:{"margin-top":"5%"}},[s("b-img",{attrs:{src:o("28c1"),width:"500"}}),s("h3",{staticClass:"text-white",staticStyle:{"text-shadow":"black 0px 0px 10px"}},[t._v("Seems like you haven't got any projects")]),s("b-button",{staticClass:"mt-2",attrs:{variant:"success"},on:{click:t.createProject}},[t._v("Create Now")])],1)])],s("vue-simple-context-menu",{ref:"vueTaskContextMenu",attrs:{elementId:"taskMenu",options:t.options},on:{"option-clicked":t.taskOptionSelected}}),s("vue-simple-context-menu",{ref:"vueColumnContextMenu",attrs:{elementId:"columnMenu",options:t.options},on:{"option-clicked":t.columnOptionSelected}})],2)},k=[],w=(o("caad"),o("fb6a"),o("d3b7"),o("25f0"),o("2532"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-navbar",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.32) !important"},attrs:{toggleable:"lg",type:"dark"}},[s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-brand",{staticStyle:{width:"100%"}},[s("b-img",{attrs:{src:o("6bf6"),height:"35"}})],1),s("b-navbar-nav"),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("em",[t._v(t._s(t.user_email))])]},proxy:!0}])},[s("b-dropdown-item",{on:{click:function(e){return t.logout()}}},[t._v("Sign Out")])],1)],1)],1)],1)],1)}),C=[],y={props:["user_email"],methods:{logout:function(){var t=this;this.$http.get("/auth/logout").then((function(){t.$router.push("/login")})).catch((function(e){500===e.response.status&&t.$router.push("/login")}))}}},x=y,j=Object(l["a"])(x,w,C,!1,null,null,null),$=j.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-sidebar",{attrs:{id:"sidebar-1",title:"Customization","bg-variant":t.getSidebarBGVariant,"text-variant":t.getSidebarTextVariant,backdrop:"",shadow:"",right:""}},[o("div",{staticClass:"px-3 py-2"},[o("p",[t._v("Kanbant provides lots of customizations. You can customize the appearance of your dashboard.")]),o("hr"),o("b-form-group",{attrs:{label:"Theme Mode:"}},[o("b-form-radio-group",{attrs:{options:t.customization.theme.options},model:{value:t.customization.theme.selected,callback:function(e){t.$set(t.customization.theme,"selected",e)},expression:"customization.theme.selected"}})],1),o("b-form-group",{attrs:{label:"Hide Icons:"}},[o("b-form-radio-group",{attrs:{options:t.customization.icons.options},model:{value:t.customization.icons.selected,callback:function(e){t.$set(t.customization.icons,"selected",e)},expression:"customization.icons.selected"}})],1),o("b-form-group",{attrs:{label:"Animations:"}},[o("b-form-radio-group",{attrs:{options:t.customization.animations.options},model:{value:t.customization.animations.selected,callback:function(e){t.$set(t.customization.animations,"selected",e)},expression:"customization.animations.selected"}})],1),o("b-form-group",{attrs:{label:"Background:"}},[o("b-form-radio-group",{staticStyle:{display:"grid"},attrs:{options:t.customization.background.options},model:{value:t.customization.background.selected,callback:function(e){t.$set(t.customization.background,"selected",e)},expression:"customization.background.selected"}})],1)],1)])],1)},z=[],T={props:["customization"],computed:{getSidebarBGVariant:function(){return"Dark"===this.customization.theme.selected?"dark":"light"},getSidebarTextVariant:function(){return"Dark"===this.customization.theme.selected?"light":"dark"}}},E=T,P=Object(l["a"])(E,S,z,!1,null,null,null),B=P.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb-3 mt-2"},[t.isEditing?[o("b-form-input",{staticClass:"ml-4 mt-2 mr-2",staticStyle:{width:"auto",display:"inline-block"},attrs:{type:"text",tabindex:"0"},on:{focusout:function(e){return t.updateProjectTitle()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateProjectTitle()}},model:{value:t.projects.selected.title,callback:function(e){t.$set(t.projects.selected,"title",e)},expression:"projects.selected.title"}})]:t._e(),t.isEditing?t._e():o("multiselect",{staticClass:"ml-4 mt-2",staticStyle:{width:"auto",display:"inline-block"},attrs:{"track-by":"_id",label:"title",placeholder:"",selectLabel:"",options:t.projects.options,searchable:!0,"allow-empty":!1,"deselect-label":"Selected","hide-selected":!1},on:{select:t.projectSelected},scopedSlots:t._u([{key:"option",fn:function(e){return[o("div",{staticClass:"option__desc"},[o("i",{staticClass:"fas fa-tasks",staticStyle:{"margin-right":"10px"}}),o("span",{staticClass:"option__title"},[t._v(t._s(e.option.title))])])]}}],null,!1,2008285723),model:{value:t.projects.selected,callback:function(e){t.$set(t.projects,"selected",e)},expression:"projects.selected"}}),t.isEditing?t._e():o("span",{staticClass:"badge badge-success mr-2",staticStyle:{"font-size":"14px",cursor:"pointer"}},[o("i",{staticClass:"fas fa-plus p-1",on:{click:t.createProject}})]),t.isEditing?t._e():o("span",{staticClass:"badge badge-dark mr-2",staticStyle:{"font-size":"14px",cursor:"pointer"}},[o("i",{staticClass:"fas fa-pen p-1",on:{click:function(e){t.isEditing=!0}}})]),o("span",{staticClass:"badge badge-danger",staticStyle:{"font-size":"14px",cursor:"pointer"}},[o("i",{staticClass:"fas fa-trash p-1",on:{click:t.deleteProject}})]),o("i",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],staticClass:"fas fa-cog text-white float-right mr-3 mt-3",staticStyle:{"font-size":"25px"}})],2)},M=[],L=o("8e5f"),D=o.n(L),N=new s["default"],A=N,I={props:["projects"],data:function(){return{isEditing:!1}},components:{Multiselect:D.a},methods:{projectSelected:function(t){A.$emit("load-project-with-id",t._id)},createProject:function(){A.$emit("create-project")},updateProjectTitle:function(){var t=this;this.$http.put("/user/projects",{project_id:this.projects.selected._id,title:this.projects.selected.title}).then((function(e){!0===e.data.status?t.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Project title successfully updated",showConfirmButton:!1,timer:1500}):t.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred updating project title",showConfirmButton:!1,timer:1500}),A.$emit("load-project-with-id",t.projects.selected._id),t.isEditing=!1})).catch((function(e){401===e.response.status&&t.$router.push("/login")}))},deleteProject:function(){var t=this;this.$swal({title:"Are you sure?",text:"Do you really want to delete the project?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.value&&t.$http.delete("/user/projects",{params:{project_id:t.projects.selected._id}}).then((function(e){!0===e.data.status?(t.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Project successfully deleted",showConfirmButton:!1,timer:1500}),A.$emit("project-deleted")):t.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred deleting the project",showConfirmButton:!1,timer:1500}),A.$emit("load-project")})).catch((function(e){401===e.response.status&&t.$router.push("/login")}))}))}}},H=I,R=Object(l["a"])(H,O,M,!1,null,null,null),U=R.exports,F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-card",{staticClass:"mb-2 widget-img kanban-widget text-center p-2",class:t.getColumnCustomization,style:t.getColumnStyle,attrs:{tag:"article"}},[[[o("h4",{directives:[{name:"show",rawName:"v-show",value:t.edit_component.id_for_title!==t.column._id,expression:"edit_component.id_for_title !== column._id"}],staticClass:"card-title",on:{dblclick:function(e){t.edit_component.id_for_title=t.column._id}}},[t._v(t._s(t.column.title))]),t.edit_component.id_for_title===t.column._id?o("b-form-input",{staticStyle:{width:"auto",margin:"auto"},attrs:{type:"text",tabindex:"0"},on:{focusout:function(e){return t.updateColumnTitle(t.column._id,t.column.title)},keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.edit_component.id_for_title=null}},model:{value:t.column.title,callback:function(e){t.$set(t.column,"title",e)},expression:"column.title"}}):t._e()],[o("span",{staticStyle:{position:"absolute",top:"0px",right:"10px",cursor:"pointer"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.columnHandle(e,t.column)}}},[o("i",{staticClass:"fas fa-ellipsis-h"})])],[o("span",{staticClass:"mb-2",staticStyle:{display:"block"}},[t._v("("+t._s(t.column.tasks.length)+")")])],t.customization.icons.selected?t._e():[o("b-img",{staticClass:"mb-3",attrs:{src:t.getColumnIcon(t.column.icon)},on:{dblclick:function(e){return t.changeComponentIconStatus(t.column._id)}}}),t.edit_component.id_for_icon===t.column._id?o("div",[o("i",{staticClass:"fas fa-arrow-circle-left",staticStyle:{cursor:"pointer",position:"absolute",left:"5%",top:"150px","font-size":"25px"},on:{click:function(e){return t.updateColumnIcon("left",t.column.icon,t.column._id)}}}),o("i",{staticClass:"fas fa-arrow-circle-right",staticStyle:{cursor:"pointer",position:"absolute",right:"5%",top:"150px","font-size":"25px"},on:{click:function(e){return t.updateColumnIcon("right",t.column.icon,t.column._id)}}})]):t._e()]],[o("Task",{attrs:{tasks:t.column.tasks,column_id:t.column._id,customization:t.customization}})],[o("hr",{style:t.getHRStyle}),o("transition",{attrs:{name:"slide-fade"}},[t.new_task.column_id===t.column._id?o("div",{staticClass:"form",staticStyle:{"font-size":"smaller"}},[o("b-form-group",{staticClass:"text-left",attrs:{label:"What's must be done?","invalid-feedback":t.invalidTitleFeedback,state:t.taskTitleChecker}},[o("b-form-input",{attrs:{state:t.taskTitleChecker,trim:"",size:"sm"},model:{value:t.new_task.title,callback:function(e){t.$set(t.new_task,"title",e)},expression:"new_task.title"}})],1),o("b-form-group",{staticClass:"text-left",attrs:{label:"Expiration Date (optional)"}},[o("b-form-datepicker",{staticClass:"mb-2",attrs:{size:"sm"},model:{value:t.new_task.expireAt,callback:function(e){t.$set(t.new_task,"expireAt",e)},expression:"new_task.expireAt"}})],1),o("b-form-group",{staticClass:"text-left",attrs:{label:"Do you wanna label the task?"}},[o("b-form-radio-group",{attrs:{options:[{text:"Yes",value:!0},{text:"No",value:!1}]},model:{value:t.new_task.isLabeled,callback:function(e){t.$set(t.new_task,"isLabeled",e)},expression:"new_task.isLabeled"}})],1),t.new_task.isLabeled?[o("b-form-group",{staticClass:"text-left",attrs:{label:"Label","invalid-feedback":t.invalidLabelFeedback,state:t.taskLabelChecker}},[o("b-form-input",{attrs:{state:t.taskLabelChecker,trim:"",size:"sm"},model:{value:t.new_task.label,callback:function(e){t.$set(t.new_task,"label",e)},expression:"new_task.label"}})],1),o("b-form-group",{staticClass:"text-left",attrs:{label:"Label Type"}},[o("b-form-select",{attrs:{options:["danger","warning","primary","info","dark","success"],size:"sm"},model:{value:t.new_task.labelType,callback:function(e){t.$set(t.new_task,"labelType",e)},expression:"new_task.labelType"}})],1)]:t._e(),o("b-form-group",[t.taskTitleChecker?o("b-button",{staticClass:"float-left mt-3",staticStyle:{width:"48%"},attrs:{type:"submit",variant:"success"},on:{click:t.createNewTask}},[o("i",{staticClass:"fas fa-check mr-2"}),t._v("Save task ")]):t._e(),t.taskTitleChecker?o("b-button",{staticClass:"float-right mt-3",staticStyle:{width:"48%"},attrs:{type:"reset",variant:"danger"},on:{click:t.resetNewTask}},[o("i",{staticClass:"fas fa-times mr-2"}),t._v("Cancel ")]):t._e()],1)],2):t._e()]),o("i",{directives:[{name:"show",rawName:"v-show",value:t.new_task.column_id!==t.column._id,expression:"new_task.column_id !== column._id"}],staticClass:"fas fa-plus",staticStyle:{cursor:"pointer"},on:{click:function(e){t.resetNewTask(),t.new_task.column_id=t.column._id}}}),o("i",{directives:[{name:"show",rawName:"v-show",value:t.new_task.column_id===t.column._id&&!t.taskTitleChecker,expression:"new_task.column_id === column._id && !taskTitleChecker"}],staticClass:"fas fa-times",staticStyle:{cursor:"pointer"},on:{click:t.resetNewTask}})]],2)},V=[],Y=(o("c975"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("draggable",{staticClass:"list-group text-left mt-4",staticStyle:{cursor:"move","min-height":"100px"},attrs:{list:t.tasks,group:"people","ghost-class":"ghost",animation:200},on:{change:function(e){return t.changed(t.column_id,e)}}},t._l(t.tasks,(function(e){return o("b-card",{key:e._id,staticClass:"mb-2 text-left task",class:t.getTaskCustomization,style:t.getTaskHeight(e),on:{contextmenu:function(o){return o.preventDefault(),o.stopPropagation(),function(s){e["column_id"]=t.column_id,t.taskHandle(o,e)}()}}},[o("h4",{staticClass:"card-title"},[t._v(t._s(e.title))]),o("span",{staticStyle:{position:"absolute",top:"0px",cursor:"pointer"},on:{click:function(o){return o.preventDefault(),o.stopPropagation(),function(s){e["column_id"]=t.column_id,t.taskHandle(o,e)}()}}},[o("i",{staticClass:"fas fa-ellipsis-h"})]),e.expireAt?o("p",[o("i",{staticClass:"fa fa-clock"}),t._v(" "+t._s(t._f("moment")(e.expireAt,"MMMM D"))+" ")]):t._e(),e.labelType?o("span",{class:"badge badge-"+e.labelType,staticStyle:{"text-transform":"capitalize","font-size":"0.635rem"}},[o("i",{staticClass:"fas fa-circle"}),t._v(" "+t._s(e.label)+" ")]):t._e()])})),1)],1)}),q=[],G=o("310e"),J=o.n(G),K={props:["tasks","column_id","customization"],components:{draggable:J.a},computed:{getTaskCustomization:function(){return"Dark"===this.customization.theme.selected?"bg-dark text-white":""}},methods:{getTaskHeight:function(t){return t.date||t.label?"height: 90px":"height: 80px"},taskHandle:function(t,e){A.$emit("task-option-handled",{event:t,item:e})},changed:function(t,e){var o=this;if(e.added){var s=e.added.element._id;this.$http.post("/user/addToColumn",{task_id:s,column_id:t}).then((function(t){console.log(t.data)})).catch((function(t){401===t.response.status&&o.$router.push("/login")}))}else if(e.removed){var n=e.removed.element._id;this.$http.post("/user/removeFromColumn",{task_id:n,column_id:t}).then((function(t){console.log(t.data)})).catch((function(t){401===t.response.status&&o.$router.push("/login")}))}else console.log("Unknown process.")}}},W=K,Q=Object(l["a"])(W,Y,q,!1,null,null,null),X=Q.exports,Z={props:["customization","column"],components:{Task:X},data:function(){return{available_icons:["todo","inprogress","done","programming","mobile-testing","usability-testing","mobile-messages","review","code-review","survey","report","design-notes"],edit_component:{id_for_title:"",id_for_icon:null},new_task:{title:"",label:"",labelType:null,expireAt:null,column_id:null,isLabeled:!1}}},computed:{taskTitleChecker:function(){return this.new_task.title.length>=3},taskLabelChecker:function(){return this.new_task.label.length>=3},invalidTitleFeedback:function(){return this.new_task.title.length>3?"":this.new_task.title.length>0?"Enter at least 3 characters":"Please enter something"},invalidLabelFeedback:function(){return this.new_task.label.length>3?"":this.new_task.label.length>0?"Enter at least 3 characters":"Please enter something"},getColumnCustomization:function(){return"Dark"===this.customization.theme.selected?"text-white":""},getColumnStyle:function(){return"Dark"===this.customization.theme.selected?"background-color: #1e242b; border: 2px double #ffffff1c;":"background-color: rgb(241, 241, 241);"},getHRStyle:function(){return"Dark"===this.customization.theme.selected?"border-top: 1px solid rgba(255, 255, 255, 0.21)":""}},methods:{createNewTask:function(){var t=this,e=this.new_task,o=e.title,s=e.label,n=e.labelType,i=e.expireAt,a=e.column_id,r=e.isLabeled,c={title:o,column_id:a};null!==a&&(null!==i&&(i=new Date(i),c["expireAt"]=i),null!==s&&r&&(c["label"]=s,c["labelType"]=null!==n?n:"dark"),this.$http.post("/user/tasks",c).then((function(e){!0===e.data.status?t.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Task successfully created",showConfirmButton:!1,timer:1500}):t.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred creating the task",showConfirmButton:!1,timer:1500}),A.$emit("load-project"),t.resetNewTask()})).catch((function(e){401===e.response.status?t.$router.push("/login"):429===e.response.status&&t.$swal({position:"bottom-end",icon:"error",toast:!0,title:"".concat(e.response.data.message),showConfirmButton:!1,timer:2e3})})))},resetNewTask:function(){this.new_task={title:"",label:"",labelType:null,expireAt:null,column_id:null,isLabeled:!1}},columnHandle:function(t,e){A.$emit("column-option-handled",{event:t,item:e})},getColumnIcon:function(t){return o("4555")("./".concat(t,".svg"))},updateColumnTitle:function(t,e){var o=this;this.edit_component.id_for_title=null,this.$http.put("/user/columns",{column_id:t,title:e}).then((function(t){!0===t.data.status?o.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Column title updated",showConfirmButton:!1,timer:1500}):o.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred updating column title",showConfirmButton:!1,timer:1500})})).catch((function(t){401===t.response.status&&o.$router.push("/login")}))},changeComponentIconStatus:function(t){null===this.edit_component.id_for_icon?this.edit_component.id_for_icon=t:this.edit_component.id_for_icon=null},updateColumnIcon:function(t,e,o){var s=this,n=this.available_icons.indexOf(e),i="";i="right"===t?n<this.available_icons.length-1?this.available_icons[n+1]:this.available_icons[0]:0===n?this.available_icons[this.available_icons.length-1]:this.available_icons[n-1],this.$http.put("/user/columns",{column_id:o,icon:i}).then((function(t){!0===t.data.status?s.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Column icon successfully updated",showConfirmButton:!1,timer:1500}):s.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred updating column icon",showConfirmButton:!1,timer:1500}),A.$emit("load-project")})).catch((function(t){401===t.response.status&&s.$router.push("/login")}))}}},tt=Z,et=Object(l["a"])(tt,F,V,!1,null,null,null),ot=et.exports,st=o("a4a1"),nt={components:{Navbar:$,Sidebar:B,ProjectSelection:U,Column:ot,PerfectScrollbar:st["PerfectScrollbar"]},watch:{"customization.theme.selected":{handler:function(t){localStorage.theme=t},deep:!0},"customization.background.selected":{handler:function(t){localStorage.bg=t},deep:!0},"customization.icons.selected":{handler:function(t){localStorage.icons=t},deep:!0},"customization.animations.selected":{handler:function(t){localStorage.animations=t},deep:!0}},data:function(){return{projects:{selected:{},options:[]},loaded:!1,project_details:{title:"",description:"",columns:[]},options:[{name:"Clone",slug:"clone"},{name:"Delete",slug:"delete"}],customization:{theme:{selected:"Light",options:["Dark","Light"]},background:{selected:"Mountain",options:["Random","Solid Dark","Blueish","Valley","Mountain","City","Seaside","Northen Lights"]},icons:{selected:!1,options:[{text:"Yes",value:!0},{text:"No",value:!1}]},animations:{selected:"bounce",options:["fade","slide-fade","bounce"]}},user_email:"",available_icons:["todo","inprogress","done","programming","mobile-testing","usability-testing","mobile-messages","review","code-review","survey","report","design-notes"]}},computed:{getBackgroundCustomization:function(){switch(this.customization.background.selected){case"Solid Dark":return"background: linear-gradient(140deg,#151a1f 4%,rgb(43, 41, 41) 13%,#102225 98%);";case"Blueish":return"background: linear-gradient(180deg,rgb(50, 43, 167) 0%,rgb(69, 69, 175) 53%,rgba(0, 212, 255, 1) 100%);";case"Valley":return"background-image: url('https://i.picsum.photos/id/1015/0/0.jpg');background-size: cover !important;";case"Mountain":return"background-image: url('https://i.picsum.photos/id/866/0/0.jpg');background-size: cover !important;";case"City":return"background-image: url('https://i.picsum.photos/id/122/4147/2756.jpg');background-size: cover !important;";case"Seaside":return"background-image: url('https://i.picsum.photos/id/1019/0/0.jpg');background-size: cover !important;";case"Northen Lights":return"background-image: url('https://i.picsum.photos/id/1022/0/0.jpg');background-size: cover !important;";default:return"background-image: url('https://picsum.photos/0/0');background-size: cover !important;"}}},methods:{checkLocalStorage:function(){localStorage.theme&&this.customization.theme.options.includes(localStorage.theme)&&(this.customization.theme.selected=localStorage.theme),localStorage.bg&&this.customization.background.options.includes(localStorage.bg)&&(this.customization.background.selected=localStorage.bg),localStorage.animations&&this.customization.animations.options.includes(localStorage.animations)&&(this.customization.animations.selected=localStorage.animations),localStorage.icons&&("true"===localStorage.icons?this.customization.icons.selected=!0:this.customization.icons.selected=!1)},taskOptionSelected:function(t){var e=this;if("delete"===t.option.slug)this.$http.delete("/user/tasks",{params:{task_id:t.item._id,column_id:t.item.column_id}}).then((function(t){!0===t.data.status?e.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Task successfully deleted",showConfirmButton:!1,timer:1500}):e.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred deleting the task",showConfirmButton:!1,timer:1500}),e.loadProject(e.projects.selected._id)})).catch((function(t){401===t.response.status&&e.$router.push("/login")}));else if("clone"===t.option.slug){var o=t.item,s=o.title,n=o.expireAt,i=o.label,a=o.labelType,r=o.column_id;this.$http.post("/user/tasks",{title:s,expireAt:n,label:i,labelType:a,column_id:r}).then((function(t){!0===t.data.status?e.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Task successfully cloned",showConfirmButton:!1,timer:1500}):e.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred cloning the task",showConfirmButton:!1,timer:1500}),e.loadProject(e.projects.selected._id)})).catch((function(t){401===t.response.status?e.$router.push("/login"):429===t.response.status&&e.$swal({position:"bottom-end",icon:"error",toast:!0,title:"".concat(t.response.data.message),showConfirmButton:!1,timer:2e3})}))}},getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))},createNewColumn:function(){var t=this;this.$http.post("/user/columns",{project_id:this.projects.selected._id,icon:this.available_icons[this.getRandomInt(this.available_icons.length)],title:"Column "+Math.random().toString().slice(2,5)}).then((function(e){!0===e.data.status?t.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Column successfully created",showConfirmButton:!1,timer:1500}):t.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred creating the column",showConfirmButton:!1,timer:1500}),t.loadProject(t.projects.selected._id)})).catch((function(e){401===e.response.status?t.$router.push("/login"):429===e.response.status?t.$swal({position:"bottom-end",icon:"error",toast:!0,title:"".concat(e.response.data.message),showConfirmButton:!1,timer:2e3}):t.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred creating the column",showConfirmButton:!1,timer:500})}))},columnOptionSelected:function(t){var e=this;if("delete"===t.option.slug)console.log(t.item),this.$http.delete("/user/columns",{params:{column_id:t.item._id,project_id:this.projects.selected._id}}).then((function(t){!0===t.data.status?e.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Column successfully deleted",showConfirmButton:!1,timer:1500}):e.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred deleting the column",showConfirmButton:!1,timer:1500}),e.loadProject(e.projects.selected._id)})).catch((function(t){401===t.response.status&&e.$router.push("/login")}));else if("clone"===t.option.slug){var o=t.item,s=o.title,n=o.icon;this.$http.post("/user/columns",{title:s,icon:n,project_id:this.projects.selected._id}).then((function(t){!0===t.data.status?e.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Column successfully cloned",showConfirmButton:!1,timer:1500}):e.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred cloning the column",showConfirmButton:!1,timer:1500}),e.loadProject(e.projects.selected._id)})).catch((function(t){401===t.response.status?e.$router.push("/login"):429===t.response.status&&e.$swal({position:"bottom-end",icon:"error",toast:!0,title:"".concat(t.response.data.message),showConfirmButton:!1,timer:2e3})}))}},createProject:function(){var t=this;this.$swal({title:"Are you sure?",text:"Do you really want to create a new project?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create it!"}).then((function(e){e.value&&t.$http.post("/user/projects",{title:"Project "+Math.random().toString().slice(2,7)}).then((function(e){!0===e.data.status?t.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Project successfully created",showConfirmButton:!1,timer:1500}):t.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred creating the project",showConfirmButton:!1,timer:1500}),t.getProjects()})).catch((function(e){401===e.response.status?t.$router.push("/login"):429===e.response.status?t.$swal({position:"bottom-end",icon:"error",toast:!0,title:"".concat(e.response.data.message),showConfirmButton:!1,timer:2e3}):t.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred creating the project",showConfirmButton:!1,timer:2e3})}))}))},getProjects:function(){var t=this;this.$http.get("/user/projects").then((function(e){e.data.status&&!0===e.data.status?(t.projects.selected={},t.projects.options=e.data.results,t.projects.options.length>0&&(t.projects.selected=e.data.results[0],t.loadProject(e.data.results[0]._id))):console.log("error occurred fetching projects.")}))},loadProject:function(t){var e=this;this.$http.get("/user/projects",{params:{project_id:t}}).then((function(t){e.project_details=t.data.result,e.loaded=!0})).catch((function(t){401===t.response.status&&e.$router.push("/login"),404===t.response.status&&e.getProjects()}))},loadUserInformations:function(){var t=this;this.$http.get("/auth/status").then((function(e){!0===e.data.status&&(t.user_email=e.data.user)})).catch((function(e){401===e.response.status&&t.$router.push("/login"),404===e.response.status&&t.getProjects()}))}},created:function(){var t=this;this.checkLocalStorage(),this.loadUserInformations(),this.getProjects(),A.$on("task-option-handled",(function(e){try{t.$refs.vueTaskContextMenu.showMenu(e.event,e.item)}catch(o){console.log("Task context menu not initialized yet")}})),A.$on("column-option-handled",(function(e){try{t.$refs.vueColumnContextMenu.showMenu(e.event,e.item)}catch(o){console.log("Column context menu not initialized yet")}})),A.$on("project-deleted",(function(){t.getProjects()})),A.$on("load-project",(function(){t.loadProject(t.projects.selected._id)})),A.$on("load-project-with-id",(function(e){t.loadProject(e)})),A.$on("create-project",(function(){t.createProject()}))}},it=nt,at=(o("857d"),o("9aa7"),o("2adc"),Object(l["a"])(it,v,k,!1,null,null,null)),rt=at.exports,ct=o("bc3a"),lt=o.n(ct),ut=lt.a.create({withCredentials:!0,baseURL:"/api"}),dt=[{path:"/login",component:_},{path:"/dashboard",component:rt,beforeEnter:function(t,e,o){ut.get("/auth/status").then((function(t){!0===t.data.status?o():o("/login")})).catch((function(t){console.log("Error occurred",t.response),o()}))}},{path:"*",redirect:"/login"}],pt=o("2ead"),mt=o.n(pt),ft=(o("bd62"),o("2560")),ht=o("5886"),gt=lt.a.create({withCredentials:!0,baseURL:"/api"});s["default"].config.productionTip=!1,s["default"].use(p["a"]),s["default"].use(mt.a),s["default"].component("vue-simple-context-menu",ft["a"]),s["default"].use(ht["a"]),s["default"].prototype.$http=gt;var bt=new p["a"]({mode:"history",routes:dt});new s["default"]({router:bt,render:function(t){return t(d)}}).$mount("#app")},"5bfd":function(t,e,o){t.exports=o.p+"img/mobile-testing.0b51bda8.svg"},"5f67":function(t,e,o){},6147:function(t,e,o){t.exports=o.p+"img/usability-testing.535250f3.svg"},"658a":function(t,e,o){"use strict";var s=o("5f67"),n=o.n(s);n.a},"672a":function(t,e,o){},"6bf6":function(t,e,o){t.exports=o.p+"img/kanbant_logo_nav.e97578da.svg"},7317:function(t,e,o){t.exports=o.p+"img/done.23515a7d.svg"},"85ec":function(t,e,o){},8729:function(t,e,o){t.exports=o.p+"img/code-review.44e1babf.svg"},"9c74":function(t,e,o){t.exports=o.p+"img/programming.1e8ef79d.svg"},bbee:function(t,e,o){t.exports=o.p+"img/report.f83d90db.svg"},ce03:function(t,e,o){t.exports=o.p+"img/login.b5b65709.svg"},ce6e:function(t,e,o){t.exports=o.p+"img/design-notes.56c5d09d.svg"}});
//# sourceMappingURL=app.7112f8b5.js.map