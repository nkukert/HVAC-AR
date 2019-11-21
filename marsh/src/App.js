import React from 'react';
import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Welcome to the development build of MARSH!
        </p>
        <Button
          variant="info"
          href="https://reactjs.org"
          size="lg"
        >
          Get Started
        </Button>
      </header>
    </div>
  );
}

export default App;
