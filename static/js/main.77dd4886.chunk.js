(this["webpackJsonpvideos-app"]=this["webpackJsonpvideos-app"]||[]).push([[0],{44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(2),s=i.n(n),c=i(17),a=i.n(c),r=i(8),o=i.n(r),d=i(18),u=i(3),l=i(4),j=i(6),m=i(5),v=i(0),b=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(u.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(l.a)(i,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"ui segment searchbar",children:Object(v.jsx)("form",{className:"ui form",onSubmit:this.onFormSubmit,children:Object(v.jsxs)("div",{className:"feild",children:[Object(v.jsx)("label",{children:"Search Videos"}),Object(v.jsx)("input",{type:"text",value:this.state.term,onChange:this.onInputChange})]})})})}}]),i}(s.a.Component),h=i(19),p=i.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:10,key:"AIzaSyCDyeU39O-BMBdjcJwq7vpXSMHFNrNa10Q",type:"video"}}),O=(i(44),function(e){return Object(v.jsxs)("div",{onClick:function(){return e.onVideoSelect(e.video)},className:" video-Item item",children:[Object(v.jsx)("img",{className:"ui image",src:e.video.snippet.thumbnails.medium.url}),Object(v.jsx)("div",{className:"content",children:Object(v.jsx)("div",{className:"header",children:e.video.snippet.title})})]})}),x=function(e){var t=e.videos.map((function(t){return Object(v.jsx)(O,{onVideoSelect:e.onVideoSelect,video:t},t.id.videoId)}));return Object(v.jsx)("div",{className:"ui relaxed divided list",children:t})},f=function(e){if(!e.video)return Object(v.jsx)("div",{children:"Loading!!"});var t="https://www.youtube.com/embed/".concat(e.video.id.videoId);return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"ui embed",children:Object(v.jsx)("iframe",{src:t})}),Object(v.jsxs)("div",{className:"ui segment",children:[Object(v.jsx)("h4",{className:"ui header",children:e.video.snippet.title}),Object(v.jsx)("p",{children:e.video.snippet.description})]})]})},S=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(u.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(d.a)(o.a.mark((function t(i){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/search",{params:{q:i}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.onTermSubmit("DragonBallz")}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"ui container",children:[Object(v.jsx)(b,{onFormSubmit:this.onTermSubmit}),Object(v.jsx)("div",{className:"ui grid",children:Object(v.jsxs)("div",{className:"ui row",children:[Object(v.jsx)("div",{className:"eleven wide column",children:Object(v.jsx)(f,{video:this.state.selectedVideo})}),Object(v.jsx)("div",{className:"five wide column",children:Object(v.jsx)(x,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})})]})})]})}}]),i}(s.a.Component);a.a.render(Object(v.jsx)(S,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.77dd4886.chunk.js.map