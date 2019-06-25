import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesPage } from './places.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: PlacesPage,
        children: [
            { path: 'discover', children: [
                {
                    path: '',
                    loadChildren: './discover/discover.module#DiscoverPageModule'
                },
                {
                    path: ':placeId',
                    loadChildren: './discover/place-detail/place-detail.module#PlaceDetailModule'

                }
            ]},
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild()],
    exports: [RouterModule]
})
export class PlacesRoutingModule {}
