import { Contact } from '../../contacts/models/contact.model';

export class AddContact {
  static readonly type = '[CONTACTS] Add contact';

  constructor(public payload: Contact) {}
}
export class RemoveContact {
  static readonly type = '[CONTACTS] Remove contact';

  constructor(public payload: string) {}
}

export class UpdateContact {
  static readonly type = '[CONTACTS] Update contact';
  constructor(public payload: { contact: any; editedContact: any }) {}
}

export class LoadingAction {
  static readonly type = '[LOADING] Loading in progress';
  constructor(public payload: { loading: boolean }) {}
}
