import React, { ReactElement, useState } from 'react';
import NetworkService from './service';

type NetworkContextType = {
  service: NetworkService;
  token: string;
  error: string;
};

export type NetworkContextProps = {
  networkState: NetworkContextType;
  updateToken: (token: string) => void;
  setError: (e: string) => void;
};

const NetworkContext = React.createContext<NetworkContextProps>({} as NetworkContextProps);

const NetworkContextProvider = (props: { children: JSX.Element | JSX.Element[] }): ReactElement => {
  const [state, setState] = useState<NetworkContextType>({
    //having service as a global value for easy acess
    service: new NetworkService(),
    error: '',
    token: ''
  });

  const updateToken = (token: string): void => {
    setState({ ...state, token });
    state.service.setToken(token);
  };

  const setError = (e: string): void => {
    setState({ ...state, error: e });
  };

  return (
    <NetworkContext.Provider
      value={{
        networkState: state,
        updateToken,
        setError
      }}>
      {props.children}
    </NetworkContext.Provider>
  );
};

export { NetworkContextProvider, NetworkContext };
