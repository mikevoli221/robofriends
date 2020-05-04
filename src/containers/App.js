import React from "react";
import './App.css';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
// import {robotsData} from './robotsData';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    
    render(){
        const {searchField, robots} = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        
        return !robots.length ? <h1 className= 'f1 tc'>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className= 'f1'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robotsData = {filteredRobots}/>
                    </Scroll>
                </div>
            ) 
    }
}

export default App;