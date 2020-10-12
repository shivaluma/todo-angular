import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;
  
  constructor() { }

  ngOnInit(): void {
  }

  isExpand = false;

  changeExpand() {
    this.isExpand = !this.isExpand;
  }

  get availableStatuses() {
    switch (this.item.status) {
      case "todo" : return ['todo','in-progress', 'archived']
      case "in-progress" : return ['in-progress','done']
      case "done" : return ['done','archived']
      default : return ['archived']
    }
  }

}
