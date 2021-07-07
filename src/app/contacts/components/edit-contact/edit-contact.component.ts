import { ContactsService } from './../../services/contacts.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../../models/contact.model';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  contact: Contact;
  loading: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactsService: ContactsService,
    public dialog: MatDialog
  ) {
    this.contact = data.contact;
  }

  ngOnInit(): void {}

  updateContact(id: string, contact: Contact) {
    this.loading = true;
    setTimeout(() => {
      this.contactsService.updateContact(id, contact);
      this.loading = false;
      this.dialog.closeAll();
    }, 1500);
  }
}
