import React from 'react';
import JokesComponent from './JokesComponent';

class JokesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <>
        <JokesComponent />
      </>
    );
  }
}
export default JokesContainer;