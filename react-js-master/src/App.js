/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import defaultPicture from './components/img/default.jpg'

const Materialize = window.Materialize

const APP_TITLE = 'Awesome App'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS } from './utils/api'

//components
import WeatherCard from './components/WeatherCard'

class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            weather: undefined,
            city: ''
        }
    }


    //method triggered by onSubmit event of the form or by onClick event of the "Weather?" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchWeather = async ( event ) => {

        event.preventDefault()

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            var request = require('request-promise');

            var options = {
              headers: {'X-Mashape-Key':''},
              url: 'https://api.whatdoestrumpthink.com/api/v1/quotes/random',
              dataType:'json',
              type:'GET',
            };

            request.get(options).then(function(body){
            var json = JSON.parse(body);
            document.getElementById("quote").innerHTML ="<i>" +json.value+"</i>";
            })


            
            

        }
        catch ( error ) {
            Materialize.toast( error, 8000, 'error-toast' )
            console.log( 'Failed fetching data: ', error )
        }

    }
   

}

export default App
