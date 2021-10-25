let content = document.querySelector('article');
import {Markdown} from '../../assets/js/until';
// text.replace(/(#+\s*)|\S+/g, function () {

// })
let md = new Markdown({
    el: document.querySelector('article')
});
let res = md.parse();
console.log(res)
content.innerHTML = res;
//输出html
//作业二：
var deptData = [{
        deptName: '某某公司',
        type: 2
    },
    {
        deptName: '子公司',
        type: 4
    },
    {
        deptName: '子子部门',
        type: 5
    }
]
var a = '2->4，5';
// var res = format() // 某某公司->子公司，子子部门
function format(){
    return a.replace(/\d+/g,function(item){
        //filter 在有{}的情况下需要return 没有{}的情况下不需要return;
        let res = deptData.filter(data=>{
            return data.type == item;
        })
       return res[0].deptName
    })
}
let result = format();
console.log(result)
//作业三：
var text = '{{ username }}';
// username是一个变量  用正则匹配到 username;
var a = /(?<=\{\{\s*)\S+(?=\s*\}\})/.exec(text)[0];
console.log(a)
