// Import React libraries
import React, { Component } from 'react';

// Import components
import ProfileCardList from './components/ProfileCardList';

// Import CSS
import './App.css';

class App extends Component {
  state = {
    userData: [],
    title: 'Randos'
  };

  loadData = async () => {
    const response = await fetch('https://randomuser.me/api/?results=6');
    const data = await response.json();
    return data.results;
  };

  handleClick = async () => {
    const newUserData = await this.loadData();

    this.setState({
      userData: newUserData
    });
  };

  async componentDidMount() {
    const userData = await this.loadData();

    this.setState({
      userData: userData
    });
  }

  render() {
    const { title, userData } = this.state;
    return (
      <div className="App">
        <h1>{title}</h1>
        <button onClick={this.handleClick}>Load New People</button>
        <ProfileCardList userData={userData} />
      </div>
    );
  }
}

export default App;
