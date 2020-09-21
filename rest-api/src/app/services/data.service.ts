import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Server } from 'http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private REST_API_SERVER: string = "http://localhost:3000/servers";

  constructor(private http: HttpClient) { }

  public getServers(): Observable<Server>  {
    return this.http.get<Server>(this.REST_API_SERVER);
  }
}
