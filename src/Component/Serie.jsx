import React, { Component } from 'react'
import DisgnPage from './DisgnPage'
import './DisgnPage.css'
import { withRouter } from 'react-router-dom'

class Serie extends Component {
    constructor(props){
        super(props)
        this.state= {

        }
    }
    GetBuy = (obj)=>{
        this.props.Buy(obj)
    }
    
    render() {
       
        return (
            <div className = "container mov-presentation">
                          
                <div>
                    {this.props.title===''&&this.props.arraySerie.filter(item=>item.title.toLowerCase().includes(this.props.search.toLowerCase()))
                    .map(m => <DisgnPage msa = {m} key = {m.title} GetBuy ={this.GetBuy} />)}
                </div>
                 
            </div>
        )
    }
}
export default withRouter(Serie);
