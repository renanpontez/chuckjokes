import React from 'react';
import { Switch } from "react-router-dom";
import AppRoute from './AppRoute';
import HomePage from "../home/HomeContainer";
import JokesPage from "../jokes/JokesContainer";
import DashboardLayout from "../_common/layouts/DashboardLayout"; 

const Routes = () => {
  return (
    <Switch>
      <AppRoute 
        exact 
        path="/" 
        layout={DashboardLayout} 
        component={HomePage}/>

      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  );
}
export default Routes;