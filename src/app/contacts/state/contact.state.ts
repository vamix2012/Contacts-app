import { UpdateContact } from './../actions/contact.action';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Contact } from '../models/contact.model';
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
        firstName: 'Johny',
        lastName: 'Bravo',
        phoneNo: 712374735,
        id: 'rrerf-er565dfgsgsdfg1',
        email: 'email1@gmail.com',
        isFavourite: false,
      },
      {
        firstName: 'Alex',
        lastName: 'Gordon',
        phoneNo: 712374735,
        id: 'rrerf-er565dfgsgsdfg2',
        email: 'email2@gmail.com',
        isFavourite: true,
      },
      {
        firstName: 'Johny',
        lastName: 'Bravo',
        phoneNo: 712374735,
        id: 'rrerf-er565dfgsgsdfg3',
        email: 'email3@gmail.com',
        isFavourite: false,
      },
      {
        firstName: 'Edi',
        lastName: 'Kui',
        phoneNo: 712374735,
        id: 'rrerf-er565dfgsgsdfg4',
        email: 'email4@gmail.com',
        isFavourite: true,
      },
      {
        firstName: 'Adi',
        lastName: 'Moruz',
        phoneNo: 712374735,
        id: 'rrerf-er565dfgsgsdfg5',
        email: 'email5@gmail.com',
        isFavourite: true,
      },
      {
        firstName: 'Ionata',
        lastName: 'Bravosu',
        phoneNo: 712374735,
        id: 'rrerf-er565dfgsgsdfg6',
        email: 'email6@gmail.com',
        isFavourite: false,
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

  @Action(UpdateContact)
  updateContact(
    ctx: StateContext<ContactStateModel>,
    { payload }: UpdateContact
  ) {
    ctx.setState(
      patch({
        contacts: updateItem<any>(payload.contact, payload.editedContact),
      })
    );
  }
}
