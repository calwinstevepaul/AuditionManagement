var model=require('../models')


class updateController{
  async addaudio(url,id,song){
    return model.audio.create({
      userId:id,
      song: song,
      audio: url
    })
  }
  
  async changeIsSelected(id,isSelected){
    return model.user.update({
      isSelected:isSelected
    },{
      where:{
        id:id
      }
    }
    )
  }

  async changeIsVerified(id,isVerified){
    return model.user.update({
      isVerified:isVerified
    },{
      where:{
        id:id
      }
    }
    )
  }
}


module.exports = () => {
    return new updateController();
  };
   