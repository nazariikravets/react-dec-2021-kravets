import {constants} from "../constant";

export const userService={
    getAllUsers: ()=>fetch(constants.apiUrl + 'users').then(value => value.json())
}