import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import UserProduction from './UserProduction'

export class ProductionUnit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userData:[]
        }
    }
    componentDidMount(){
        this.getUser()
    }
    getUser=()=>{
        authApi.post("/getdata/productiondata",{}).then((res)=>{
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
                    <th>PHONE NUMBER</th>
                    <th>ADDRESS</th>
                    <th>SELECT / REJECT </th>
                    
                </tr>
                {this.state.userData.map((data)=>{
                    return <UserProduction data={data} getUser={this.getUser}/> 
                        
                    
                })}  
            </table>   
             
            </div>
        )
    }
}

export default ProductionUnit
