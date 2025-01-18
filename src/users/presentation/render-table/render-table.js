import './render-table.css'
import { showModal } from '../render-modal/render-modal';
import {deleteUserById} from '../../use-cases/delete-user-by-id'
import usersStore from '../../store/users-store'

let table;

const createTable = () =>{
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML =`
    <tr>
        <th>#ID</th>
        <th>Balance</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders,tableBody)
    return table;
} 



//LISTENERS
/**
 * 
 * @param {MouseEvent} event 
 */
const tableSelectListener = (event) =>{
    // console.log(event.target);
    // otra forma de hacerlo
    const element = event.target.closest('.select-user');
    if (!element) return;

    const id = element.getAttribute('data-id');
    showModal(id);
}

const tableDeleteListener = async (event) =>{
    
    
    const element = event.target.closest('.delete-user');
    
    if (!element) return;

    const id = element.getAttribute('data-id');

    
    try {
        await deleteUserById(id);
        await usersStore.reloadPage();
        document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
        renderTable();

    } catch(error){
        console.log(error);
        alert ('No se pudo eliminar');

    }
    
   
}






/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) =>{

    const users = usersStore.getUsers();
    
    if (!table){
        table = createTable();
        element.append(table);

        // TODO: Listeners a la tabla

        table.addEventListener('click',tableDeleteListener);
        table.addEventListener('click',tableSelectListener);
        

    }

    let tableHtml ='';
    users.forEach(user =>{
       tableHtml  += `
       <tr>
            <td> ${user.id}  </td>
            <td>${user.balance}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.isActive}</td>
            <td>
                <a href="#/" class= "select-user" data-id="${user.id}"> Select </a>
                |
                <a href="#/" class= "delete-user" data-id="${user.id}"> Delete </a>
                
            </td>
       </tr>

       `
    });


    table.querySelector('tbody').innerHTML=tableHtml;



}