(()=>{"use strict";(()=>{let e=document.querySelector("article"),t=new class{constructor(e){this.el=e.el,this.content=e.el.textContent}parse(){return this.parseHtml(this.content)}parseHtml(e){let t=!1,r=e.replace(/(#+)\s+([^\n]+)/,(function(e){if(t=!0,RegExp.$1.length){let e=RegExp.$1.length>6?6:RegExp.$1.length;return`<h${e}>${RegExp.$2}</h${e}>`}return`<p>${RegExp.$2}</p>`}));return t&&(r=this.parseHtml(r)),r}}({el:document.querySelector("article")}),r=t.parse();e.innerHTML=r;var n=[{deptName:"某某公司",type:2},{deptName:"子公司",type:4},{deptName:"子子部门",type:5}];"2->4，5".replace(/\d+/g,(function(e){return n.filter((t=>t.type==e))[0].deptName})),/(?<=\{\{\s*)\S+(?=\s*\}\})/.exec("{{ username }}")[0]})()})();