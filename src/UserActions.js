import axios from 'axios';

export function getUsers() {
    
    // Redux Thunk middleware allows you to write action creators that return a function instead of an action.
    // The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
    // The inner function receives the store methods dispatch and getState as parameters.
    return (dispatch) => {        

        // show loading 
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            console.log(res.data);
            dispatch({type:"GET_USERS", data:res.data})
        })
        
    }
}
