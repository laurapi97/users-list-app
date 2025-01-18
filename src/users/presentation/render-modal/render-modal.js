import "../../models/user"
import "./render-modal.css"
import {getUserById} from "../../use-cases/get-user-by-id"
import modalHtml from "./render-modal.html?raw";

let modal, form;
let loadedUser={};

// funcionalidades para mostrar y ocultar el modal


/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async (id)=>{

    modal?.classList.remove('hide-modal');
    loadedUser={};

    if (!id) return;
    const user = await getUserById(id);
    setFormValues(user);

}


// TODO Reset del formulario

export const hideModal = () =>{
    modal?.classList.add('hide-modal');

    // resetear el formulario cuando salgo del modal
    form?.reset();

}

/**
 * 
 * @param {User} user 
 */
const setFormValues = (user) =>{
    form.querySelector('[name = "firstName"]').value = user.firstName;
    form.querySelector('[name = "lastName"]').value = user.lastName;
    form.querySelector('[name = "balance"]').value = user.balance;
    form.querySelector('[name = "isActive"]').checked = user.isActive;
    loadedUser = user;
}





/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike)=> Promise <void> } saveUserCallback
 */
export const renderModal = (element, saveUserCallback) =>{

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
    form.addEventListener('submit', async (event)=>{
        event.preventDefault();

        const formData = new FormData(form);
        const userLike = {...loadedUser};


        // pasar el valor del balance que está como string a numero
        for (const [key,value] of formData) {
            if ( key ==='balance' ){
                // userLike[key] =+value; misma forma de convertir a número
                userLike[key] =Number(value);
                continue; // para hacer la siguiente iteración del ciclo
            }   

            if( key==='isActive' ){
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }

            userLike[key] = value;
        }
        // console.log(userLike);
        // // TODO: guardar usuario
    
        await saveUserCallback(userLike);
        hideModal();
        
    });



    element.append(modal);





}