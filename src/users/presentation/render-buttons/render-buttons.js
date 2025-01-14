import usersStore from '../../store/users-store'
import './render-buttons.css'
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

}