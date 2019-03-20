import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormControlDemoComponent implements OnInit {
  usrNameChanges: string;
  usrNameStatus: string;

  userForm = new FormGroup({
    name: new FormControl('Pirun', [Validators.required, Validators.maxLength(15)]),
    age: new FormControl(20, Validators.required),
    city: new FormControl(),
    country: new FormControl({value: 'Cambodia', disabled: false})
    // ,
    // married: new FormControl(true)
  });

  // setNameValue(){
  //   this.name.setValue('Donald Trump');
  //   console.log('Name: ' + this.name.value);
  //   console.log('Validation Status: ' + this.name.status);
  // }
  // setResetName(){
  //   this.name.reset();
  // }
  // changeValue(){
  //   console.log(this.married.value);
  //   this.married = new FormControl(!this.married.value);
  // }

  get userName(): any {
    return this.userForm.get('name');
  }

  onFormSubmit(){
    console.log('Name: ' + this.userForm.get('name').value);
    console.log('Age: ' + this.userForm.get('age').value);
    console.log('City: ' + this.userForm.get('city').value);
    console.log('Country: ' + this.userForm.get('country').value);
  }

  setDefaultValue(){
    this.userForm.setValue({name: 'Rainy', age: 20, city: '', country: ''});
  }

  constructor() { }

  ngOnInit() {
  }

}
