import React from 'react';
import logo from './logo.svg';
import { datos }  from '../../tasks.json';
import './Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
      super(props);
      this.state = { datos: datos};
    };
  render() {
      return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img  src={logo} className="App-logo" alt="logo" />
        {this.props.titulo}<span className="badge badge-pill badge-light ml-2">{this.state.datos.length}</span>
        </a>


      </nav>
      );
}

}

export default Navigation;
