const redux         =  require('redux')
const createStore   = redux.createStore

//default state
const initialState  = {
    value   : 0,
    age     : 18
}

//reducer : list action and logic
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_AGE' :
            return {
                ...state,
                age :state.age + 1
            }
        case 'CHANGE_VALUE' :
            return {
                ...state,
                value :state.value + action.newValue
            }
        default:
            return state
    }
  
}

//store : create container state
const store = createStore(rootReducer)
console.log(store.getState())

//subscription : monitoring state change
store.subscribe(()=>{
    console.log('store change :',store.getState())
})

//dispatching action : call action 
store.dispatch({type:'ADD_AGE'})
store.dispatch({type:'CHANGE_VALUE',newValue:13})
console.log(store.getState())


