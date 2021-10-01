import { Component , OnInit} from '@angular/core';
import { AppState } from '../store/models/app.model';
import {UserAdd } from '../store/models/users.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'testcomponent',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  userslist: Observable<Array<UserAdd>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.userslist = this.store.select(store => store.users);
  }
}
