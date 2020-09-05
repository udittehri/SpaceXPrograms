import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceXDataService {
  baseURL = "https://api.spaceXdata.com/v3/launches?"
  
  constructor(private http : HttpClient) { }

  getMissionData(options){
    let url = this.baseURL
    if (options.isLandS != null) url = `${url}land_success=${options.isLandS}&`
    if (options.isLaunchS != null) url = `${url}launch_success=${options.isLaunchS}&`
    if (options.year != null) url = `${url}launch_year=${options.year}&`
    if (options.limit != null) url = `${url}limit=${options.limit}`
    return this.http.get(url)
  }

}
