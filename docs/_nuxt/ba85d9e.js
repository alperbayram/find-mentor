(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{283:function(e,t,n){"use strict";n.r(t);var r=n(39),c=(n(49),n(20)),o={asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,o,l,d,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,c=e.params,o=e.error,t.next=3,n("mentees").where({slug:{$eq:c.slug}}).fetch();case 3:if(l=t.sent,d=Object(r.a)(l,1),_=d[0]){t.next=8;break}return t.abrupt("return",o({statusCode:404,message:"Not found"}));case 8:return t.abrupt("return",{doc:_});case 9:case"end":return t.stop()}}),t)})))()}},l=n(62),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("ul",[n("li",[e._v(e._s(e.doc.name))]),e._v(" "),e.doc.twitter_handle.length?n("li",[n("a",{attrs:{href:e.doc.twitter_handle}},[e._v("Twitter")])]):e._e(),e._v(" "),e.doc.github.length?n("li",[n("a",{attrs:{href:e.doc.github}},[e._v("Github")])]):e._e(),e._v(" "),e.doc.linkedin.length?n("li",[n("a",{attrs:{href:e.doc.linkedin}},[e._v("Linkedin")])]):e._e(),e._v(" "),e.doc.interests.length?n("li",[e._v("\n      Interests: "+e._s(e.doc.interests)+"\n    ")]):e._e(),e._v(" "),e.doc.goals.length?n("li",[e._v("\n      Goals: "+e._s(e.doc.goals)+"\n    ")]):e._e()])])}),[],!1,null,null,null);t.default=component.exports}}]);