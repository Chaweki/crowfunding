import './index.html';
import './style.css';

/**
 * @param {String} classname name of the modal
 * @param {Boolean} On determine if it active or desactive the modal
 * 
 */

let OnOffModal= function(classname,On){
    if(On){
        let modal = document.querySelector(classname)
        modal.classList.remove('modaloff')
        modal.classList.add('modalon')

    }else{
        let modal = document.querySelector(classname)
        modal.classList.remove('modalon')
        modal.classList.add('modaloff')
}


}

let btnthank = document.querySelector('.btn-green-thank')
let btngreeen = document.querySelectorAll('.btn-green')
let btnGreeenModal = document.querySelectorAll('.btn-green-modal')
let closeIcone = document.querySelector('.close')
btnthank.addEventListener('click',e => {
    e.preventDefault
    OnOffModal('.thankmodal',false)

})

btngreeen.forEach(element => {
    element.addEventListener('click', e => {
    e.preventDefault
        OnOffModal('.donatemodal',true)
 
})
    
}); 
closeIcone.addEventListener('click', e => {
    e.preventDefault
    OnOffModal('.donatemodal',false)

})
btnGreeenModal.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault()
        let input = element.parentElement.querySelector('input')
        if(input.value=== ''){
            input.focus()
        }else{     
            OnOffModal('.donatemodal',false)
            OnOffModal('.thankmodal',true)
 } 

    })

});

if (window.innerWidth > 1000) {

    document.querySelector('#nav').setAttribute('checked', true)
    document.querySelector('.header .nav').classList.remove('card')
}