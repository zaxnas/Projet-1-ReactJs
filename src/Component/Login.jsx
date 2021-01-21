import React, { Component } from 'react'
//import Registration from './Registration'
import { Link ,/*Redirect ,Route*/} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import '../style/DisgnPage.css'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
           userEmail:'',
           myPassWord:'',
        }
    }
    render() {
        return (
         
            <div className="container-fluid bgLogin">
                <div className = "row justify-content-center" style = {{height:'100vh'}} >
                    <div className = "col-12 col-sm-6 col-md-3">
                        <form className = "from-container" style={{background : "white",padding : "30px" , borderRadius:"10px",boxShadow:"0px 0px 5px 0px #000",position:"relative",top:"20vh"}}>
                            <h1 style ={{marginBottom:"30px"}}>Login</h1>
                            <div className = "form-group">
                                <input type="text"
                                value = {this.state.userEmail}
                                onChange = {e => this.setState({userEmail:e.target.value})}
                                placeholder = "Enter your User Name ..."
                                className="form-control"
                                />
                            </div>
                            <br/>
                            <div className = "form-group">
                                <input type="password"
                                value = {this.state.myPassWord}
                                onChange = {e => this.setState({myPassWord:e.target.value})}
                                placeholder = "Enter your PassWord ..."
                                className="form-control"
                                />
                            </div> 
                            <br/>
                            <div>
                            <input type="button" 
                                value = "Log in"
                                onClick = {()=>this.props.EnterInSite(this.state.userEmail,this.state.myPassWord)}
                                className="btn btn-primary btn-block"
                            />  
                            </div>
                            <br/>
                            <Link className="btn btn-danger btn-block" to = "/registration">Sign up</Link>
                            <br/>
                            <p style={{fontSize:'13px',color:'grey'}}>For administrator email :"admin123", password :"admin123"</p>
                        </form>
                    </div>
                </div>
                    
            </div>
           
        )
    }
}
export default withRouter(Login);

