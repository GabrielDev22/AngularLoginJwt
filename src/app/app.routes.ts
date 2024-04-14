import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlbumnsComponent } from './albumns/albumns.component';
import { TodosComponent } from './todos/todos.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { MyUserComponent } from './my-user/my-user.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard} from './auth-guard.component';

export const routes: Routes = [
    {path: '', component: LoginComponent, pathMatch: 'full',},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'albums', component: AlbumnsComponent, canActivate: [AuthGuard]},
    {path: 'todos', component: TodosComponent, canActivate: [AuthGuard]},
    {path: 'usuarios', component: UsuarioListComponent, canActivate: [AuthGuard]},
    {path: 'posts', component: PostListComponent, canActivate: [AuthGuard]},
    {path: 'photos', component: PhotosListComponent, canActivate: [AuthGuard]},
    {path: 'myUser', component: MyUserComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
