import { Injectable } from '@angular/core';


const key = "todoItems-nvt"

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor() { }

  todoItems: TodoItem[] = [];

  get() {
    return this.todoItems
  }

  add(title: string, description: string) {
    
      this.todoItems = [{title, description, status: "todo"}, ...this.todoItems]
      
  }

  async loadData() {
    const data = await JSON.parse(localStorage.getItem(key)) as Array<TodoItem> || []
    this.todoItems = [...data];
  }

  saveData() {
    localStorage.setItem(key, JSON.stringify(this.todoItems))
  }

  updateStatus() {

  }
}
