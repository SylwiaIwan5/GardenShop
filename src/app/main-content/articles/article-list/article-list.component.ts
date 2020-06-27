import { Component, OnInit } from '@angular/core';
import { Article } from './article/article';
import { ArticlesService } from '../articles-service/articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articlesList: Article[];
  
  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.getArticles().subscribe(articlesList => {
      console.log('get list of articles');
      this.articlesList = articlesList;
    })
  }
}