import { Component } from '@angular/core';
import { User } from 'src/app/providers/models/user.model';

@Component({
  selector: 'app-users-manage',
  templateUrl: './users-manage.component.html',
  styleUrls: ['./users-manage.component.sass']
})
export class UsersManageComponent {
  // Dummy data
  users: User[] = [{
      id: 4,
      depens_on: 1,
      role_id: 4,
      user_token: "",
      project: {
        id: 1,
        user_id: 4,
        project_id: 1,
        active: true,
        keys: ["step", "mood"],
        record: {
          step: 0,
          mood: 0
        }
      },
    }, {
      id: 5,
      depens_on: 1,
      role_id: 4,
      user_token: "blah",
      project: {
        id: 1,
        user_id: 5,
        project_id: 1,
        active: true,
        keys: ["step", "mood"],
        record: {
          step: 5,
          mood: 50
        }
      },
    },]



}
