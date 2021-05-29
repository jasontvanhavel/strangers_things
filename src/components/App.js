import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Register from './Register'


const App = () => {

    const [navStatus, setNavStatus] = useState(false) 
    
    console.log(navStatus)

    return <div id ="app">
        <Router>
            <header>
                <h1>Logo Here!</h1>
                <div id="navs">
                    <label htmlFor="search-bar"></label>
                    <input type="text" id="search-bar" name="search-bar" placeholder="Search"></input>
                    <a className="hamburger" onClick={() => setNavStatus(!navStatus)} ><i className="material-icons">menu</i></a>
                </div>
            </header>
            <div id="header-border-bar"></div>
            <main>
                <section id="lefty"></section>
                <section id="content-main">

                    <Route exact path='/Home' render={() => <Home />} />
                    <Route exact path='/Register' render={() => <Register />} />

                </section>
                <section id="sidenav">
                    
                    {navStatus ? <Navbar /> : ''}

                </section>
            </main>
        </Router>
    </div>
    
}

export default App;
