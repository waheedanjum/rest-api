import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Server } from "src/app/models/server";
import { DataService } from "src/app/services/data.service";
import { Location } from '@angular/common';

@Component({
  selector: "app-list-details",
  templateUrl: "./list-details.component.html",
  styleUrls: ["./list-details.component.scss"],
})
export class ListDetailsComponent implements OnInit {
  private isUpdated: boolean = false;

  private selectedServer$: Observable<Server>;

  private detailViewForm = this.fb.group({
    uuid: ["", Validators.required],
    name: ["", Validators.required],
    mem: ["", Validators.required],
    state: ["", Validators.required],
    cpu: ["", Validators.required],
  });

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location 
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.getServerDetails(params.get('uuid'));
      console.log(params.get('uuid'));
      
    });
  }

  private onBack() {
    this.location.back();  
  }

  private onSubmit() {
    if (this.detailViewForm.valid) {
      const newServer = this.detailViewForm.value as Server;
      const updateServer$ = this.dataService.updateServer(newServer);

      updateServer$.subscribe((server) => {
        console.log("Update Server Details :", server);
      });
      
      this.isUpdated = true;
    }
  }

  get dvf() {
    return this.detailViewForm.controls;
  }

  private getServerDetails(uuid: string): void {
    this.selectedServer$ = this.dataService.getServerByUUID(uuid);

    this.selectedServer$.subscribe((server) => {
      this.detailViewForm.patchValue(
        { uuid: server[0].uuid },
        { onlySelf: true, emitEvent: false }
      );
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
