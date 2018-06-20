import React, { Component } from 'react';
import './App.css';
import NavBar from "../src/js/NavBar";
import EmployeeSearchContent from "../src/js/EmployeeSearchContent";
import Footer from "../src/js/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <EmployeeSearchContent />
        <Footer />
      </div>
    );
  }
}

export default App;
