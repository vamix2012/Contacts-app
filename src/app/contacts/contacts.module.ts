import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { FavouriteContactsComponent } from './components/favourite-contacts/favourite-contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { AddToFavContactComponent } from './components/add-to-fav-contact/add-to-fav-contact.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IsFavouriteComponent } from './components/is-favourite/is-favourite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';

const maskConfig: Partial<IConfig> = {
  validation: true,
};

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
    IsFavouriteComponent,
    DeleteContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatProgressBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
})
export class ContactsModule {}
