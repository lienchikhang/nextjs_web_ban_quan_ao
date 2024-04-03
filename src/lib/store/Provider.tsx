import Context from "./Context";
import React, { ReactNode } from 'react'
import { useReducer } from 'react';
import reducer, { initState } from "./reducer";

interface Props {
  children: ReactNode
}

const Provider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export default Provider