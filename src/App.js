import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'
import axios from 'axios'

class App extends Component {

    //
    // state = {
    // venues: []
    // }





    componentDidMount() {
   this.getVenues()
    }

    getVenues = () => {
   const endPoint = "https://api.foursquare.com/v2/venues/explore?"
   const parameters = {
       client_Id: 'KHTJD2NIVGZQXKNSJBOCSTUZGKPK3QBFAWXXUNH1C24AHBNT',
       clientSecret: 'Q2I3I2W4OMA4M4OYA4Z2EGXSSFTE1PCWL4QB0KJPZR02JIIW',
       query: 'food',
       near:'Jackson Heights',
       v: '20190226'

   }

   axios.get(endPoint + new URLSearchParams(parameters))
       .then(response => {
           console.log(response)
       })

       .catch(error =>{
           console.log("ERROR " + error)
           })

}


    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

        </header>
        <Map/>
      </div>
    );
  }
}

export default App;
