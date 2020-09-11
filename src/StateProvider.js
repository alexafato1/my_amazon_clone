import { useReducer } from "react";

import React, {createContext, useContext} from 'react'

//this this the data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({reducer, initialState, children} )=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
    )

// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext)