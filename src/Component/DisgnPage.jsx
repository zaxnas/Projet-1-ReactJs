import React from 'react'
import './DisgnPage.css'

export default function DisgnPage(props) {

    const SetVoteClass = (vote) => {
        if( vote >= 8){
            return "green"
        }
        else if(vote >= 5){
            return "orange"
        }
        else{
            return "red"
        }
    }
    
    /*function a(){
        props.temp(props.key)
    }*/
    return (
        <div className ="" style = {{maxWidth:'200px',maxHeight:'300px',padding:'2px'}}>
                <img src={props.msa.image}  alt="img" style={{maxWidth:'180px',maxHeight:'300px',padding:'2px'}}/>
                <h3>{props.msa.title}</h3>
                <h4 className="heading-4">{props.msa.price}$ <span className = {`tag ${SetVoteClass(props.msa.average)}`} style={{marginLeft:'10px'}}>{props.msa.average}</span> </h4> 
                { <input type="button" value="Buy Now !" onClick={()=>{props.GetBuy(props.msa )}} />   }
        </div>
    )
}
