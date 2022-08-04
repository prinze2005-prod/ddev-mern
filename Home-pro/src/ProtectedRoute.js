import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Profile from './pages/client/profile/Profile';

export default function ProtectedRoute({isAuth: isAuth, component: Component, ...rest}) {
  return (

    <Route 
    {...rest}
    render= {(props) => {
        if(isAuth === "Client" && Component === Profile ){
            return <Component />;
        }else {
            return(
                <Redirect to={{pathname: "/", state: {from: props.location } }}/>
            );
        }
    }}
    />
  )
}
