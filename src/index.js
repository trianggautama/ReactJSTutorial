import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import {createStore} from 'redux'
import { Provider } from 'react-redux';

//default state global
const globalState = {
  'totalOrder' : 0
}
//reducer Redux
const rootReducer = (state = globalState, action) =>{
  switch(action.type)
  {
    case 'HANDLE_PLUS':
      return{
        ...state,
        'totalOrder': state.totalOrder + 1
      }
    case 'HANDLE_MINUS':
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
//store Redux 
const storeRedux = createStore(rootReducer)

ReactDOM.render(
 <Provider store={storeRedux} ><Home/></Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
