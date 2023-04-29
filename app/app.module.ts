import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPostsComponent } from 'src/app/components/list-posts/list-posts.component';
import { FormsModule } from '@angular/forms';
import { PostDetailComponent } from 'src/app/components/post-detail/post-detail.component';
import { LoginPageComponent } from 'src/app/components/login-page/login-page.component';
import { RegisterPageComponent } from 'src/app/components/register-page/register-page.component';



@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    PostDetailComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }