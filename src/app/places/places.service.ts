import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    // tslint:disable-next-line: max-line-length
    new Place(
      'p1',
      'Manhattan Mansion',
      '135 West 52nd Street',
      // tslint:disable-next-line: max-line-length
      'https://static.mansionglobal.com/production/media/listing_images/40d47ff976b7a94da501c7ced6b6bd46/large_b5236b4c-48e4-46ce-89f2-b59196220346.jpg',
      13.250
    ),
    new Place(
      'p2',
      'Washington DC Mansion',
      '3722 R Street NW',
      // tslint:disable-next-line: max-line-length
      'https://static1.mansionglobal.com/production/media/listing_images/e33f88399d8c780573f9a43a98cb1dba/large_C322E7DE-2C9E-4471-9394-66F436DEAC3C.jpeg',
      2.495
    ),
    new Place(
      'p3',
      'Georgetown Washington DC Mansion',
      'Undisclosed Location',
      // tslint:disable-next-line: max-line-length
      'https://static.mansionglobal.com/production/media/listing_images/8c2d5cff836f1283c375160e88910b6a/large_6.jpeg',
      6.50
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}
}
