import React, {Component} from 'react'
import {data} from './Data'

export default class Card extends Component {
    constructor() {
    super()
    this.state= {
        i: 0
    }
    // this.next = this.next.bind(this)
    // this.previous = this.previous.bind(this)
  }
  next(){
      this.setState({
          i: this.state.i + 1
      })
  }
  previous(){    
  this.setState({
      i: this.state.i - 1
   })
  }
  componentDidMount(){
      console.log('test', data)
  }


  render(){
      console.log(this.state.i)
      
      let {name, city, country, employer, title, favoriteMovies} = data[this.state.i]  
      return (
        <div>

                 <h1>{name.first} </h1>
                 <ul>From: {city} {country}</ul>
                 <ul>Job Title: {title} </ul>
                 <ul>Employer: {employer}</ul>
                   <ul > Favorite Movies:
                       <li>1. {favoriteMovies[0]}</li>
                       <li>2. {favoriteMovies[1]}</li>
                       <li>3. {favoriteMovies}[2]</li>
                   </ul>
                   <button onClick={() => this.previous()}>Previous</button>
                   <button onClick={() => this.next()}>Next</button>

        </div>

      )
  }
} 