import React from 'react'
import '../style/DisgnPage.css'

export default function DisgnPage(props) {

    const SetVoteClass = (vote) => {
        if( vote >= 8 && vote <= 10){
            return "green"
        }
        else if(vote >= 5 && vote <= 7){
            return "orange"
        }
        else if (vote >= 0 && vote <= 4){
            return "red"
        }
        

    }
    
    /*function a(){
        props.temp(props.key)
    }*/
    return (
        <div className ="" style = {{padding:'5px',position:"relative"}}>
                <img className = "imgMSA" src={props.msa.image}  alt="img" />
                <h5>{props.msa.title}</h5>
                <h5 className="heading-4">{props.msa.price}$ <span className = {` tag ${SetVoteClass(props.msa.average)}`} style={{marginLeft:'10px',borderRadius:'5px'}} ><strong>{props.msa.average > 11 || props.msa.average < 0 ? 'N.A' : props.msa.average }</strong></span></h5> 
                { <input type="button"
                 value="Buy Now !" 
                 onClick={()=>{props.GetBuy(props.msa )}}
                 className = "btn btn-secondary btn-block"/>   }
        </div>
    )
}
