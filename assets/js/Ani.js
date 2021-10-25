import '../../assets/css/Ani.css'
export default class Name {
    constructor(name) {
        this.targets = name.targets;
        this.count = name.count;
        this.newTargets = this.targets.slice();
    }
    //方法名最好用动词
    change() {
        console.log(this.newTargets.length)
        if (this.newTargets.length) {
            var _this = this;
            var targets = this.newTargets.shift();
            var cartoon = function () {
                targets.el.classList.remove(targets.animationClassName);
                targets.el.removeEventListener('animationend', cartoon);
                _this.change();
            }
            targets.el.classList.add(targets.animationClassName);
            targets.el.addEventListener('animationend', cartoon);
        } else {
            this.newTargets = this.targets.slice();
            if (this.count > 1) {
                this.count--;
                this.change();
            }
        }
    }
}