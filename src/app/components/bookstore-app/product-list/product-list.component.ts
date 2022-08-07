import { Component, OnInit, Output } from '@angular/core';
import { Character } from './model/Character';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'spa-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Output()
  livros!:any;
  bookService:BookService;

  constructor(private bookServiceParam:BookService) {
    this.bookService = bookServiceParam;
   }

  ngOnInit(): void {
    this.livros = this.bookService.getBook().subscribe((data => {
      this.livros = data.results;
      console.log(this.livros)
    }))
  }

}
