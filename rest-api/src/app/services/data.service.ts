import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { Server } from "../models/server";
import { catchError, map, retry, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private REST_API_SERVER: string = "http://localhost:3000/servers";

  constructor(private httpclient: HttpClient) {}

  public getServers(): Observable<Server> {
    return this.httpclient
      .get<Server>(this.REST_API_SERVER)
      .pipe(catchError(this.handleError<Server>("getServers", [])));
  }

  public getServerByUUID(uuid: string): Observable<Server> {
    const options = uuid ? { params: new HttpParams().set("uuid", uuid) } : {};

    return this.httpclient
      .get<Server>(this.REST_API_SERVER, options)
      .pipe(catchError(this.handleError<Server>("getServerByUUId", [])));
  }

  private handleError<T>(operation = "operation", result?: T | []) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
