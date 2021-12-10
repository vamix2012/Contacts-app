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
    contacts: [],
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
