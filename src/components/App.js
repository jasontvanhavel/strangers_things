import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import NewPost from './NewPost';
import MyPosts from './MyPosts';
import MyMessages from './MyMessages';
import NewMessage from './NewMessage';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-uic-rm-web-ft';

let currentUser;

const App = () => {

    // const [currentUser, setCurrentUser] = useState('')
    const [navStatus, setNavStatus] = useState(false) 
    const [searchTerm, setSearchTerm] = useState('')
    const [currentUserState, setCurrentUserState] = useState('');

    return <div id ="app">
        <Router>
            <header>
                <img src={'./STlogo.png'}></img>
                <div id="navs">
                    <label htmlFor="search-bar"></label>
                    <input type="text" 
                            id="search-bar" 
                            name="search-bar" 
                            placeholder="Search" 
                            onChange={ (event) => {
                                setSearchTerm(event.target.value) }}></input>
                    <a className="hamburger" onClick={() => setNavStatus(!navStatus)} ><i className="material-icons">menu</i></a>
                </div>
            </header>
            <div id="header-border-bar"></div>
            <main>
                <section id="lefty"></section>
                <section id="content-main">

                    <Route exact path='/Home' render={() => <Home currentUser={currentUser} searchTerm={searchTerm}/>} />
                    <Route exact path='/Register' render={() => <Register currentUser={currentUser} setCurrentUserState={setCurrentUserState}/>} />
                    <Route exact path='/login' render={() => <Login currentUser={currentUser} setCurrentUserState={setCurrentUserState}/>} />
                    <Route exact path='/NewPost' render={() =>  <NewPost currentUser={currentUser} />} />
                    <Route exact path='/MyPosts' render={() =>  <MyPosts currentUser={currentUser} />} />
                    <Route exact path='/MyMessages' render={() =>  <MyMessages currentUser={currentUser} />} />
                    <Route exact path='/NewMessage' render={() =>  <NewMessage currentUser={currentUser} />} />

                </section>
                <section id="sidenav">
                    
                    {navStatus ? <Navbar 
                                    currentUser={currentUser} 
                                    currentUserState={currentUserState}
                                    setCurrentUserState={setCurrentUserState}
                                    /> : ''}

                </section>
            </main>
        </Router>
    </div>
    
}

export default App;
export {currentUser};
