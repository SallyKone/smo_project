import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employe} from '../models/employe';
import {Site} from '../models/site';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private employeUrl = 'http://localhost:8080/employe';
  constructor(private http: HttpClient) {
  }
  public getEmploye() {
    return this.http.get<Employe[]>(this.employeUrl + '/home' );
  }
  public getEmployeById(id_employe: number) {
    return this.http.get<Employe>(this.employeUrl + '/getEmploye/' + id_employe);
  }
  public addEmploye(employe) {
    return this.http.post<Employe[]>(this.employeUrl + '/addEmploye/', employe);
  }

  public deleteEmploye(employe) {
    return this.http.delete(this.employeUrl + '/deleteEmploye/' + employe.id_employe);
  }
  public updateEmploye(employe: Employe) {
    return this.http.put(this.employeUrl + '/updateEmploye/' + employe.id_employe, employe);
  }
}
