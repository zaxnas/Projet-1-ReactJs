import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <div style = {{maxWidth:'100%',maxHeight:'50px',textAlign:'center',background:'gold'}}>
            <p>Need Help : <Link to="/">yoamb97@gmail.com</Link></p>
        </div>
    )
}
