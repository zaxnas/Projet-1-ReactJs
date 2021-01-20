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
import './DisgnPage.css'




class Main extends Component {

    constructor(props){
        //localStorage.setItem('users',JSON.stringify({email:"admin123",passWord:"admin123"})); 
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
                    price:10
                },
                {
                    image:'../image/the mome.jpg',
                    title:'The Mome',
                    average:3.5,
                    price:12
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
                    price:9
                },
                {
                    image:'../image/this.jpg',
                    title:'This',
                    average:8.1,
                    price:16
                },
                {
                    image:'../image/Greenland.jpg',
                    title:'GreenLand',
                    average:7,
                    price:16
                },
                {
                    image:'../image/mortal.jpg',
                    title:'Mortal',
                    average:6.1,
                    price:13
                },
                {
                    image:'../image/corona.jpg',
                    title:'Corona',
                    average:1.1,
                    price:12
                },
                {
                    image:'../image/tenet.jpg',
                    title:'Tenet',
                    average:2.8,
                    price:13
                },
                {
                    image:'../image/samson.jpg',
                    title:'Sanson',
                    average:8.3,
                    price:11
                },
                {
                    image:'../image/bloodshot.jpg',
                    title:'BloodShot',
                    average:4,
                    price:12
                },
                {
                    image:'../image/michel ange.jpg',
                    title:'Michel Ange',
                    average:7.5,
                    price:7
                },
                {
                    image:'../image/blue story.jpg',
                    title:'Blue Story',
                    average:7.5,
                    price:15
                },
                {
                    image:'../image/avenger1.jpg',
                    title:'The Avengers',
                    average:9.6,
                    price:15
                },
                {
                    image:'../image/avenger2.jpg',
                    title:'Avengers A.O.Ultron',
                    average:8.7,
                    price:22
                },
                {
                    image:'../image/avenger3.jpg',
                    title:'Avengers Infinity War',
                    average:9.2,
                    price:20
                },
                {
                    image:'../image/avenger4.jpg',
                    title:'Avengers EndGame',
                    average:10,
                    price:25
                },
                {
                    image:'../image/CapitaineAmerica.jpg',
                    title:'Captain America',
                    average:7.6,
                    price:15
                },
                {
                    image:'../image/antman.jpg',
                    title:'Antman & Bee',
                    average:6.8,
                    price:10
                },
                {
                    image:'../image/bad-boy.jpg',
                    title:'Bad Boy for Life',
                    average:6.0,
                    price:11
                },
                {
                    image:'../image/mia.jpg',
                    title:'Mia',
                    average:6.5,
                    price:7
                },
                {
                    image:'../image/spider.jpg',
                    title:'Spider',
                    average:6.1,
                    price:9
                },
                {
                    image:'../image/jumaji.jpg',
                    title:'Jumanji',
                    average:5.2,
                    price:14
                },
                {
                    image:'../image/deadpool.jpg',
                    title:'Deadpool',
                    average:5.2,
                    price:14
                },
                {
                    image:'../image/ponpei.jpg',
                    title:'Pompei',
                    average:4,
                    price:4
                },
                {
                    image:'../image/shazam.jpg',
                    title:'Shazam',
                    average:4.5,
                    price:6
                },
                {
                    image:'../image/world.jpg',
                    title:'World',
                    average:6.5,
                    price:9
                },
                {
                    image:'../image/war.jpg',
                    title:'War',
                    average:8,
                    price:12
                },
                {
                    image:'../image/roma.jpg',
                    title:'Roma',
                    average:5.8,
                    price:7
                },
                {
                    image:'../image/ibiza.jpg',
                    title:'Ibiza',
                    average:9.0,
                    price:21
                },
                {
                    image:'../image/town.jpg',
                    title:'Town',
                    average:7.9,
                    price:17
                },
                {
                    image:'../image/aquaman.jpg',
                    title:'Aquaman',
                    average:7.4,
                    price:16
                },


                
            ],
            arraySerie:[
                {
                    image:'../image/lucifer.jpg',
                    title:'Lucifer',
                    average:9.6,
                    price:8
                },
                {
                    image:'../image/the 100.jpg',
                    title:'The 100',
                    average:6.7,
                    price:7
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
                    price:14
                },
                {
                    image:'../image/snowPiercer.jpg',
                    title:'SnowPiercer',
                    average:7.5,
                    price:13
                },
                {
                    image:'../image/ambrella.jpg',
                    title:'The umbrella academy',
                    average:3.6,
                    price:3
                },
                {
                    image:'../image/siren.jpg',
                    title:'Siren',
                    average:7.1,
                    price:10
                },
                {
                    image:'../image/elite.jpg',
                    title:'Elite',
                    average:5.5,
                    price:11
                },
                {
                    image:'../image/casa.jpg',
                    title:'Casa de Papel',
                    average:9,
                    price:22
                },
                {
                    image:'../image/you.jpg',
                    title:'You',
                    average:6.9,
                    price:8
                },
                {
                    
                    image:'../image/freinds.jpg',
                    title:'Friends',
                    average:7.9,
                    price:16
                },
                {
                    image:'../image/got.jpg',
                    title:'Game of Thrones',
                    average:8.8,
                    price:19
                },
                {
                    //
                    image:'../image/hoc.jpg',
                    title:'House of Cards',
                    average:4.5,
                    price:11
                },
                {
                    
                    image:'../image/ga.jpg',
                    title:'Greys Anatomy',
                    average: 3.7,
                    price: 13
                },
                {
                    
                    image:'../image/dexter.jpg',
                    title:'Dexter',
                    average:6.7,
                    price:9
                },
                {
                    
                    image:'../image/dh.jpg',
                    title:'Dr House',
                    average:7.6,
                    price:15
                },
                {
                    
                    image:'../image/deshous.jpg',
                    title:'Desperate Housewives',
                    average:2,
                    price:3
                },
                {
                    
                    image:'../image/tbbt.jpg',
                    title:'The Big Bang Theory',
                    average:10,
                    price:25
                },
                {
                    
                    image:'../image/mad man.jpg',
                    title:'Mad Men',
                    average:6.1,
                    price:11
                },
                {
                    
                    image:'../image/twd.jpg',
                    title:'The Walking Dead',
                    average:7,
                    price:15
                },
                
               
            ],
            arrayAnime:[
                {
                    image:'../image/disenchantment.jpg',
                    title:'Disenchantment',
                    average:6.9,
                    price:10
                },
                {
                    image:'../image/big mouth.jpg',
                    title:'Big Mouth',
                    average:4,
                    price:10
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
                {
                    image:'../image/fb.jpg',
                    title:'Fullmetal Alchemist',
                    average:9,
                    price:22
                },
                {
                    image:'../image/cg.jpg',
                    title:'Code Geass',
                    average:7.9,
                    price:19
                },
                {
                    image:'../image/bleach.jpg',
                    title:'Bleach',
                    average:9.9,
                    price:24
                },
                {
                    image:'../image/pp.jpg',
                    title:'Psycho-Pass',
                    average:5.5,
                    price:8
                },
                {
                    image:'../image/naruto.jpg',
                    title:'Naruto',
                    average:7,
                    price:18
                },
                {
                    image:'../image/dn.jpg',
                    title:'Death Note',
                    average:9,
                    price:23
                },
                {
                    image:'../image/dbz.jpg',
                    title:'Dragon Ball Z',
                    average:6.9,
                    price:16
                },
                {
                    image:'../image/ns.jpg',
                    title:'Naruto Shippûden',
                    average:8,
                    price:13
                },
                {
                    image:'../image/op.jpg',
                    title:'One Piece',
                    average:10,
                    price:100
                },
                {
                    image:'../image/bl.jpg',
                    title:'Black Lagoon',
                    average:2.1,
                    price:3
                },
                {
                    image:'../image/bb.jpg',
                    title:'Black Butler',
                    average:7.1,
                    price:16
                },
                {
                    image:'../image/ft.jpg',
                    title:'Fairy Tail',
                    average:9,
                    price:20
                },
                {
                    image:'../image/aot.jpg',
                    title:'Attack Of Titan',
                    average:8.1,
                    price:15
                },
                {
                    image:'../image/hxh.jpg',
                    title:'Hunter × Hunter',
                    average:6,
                    price:12
                },
                {
                    image:'../image/pokemon.jpg',
                    title:'Pokémon',
                    average:5,
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
       
        if(email === 'admin123' && password === 'admin123')
        {
            this.props.history.push('/admin')

        }
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
            else if(email === 'admin123' && password === 'admin123')
            {
                alert('Welcome Administrator')
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
        const temp = {title: obj.title,image: obj.image,price:obj.price}
        let price = this.state.totalPrice + obj.price
        this.setState({
            msaBuy:[...this.state.msaBuy,temp],
            totalPrice: price 
        })
        //console.log(temp);
        //console.log(obj);
        //console.log(this.state.msaBuy);       
    }
    Delete = (title,price) => {
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
                            <h1 style= {{fontFamily:'Lobster',fontSize:'55px' ,color:'white'}}><strong><i>Best movies of the moment</i></strong></h1> 
                            <div>
                            <input 
                                type = "text" 
                                value = {this.state.search} 
                                onChange = {e => this.setState({search:e.target.value})}
                                className = "form-control"
                                placeholder = "Search ...."
                                style = {{float : 'right',marginRight:'8em',width:'450px' ,border:'solid 2px black'}} />
                            </div>
                            <br/><br/>
                            <Movie 
                                arrayMovie = {this.state.arrayMovie} 
                                search = {this.state.search} 
                                title = {this.state.title}
                                Buy = {this.Buy}/>
                            <Footer/>
                        </Route>
                        <Route path="/serie">
                            <Header user={this.state.loggedUser}/>
                            <h1 style= {{fontFamily:'Lobster',fontSize:'55px' ,color:'white'}}><strong><i>Best series of the moment</i></strong></h1> 
                            <input 
                                type = "text" 
                                value = {this.state.search} 
                                onChange = {e => this.setState({search:e.target.value})}
                                className = "form-control"
                                placeholder = "Search ...."
                                style = {{float : 'right',marginRight:'8em',width:'450px' ,border:'solid 2px black'}}  />
                            <br/><br/>
                            <Serie 
                            arraySerie = {this.state.arraySerie} 
                            search = {this.state.search} 
                            title = {this.state.title}
                            Buy = {this.Buy}/>
                            <Footer/>
                        </Route>
                        <Route path="/anime">
                            <Header user={this.state.loggedUser}/>
                            <h1 style= {{fontFamily:'Lobster',fontSize:'55px' ,color:'white'}}><strong><i>Best anime of the moment</i></strong></h1> 
                            <input 
                                type = "text"
                                value = {this.state.search} 
                                onChange = {e => this.setState({search:e.target.value})}
                                className = "form-control"
                                placeholder = "Search ...."
                                style = {{float : 'right',marginRight:'8em',width:'450px' ,border:'solid 2px black'}}  />
                            <br/><br/>
                            <Anime 
                            arrayAnime = {this.state.arrayAnime} 
                            search = {this.state.search} 
                            title = {this.state.title}
                            Buy = {this.Buy}/>
                            <Footer/>
                        </Route>
                        <Route path="/purchase">
                            <Header user={this.state.loggedUser}/>
                            <h1 style= {{fontFamily:'Lobster',fontSize:'55px' ,color:'white'}}><strong><i> Your order :  <span>{this.state.totalPrice}$</span></i></strong></h1> 
                            <input 
                            type = "text" 
                            value = {this.state.search} 
                            onChange = {e => this.setState({search:e.target.value})}
                            className = "form-control "
                            placeholder = "Search ...."
                            style = {{marginRight:'8em',float : 'right',width:'450px' ,border:'solid 2px black'}}  /> 
                            <br/><br/>
                            <Purchase
                             msaBuy = {this.state.msaBuy}
                             search = {this.state.search}
                             title = {this.state.title}
                             Delete = {this.Delete}/>
                        </Route>
                    </Switch>
                </div>
            
        )
    }
}
export default withRouter(Main)