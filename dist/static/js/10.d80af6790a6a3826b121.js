webpackJsonp([10,20],{10:function(t,s,a){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var e=a(4),r=n(e),h=a(2),i=n(h);s["default"]={components:{zCarrousel:r["default"],zTable:i["default"]}}},243:function(t,s,a){var n,e;n=a(10);var r=a(283);e=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(e=n=n["default"]),"function"==typeof e&&(e=e.options),e.render=r.render,e.staticRenderFns=r.staticRenderFns,t.exports=n},283:function(t,s){t.exports={render:function(){var t=this;return t._h("section",[[t._m(0)," ",t._h("p",[t._h("z-carrousel",{attrs:{width:350,height:350,autoplay:!0,images:[{src:"static/1.JPG"},{src:"static/2.JPG",href:"http://www.blog.zhaoyuxiang.cn"},{src:"static/3.JPG",href:"https://github.com/Clark-Zhao"}]}})])],t._h("p")," ",t._h("p",["兼容PC端和移动端。"])," ",t._m(1)," ",[t._h("div",{staticClass:"introduce-block"},[t._h("z-table",{attrs:{ths:["参数","类型","必填","默认值","说明"],trs:[["width","Number","是","-","轮播图宽度"],["height","Number","是","-","轮播图高度"],["images","Array","是","-","需要轮播的图片组(src: 图片路径, href: 超链接)"],["delay","Number","否","3000","每张图片展示的时长"],["isShowIndex","Boolean","否","true","显示图片的序号"],["type","String","否","next","轮播的方向(pre, next)"],["autoplay","Boolean","否","false","是否开启轮播"]]}})])]])},staticRenderFns:[function(){var t=this;return t._h("h2",[t._h("a",{attrs:{href:"#carrousel"}},["Carrousel 轮播图"])])},function(){var t=this;return t._h("pre",[t._h("code",{staticClass:"language-html"},[t._h("span",{staticClass:"hljs-tag"},["<",t._h("span",{staticClass:"hljs-name"},["z-carrousel"]),"\n",t._h("span",{staticClass:"hljs-attr"},[":width"]),"=",t._h("span",{staticClass:"hljs-string"},['"350"']),"\n",t._h("span",{staticClass:"hljs-attr"},[":height"]),"=",t._h("span",{staticClass:"hljs-string"},['"350"']),"\n",t._h("span",{staticClass:"hljs-attr"},[":autoplay"]),"=",t._h("span",{staticClass:"hljs-string"},['"true"']),"\n",t._h("span",{staticClass:"hljs-attr"},[":images"]),"=",t._h("span",{staticClass:"hljs-string"},["\"[\n  {\n    src: 'static/1.JPG',\n    href: 'http://www.zhaoyuxiang.cn'\n  },\n  {\n    src: 'static/2.JPG',\n    href: 'http://www.blog.zhaoyuxiang.cn'\n  },\n  {\n    src: 'static/3.JPG',\n    href: 'https://github.com/Clark-Zhao'\n  }\n]\""]),">"]),t._h("span",{staticClass:"hljs-tag"},["</",t._h("span",{staticClass:"hljs-name"},["z-carrousel"]),">"]),"\n"])])}]}},319:function(t,s,a){t.exports=a(243)}});