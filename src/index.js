import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import NavbarLink from './components/NavbarLink'

const App = () => {
    return <div id ="app">
        <Router>
            <header>
                <h1>Logo Here!</h1>
                <div id="navs">
                    <label htmlFor="search-bar"></label>
                    <input type="text" id="search-bar" name="search-bar" placeholder="Search"></input>
                    <a className="hamburger"><i className="material-icons">menu</i></a>
                </div>
            </header>
            <div id="header-border-bar"></div>
            <main>
                <section id="content-main"></section>
                <section id="sidenav">
                    <NavbarLink text="link1" />
                </section>
            </main>
        </Router>
    </div>
}

ReactDOM.render(
    <App />, document.getElementById('root')
)