import React, { Component } from 'react'
import DisgnPage from './DisgnPage'
import '../style/DisgnPage.css'
import { withRouter } from 'react-router-dom'

class Anime extends Component {
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
            <div className = "container-fluide mov-presentation">          
                <div style={{flex:1,flexDirection:'row',display:'flex',justifyContent:"space-around",flexWrap:"wrap",margin:'0px 7em',color:'wheat'}}>
                    {this.props.title===''&&this.props.arrayAnime.filter(item=>item.title.toLowerCase().includes(this.props.search.toLowerCase()))
                    .map(m => <DisgnPage msa = {m} key = {m.title} GetBuy ={this.GetBuy} />)}
                </div>
                 
            </div>
        )
    }
}
export default withRouter(Anime);
