import { Component, OnInit, Input } from '@angular/core';
import { SiteService } from '../service/site.service';




@Component({
  selector: 'app-site-table',
  templateUrl: './site-table.component.html',
  styleUrls: ['./site-table.component.scss']
})
export class SiteTableComponent implements OnInit {


@Input() sites = [];


@Input() isActiveSites: boolean;


public get sitesToDisplay() : any[] {
  return this.sites.filter((site)=>site.isActive === this.isActiveSites)
}




  constructor(  private siteService: SiteService ) { }

  ngOnInit() {
  }

}
