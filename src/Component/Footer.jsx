import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <div style = {{maxWidth:'100%',maxHeight:'50px',textAlign:'center',background:'gold',}}>
            <p style = {{margin:'0px'}}>Need Help : <Link to="/">yoamb97@gmail.com & Avi.izhak712@gmail.com</Link></p>
        </div>
    )
}
