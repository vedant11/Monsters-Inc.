import React,{Component} from 'react';
import CardList from './CardList';
import {monsters} from './monsters';
import SearchBox from './SearchBox'

class App extends Component{
    render(){
        return(
            <div>
                <h1 className="strong tc bg-light-green pv5 ma0">Monsters,Inc.</h1>
                <SearchBox/>
                <CardList monsters={monsters}/>
            </div>
        )
    }
}

export default App;
