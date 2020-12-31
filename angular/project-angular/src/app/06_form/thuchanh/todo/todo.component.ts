import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  student = {
    studentId: 'SV-0001',
    studentName: 'Nguyễn Văn A',
    studentAddress: 'huế'
  };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(createStudentForm: NgForm) {
    console.log(createStudentForm.value);
  }
}
