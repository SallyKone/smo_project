import { Component, OnInit } from '@angular/core';
import {Site} from '../models/site';
import {Router} from '@angular/router';
import {SiteService} from './site.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-update-site',
  templateUrl: './update-site.component.html',
  styleUrls: ['./update-site.component.css']
})
export class UpdateSiteComponent implements OnInit {
 site = new Site();
 sites: Site;
  constructor(private router: Router, private siteService: SiteService) { }

  ngOnInit() {
    let siteId = localStorage.getItem("updateSiteId");
    if (!siteId) {
      alert("Invalid action.");
      this.router.navigate(['site']);
      return;
    }
    this.siteService.getSiteById(+siteId).subscribe( data => {
      this.site = data ;
    });
  }
  updatSite() {
    this.siteService.updateSite(this.site).pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['site']);
        },
        error => {
          alert(error);
        });
  }

}
