
import "./home.scss";

const show = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible')
        }
         if(!entry.isIntersecting){
            entry.target.classList.remove('visible')
        }
 })
})
const showElement = document.querySelectorAll('.show')
showElement.forEach(item =>{
    show.observe(item)
})
