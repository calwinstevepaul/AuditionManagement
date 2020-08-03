import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import {authApi} from '../../apiCall'
import swal from 'sweetalert'
export class UserAudio extends Component {
    changeIsSelected=(id,value)=>{
        authApi.post("/update/isSelected",{
            id:id,
            isSelected:value
        }).then(res=>{
            console.log(res)
            this.props.getAudio()
            swal({icon:"success",text:"Infomation Sent to Production unit!!"})           

        })
    }
    render() {
        return (
            <tr className="user-audio">
                
                <td className="user-audio-1">
                    {this.props.data.name.toUpperCase()}
                </td>
                <td className="user-audio-2">
                    {this.props.data.audios.length === 0 ? <p className="noAudio">No Audio</p>:
                        this.props.data.audios.map(x=>{
                            return  <div>
                                         {x.song}
                                        <ReactAudioPlayer
                                            src={x.audio}
                                            autoPlay={false}
                                            controls
                                        />
                                    </div> 
                        })
                    }
                </td>
                <td className="user-audio-3">
                    <button onClick={()=>this.changeIsSelected(this.props.data.id,true)}>Select</button>
                    <button onClick={()=>this.changeIsSelected(this.props.data.id,false)}>Reject</button>
                </td>
                
            </tr>
        )
    }
}

export default UserAudio
