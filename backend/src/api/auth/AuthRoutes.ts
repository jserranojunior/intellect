
import Auth from "./controllers/Auth";

import RouterClass from '../../routes/RouterClass'
export default class AuthRoutes extends RouterClass{
    constructor(){
      super();
    }
    routes(){
     return [
        this.app.post("/login", Auth.login),
        this.app.get("/logout", Auth.logout),
        this.app.post("/jwt", this.middlewares.auth, Auth.verify),
        ]
      }
}



