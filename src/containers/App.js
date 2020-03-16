import React from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';



class App extends React.Component  {
    constructor()
    {
        super()
        this.state = {
            robots: [],
            searchfield:''
            
        }
        
    } 
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>  response.json())
        .then(users =>    this.setState( {robots: users}));
        console.log('kekorni')
    }  
    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
        

    }
 render (){
        const filteredRobots = this.state.robots.filter(robot =>{
        return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    })

        return (
            <div className = 'tc'>
                <h1 className = 'f1'>Robo Friends</h1>
                <SearchBox searchChange= {this.onsearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots = {filteredRobots}/>
                    </ErrorBoundry>
                    
                </Scroll>
                
            </div>
        );


    }
    


}

export default App;