import React,{Component} from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import { searchField } from '../Action';

const mapStateToProps=(state)=>{
    return{
        searchField: state.searchField              //we dont need to dot up into the reducers because we have only one reducer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onSearchChange:(event)=>dispatch(searchField(event.target.value))
    }
}


class App extends Component{                    //defining the class
    constructor(){
        super()                                 //mandatory
        this.state={
            monsters:[],                        //kept empty to be edited later
            }
        }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')  //API for user data
        .then(response=>response.json())                        //converted to JSON file
        .then(users=>{this.setState({monsters:users})});        //monsters state changed to that received
        }

    render(){
        const {monsters}=this.state;                //destructuring
        const {searchField, onSearchChange}=this.props;             //searchField now comes as props due to Redux usage
        const newList=monsters.filter(monster=>{                //filtering monsters list according to search keyword input
        return monster.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !monsters.length?<h1>Loading...(Check your internet connection)</h1>:   //in JS, 0 is false
        (
            <div>
                <h1 id="title" className="tc bg-light-green pv5 ma0">Monsters,Inc.</h1>
                <p className="tc">Search by name: </p>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList monsters={newList}/>
                </Scroll>
            </div>
        );
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(App);
