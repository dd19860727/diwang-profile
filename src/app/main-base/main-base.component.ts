import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main-base.component.html',
  styleUrls: ['./main-base.component.scss']
})
export class MainBaseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getSelectedItem(item){
    if(item)
      this.router.navigate(['/', item]);
  }

}
