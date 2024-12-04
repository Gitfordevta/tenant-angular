import { CommonModule } from '@angular/common'; // Import CommonModule
import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  Form,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { ThemePalette } from '@angular/material/core';

interface Tenant {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tenants',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    NgxMatFileInputModule,
    CommonModule, // Add CommonModule to imports
  ],
  templateUrl: './tenants.component.html',
  styleUrl: './tenants.component.scss',
})
export class TenantsComponent {
  tenantTypeOptions: Tenant[] = [
    { value: '', viewValue: '--Select--' },
    { value: 'family', viewValue: 'Family' },
    { value: 'bachelor', viewValue: 'Bachelor' },
  ];
  selectedType = this.tenantTypeOptions[0].value;

  floor: Tenant[] = [
    { value: '', viewValue: '--Select--' },
    { value: 'ground-left', viewValue: 'Ground Left' },
    { value: 'ground-right', viewValue: 'Ground Right' },
    { value: 'first-left', viewValue: 'First left' },
    { value: 'first-right', viewValue: 'First Right' },
    { value: 'second-left', viewValue: 'Second left' },
    { value: 'second-right', viewValue: 'Second Right' },
  ];
  selectedFloor = this.floor[0].value;

  color: ThemePalette = 'primary';
  disabled: boolean = false;
  multiple: boolean = false;
  accept: string;

  tenantForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    tenantType: new FormControl('', [Validators.required]),
    members: new FormControl('', [Validators.required, Validators.min(1)]),
    floor: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/),
    ]),
  });

  // fileControl: FormControl;
  get tf() {
    return this.tenantForm.controls;
  }
  onSubmit(): void {
    if (this.tenantForm.valid) {
      console.log('Form Submitted!', this.tenantForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }
}
