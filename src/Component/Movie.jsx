import React, { Component } from 'react'
import DisgnPage from './DisgnPage.jsx'
import '../style/DisgnPage.css'
import { withRouter } from 'react-router-dom'

class Movie extends Component {
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
            <div className = "container-fluid mov-presentation">          
                <div style={{flex:1,flexDirection:'row',display:'flex',justifyContent:"space-around",flexWrap:"wrap",margin:'0px 7em',color:'white'}}>
                    {this.props.title===''&&this.props.arrayMovie.filter(item=>item.title.toLowerCase().includes(this.props.search.toLowerCase()))
                    .map(m => <DisgnPage msa = {m} key = {m.title} GetBuy ={this.GetBuy} />)}
                </div>    
            </div>
        )
    }
}
export default withRouter(Movie);
