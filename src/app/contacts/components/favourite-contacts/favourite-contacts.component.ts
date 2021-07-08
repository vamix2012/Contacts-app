import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ContactsService } from '../../services/contacts.service';
import { AddToFavContactComponent } from '../add-to-fav-contact/add-to-fav-contact.component';

@Component({
  selector: 'app-favourite-contacts',
  templateUrl: './favourite-contacts.component.html',
  styleUrls: ['./favourite-contacts.component.scss'],
})
export class FavouriteContactsComponent implements OnInit {
  contacts: Contact[];

  constructor(
    private contactService: ContactsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.contactService
      .getAllContacts()
      .subscribe((contact) => (this.contacts = contact as Contact[]));
  }

  addContactsToFav() {
    this.dialog.open(AddToFavContactComponent);
  }
}
