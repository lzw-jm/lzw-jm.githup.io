
export default class Translate {
    // constructor(targets) {
    // this.el = targets.el;
    // }
    // change() {
    //     this.el.classList.add('ani')
    // }
    // load(el) {
    //     el.classList.add('ani');
    // }
    // mount(el) {
    //     el.classList.add('ani')
    // }
    constructor(ani) {
        let { targets, count } = ani;
        this.newTargets = targets;
    }
    change() {
        if(!this.newTargets.length) return
        let target = this.newTargets.shift();
        let _this = this;
        target.el.classList.add(target.animationClassName); 
        function startAni() {
            setTimeout(()=>{  
                target.el.classList.add(target.animationClassName);
                target.el.removeEventListener('animationstart',startAni);
                _this.change()
            })
        }
        target.el.addEventListener('animationstart', startAni);
    }
}
// class Opacity {
//     constructor() {

//     }
//     load(el) {
//         console.log(el);
//         el.classList.add('opacity');
//     }
// }

export class Animata {
    constructor(ani) {
        this.ani = ani;
        // this.type = ani.type;
        // this.el = ani.el;
        // console.log(this.el);
        // this.model = ani.model;
        // this.el = ani.el;
        // this.type = ani.type;
        // this.load();
    }
    run() {
        
    }
    static create() {
        return new Animata()
    }
    use(Translate) {
        try {
            this.model = Translate.install
        } catch (e) {
            this.model = Translate
        }
        //函数不返回值是undefined undefined.mount() 
        return this
    }
    static el;
    mount(el) {
        Animata.el = el;
        this.model().change()
    }
     change() {
        this.ani.change()
    }
}

/// 继承
// export default class Translate extends Animata {
//     constructor() {
//         super()
//     }
//     change() {
//         // this.el.classList.add('ani');
//         this.el.addEventListener('animationstart',function(e){
//             e.target.classList.remove('ani-translate');
//         })  
//     }
//     static install() {
//         return new Translate()
//     }
// }
///http://127.0.0.1:8080/
// js中万物都是对象
// 对象就有key 和 value 
// 如果value是属性,静态属性
//如果value是方法,静态方法
