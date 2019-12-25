import {CHANGE_SEARCHFIELD} from './constants';

const initialState={        //initial state
    searchField:''
}

export const searchMonsters=(state=initialState,action={})=>{
    switch(action.type){
        case CHANGE_SEARCHFIELD:
            return Object.assign({},state,{searchField:action.payload});//creating new State with a modified property
        default:
            return state;
    }
}