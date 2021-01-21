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
        this.refs.averageInputMovie.value = 0
        this.refs.priceInputMovie.value = 0
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
        this.refs.averageInputSerie.value = 0
        this.refs.priceInputMovie.value = 0
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
        this.refs.averageInputAnime.value = 0
        this.refs.priceInputMovie.value = 0
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
            <div className = "container-fluid" style={{}}>
                <div className = "row" style = {{}}>
                    <div style={{flex:1,flexDirection:'column',display:'flex',alignContent:'center',flexWrap:"wrap",margin:'0px 7em',marginTop:'20vh'}} > 
                        <h3 style= {{fontFamily:'Lobster',fontSize:'40px' ,color:'white'}}><strong><i>Add Movie</i></strong></h3> 
                        <input
                            type="text"
                            onChange ={e => this.setState({image:e.target.value})}
                            ref = 'imageInputMovie'
                            placeholder = "Enter your Picture ..."
                            className = "form-control" 
                            style = {{width:'300px' ,border:'solid 2px black'}} />
                        <br/><br/>
                        <input 
                            type="text"
                            onChange = {e => this.setState({title:e.target.value})}
                            ref = 'titleInputMovie'
                            placeholder = "Enter your Title of Movie ..."
                            className = "form-control" 
                            style = {{width:'300px' ,border:'solid 2px black'}} />
                            <br/><br/>
                        <input 
                            type="number"
                            onChange = {e => this.setState({average:e.target.value})}
                            ref = 'averageInputMovie'
                            placeholder = "Enter The Average ..."
                            className = "form-control" 
                            style = {{width:'300px' ,border:'solid 2px black'}} />
                        <br/><br/>
                        <input 
                            type="number"
                            onChange = {e => this.setState({price:e.target.value})}
                            ref = 'priceInputMovie'
                            placeholder = "Enter the Price ..."
                            className = "form-control" 
                            style = {{width:'300px' ,border:'solid 2px black'}} />
                        <br/><br/>      
                        <input 
                            type="button"     
                            value = "Update"
                            onClick = {this.UpdateMovie}
                            className = "btn btn-warning"/> 
                    </div>
                <div style={{flex:1,flexDirection:'column',display:'flex',alignContent:'center',flexWrap:"wrap",margin:'0px 7em',marginTop:'20vh'}}> 
                        <h3 style= {{fontFamily:'Lobster',fontSize:'40px' ,color:'white'}}><strong><i>Add Serie</i></strong></h3>    
                        <input
                            type="text"
                            onChange ={e => this.setState({image:e.target.value })}
                            ref = 'imageInputSerie'
                            placeholder = "Enter your Picture ..." 
                            className = "form-control" 
                            style = {{width:'300px' ,border:'solid 2px black'}} />
                        <br/><br/>
                        <input 
                            type="text"
                            onChange = {e => this.setState({title:e.target.value})}
                            ref = 'titleInputSerie'
                            placeholder = "Enter your Title of Serie ..."
                            className = "form-control" 
                            style = {{width:'300px' ,border:'solid 2px black'}} />
                            <br/><br/>
                        <input 
                            type="number"
                            onChange = {e => this.setState({average:e.target.value})}
                            ref = 'averageInputSerie'
                            placeholder = "Enter The Average ..."
                            className = "form-control" 
                            style = {{width:'300px' ,border:'solid 2px black'}} />
                        <br/><br/>   
                        <input 
                            type="number"
                            onChange = {e => this.setState({price:e.target.value})}
                            ref = 'priceInputSerie'
                            placeholder = "Enter the Price ..."
                            className = "form-control" 
                            style = {{width:'300px' ,border:'solid 2px black'}} />
                        <br/><br/>      
                        <input 
                            type="button"     
                            value = "Update"
                            onClick = {this.UpdateSerie}
                            className = "btn btn-warning"/> 
                    </div>
                    <div style={{flex:1,flexDirection:'column',display:'flex',alignContent:'center',flexWrap:"wrap",margin:'0px 7em',marginTop:'20vh'}}>
                    <h3 style= {{fontFamily:'Lobster',fontSize:'40px' ,color:'white'}}><strong><i>Add Anime</i></strong></h3>          
                    <input
                            type="text"
                            onChange ={e => this.setState({image:e.target.value})}
                            ref = 'imageInputAnime'
                            placeholder = "Enter your Picture ..."
                            className = "form-control" 
                            style = {{width:'300px' ,border:'solid 2px black'}}  />
                        <br/><br/>
                        <input 
                            type="text"
                            onChange = {e => this.setState({title:e.target.value})}
                            ref = 'titleInputAnime'
                            placeholder = "Enter your Title of Anime ..."
                            className = "form-control" 
                            style = {{width:'300px' ,border:'solid 2px black'}} />
                            <br/><br/>
                        <input 
                            type="number"
                            onChange = {e => this.setState({average:e.target.value})}
                            ref = 'averageInputAnime'
                            placeholder = "Enter The Average ..."
                            className = "form-control" 
                            style = {{width:'300px' ,border:'solid 2px black'}} />
                        <br/><br/>   
                        <input 
                            type="number"
                            onChange = {e => this.setState({price:e.target.value})}
                            ref = 'priceInputAnime'
                            placeholder = "Enter the Price ..."
                            className = "form-control" 
                            style = {{width:'300px' ,border:'solid 2px black'}} />
                        <br/><br/>      
                        <input 
                            type="button"     
                            value = "Update"
                            onClick = {this.UpdateAnime}
                            className = "btn btn-warning"/> 
                    </div> 
                </div>
                <br/><br/><br/>
                <div className='container'><Link className = "btn btn-primary  btn-block"  to = "/">Login</Link></div>
                         
            </div>
        )
    }
}
export default withRouter(Admin)
