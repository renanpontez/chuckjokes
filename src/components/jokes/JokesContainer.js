import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/jokesAction';
import JokesComponent from '../home/JokesComponent';
import SimpleLoading from '../_common/loadings/SimpleLoading';
import * as jokesApi from '../../api/jokesApi';
import { withRouter } from 'react-router-dom'

class JokesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const _self = this;
    const categoryId = this.props.match.params.categoryId;

    jokesApi.getRandomJoke(categoryId).then(res => {
      _self.props.actions.updateJoke(res.data);
    });
  }

  render() {
    if(!this.props.joke) return <SimpleLoading />;

    return (
      <>
        <JokesComponent joke={this.props.joke} />
      </>
    );
  }
}


function mapStateToProps(state) {
  return {
    joke: state.joke,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JokesContainer));