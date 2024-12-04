import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule, // Add CommonModule to imports
  ],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  signInform = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.signInform.controls;
  }

  submit() {
    if (this.signInform.valid) {
      console.log('Form Submitted!', this.signInform.value);
    } else {
      console.log('Form is invalid!');
    }
  }
}
