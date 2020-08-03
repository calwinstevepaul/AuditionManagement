import React, { Component } from 'react'
import swal from 'sweetalert'
import '../LoginSignup.css'
import { plainApi } from '../../../apiCall'


export class SignupDiv extends Component {
    matchName = "^[A-z][A-z ]*[A-z]$";
    

    constructor(props) {
        super(props)
        this.state = {
            signupName: '',
            signupEmail: '',
            phoneNumber:'',
            address:'',
            error: '',
            passwordErr: '',
            
        }
    }

    eventHandle = (e) => {
        let value = e.target.value
        if (e.target.name === "signupEmail") {
            value = e.target.value.toLowerCase();
        }
        this.setState({
            [e.target.name]: value
        })
    }

    submit = (e) => {
        e.preventDefault();   
        plainApi.post("/auth/signup",{
            signupName:this.state.signupName, 
            signupEmail:this.state.signupEmail,
            phoneNumber:this.state.phoneNumber,
            address:this.state.address 
        }).then((res)=>{
            if(res.data.success)
                swal({text : "Sign up Successful!!!", icon: "success"})
        })
    }
   


    render() {
        return (
            <div>
                <div className="login-signup-div">
                    
                    <div>
                        <h1 className='logo-img' >Sign up</h1>
                    </div>
                    <div className="login-signup-div-inner">
                        <form onSubmit={(e) => this.submit(e)}>
                            {this.state.error 
                                ? 
                                    <p className='error'>{this.state.error}</p> 
                                : 
                                    <></>
                            }
                            {this.state.passwordErr 
                                ? 
                                    <p className='error'>{this.state.passwordErr}</p> 
                                :   
                                    <></>
                            }

                            <input 
                                name="signupName" 
                                onChange={(e) => this.eventHandle(e)} 
                                className="login-signup-div-input" 
                                placeholder="Full Name" 
                                value={this.state.signupName} 
                                maxlength="40" 
                                minLength="3" 
                                pattern={this.matchName} 
                                required
                            />
                            <input 
                                type="email" 
                                name="signupEmail" 
                                onChange={(e) => this.eventHandle(e)} 
                                className="login-signup-div-input" 
                                placeholder="Email" 
                                value={this.state.signupEmail} 
                                maxlength="40" 
                                minLength="3" 
                                required
                            />
                            <input 
                                type="number" 
                                className="login-signup-div-input" 
                                placeholder="Phone Number" 
                                name="phoneNumber" 
                                onChange={(e)=>this.eventHandle(e)} 
                                value={this.state.phoneNumber} 
                                maxlength="40" 
                                minLength="3" 
                                required
                            />
                            <input 
                                type="text" 
                                className="login-signup-div-input" 
                                placeholder="Address" 
                                name="address" 
                                onChange={(e)=>this.eventHandle(e)} 
                                value={this.state.address} 
                                maxlength="100" 
                                minLength="3" 
                                required
                            />
                           
                            <button 
                                type="submit" 
                                className="login-signup-div-button-2" 
                            >Sign up</button>
                           
                        </form>
                    </div>
                </div>
                <div className="login-signup-div-switch">
                    <p className="login-signup-div-para">Have an account?</p>
                    <button 
                        className="login-signup-div-button" 
                        onClick={() => this.props.changeLoginSignup(true)}
                    >Log In</button>
                </div>
            </div>
        )
    }
}

export default SignupDiv
