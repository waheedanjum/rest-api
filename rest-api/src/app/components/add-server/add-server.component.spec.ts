import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { AddServerComponent } from "./add-server.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../../app-routing.module";
import { ListComponent } from '../list/list.component';
import { ListDetailsComponent } from '../list-details/list-details.component';

describe("AddServerComponent", () => {
  let component: AddServerComponent;
  let fixture: ComponentFixture<AddServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, AppRoutingModule],
      declarations: [AddServerComponent, ListComponent, ListDetailsComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", async() => {
    expect(component).toBeTruthy();
  });
});
