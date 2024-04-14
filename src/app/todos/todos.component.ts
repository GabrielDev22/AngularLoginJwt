import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { HttpClient } from '@angular/common/http';
import { TodosData } from '../login/auth-request';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todosData: TodosData[] = [];

  constructor(
    private loginService: LoginService,
    private http: HttpClient
  ){
    this.todosData = [];
  }

  ngOnInit(): void {
    this.todosGetAllApi();
  }

  todosGetAllApi(): void {
    this.loginService.getAllTodos().subscribe(response => {
      this.todosData = response;
      console.log(response);
    })
  }




}
