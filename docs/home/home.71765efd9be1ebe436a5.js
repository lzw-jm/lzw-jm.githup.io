(()=>{"use strict";(()=>{class e{static TITLE_REG=/(#+)\s+([^\n]+)/;constructor(e){this.text=e.text,console.log(this.text)}parse(){return this.text.replace(/.+/g,(t=>e.isTitle(t)?this.parseTitle(t):this.parseParagraph(t)))}parseParagraph(e){return e.trim().length?`<p>${e.trim()}</p>`:""}parseTitle(t){return t.replace(e.TITLE_REG,(function(e){let t=RegExp.$1.length>6?6:RegExp.$1.length;return`<h${t}>${RegExp.$2}</h${t}>`}))}static isTitle(t){return e.TITLE_REG.test(t)}}let t=document.querySelector("article"),r=new e({el:document.querySelector("article")}).parse();t.innerHTML=r;var a=[{deptName:"某某公司",type:2},{deptName:"子公司",type:4},{deptName:"子子部门",type:5}];"2->4，5".replace(/\d+/g,(function(e){return a.filter((t=>t.type==e))[0].deptName})),/(?<=\{\{\s*)\S+(?=\s*\}\})/.exec("{{ username }}")[0]})()})();