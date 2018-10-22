import { Component, OnInit } from '@angular/core';
import {Employe} from '../models/employe';
import {Router} from '@angular/router';
import {EmployeService} from './employe.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {

  employe = new Employe();
  constructor(private router: Router, private employeService: EmployeService) { }

  ngOnInit() {
    let employeId = localStorage.getItem("updateEmployeId");
    if (!employeId) {
      alert("Invalid action.");
      this.router.navigate(['employe']);
      return;
    }
    this.employeService.getEmployeById(+employeId).subscribe( data => {
      this.employe = data ;
    });
  }
  updateEmploye() {
    this.employeService.updateEmploye(this.employe).pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['employe']);
        },
        error => {
          alert(error);
        });
  }

}
