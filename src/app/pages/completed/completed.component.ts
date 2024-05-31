import { Component } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { ToDoSerService } from '../../Service/to-do-ser.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {

  toDo: ToDo[] = []

  constructor(private toDoSvc : ToDoSerService){}


  ngOnInit(): void {
   this.toDo = this.toDoSvc.getCompletedTodos()
  }


 

}
