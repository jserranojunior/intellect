
import Auth from "./controllers/Auth";
const auth = new Auth({})


import RouterClass from '../../routes/RouterClass'
export default class AuthRoutes extends RouterClass{
    constructor(){
      super();
    
    }
    routes(){
      
     return [
        this.app.post("/login", (req, res) => {
          auth.login(req, res)
        }),
        this.app.get("/logout",  (req,res) => auth.logout(req,res)),
        this.app.post("/jwt", this.middlewares.auth, (req,res) => auth.verify(req,res)),
        ]
      }
    
}

    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "POST"); 

