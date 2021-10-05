import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddUserAction, DeleteUserAction } from '../store/actions/users.action';
import { AppState } from '../store/models/app.model';
import { UserAdd } from '../store/models/users.model';
import { v4 as uuid } from 'uuid';
import { CronJob } from 'cron';
import { CronOptions } from 'cron-editor';
import { ApiService } from '../services/api.service';
import cronstrue from 'cronstrue';
declare var ManageCronData: any;
@Component({
  selector: 'app-add-remove',
  templateUrl: './add-remove.component.html',
  styleUrls: ['./add-remove.component.sass']
})
export class AddRemoveComponent implements OnInit, DoCheck {

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
  scheduleData = '2 * * * * *';
  public isCronDisabled = false;
  expression: any;
  cronJob: CronJob;
  footerExpression: any;
  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: true,

    use24HourTime: true,
    hideSeconds: false,
    defaultTime: '2 * * * * *',
    removeSeconds: false,
    removeYears: true
  };
  showCronWindow: boolean;
  showCronWindowPop: boolean;
  constructor(private store: Store<AppState>, private apiService: ApiService) {
    this.expression = cronstrue.toString(this.scheduleData)
  }

  ngOnInit() {
    this.userslist = this.store.select(store => store.users);
    // this.apiService.getCronvertedCronText(this.scheduleData).subscribe(data => {
    //   this.expression = data;
    // });
    // this.manageCronData(this.scheduleData, this.expression);
  }
  ngDoCheck() {

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

  setCronSch(interval) {
    debugger
    // ManageCronData(this.scheduleData,this.expression)
    document.getElementById("rightCronWindow").style.display = "none";
    this.showCronWindowPop = false
    this.showCronWindowPop = false

    this.cronJob = new CronJob(interval, async () => {
      // this.userslist = this.store.select(store => store.users);
      let exp = cronstrue.toString(interval)
      try {
        await this.manageCronSch(exp);
      } catch (e) {
        console.log("Error=>", e);
      }
    });
    if (!this.cronJob.running) {
      this.cronJob.start()
    }
  }

  manageCronSch(expression) {
    this.userslist = this.store.select(store => store.users);
    console.log("running at" + expression);

  }
  showCron() {
    this.showCronWindow = true;
    this.showCronWindowPop = true
    let clock = setInterval(() => {
      clearInterval(clock)
      clock = null
      document.getElementById("rightCronWindow").style.display = "block";
    }, 200)
  }

}
