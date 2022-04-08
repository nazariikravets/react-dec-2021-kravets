import {constants} from "../constant";


export const postService={
    getAllPosts: ()=> fetch(constants.apiUrl + 'posts').then(value => value.json())
}