import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobRecommendationService {
  private BaseUrl = '';
  constructor(private _http:HttpClient) { }

  findJobREcoomendation(dataForm:any):Observable<any>{
    return this._http.post('',dataForm)
  }
}
