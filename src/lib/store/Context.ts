import { createContext } from "react";
import { Action, State, initState } from "./reducer";

const Context = createContext<[State, React.Dispatch<Action>]>([initState, () => { }]);


export default Context;
