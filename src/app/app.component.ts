import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DragDropPractice';

  weeks: any[] = [];
  connectedTo: any = [];

  constructor() {
    this.weeks = [
      {
        id: 'Animal',
        weeklist: [
          "item 1",
          "item 2",
          "item 3",
          "item 4",
          "item 5"
        ]
      }, {
        id: 'Fruits',
        weeklist: [
          "item 1",
          "item 2",
          "item 3",
          "item 4",
          "item 5"
        ]
      }, {
        id: 'Vagetable',
        weeklist: [
          "item 1",
          "item 2",
          "item 3",
          "item 4",
          "item 5"
        ]
      }, {
        id: 'Human',
        weeklist: [
          "item 1",
          "item 2",
          "item 3",
          "item 4",
          "item 5"
        ]
      },
    ];
    for (let week of this.weeks) {
      this.connectedTo.push(week.id);
    };
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  dropCategory(event: CdkDragDrop<any[]>) {
    console.log(event);
    moveItemInArray(this.weeks, event.previousIndex, event.currentIndex);
  }

}
