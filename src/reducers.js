import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js' //to keep it string instead of variable to avoid undetectable errors.

const initialStateSearch={        //initial state
    searchField:''
}

export const searchMonsters=(state=initialStateSearch,action={})=>{
    switch(action.type){
        case CHANGE_SEARCHFIELD:
            return Object.assign({},state,{searchField:action.payload});//creating new State with a modified property
        default:
            return state;
    }
}

const initialStateRequest={
    isPending:false,
    monsters:[],
    error:''
    
}
export const requestMonsters=(state=initialStateRequest,action={})=>{
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({},state,{isPending:true})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({},state,{isPending:false,error:action.payload})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({},state,{isPending:false,monsters:action.payload})           
        default:
            return state;          
    }
}