import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';





@Injectable()
export class SiteService{









  constructor(private http: HttpClient){}





  getSites(){
    return this.http.get("assets/sites.json");
  }


}
