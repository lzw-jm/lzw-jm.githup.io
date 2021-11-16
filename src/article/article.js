import { Ellipsis} from '../../assets/js/until';
import articles from '../content'
//tab切换
let elements = document.querySelectorAll('.center-top_left span');
let blocks = document.querySelectorAll('.center-mid div');
for (let i = 0; i < elements.length; i++) {
    elements[i].index = i;
    elements[i].onclick = function () {
        for (let j = 0; j < blocks.length; j++) {
            blocks[j].style.display = 'none';
            elements[j].classList.remove('border-bottom');
        };
        blocks[this.index].style.display = 'block';
        this.classList.add('border-bottom');
    }
}
var parentDiv = document.querySelector('.index-content');
var showMore = document.querySelector('.showmore');
var pageDown = {
    //每页多少条
    pageSize: 2,
    //当前页数
    pageNum: 0,
    get offSize() {
        // 2 * (1-1) = 0;
        // 条数*(页数-1) 
        return this.pageSize * (this.pageNum - 1);
    },
    //每一页的内容
    get Num() {
        return articles.slice(this.offSize, this.offSize + this.pageSize);
    },
    get isShow() {
        return Math.ceil(articles.length / this.pageSize) == this.pageNum
    }
}
var oDiv = document.querySelector('.main-content');
addPageList();
showMore.onclick = function () {
    addPageList();
}
oDiv.remove();

function addPageList() {
    pageDown.pageNum++;
    pageDown.Num.forEach(item => {
        var cloneDiv = oDiv.cloneNode(true);
        cloneDiv.innerHTML = item.article;
        cloneDiv.querySelector('h1').dataset.id = item.id;
        cloneDiv.querySelector('h1').addEventListener('click', function (e) {
            window.location.href = `articleDetail.html?id=${e.target.dataset.id}`;
        })
        let ellipsis = new Ellipsis({
            el: cloneDiv.querySelector('article'),
            textCount: 120,
            showFindAllButton: true,
        });
        ellipsis.exec();
        parentDiv.insertBefore(cloneDiv, showMore);
    })
    if (pageDown.isShow) {
        showMore.style.display = 'none';
    }
}