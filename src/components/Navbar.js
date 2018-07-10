import React from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" dark expand="md">
          <div className="container">
            {/*<NavbarBrand href="/">Beginner's Project</NavbarBrand>*/}
            <Link to="/" className="navbar-brand text-uppercase">Project Pemula</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/translator" className="nav-link text-uppercase">Translator</Link>
                </NavItem>
                <NavItem>
                  <Link to="/calculator" className="nav-link text-uppercase">Calculator</Link>
                </NavItem>
                <NavItem>
                  <Link to="/currency" className="nav-link text-uppercase">Currency</Link>
                </NavItem>
                {/*<NavItem>
                  <Link to="/calculator" className="nav-link">File Converter</Link>
                </NavItem>*/}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}