const treeID = document.getElementById('tree');
const liall = treeID.querySelectorAll('li');

for (let li of liall) {
    let span = document.createElement('span')
    span.classList.add('show');

    li.prepend(span);
    span.append(span.nextSibling)
}

treeID.onclick = function (event) {
    let childrenUL = event.target.parentNode.querySelector('ul');

    if (event.target.tagName != 'SPAN') return;
    if (!childrenUL) return;

    toogle(childrenUL, event);
}

function toogle(ul, event) {
    ul.hidden = !ul.hidden;
    if (ul.hidden) {
        event.target.classList.add('hide');
        event.target.classList.remove('show');
    }
    else {
        event.target.classList.add('show');
        event.target.classList.remove('hide');
    }
}