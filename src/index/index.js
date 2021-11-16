var body = document.querySelector('body');
var next = document.querySelector('.footer-text');
next.onclick = function () {
    body.setAttribute('class', 'top-up');
    window.location.href = 'article.html';
}
class Animation {
    constructor(name) {
        this.targets = name.targets;
        this.count = name.count;
        this.newTargets = this.targets.slice();
        this.change();
    }
    change() {
        if (!this.newTargets.length) {
            return
        }
        var _this = this;
        var targets = this.newTargets.shift();
        var cartoon = function () {
            targets.el.removeEventListener('animationend', cartoon);
            _this.change();
        }
        targets.el.classList.add(targets.animationClassName);
        targets.el.addEventListener('animationend', cartoon);
    }
}
new Animation({
    targets: [{
            el: document.querySelector('.top-img'),
            animationClassName: 'top-imgani'
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
            el: document.querySelector('.footer-text'),
            animationClassName: 'footer-textani'
        },
        {
            el: document.querySelector('.footer'),
            animationClassName: 'footer-ani'
        },
    ]
})