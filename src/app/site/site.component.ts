import { Component, OnInit } from '@angular/core';
import {Site} from '../models/site';
import {Router} from '@angular/router';
import {SiteService} from './site.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  site = new Site();
  sites: Site[];
  constructor(private router: Router, private siteService: SiteService) { }

  ngOnInit() {
    this.siteService.getSite().subscribe(
      data => {
        this.sites = data;
      });
  }
  addSite(): void {
    this.router.navigate(['add-site']);
  }

  deleteSite(site: Site): void {
    this.siteService.deleteSite(site)
      .subscribe( data => {
        this.sites = this.sites.filter(s => s !== site);
      });
  }
  updateSite(site: Site): void {
    localStorage.removeItem("updateSiteId");
    localStorage.setItem("updateSiteId" , site.idSite.toString());
    this.router.navigate(['update-site']);
  }

}
