import { User } from "./user";

export class Post {
  id: number;
  content: string;
  createdAt: string;
  user?: User;

  constructor(post: any) {
    this.id = post.id || 0;
    this.content = post.content || "";
    this.createdAt = post.createdAt || "";
    this.user = post.user || null;
  }
}
