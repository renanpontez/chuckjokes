/* eslint-disable import/no-named-as-default */
import React from "react";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";
import Routes from './Routes';

class Main extends React.Component {
  render() {
    return (
      <>
        <Routes />
      </>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element
};

export default hot(module)(Main);