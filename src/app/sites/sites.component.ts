import { Component, OnInit } from '@angular/core';
import { SiteService } from './service/site.service';








@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

  sites$ = this.siteService.sites$;










  constructor( private siteService: SiteService) { }


  ngOnInit() {
  }


}


