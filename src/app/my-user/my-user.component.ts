import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { HttpClient } from '@angular/common/http';
import { DataMyUser } from '../login/auth-request';

@Component({
  selector: 'app-my-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-user.component.html',
  styleUrl: './my-user.component.css'
})
export class MyUserComponent implements OnInit{

  dataMyUser: DataMyUser[] = [];

  constructor(
    private loginService: LoginService,
    private http: HttpClient,
  ){
    this.dataMyUser = [];
  }

  ngOnInit(): void {
    this.getAllMyUserData();
  }

  getAllMyUserData(): void{
    this.loginService.getAllMyUsers().subscribe(response => {
      if(Array.isArray(response)){
        this.dataMyUser = response;
        console.log(response);
      }else {
        this.dataMyUser = [response];
      }
    })
  }

}
