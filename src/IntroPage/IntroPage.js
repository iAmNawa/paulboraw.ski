import React, { Component } from 'react';
import './IntroPage.css';

class IntroPage extends Component {
  state = {
    leftSide: 49.75,
    rightSide: 49.75
  }

  changeWidth

  componentDidMount() {
    document.querySelector('.scroll-bar').addEventListener('drag', this.changeWidth, false)
  }

  changeWidth = (e) => {
    let positionOfSlider = e.clientX / document.body.clientWidth;
    if (positionOfSlider !== 0) {
      console.log(100 - (positionOfSlider*100+1))
      this.setState({leftSide: positionOfSlider*100<25?25:positionOfSlider*100, rightSide: 100 - (positionOfSlider*100+1)<25?25:100 - (positionOfSlider*100+1)})
    }
  }

  render() {
    return (
      <div className="parent">
        <div style={{width: `${this.state.leftSide}%`}} className="firstNameParent">
            <div className="align-right">Drag{'<-'}</div>
            <div className="firstNameChild">PAUL</div>
        </div>
        <div style={{width: '.5%'}} draggable="true" className="scroll-bar"></div>
        <div style={{width: `${this.state.rightSide}%`}} className="lastNameParent"><div className="lastNameChild">BORAW.SKI</div></div>
      </div>
    )
  }
}

export default IntroPage;
