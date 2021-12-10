import { AddContactComponent } from '../add-contact/add-contact.component';
import { ContactsService } from '../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';

import { MatDialog } from '@angular/material/dialog';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { DeleteContactComponent } from '../delete-contact/delete-contact.component';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[];
  filteredContacts: Contact[];

  constructor(
    private contactService: ContactsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((contact) => {
      this.filteredContacts = this.contacts = contact as Contact[];
    });
  }

  addToFavorites(contact: Contact) {
    contact.isFavourite = !contact.isFavourite;
    this.contactService.updateContact(contact.id, contact);
  }

  openDeleteDialog(contact) {
    this.dialog.open(DeleteContactComponent, {
      data: {
        contact: contact,
      },
    });
  }

  editContact(contact: Contact) {
    this.dialog.open(EditContactComponent, {
      data: {
        contact: contact,
      },
    });
  }

  addContact() {
    this.dialog.open(AddContactComponent);
  }

  searchContact(value) {
    this.filteredContacts = value
      ? this.contacts.filter(
          (contact) =>
            contact.lastName.toLowerCase().includes(value.toLowerCase()) ||
            contact.firstName.toLowerCase().includes(value.toLowerCase()) ||
            contact.email.toLowerCase().includes(value.toLowerCase()) ||
            contact.phoneNo.toString().includes(value.toLowerCase())
        )
      : this.contacts;
  }
}
