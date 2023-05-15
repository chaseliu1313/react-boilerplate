import React, { useContext } from 'react';
import { CoreActionTypes, Notification } from '../context';
import { CoreContext } from '../context/coreContext';
//this is an example of custom hook, they can be set up for quickly accessing and updating the core state. Or they can be used for networking..or other purposes
export const useNotification = (): {
  notification: Notification;
  setNotification: (v: Notification) => void;
} => {
  const { coreState, updateCoreState } = useContext(CoreContext);
  const setNotification = (v: Notification): void => {
    updateCoreState({
      type: CoreActionTypes.SET_NOTIFICATION,
      payload: { ...coreState, notification: { ...v } }
    });
  };

  return { notification: coreState.notification, setNotification };
};
