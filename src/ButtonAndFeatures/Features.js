import React, { Component } from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import IntroPage from '../IntroPage/IntroPage';
import './Features.css';

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  render() {
    return (
      <div>
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="https://paulborawski.com/#about">
                  <span>ABOUT</span>
                </NavItem>
                <NavItem eventKey={1} href="https://github.com/iAmNawa">
                  <span>GITHUB</span>
                </NavItem>
                <NavItem eventKey={1} href="https://www.instagram.com/paulborawski14/">
                  <span>INSTAGRAM</span>
                </NavItem>
                <NavItem eventKey={2} href="https://paulborawski.com/#contact">
                  <span>CONTACT</span>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </CSSTransitionGroup>
      </div>

    );
  }
}

export default Features;
