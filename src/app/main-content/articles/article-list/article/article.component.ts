import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() id;
  @Input() name;
  @Input() price;
  @Input() amount;

  constructor() { }

  ngOnInit() {
  }

  delete(): void {
    this.amount = 0;
  }

  onMinus(): void {
    if (this.amount > 0) {
    this.amount = this.amount - 1;
    }
  }

  onPlus(): void {
    this.amount = this.amount + 1;
  }

}