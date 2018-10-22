import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pointage } from '../models/pointage.model';
import { PointageService } from './pointage.service';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styles: []
})
export class PointageComponent implements OnInit {
  pointage = new Pointage();
  pointages: Pointage[];

  constructor(private router: Router, private pointageService: PointageService) {
  }

  ngOnInit() {
    this.pointageService.getPointages()
      .subscribe( data => {
        this.pointages = data;
      });
  }
  addPointage(): void {
    this.router.navigate(['add-pointage']);
  }

  deletePointage(pointage: Pointage): void {
    this.pointageService.deletePointage(pointage)
      .subscribe( data => {
        this.pointages = this.pointages.filter(u => u !== pointage);
      });
  }
  updatePointage(pointage: Pointage): void {
    localStorage.removeItem("updatePointageId");
    localStorage.setItem("updatePointageId" , pointage.numero.toString());
    this.router.navigate(['update-pointage']);
  }
}


