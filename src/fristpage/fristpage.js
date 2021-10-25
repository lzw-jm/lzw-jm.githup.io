import {
    Animata
} from '../../assets/js/translate'
import Translate from '../../assets/js/translate'
import articles from '../content'
import { Url } from '../../assets/js/until'
import { Markdown } from '../../assets/js/until'
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
let url = new Url(window.location.href);
let textId = url.get('id');
articles.forEach(article => {
    if (article.id == textId) {
        let newDiv = cloneDiv.content.cloneNode(true);
        newDiv.querySelector('.title-text').innerHTML = article.article;
        clonePar.appendChild(newDiv);
    }
})
let res = new Markdown({
    text: document.querySelector('article').textContent
});
res = res.parse();
document.querySelector('article').innerHTML = res;