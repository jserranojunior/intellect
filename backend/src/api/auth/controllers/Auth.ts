import UsersModal from "../../users/modals/Users";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

let Users = new UsersModal();

async function verifyUser(req: Request){
  return await Users.getUserId(
      req.body
    );
  }

export default {
   async login(req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST"); 

    if(!req.body.email){
      res.status(401).send({erro: 'Email invalido!'})
    }
    if(!req.body.password){
      res.status(401).send({erro: 'Senha invalida!'})
    }   
    const userId = await verifyUser(req)
    if(!userId){
      res.status(401).send({erro: 'Email ou senhas invalidas'})
    }
      if (userId > 0) {        
        var token = jwt.sign({ id:userId }, "secret", {
          expiresIn: '365d',
        });
        res.json({ auth: true, token: token } )
    }else{ 
        res.status(401).send({ erro: "Login invalido!" });
    }  
  },
  async logout(req: Request, res: Response) {
    res.json({ auth: false, token: null });
  },
  async verify(req: Request, res: Response) {
    res.json('Auth okaiiu ' + req.body.userId);
  },
};

