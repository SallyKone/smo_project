import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from '../models/client';
import {Site} from '../models/site';
import {Employe} from '../models/employe';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientUrl = 'http://localhost:8080/clients';
  constructor(private http: HttpClient) { }
  public getClient() {
    return this.http.get<Client[]>(this.clientUrl + '/index' );
  }
  public getClientById(id_client: number) {
    return this.http.get<Client>(this.clientUrl + '/getClient/' + id_client);
  }
  public addClient(client) {
    return this.http.post<Client[]>(this.clientUrl + '/addClient/', client);
  }

  public deleteClient(client) {
    return this.http.delete(this.clientUrl + '/deleteClient/' + client.id_client);
  }
  public updateClient(client: Client) {
    return this.http.put(this.clientUrl + '/updateClient/' + client.id_client, client);
  }
}
