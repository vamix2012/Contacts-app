import { EditContact } from './../actions/contact.action';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Contact } from './../models/contact.model';
import { AddContact, RemoveContact } from '../actions/contact.action';
import { Injectable } from '@angular/core';
import { patch, updateItem } from '@ngxs/store/operators';

export class ContactStateModel {
  contacts!: Contact[];
}

@State<ContactStateModel>({
  name: 'contacts',
  defaults: {
    contacts: [
      {
        name: 'Johny',
        phoneNo: 0o071237473,
        id: 'rrerf-er565dfgsgsdfg',
        email: 'email@gmail.com',
      },
      {
        name: 'Johny2',
        phoneNo: 0o071237473,
        id: 'rrerf-er565hfghdrtg',
        email: 'email@gmail.com',
      },
      {
        name: 'Johny3',
        phoneNo: 0o071237473,
        id: 'rrerf-er565',
        email: 'email@gmail.com',
      },
      {
        name: 'Johny4',
        phoneNo: 0o071237473,
        id: 'rrerf-er565ujfhn',
        email: 'email@gmail.com',
      },
      {
        name: 'Johny5',
        phoneNo: 0o071237473,
        id: 'rrerf-er565xyc',
        email: 'email@gmail.com',
      },
      {
        name: 'Johny6',
        phoneNo: 0o071237473,
        id: 'rrerf-er565ghikhjl',
        email: 'email@gmail.com',
      },
      {
        name: 'Johny7',
        phoneNo: 0o071237473,
        id: 'rrerf-er565sdf',
        email: 'email@gmail.com',
      },
    ],
  },
})
@Injectable()
export class ContactState {
  @Selector()
  static getContacts(state: ContactStateModel) {
    return state.contacts;
  }

  @Selector()
  static getItemByIdFn(state: ContactStateModel) {
    return (id: string) => state.contacts.find((el) => el.id === id);
  }

  @Action(AddContact)
  add(
    { getState, patchState }: StateContext<ContactStateModel>,
    { payload }: AddContact
  ) {
    const state = getState();
    patchState({
      contacts: [...state.contacts, payload],
    });
  }

  @Action(RemoveContact)
  remove(
    { getState, patchState }: StateContext<ContactStateModel>,
    { payload }: RemoveContact
  ) {
    const state = getState();
    patchState({
      contacts: state.contacts.filter((a) => a.id != payload),
    });
  }

  @Action(EditContact)
  editContact(ctx: StateContext<ContactStateModel>, { payload }: EditContact) {
    ctx.setState(
      patch({
        contacts: updateItem<any>(payload.contact, payload.editedContact),
      })
    );
  }
}
