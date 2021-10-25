import Ellipsis from "../exam/exam";
let ellipsis = new Ellipsis({
    el: document.querySelector('.content'),
    textCount: 200,
    findAllButtonText: "查看内容",
    showFindAllButton: true
})
ellipsis.exec();
document.querySelector('.index-content h2').onclick = function () {
    console.log(this.dataset.id)
    window.location.href = `fristpage.html?id=${this.dataset.id}`
}
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