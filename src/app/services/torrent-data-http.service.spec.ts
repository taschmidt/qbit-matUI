import { TestBed } from '@angular/core/testing';

import { TorrentDataHTTPService } from './torrent-data-http.service';

describe('TorrentDataService', () => {
  let service: TorrentDataHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TorrentDataHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});