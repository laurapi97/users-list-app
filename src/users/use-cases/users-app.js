import { renderButtons } from "../presentation/render-buttons/render-buttons";
import { renderTable } from "../presentation/render-table/render-table";
import { renderAddButton } from "../presentation/render-add-button/render-add-button";
import usersStore from "../store/users-store";
import { renderModal } from "../presentation/render-modal/render-modal";
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const UsersApp = async (element) =>{

    // element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();

    // console.log(usersStore.getUsers());


    renderTable(element);
    renderButtons(element);
    renderAddButton (element);
    renderModal(element);
}