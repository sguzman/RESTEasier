import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello RestuiFormComponent Component');
    this.text = 'Hello World';
  }

}
