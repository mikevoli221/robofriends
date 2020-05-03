import React from "react";
import CardList from './CardList';
import {robotsData} from './robotsData';
import SearchBox from "./SearchBox";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: robotsData,
            searchField: ''
        }
    }
    
    render(){
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox/>
                <CardList robotsData = {this.state.robots}/>
            </div>
        )  
    }
}

export default App;