import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { FavouriteContactsComponent } from './components/favourite-contacts/favourite-contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { AddToFavContactComponent } from './components/add-to-fav-contact/add-to-fav-contact.component';
import { RouterModule, Routes } from '@angular/router';
import { IsFavouriteComponent } from './components/is-favourite/is-favourite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';

const maskConfig: Partial<IConfig> = {
  validation: true,
};

const routes: Routes = [
  { path: '', component: ContactsListComponent },
  {
    path: 'list',
    component: ContactsListComponent,
  },
  {
    path: 'favourites',
    component: FavouriteContactsComponent,
  },
];

@NgModule({
  declarations: [
    ContactsListComponent,
    FavouriteContactsComponent,
    AddContactComponent,
    EditContactComponent,
    AddToFavContactComponent,
    IsFavouriteComponent,
    DeleteContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    MaterialModule,
  ],
})
export class ContactsModule {}
