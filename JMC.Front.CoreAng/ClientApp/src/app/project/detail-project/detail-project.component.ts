import { Component, OnInit, Input } from '@angular/core';
import { Person } from "../../models/person";

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})

export class DetailProjectComponent implements OnInit {

  constructor() { }

  @Input()
  public valpardetail: Person;

  ngOnInit(): void {}

}
