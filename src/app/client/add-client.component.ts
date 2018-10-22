import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from './client.service';
import {Client} from '../models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
client = new Client();
  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit() {
  }
  ngSubmit() {
    this.clientService.addClient(this.client)
      .subscribe( data => {
        this.router.navigate(['client']);
      });
  }

}
