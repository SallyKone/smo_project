import { Component, OnInit } from '@angular/core';
import {Employe} from '../models/employe';
import {Router} from '@angular/router';
import {EmployeService} from './employe.service';
import {Pointage} from '../models/pointage.model';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  employes: Employe[];
  employe = new Employe();
  constructor(private router: Router, private employeService: EmployeService ) { }
  ngOnInit() {
    this.employeService.getEmploye()
      .subscribe( data => {
        this.employes = data;
      });
  }
  addEmploye(): void {
    this.router.navigate(['add-employe']);
  }

  deleteEmploye(employe: Employe): void {
    this.employeService.deleteEmploye(employe)
      .subscribe( data => {
        this.employes = this.employes.filter(e => e !== employe);
      });
  }
  updateEmploye(employe: Employe): void {
    localStorage.removeItem("updateEmployeId");
    localStorage.setItem("updateEmployeId" , employe.id_employe.toString());
    this.router.navigate(['update-employe']);
  }


}
