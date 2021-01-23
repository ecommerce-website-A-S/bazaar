import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Signout from './components/verifiedUsers/features/signout.jsx';
import Navbar from './components/unverifiedUsers/navbar.jsx';
import Homepage from './components/unverifiedUsers/Homepage.jsx';
import Items from './components/unverifiedUsers/Items.jsx';
import Delete from './components/verifiedUsers/features/delete.jsx';
import Button from '@material-ui/core/Button';
import Upload from './components/verifiedUsers/features/upload.jsx';
import Update from './components/verifiedUsers/features/update.jsx';
import Profile from "./components/verifiedUsers/profile.jsx"
import SignIn from './components/unverifiedUsers/signIN.jsx'
import SignUP from './components/unverifiedUsers/SignUP.jsx'
import LoggedIn from './components/verifiedUsers/loggedinpage.jsx'
import Items2 from './components/verifiedUsers/Itemslog.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'



function App (){
  return (

    <Router>
      <div className="container">




        <br/>

        <Switch>


          <Route exact path="/" component={Homepage}/>
          <Route exact path="/Items" component={Items} />

          <Route path="/signIN" component={SignIn}/>
          <Route path="/SignUP" component={SignUP}/>
          <Route path="/profile" component={Profile} />
          <Route path="/loggedIn" component={LoggedIn} />
          <Route path="/upload" component={Upload} />
          <Route path="/Items3" component={Items2} />
          <Route path="/SignOut" component={Signout} />
          <Route path="/edit/:id" exact component={Update} />





        </Switch>

      </div>
    </Router>
  );
}



ReactDOM.render( <App/>, document.getElementById('app'));


