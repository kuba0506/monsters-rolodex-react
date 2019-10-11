import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/search-box/SearchBox';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
        this.setState({ monsters: response });
    }

    onSearch = e => {
        this.setState({ searchField: e.target.value });
    };

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox onSearch={this.onSearch} placeholder="search monsters" />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
