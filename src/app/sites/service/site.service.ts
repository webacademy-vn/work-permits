import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable()
export class SiteService{





  sites: any[] = [];


  sites$ = new BehaviorSubject([]);

  addSite(site){
    this.sites.push(site);
    this.sites$.next(this.sites);
  }



}
