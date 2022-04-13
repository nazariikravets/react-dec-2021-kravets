import {axionService} from "./axion.service";
import {urls} from "../costant";

const usersService={
    getAll: ()=>axionService.get(urls.userUrl)
}

export {usersService}