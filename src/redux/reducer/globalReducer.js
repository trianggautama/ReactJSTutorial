import globalActionType from "./globalActionType"

//default state global
const globalState = {
    'totalOrder' : 0
}

//reducer Redux
const rootReducer = (state = globalState, action) =>{
    switch(action.type)
    {
      case globalActionType.PLUS_ODER:
        return{
          ...state,
          'totalOrder': state.totalOrder + 1
        }
      case globalActionType.MINUS_ORDER:
        let totalOrder = 0
        if(state.totalOrder > 0)
        {
          return{
            ...state,
            'totalOrder': state.totalOrder - 1
          }
        }
  
        return{
          ...state,
          'totalOrder': totalOrder
        }
        
      default : return state
  
    }
  } 

  export default rootReducer