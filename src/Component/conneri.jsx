import { withRouter , Link  } from 'react-router-dom'
import React, { Component } from 'react';

class Admin extends Component {
    constructor(props){
        super(props)
        this.state = {
           image:'',
           title:'',
           average:0,
           newAdd:[]
     
        }
        //this.inputRef = React.createRef();
    }
    UpdateMovie = () => {
        //console.log(this.props.inputRef)
        let addMovie = {image:this.state.image,title:this.state.title,average:this.state.average} 
        this.setState({
            newAdd:[],
            image:'',
            title:'',
            average:0
        })
        this.props.UpdateMovie(addMovie)
        
        // aide a faire une copie de la pour chaque update 
        /*this.setState({
            show:<InsertMovie
            arrayMovie = {this.props.arrayMovie} 
            onchangeImage = {this.setState({image:""})}
            onchangeTitle= {this.setState({title:""})}
            onchangeAverage = {this.setState({average:""})}/>
        })*/

        
    } 
    UpdateSerie = () => {
        let addSerie = {image:this.state.image,title:this.state.title,average:this.state.average}
        this.setState({
            newAdd:[...this.state.newAdd,addSerie],
            image:'',
           title:'',
           average:0
        })
        this.props.UpdateSerie(addSerie)
    }
    UpdateAnime = () => {
        let addAnime = {image:this.state.image,title:this.state.title,average:this.state.average}
        this.setState({
            newAdd:[...this.state.newAdd,addAnime],
           image:'',
           title:'',
           average:0
        })
        this.props.UpdateAnime(addAnime)
    }

    render() {

        return (
            <div> 
               <h1>Admin</h1> 
                    <input /*ref={this.inputRef}*/ type="text"
                    onChange ={e => this.setState({image:e.target.value})}
                    placeholder = "Enter your Picture ..."
                />
                  <br/><br/>
                    <input type="text"
                    onChange = {e => this.setState({title:e.target.value})}
                    placeholder = "Enter your Title of Movie ..."
                /><br/><br/>
                    <input type="text"
                    onChange = {e => this.setState({average:e.target.value})}
                    placeholder = "Enter The Avecrage ..."
                /><br/><br/>   
                <input type="button"     
                value = "Update"
                onClick = {this.UpdateMovie}/> <br/><br/>
               <br/><br/>         
               {/*<InsertMovie
                arrayMovie = {this.props.arrayMovie} 
                onchangeImage =  {e => this.setState({image:e.target.value})}
                onchangeTitle = {e => this.setState({title:e.target.value})}
                onchangeAverage = {e => this.setState({average:e.target.value})}/>
               
               <br/><br/>
               <InsertMovie arraySerie = {this.props.arraySerie}
                onchangeImage = {e => this.setState({image:e.target.value})}
                onchangeTitle = {e => this.setState({title:e.target.value})}
                onchangeAverage = {e => this.setState({average:e.target.value})}/>
               <input type="button" 
                value = "Update"
                onClick = {this.UpdateSerie}/>  
               <br/><br/>
               <br/><br/>
               <InsertMovie arrayAnime = {this.props.arrayAnime}
                onchangeImage = {e => this.setState({image:e.target.value})}
                onchangeTitle = {e => this.setState({title:e.target.value})}
                onchangeAverage = {e => this.setState({average:e.target.value})}/>
               <input type="button"
                value = "Update"
                onClick = {this.UpdateAnime}/>  */}
                  <br/><br/>

               <Link to = "/movie">movie</Link>
            </div>
        );
    }
}

export default withRouter(Admin)

