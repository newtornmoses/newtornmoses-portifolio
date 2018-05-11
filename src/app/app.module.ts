import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AnimationDirective } from './animation.directive';
import { HiremeDirective } from './hireme.directive';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AnimationDirective,
    HiremeDirective
  ],
  imports: [
    BrowserModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
