import React, { Component } from 'react';

//import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import appCss from './App.css';
import Container from '../Container/Container';
import favicon from '../../assets/img/favicon.ico';

import axiosCurrent from '../../axios-current';

class App extends Component {

  state = {
    city: {
      data: null,
      location: null
    }
  }

  componentDidMount() {
    
  }

  clickHandler = () => {
    axiosCurrent.get('Rio de Janeiro')
      .then(res => {
        this.setState({
          city: {
            data: res.data.current,
            location: res.data.location
          }
        });
        
        console.log(this.state.city);
      });
  }

  render() {

    let cityInformation = <p>Selecione uma cidade!</p>

    if(this.state.city.location) {
      cityInformation = (
        <p>{this.state.city.location.name} / {this.state.city.location.country}</p>
        
      );
    }

    return (
      <Container>
        <div className={appCss.Nav}>
          <img className={appCss} src={favicon} alt="Logo" width="50" height="50" />
          <div className={appCss.Title}>React Weather App</div>
          <div className={appCss.Form}>
            <input type="text" placeholder="Pesquisar" className={appCss.Form}/>
            <button onClick={this.clickHandler}>Pesquisar</button>
          </div>
        </div>
        <div className={appCss.Card}>
          {cityInformation}
        </div>
      </Container>
    );
  }
}

export default App;
