import React,{Component} from 'react';
import CardList from './CardList';
import {monsters} from './monsters';
import SearchBox from './SearchBox'


class App extends Component{
    constructor(){
        super()
        this.state={
            monsters:monsters,
            searchField:''
        }
}

onSearchChange=(event)=>{
    this.setState({searchField:event.target.value})
}

    render(){
        const newList=this.state.monsters.filter(monster=>{
        return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return(
            <div>
                <h1 className="strong tc bg-light-green pv5 ma0">Monsters,Inc.</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList monsters={newList}/>
            </div>
        );
    }
}

export default App;
