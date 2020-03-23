import { Component, OnInit } from '@angular/core';
import { SiteService } from './service/site.service';
import { Site } from './models/site';








@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

  sites: Site[];







  constructor( private siteService: SiteService) { }


  ngOnInit() {
    this.siteService.getSites().subscribe((sites: Site[]) => this.sites=sites )
  }


}


