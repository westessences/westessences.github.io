function navSlide () {

    const burgerMenu = document.getElementById('burger')
    const nav = document.querySelector('.nav_links')
    const navLinks = document.querySelectorAll('.nav-link')

    burgerMenu.addEventListener('click', ()=> {
        nav.classList.toggle('nav_active')
    })
    
    navLinks.forEach( link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav_active')
        })
    })
    
}   

navSlide()

function animarImg() {
    const img = document.querySelector('.easeIn')
    img.classList.add('imgShown')
}

animarImg()

function cambiarVapo() {
    const btn2500 = document.getElementById('btn2500')
    const btn3500 = document.getElementById('btn3500')
    const vaposBg = document.getElementById('vapos')
    const vaposImg = document.getElementById('vaposImg')
    const descripcion = document.getElementById('descripcion')
    const precio = document.getElementById('precio')

    btn3500.addEventListener('click', ()=> {
        vaposBg.classList = 'fdrr bg-black'
        btn3500.classList = 'bg-black white borderGreen backgroundGreen'
        btn2500.classList = 'bg-black white borderBlue'
        precio.classList = 'verde'
        precio.innerText = '$8000'
        vaposImg.src = './img/fondonegrovapo3500.png'
        descripcion.innerText = `VAPORIZADOR ELECTRONICO DESCARTABLE 3500 PUFFS. DISEÑO ERGONOMICO Y FACIL DE TRANSPORTAR. BATERIA DURADERA DE 1500 MAH. CONTIENE NICOTINA. VARIEDAD DE SABORES DISPONIBLES. Consultar stock.`
    })

    btn2500.addEventListener('click', ()=> {
        vaposBg.classList = 'fdr bg-black'
        vaposImg.src = './img/fondoNegroVapo2500.png'
        btn2500.classList = 'bg-black white borderBlue backgroundBlue'
        btn3500.classList = 'bg-black white borderGreen'
        precio.classList = 'azul'
        precio.innerText = '$6400'
        descripcion.innerText = `VAPORIZADOR ELECTRONICO DESCARTABLE 2500 PUFFS. DISEÑO ERGONOMICO Y FACIL DE TRANSPORTAR. BATERIA DURADERA DE 1000 MAH. CONTIENE NICOTINA. VARIEDAD DE SABORES DISPONIBLES. Consultar stock.`
    })
}

cambiarVapo()

window.addEventListener('scroll', mostrarElementos)

function mostrarElementos() {

   let mostrar = document.querySelectorAll('.mostrar')

   for (let i = 0; i < mostrar.length; i++) {

    let windowHeight = window.innerHeight;
    let revealTop = mostrar[i].getBoundingClientRect().top
    let revealPoint = 150

    if (revealTop < windowHeight - revealPoint) {
        mostrar[i].classList.add('active')
    } else {
        mostrar[i].classList.remove('active')
    }
   }
}

const logo = document.querySelector('.logo')
logo.addEventListener('click', () => {
    window.location.reload()
})