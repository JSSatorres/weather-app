import express, {Application} from "express"
import userRouter from "../routes/user-routes";

class Server {

    private app: Application;
    private port: string ;
    private apiPaths={
        users: '/api/users'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || "5000";

        //routes
        this.routes();
    }

    routes (){
        this.app.use(this.apiPaths.users, userRouter)
    }

    listen(){
        this.app.listen(this.port, ()=> console.log("the server is running in", this.port))
    }

}

export default Server;