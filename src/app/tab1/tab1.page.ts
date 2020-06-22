import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  value = '';
  items: any = [];
  constructor() {}

  ngOnInit(){
   if (localStorage.getItem('items')){
      this.items = JSON.parse(localStorage.getItem('items'));
   }
  }

  addItem(){
    const obj = {
      value: this.value,
      isDone: false
    };
    this.items.unshift(obj);
    localStorage.setItem('items', JSON.stringify(this.items));
    this.value = '';
  }

  deleteItem(ind){
    this.items = this.items.filter((c, index) => index !== ind);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  setDone(index){
    const item = this.items.find((c, ind) => ind === index);
    item.isDone = !item.isDone;
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}

