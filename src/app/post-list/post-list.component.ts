import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { HttpClient } from '@angular/common/http';
import { PostData } from '../login/auth-request';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit{

  dataPosts: PostData[] = [];

  constructor(
    private loginService: LoginService,
    private http: HttpClient
  ){
    this.dataPosts = [];
  }

  ngOnInit(): void {
    this.getPostsAllList();
  }


  getPostsAllList():void {
    this.loginService.getAllPostsList().subscribe(response => {
      if(Array.isArray(response)){
        this.dataPosts = response;
        console.log(response);
      }else {
        this.dataPosts = [response];
      }
    })
  }

}
