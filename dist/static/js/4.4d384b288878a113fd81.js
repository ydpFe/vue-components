webpackJsonp([4,20],{16:function(s,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={data:function(){return{testSingle:"单选框"}}}},255:function(s,a,t){var n,l;n=t(16);var e=t(300);l=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(l=n=n["default"]),"function"==typeof l&&(l=l.options),l.render=e.render,l.staticRenderFns=e.staticRenderFns,s.exports=n},300:function(s,a){s.exports={render:function(){var s=this;return s._h("section",[s._h("h2",["单选框（实验功能，谨慎使用）"])," ",s._h("h3",["基础单选框"])," ",s._h("h4",["默认未选中"])," ",[s._h("z-radio",{attrs:{label:"单选框"}})]," ",s._m(0)," ",s._h("h4",["默认选中"])," ",[s._h("z-radio",{directives:[{name:"model",rawName:"v-model",value:s.testSingle,expression:"testSingle"}],attrs:{label:"单选框"},domProps:{value:s.testSingle},on:{input:function(a){s.testSingle=a}}})]," ",s._m(1)," ",s._h("h3",["禁用单选框"])," ",s._h("h4",["默认未选中"])," ",[s._h("z-radio",{attrs:{label:"单选框",disabled:""}})]," ",s._m(2)," ",s._h("h4",["默认选中"])," ",[s._h("z-radio",{directives:[{name:"model",rawName:"v-model",value:s.testSingle,expression:"testSingle"}],attrs:{label:"单选框",disabled:""},domProps:{value:s.testSingle},on:{input:function(a){s.testSingle=a}}})]," ",s._m(3)," ",s._m(4)," ",s._h("h3",["API"])," ",s._h("p",[s._h("z-table",{attrs:{ths:["参数","类型","必填","默认值","说明"],trs:[["label","String, Number","是","-","单选框对应的值"],["value","String, Number","否","-","传给单选框的值"],["disabled","Boolean","否","false","是否禁用单选框"],["name","String","否","-","单选框的name"]]}})])])},staticRenderFns:[function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-html"},[s._h("span",{staticClass:"hljs-tag"},["<",s._h("span",{staticClass:"hljs-name"},["z-radio"])," ",s._h("span",{staticClass:"hljs-attr"},["label"]),"=",s._h("span",{staticClass:"hljs-string"},['"单选框"']),">"]),s._h("span",{staticClass:"hljs-tag"},["</",s._h("span",{staticClass:"hljs-name"},["z-radio"]),">"]),"\n"])])},function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-html"},[s._h("span",{staticClass:"hljs-tag"},["<",s._h("span",{staticClass:"hljs-name"},["z-radio"])," ",s._h("span",{staticClass:"hljs-attr"},["v-model"]),"=",s._h("span",{staticClass:"hljs-string"},['"testSingle"'])," ",s._h("span",{staticClass:"hljs-attr"},["label"]),"=",s._h("span",{staticClass:"hljs-string"},['"单选框"']),">"]),s._h("span",{staticClass:"hljs-tag"},["</",s._h("span",{staticClass:"hljs-name"},["z-radio"]),">"]),"\n"])])},function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-html"},[s._h("span",{staticClass:"hljs-tag"},["<",s._h("span",{staticClass:"hljs-name"},["z-radio"])," ",s._h("span",{staticClass:"hljs-attr"},["label"]),"=",s._h("span",{staticClass:"hljs-string"},['"单选框"'])," ",s._h("span",{staticClass:"hljs-attr"},["disabled"]),">"]),s._h("span",{staticClass:"hljs-tag"},["</",s._h("span",{staticClass:"hljs-name"},["z-radio"]),">"]),"\n"])])},function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-html"},[s._h("span",{staticClass:"hljs-tag"},["<",s._h("span",{staticClass:"hljs-name"},["z-radio"])," ",s._h("span",{staticClass:"hljs-attr"},["v-model"]),"=",s._h("span",{staticClass:"hljs-string"},['"testSingle"'])," ",s._h("span",{staticClass:"hljs-attr"},["label"]),"=",s._h("span",{staticClass:"hljs-string"},['"单选框"'])," ",s._h("span",{staticClass:"hljs-attr"},["disabled"]),">"]),s._h("span",{staticClass:"hljs-tag"},["</",s._h("span",{staticClass:"hljs-name"},["z-radio"]),">"]),"\n"])])},function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-js"},[s._h("span",{staticClass:"hljs-keyword"},["export"])," ",s._h("span",{staticClass:"hljs-keyword"},["default"])," {\n  data() {\n    ",s._h("span",{staticClass:"hljs-keyword"},["return"])," {\n      ",s._h("span",{staticClass:"hljs-attr"},["testSingle"]),": ",s._h("span",{staticClass:"hljs-string"},["'单选框'"]),",\n    };\n  },\n};\n"])])}]}},331:function(s,a,t){s.exports=t(255)}});