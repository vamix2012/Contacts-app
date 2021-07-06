import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { RemoveContact } from '../actions/contact.action';
import { ContactState } from '../state/contact.state';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private store: Store) {}

  getContacts() {
    return this.store.select((state) => state.contacts.contacts);
  }

  getUserById(id: string) {
    return this.store
      .select(ContactState.getItemByIdFn)
      .pipe(map((filterFn) => filterFn(id)));
  }

  delContact(id: string) {
    return this.store.dispatch(new RemoveContact(id));
  }
}
