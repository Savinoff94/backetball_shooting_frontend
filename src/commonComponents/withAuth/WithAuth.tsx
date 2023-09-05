import { useContext, useEffect } from 'react';
import { Context } from '../../index';
// import {observer} from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';


// type WithAuthType = (redirectPath: string, componentToProtect: JSX.Element) => JSX.Element;


// const WithAuth:WithAuthType = function (redirectPath, componentToProtect) {
function WithAuth (redirectPath: string, componentToProtect: JSX.Element) : JSX.Element {
 
  const {store} = useContext(Context);

  useEffect(() => {

    if(localStorage.getItem('token')) {

      store.checkAuth()
    }
  },[]);

  if(store.isAuth) {

    return componentToProtect;
  }
  else {
    
    return <Navigate to={redirectPath} replace />;
  }
}


export default WithAuth;