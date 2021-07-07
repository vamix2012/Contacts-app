import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-add-to-fav-contact',
  templateUrl: './add-to-fav-contact.component.html',
  styleUrls: ['./add-to-fav-contact.component.scss'],
})
export class AddToFavContactComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  loading: boolean = false;
  clicked: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactsService: ContactsService,
    public dialog: MatDialog
  ) {
    this.contacts$ = this.contactsService.getAllContacts();
  }

  ngOnInit(): void {}
  addToFavorites(contact: Contact) {
    this.loading = true;
    this.clicked = true;
    setTimeout(() => {
      contact.isFavourite = !contact.isFavourite;
      this.contactsService.updateContact(contact.id, contact);
      this.loading = false;
      this.clicked = false;
    }, 1500);
  }
}
