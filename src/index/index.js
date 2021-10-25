import Ani from '../../assets/js/Ani.js'
import Translate from '../../assets/js/translate.js'
import { Animata } from '../../assets/js/translate.js'

// new Animata({
//     el: document.querySelector('.one'),
//     model: new Translate()
// })
// 作业二： 
// let animate = new Animate({
//     el:document.querySelector('div'),
//     type:'translate',
// })
// animate.load();
// let animate = new Animata({
//     el:document.querySelector('.one'),
//     type:'opacity'
// })
// 作业三： 
// Animata.create({  
//     type:'translate',
// }).mount(document.querySelector('.three'))


// 作业四：
//  use方法中应该接收一个 Translate.install的静态方法；如果没有静态方法，那么直接执行这个方法；
//  注意：是直接执行这个方法，而不是 new一个构造函数；
// Animata.create().use(Translate).mount(document.querySelector('.five'))


// let animate = Animata.create().use(Translate).mount(document.querySelector('.five'));
//作业五：
// let animate = Animate.create().use(Translate).mount(document.querySelector('div')
// export default class Translate extends Animate{
//     constructor(){
//         super()
//     }
//     exec(){
//         let _this = this;
//         this.el.classList.add('ani-translate');
//         super.emit('animationstart')
//         // this.el.addEventListener('animationstart',function(e){
//         //     e.target.classList.remove('ani-translate');
//         // })
//     }
// }

// let animate = new Animata({
//     el:document.querySelector('.one'),
//     type:'translate'
// })
// animate.load();
// let newani = new Animata(new Translate({
//     targets: [{
//         el: document.querySelector('.one'),
//         animationClassName: 'ani'
//     },
//     {
//         el: document.querySelector('.two'),
//         animationClassName: 'ani'
//     },
//     {
//         el: document.querySelector('.three'),
//         animationClassName: 'ani'
//     },
//     {
//         el: document.querySelector('.four'),
//         animationClassName: 'ani'
//     },
//     {
//         el: document.querySelector('.five'),
//         animationClassName: 'ani'
//     },
//     ],
//     count: 5
// }))
// newani.change()
// var translata = new Translate({
//     targets: [{
//         el: document.querySelector('.one'),
//         animationClassName: 'ani'
//     },
//     {
//         el: document.querySelector('.two'),
//         animationClassName: 'ani'
//     },
//     {
//         el: document.querySelector('.three'),
//         animationClassName: 'ani'
//     },
//     {
//         el: document.querySelector('.four'),
//         animationClassName: 'ani'
//     },
//     {
//         el: document.querySelector('.five'),
//         animationClassName: 'ani'
//     },
//     ],
//     count: 5
// })

// var pagetext = new Webpack(addPage)
var newname = new Ani({
    targets: [{
        el: document.querySelector('.one'),
        animationClassName: 'ani'
    },
    {
        el: document.querySelector('.two'),
        animationClassName: 'ani'
    },
    {
        el: document.querySelector('.three'),
        animationClassName: 'ani'
    },
    {
        el: document.querySelector('.four'),
        animationClassName: 'ani'
    },
    {
        el: document.querySelector('.five'),
        animationClassName: 'ani'
    },
    ],
    count: 5
}
)

