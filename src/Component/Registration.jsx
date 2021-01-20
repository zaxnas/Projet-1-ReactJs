import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Link} from 'react-router-dom'

 class Registration extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            passWord : '',
            confirmPassWord : '',
            email : '',
            registre:[]
        }
    } 
    ValidEmail = (testEmail) => {
        // eslint-disable-next-line no-useless-escape
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regEmail.test(testEmail))
        {
            return alert('Invalid Email Address')
        }
        return this.setState({testEmail:testEmail})
    }
    SaveStateToLocalStorage = () => {
        let emailval = {e:this.state.email}
        let user = {email:this.state.email,passWord:this.state.passWord}
        if(localStorage.getItem('users')){
            let stockAccount = JSON.parse(localStorage.getItem('users'))
            if(stockAccount.find((u)=> u.email === this.state.email))
            {
                alert("User exist")
            }
            else{
                this.ValidEmail(emailval)
                stockAccount = [...stockAccount,user]
                localStorage.setItem('users',JSON.stringify(stockAccount))
                this.props.history.push('/') 
            }
        }
        else{
            localStorage.setItem('users',JSON.stringify([user]))
        }
    }

    BtnLogin = () => {
        if (this.state.email !== '' && this.state.passWord === this.state.confirmPassWord)
        {
            alert('User was signed up')
            this.SaveStateToLocalStorage()  
            this.props.history.push('/')    
        }
        else{
            alert('Something went wrong during registrition')
        }
        this.props.BtnLogin();
        /* 
        let account = {name:this.state.name,passWord:this.state.passWord,email:this.state.email}//like[]
        this.setState({
            registre:[...this.state.registre,account],
            name:'',
            passWord : '',
            confirmPassWord : '',
            email : ''
        })         
        this.props.BtnLogin(account);
        */

    }
    render() {
        return (
            <div className="container-fluid bgRegistration">
                <div className = "row justify-content-center" style = {{height:'100vh'}}>
                    <div className = "col-12 col-sm-6 col-md-3">
                        <form className = "from-container" style={{background : "white",padding : "30px" , borderRadius:"10px",boxShadow:"0px 0px 5px 0px #000",position:"relative",top:"10vh",}}>
                            <h1 style ={{marginBottom:"30px"}}>Registration</h1>
                            <div className = "form-group">
                                <input type="text"
                                placeholder = "Enter your User Name ..."
                                value = {this.state.name}
                                onChange = {e => this.setState({name:e.target.value})}
                                className="form-control"/>
                            </div>
                            <br/>
                            <div className = "form-group">
                                <input type="password"
                                placeholder = "Enter your PassWord ..."
                                value = {this.state.passWord}
                                onChange = {e => this.setState({passWord:e.target.value})}
                                className="form-control"/>   
                            </div>  
                            <br/>
                            <div className = "form-group">   
                                <input type="password"
                                placeholder = "Confirm your PassWord ..."
                                value = {this.state.confirmPassWord}
                                onChange = {e => this.setState({confirmPassWord:e.target.value})}
                                className="form-control"/> 
                            </div> 
                            <br/>
                            <div className = "form-group">
                                <input type="email"
                                placeholder = "Mail..."
                                value = {this.state.email}
                                onChange = {e => this.setState({email:e.target.value})}
                                className="form-control"/>
                            </div> 
                            <br/>
                            <div>
                                <input type="button" 
                                value = "Sign Up"
                                onClick = {this.BtnLogin}
                                className="btn btn-primary btn-block"/>  
                            </div>
                            <br/>
                            <Link className="btn btn-danger btn-block"  to = "/">login</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Registration);
