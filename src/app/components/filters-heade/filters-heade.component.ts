import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-filters-heade',
  templateUrl: './filters-heade.component.html',
  styleUrls: ['./filters-heade.component.scss']
})
export class FiltersHeadeComponent implements OnInit {

  @Input() years : any
  @Output() changeFilters = new EventEmitter();

  activeYear = 2020
  activeLand = null
  activeLaunch = null
  constructor() { }

  ngOnInit(): void {
    console.log(this.years);
  }
  changeFilter(value: any, key : string) {
    if (key == 'year') this.activeYear = value
    else if (key == 'isLaunchS') this.activeLaunch = value
    else if (key == 'isLandS') this.activeLand = value
    
    this.changeFilters.emit({value,key});
  }

}
