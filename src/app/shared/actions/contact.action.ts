import { Contact } from '../models/contact.model';

export class AddContact {
  static readonly type = '[CONTACTS] Add contact';

  constructor(public payload: Contact) {}
}
export class RemoveContact {
  static readonly type = '[CONTACTS] Remove contact';

  constructor(public payload: string) {}
}

export class getContactById {
  static readonly type = '[CONTACTS] Get contact by id';

  constructor(public payload: string) {}
}

export class EditContact {
  static readonly type = '[CONTACTS] Edit contact';
  constructor(public payload: { contact: any; editedContact: any }) {}
}
