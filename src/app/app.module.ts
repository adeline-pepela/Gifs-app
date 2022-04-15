import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GiphyComponent } from './giphy/giphy.component';
import { SearchComponent } from './search/search.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
// import { HttpServiceService } from './http-service.service';
import { HttpClientModule } from '@angular/common/http';

// const routes:Routes = [
//   {path:'giphy', component:GiphyComponent},
//   { path:'notfound', component:NotfoundComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GiphyComponent,
    SearchComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
