import React,{Component} from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import { searchField,requestMonsters} from '../Action';


const mapStateToProps=(state)=>{
    return{
        searchField: state.searchMonsters.searchField,
        isPending:state.requestMonsters.isPending,
        monsters:state.requestMonsters.monsters,
        error:state.requestMonsters.error           
}
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onSearchChange:(event)=>dispatch(searchField(event.target.value)),
        onRequestMonsters:()=>dispatch(requestMonsters())
    }
}


class App extends Component{ 

    componentDidMount(){
        this.props.onRequestMonsters();
        }

    render(){
        const {searchField, onSearchChange,monsters,isPending}=this.props;             //searchField now comes as props due to Redux usage
        const newList=monsters.filter(monster=>{                //filtering monsters list according to search keyword input
        return monster.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending?<h1>Loading...(Check your internet connection)</h1>:   //in JS, 0 is false
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
