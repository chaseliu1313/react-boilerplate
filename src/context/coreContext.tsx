import React, { Dispatch, ReactElement, useReducer } from 'react';
import { CoreActions, CoreState, coreStateReducer } from '.';

//this is the main file for the coreState,
//a core state, is a app wide state managing pattern, where all component under the tree can acess this data without needing it to be passed down from parent
//this can be used for storing user status, jwt token etc. data is only stored within the session, can be used with db or other data persistence method

export const initCoreState: CoreState = {
  userName: '',
  notification: { shouldShow: false, message: '' }
};

type CoreContextProps = {
  coreState: CoreState;
  updateCoreState: Dispatch<CoreActions>;
};

const CoreContext = React.createContext<CoreContextProps>({} as CoreContextProps);

const CoreContextProvider = (props: { children: JSX.Element | JSX.Element[] }): ReactElement => {
  //react hook that can update more complex state comparing to useState
  const [state, dispatch] = useReducer(coreStateReducer, initCoreState);

  return (
    <CoreContext.Provider value={{ coreState: state, updateCoreState: dispatch }}>
      {props.children}
    </CoreContext.Provider>
  );
};
export { CoreContextProvider, CoreContext };
