import { Component } from '@angular/core';
import { ToDoSerService } from '../../Service/to-do-ser.service';
import { UserService } from '../../Service/user.service';
import { User } from '../../Models/user';
import { ToDo } from '../../Models/to-do';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  user: User[] = []
  toDo: ToDo[] = []
  combinedData: any[] = []


  constructor( private toDoSvc : ToDoSerService, private userSvc:UserService ){}

  ngOnInit(){
    this.toDoSvc.getToDo().subscribe(toDos => {
      this.userSvc.getUsers().subscribe(users => {
        this.combinedData = toDos.map(toDo => {
          return {
            ...toDo, 
            user: users.find(user => user.id === toDo.id)
          }
        })
      })
    })

  

  





}


  
}

  /* ngOnInit(){
    this.toDoSvc.getToDo().subscribe(toDo => {
      this.toDo.map(p => {
        this.userSvc.userArray.find(u => u.id == p.userId)
         
      })
    })
  */