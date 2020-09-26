import { Component, NgModule, OnInit } from "@angular/core";
import { Server } from "../../models/server";
import { Observable, Subscription } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  private servers$: Observable<Server>;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers$ = this.dataService.getServers();

    this.servers$.subscribe((e) => {
      console.log(e);
    });
  }

  private listForm = this.fb.group({
    uuid: ["", Validators.required],
  });

  get lf() {
    return this.lf.controls;
  }

  get UUID() {
    return this.listForm.get("uuid").value;
  }

  private onAdd(): void {
    this.router.navigate(["add-server"]);
    // *ngIf="router.url !== '/add-server'"
  }

  onSelectServer(): void {
    this.router.navigate(["list-server-details/:" + this.UUID]);
  }
}
