import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QueryItem} from "../../data/query-item.data";
import {HeaderItem} from "../../data/header-item.data";

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

  addQuery(): void {
    this.queries.push(this.fb.group(new QueryItem()));
  }

  addHeader(): void {
    this.headers.push(this.fb.group(new HeaderItem()));
  }

  get queries(): FormArray {
    return this.form.get('queries') as FormArray;
  };

  get headers(): FormArray {
    return this.form.get('headers') as FormArray;
  }

  resetQueries(): void {
    const queryFGs = [];
    const queryFormArray = this.fb.array(queryFGs);
    this.form.setControl('queries', queryFormArray);
  }

  removeQuery(idx: number): void {
    this.queries.controls.splice(idx, 1);
  }

  removeHeader(idx: number): void {
    this.headers.controls.splice(idx, 1);
  }

  createForm(): void {
    this.form = this.fb.group({
      hostname: ['', Validators.required],
      path: ['', Validators.required],
      queries: this.fb.array([]),
      headers: this.fb.array([]),
      body: ['', Validators.required]
    });
  }
}
