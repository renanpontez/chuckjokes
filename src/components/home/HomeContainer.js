import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/jokesAction';
import HomeComponent from './HomeComponent';
import * as jokesApi from '../../api/jokesApi';
import SimpleLoading from '../_common/loadings/SimpleLoading';
import JokesComponent from './JokesComponent';
import AppContext from '../_common/contexts/AppContext';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: null
    }
  }

  componentDidMount() {
    let _self = this;

    jokesApi.getCategories().then(res => {
      if(res.status == 200) {
        _self.setState({ categories: res.data });
      }
    });
  }

  getRandomJoke = (categoryId) => {
    const _self = this;

    if(categoryId == -1) {
      return _self.props.actions.updateJoke(null);
    }

    jokesApi.getRandomJoke(categoryId).then(res => {
      return _self.props.actions.updateJoke(res.data);
    });
  }


  render() {
    if(!this.state.categories) return <SimpleLoading padding={5}/>;
    
    return (
      <>
        <AppContext.Provider 
          value={{ 
            categories: this.state.categories,
            joke: this.props.joke, 
            getRandomJoke: this.getRandomJoke 
          }}>

          <HomeComponent />
        { this.props.joke && <JokesComponent /> }
        </AppContext.Provider>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { joke: state.joke }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);