import { Component, OnInit } from '@angular/core';
import { TabsService} from './tabs.service';
import { PostProvider } from '../../../providers/post-provider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  travs: any = [];

  constructor(private tabsService: TabsService, private postprovider: PostProvider,
    private router: Router) { }

  ngOnInit() {
    return new Promise(resolve => {
      let body = {
        aksi: 'getdata',
      };

      this.postprovider.postData(body, 'proses-api.php').subscribe(data => {
        for(let travels of data.result){
          this.travs.push(travels);
          console.log(travels);
        }
        resolve(true);
      });
    });
  }

  seedetail(id, title, desc, loc){
    this.router.navigate(['travels/tabs/travel/trav-detail/'+ id + '/' + title + '/' + desc + '/' + '/' + loc])
  }

  ionViewWillEnter(){
    this.travs = [];
    this.ngOnInit();
  }

}
