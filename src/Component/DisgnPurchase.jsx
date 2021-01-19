import React from 'react'


export default function DisgnPurchase(props) {

    
    return (
        <div className ="" style = {{maxWidth:'200px',maxHeight:'300px',padding:'2px'}}>
            <h3>{props.msa.title} 
                <i className = "fas fa-times" 
                    style = {{cursor:'pointer',float : 'right',color : 'red'}} 
                    onClick ={() => props.GetDelete(props.msa.title) } >
                </i>
            </h3>
            <img src={props.msa.image}  alt="img" style={{maxWidth:'180px',maxHeight:'300px',padding:'2px'}}/>
                
                
        </div>
    )
}
