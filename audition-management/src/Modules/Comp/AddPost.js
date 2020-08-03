import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'



export class AddPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            audio:[],
            song:""
        }
    }

  
    submit=()=>{
        if(this.state.audio.length !== 0 && this.state.song !== ""){
            const formdata=new FormData();
            formdata.append("myaudio",this.state.audio);
            formdata.append("song",this.state.song);
            let config={
                headers: {
                    'content-type': 'multipart/form-data',
            
                }
            }
            authApi.post("/update/addsong",formdata,config)
            .then(res=>{
                console.log("image",res.data);
                swal({icon:"success",text:"Uploded!!"})           
    
    
            })

        }
        else{
            swal({icon:"error",text:"Please Uplode and fill all the fields!!"})           

        }
    }
    
    render() {
        return (
            <div className="info">
                <div className="info-inner"> 
                    <div className="info-display">
                        <label>Uplode Your Song</label>
                        <input type= "file"  onChange={(e)=>{this.setState({audio:e.target.files[0]})}} required/>

                        <label>Song Name</label>
                        <input type= "text" placeholder="Song Name" value={this.state.caption}  onChange={(e)=>{this.setState({song:e.target.value})}} required/>

                        
                        <button onClick={(e)=>{this.submit(e)}}>Uplode</button>

                    </div>
                    
                </div>

            </div>
              
        )
    }
}

export default AddPost
