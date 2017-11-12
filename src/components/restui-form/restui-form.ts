import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RequestItem} from "../../data/request-item.data";

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
    this.form = this.fb.group(new RequestItem());
  }
}
