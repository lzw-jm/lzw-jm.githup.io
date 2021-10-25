export default class Webpack {
    constructor(hello) {
        console.log(typeof hello.entry)
        if (typeof hello.entry !== "object") {
            //解构的写法
            let {
                entry,
                output
            } = hello
            let {
                filename,
                path
            } = output
            let [before, after] = filename.split('/')
            console.log(`将${entry}中的代码打包到${path}/${before}/文件夹中,文件名称叫${after}`)
            // this.text = hello.entry;
            // this.subbefore = hello.output.filename.split('/')[1];
            // this.path = hello.output.path;
            // this.subafter = hello.output.filename.split('/')[2];
            // console.log('将' + this.text + '中的代码打包到'
            //     + this.path + '/' + this.subbefore + '文件夹中' + ','
            //     + '文件名称叫' + this.subafter)
        } else {
            // 解构的写法
            let {
                entry,
                output
            } = hello;
            let {
                filename,
                path
            } = output;
            let [file, dir, num] = filename.split('.');
            for (const key in entry) {
                file = entry[key];
                dir = key;
                let content = parseInt(Math.random() * 899999999999 + 100000000000)
                console.log(`将${file}中的代码打包到/${path}/${dir}/文件夹中，文件名称叫${dir}.${content}.${num}`)
            }
            // this.name = hello.output.filename.split('.')[0];
            // this.content = hello.output.filename.split('.')[1];
            // this.path = hello.output.path;
            // this.js = hello.output.filename.split('.')[2];
            // for (const key in hello.entry) {
            //     let content = parseInt(Math.random() * 899999999999 + 100000000000);
            //     this.name = hello.entry[key]
            //     this.index = key
            //     console.log(`将${this.name}中的代码打包到${this.path}/${this.index}文件夹中，文件名称叫${this.index}.${content}.${this.js}`)
            // }
        }

    }
}
export class Url {
    constructor(props) {
        this.content = props;
        this.obj = {};
        this.searchParams = this.content.split('?')[1];
        this.params = this.getParam();
    }
    getParam() {
        this.searchParams.split('&').forEach(param => {
            param = param.split('=');
            this.obj[param[0]] = param[1];
        })
        return this.obj
    }
    get(pro) {
        if (!String) return '参数传入错误'
        return this.params[pro];
    }
    parse() {
        let arr = [];
        for (const key in this.content) {
            arr.push(key + '=' + this.content[key]);
        }
        return arr.join('&');
    }

}
// 把html里面的#转换成h标签
// export class Markdown {
//     constructor(props) {
//         this.el = props.el;
//         //innerText拿到的文本没有换行
//         this.content = props.el.textContent;
//     }
//     parse() {
//         return this.parseHtml(this.content);
//     }
//     parseHtml(text) {
//         let flag = false;
//         let reg = /(#+)\s+([^\n]+)/;
//         //只拿带#号的
//         let res = text.replace(reg, function (item) {
//         //每次都拿一行出来,次改之后#键不在就会把后面有#的取出来去修改
//                 flag = true;
//                 if (RegExp.$1.length) {
//                     let n = RegExp.$1.length > 6 ? 6 : RegExp.$1.length;
//                     let content = RegExp.$2;
//                     return `<h${n}>${content}</h${n}>`;
//                 } else {
//                     let content = RegExp.$2;
//                     return `<p>${content}</p>`;
//                 }
//         })
//         if (flag) {
//             res = this.parseHtml(res);
//         }
//         return res;
//     }
// }

// //磊哥
export class Markdown {
    static TITLE_REG = /(#+)\s+([^\n]+)/;
    constructor(props) {
        this.text = props;
    }
    parse() {
        return this.text.replace(/.+/g, (item) => {
            if (Markdown.isTitle(item)) {
                return this.parseTitle(item);
            } else {
                return this.parseParagraph(item)
            }
        })
    }
    parseParagraph(text) {
        return text.trim().length ? `<p>${text.trim()}</p>` : '';
    }
    parseTitle(text) {
        return text.replace(Markdown.TITLE_REG, function (item) {
            let n = RegExp.$1.length > 6 ? 6 : RegExp.$1.length; // 1-6个#号；
            let textConent = RegExp.$2;
            return `<h${n}>${textConent}</h${n}>`;
        })
    }
    static isTitle(val) {
        return Markdown.TITLE_REG.test(val);
    }
}

//作业一：
// var url = new Url('localhost:8080?type=2&id=1&name=xiaoming');
// url.get('type') // 2；
// url.get('id') // 1；
// url.get('name') // xiaoming;
// console.log(url.get('type'));
// // //作业二
// var params = {
//     type:'1',
//     id:1,
//     name:'xiaoming'
// }
// var url2 = new Url(params);
// url2.parse() //  type=2&id=1&name=xiaoming;
// console.log(url2.parse());