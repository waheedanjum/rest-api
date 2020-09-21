import { Component, OnInit } from "@angular/core";
import { Server } from "http";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  private servers$: Observable<Server>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.servers$ = this.dataService.getServers();
    this.servers$.subscribe((e) => {
      console.log(e);
    });
  }
}
