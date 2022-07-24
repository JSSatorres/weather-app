import { Sequelize } from "sequelize"

const db = new Sequelize("weather app","root","",{
    host:"localhost",
    dialect:"mysql",
    logging:true
})

export default db