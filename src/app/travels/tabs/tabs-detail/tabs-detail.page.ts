import { Component, OnInit } from '@angular/core';
import { TabsService } from '../tabs.service';
import { Place } from '../tabs.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PostProvider } from '../../../../providers/post-provider';

@Component({
  selector: 'app-tabs-detail',
  templateUrl: './tabs-detail.page.html',
  styleUrls: ['./tabs-detail.page.scss'],
})
export class TabsDetailPage implements OnInit {
  id: number;
  title: string;
  loc: string;
  desc: string;
  constructor(
    private actRoute: ActivatedRoute,
    private postPvdr: PostProvider,
    private router: Router
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.id = data.id;
      this.title = data.title;
      this.desc = data.desc;
      this.loc = data.loc;
      console.log(data);
  	});
  }

  delete(id){
    let body = {
      aksi : 'delete',
      trv_id : id
    };

    this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
      this.router.navigate(['/travels/tabs/travel']);
    });
  }

  edit(id, title, desc, loc){
    this.router.navigate(['/travels/tabs/createtravel/' + '/' + id + '/' + title + '/' + desc + '/' + loc]);
  }

}
