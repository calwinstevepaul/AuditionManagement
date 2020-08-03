import React, { Component } from 'react'
import {authApi} from '../../apiCall'

 import UserAudio from './UserAudio';


export class Moderators extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userData:[]
        }
    }
    componentDidMount(){
        this.getAudio()
    }
    getAudio=()=>{
        authApi.post("/getdata/user",{}).then((res)=>{
            this.setState({
                userData:res.data
            })
        })
    }
    
    render() {
        return (
            <div className="moderators">
            <table>
                <tr >
                    <th>NAME</th> 
                    <th>SONGS</th>
                    <th>SELECT / REJECT </th>
                    
                </tr>
                {this.state.userData.map((data)=>{
                    return <UserAudio data={data} getAudio={this.getAudio}/>   
                        
                    
                })}  
            </table>   
             
            </div>
        )
    }
}

export default Moderators
