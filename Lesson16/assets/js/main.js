// const parent = document.querySelector('.parent');
// parent.addEventListener('click', function(e){
//     let targetItem = e.target;
//     console.log(targetItem)
//     if (targetItem.closest('.btn')){
//         targetItem.closest('.btn').classList.add('done');
//         targetItem.innerHTML = 'нажата'
//     }
// })

// const buttonAdd = document.querySelector('.btn__add');
// buttonAdd.addEventListener('click', function(e){
//     parent.insertAdjacentHTML('beforeend', '<button class="btn">Кнопка(новая)</button>')
// })

const linkItem = document.getElementsByClassName('header__burger')[0];
linkItem.addEventListener('click', function(e){
    linkItem.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active')
    document.body.classList.toggle('lock');
})