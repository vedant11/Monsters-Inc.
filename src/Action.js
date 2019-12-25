import {CHANGE_SEARCHFIELD} from './constants.js' //to keep it string instead of variable to avoid undetectable errors.



export const searchField=(text)=>({
    type:CHANGE_SEARCHFIELD,
    payload:text
})