import React, { Component } from 'react'
import { withRouter , Link  } from 'react-router-dom'

class Admin extends Component {
    
    constructor(props){
        super(props)
        this.state = {
           image:'',
           title:'',
           average:0,
           price:0,
           newAdd:[],
           
        }
        
    }
    UpdateMovie = () => {
        //console.log(this.props.inputRef)
        let addMovie = {image:this.state.image,title:this.state.title,average:this.state.average,price:this.state.price} 
        this.refs.imageInputMovie.value = ""
        this.refs.titleInputMovie.value = ""
        this.refs.averageInputMovie.value = ""
        this.refs.priceInputMovie.value = ""
        this.setState({
            newAdd:[...this.state.newAdd,addMovie],
            image:undefined ,
            title:undefined,
            average:undefined,
            price:undefined
           
        })
        
        this.props.UpdateMovie(addMovie)  
    } 
    UpdateSerie = () => {
        let addSerie = {image:this.state.image,title:this.state.title,average:this.state.average,price:this.state.price}
        this.refs.imageInputSerie.value = ""
        this.refs.titleInputSerie.value = ""
        this.refs.averageInputSerie.value = ""
        this.refs.priceInputMovie.value = ""
        this.setState({
            newAdd:[...this.state.newAdd,addSerie],
            image:undefined ,
            title:undefined,
            average:undefined,
            price:undefined
           
        })
        
        this.props.UpdateSerie(addSerie)
    }
    UpdateAnime = () => {
        let addAnime = {image:this.state.image,title:this.state.title,average:this.state.average,price:this.state.price}
        this.refs.imageInputAnime.value = ""
        this.refs.titleInputAnime.value = ""
        this.refs.averageInputAnime.value = ""
        this.refs.priceInputMovie.value = ""
        this.setState({
            newAdd:[...this.state.newAdd,addAnime],
            image:undefined ,
            title:undefined,
            average:undefined,
            price:undefined
           
        })
        this.props.UpdateAnime(addAnime)
    }
    render() {
        return (
            <div>
                <h1>Admin</h1> 
                <h1>movie</h1> 
                <input
                    type="text"
                    onChange ={e => this.setState({image:e.target.value})}
                    ref = 'imageInputMovie'
                    placeholder = "Enter your Picture ..." />
                <br/><br/>
                <input 
                    type="text"
                    onChange = {e => this.setState({title:e.target.value})}
                    ref = 'titleInputMovie'
                    placeholder = "Enter your Title of Movie ..."/>
                    <br/><br/>
                <input 
                    type="text"
                    onChange = {e => this.setState({average:e.target.value})}
                    ref = 'averageInputMovie'
                    placeholder = "Enter The Avecrage ..."/>
                <br/><br/>
                <input 
                    type="text"
                    onChange = {e => this.setState({price:e.target.value})}
                    ref = 'priceInputMovie'
                    placeholder = "Enter the Price ..."/>
                <br/><br/>      
                <input 
                    type="button"     
                    value = "Update"
                    onClick = {this.UpdateMovie}/> 
               <br/><br/> <br/><br/>  
               <h1>serie</h1>   
               <input
                    type="text"
                    onChange ={e => this.setState({image:e.target.value })}
                    ref = 'imageInputSerie'
                    placeholder = "Enter your Picture ..." />
                <br/><br/>
                <input 
                    type="text"
                    onChange = {e => this.setState({title:e.target.value})}
                    ref = 'titleInputSerie'
                    placeholder = "Enter your Title of Movie ..."/>
                    <br/><br/>
                <input 
                    type="text"
                    onChange = {e => this.setState({average:e.target.value})}
                    ref = 'averageInputSerie'
                    placeholder = "Enter The Avecrage ..."/>
                <br/><br/>   
                <input 
                    type="text"
                    onChange = {e => this.setState({price:e.target.value})}
                    ref = 'priceInputSerie'
                    placeholder = "Enter the Price ..."/>
                <br/><br/>      
                <input 
                    type="button"     
                    value = "Update"
                    onClick = {this.UpdateSerie}/> 
               <br/><br/> <br/><br/>  
               <h1>anime</h1>         
               <input
                    type="text"
                    onChange ={e => this.setState({image:e.target.value})}
                    ref = 'imageInputAnime'
                    placeholder = "Enter your Picture ..." />
                <br/><br/>
                <input 
                    type="text"
                    onChange = {e => this.setState({title:e.target.value})}
                    ref = 'titleInputAnime'
                    placeholder = "Enter your Title of Movie ..."/>
                    <br/><br/>
                <input 
                    type="text"
                    onChange = {e => this.setState({average:e.target.value})}
                    ref = 'averageInputAnime'
                    placeholder = "Enter The Avecrage ..."/>
                <br/><br/>   
                <input 
                    type="text"
                    onChange = {e => this.setState({price:e.target.value})}
                    ref = 'priceInputAnime'
                    placeholder = "Enter the Price ..."/>
                <br/><br/>      
                <input 
                    type="button"     
                    value = "Update"
                    onClick = {this.UpdateAnime}/> 
               <br/><br/> <br/><br/>    
               <Link to = "/movie">movie</Link>            
            </div>
        )
    }
}
export default withRouter(Admin)
