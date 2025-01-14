import { loadUsersByPage } from "../use-cases/load-users-by-page";


const state ={
    currentPage: 0,
    users: [],

}

const loadNextPage = async () => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if (users.length===0) return;

    state.currentPage = state.currentPage+1; // o tambien state.currentPage += 1;
    state.users= users;
}

const loadPreviousPage = async () => {
    if (state.currentPage ===1) return;
    const users = await loadUsersByPage (state.currentPage -1);
    
    state.currentPage= state.currentPage-1;
    state.users=users;
    
}

// TODO: implementar
const onUserChanged = () => {
    throw new Error ('No implementado');

}

const reloadPage = async () => {
    throw new Error ('No implementado');

} 

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,


    // Acceso a los usuarios y a la página actual
    /**
     * 
     * @returns {User[]}
     */
    getUsers: () =>[...state.users],


   /**
    * 
    * @returns {Number}
    */
    getCurrentPage: () => state.currentPage,
}