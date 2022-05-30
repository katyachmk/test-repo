//
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Loaded")
    //Створюю сталі під наші елементи в html
    // Бургер
    const mobileBtnNav = document.querySelector('.header__mobile-mmu')
    // Меню яке виїзджає
    const mobileContentNav = document.querySelector('.menu__mobile-mmu')
    // тег
    const body = document.querySelector('body')
    document.querySelectorAll('a[href^="#"').forEach(link => {
        link.addEventListener('click', (e) => {
            mobileBtnNav.classList.remove('active')
            mobileContentNav.classList.remove('active')
            body.classList.remove('active')
        })
    })
    // Додаю в бургер EventListener який реагує на клік
    mobileBtnNav.addEventListener('click', (e) => {
        console.log("Click")
        e.preventDefault()
        //Перевіряємо чи кнопка має клас active
        if(mobileBtnNav.classList.contains('active')){
            //Якщо є то видаляємо цей клас у кнопки, тега body та у виїзджаючого меню
            mobileBtnNav.classList.remove('active')
            mobileContentNav.classList.remove('active')
            body.classList.remove('active')
        } else {
            //В противному випадку додаємо це
            mobileBtnNav.classList.add('active')
            mobileContentNav.classList.add('active')
            body.classList.add('active')
        }
    })
});