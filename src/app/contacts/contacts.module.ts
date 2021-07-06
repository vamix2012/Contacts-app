import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { FavouriteContactsComponent } from './favourite-contacts/favourite-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AddToFavContactComponent } from './add-to-fav-contact/add-to-fav-contact.component';
import { IsFavContactComponent } from './is-fav-contact/is-fav-contact.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'list', component: ContactsListComponent },
  { path: 'favourites', component: FavouriteContactsComponent },
];

@NgModule({
  declarations: [
    ContactsListComponent,
    FavouriteContactsComponent,
    AddContactComponent,
    EditContactComponent,
    AddToFavContactComponent,
    IsFavContactComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ContactsModule {}
