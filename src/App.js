import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }
    )
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterestMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">

        <h1>Monsters Roledex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filterestMonsters} />

      </div>
    );
  }
}

export default App;
