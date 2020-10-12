import UsersModal from "../modals/Users";
import { Request, Response } from "express";
import bcrypt from "bcryptjs"

let Users = new UsersModal();

export default {
  async getUserId(req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");

    let userId = await Users.getUserId(
      req.body
    );

    res.json(userId);
  },
  

    async store(req: Request, res: Response) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");

    if(!req.body.email){
      res.status(401).send({ erro: "Email invalido!" });
    }else if(!req.body.name){
      res.status(401).send({ erro: "Nome invalido!" });
    }else if(!req.body.password){
      res.status(401).send({ erro: "Senha invalida!" });
    }

var salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(req.body.password, salt);
      

   
    req.body.password = hash
        let user = await Users.store(
      req.body
    ).then(res => {
      return res
    }).catch(err => {
      if(err.code == "ER_DUP_ENTRY"){
        return({erro: "Email já cadastrado"})
      }else{
      return(err)

      }
    });
    res.json(user);

  },

};
