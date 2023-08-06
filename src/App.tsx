import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EntranceMenu from './pages/EntranceMenu/EntranceMenu'
import SignUpPage from './pages/SignUp/SignUp_New'
import MainMenu from './pages/MainMenu/MainMenu';
import SignInPage from './pages/SignIn/SignIn'
// import { Sign } from 'crypto';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<EntranceMenu/>} />
        <Route path="/signin" element = {<SignInPage/>} />
        <Route path="/signup" element = {<SignUpPage/>} />
        <Route path="/mainMenu" element = {<MainMenu/>} />
      </Routes>
    </div>
  );
}

export default App;
