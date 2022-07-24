import express, {Application} from "express"
import userRouter from "../routes/user-routes";
import cors from "cors"

import db from "../db/concectionDB";

class Server {

    private app: Application;
    private port: string ;
    private apiPaths={
        users: '/api/users'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || "5000";
      /*   this.connectionDB() */
        this.middlewares()
        this.routes();        
    }

    async connectionDB (){
        try {
            await db.authenticate();
            console.log("database is connection");                  

        } catch (error:any) {
            console.log(error);          
            throw new Error(error);            
        }
    }

    middlewares(){
        //cors
        this.app.use(cors())

        //read body
        this.app.use(express.json())
    }

    routes (){
        this.app.use(this.apiPaths.users, userRouter)
    }

    listen(){
        this.app.listen(this.port, ()=> console.log("the server is running in", this.port))
    }

}

export default Server;