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
            el: document.querySelector('.section-left'),
            animationClassName: 'ani'
        },
    ]
}))
leftPage.change();
let rightpage = new Animata(new Translate({
    targets: [
        {
            el:document.querySelector('.section-right'),
            animationClassName:'rightmove'
        }
    ]
}))
rightpage.change();
var cloneDiv = document.querySelector('template');
var clonePar = document.querySelector('.section-left');
let url = new Url(window.location.href);
let textId = url.get('id');
articles.forEach(item => {
    if (item.id == textId) {
        let newDiv = cloneDiv.content.cloneNode(true);
        console.log(item);
        let res = new Markdown(item.article);
        newDiv.querySelector('.title-text').innerHTML = res.parse();
        clonePar.appendChild(newDiv);
    }
})