import modalHtml from "./render-modal.html?raw";
import "./render-modal.css"

let modal, form;


// funcionalidades para mostrar y ocultar el modal
//TODO: cargar usuario por id
export const showModal = ()=>{

    modal?.classList.remove('hide-modal');
}

// TODO Reset del formulario

export const hideModal = () =>{
    modal?.classList.add('hide-modal');

}



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) =>{

    if (modal) return;

    modal= document.createElement('div');

    modal.innerHTML= modalHtml;
    modal.className ='modal-container  hide-modal';



// ocultar el posteo de información al lado del localhost
   form = modal.querySelector('form');




// LISTENERS
// cerrar el modal
    modal.addEventListener('click', (event)=>{
        // console.log(event.target);
        if (event.target.className === 'modal-container') {
            hideModal();
        }
    })

// Ocultar posteo del formulario y evitar su propagación
    form.addEventListener('submit', (event)=>{
        event.preventDefault();

        console.log('Formulario enviado');
    })



    element.append(modal);





}