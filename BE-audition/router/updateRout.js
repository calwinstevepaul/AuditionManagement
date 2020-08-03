const router = require("express").Router();
var jwt = require("jsonwebtoken");
var middleware = require('../middlewar/middlewar')
const multer=require('multer');
const path = require("path")

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function(req, file, cb){
    cb(null,"AUDIO-" + Date.now() + path.extname(file.originalname));
    
   
  }
});

const upload = multer({
  storage: storage
});


class update {

  constructor(updatecontroller) {
    this.controller = updatecontroller
    this.init();
  }

  init() {
    router.post("/addsong", middleware,upload.single("myaudio"), (req, res) =>{
      var song =req.body.song
      let str=req.file.path
      // REMOVING PUBLIC FROM THE PATH AS IT IS STATIC
      let newstr=str.slice(6)
      var url ="http://localhost:9000/"+newstr
      var id =req.user
      this.controller.addaudio(
        url,
        id,
        song
      ).then(result => {
        res.send(result);
      });
    })
  
    router.post("/isSelected", middleware, (req,res)=>{
      var {id,isSelected}=req.body
      this.controller.changeIsSelected(id,isSelected).then((result)=>{
        res.send(result)
      })   
      .catch(()=>{
        res.status(401).send({errMsg: "DB Error"})
      }) 
    })

    router.post("/isVerified", middleware, (req,res)=>{
      var {id,isVerified}=req.body
      this.controller.changeIsVerified(id,isVerified).then((result)=>{
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
    return new update(controller);
  };
  