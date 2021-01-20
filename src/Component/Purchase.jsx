import React, { Component } from 'react'
import DisgnPurchase from './DisgnPurchase'
import { withRouter } from 'react-router-dom'

class Purchase extends Component {
    constructor(props){
        super(props)
        this.state= {

        }
    }
     
    GetDelete = (title,price)=>{
        this.props.Delete(title,price)
    }

    render() {
        return (
            <div style={{flex:1,flexDirection:'row',display:'flex',justifyContent:"space-around",flexWrap:"wrap",margin:'0px 7em',color:'white',height:'100%'}}>
                 {this.props.title===''&&this.props.msaBuy.filter(item=>item.title.toLowerCase().includes(this.props.search.toLowerCase()))
                .map(m => <DisgnPurchase msa = {m} key = {m.title} GetDelete ={this.GetDelete}/>)}
            </div>
        )
    }
}
export default withRouter(Purchase)