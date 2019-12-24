import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'


class App extends Component{
    constructor(){
        super()
        this.state={
            monsters:[],
            searchField:''
        }
}
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{this.setState({monsters:users})});
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
                <h1 id="title" className="tc bg-light-green pv5 ma0">Monsters,Inc.</h1>
                <p className="tc">Search by name: </p>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList monsters={newList}/>
            </div>
        );
    }
}

export default App;
