import express, {Application , RequestHandler} from "express"
import cors from "cors"

import dbConnectionMongo from "../db/concectionDB";
import { PORT } from "../config/config";
import userRouter from "../routes/user-routes";
import authRouter from "../routes/auth-routes";
import placeRouter from "../routes/place-routes";

class Server {

    private app: Application;
    private port: string ;
    private apiPaths={
        auth: '/api/auth',
        users: '/api/users',
        place: '/api/place',
    }

    constructor(){
        this.app = express();
        this.port = PORT || "5000";
        this.connectionDB()
        this.middlewares()
        this.routes();        
    }

    async connectionDB (){
        try {
            await dbConnectionMongo()
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
        this.app.use(express.json()); 
        //this.app.use(express.urlencoded({extended: true}) as RequestHandler); 
    }

    routes (){
        this.app.use(this.apiPaths.auth, authRouter)
        this.app.use(this.apiPaths.users, userRouter)
        this.app.use(this.apiPaths.place, placeRouter)
    }

    listen(){
        this.app.listen(this.port, ()=> console.log("the server is running in", this.port))
    }

}

export default Server;