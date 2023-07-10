import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { EditFieldComponent } from './edit-field/edit-field.component';

@NgModule({
  declarations: [AppComponent, ModalComponent, TodoItemComponent, EditFieldComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    A11yModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
