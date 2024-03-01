export interface UserData {
  event: Event;
  userId: string;
  message?: string;
  itemId?: string;
}

export enum Event {
  "LOGIN",
  "CHAT_MESSAGE",
  "LOGOUT",
  "EQUIP_ITEM",
}
