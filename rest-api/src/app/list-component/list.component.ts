import { Component, OnDestroy, OnInit } from "@angular/core";
import { Server } from "http";
import { Observable } from "rxjs";
import { DataService } from "../services/data.service";
import {HttpClient} from '@angular/common/http'

@Component({
  selector: "list-component",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  
  private severs$: Observable<Server> = this.dataService.getServers();
  
  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit() {
    this.severs$.subscribe((e) => {
      console.log(JSON.stringify(e));
    });
  }
  
}
