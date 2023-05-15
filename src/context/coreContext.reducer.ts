import { CoreActionTypes, CoreActions } from "./coreContext.action";
import { CoreState } from "./coreContext.interface";


export const coreStateReducer = (state: CoreState, action: CoreActions): CoreState => {

    switch (action.type) {
        case CoreActionTypes.SET_NOTIFICATION:
            //each action type should update a specific && specific group of state
            return {...state, notification: {...action.payload.notification}}
        case CoreActionTypes.SET_USER_NAME:
            return {...state, userName: action.payload.userName}
        default:
        return state;
    }
    
}