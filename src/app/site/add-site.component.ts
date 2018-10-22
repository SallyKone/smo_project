import { Component, OnInit } from '@angular/core';
import {Site} from '../models/site';
import {Router} from '@angular/router';
import {SiteService} from './site.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {
  site = new Site();
  constructor(private router: Router, private siteService: SiteService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.siteService.addSite(this.site)
      .subscribe( data => {
        this.router.navigate(['site']);
      });
  }

}
