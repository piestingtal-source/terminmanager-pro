!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}({4:function(e,t,n){"use strict";!function(){tinymce.PluginManager.add("appointments_shortcodes",function(e){function t(t){var o,r=[];for(var i in t.defaults)(o=n(i,t.defaults[i]))&&r.push(o);return{text:t.name,onclick:function(){e.windowManager.open({title:t.name,body:r,onsubmit:a(t)})}}}function n(e,t){var n={};switch(t.type){case"text":n={type:"textbox",name:e,label:t.name,value:t.value};break;case"datepicker":n={type:"textbox",name:e,label:t.name,value:t.value,onclick:function(){var e=this._id,t=jQuery("#"+e);if(i.indexOf(e)<0){if(i.push(e),!t.length||void 0===t.datepicker)return;t.datepicker(),t.datepicker("option","dateFormat","yy-mm-dd"),t.datepicker("option","firstDay",AppointmentsDateSettings.weekStart)}"function"==typeof t.datepicker&&t.datepicker("show")}};break;case"select":n={type:"listbox",name:e,label:t.name,values:t.options};break;case"checkbox":n={type:"checkbox",name:e,label:t.name,value:1},t.value&&(n.checked=!0)}return t.help&&(n.tooltip=t.help),n}function a(t){return function(n){var a,o="";for(var r in t.defaults)void 0!==n.data[r]&&t.defaults[r].value!=n.data[r]&&(a=n.data[r],"checkbox"===t.defaults[r].type&&(a=a?1:0),o+=" "+r+'="'+a+'"');e.insertContent("["+t.shortcode+o+"]")}}var o,r,i=[],c=tinymce.activeEditor,u=[];r=c.getLang("appointments_shortcodes.shortcodes");for(var s in r)o=r[s],u.push(function(e){return t(e)}(o));e.addButton("appointments_shortcodes",{text:c.getLang("appointments_shortcodes.label"),type:"menubutton",menu:u})})}()}});
//# sourceMappingURL=editor-shortcodes.js.map