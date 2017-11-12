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

  addQuery() {
    this.queries.push(this.fb.group(new QueryItem()));
  }

  get queries(): FormArray {
    return this.form.get('queries') as FormArray;
  };

  resetQueries(queries: QueryItem[]) {
    const queryFGs = [];
    const queryFormArray = this.fb.array(queryFGs);
    this.form.setControl('queries', queryFormArray);
  }

  createForm() {
    this.form = this.fb.group({
      hostname: ['', Validators.required],
      path: ['', Validators.required],
      queries: this.fb.array([]),
      headers: this.fb.array([]),
      body: ['', Validators.required]
    });
  }
}
