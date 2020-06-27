import { Injectable } from '@angular/core';
import { Article } from '../article-list/article/article';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private articlesList: Article[];

  constructor() {
    this.articlesList = [
      {id: 1, name: "Wiadro", price: 30, amount: 57},
      {id: 2, name: "Grabie", price: 12, amount: 3},
      {id: 3, name: "Tulipan", price: 5, amount: 200},
      {id: 4, name: "Lilia", price: 7, amount: 54},
      {id: 5, name: "Róża", price: 11, amount: 0}
    ]
  }

  getArticles() : Observable<Article[]> {
    return of(this.articlesList);
  }

}
