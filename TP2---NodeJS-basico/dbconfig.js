/*import 'dotenv/config'

const config = {
    user : 'Pizzas',
    password : 'Pizzas',
    server : DESKTOP-A-PHZ2-AMI-017,
    database : 'DAI-Pizzas',
    options :{
        trustServerCertificate : true,
        trustedConnection : true,
    }
    
}*/
import 'dotenv/config'
const config = {
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    server : process.env.DB_HOST,
    database : process.env.DB_DATABASE,
    options :{
        trustServerCertificate : true,
        trustedConnection : true,
    }

}
export default config;  