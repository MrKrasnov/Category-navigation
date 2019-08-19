const treeID = document.getElementById('tree');
// все елементы li
const liall = treeID.querySelectorAll('li');
// перебор li
for(let li of liall){
    // оборачиваем елемент тегом span
    let span = document.createElement('span')
    //добавляем ему класс
    span.classList.add('show');
    li.prepend(span);
    span.append(span.nextSibling)
    // закончили добавление span всем li
}

treeID.onclick = function (event) {
    // проверка по какому кликнуто теге
    console.log(event.target.tagName);
    if (event.target.tagName != 'SPAN') return;
    // получаем родителя
    let childrenContainer = event.target.parentNode.querySelector('ul');
    // проверка существование чайлдконтейнера
    if (!childrenContainer) return;
    // скрываем елемент 
    childrenContainer.hidden = !childrenContainer.hidden;
    // удаление класса show или наобород удаление hide
    if (childrenContainer.hidden) {
        event.target.classList.add('hide');
        event.target.classList.remove('show');
    }
    else {
        event.target.classList.add('show');
        event.target.classList.remove('hide');
    }
}