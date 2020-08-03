import React, { Component } from 'react'
import ProductionUnit from './Comp/ProductionUnit'
import Moderators from './Comp/Moderators'
import Navbar from './Comp/Navbar'


export class AdminHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            page:1

        }
    }
    
    changePage=(value)=>{
        this.setState({
            page:value
        })
    }
    renderSwitch(param) {
        switch(param) {
          case 1:return <Moderators/>
          case 2:return <ProductionUnit />
          default:return 
        }
    }
    render() {
        return (
            <div className="home">
                <Navbar changePage={this.changePage} {...this.props}/>  
                <div className="body">
                    {this.renderSwitch(this.state.page)}
                </div>                            
            </div>
        )
    }
}

export default AdminHome
