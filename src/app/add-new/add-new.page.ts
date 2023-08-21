import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { crudService } from '../service/crud.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.page.html',
  styleUrls: ['./add-new.page.scss'],
})

export class AddNewPage implements OnInit {
  bookingForm: FormGroup;

  constructor(
    private aptService: crudService,
    private router: Router,
    public fb: FormBuilder) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      title: [''],
      date: [''],
      description: [''],
    });
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      return this.aptService
        .createBooking(this.bookingForm.value)
        .then((res) => {
          console.log(res);
          this.bookingForm.reset();
          this.router.navigate(['/home']);
        })
        .catch((error) => console.log(error));
    }
  }

}
