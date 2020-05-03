//Libraries
import React from 'react';
import {Route} from 'react-router-dom';
//Styles
import './App.css';
//Components
import Aside from './component/Aside/Aside';
import ProfileContainer from "./component/Profile/ProfileContainer";
import MessagesContainer from "./component/Messages/MessagesContainer";
import UsersContainer from "./component/Users/UsersContainer";
import HeaderContainer from "./component/Header/HeaderContaineк";
import Login from "./component/Login/Login";

const App = props => {
  return (
      <div className="App">
          <HeaderContainer />
          <Aside/>
          <div className="content">
              <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
              <Route path='/messages' render={() => <MessagesContainer/>}/>
              <Route path='/users' render={() => <UsersContainer/>}/>
              <Route path='/login' render={() => <Login />}/>
          </div>
      </div>
  );
}

export default App;
