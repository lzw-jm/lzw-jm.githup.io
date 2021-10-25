import {
    Animata
} from '../../assets/js/translate'
import Translate from '../../assets/js/translate'
import articles from '../content'
import {Url} from '../../assets/js/until'
let leftPage = new Animata(new Translate({
    targets: [{
            el: document.querySelector('.mleft-top'),
            animationClassName: 'ani'
        },
        {
            el: document.querySelector('.mleft-bot'),
            animationClassName: 'ani'
        },

        {
            el: document.querySelector('.section-left'),
            animationClassName: 'ani'
        },
    ]
}))

leftPage.change()
let rightpage = new Animata(new Translate({
    targets: [{
            el: document.querySelector('.header-mright'),
            animationClassName: 'rightmove'
        },
        {
            el: document.querySelector('.sright-frist'),
            animationClassName: 'rightmove'
        },
        {
            el: document.querySelector('.sright-second'),
            animationClassName: 'rightmove'
        },
        {
            el: document.querySelector('.sright-three'),
            animationClassName: 'rightmove'
        },
        {
            el: document.querySelector('.sright-four'),
            animationClassName: 'rightmove'
        },
    ]
}))
rightpage.change()

var cloneDiv = document.querySelector('template');
var clonePar = document.querySelector('.section-left');
String.prototype.ellipsis = function (num) {
    let str = this;
    if (num < this.length) {
        str = this.substring(0, num) + '...';
    }
    return str;
}
var flag = true;
let url = new Url(window.location.href);
let textId = url.get('id');
articles.forEach(article => {
    if (article.id == textId) {
        let newDiv = cloneDiv.content.cloneNode(true);
        newDiv.querySelector('.title-text').innerHTML = article.article;
        clonePar.appendChild(newDiv);
        // newDiv.querySelector('.htitle').innerHTML = article.title;
        // if (article.article.length > 200) {
        //     //是否要生成打开全部内容按钮
        //     let span = document.createElement('span');
        //     span.className = 'openall';
        //     span.innerHTML = '全部内容';
        //     newDiv.children[0].appendChild(span);
        //     newDiv.querySelector('.title-text').innerHTML = article.article.ellipsis(140);
        //     span.addEventListener('click', function () {
        //         if (flag) {
        //             console.log(this);
        //             this.innerHTML = '收起内容';
        //             this.parentNode.querySelector('.title-text').innerHTML = article.article;
        //             this.parentNode.querySelector('.title-text').innerHTML = this.parentNode.querySelector('.title-text').innerHTML.replace(/\n/g, '</br>');
        //             this.parentNode.querySelector('.title-text').innerHTML = this.parentNode.querySelector('.title-text').innerHTML.replace(/\s/g, '');
        //             flag = false;
        //         } else {
        //             this.innerHTML = '全部内容';
        //             this.parentNode.querySelector('.title-text').innerHTML = article.article.ellipsis(140);
        //             flag = true;
        //         }
        //     })
        // } else {
        //     newDiv.querySelector('.title-text').innerHTML = article.article;
        // }
    }
})



// var url = new Url('localhost:8080?type=2&id=1&name=xiaoming')
// console.log(url.get('name'))
