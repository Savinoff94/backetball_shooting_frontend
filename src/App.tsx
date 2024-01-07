import React, { useContext, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EntranceMenu from './pages/EntranceMenu/EntranceMenu'
import SignUpPage from './pages/SignUp/SignUp_New'
import MainMenu from './pages/MainMenu/MainMenu';
import SignInPage from './pages/SignIn/SignIn'
import { Context } from '.';
import {observer} from 'mobx-react-lite';
import WithAuth from './commonComponents/withAuth/WithAuth';
import FriendsNew from './pages/Friends/FriendsNew';
import TrainingPage from './pages/TrainingPage/TrainingPage';
import MyStatisticsMenu from './pages/MyStatistics/MyStatisticsMenu';
import ManageMyShootingSetsTable from './pages/ManageMyShootingSetsTable/ManageMyShootingSetsTable';

// import { Sign } from 'crypto';

function App() {

  // const {store} = useContext(Context)

  // useEffect(() => {

  //   if(localStorage.getItem('token')) {

  //     store.checkAuth()
  //   }
  // },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<EntranceMenu/>} />
        <Route path="/signin" element = {<SignInPage/>} />
        <Route path="/signup" element = {<SignUpPage/>} />
        <Route path="/mainMenu" element = {WithAuth('/', <MainMenu/>)} />
        <Route path="/friends" element = {WithAuth('/', <FriendsNew/>)} />
        <Route path="/trainingPage" element = {WithAuth('/', <TrainingPage/>)} />
        <Route path="/myStatisics" element = {WithAuth('/', <MyStatisticsMenu/>)} />
        <Route path="/manageMyStatistics" element = {WithAuth('/', <ManageMyShootingSetsTable/>)} />
      </Routes>
    </div>
  );
}

export default observer(App);

