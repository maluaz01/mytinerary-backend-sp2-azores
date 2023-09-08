import cities from "../citiesList.js";

const citiesController ={
    getAllCities:(request, response, next)=>{
        response.json({
            response: cities,
            success: true,
            error: null    
        })
    }
}


export default citiesController