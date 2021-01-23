import React from 'react';
import {Route , Redirect} from 'react-router-dom'


function ProtectedRoute({component:Component}){
  return (<Route render={(props) =>{
    if (typeof localStorage.getItem('session') === "string" ){
      return <Component/>
    }
    else{
      return( <Redirect to ={{ pathname :'/', state:{from :props.location} } }
      />)}

  }}
  />)
}
  export default ProtectedRoute;
