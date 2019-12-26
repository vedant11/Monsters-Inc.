import {
        CHANGE_SEARCHFIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_FAILED
} from './constants.js' //to keep it string instead of variable to avoid undetectable errors.



export const searchField=(text)=>({
    type:CHANGE_SEARCHFIELD,
    payload:text
})

export const requestMonsters=()=>(dispatch)=>{
        dispatch({type: REQUEST_ROBOTS_PENDING});
        fetch('https://jsonplaceholder.typicode.com/users')  //API for user data
            .then(response=>response.json()) 
            .then(data=>dispatch({payload:data,type:REQUEST_ROBOTS_SUCCESS}))
            .catch(error=>dispatch({payload:error, type: REQUEST_ROBOTS_FAILED}))
}