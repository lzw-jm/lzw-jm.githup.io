import fristtext from './html/fristtext.html'
import sectext from './html/sectext.html'
import thrtext from './html/thrtext.html'
import fourtext from './html/fourtext.html'
import fivetext from './html/fivetext.html'

function parseHTML(text) {
    let oDiv = document.createElement('div');
    oDiv.innerHTML = text;
    let newText = '';
    newText = oDiv.childNodes[0].innerHTML;
    console.log(newText)
    return newText
}
export default [{
        id: 1,
        article: parseHTML(fristtext)
    },
    {
        id: 2,
        article: parseHTML(sectext)
    },
    {
        id: 3,
        article: parseHTML(thrtext)
    },
    {
        id: 4,
        article: parseHTML(fourtext)
    },
    {
        id: 5,
        article: parseHTML(fivetext)
    },
]