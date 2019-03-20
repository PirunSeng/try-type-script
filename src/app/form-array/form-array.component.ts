import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  userForm = new FormGroup({
    users: new FormArray([
      new FormControl('Nico'),
      new FormControl('Komsot'),
      new FormControl()
    ])
  });

  get users(): FormArray {
    return this.userForm.get('users') as FormArray;
  }
  addUserField() {
    this.users.push(new FormControl());
  }
  deleteUserField(index: number){
    this.users.removeAt(index);
  }
  onFormSubmit(){
    console.log(this.users.value); // Gives FormArray data
    console.log(this.userForm.value); // Gives complete form data
    // iterate FormArray
    for(let i = 0; i < this.users.length; i++){
      console.log(this.users.at(i).value);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
