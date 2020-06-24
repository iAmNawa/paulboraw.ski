import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
        <div onClick={this.props.changeClassName} className={this.props.onOrOffProp}>
          <div className='line-menu half start'></div>
          <div className='line-menu'></div>
          <div className='line-menu half end'></div>
        </div>
    )
  }
}

export default Button;
