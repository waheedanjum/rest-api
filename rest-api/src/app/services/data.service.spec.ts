import { getTestBed, TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { Server } from "../models/server";

import { DataService } from "./data.service";
import { doesNotThrow } from 'assert';

export const servers: Server[] = [
  {
    uuid: "cb1cb873-0a46-41d6-affc-a1ed41955fbf",
    mem: "1 GB",
    state: "stopped",
    cpu: "7 GHz",
    name: "My Server 1",
  },
];

describe("DataService", async() => {
  let injector: TestBed;
  let dataService: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [DataService],
      schemas: [],
    })
  );

  injector = getTestBed();
  dataService = TestBed.get(DataService);
  httpMock = injector.get(HttpTestingController);

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", async () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
    
  });

  it('should return Observable<Server> List', async()=>{
    dataService.getServers().subscribe(s => {
     console.log(s);
    });
  });
});
