import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

/**
 * Generated class for the RestuiFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'restui-form',
  templateUrl: 'restui-form.html'
})
export class RestuiFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    console.log('Hello RestuiFormComponent Component');
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: '',
    });
  }
}
