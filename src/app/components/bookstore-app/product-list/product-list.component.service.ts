import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http" 

import { Book} from "./model/Book";

@Injectable()

export class BookService{
    private url = "https://rickandmortyapi.com/api/character";

    httpOptions={
        Headers: new HttpHeaders({'content-type':'application/json'})
    }

    constructor(private http:HttpClient){}

    getBook(){
        return this.http.get<any>(this.url)
    }
}