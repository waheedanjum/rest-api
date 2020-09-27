import { TestBed } from "@angular/core/testing";
import {  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { Server } from "../models/server";

import { DataService } from "./data.service";

import { RouterTestingModule } from "@angular/router/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("DataService", () => {
  let dataService: DataService;
  let httpMock: HttpTestingController;
 
  // Test Server Data
  const serverData: Server[] = [
    {
      uuid: "cb1cb873-0a46-41d6-affc-a1ed41955fbf",
      mem: "1 GB",
      state: "stopped",
      cpu: "7 GHz",
      name: "My Server 1",
    },
    {
      uuid: "01e3021c-cd5c-4d3f-b39a-6b2dd3f706ba",
      mem: "2 GB",
      state: "running",
      cpu: "8 GHz",
      name: "My Server 2",
    },
    {
      uuid: "1d76a4b0-6887-43cc-97b3-8229c05b1fa1",
      mem: "4 GB",
      state: "stopped",
      cpu: "9 GHz",
      name: "My Server 3",
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [DataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  it("should be created", async () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it("should GET List of Servers", () => {
    dataService.getServers().subscribe((servers) => {
      expect(servers[0]).toEqual(serverData[0]);
    });
    const request = httpMock.expectOne("app/list-server-details");
      request.flush([serverData[0]]);
      httpMock.verify();
  });
});
