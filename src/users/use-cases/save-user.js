import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper';
import {User} from '../models/user'


/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser =async (userLike) =>{
    // recibe el objeto userLike que se manda al constructor
    const user = new User (userLike);

    if (!user.firstName.lenght || !user.lastName) 
        throw 'First & Last name are required';

    //Mapper para enviar al backend

    const userToSave = userModelToLocalhost(user);


    if (user.id){
       throw 'No implementada la actualización' 
       return;
    }
    


    const updatedUser = await createUser (userToSave);
    return updatedUser;
    
    
}

/**
 * @param {Like <User>} user
 */
const createUser = async(user) =>{

    const url =`${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch (url,{
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    console.log({ newUser });

    return newUser;

}