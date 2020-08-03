var model=require('../models')
let Op=require('sequelize').Op


class getdataController{
  
  async getUsers(){
    return model.user.findAll({
      where:{
        isAdmin:false,
        isSelected:null
      },
      include:[
        {
          model:model.audio
        }
      ]
    })
  }

  async getProductionData(){
    return model.user.findAll({
      
      where:{
        isAdmin:false,
        isVerified:null,
        isSelected:true

      }
    })
  }
   
  async currentUser(id){
    return model.user.findAll({
      
      where:{
        id:id
      }
    })    
  }
}


module.exports = () => {
    return new getdataController();
  };
  