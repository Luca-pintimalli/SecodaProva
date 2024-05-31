import { Injectable } from '@angular/core';
import { ToDoSerService } from './to-do-ser.service';
import { UserService } from './user.service';
import { ToDo } from '../Models/to-do';
import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombinedService {

  private toDos : ToDo[] = []
  private user : User[] = []



  constructor(private toDoSvc: ToDoSerService, private userSvc:UserService) { }


  
}
