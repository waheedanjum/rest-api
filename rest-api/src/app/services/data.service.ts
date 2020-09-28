import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of} from "rxjs";
import { Server } from "../models/server";
import { catchError} from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public REST_API_SERVER: string = "http://localhost:3000/servers";

  constructor(private httpclient: HttpClient) {}
 
  // GET all servers 
  public getServers(): Observable<Server> {
    return this.httpclient
      .get<Server>(this.REST_API_SERVER)
      .pipe(catchError(this.handleError<Server>("getServers", [])));
  }

  // GET/UUID 
  public getServerByUUID(uuid: string): Observable<Server> {
    const options = uuid ? { params: new HttpParams().set("uuid", uuid) } : {};

    return this.httpclient
      .get<Server>(this.REST_API_SERVER, options)
      .pipe(catchError(this.handleError<Server>("getServerByUUId", [])));
  }

  // PATCH/Server
  public updateServer(server: Server): Observable<Server> {
    const options = {
      headers: this.getHttpHeader(), 
      params: new HttpParams().set("uuid", server.uuid) 
  }; 
    return this.httpclient
      .patch<Server>(this.REST_API_SERVER, server)
      .pipe(catchError(this.handleError("updateServer", server)));
  }
  
  // POST/Server
  public addServer(server: Server): Observable<Server> {
    const params = new HttpParams().set("uuid", server.uuid);

   return this.httpclient.post<Server>(this.REST_API_SERVER, server, { headers: this.getHttpHeader(), params});
  }

  // Delete
  public deleteServer(uuid: string): Observable<{}> {
    const url = `${this.REST_API_SERVER}/${uuid}`; 
    return this.httpclient.delete(url, { headers: this.getHttpHeader()})
    .pipe(
      catchError(this.handleError('deleteHero'))
    );
  }

  // HttpHeaders
  private getHttpHeader(): HttpHeaders {
    return new HttpHeaders().set("Content-Type", "application/json");
  }

  // ErrorHandler
  private handleError<T>(operation = "operation", result?: T | []) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
