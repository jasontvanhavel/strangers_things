import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';



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

                    <Home />

                </section>
                <section id="sidenav">
                    
                    {navStatus ? <Navbar /> : ''}

                </section>
            </main>
        </Router>
    </div>
    
}



ReactDOM.render(
    <App />, document.getElementById('root')
)