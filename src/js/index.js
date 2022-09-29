let item = [...document.querySelectorAll('.list-item')];
let page = document.querySelector('.pad');
let page1 = document.querySelector('.form-box');
let prevPage = document.querySelector('.back-btn');

console.log(item);

item.forEach(item => {
    item.addEventListener('click', () => {
        page.style.left = `0%`
    })
})
prevPage.addEventListener('click', () => {
    page.style.left = `100%`
})

// const pageControl = (page) => {
//     if (page) {
//         page.style.left = `0%`

//     } else {
//         page.style.left = `100%`

//     }
// }