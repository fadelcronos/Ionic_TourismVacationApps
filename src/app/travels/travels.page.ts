import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.page.html',
  styleUrls: ['./travels.page.scss'],
})
export class TravelsPage implements OnInit {
  title = 'travel'

  onChangePages = (name) =>{
    this.title=name;
    console.log(name);
  }
  constructor() { }

  ngOnInit() {
  }

}
