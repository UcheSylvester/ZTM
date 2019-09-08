import React, { Component } from "react";
import { connect } from 'react-redux'

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundry";

import { setSearchField } from '../action'

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    // console.log(this.props.store.getState())

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  // onSearchChange = event => {
  //   // setting searchField to be the search value
  //   this.setState({ searchField: event.target.value });
  // };

  render() {

    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;

    // filtering robots
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    // using ternary to check for the when there is robots
    return (!robots.length) ?
      <h2 className="error-message tc">loading...</h2> :
      (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
