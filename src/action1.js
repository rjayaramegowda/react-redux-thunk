export function createEvent(newEvent, history) {
    
    // Redux Thunk middleware allows you to write action creators that return a function instead of an action.
    // The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
    // The inner function receives the store methods dispatch and getState as parameters.
    return (dispatch) => {
        // show loading 
        dispatch({
            type: 'CREATE_EVENT_IN_PROGRESS'
        });
    }
}

