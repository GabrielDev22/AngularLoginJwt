import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { AlbumnsComponent } from '../albumns/albumns.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {

  username: string = '';
  password: string = '';

  constructor(
    private loginService: LoginService,
  ){}

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.loginService.loginUser({username: this.username, password: this.password}).subscribe(response => {
      console.log(response);
      return response;
    })
  }

  getAccessToken(): string | null{
    const sectionStorage = localStorage.getItem('jwt');
    return sectionStorage;
  }

	
}
