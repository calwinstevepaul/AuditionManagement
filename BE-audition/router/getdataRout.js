const router = require("express").Router();
const bcrypt =require('bcrypt')
var jwt = require("jsonwebtoken");
var middleware = require('../middlewar/middlewar')



class getData {

  constructor(getdatacontroller) {

    this.controller = getdatacontroller
    this.init();
  }

  init() {
    router.post("/user",middleware,(req,res)=>{
      this.controller.getUsers()
      .then(result=>{
        res.send(result)
      }) 
      .catch(()=>{
        res.status(401).send({errMsg: "DB Error"})
      })     
    })
    router.post("/productiondata",middleware,(req,res)=>{
      this.controller.getProductionData()
      .then(result=>{
        res.send(result)
      })      
      .catch(()=>{
        res.status(401).send({errMsg: "DB Error"})
      }) 
    })

    router.post("/currentUser",middleware,(req,res)=>{
      let id = req.user
      this.controller.currentUser(id)
      .then(result=>{
        res.send(result)
      })  
      .catch(()=>{
        res.status(401).send({errMsg: "DB Error"})
      })     
    })
   
   
  }

  getRouter() {
    return router;
  }
}
  
module.exports = controller => {
  return new getData(controller);
};
  