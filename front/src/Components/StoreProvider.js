import React, { useReducer,  createContext } from 'react';
import reducer from "./reducer"

const initialState = {
    todo: { list: [], item: {} }
  };
  export const Store = createContext(initialState)
  
 const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  
  }
  export default StoreProvider;