import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/Character';

@Component({
  selector: 'spa-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  livro!: Character;
  constructor() { }

  ngOnInit(): void {
  }

}
