export interface Notification {
  shouldShow: boolean;
  message: string;
  action?: () => void;
}

export interface CoreState {
  userName: string;
  notification: Notification;
}

//this is the type of the core state which is accessable anywhere in the app.
