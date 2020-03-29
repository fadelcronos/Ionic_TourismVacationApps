import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsService } from '../tabs.service';
import { Place } from '../tabs.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-tabs-detail',
  templateUrl: './tabs-detail.page.html',
  styleUrls: ['./tabs-detail.page.scss'],
})
export class TabsDetailPage implements OnInit {
  loadPlace: Place;
  constructor(
    private actRoute: ActivatedRoute,
    private tabsService: TabsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('tabsId')){
        this.router.navigate(['/tabs']);
        return;
      }

      const tabsId = paramMap.get('tabsId');
      this.loadPlace = this.tabsService.getPlace(tabsId);
    });
  }

}
