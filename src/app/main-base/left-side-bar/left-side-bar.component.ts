import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent implements OnInit {
  
  @Output("selectedItem") selectedItemEmitter = new EventEmitter();
  private selectItem:string;

  constructor() { }

  ngOnInit() {
    this.selectItem = "home";
    this.selectedItemEmitter.emit(this.selectItem);
  }


  getSelectedItem(){
    return this.selectItem;
  }

  selectedItem(item){
    this.selectItem = item;
    if (this.selectItem)
      this.selectedItemEmitter.emit(this.selectItem);
  }

}
