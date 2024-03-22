import { User } from "./user";

export class Event {
  id: number;
  title: string;
  content: string;
  startDateTime: string;
  endDateTime: string;
  createdAt: string;
  user: User;

  constructor(event:any) {
    this.id = event.id || 0;
    this.title = event.title || "";
    this.content = event.content || "";
    this.startDateTime = event.startDateTime;
    this.endDateTime = event.endDateTime;
    this.createdAt = event.createdAt;
    this.user = event.user || new User({})
  }
}
