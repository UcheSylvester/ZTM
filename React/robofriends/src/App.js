import React, { Component } from 'react'

import CardList from './CardList'
import SearchBox from './SearchBox'
import './App.css';
import { robots } from './robots'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        // setting searchField to be the search value
        this.setState({ searchField: event.target.value })
    }

    render() {
        // filtering robots
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        // console.log(filteredRobots)

        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        )
    }
}


export default App