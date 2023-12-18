const nav=document.getElementById('navbar')
const bar=document.getElementById('hambar')
const cross=document.getElementById('cross')
if (bar) {
    bar.addEventListener('click' ,()=>{
        nav.classList.add('active');
    })
}
if (cross) {
    cross.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}

