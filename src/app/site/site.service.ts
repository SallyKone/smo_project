import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Site} from '../models/site';
import {Pointage} from '../models/pointage.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private siteUrl = 'http://localhost:8080/site';
  constructor(private http: HttpClient) { }
  public getSite() {
    return this.http.get<Site[]>(this.siteUrl + '/index' );
  }
  public getSiteById(idSite: number) {
    return this.http.get<Site>(this.siteUrl + '/getSite/' + idSite);
  }
  public addSite(site) {
    return this.http.post<Site[]>(this.siteUrl + '/addSite/', site);
  }
  public deleteSite(site) {
    return this.http.delete(this.siteUrl + '/deleteSite/' + site.idSite);
  }
  public updateSite(site: Site) {
    return this.http.put(this.siteUrl + '/updateSite/' + site.idSite, site);
  }
}
