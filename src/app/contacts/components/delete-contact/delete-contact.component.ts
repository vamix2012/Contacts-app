import { Contact } from './../../models/contact.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.scss'],
})
export class DeleteContactComponent implements OnInit {
  contact: Contact;
  loading: boolean = false;
  clicked: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactsService: ContactsService,
    private dialog: MatDialog
  ) {
    this.contact = data.contact;
  }

  ngOnInit(): void {}

  deleteContact() {
    this.loading = true;
    setTimeout(() => {
      this.contactsService.delContact(this.contact.id);
      this.loading = false;
      this.dialog.closeAll();
    }, 1500);
  }
}
