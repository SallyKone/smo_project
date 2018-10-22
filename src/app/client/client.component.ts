import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from './client.service';
import {Client} from '../models/client';
import {Pointage} from '../models/pointage.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[];
  client = new Client();

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClient().subscribe(
      data => {
        this.clients = data;
      });
  }
  addClient(): void {
    this.router.navigate(['add-client']);
  }

  deleteClient(client: Client): void {
    this.clientService.deleteClient(client)
      .subscribe( data => {
        this.clients = this.clients.filter(c => c !== client);
      });
  }
  updateClient(client: Client): void {
    localStorage.removeItem("updateClientId");
    localStorage.setItem("updateClientId" , client.id_client.toString());
    this.router.navigate(['update-client']);
  }

}
