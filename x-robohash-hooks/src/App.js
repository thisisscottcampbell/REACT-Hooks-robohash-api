import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll'
import './index.css'


const App = () => {

  // state = { 
  //   robots: [],
  //   searchfield: ''
  // }

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(robots => this.setState({ robots: robots }))
  // };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robots => setRobots(robots))
  },[])

  const onSearchChange = (event) => setSearchfield({ searchfield: event.target.value })

  
  //RENDER
  // render (){

    const filterBots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    
    return ( 
      
      robots.length === 0 ? 

      <h1>Loading...</h1> :

      <div className="App tc">
        <SearchBar onSearchChange={onSearchChange}/>
        <Scroll>
          <CardList robots={filterBots}/>
        </Scroll>
      </div>

    );
  // }
}

export default App;
