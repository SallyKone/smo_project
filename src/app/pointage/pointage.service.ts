import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pointage } from '../models/pointage.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PointageService {
  private pointageUrl = 'http://localhost:8080/pointages';
  constructor(private http: HttpClient) {}
  public getPointages() {
    return this.http.get<Pointage[]>(this.pointageUrl + '/index' );
  }
  public getUserById(numero: number) {
    return this.http.get<Pointage>(this.pointageUrl + '/getPointage/' + numero);
  }

  public createPointage(pointage) {
    return this.http.post<Pointage[]>(this.pointageUrl + '/addPointage/', pointage);
  }

  public deletePointage(pointage) {
    return this.http.delete(this.pointageUrl + '/deletePointage/' + pointage.numero);
  }
  public updatePointage(pointage: Pointage) {
    return this.http.put(this.pointageUrl + '/updatePointage/' + pointage.numero, pointage);
  }

}
