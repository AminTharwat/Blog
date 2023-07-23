export class PostCreation{
  id?:number;
  title?:string;
  date?:string;
  excerpt?:string;
  content?:string;
  status?: "publish"| "future"| "draft"| "pending"| "private"
}
