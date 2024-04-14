import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioData } from '../login/auth-request';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css'
})
export class UsuarioListComponent implements OnInit {

  usuarioData: UsuarioData[] = [];

  constructor(
    private loginService: LoginService,
    private http: HttpClient
  ){
    this.usuarioData = [];
  }

  ngOnInit(): void {
    this.getAllUsuarioList();
  }

  getAllUsuarioList(): void {
    this.loginService.getAllUserList().subscribe(response => {
      if(Array.isArray(response)){
        this.usuarioData = response;
        console.log(response);
      }else {
        this.usuarioData = [response];
      }
    })
  }

}
