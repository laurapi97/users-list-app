import usersStore from '../../store/users-store'
import './render-buttons.css'
import { renderTable } from '../render-table/render-table';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) =>{

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev';

    const currentPage = document.createElement('span');
    currentPage.id = 'current-page'
    currentPage.innerText= usersStore.getCurrentPage();

    element.append(prevButton, currentPage, nextButton);




    nextButton.addEventListener('click', async() =>{

    await usersStore.loadNextPage();
    currentPage.innerText=usersStore.getCurrentPage();
    renderTable(element);

    });


    // sigue la lógica del next button pero se añade un condicional para que no baje de 1
    prevButton.addEventListener('click', async ()=>{

    await usersStore.loadPreviousPage();
    currentPage.innerText=usersStore.getCurrentPage();
    renderTable(element);
        
    });

}