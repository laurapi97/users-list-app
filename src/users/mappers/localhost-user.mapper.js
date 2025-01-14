import { User } from "../models/user"
export const localhostUserToModel = (localhostUser) =>{


    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    }= localhostUser; // desestructurar del localhost y extrtaer cada una de las propiedades del objeto

    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });
}