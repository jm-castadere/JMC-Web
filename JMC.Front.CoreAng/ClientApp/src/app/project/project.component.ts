import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Person } from "../models/person";


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

 public listPerso: Person[] = [
    { firstName: "Alex", lastName: 'Castadere', age: 25},
    { firstName: "Isabel", lastName: 'Castadere', age: 60 },
    { firstName: "Jean-Michel", lastName: 'Castadere', age: 61 },
  ];


  @Input()
  public valparam: string | undefined;

  constructor( private _router :Router) { }

  ngOnInit(): void {

    this.valparam = "Parametre variable";
    
  }
}
