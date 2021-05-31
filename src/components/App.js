import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import NewPost from './NewPost';
import MyPosts from './MyPosts';
import MyMessages from './MyMessages';
import NewMessage from './NewMessage';


const App = () => {

    const [currentUser, setCurrentUser] = useState('regular seller')
    const [currentPassword, setCurrentPassword] = useState('asdf')
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

                    <Route exact path='/Home' render={() => <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
                    <Route exact path='/Register' render={() => <Register currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
                    <Route exact path='/login' render={() => <Login currentUser={currentUser} setCurrentUser={setCurrentUser} currentPassword={currentPassword} setCurrentPassword={setCurrentPassword}/>} />
                    <Route exact path='/NewPost' render={() =>  <NewPost currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
                    <Route exact path='/MyPosts' render={() =>  <MyPosts currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
                    <Route exact path='/MyMessages' render={() =>  <MyMessages currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
                    <Route exact path='/NewMessage' render={() =>  <NewMessage currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />

                </section>
                <section id="sidenav">
                    
                    {navStatus ? <Navbar 
                                    currentUser={currentUser} 
                                    setCurrentUser={setCurrentUser}
                                    currentPassword={currentPassword}
                                    setCurrentPassword={setCurrentPassword}
                                    /> : ''}

                </section>
            </main>
        </Router>
    </div>
    
}

export default App;
