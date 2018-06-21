import React, { Component } from 'react';
import './App.css';
import NavBar from "../src/js/NavBar";
import JobSearchContent from "./js/JobSearchContent";
import Footer from "../src/js/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <JobSearchContent />
        {/*<Footer />*/}
      </div>
    );
  }
}

export default App;
