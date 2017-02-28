webpackJsonp([6,20],{14:function(s,t,a){"use strict";function n(s){return s&&s.__esModule?s:{"default":s}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(6),e=n(i),l=a(2),h=n(l);t["default"]={components:{zPagination:e["default"],zTable:h["default"]},methods:{getPage:function(s){console.log("当前第"+s+"页")}}}},253:function(s,t,a){var n,i;n=a(14);var e=a(309);i=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(i=n=n["default"]),"function"==typeof i&&(i=i.options),i.render=e.render,i.staticRenderFns=e.staticRenderFns,s.exports=n},309:function(s,t){s.exports={render:function(){var s=this;return s._h("section",[[s._m(0)," ",s._h("div",{staticClass:"introduce-block"},[s._h("z-pagination",{attrs:{total:11,"page-size":1}})])]," ",s._m(1)," ",[s._h("div",{staticClass:"introduce-block"},[s._h("z-pagination",{attrs:{total:280,page:14,"is-jumper":!0},on:{"current-page":s.getPage}})])]," ",s._m(2)," ",s._m(3)," ",s._m(4)," ",[s._h("div",{staticClass:"introduce-block"},[s._h("z-pagination",{attrs:{total:29,"page-size":4,page:8}})])]," ",s._m(5)," ",s._m(6)," ",s._h("h3",["API"])," ",[s._h("div",{staticClass:"introduce-block"},[s._h("z-table",{attrs:{ths:["参数","类型","必填","默认值","说明"],trs:[["total","Number","是","-","总条目数"],["pageSize","Number","否","10","每页显示的条目数"],["page","Number","否","1","初始化直接前往某一页"],["isJumper","Boolean","否","false","是否开启页数输入跳转(按回车键前往)"]]}})])]," ",s._h("h3",["EVENT"])," ",[s._h("z-table",{attrs:{ths:["事件名称","说明","回调参数"],trs:[["current-page","当前页码发生改变时的回调函数","新的页码"]]}})]])},staticRenderFns:[function(){var s=this;return s._h("h2",[s._h("a",{attrs:{href:"#pagination"}},["Pagination 分页器"])])},function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-html"},[s._h("span",{staticClass:"hljs-tag"},["<",s._h("span",{staticClass:"hljs-name"},["z-pagination"]),"\n",s._h("span",{staticClass:"hljs-attr"},[":total"]),"=",s._h("span",{staticClass:"hljs-string"},['"11"']),"\n",s._h("span",{staticClass:"hljs-attr"},[":page-size"]),"=",s._h("span",{staticClass:"hljs-string"},['"1"']),"\n>"]),s._h("span",{staticClass:"hljs-tag"},["</",s._h("span",{staticClass:"hljs-name"},["z-pagination"]),">"]),"\n"])])},function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-html"},[s._h("span",{staticClass:"hljs-tag"},["<",s._h("span",{staticClass:"hljs-name"},["z-pagination"]),"\n",s._h("span",{staticClass:"hljs-attr"},[":total"]),"=",s._h("span",{staticClass:"hljs-string"},['"280"']),"\n",s._h("span",{staticClass:"hljs-attr"},[":page"]),"=",s._h("span",{staticClass:"hljs-string"},['"14"']),"\n",s._h("span",{staticClass:"hljs-attr"},[":is-jumper"]),"=",s._h("span",{staticClass:"hljs-string"},['"true"']),"\n",s._h("span",{staticClass:"hljs-attr"},["@current-page"]),"=",s._h("span",{staticClass:"hljs-string"},['"getPage"']),"\n>"]),s._h("span",{staticClass:"hljs-tag"},["</",s._h("span",{staticClass:"hljs-name"},["z-pagination"]),">"]),"\n"])])},function(){var s=this;return s._h("p",["当页数发生改变时，分页器会把新的页码传递出来，父组件可以通过",s._h("code",["@current-page"]),"来接收。"])},function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-js"},["methods: {\n  ",s._h("span",{staticClass:"hljs-attr"},["getPage"]),": ",s._h("span",{staticClass:"hljs-function"},[s._h("span",{staticClass:"hljs-keyword"},["function"]),"(",s._h("span",{staticClass:"hljs-params"},["val"]),") "]),"{\n    ",s._h("span",{staticClass:"hljs-built_in"},["console"]),".log(",s._h("span",{staticClass:"hljs-string"},['"当前第"'])," + val + ",s._h("span",{staticClass:"hljs-string"},['"页"']),");\n  }\n}\n"])])},function(){var s=this;return s._h("p",["注: 在微信浏览器中使用勿忘加上",s._h("code",['<meta name="format-detection" content="telephone=no">']),"，不然遇到连续的数字会愚蠢的提示你要不要打电话。"])},function(){var s=this;return s._h("pre",[s._h("code",{staticClass:"language-html"},[s._h("span",{staticClass:"hljs-tag"},["<",s._h("span",{staticClass:"hljs-name"},["z-pagination"]),"\n",s._h("span",{staticClass:"hljs-attr"},[":total"]),"=",s._h("span",{staticClass:"hljs-string"},['"29"']),"\n",s._h("span",{staticClass:"hljs-attr"},[":page-size"]),"=",s._h("span",{staticClass:"hljs-string"},['"4"']),"\n",s._h("span",{staticClass:"hljs-attr"},[":page"]),"=",s._h("span",{staticClass:"hljs-string"},['"8"']),"\n>"]),s._h("span",{staticClass:"hljs-tag"},["</",s._h("span",{staticClass:"hljs-name"},["z-pagination"]),">"]),"\n"])])}]}},329:function(s,t,a){s.exports=a(253)}});