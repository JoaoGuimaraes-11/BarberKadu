const btnChange = document.querySelector('#openMenu');
function mobileNav(){
    btnChange.addEventListener('click', ()=>{
        const contentMobile = document.querySelector('.nav-mobile');
        const hamburguerModal = document.querySelector('.fa-bars');
        const openItens = document.querySelector('.itens-mobile');
        hamburguerModal.classList.toggle('fa-x')
        openItens.classList.toggle('active')
        contentMobile.classList.toggle('active')
    })
}
mobileNav();