import React, {Component} from 'react';
import './App.css';
import  Card from './Components/Card'

export default class App extends Component {
  constructor() {
    super()
   
     
    }


    render(){
      return(
      <div>
        <header>
          <nav>Home</nav>
          </header>
          <body>
            <Card />
          </body>
       </div>
      )

    }
  }
 


