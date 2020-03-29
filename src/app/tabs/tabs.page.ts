import { Component, OnInit } from '@angular/core';
import { TabsService} from './tabs.service';
import { Place } from './tabs.model';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  loadedPlaces: Place[]

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    this.loadedPlaces = this.tabsService.places;
  }

}
