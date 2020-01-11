import React from "react"
import { Route } from "react-router-dom"
import PropTypes from "prop-types";

const AppRoute = props => {
  const { component: Component, layout: Layout, ...rest } = props;
  return (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
  );
}

export default AppRoute;