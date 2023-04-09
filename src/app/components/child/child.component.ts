import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() parentArray: string[] = [];
  childData:string =' ';
  @Output() childInput = new EventEmitter();
  isGetData: boolean = false;

  getData() {
    this.isGetData = ! this.isGetData;
  }

  sendData(){
    console.log(this.childData);
    this.childInput.emit(this.childData)
  }
}
