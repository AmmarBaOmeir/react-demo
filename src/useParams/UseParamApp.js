import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Hero from './components/Hero'
// import FullCard from './components/FullCard'
import './UseParamApp.css'

function UseParamApp() {

    const data = [
        { title: "HTML" , description: "Welcome to Hybertext markup language"},
        { title: "CSS" , description: "Welcome to Cascading Style Sheets"},
        { title: "JS" , description: "Welcome to Javascript"},
        { title: "React" , description: "Welcome to React"},
        { title: "PHP" , description: "Welcome to PHP"},
        { title: "Angular" , description: "Welcome to Angular"}
    ]

    return (
        <Router>
            {/* <h1>Welcome to Heros App </h1> */}
            {/* <div className="use-param-app" style={{display: "block"}}>
                <Route exact path="/">
                        <Hero />
                </Route>

                <Route exact path="/">
                    <div className="use-param-app">
                        <FullCard />
                    </div>
                </Route>
            </div> */}

            <div style={{backgroundColor: '#636363', width: '50rem', padding: '1rem', borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}>
                <div style={{width: '5rem', display: 'inline', padding: '1rem'}}> User Name: </div>
                <div style={{width: '25rem', display: 'inline', padding: '1rem' }}><input type='text' style={{width: '25rem'}} /></div>
                <div style={{width: '5rem', display: 'inline',  padding: '1rem' }}><input type='button' value='Add'/></div>
            </div>

        </Router>
    )
}

export default UseParamApp
