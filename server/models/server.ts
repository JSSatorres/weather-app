import express, {Application} from "express"

class Server {

    private app: Application;
    private port: string ;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || "5000"
    }

    listen(){
        this.app.listen(this.port, ()=> console.log("the server is running in", this.port))
    }
}

export default Server;