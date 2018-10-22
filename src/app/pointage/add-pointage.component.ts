import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pointage } from '../models/pointage.model';
import { PointageService } from './pointage.service';
import {FormBuilder} from '@angular/forms';


@Component({
  templateUrl: './add-pointage.component.html'
})
export class AddPointageComponent {
  pointage = new Pointage();
  constructor(private pointageService: PointageService, private router: Router) { }
  createPointage() {
    this.pointageService.createPointage(this.pointage)
      .subscribe( data => {
        this.router.navigate(['pointage']);
      });
  }
  viewPointage() {
    console.log(this.pointage.heure);
  }

}
