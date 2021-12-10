import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddContact } from '../../actions/contact.action';
import { Contact } from '../../models/contact.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  loading: boolean = false;
  addContactForm!: FormGroup;
  contact!: Contact;
  clicked: boolean = false;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  addContact() {
    this.loading = true;
    setTimeout(() => {
      this.contact.id = uuidv4();
      this.store.dispatch(new AddContact(this.contact));
      this.addContactForm.reset();
      this.loading = false;
      this.dialog.closeAll();
    }, 1500);
  }

  ngOnInit(): void {
    const emailRegexPattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    this.addContactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNo: ['', [Validators.required, Validators.minLength(9)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(emailRegexPattern),
        ],
      ],
      isFavorite: false,
      id: '',
    });
    this.addContactForm.valueChanges.subscribe((res) => {
      this.contact = res;
    });
  }

  getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Please enter an email address';
    }
    if (this.email?.hasError('pattern')) {
      return 'Incomplete email address';
    }
    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }
  getFirstNameErrorMessage() {
    if (this.firstName?.hasError('required')) return 'Please enter a name';
    return this.firstName?.hasError('firstName') ? 'Not a valid name' : '';
  }

  getLastNameErrorMessage() {
    if (this.lastName?.hasError('requiered')) return 'Please enter a name';
    return this.lastName?.hasError('lastName') ? 'Not a valid name' : '';
  }

  getPhoneErrorMessage() {
    if (this.phoneNo?.hasError('required')) {
      return 'Please enter a phone number';
    }
    if (this.phoneNo?.hasError('minlength')) {
      return '9 Characters requiered';
    }
    return this.phoneNo?.hasError('phoneNo') ? 'Not a valid phone number' : '';
  }

  get email() {
    return this.addContactForm.get('email');
  }
  get firstName() {
    return this.addContactForm.get('firstName');
  }
  get lastName() {
    return this.addContactForm.get('lastName');
  }
  get phoneNo() {
    return this.addContactForm.get('phoneNo');
  }
}
