import config from '../../dbconfig.js';
import sql from 'mssql';
export class PizzaService {
     getAll = async ()=>{

     }
     static getById = async(id)=>{
        let returnEntity = null;
        console.log("estoy en pizza.getbyId(id)");
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                .imput('pId',sql.Int,id)
                                .query('SELECT* FROM Pizzas WHERE id = @pId');
            returnEntity=result.recordsets[0][0];
        } catch (error){
            console.log(error);
        }
        return returnEntity;

     }
     insert = async(pizza)=>{

     }
     update = async(pizza)=>{

    }
    deleteById = async(id)=>{
        let rowsAffected = 0;
        console.log('Estoy en: PIzzasService.deleteById(id)');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                                .imput('pId',sql.Int,id)
                                .query('DELETE * FROM Pizzas WHERE id = @pId');
            rowsAffected = result.rowsAffected;
        } catch(error){
            console.log(error);
        }
        return rowsAffected;

    }

}