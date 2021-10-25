var outer = document.getElementById('outer');
var footer = document.querySelector('.footer');
footer.onclick = function () {
    outer.setAttribute('class', 'top-up');
}
var topImg = document.querySelector('.top-img');
var section = document.querySelector('.section');
var sectionPc = document.querySelector('.section-pc');
var textAni = document.querySelector('.text-ani');
var footer = document.querySelector('.footer');
class Name {
    constructor(name) {
        this.targets = name.targets;
        this.count = name.count;
        this.newTargets = this.targets.slice();
        console.log(this.newTargets)
        // this.lastElement = this.newTargets[this.newTargets.length - 1];
        this.change();
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
            console.log(targets)
            targets.el.classList.add(targets.animationClassName);
            targets.el.addEventListener('animationend', cartoon);
        } else {
            this.newTargets = this.targets.slice();
            if (this.count > 1) {
                this.count--;
                this.change()
            }
        }
        // this.lastElement.el.addEventListener('animationend', function () {
        //         _this.getCount();
        //事件同时添加,添加了两个事件
        //     })
    }
}
var index = new Name({
    targets: [{
        el: document.querySelector('.top-img'),
        animationClassName: 'top-imgani'
    },
    {
        el: document.querySelector('.section'),
        animationClassName: 'section-boxani'
    },
    {
        el: document.querySelector('.section-pc'),
        animationClassName: 'section_pcani'
    },
    {
        el: document.querySelector('.text-ani'),
        animationClassName: 'section-ani'
    },
    {
        el: document.querySelector('.footer'),
        animationClassName: 'footer-ani'
    },]
})