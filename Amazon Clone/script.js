const imgs = document.querySelectorAll('.header-slider ul img');
const prev_button = document.querySelector('.control-previous');
const next_button = document.querySelector('.control-next');

let n = 0;

function changeSlide(){
    for (let index = 0; index < imgs.length; index++) {
        imgs[index].style.display = 'none';        
    }
    imgs[n].style.display = 'block'
}

prev_button.addEventListener('click', (e)=>{
    if(n > 0)
    {
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})

next_button.addEventListener('click', (e)=>{
    if(n < imgs.length - 1)
    {
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');

for (const item in scrollContainer) {
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}