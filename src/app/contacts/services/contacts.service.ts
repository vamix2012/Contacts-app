import { Contact } from './../models/contact.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { RemoveContact, UpdateContact } from '../actions/contact.action';
import { ContactState } from '../state/contact.state';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private store: Store) {}

  getAllContacts() {
    return this.store.select((state) => state.contacts.contacts);
  }

  getContactById(id: string) {
    return this.store
      .select(ContactState.getItemByIdFn)
      .pipe(map((filterFn) => filterFn(id)));
  }

  updateContact(id: string, newContact: Contact) {
    return this.store.dispatch(
      new UpdateContact({
        contact: this.getContactById(id),
        editedContact: newContact,
      })
    );
  }

  delContact(id: string) {
    return this.store.dispatch(new RemoveContact(id));
  }
}
