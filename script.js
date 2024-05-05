const cards = document.querySelector('.am')
const tables = document.querySelector('.tables')

const observer = new IntersectionObserver(entry => {
    entry.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add('show')
        }
    })
})

observer.observe(cards)
observer.observe(tables)
