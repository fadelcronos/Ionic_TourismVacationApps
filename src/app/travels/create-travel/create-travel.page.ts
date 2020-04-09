import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-travel',
  templateUrl: './create-travel.page.html',
  styleUrls: ['./create-travel.page.scss'],
})
export class CreateTravelPage implements OnInit {
  id: number;
  trv_title: string = "";
  trv_img: string = "";
  trv_desc: string = "";
  trv_locate: string = "";

  title: string;
  loc: string;
  desc: string;
  constructor(
    private postPvdr: PostProvider,
  	private router: Router,
  	private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
  		this.id = data.id;
      this.trv_title = data.title;
      this.trv_desc = data.desc;
      this.trv_locate = data.loc;
      console.log(data);
  	});
  }

  createtrv(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'addtrv',
  			trv_title: this.trv_title,
        trv_desc: this.trv_desc,
        trv_img: this.trv_img,
        trv_locate: this.trv_locate,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        var alertmsg = data.msg;
        if(data.success){
          this.router.navigate(['/travels/tabs/travel']);

        }else{
          console.log("Err")
        }
  		});
  	});

  }

  updatetrv(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'update',
  			trv_id : this.id,
  			trv_desc : this.trv_desc,
        trv_title : this.trv_title,
        trv_locate : this.trv_locate,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.router.navigate(['/travels/tabs/travel']);
  			console.log('OK');
  		});
  	});

  }

}
