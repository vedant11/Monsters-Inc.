import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'


class App extends Component{                    //defining the class
    constructor(){
        super()                                 //mandatory
        this.state={
            monsters:[],                        //kept empty to be edited later
            searchField:''
            }
        }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')  //API for user data
        .then(response=>response.json())                        //converted to JSON file
        .then(users=>{this.setState({monsters:users})});        //monsters state changed to that received
        }

    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value})         //function called on change in input html element
        }                                                        //||changes the searchField variable
        
    render(){
        const {monsters,searchField}=this.state;                //destructuring
        const newList=monsters.filter(monster=>{                //filtering monsters list according to search keyword input
        return monster.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !monsters.length?<h1>Loading...(Check your internet connection)</h1>:   //in JS, 0 is false
        (
            <div>
                <h1 id="title" className="tc bg-light-green pv5 ma0">Monsters,Inc.</h1>
                <p className="tc">Search by name: </p>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList monsters={newList}/>
                </Scroll>
            </div>
        );
        }
    }


export default App;
