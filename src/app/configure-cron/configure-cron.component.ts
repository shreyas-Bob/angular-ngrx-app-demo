import { Component, OnInit } from '@angular/core';
import { CronOptions } from 'cron-editor/lib/CronOptions';

@Component({
	selector: 'app-configure-cron',
	templateUrl: './configure-cron.component.html',
	styleUrls: ['./configure-cron.component.sass']
})
export class ConfigureCronComponent implements OnInit {

	constructor() { }

	ngOnInit() {

	}

	public cronExpression = '4 3 2 12 1/1 ? *';
	public isCronDisabled = false;
	public cronOptions: CronOptions = {
		formInputClass: 'form-control cron-editor-input',
		formSelectClass: 'form-control cron-editor-select',
		formRadioClass: 'cron-editor-radio',
		formCheckboxClass: 'cron-editor-checkbox',

		defaultTime: '10:00:00',
		use24HourTime: true,

		hideMinutesTab: false,
		hideHourlyTab: false,
		hideDailyTab: false,
		hideWeeklyTab: false,
		hideMonthlyTab: false,
		hideYearlyTab: false,
		hideAdvancedTab: true,

		hideSeconds: false,
		removeSeconds: false,
		removeYears: false
	};

}
