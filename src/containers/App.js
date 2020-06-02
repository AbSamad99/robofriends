import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { setSearchField, requestRobots } from '../actions';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBox from '../components/ErrorBoundry';

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, robots, onSearchChange } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1 className="tc f1">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBox>
              <CardList robots={filteredRobots} />
            </ErrorBox>
          </Scroll>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

const mapDisapatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

export default connect(mapStateToProps, mapDisapatchToProps)(App);
