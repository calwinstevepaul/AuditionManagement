import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'

export class UserProduction extends Component {
    changeIsVerified=(id,value)=>{
        authApi.post("/update/isVerified",{
            id:id,
            isVerified:value
        }).then(res=>{
            console.log(res)
            this.props.getUser()
            swal({icon:"success",text:"Sent Response !!"})           


        })
    }
    render() {
        return (
            <tr className="user-audio">
                
                <td className="user-audio-1">
                    {this.props.data.name.toUpperCase()}
                </td>
                <td className="user-audio-2">
                    {this.props.data.phoneNumber
                    }
                </td>
                <td className="user-audio-2">
                    {this.props.data.address
                    }
                </td>
                <td className="user-audio-3">
                    <button onClick={()=>this.changeIsVerified(this.props.data.id,true)}>Select</button>
                    <button onClick={()=>this.changeIsVerified(this.props.data.id,false)}>Reject</button>
                </td>
                
            </tr>
        )
    }
}

export default UserProduction
