import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBox from '../components/ErrorBoundry';

class App extends Component {
  constructor(){
    super();
    this.state={
      Robots:[],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=> this.setState({Robots:users}))
  }

  onSearchChange=(event)=> {
    this.setState({searchField:event.target.value})
  }

  render(){
    const filteredRobots=this.state.Robots.filter((Robots) => {
      return Robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    if(this.state.Robots.length===0){
      return <h1 className='tc f1'>Loading</h1>
    }
    else{
      return(
        <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <ErrorBox>
        <CardList Robots={filteredRobots} />
        </ErrorBox>
        </Scroll>
        </div>
      );
    }
  }
}

export default App;
