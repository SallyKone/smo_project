import { Component, OnInit } from '@angular/core';
import {Employe} from '../models/employe';
import {EmployeService} from './employe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
  employe = new Employe();
  constructor(private employeService: EmployeService, private router: Router) { }

  ngOnInit() {
  }
  createEmploye() {
    this.employeService.addEmploye(this.employe)
      .subscribe( data => {
        this.router.navigate(['employe']);
      });
  }

}
