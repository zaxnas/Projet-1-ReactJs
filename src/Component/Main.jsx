import React, { Component } from 'react'
import { withRouter,Switch , Route } from 'react-router-dom'
import Header from './Header'
import Movie from './Movie'
import Serie from './Serie'
import Purchase from './Purchase'
import Anime from './Anime'
import Login from './Login'
import Admin from './Admin'
import Footer from './Footer'
import Registration from './Registration'




class Main extends Component {

    constructor(props){
        super(props)
        this.state = {
            usersAccountInMain:[],
            loggedUser:'',
            search:'',
            title:'',
            msaBuy:[],
            totalPrice:0,
            arrayMovie:[
                {
                    image:'../image/gladiator.jpg',
                    title:'Gladiator',
                    average:7.8,
                    price:10.90
                },
                {
                    image:'../image/the mome.jpg',
                    title:'The Mome',
                    average:3.5,
                    price:12.50
                },
                {
                    image:'../image/hunger game.jpg',
                    title:'Hunger Games',
                    average:9.0,
                    price:11
                },
                {
                    image:'../image/de gaule.jpg',
                    title:'De Gaule',
                    average:5.4,
                    price:9.99
                },
                {
                    image:'../image/this.jpg',
                    title:'This',
                    average:8.1,
                    price:16.15
                },
            ],
            arraySerie:[
                {
                    image:'../image/lucifer.jpg',
                    title:'Lucifer',
                    average:9.6,
                    price:8.00
                },
                {
                    image:'../image/the 100.jpg',
                    title:'The 100',
                    average:6.7,
                    price:7.99
                },
                {
                    image:'../image/the witcher.jpg',
                    title:'The Witcher',
                    average:4.5,
                    price:15
                },
                {
                    image:'../image/breakind bad.jpg',
                    title:'Breaking Bad',
                    average:9.1,
                    price:14.99
                },
                {
                    image:'../image/snowPiercer.jpg',
                    title:'SnowPiercer',
                    average:7.5,
                    price:13.99
                },
            ],
            arrayAnime:[
                {
                    image:'../image/disenchantment.jpg',
                    title:'Disenchantment',
                    average:6.9,
                    price:10.45
                },
                {
                    image:'../image/big mouth.jpg',
                    title:'Big Mouth',
                    average:4,
                    price:10.75
                },
                {
                    image:'../image/the simpsons.jpg',
                    title:'The Simpsons',
                    average:10,
                    price:13
                },
                {
                    image:'../image/bojack horseman.jpg',
                    title:'Bojack Horseman',
                    average:3.3,
                    price:12
                },
                {
                    image:'../image/baki.jpg',
                    title:'Baki',
                    average:6.4,
                    price:11
                },
            ]
        }
    } 
    
    GetLogin = (account) => {
        this.setState({
            usersAccountInMain:[...this.state.usersAccountInMain,account]
        })
    }
    GetUpdateMovie = (m) => {
        this.setState({
            arrayMovie:[...this.state.arrayMovie,m]
        })
    }
    GetUpdateSerie = (s) => {
        this.setState({
            arraySerie:[...this.state.arraySerie,s]
        })
    }
    GetUpdateAnime = (a) => {
        this.setState({
            arrayAnime:[...this.state.arrayAnime,a]
        })
    }

    EnterInSite = (email,password) => {

        let accountIsTrue = JSON.parse(localStorage.getItem('users'))
        if(accountIsTrue)
        {
            let account = accountIsTrue.find((u) => u.email === email)
            if(account)
            {
                if(account.passWord === password)
                {
                    this.props.history.push('/movie')
                    alert('Welcome')
                }
                else
                {
                    alert('Password is wrong')
                }
            }
            else
            {
                alert('Account not exist')
            }
        }

        /*let obj=this.state.usersAccountInMain.find((u)=>u.email===email);
        if(obj!==undefined){
            if(obj.passWord===password ){  
                this.setState({
                    loggedUser:obj
                })
                 this.props.history.push({
                     pathname:'/movie'
                 })
            }
            else{
             alert('Passeword invalid')
            }
        }
        else if(email === 'admin123' && password === 'admin123')
        {
            this.props.history.push({
                pathname:'/admin'
            })
        }
        else{
         alert('not welcom')
        }
        */
        
    }
    Buy = (obj) => {
        const temp = {title: obj.title,image: obj.image}
        let price = this.state.totalPrice + obj.price
        this.setState({
            msaBuy:[...this.state.msaBuy,temp],
            totalPrice: price 
        })
        //console.log(temp);
        //console.log(obj);
        //console.log(this.state.msaBuy);       
    }
    Delete = (title,price ) => {
        let temp = this.state.totalPrice - price
        this.setState({
            msaBuy : this.state.msaBuy.filter(movSerAni => movSerAni.title !== title ),
            totalPrice:temp
        })
        
    }
   

    render() {
        return (
            
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Login EnterInSite = {this.EnterInSite}/>
                        </Route>
                        <Route path="/registration">
                            <Registration BtnLogin = {this.GetLogin}/>
                        </Route> 
                        <Route exact path="/admin">
                            <Admin arrayMovie = {this.state.arrayMovie} UpdateMovie = {this.GetUpdateMovie} 
                                   arraySerie = {this.state.arraySerie} UpdateSerie = {this.GetUpdateSerie}
                                   arrayAnime = {this.state.arrayAnime} UpdateAnime = {this.GetUpdateAnime}/>
                        </Route>
                        <Route  path="/movie">
                            <Header user={this.state.loggedUser}/>
                            <h1>movie</h1> 
                            <input 
                                type = "text" 
                                value = {this.state.search} 
                                onChange = {e => this.setState({search:e.target.value})} />
                            <Movie 
                                arrayMovie = {this.state.arrayMovie} 
                                search = {this.state.search} 
                                title = {this.state.title}
                                Buy = {this.Buy}/>
                            <Footer/>
                        </Route>
                        <Route path="/serie">
                            <Header user={this.state.loggedUser}/>
                            <h1>Serie</h1>
                            {/**/}<input type = "text" value = {this.state.search} onChange = {e => this.setState({search:e.target.value})} />
                            <Serie 
                            arraySerie = {this.state.arraySerie} 
                            search = {this.state.search} 
                            title = {this.state.title}
                            Buy = {this.Buy}/>
                            <Footer/>
                        </Route>
                        <Route path="/anime">
                            <Header user={this.state.loggedUser}/>
                            <h1>anime</h1>
                            {/**/}<input type = "text" value = {this.state.search} onChange = {e => this.setState({search:e.target.value})} />
                            <Anime 
                            arrayAnime = {this.state.arrayAnime} 
                            search = {this.state.search} 
                            title = {this.state.title}
                            Buy = {this.Buy}/>
                            <Footer/>
                        </Route>
                        <Route path="/purchase">
                            <Header user={this.state.loggedUser}/>
                            <h1>purchase</h1>
                            {/**/}<input type = "text" value = {this.state.search} onChange = {e => this.setState({search:e.target.value})} />
                            <br/>
                            <span>{this.state.totalPrice}$</span>
                            <Purchase
                             msaBuy = {this.state.msaBuy}
                             search = {this.state.search}
                             title = {this.state.title}
                             Delete = {this.Delete}/>
                            <Footer/>
                        </Route>
                    </Switch>
                </div>
            
        )
    }
}
export default withRouter(Main)