import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddUserAction, DeleteUserAction } from '../store/actions/users.action';
import { AppState } from '../store/models/app.model';
import { UserAdd } from '../store/models/users.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-remove',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.sass']
})
export class AddRemoveComponent implements OnInit {

  showadd = false;
  userslist: Observable<Array<UserAdd>>;
  userinput = {
    name: '',
    age: 0,
    email: '',
    address: '',
    id: ''
  }
  date: Date;
  success: any;
  danger: any;
  warning: any;
  alertMessage: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.userslist = this.store.select(store => store.users);

  }
  toggleUser() {
    this.showadd = !this.showadd;
  }
  saveUser(data) {
    if (data.name != null && data.age != null && data.address != null && data.email != null) {
      this.userinput.id = uuid();
      this.store.dispatch(new AddUserAction(this.userinput));
      console.log("Added record at=" + this.date);

      this.userinput = {
        name: '',
        age: 0,
        email: '',
        address: '',
        id: uuid()
      }
      this.success = true;
      this.alertMessage = "Record Added Successfully";
      setTimeout(() => {
        this.success = false;
        this.alertMessage = "";
      }, 3000);
    }
  }

  deleteUser(id) {
    this.store.dispatch(new DeleteUserAction(id));
    this.success = true;
    this.alertMessage = "Record Removed Successfully";
    console.log("Removed record at=" + this.date);
    setTimeout(() => {
      this.success = false;
      this.alertMessage = "";
    }, 3000);
  }


}

