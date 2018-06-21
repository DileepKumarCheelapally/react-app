import React, { Component } from 'react';
import './App.css';
import NavBar from "../src/js/NavBar";
import JobSearchContent from "./js/JobSearchContent";
import Footer from "../src/js/Footer";

class App extends Component {

    state = {
        response: []
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/datalist');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        console.log(body);

        return body;
    };

  render() {
      console.log("render called");
      console.log(this.state.response);
    return (
      <div className="App">
        <NavBar />
        <JobSearchContent searchResults = {this.state.response} />
        {/*<Footer />*/}
      </div>
    );
  }
}

export default App;
