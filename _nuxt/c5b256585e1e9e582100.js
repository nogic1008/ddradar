(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{342:function(e,t,n){"use strict";n.r(t);var l=n(51),o=n(53),r=n(52),c=n(54),d=n(12),f=n(72),m=function(e,t,n,desc){var l,o=arguments.length,r=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(r=(o<3?l(r):o>3?l(t,n,r):l(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),t}(f.Vue);m([Object(f.Prop)()],v.prototype,"songs",void 0),m([Object(f.Prop)(Boolean)],v.prototype,"loading",void 0);var _=v=m([f.Component],v),w=n(31),component=Object(w.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-table",{attrs:{data:e.songs,striped:"",hoverable:"",loading:e.loading,focusable:"","mobile-cards":!1,paginated:"","per-page":"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("b-table-column",{attrs:{field:"series",label:"Series"}},[e._v("\n      "+e._s(t.row.series)+"\n    ")]),e._v(" "),n("b-table-column",{attrs:{field:"name",label:"Name"}},[n("nuxt-link",{attrs:{to:"/song/"+t.row.id}},[e._v("\n        "+e._s(t.row.name)+"\n      ")])],1),e._v(" "),n("b-table-column",{attrs:{field:"artist",label:"Artist"}},[e._v("\n      "+e._s(t.row.artist)+"\n    ")]),e._v(" "),null==t.row.minBPM?n("b-table-column",{attrs:{field:"bpm",label:"BPM"}},[e._v("\n      ???\n    ")]):t.row.minBPM==t.row.maxBPM?n("b-table-column",{attrs:{field:"bpm",label:"BPM"}},[e._v("\n      "+e._s(t.row.minBPM)+"\n    ")]):n("b-table-column",{attrs:{field:"bpm",label:"BPM"}},[e._v("\n      "+e._s(t.row.minBPM)+"-"+e._s(t.row.maxBPM)+"\n    ")])]}}])},[e._v(" "),n("template",{slot:"empty"},[n("section",{staticClass:"section"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[n("p",[e._v("Nothing here.")])])])])],2)}),[],!1,null,null,null);t.default=component.exports}}]);