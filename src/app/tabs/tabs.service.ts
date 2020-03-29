import { Injectable } from '@angular/core';
import { Place } from './tabs.model';  

@Injectable({
  providedIn: 'root'
})

export class TabsService{

    private place: Place[] = [
        new Place(
            'p1',
            'Trio Gili',
            'Trio Gili merupakan tempat...',
            './assets/img/img1.jpg',
            'Lombok, Indonesia'
          ),
        new Place(
            'p2',
            "Raja Ampat",
            'A romantic place in Paris!',
            './assets/img/img3.jpg',
            'Papua, Indonesia'
          ),
        new Place(
            'p3',
            'Pulau Komodo',
            'Not your average city trip!',
            './assets/img/img2.jpg',
            'NTT, Indonesia'
          )
        ];
        
    get places(){
        return [...this.place]
    }

    getPlace(placeId: string){
      return {...this.place.find(placee => {
        return placee.id === placeId;
      })};
    }
  //   getPlace(tabsId: string){
  //     return {...this.place.find(places => {
  //       return places.id === tabsId;
  //     })};
  // }
        
}