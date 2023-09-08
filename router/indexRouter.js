import {Router} from "express";

import citiesController from "../controllers/citiesController.js";
const indexRouter = Router()

indexRouter.get('/', (request, response, next)=>{
    response.send("¡Hola mentor/a!")
})

indexRouter.get('/cities',citiesController.getAllCities)
 
export default indexRouter