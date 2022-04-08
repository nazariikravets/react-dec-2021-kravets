import {constants} from "../constant";


export const commentService={
    getAllComments: ()=> fetch(constants.apiUrl + 'comments').then(value => value.json())
}