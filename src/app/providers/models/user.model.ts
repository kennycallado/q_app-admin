export class User {
  id: number;
  depens_on: number;
  role_id: number;
  user_token?: string;
  project: UserProject;
  created_at?: string;
  updated_at?: string;
}

export class UserProject {
  id: number;
  user_id: number;
  project_id: number;
  active: boolean;
  keys: string[];
  record?: Record<string, number|string>;
}
