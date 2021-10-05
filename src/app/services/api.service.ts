import { Inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {
	}
    
	baseUrl = environment.baseUrl;
	getCronvertedCronText(cron) {
		return this.http.get(this.baseUrl +
			"cron-expression/?cron=" + cron + "&access_token=" +
			JSON.parse(window.sessionStorage.getItem("token")).access_token, { responseType: "text" });
	} 
}