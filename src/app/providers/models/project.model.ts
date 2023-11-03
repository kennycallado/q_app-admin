import { PubRecord } from "./record.model";

export class Project {
  id: number;
  name: string;
  keys: string[];
  records?: PubRecord[]
}
