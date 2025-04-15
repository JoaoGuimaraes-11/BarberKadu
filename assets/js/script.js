const btnChange = document.querySelector('#openMenu');
function mobileNav(){
    btnChange.addEventListener('click', ()=>{
        const contentMobile = document.querySelector('.nav-mobile');
        const hamburguerModal = document.querySelector('.fa-bars')
        hamburguerModal.classList.toggle('fa-x')
        contentMobile.classList.toggle('active')
    })
}
mobileNav();