import React, { Component } from 'react'
import {authApi} from '../../apiCall'


export class AddPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isSelected:null,
            isVerified:null,
            status:"",
            userInfo:{}
            
        }
    }
    componentDidMount(){
        this.getCurrentUserInfo()       
    }
    setValue=()=>{
        this.setState({
            isSelected:this.state.userInfo.isSelected,
            isVerified:this.state.userInfo.isVerified
        })     
        this.checkStatus()  
    }
    checkStatus=()=>{
        if(this.state.isSelected === true && this.state.isVerified === true){
            this.setState({
                status:"SELECTED"
            })
        }
        else if(this.state.isSelected === false || this.state.isVerified === false){
            this.setState({
                status:"REJECTED"
            })
        }
        else{
            this.setState({
                status:"Pending..."
            })
        }
    }
    getCurrentUserInfo=()=>{
        authApi.post("/getdata/currentUser",{}).then((res)=>{
            this.setState({
                userInfo:res.data[0]
            })            
            
            this.setValue()

        })

    }

    render() {
       
        return (
            <div className="info">
                <div className="info-inner"> 
                    <div className="info-display-2">
                        <h3>Status:</h3>
                        <table className="user-table">
                            <tr>
                                <th>NAME</th>
                                <th>SELECTED</th>
                                <th>VERIFIED</th>
                                <th>STATUS</th>

                            </tr>
                            <tr>
                                <td>
                                    {this.state.userInfo.name}
                                </td>
                                <td>
                                    {
                                        this.state.isSelected === null 
                                    ? 
                                        <></>
                                    :
                                        this.state.isSelected?<p className="selected"><i class="fas fa-check"></i></p>:<p className="rejected"><i class="fas fa-times"></i></p> 
                                    }
                                </td>

                                <td>
                                {
                                        this.state.isVerified === null 
                                    ? 
                                        <></>
                                    :
                                        this.state.isVerified?<p className="selected"><i class="fas fa-check"></i></p>:<p className="rejected"><i class="fas fa-times"></i></p> 
                                    }
                                </td>

                                <td><strong>{this.state.status}</strong></td>

                            </tr>
                        </table>

                    </div>
                    
                </div>

            </div>
              
        )
    }
}

export default AddPost
