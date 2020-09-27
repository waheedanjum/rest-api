import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Server } from "src/app/models/server";
import { DataService } from "src/app/services/data.service";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-add-server",
  templateUrl: "./add-server.component.html",
  styleUrls: ["./add-server.component.scss"],
})
export class AddServerComponent implements OnInit {
  private addServerForm = this.fb.group({
    uuid: ["", Validators.required],
    name: ["", Validators.required],
    mem: ["", Validators.required],
    state: ["", Validators.required],
    cpu: ["", Validators.required],
  });

  public get asf() {
    return this.addServerForm.controls;
  }

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const uuid = uuidv4();

    this.addServerForm.patchValue(
      { uuid: uuid },
      { onlySelf: true, emitEvent: false }
    );
  }

  private onSubmit(): void {
    if (this.addServerForm.valid) {
      const newServer = this.addServerForm.value as Server;

      // Post call adding new server
      this.dataService.addServer(newServer).subscribe(
        (s) => {
          console.log("New Server :", s);
        },
        (err) => {
          console.log(" Error adding new Server");
        },
        () => {
         
        }
      );

      this.router.navigateByUrl['./home'];
    }
  }
}
