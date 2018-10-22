import { Component, OnInit } from '@angular/core';
import {Client} from '../models/client';
import {Router} from '@angular/router';
import {ClientService} from './client.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  client = new Client();
  clients: Client;
  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    let clientId = localStorage.getItem("updateClientId");
    if (!clientId) {
      alert("Invalid action.");
      this.router.navigate(['client']);
      return;
    }
    this.clientService.getClientById(+clientId).subscribe( data => {
      this.client = data ;
    });
  }
  updateClient() {
    this.clientService.updateClient(this.client).pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['client']);
        },
        error => {
          alert(error);
        });
  }

}
