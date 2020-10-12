import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {


  newItemTitle = "";
  newItemDesc = "";
  constructor(private todoDataService : TodoDataService) { }

  ngOnInit(): void {
  }


  addNewItem() {
    this.todoDataService.add(this.newItemTitle, this.newItemDesc);
  }
}
