import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { TodoDataService } from './todo-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private todoDataService: TodoDataService) {}
  @HostListener('window:unload')
    private onUnload(): void {
      this.todoDataService.saveData()
    }
  ngOnInit(): void {
    console.log("init")
    this.todoDataService.loadData()
  }

  get todos() : TodoItem[] {
      return this.todoDataService.get()
  }
  
}
