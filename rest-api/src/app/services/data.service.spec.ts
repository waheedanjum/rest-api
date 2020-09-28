import { getTestBed, TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { Server } from "../models/server";
import { DataService } from "./data.service";

const test = require("../../../json/db.json");

describe("DataService", () => {
  let injector: TestBed;
  let myProvider: DataService;
  let httpMock: HttpTestingController;

  const data = [
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
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });

    injector = getTestBed();
    myProvider = injector.get(DataService);
    httpMock = injector.get(HttpTestingController);
  });

  describe("getServers", () => {
    it("should return array of Observable<Server>", () => {
      myProvider.getServers().subscribe((servers) => {
        expect(servers).toBeTruthy();
      });

      const req = httpMock.expectOne(`${myProvider.REST_API_SERVER}`);
      expect(req.request.method).toBe("GET");
      req.flush(data);
      httpMock.verify();
    });
  });

  describe("getServerById", () => {
    it("should return an Observable<Server>", () => {
      myProvider.getServerByUUID("cb1cb873-0a46-41d6-affc-a1ed41955fbf").subscribe((server) => {
        expect(server).toBeTruthy();
      });
      
      const req = httpMock.expectOne(`${myProvider.REST_API_SERVER}/${data[0].uuid}`);
      expect(req.request.method).toBe("GET");
      req.flush(data[0]);
      httpMock.verify();
    });
  });

});
