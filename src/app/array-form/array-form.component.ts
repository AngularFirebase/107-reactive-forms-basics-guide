import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss']
})
export class ArrayFormComponent implements OnInit {

  myForm: FormGroup;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    })

  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray
  }

  addPhone() {

    const phone = this.fb.group({ 
      area: [],
      prefix: [],
      line: [],
    })

    this.phoneForms.push(phone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i)
  }

}
