import { Component, OnInit} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  menuOption: string = '';
  isLoggedIn: boolean = false;

  constructor(
    private loginService: LoginService
  ){}

  ngOnInit(): void {
    this.loginService.isLoggedIn().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    })
  }
  
  onOption(menuOption: string){
    this.menuOption = menuOption
  }

  logout(): void{
    this.loginService.logout();
  }

}
