import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: './discover/discover.module#DiscoverPageModule'
          },
          {
            path: ':placeId',
            loadChildren:
              './discover/place-detail/place-detail.module#PlaceDetailModule'
          }
        ]
      },
      {
        path: 'offers',
        component: PlacesPage,
        children: [
          {
            path: '',
            loadChildren: './offers/offers.module#OfferPageModule'
          },
          {
            path: 'new',
            loadChildren:
              './offers/new-offer/new-offer.module#NewOfferPageModule'
          },
          {
            path: 'edit/:placeId',
            loadChildren:
              './offers/edit-offer/edit-offer.module#EditOffersPageModule'
          },
          {
            path: ':placeId',
            loadChildren:
              './offers/offer-bookings/offer-bookings.module#OfferBookingsPageModule'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule {}
