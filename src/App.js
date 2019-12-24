import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'


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
        if(this.state.monsters.length===0){return <h1>Loading...</h1>}
        else{
        return(
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
}

export default App;
