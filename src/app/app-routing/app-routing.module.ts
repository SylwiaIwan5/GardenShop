import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from '../main-content/articles/article-list/article-list.component';
import { AddComponent } from '../main-content/add/add.component';
import { UsComponent } from '../main-content/us/us.component';

const routes:Routes = [
  {path: "", redirectTo: '/articles', pathMatch: 'full'},
  {path: "articles", component: ArticleListComponent},
  {path: "add", component: AddComponent},
  {path: "us", component: UsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
