import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
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
  ],
  templateUrl: './tenants.component.html',
  styleUrl: './tenants.component.scss',
})
export class TenantsComponent {
  tenantForm: FormGroup;

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

  fileControl: FormControl;

  //validations
  constructor(private fb: FormBuilder) {
    this.tenantForm = this.fb.group({
      name: ['', Validators.required],
      tenantType: ['', Validators.required],
      mobile: [
        '',
        [Validators.required, Validators.pattern('^[6-9]\\d{9}$')], // Indian mobile number pattern
      ],
    });
  }

  get name() {
    return this.tenantForm.get('name');
  }

  get tenantType() {
    return this.tenantForm.get('tenantType');
  }

  get mobile() {
    return this.tenantForm.get('mobile');
  }

  onSubmit() {
    if (this.tenantForm.valid) {
      console.log('Form Submitted:', this.tenantForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
