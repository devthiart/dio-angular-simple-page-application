import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-attributes',
  templateUrl: './comp-attributes.component.html',
  styleUrls: ['./comp-attributes.component.css']
})
export class CompAttributesComponent implements OnInit {
  style: string = 'enable';
  fontColor: string = 'white';
  backgroundColor: string = 'magenta';
  item: string = '';
  list: string[] = [];
  isEnableBlock: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeStyle() {
    if(this.style === 'enable') {
      this.style = 'disable';
    } else {
      this.style = 'enable';
    }
  }

  addList() {
    this.list.push(this.item);
    this.item = '';
  }

  removeList(index: number): void {
    this.list.splice(index, 1);
  }
}
