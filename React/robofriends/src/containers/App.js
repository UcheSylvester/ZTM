import React, { Component } from "react";
import { connect } from 'react-redux'

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundry";

import { setSearchField, requestRobots } from '../action'
// import { requestRobots } from "../reducers";

const mapStateToProps = state => {
  console.log(state)
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  }
}

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: []
  //   };
  // }

  componentDidMount() {
    // console.log(this.props.store.getState())
    this.props.onRequestRobots()
  }

  render() {
    const { searchField, onSearchChange, robots, isPending, error } = this.props;

    // filtering robots
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    // using ternary to check for the when request is still pending
    return isPending ?
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
      )

    // if (isPending) {
    //   return <h2 className="error-message tc">loading...</h2>
    // } else if (!isPending && robots) {
    //   return (
    //     <div className="tc">
    //       <h1 className="f1">RoboFriends</h1>
    //       <SearchBox searchChange={onSearchChange} />
    //       <Scroll>
    //         <ErrorBoundary>
    //           <CardList robots={filteredRobots} />
    //         </ErrorBoundary>
    //       </Scroll>
    //     </div>
    //   )
    // } else {
    //   return <h1>{error}</h1>
    // }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
