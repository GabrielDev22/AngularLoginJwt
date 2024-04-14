import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { AlbumnsData } from '../login/auth-request';

@Component({
  selector: 'app-albumns',
  standalone: true,
  imports: [LoginComponent, CommonModule],
  templateUrl: './albumns.component.html',
  styleUrl: './albumns.component.css'
})

export class AlbumnsComponent implements OnInit {

  albumnsData: AlbumnsData[] = [];

  constructor(
    private loginService: LoginService,
    private http: HttpClient
  ){
    this.albumnsData = [];
  }


  ngOnInit(): void {
    this.albumns();
  }

  albumns(): void{
      this.loginService.getAllAlbumns().subscribe(response => {
        this.albumnsData = response;
      })
  }





}
