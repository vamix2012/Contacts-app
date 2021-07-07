import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-is-favourite',
  templateUrl: './is-favourite.component.html',
  styleUrls: ['./is-favourite.component.scss'],
})
export class IsFavouriteComponent implements OnInit {
  @Input() isFavourite: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
