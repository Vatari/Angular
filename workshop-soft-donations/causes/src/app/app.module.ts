import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';

@NgModule({
  declarations: [AppComponent, LeftComponent, RightComponent],
  imports: [BrowserModule, CoreModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
