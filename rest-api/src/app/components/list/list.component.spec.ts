import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ListComponent } from "./list.component";
import { AppRoutingModule } from "../../app-routing.module";
import { AddServerComponent } from "../add-server/add-server.component";
import { ListDetailsComponent } from "../list-details/list-details.component";
import { MatButtonModule, MatRadioModule } from "@angular/material";

describe("ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatRadioModule,
        MatButtonModule,
      ],
      declarations: [ListComponent, AddServerComponent, ListDetailsComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", async () => {
    expect(component).toBeTruthy();
  });
});
