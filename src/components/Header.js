import React,{Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopBar from "./TopBar"
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import AboutMe from "../pages/AboutMe";


class App extends Component {


  render(){
 
  
    return (
       <Router>
    <div className="App">
    <TopBar/>

               <Switch>
               <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>

          <Route path="/AboutMe">
            <AboutMe/>
          </Route>
        </Switch>
    </div>
     </Router>
  )
  }



}


export default App;
