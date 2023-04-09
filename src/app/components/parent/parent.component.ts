import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentArray:string[] = ['Abdallah', 'Yasser', 'Assaker'];

  childInput:string = '';

  onChildInput(data:string){
    console.log(data);
    this.childInput = data;
  }
}
