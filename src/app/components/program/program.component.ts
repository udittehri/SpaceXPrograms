import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnChanges {
  public program: any = [];
  
  @Input() details : any
  constructor(
    // private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.program = this.details
    console.log(this.details);
    

  }
ngOnChanges(){
  console.log(this.details);

  
}
  // serviceCall(){
  //   this.http.get('https://jsonplaceholder.typicode.com/users')
  //       .subscribe((users) => {
  //           this.users = users;
  //       }, (err) => {
  //           console.log(err);
  //       });
  // }

}
