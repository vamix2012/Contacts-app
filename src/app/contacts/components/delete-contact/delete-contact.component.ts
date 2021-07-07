import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.scss'],
})
export class DeleteContactComponent implements OnInit {
  contactId: string;
  loading: boolean = false;
  clicked: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactsService: ContactsService,
    private dialog: MatDialog
  ) {
    this.contactId = data.id;
  }

  ngOnInit(): void {}

  deleteContact() {
    this.loading = true;

    setTimeout(() => {
      this.contactsService.delContact(this.contactId);
      this.loading = false;
      this.dialog.closeAll();
    }, 1500);
  }
}
