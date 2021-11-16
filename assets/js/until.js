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
        if (!String) return '参数传入错误';
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
export   class Ellipsis {
    constructor(props) {
        this.el = props.el;
        this.oldtext = this.el.innerHTML;
        this.text = this.oldtext;
        this.textCount = props.textCount;
        this.findAllButtonText = props.findAllButtonText ||'查看'
        this.showFindAllButton = props.showFindAllButton;
        this.flag;
    }
    subText() {
        this.text = this.text.substring(0, this.textCount) + '...';
        this.el.innerHTML = this.text;
    }
    //生成按钮
    addButton() {
        let a = document.createElement('a');
        let _this = this;
        a.innerText = '查看';
        a.style.cssText = 'color:#9999CC;cursor:pointer;'
        this.el.appendChild(a)
        a.onclick = function () {
           _this.flag = !_this.flag;
            _this.el.childNodes[0].textContent = _this.flag ? _this.oldtext : _this.text;
            this.textContent = _this.flag ? '收起' : _this.findAllButtonText
        }
    }
    exec() {
        this.subText();
        if (this.showFindAllButton) {
            this.addButton();
            this.el.querySelector('a').innerHTML = this.findAllButtonText ? this.findAllButtonText:'查看';
        }
    }
}