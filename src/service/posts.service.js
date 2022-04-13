import {axionService} from "./axion.service";
import {urls} from "../costant";



export const postsService={
    getPostId: (userId)=>axionService.get(`${urls.postsURL}?userId=${userId}` )

}
