import { Component, NgModule, OnInit } from "@angular/core";
import { Server } from "../../models/server";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  private servers$: Observable<Server>;
  private selectedServer$: Observable<Server>;

  constructor(private dataService: DataService, private fb: FormBuilder) {}

  ngOnInit() {
    this.servers$ = this.dataService.getServers();

    this.servers$.subscribe((e) => {
      console.log(e);
    });
  }

  private listForm = this.fb.group({
    uuid: ["", Validators.required],
  });

  private detailViewForm = this.fb.group({
    name: ["", Validators.required],
    mem: ["", Validators.required],
    state: ["", Validators.required],
    cpu: ["", Validators.required],
  });

  // Getters for Forms
  get lf() {
    return this.lf.controls;
  }

  get dvf() {
    return this.detailViewForm.controls;
  }

  // Getters Form Fields
  public get UUID() {
    return this.listForm.get("uuid").value;
  }

  private onSelectServer(): void {
    this.selectedServer$ = this.dataService.getServerByUUID(this.UUID);

    this.selectedServer$.subscribe((server) => {
      this.detailViewForm.patchValue(
        { name: server[0].name },
        { onlySelf: true, emitEvent: false }
      );
      this.detailViewForm.patchValue(
        { mem: server[0].mem },
        { onlySelf: true, emitEvent: false }
      );
      this.detailViewForm.patchValue(
        { state: server[0].state },
        { onlySelf: true, emitEvent: true }
      );
      this.detailViewForm.patchValue(
        { cpu: server[0].cpu },
        { onlySelf: true, emitEvent: true }
      );
    });
  }
}
