import { AddContactComponent } from '../add-contact/add-contact.component';
import { ContactsService } from '../../services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { DeleteContactComponent } from '../delete-contact/delete-contact.component';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  contacts$!: Observable<Contact[]>;

  constructor(
    private contactService: ContactsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.contacts$ = this.contactService.getAllContacts();
  }

  addToFavorites(contact: Contact) {
    contact.isFavourite = !contact.isFavourite;
    this.contactService.updateContact(contact.id, contact);
  }

  openDeleteDialog(id: string) {
    this.dialog.open(DeleteContactComponent, {
      data: {
        id: id,
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
}
