const typewriterLetters = document.querySelectorAll('.typewriter')
const sections = document.querySelectorAll('section')


// Intersection observer for scroll animations
const observer = new IntersectionObserver(e => {
    e.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('show')
        }
    })
})

setTimeout(() => {
    sections.forEach(el => observer.observe(el))
}, 1000)


// typewriter animation
function change(i){
    if (i < typewriterLetters.length){
      typewriterLetters[i].style.display = 'inline'
       setTimeout(function(){
           i++;
           change(i);
       }, 70);
    }
}

function start() {
  typewriterLetters.forEach(e => {
    e.style.display = 'none'
  })
  change(0)
}

start()