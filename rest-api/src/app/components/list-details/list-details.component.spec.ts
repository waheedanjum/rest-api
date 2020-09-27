import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { ListDetailsComponent } from "./list-details.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../../app-routing.module";
import { AddServerComponent } from '../add-server/add-server.component';
import { ListComponent } from '../list/list.component';

describe("ListDetailsComponent", () => {
  let component: ListDetailsComponent;
  let fixture: ComponentFixture<ListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, AppRoutingModule],
      declarations: [ListDetailsComponent, AddServerComponent, ListComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", async() => {
    expect(component).toBeTruthy();
  });
});
