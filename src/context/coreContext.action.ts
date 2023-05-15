import { CoreState } from "./coreContext.interface";

 

//these are the type of the actions where each action will update a part of the core state.
export enum CoreActionTypes {
    SET_USER_NAME = 'SET_USER_NAME',
    SET_NOTIFICATION = 'SET_NOTIFICATION' 
}

//this type is the parameter type when interacting with core state
export interface CoreActions {
    type: CoreActionTypes;
    payload: CoreState;
}