(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(75)},48:function(e,t,n){},66:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(18),l=n.n(i),r=(n(48),n(12)),c=n(17),s=n(4),u=n(5),m=n(7),h=n(6),p=n(8),d=n(2),v=n.n(d),g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={message:"helloworld"},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("/api/helloworld").then(function(t){e.setState({message:t.data})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,this.state.message))}}]),t}(a.Component),f=(n(66),n(14)),y=n(88),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={newEvent:{name:"",organizationType:"",goalBased:""}},n.handleInputChange=function(e){var t=Object(f.a)({},n.state.newEvent);t[e.target.name]=e.target.value,n.setState({newEvent:t})},n.bttnClicked=function(e){v.a.post("/api/event",n.state.newEvent).then(function(e){console.log(e)})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.bttnClicked},o.a.createElement("input",{type:"text",name:"name",placeholder:"name",value:this.state.name,onChange:this.handleInputChange}),o.a.createElement("input",{type:"text",name:"goalBased",placeholder:"Whats your goal?",value:this.state.goalBased,onChange:this.handleInputChange}),o.a.createElement("input",{type:"text",name:"organizationType",placeholder:"type-of-organization",value:this.state.organizationType,onChange:this.handleInputChange}),o.a.createElement(y.a,{variant:"contained",color:"secondary",type:"submit"},"Submit")))}}]),t}(a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Community-U"},o.a.createElement("h1",null,"Community-U"),o.a.createElement("h3",null,'"Platform for Community Service"'))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={newDonation:{typeOfDonation:"",food:"",clothing:"",goods:""}},n.handleInputChange=function(e){var t=Object(f.a)({},n.state.newDonation);t[e.target.name]=e.target.value,n.setState({newDonation:t})},n.bttnClicked=function(e){v.a.post("/api/donation",n.state.newDonation).then(function(e){console.log(e)})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.bttnClicked},o.a.createElement("input",{type:"text",name:"typeOfDonation",placeholder:"type of Donation",value:this.state.typeOfDonation,onChange:this.handleInputChange}),o.a.createElement("input",{type:"text",name:"food",placeholder:"food type",value:this.state.food,onChange:this.handleInputChange}),o.a.createElement("input",{type:"text",name:"clothing",placeholder:"clothing",value:this.state.clothing,onChange:this.handleInputChange}),o.a.createElement("input",{type:"text",name:"goods",placeholder:"goods",value:this.state.goods,onChange:this.handleInputChange}),o.a.createElement(y.a,{variant:"contained",color:"secondary",type:"submit"},"Submit")))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={newVolunteers:{volunteerName:"",schoolName:"",organization:""}},n.handleInputChange=function(e){var t=Object(f.a)({},n.state.newVolunteers);t[e.target.name]=e.target.value,n.setState({newVolunteers:t})},n.bttnClicked=function(e){v.a.post("/api/volunteers",n.state.newVolunteers).then(function(e){console.log(e)})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.bttnClicked},o.a.createElement("input",{type:"text",name:"volunteerName",placeholder:"Volunteer's name",value:this.state.VolunteerName,onChange:this.handleInputChange}),o.a.createElement("input",{type:"text",name:"schoolName",placeholder:"School Name",value:this.state.schoolName,onChange:this.handleInputChange}),o.a.createElement("input",{type:"text",name:"organization",placeholder:"organization",value:this.state.organization,onChange:this.handleInputChange}),o.a.createElement(y.a,{variant:"contained",color:"secondary",type:"submit"},"Submit")))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={event:[],donation:[],volunteers:[]},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("/api/event").then(function(t){console.log(t.data),e.setState({event:t.data})}),v.a.get("/api/donation").then(function(t){console.log(t.data),e.setState({donation:t.data})}),v.a.get("/api/volunteers").then(function(t){console.log(t.data),e.setState({volunteers:t.data})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,null),o.a.createElement("h4",null," Community Events"),this.state.event.map(function(e){return o.a.createElement("div",null,o.a.createElement(r.b,{to:"/event/".concat(e._id)},e.name))}),o.a.createElement(E,null),this.state.donation.map(function(e){return o.a.createElement("div",null,o.a.createElement(r.b,{to:"/donation/".concat(e._id)},e.typeOfDonation))}),o.a.createElement(O,null),this.state.volunteers.map(function(e){return o.a.createElement("div",null,o.a.createElement(r.b,{to:"/volunteers/".concat(e._id)},e.volunteerName))}),o.a.createElement(C,null))}}]),t}(a.Component),D=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={singleEvent:{name:"",goalBased:"",organizationType:""},redirectHome:!1,isFormDisplayed:!1},n.deletedEvent=function(e){v.a.delete("/api/event/".concat(n.props.match.params.eventId)),n.setState({redirectHome:!0})},n.toggleEditForm=function(){n.setState(function(e,t){return{isFormDisplayed:!e.isFormDisplayed}})},n.handleChange=function(e){var t=Object(f.a)({},n.state.singleEvent);t[e.target.name]=e.target.value,n.setState({event:t})},n.updateEvent=function(e){e.preventDefault(),v.a.put("/api/event/ ".concat(n.props.match.params.id),{name:n.state.name,goalBased:n.state.goalBased,organizationType:n.state.organizationType}).then(function(e){n.setState({singleEvent:e.data,isFormDisplayed:!1})})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("/api/event/".concat(this.props.match.params.eventId)).then(function(t){e.setState({singleEvent:t.data})})}},{key:"render",value:function(){return this.state.redirectToHome?o.a.createElement(c.a,{to:"/"}):o.a.createElement("div",null,o.a.createElement("h1",null,this.state.singleEvent.name),o.a.createElement("h5",null,this.state.singleEvent.goalBased),o.a.createElement("h5",null,this.state.singleEvent.organizationType),o.a.createElement("h3",null,o.a.createElement(r.b,{to:"/"},"Return to All Community Events")),o.a.createElement(y.a,{variant:"contained",color:"secondary",type:"submit",value:"Delete",onClick:this.deletedEvent},"Delete"),o.a.createElement(y.a,{variant:"contained",color:"primary",type:"submit",value:"Update",onClick:this.updateEvent},"update"))}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={singleDonation:{typeOfDonation:"",food:"",clothing:"",goods:""},redirectHome:!1,isFormDisplayed:!1},n.deletedDonation=function(e){v.a.delete("/api/donation/".concat(n.props.match.params.donationId)),n.setState({redirectHome:!0})},n.toggleEditForm=function(){n.setState(function(e,t){return{isFormDisplayed:!e.isFormDisplayed}})},n.handleChange=function(e){var t=Object(f.a)({},n.state.singleDonation);t[e.target.name]=e.target.value,n.setState({donation:t})},n.updateDonation=function(e){e.prdonationDefault(),v.a.put("/api/donation/ ".concat(n.props.match.params.id),{name:n.state.name,goalBased:n.state.goalBased,organizationType:n.state.organizationType}).then(function(e){n.setState({singleDonation:e.data,isFormDisplayed:!1})})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("/api/donation/".concat(this.props.match.params.donationId)).then(function(t){e.setState({singleDonation:t.data})})}},{key:"render",value:function(){return this.state.redirectToHome?o.a.createElement(c.a,{to:"/"}):o.a.createElement("div",null,o.a.createElement("h1",null,this.state.singleDonation.name),o.a.createElement("h5",null,this.state.singleDonation.goalBased),o.a.createElement("h5",null,this.state.singleDonation.organizationType),o.a.createElement("h3",null,o.a.createElement(r.b,{to:"/"},"Return to All Community Donations")),o.a.createElement(y.a,{variant:"contained",color:"secondary",type:"submit",value:"Delete",onClick:this.deletedDonation},"Delete"),o.a.createElement(y.a,{variant:"contained",color:"primary",type:"submit",value:"Update",onClick:this.updateDonation},"update"))}}]),t}(a.Component);var S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(r.a,null,b,o.a.createElement(c.d,null,o.a.createElement(c.b,{exact:!0,path:"/",component:j}),o.a.createElement(c.b,{exact:!0,path:"/event/:eventId",component:D}),o.a.createElement(c.b,{exact:!0,path:"/donation/:donationId",component:w}),o.a.createElement(c.b,{exact:!0,path:"/helloworld",component:g}))))};l.a.render(o.a.createElement(S,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a2610c7a.chunk.js.map