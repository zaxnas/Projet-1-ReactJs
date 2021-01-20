import React from 'react'
import './DisgnPage.css'

export default function DisgnPurchase(props) {

    return (
        <div className ="disgnpurchase" style = {{padding:'5px',position:"relative"}}>
            <h3>{props.msa.title} 
                <i className = "fas fa-times" 
                    style = {{cursor:'pointer',float : 'right',color : 'red',marginLeft:'10px'}} 
                    onClick ={() => props.GetDelete(props.msa.title,props.msa.price) } >
                </i>
            </h3>
            <img className ="imgMSA" src={props.msa.image}  alt="img"/>
                
                
        </div>
    )
}
