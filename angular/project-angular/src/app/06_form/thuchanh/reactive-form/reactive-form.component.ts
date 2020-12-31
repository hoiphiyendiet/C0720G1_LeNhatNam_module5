import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required, Validators.minLength(10)]),
    email: new FormControl('',[Validators.email, Validators.required]),
    gender: new FormControl(),
    isMarried: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(contactForm: FormGroup) {
    console.log(contactForm.value);
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }
}
