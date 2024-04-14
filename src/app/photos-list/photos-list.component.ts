import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { HttpClient } from '@angular/common/http';
import { DataPhotos } from '../login/auth-request';

@Component({
  selector: 'app-photos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos-list.component.html',
  styleUrl: './photos-list.component.css'
})
export class PhotosListComponent implements OnInit{

  dataPhotos: DataPhotos[] = [];
  spinnerData = false;

  constructor(
    private loginService: LoginService,
    private http: HttpClient
  ){
    this.dataPhotos = [];
  }

  ngOnInit(): void {
    this.getAllPhotosList();
  }

  getAllPhotosList():void {
    this.spinnerData = true;
    this.loginService.getAllPhotosList().subscribe(response => {
      if(Array.isArray(response)){
        this.dataPhotos = response;
        this.spinnerData = false;
      }else{
        this.dataPhotos = [response];
      }
    })
  }

}
