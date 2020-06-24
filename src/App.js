import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import IntroPage from './IntroPage/IntroPage';
import Button from './ButtonAndFeatures/Button';
import Features from './ButtonAndFeatures/Features';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onOrOff: 'wrapper-menu'
    }
  }

  classNameChange = () => {
    if (this.state.onOrOff == 'wrapper-menu') {
      this.props.history.push('/features');
      this.setState({onOrOff: 'open wrapper-menu'});
    }
    if (this.state.onOrOff == 'open wrapper-menu') {
      this.props.history.push('/');
      this.setState({onOrOff: 'wrapper-menu'});
    }
  }

  render() {
    return (
        <div className="App">
          <Route path="/" component={IntroPage} />
          <Route path="/features" component={Features} />
          <Button changeClassName={this.classNameChange} onOrOffProp={this.state.onOrOff}/>
        </div>
    );
  }
}

export default withRouter(App);
