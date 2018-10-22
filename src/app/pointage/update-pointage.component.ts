import { Component, OnInit } from '@angular/core';
import {Pointage} from '../models/pointage.model';
import {PointageService} from './pointage.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-update-pointage',
  templateUrl: './update-pointage.component.html',
  styleUrls: ['./update-pointage.component.css']
})
export class UpdatePointageComponent implements OnInit {
  pointage = new Pointage();
  constructor(private router: Router, private pointageService: PointageService) { }

  ngOnInit() {
    let pointageId = localStorage.getItem("updatePointageId");
    if (!pointageId) {
      alert("Invalid action.");
      this.router.navigate(['pointage']);
      return;
    }
    this.pointageService.getUserById(+pointageId).subscribe( data => {
      this.pointage = data ;
    });
  }
  updatePointage() {
    this.pointageService.updatePointage(this.pointage).pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['pointage']);
        },
        error => {
          alert(error);
        });
  }

}
