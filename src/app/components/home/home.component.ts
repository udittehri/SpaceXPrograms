import { Component, OnInit } from '@angular/core';
import { SpaceXDataService } from './../../Services/space-xdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rawData : any = [];

  activeFilter = {
    year : new Date().getFullYear(),
    isLaunchS : null,
    isLandS : null,
    limit : 100
  }
  years = []
  filteredData = []
 

  constructor(private spaceDataService : SpaceXDataService) { }

  ngOnInit(): void {
    this.getProgramData()
  }

  changeFilters = (e) => {
    let value = e.value
    let key = e.key
    
    if (value == "" || value == undefined  ) value = null
    this.activeFilter[key] = value
    if (key == 'year') this.getProgramData();
    else this.activateFilters()
  }

  getProgramData(){

    this.spaceDataService.getMissionData(this.activeFilter)
    .subscribe(res => {
      this.rawData = res

    this.calculateYears()
    this.activateFilters()
    })
  }

  calculateYears = () =>{
    let years = [];
    this.rawData.filter(edx =>{
      if (!years.includes(edx.launch_year)) years.push(edx.launch_year)
    } )
    this.years = years
    console.log(this.years);
    
  }

  activateFilters = () => {
    debugger
    let f = []
    this.rawData.filter(edx => {
        if (this.activeFilter.isLaunchS == null &&  this.activeFilter.isLandS == null){
          f.push(edx)
        }
        else if (this.activeFilter.isLaunchS != null &&  this.activeFilter.isLandS == null){
          if (this.activeFilter.isLaunchS == edx.launch_success ) f.push(edx)
        }
        else if (this.activeFilter.isLaunchS == null &&  this.activeFilter.isLandS != null){
          if (this.activeFilter.isLandS == edx.rocket.first_stage.cores[0].land_success ) f.push(edx)
        }
        else if (this.activeFilter.isLaunchS != null &&  this.activeFilter.isLandS != null){
          if (this.activeFilter.isLaunchS == edx.rocket.first_stage.cores[0].land_success && this.activeFilter.isLaunchS == edx.launch_success ) f.push(edx)
        }

    })
    this.filteredData = f
    
  }
}
