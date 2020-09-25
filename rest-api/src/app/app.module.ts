import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatRadioModule, MatToolbarModule } from "@angular/material";
import { ListComponent } from './components/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
