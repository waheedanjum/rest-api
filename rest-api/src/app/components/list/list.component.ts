import { Component, NgModule, OnInit } from "@angular/core";
import { Server } from "../../models/server";
import { Observable, Subscription } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { Inject } from '@angular/core';    
import { DOCUMENT } from '@angular/common';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  private servers$: Observable<Server>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dataService: DataService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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

 public get UUID() {
    return this.listForm.get("uuid").value;
  }

  private onAdd(): void {
    this.router.navigate(["add-server"]);
  }

  private onDelete(): void {
    this.dataService.deleteServer(this.UUID).subscribe();
    this.document.location.reload();
  }

  onEdit(): void {
    this.router.navigate(["list-server-details/", this.UUID]);
  }
}
