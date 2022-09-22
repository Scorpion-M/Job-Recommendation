import { DataBody } from './../models/dataBody.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobRecommendationService {
  private BaseUrl = '127.0.0.1:5000/';
  constructor(private _http:HttpClient) { }

  findJobREcoomendation(dataForm:DataBody):Observable<any>{
    return this._http.post(this.BaseUrl + 'job',dataForm)
  }
}
