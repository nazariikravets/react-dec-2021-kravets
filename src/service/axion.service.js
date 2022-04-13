import axios from "axios";

import baseURL from "../costant/costantUrl";

const axionService=axios.create({baseURL})


export {axionService}