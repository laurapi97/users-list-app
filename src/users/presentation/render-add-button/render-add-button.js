
import './render-add-button.css'

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {() => void} callback
 */

// función que quiero ejecutar cuando se hace click
export const renderAddButton = (element) => {

    const fabButton = document.createElement ('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append (fabButton);


    //TODO:
    fabButton.addEventListener('click',() =>{
        // if (!callback) return;// si no existe el callback no hace nada

        // callback(); // si existe lo llama
        throw Error ('No implementado');
    });

} 