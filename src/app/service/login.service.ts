import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {LoginRequest } from '../login/auth-request';
import { Observable, tap,of } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { envirotment } from '../../environments/environments';

const APIURL = envirotment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private accessToken: string = '';
  private baseUrl = `${APIURL}/auth`;
  private urlAlbumns = `${APIURL}/albumns`;
  private urlTodos = `${APIURL}/todos`;
  private urlUserList = `${APIURL}/usuario`;
  private urlPostList = `${APIURL}/posts`;
  private urlPhotosList = `${APIURL}/photos`;
  private urlMyUserList = `${APIURL}/myUser`;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    private router: Router
  ) { }

    loginUser(loginRequest: LoginRequest): Observable<any>{
      return this.http.post<any>(`${this.baseUrl}/login`, loginRequest).pipe(
        tap(response => {
          if(response && response.jwt){
            localStorage.setItem('jwt', response.jwt)
            this.router.navigateByUrl('/albumns');
          }
        })
      );
    }

    isLoggedIn(): Observable<boolean>{
      if(isPlatformBrowser(this.platformId)){
        const jwt = localStorage.getItem('jwt');
        if(jwt){
          return of(true);
        }else{
          return of(false);
        }
      }else {
        return of(false);
      }
    }

    logout():void{
      localStorage.removeItem('jwt');
      this.router.navigateByUrl('/login');
    }

    getAccessToken(): string{
      return this.accessToken;
    }

    getAllAlbumns(): Observable<any>{
      if(isPlatformBrowser(this.platformId)){
        const params = new HttpParams().set('limit', '100');
        const jwt = localStorage.getItem('jwt');
        if(jwt){
          const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
          return this.http.get(`${this.urlAlbumns}/getAll`, {params, headers});
        }else {
          return this.http.get(`${this.urlAlbumns}/getAll`, {params});
        }
      }else {
        return of({error: 'No se puede acceder a localStorage en el servidor.'});
      }
    }

    getAllTodos(): Observable<any>{
      if(isPlatformBrowser(this.platformId)){
        const jwt = localStorage.getItem('jwt');
        if(jwt){
          const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
          return this.http.get(`${this.urlTodos}/getAll`, {headers})
        }else{
          return this.http.get(`${this.urlTodos}/getAll`);
        }
      }else {
        return of({error: 'No se puede acceder a localStorage en el servidor.'})
      }
    }

    getAllUserList(): Observable<any>{
      if(isPlatformBrowser(this.platformId)){
        const jwt = localStorage.getItem('jwt');
        if(jwt){
          const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
          return this.http.get(`${this.urlUserList}/getAll`, {headers})
        }else {
          return this.http.get(`${this.urlUserList}/getAll`);
        }
      }else {
        return of({error: 'No se puede acceder a localStorage en el servidor.'})
      }
    }

    getAllPostsList(): Observable<any>{
      if(isPlatformBrowser(this.platformId)){
        const jwt = localStorage.getItem('jwt');
        if(jwt){
          const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
          return this.http.get(`${this.urlPostList}/getAll`, {headers})
        }else {
          return this.http.get(`${this.urlPostList}/getAll`);
        }
      }else {
        return of({error: 'No se puede acceder a localStorage en el servidor.'})
      }
    }

    getAllPhotosList(): Observable<any>{
      if(isPlatformBrowser(this.platformId)){
        const jwt = localStorage.getItem('jwt');
        if(jwt){
          const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
          return this.http.get(`${this.urlPhotosList}/getAll`, {headers})
        }else {
          return this.http.get(`${this.urlPhotosList}/getAll`);
        }
      }else {
        return of({error: 'No se puede acceder a localStorage en el servidor.'})
      }
    }

    getAllMyUsers(): Observable<any>{
      if(isPlatformBrowser(this.platformId)){
        const jwt = localStorage.getItem('jwt');
        if(jwt){
          const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
          return this.http.get(`${this.urlMyUserList}/getAll`, {headers})
        }else {
          return this.http.get(`${this.urlMyUserList}/getAll`);
        }
      }else {
        return of({error: 'No se puede acceder a localStorage en el servidor.'})
      }
    }



}
